module.exports = {
  content: ['./index.html', './**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'monospace']
      },
      colors: {
        brand: '#21539A',
        accent: '#0E78E9',
        'blue-light': '#60A5FA',
        secondary: '#F8F8F6',
        dark: '#0F172A',
        muted: '#64748B',
        disabled: '#94A3B8',
        primary: '#0E78E9'
      },
      fontSize: {
        'display': ['62px', { lineHeight: '72px' }],
        'h1': ['48px', { lineHeight: '56px' }],
        'h2': ['38px', { lineHeight: '46px' }],
        'h3': ['28px', { lineHeight: '36px' }],
        'h4': ['22px', { lineHeight: '30px' }],
        'body-default': ['16px', { lineHeight: '26px' }],
        'body-sm': ['14px', { lineHeight: '22px' }],
        'btn': ['14px', { lineHeight: '20px' }],
        'label': ['11px', { lineHeight: '16px' }],
        'caption': ['13px', { lineHeight: '20px' }],
        'nav-link': ['14px', { lineHeight: '20px' }],
        'mono-accent': ['13px', { lineHeight: '20px' }],
        'mono-tag': ['12px', { lineHeight: '18px' }],
        'mono-code': ['14px', { lineHeight: '22px' }]
      },
      borderRadius: {
        'card': '18px',
        'phone': '26px'
      },
      boxShadow: {
        'card': '0 20px 60px rgba(0,0,0,0.18)',
        'phone': '0 24px 64px rgba(0,0,0,0.22)'
      },
      backgroundImage: {
        'hero': "url('assets/img/Hero_bg.png')"
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        }
      },
      animation: {
        ticker: 'ticker 20s linear infinite',
        float: 'float 5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
