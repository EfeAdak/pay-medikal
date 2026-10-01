import { readFile, writeFile } from 'node:fs/promises'
import { renderToString } from 'react-dom/server'
import { App } from '../src/App'
import { BrownApp } from '../src/concepts/BrownApp'
import { RedApp } from '../src/concepts/RedApp'
import { EmeraldApp } from '../src/concepts/EmeraldApp'
import { PrecisionApp } from '../src/concepts/PrecisionApp'

const pages = [
  { path: new URL('../dist/index.html', import.meta.url), app: <App /> },
  { path: new URL('../dist/kahve/index.html', import.meta.url), app: <BrownApp /> },
  { path: new URL('../dist/kirmizi/index.html', import.meta.url), app: <RedApp /> },
  { path: new URL('../dist/zumrut/index.html', import.meta.url), app: <EmeraldApp /> },
  { path: new URL('../dist/kirmizi-medikal/index.html', import.meta.url), app: <PrecisionApp /> },
]

for (const page of pages) {
  const template = await readFile(page.path, 'utf8')
  if (!template.includes('<!--app-html-->')) throw new Error(`Prerender placeholder is missing in ${page.path.pathname}.`)
  await writeFile(page.path, template.replace('<!--app-html-->', renderToString(page.app)), 'utf8')
}

console.log('Static Turkish content and contact links rendered for all concepts.')
