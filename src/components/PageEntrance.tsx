'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { useAnimate, useReducedMotion, stagger } from 'motion/react'

/** Static markup is visible before hydration and when JavaScript is unavailable. */
export function PageEntrance({ children, className = 'page-shell' }: { children: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate()
  const reducedMotion = useReducedMotion()
  const played = useRef(false)

  useEffect(() => {
    // Also check the media query directly before Motion's hook has initialized.
    if (reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches || played.current) return
    played.current = true
    const content = animate(
      '[data-entrance]',
      { opacity: [0, 1], transform: ['translateY(14px)', 'translateY(0px)'] },
      { duration: 0.7, delay: stagger(0.09), ease: [0.22, 1, 0.36, 1] },
    )
    const artwork = animate(
      '[data-artwork]',
      { opacity: [0.5, 1], transform: ['scale(1.035)', 'scale(1)'] },
      { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    )
    return () => {
      content.complete()
      artwork.complete()
    }
  }, [animate, reducedMotion])

  return <div ref={scope} className={className}>{children}</div>
}
