import { readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'

const sources = [
  ['frontend-design', 'anthropics/skills', 'skills/frontend-design'],
  ['high-end-visual-design', 'Leonxlnx/taste-skill', 'skills/soft-skill'],
  ['design-taste-frontend', 'Leonxlnx/taste-skill', 'skills/taste-skill'],
  ['awwwards-animations', 'devmartinese/awwwards-animations-skill', '.'],
  ['ui-ux-pro-max', 'nextlevelbuilder/ui-ux-pro-max-skill', '.claude/skills/ui-ux-pro-max'],
]
const skills = await Promise.all(sources.map(async ([name, repo, path]) => ({
  name, repo, path, refAtInstall: 'main',
  skillFileSha256: createHash('sha256').update(await readFile(`.agents/skills/${name}/SKILL.md`)).digest('hex'),
})))
await writeFile('docs/skills-lock.json', JSON.stringify({ installedOn: '2026-09-21', skills }, null, 2) + '\n')
