export interface ColorTokens {
  // Primary - Twilight Purple
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string; // Base
    700: string;
    800: string;
    900: string;
  };
  
  // Secondary - Deep Sky
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string; // Base
    700: string;
    800: string;
    900: string;
  };
  
  // Accent - Electric Cyan
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // Base
    600: string;
    700: string;
    800: string;
    900: string;
  };
  
  // Neutrals - Charcoal
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  
  // Semantic colors
  semantic: {
    success: { light: string; base: string; dark: string };
    error: { light: string; base: string; dark: string };
    warning: { light: string; base: string; dark: string };
    info: { light: string; base: string; dark: string };
  };
}

export interface TypographyTokens {
  fonts: {
    sans: string;
    mono: string;
  };
  
  sizes: {
    xs: string;    // 12px
    sm: string;    // 14px
    base: string;  // 16px
    lg: string;    // 18px
    xl: string;    // 20px
    '2xl': string; // 24px
    '3xl': string; // 30px
    '4xl': string; // 36px
    '5xl': string; // 48px
  };
  
  weights: {
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
  
  lineHeights: {
    tight: number;
    snug: number;
    normal: number;
    relaxed: number;
    loose: number;
  };
  
  letterSpacing: {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  };
}

export interface SpacingTokens {
  0: string;
  1: string;   // 4px
  2: string;   // 8px
  3: string;   // 12px
  4: string;   // 16px
  5: string;   // 20px
  6: string;   // 24px
  8: string;   // 32px
  10: string;  // 40px
  12: string;  // 48px
  16: string;  // 64px
  20: string;  // 80px
  24: string;  // 96px
}

export interface RadiusTokens {
  none: string;
  sm: string;   // 2px
  base: string; // 4px
  md: string;   // 6px
  lg: string;   // 8px
  xl: string;   // 12px
  '2xl': string; // 16px
  '3xl': string; // 24px
  full: string;
}

export interface ShadowTokens {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
}

export interface AnimationTokens {
  durations: {
    instant: string;
    fast: string;
    base: string;
    slow: string;
    slower: string;
  };
  
  easings: {
    linear: string;
    in: string;
    out: string;
    inOut: string;
    bounce: string;
    elastic: string;
  };
}

export interface ZIndexTokens {
  hide: number;
  base: number;
  dropdown: number;
  sticky: number;
  fixed: number;
  modalBackdrop: number;
  modal: number;
  popover: number;
  tooltip: number;
  notification: number;
}

export interface BreakpointTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface BorderTokens {
  widths: {
    none: string;
    thin: string;
    base: string;
    thick: string;
  };
  
  styles: {
    solid: string;
    dashed: string;
    dotted: string;
    double: string;
    none: string;
  };
}

export interface OpacityTokens {
  0: number;
  5: number;
  10: number;
  20: number;
  30: number;
  40: number;
  50: number;
  60: number;
  70: number;
  80: number;
  90: number;
  95: number;
  100: number;
}

export interface BlurTokens {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

// Actual token values
export const colors: ColorTokens = {
  primary: {
    50: '#FAF5FF',
    100: '#F3E8FF',
    200: '#E9D5FF',
    300: '#D8B4FE',
    400: '#C084FC',
    500: '#A855F7',
    600: '#9333EA', // Base
    700: '#7C3AED',
    800: '#6B46C1',
    900: '#581C87',
  },
  
  secondary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB', // Base
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  
  accent: {
    50: '#ECFEFF',
    100: '#CFFAFE',
    200: '#A5F3FC',
    300: '#67E8F9',
    400: '#22D3EE',
    500: '#06B6D4', // Base
    600: '#0891B2',
    700: '#0E7490',
    800: '#155E75',
    900: '#164E63',
  },
  
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
  },
  
  semantic: {
    success: { light: '#10B981', base: '#059669', dark: '#047857' },
    error: { light: '#F87171', base: '#EF4444', dark: '#DC2626' },
    warning: { light: '#FBBF24', base: '#F59E0B', dark: '#D97706' },
    info: { light: '#38BDF8', base: '#0EA5E9', dark: '#0284C7' },
  },
};

export const typography: TypographyTokens = {
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    mono: 'JetBrains Mono, Consolas, Monaco, monospace',
  },
  
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },
  
  weights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeights: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

export const spacing: SpacingTokens = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
};

export const radius: RadiusTokens = {
  none: '0',
  sm: '0.125rem',  // 2px
  base: '0.25rem', // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
};

export const shadows: ShadowTokens = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '2xl': '0 35px 60px -15px rgb(0 0 0 / 0.3)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
};

export const animations: AnimationTokens = {
  durations: {
    instant: '75ms',
    fast: '150ms',
    base: '250ms',
    slow: '400ms',
    slower: '600ms',
  },
  
  easings: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
};

export const zIndex: ZIndexTokens = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  notification: 1700,
};

export const breakpoints: BreakpointTokens = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const borders: BorderTokens = {
  widths: {
    none: '0',
    thin: '1px',
    base: '2px',
    thick: '4px',
  },
  
  styles: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    double: 'double',
    none: 'none',
  },
};

export const opacity: OpacityTokens = {
  0: 0,
  5: 0.05,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  95: 0.95,
  100: 1,
};

export const blur: BlurTokens = {
  none: '0',
  sm: '4px',
  base: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '40px',
  '3xl': '64px',
};

// Helper function to convert hex to HSL (for CSS variables)
export function hexToHSL(hex: string): string {
  // Remove the hash if present
  hex = hex.replace(/^#/, '');
  
  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

// Export HSL values for CSS variables
export const colorsHSL = {
  primary: Object.entries(colors.primary).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {} as Record<string, string>),
  
  secondary: Object.entries(colors.secondary).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {} as Record<string, string>),
  
  accent: Object.entries(colors.accent).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {} as Record<string, string>),
  
  neutral: Object.entries(colors.neutral).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {} as Record<string, string>),
};