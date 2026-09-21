import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { company } from '../src/content/company'

test('maintenance content, contact destinations, assets and accessibility', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Daha iyi birdeneyim için.')
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr')
  await expect(page.getByText('Size daha iyi bir hizmet verebilmek')).toBeVisible()
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute('href', company.phone.href)
  const maps = new URL(await page.locator('.address-item').getAttribute('href') as string)
  expect(maps.origin).toBe('https://www.google.com')
  expect(maps.searchParams.get('query')).toBe(company.address.mapQuery)
  if (company.email) await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', `mailto:${company.email}`)
  else await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0)
  await expect.poll(() => page.locator('.artwork-inner img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true)
  await page.evaluate(() => document.fonts.ready)
  await expect.poll(() => page.locator('h1').evaluate(el => Number(getComputedStyle(el).opacity))).toBe(1)
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)
  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(a11y.violations).toEqual([])
  expect(errors).toEqual([])
  await page.screenshot({ path: `docs/screenshots/${testInfo.project.name}.png`, fullPage: true })
})

test('keyboard skip link and contact navigation', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'İçeriğe geç' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await page.keyboard.press('Tab')
  const contact = page.getByRole('link', { name: 'İletişime geçin' })
  await expect(contact).toBeFocused()
  expect(await contact.evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe('none')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#iletisim$/)
  await expect(page.locator('#iletisim')).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.locator('a[href^="tel:"]')).toBeFocused()
})

test('small screens, landscape, text enlargement and touch targets', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const [width, height] of [[320, 740], [375, 812], [768, 1024], [1024, 768], [844, 390], [1920, 1080]]) {
    await page.setViewportSize({ width, height })
    await page.goto('/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    for (const link of await page.locator('main a').all()) {
      const bounds = await link.boundingBox()
      expect(bounds!.height).toBeGreaterThanOrEqual(44)
      expect(bounds!.width).toBeGreaterThanOrEqual(44)
    }
  }
  await page.setViewportSize({ width: 375, height: 812 })
  await page.addStyleTag({ content: 'p, address, .contact-value, .contact-label, .contact-action, .contact-note { font-size: 200% !important; }' })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('reduced-motion preference leaves content static and legible', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await expect(page.locator('h1')).toBeVisible()
  expect(await page.locator('h1').evaluate(el => getComputedStyle(el).opacity)).toBe('1')
  expect(await page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)
  expect(await page.locator('html').evaluate(el => getComputedStyle(el).scrollBehavior)).toBe('auto')
})

test('built HTML works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(baseURL!)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('a[href^="tel:"]')).toBeVisible()
  await page.getByRole('link', { name: 'İletişime geçin' }).click()
  await expect(page).toHaveURL(/#iletisim$/)
  await context.close()
})
