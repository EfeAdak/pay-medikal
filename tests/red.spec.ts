import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { company } from '../src/content/company'

test('ruby crystal concept presents the maintenance message and verified contact destinations', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })

  await page.goto('/kirmizi/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Daha iyi bir deneyim için.')
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr')
  await expect(page.locator('.ruby-site')).toBeVisible()
  const logo = page.getByRole('img', { name: 'Pay Medikal logosu' })
  await expect(logo).toBeVisible()
  await expect(logo).toHaveAttribute('src', '/images/pay-medikal-logo.jpeg')
  expect(await logo.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(347)
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute('href', company.phone.href)
  const maps = new URL(await page.locator('.emerald-address').getAttribute('href') as string)
  expect(maps.origin).toBe('https://www.google.com')
  expect(maps.searchParams.get('query')).toBe(company.address.mapQuery)
  if (company.email) await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', `mailto:${company.email}`)
  else await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0)
  await expect(page.locator('img[src*="ruby-crystal"]')).toBeVisible()
  expect(await page.locator('img[src*="ruby-crystal"]').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0)
  await page.evaluate(() => document.fonts.ready)
  await expect.poll(() => page.locator('h1').evaluate(el => Number(getComputedStyle(el).opacity))).toBe(1)
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)

  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(a11y.violations).toEqual([])
  expect(errors).toEqual([])
  await page.screenshot({ path: `docs/screenshots/kirmizi-${testInfo.project.name}.png`, fullPage: true })
})

test('ruby crystal concept remains usable across narrow, wide and reduced-motion layouts', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const [width, height] of [[320, 740], [375, 812], [768, 1024], [1024, 768], [844, 390], [1920, 1080]]) {
    await page.setViewportSize({ width, height })
    await page.goto('/kirmizi/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    for (const link of await page.locator('main a').all()) {
      const bounds = await link.boundingBox()
      expect(bounds!.height).toBeGreaterThanOrEqual(44)
      expect(bounds!.width).toBeGreaterThanOrEqual(44)
    }
  }
  expect(await page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)
})

test('ruby crystal concept supports keyboard focus and works without JavaScript', async ({ browser, baseURL }) => {
  const interactiveContext = await browser.newContext()
  const interactivePage = await interactiveContext.newPage()
  await interactivePage.goto(baseURL + '/kirmizi/')
  await interactivePage.keyboard.press('Tab')
  await expect(interactivePage.locator('.emerald-skip')).toBeFocused()
  await interactivePage.keyboard.press('Enter')
  await expect(interactivePage.locator('#emerald-main')).toBeFocused()
  await interactiveContext.close()

  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(`${baseURL}/kirmizi/`)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.getByRole('img', { name: 'Pay Medikal logosu' })).toBeVisible()
  await expect(page.locator('a[href^="tel:"]')).toBeVisible()
  await page.getByRole('link', { name: 'İletişim bilgileri' }).click()
  await expect(page).toHaveURL(/#iletisim$/)
  await context.close()
})
