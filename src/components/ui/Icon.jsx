const glyphs = {
  arrow: '→',
  pin: '⌖',
  clock: '◷',
  phone: '⌕',
  navigation: '↗',
  sparkles: '✦',
  heart: '♡',
  smile: '☺',
  instagram: '◎',
  chat: '◌',
  menu: '☰',
  close: '×',
  search: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  ),
}

export default function Icon({ name }) {
  const glyph = glyphs[name]
  if (!glyph) return ''
  if (typeof glyph === 'string') return glyph
  return glyph
}
