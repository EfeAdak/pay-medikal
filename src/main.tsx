import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/newsreader'
import './styles.css'
import './brown.css'
import { App } from './App'
import { BrownApp } from './concepts/BrownApp'

const root = document.getElementById('root')!
const isBrownConcept = window.location.pathname.startsWith('/kahve')
const app = <StrictMode>{isBrownConcept ? <BrownApp /> : <App />}</StrictMode>
if (root.querySelector('main')) hydrateRoot(root, app)
else createRoot(root).render(app)
