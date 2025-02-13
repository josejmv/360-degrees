export const newComponents = {
  '.spinner': {
    '@apply pointer-events-none inline-block aspect-square text-primary w-8':
      {},
    'background-color': 'currentColor',
    'mask-size': '100%',
    'mask-repeat': 'no-repeat',
    'mask-position': 'center',
    'mask-image':
      "url(\"data:image/svg+xml,%3Csvg width='24' height='24' stroke='%23000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate(360deg)%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class='spinner_V8m1'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E\")",
  },
  '.skeleton': {
    '@apply bg-base-300 rounded': {},
    'will-change': 'background-position',
    animation: 'skeleton 1.8s ease-in-out infinite',
    'background-image':
      'linear-gradient(105deg, transparent 0%, transparent 40%, theme(colors.base-100) 50%, transparent 60%, transparent 100%)',
    'background-size': '200% auto',
    'background-repeat': 'no-repeat',
    'background-position-x': '-50%',
    '@media (prefers-reduced-motion)': {
      'animation-duration': '15s',
    },
  },
  '@keyframes skeleton': {
    from: {
      'background-position': '150%',
    },
    to: {
      'background-position': '-50%',
    },
  },
  '.card': {
    '@apply bg-base-100 rounded-lg drop-shadow-soft-bottom-200 break-words p-6':
      {},
  },
  '@keyframes caret-blink': {
    '0%, 70%, 100%': { opacity: '1' },
    '20%, 50%': { opacity: '0' },
  },
  '.animate-caret-blink': {
    animation: 'caret-blink 1.25s ease-out infinite',
  },
}
