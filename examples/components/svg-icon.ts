const files = import.meta.globEager('../../packages/theme-default/icons/svg/*.svg')

const svgIcons: string[] = []
const gwinIcons: string[] = []

for (const key in files) {
  const name = key.replace('../../packages/theme-default/icons/svg/', '').replace('.svg', '')
  if (name.startsWith('gwin')) {
    gwinIcons.push(name)
  } else {
    svgIcons.push(name)
  }
}
export { svgIcons, gwinIcons }
