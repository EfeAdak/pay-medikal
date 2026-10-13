import { readFile, writeFile } from 'node:fs/promises'
import { renderToString } from 'react-dom/server'
import { App } from '../src/App'

const path = new URL('../dist/index.html', import.meta.url)
const template = await readFile(path, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error(`Prerender placeholder is missing in ${path.pathname}.`)
await writeFile(path, template.replace('<!--app-html-->', renderToString(<App />)), 'utf8')

console.log('Static Turkish content and contact links rendered.')
