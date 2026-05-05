/**
 * PawWalk Design Tokens
 * Mobile-first single-page landing site
 * Base grid: 8px
 */

export const tokens = {
  colors: {
    light: {
      background: {
        base: '#FFF8EE',
        surface: '#F6F2EE',
      },
      text: {
        primary: '#0F2540',
        secondary: '#3E5568',
        muted: '#9BA3AD',
      },
      border: {
        default: '#E6DDD6',
      },
      brand: {
        accent: '#FFB44B',
        accentStrong: '#FF9A1A',
        positive: '#6BBF8B',
        negative: '#E05252',
      },
      ink: {
        inverse: '#FFFFFF',
      },
    },
    dark: {
      background: {
        base: '#0B1220',
        surface: '#0F1628',
      },
      text: {
        primary: '#E8E8E8',
        secondary: '#B9C2CC',
        muted: '#8592A1',
      },
      border: {
        default: '#162033',
      },
      brand: {
        accent: '#FFB44B',
        accentStrong: '#FF9A1A',
        positive: '#6BBF8B',
        negative: '#E05252',
      },
      ink: {
        inverse: '#0B1220',
      },
    },
  },
  typography: {
    fontFamilies: {
      display: "'Aeonik Display', 'Söhne Display', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial",
      body: "'Geist', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial",
      mono: "'Berkeley Mono', 'JetBrains Mono', 'SFMono-Regular', Menlo, monospace",
    },
    sizes: {
      xs: { size: '12px', lineHeight: '16px', weight: 400 },
      sm: { size: '13px', lineHeight: '20px', weight: 400 },
      base: { size: '16px', lineHeight: '24px', weight: 400 },
      md: { size: '18px', lineHeight: '26px', weight: 400 },
      lg: { size: '20px', lineHeight: '28px', weight: 600 },
      xl: { size: '24px', lineHeight: '32px', weight: 600 },
      xxl: { size: '32px', lineHeight: '40px', weight: 600 },
      hero: { size: '34px', lineHeight: '40px', weight: 600 },
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1440px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
  },
  focus: {
    ring: '3px solid',
    ringColor: '#FFB44B',
  },
  touchTarget: {
    min: '44px',
    cta: '48px',
  },
} as const;
