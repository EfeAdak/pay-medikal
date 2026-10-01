import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/newsreader'
import './styles.css'
import './brown.css'
import './red.css'
import './emerald.css'
import './precision.css'
import { App } from './App'
import { BrownApp } from './concepts/BrownApp'
import { RedApp } from './concepts/RedApp'
import { EmeraldApp } from './concepts/EmeraldApp'
import { PrecisionApp } from './concepts/PrecisionApp'

/** Prevent mobile browsers from restoring a stale bottom-of-page position. */
function resetScrollOnEntry() {
  if (window.location.hash) return
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
  window.scrollTo(0, 0)
}

if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
resetScrollOnEntry()
requestAnimationFrame(resetScrollOnEntry)
window.addEventListener('pageshow', resetScrollOnEntry)
window.addEventListener('load', resetScrollOnEntry, { once: true })

const root = document.getElementById('root')!
const { pathname } = window.location
const concept = pathname.startsWith('/kahve')
  ? <BrownApp />
  : pathname.startsWith('/kirmizi-medikal')
    ? <PrecisionApp />
    : pathname.startsWith('/kirmizi')
    ? <RedApp />
    : pathname.startsWith('/zumrut')
      ? <EmeraldApp />
      : <App />
const app = <StrictMode>{concept}</StrictMode>
if (root.querySelector('main')) hydrateRoot(root, app)
else createRoot(root).render(app)
