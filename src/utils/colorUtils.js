// Utility to determine pill colors in the order: indigo -> emerald -> rose
// Returns an object: { bg: string, text: string }
export function getPillColors(index = 0) {
  const palette = [
    { bg: 'bg-indigo-900/50', text: 'text-indigo-300' },
    { bg: 'bg-emerald-900/50', text: 'text-emerald-300' },
    { bg: 'bg-rose-900/50', text: 'text-rose-300' },
  ]
  const i = Number.isFinite(index) ? Math.abs(index) % palette.length : 0
  return palette[i]
}
