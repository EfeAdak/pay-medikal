import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { company } from '../src/content/company'

test('brown concept presents the maintenance message and verified contact destinations', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })

  await page.goto('/kahve/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Aynı güven, yenileniyoruz.')
  await expect(page.getByText('Size daha iyi bir hizmet verebilmek')).toBeVisible()
  await expect(page.locator('a[href^="tel:"]')).toHaveAttribute('href', company.phone.href)
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(company.email ? 1 : 0)
  await expect.poll(() => page.locator('.brown-artwork img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true)
  await page.evaluate(() => document.fonts.ready)
  await expect.poll(() => page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)

  const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze()
  expect(a11y.violations).toEqual([])
  expect(errors).toEqual([])
  await page.screenshot({ path: `docs/screenshots/kahve-${testInfo.project.name}.png`, fullPage: true })
})

test('brown concept remains usable across narrow, wide and reduced-motion layouts', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  for (const [width, height] of [[320, 740], [375, 812], [844, 390], [1440, 1000]]) {
    await page.setViewportSize({ width, height })
    await page.goto('/kahve/')
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  }
  expect(await page.evaluate(() => document.getAnimations().filter(a => a.playState === 'running').length)).toBe(0)
})

test('brown concept is prerendered and works without JavaScript', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(`${baseURL}/kahve/`)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('a[href^="tel:"]')).toBeVisible()
  await page.getByRole('link', { name: 'Bize ulaşın' }).click()
  await expect(page).toHaveURL(/#kahve-iletisim$/)
  await context.close()
})
