import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { company } from '../src/content/company'

test('precision concept presents the maintenance message and verified contact destinations', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  await page.goto('/kirmizi-medikal/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Daha iyi bir deneyim için.')
  await expect(page.locator('html')).toHaveAttribute('lang', 'tr')
  const logo = page.getByRole('img', { name: 'Pay Medikal logosu' })
  await expect(logo).toBeVisible()
  await expect(logo).toHaveAttribute('src', '/images/pay-medikal-logo.jpeg')
  expect(await logo.evaluate((image: HTMLImageElement) => image.naturalWidth)).toBe(347)
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute('href', company.phone.href)
  if (company.email) await expect(page.locator('a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:' + company.email)
  const maps = new URL(await page.locator('.precision-address').getAttribute('href') as string)
  expect(maps.origin).toBe('https://www.google.com')
  expect(maps.searchParams.get('query')).toBe(company.address.mapQuery)
  await expect(page.locator('img[src*="precision-cross"]')).toBeVisible()
  expect(await page.locator('img[src*="precision-cross"]').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0)
  await page.evaluate(() => document.fonts.ready)
  await expect.poll(() => page.locator('h1').evaluate(el => Number(getComputedStyle(el).opacity))).toBe(1)
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(animation => animation.playState === 'running').length)).toBe(0)
  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(a11y.violations).toEqual([])
  expect(errors).toEqual([])
  await page.screenshot({ path: 'docs/screenshots/kirmizi-medikal-' + testInfo.project.name + '.png', fullPage: true })
})

test('precision concept remains usable across narrow, wide, landscape and reduced-motion layouts', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const [width, height] of [[320, 740], [375, 812], [768, 1024], [844, 390], [1024, 768], [1920, 1080]]) {
    await page.setViewportSize({ width, height })
    await page.goto('/kirmizi-medikal/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    for (const link of await page.locator('main a').all()) {
      const bounds = await link.boundingBox()
      expect(bounds).not.toBeNull()
      expect(bounds!.height).toBeGreaterThanOrEqual(44)
      expect(bounds!.width).toBeGreaterThanOrEqual(44)
    }
  }
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/kirmizi-medikal/')
  await page.addStyleTag({ content: 'p, address, strong, small, .precision-address-action { font-size: 200% !important; }' })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  expect(await page.evaluate(() => document.getAnimations().filter(animation => animation.playState === 'running').length)).toBe(0)
})

test('precision concept supports keyboard focus and works without JavaScript', async ({ browser, baseURL }) => {
  const interactiveContext = await browser.newContext()
  const interactivePage = await interactiveContext.newPage()
  await interactivePage.goto(baseURL + '/kirmizi-medikal/')
  await interactivePage.keyboard.press('Tab')
  await expect(interactivePage.locator('.precision-skip')).toBeFocused()
  await interactivePage.keyboard.press('Enter')
  await expect(interactivePage.locator('#precision-main')).toBeFocused()
  await interactiveContext.close()
  const staticContext = await browser.newContext({ javaScriptEnabled: false })
  const staticPage = await staticContext.newPage()
  await staticPage.goto(baseURL + '/kirmizi-medikal/')
  await expect(staticPage.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(staticPage.getByRole('img', { name: 'Pay Medikal logosu' })).toBeVisible()
  await expect(staticPage.locator('a[href^="tel:"]')).toBeVisible()
  await expect(staticPage.locator('a[href^="mailto:"]')).toBeVisible()
  await expect(staticPage.locator('.precision-address')).toBeVisible()
  await staticContext.close()
})

test('precision concept starts at the top after reload and history return while preserving anchor navigation', async ({ page }) => {
  await page.goto('/kirmizi-medikal/')
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0)

  await page.reload()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)

  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
  await page.goto('/')
  await page.goBack()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)

  await page.goto('/kirmizi-medikal/#precision-footer')
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0)
})
