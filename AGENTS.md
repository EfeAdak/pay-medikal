# Pay Medikal project instructions

Work only within this project directory. The parent repository belongs to a separate veterinary application; do not modify its files.

## Required skills

For all design and frontend work, read and apply these project-local skills:

1. `.agents/skills/frontend-design/SKILL.md`: subject-specific art direction and critique.
2. `.agents/skills/high-end-visual-design/SKILL.md`: spacing, material detail, component finish.
3. `.agents/skills/design-taste-frontend/SKILL.md`: brief inference and responsive composition.
4. `.agents/skills/awwwards-animations/SKILL.md`: purposeful motion and cleanup. The user's requested `awwwards-animation` refers to this upstream plural name.
5. `.agents/skills/ui-ux-pro-max/SKILL.md`: design-system research and accessibility review.

User requirements, truthful company information, accessibility, and this page's limited scope take precedence over ornamental skill examples. Do not copy dependency versions or buggy example cleanup from skills without checking. Apply relevant rules; do not add menus, sections, animation libraries, or dark-mode controls solely to satisfy unrelated examples.

## Scope and implementation

- Current deliverable: Turkish maintenance page, address, email, telephone.
- Read `CODEX.md`, `docs/company-research.md`, and `design-system/pay-medikal/MASTER.md` before changes.
- React, TypeScript, Vite, Tailwind CSS, Motion; static HTML is generated after build.
- Contact information lives only in `src/content/company.ts`. Never invent email, certifications, client logos, products, opening dates, or claims.
- Keep researched but unconfirmed contact data identified in the source and research notes. Email stays unset until supplied or reliably verified.
- Use local assets and self-hosted fonts. Preserve font licenses and skill provenance.
- Keep all motion finite, transform/opacity only, with reduced-motion support. Essential content must work without JavaScript.
- Use native links for phone, email and maps, visible keyboard focus and at least 44px touch targets.

## Verification

Run `npm run build` and `npm run test:browser` for meaningful frontend changes. Check desktop and mobile screenshots, keyboard focus, reduced motion, contact URLs, no horizontal overflow and no-JavaScript HTML. Do not claim browser or accessibility checks that were not run.

Do not publish, configure a domain or deploy unless requested. Maintain clear handoff notes in `CODEX.md`.
