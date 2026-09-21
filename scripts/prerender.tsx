import { readFile, writeFile } from 'node:fs/promises'
import { renderToString } from 'react-dom/server'
import { App } from '../src/App'
import { BrownApp } from '../src/concepts/BrownApp'

const pages = [
  { path: new URL('../dist/index.html', import.meta.url), app: <App /> },
  { path: new URL('../dist/kahve/index.html', import.meta.url), app: <BrownApp /> },
]

for (const page of pages) {
  const template = await readFile(page.path, 'utf8')
  if (!template.includes('<!--app-html-->')) throw new Error(`Prerender placeholder is missing in ${page.path.pathname}.`)
  await writeFile(page.path, template.replace('<!--app-html-->', renderToString(page.app)), 'utf8')
}

console.log('Static Turkish content and contact links rendered for both concepts.')
