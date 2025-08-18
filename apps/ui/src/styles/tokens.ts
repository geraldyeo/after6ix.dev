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
    950: string; // Enhanced dark shade
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
    950: string; // Enhanced dark shade
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
    950: string; // Enhanced dark shade
  };

  // Neutrals - Charcoal
  neutral: {
    25: string;  // Ultra light
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
    950: string; // Ultra dark
  };

  // Enhanced semantic colors with full scales
  semantic: {
    success: {
      50: string;
      100: string;
      500: string; // Base
      600: string;
      700: string;
      900: string;
    };
    error: {
      50: string;
      100: string;
      500: string; // Base
      600: string;
      700: string;
      900: string;
    };
    warning: {
      50: string;
      100: string;
      500: string; // Base
      600: string;
      700: string;
      900: string;
    };
    info: {
      50: string;
      100: string;
      500: string; // Base
      600: string;
      700: string;
      900: string;
    };
  };

  // Surface colors for enhanced theming
  surface: {
    light: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
    dark: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
    };
  };

  // Text colors with proper contrast
  text: {
    light: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      disabled: string;
    };
    dark: {
      primary: string;
      secondary: string;
      tertiary: string;
      inverse: string;
      disabled: string;
    };
  };

  // Border colors for both themes
  border: {
    light: {
      primary: string;
      secondary: string;
      focus: string;
      error: string;
    };
    dark: {
      primary: string;
      secondary: string;
      focus: string;
      error: string;
    };
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
    "2xl": string; // 24px
    "3xl": string; // 30px
    "4xl": string; // 36px
    "5xl": string; // 48px
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
  "2xl": string; // 16px
  "3xl": string; // 24px
  full: string;
}

export interface ShadowTokens {
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
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
  "2xl": string;
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
  "2xl": string;
  "3xl": string;
}

// Actual token values - Enhanced twilight-themed palette
export const colors: ColorTokens = {
  primary: {
    50: "#FAF5FF",  // Lightest twilight mist
    100: "#F3E8FF", // Twilight dawn
    200: "#E9D5FF", // Soft purple haze
    300: "#D8B4FE", // Evening glow
    400: "#C084FC", // Dusk purple
    500: "#A855F7", // Twilight hour
    600: "#9333EA", // Base - Deep twilight
    700: "#7C3AED", // Night purple
    800: "#6B46C1", // Midnight purple
    900: "#581C87", // Deep night
    950: "#3B0764", // Darkest purple
  },

  secondary: {
    50: "#EFF6FF",  // Lightest sky
    100: "#DBEAFE", // Dawn sky
    200: "#BFDBFE", // Morning blue
    300: "#93C5FD", // Sky blue
    400: "#60A5FA", // Clear sky
    500: "#3B82F6", // Deep sky
    600: "#2563EB", // Base - Ocean blue
    700: "#1D4ED8", // Deep ocean
    800: "#1E40AF", // Navy blue
    900: "#1E3A8A", // Midnight blue
    950: "#172554", // Darkest navy
  },

  accent: {
    50: "#ECFEFF",  // Lightest cyan mist
    100: "#CFFAFE", // Cyan vapor
    200: "#A5F3FC", // Soft cyan
    300: "#67E8F9", // Electric cyan glow
    400: "#22D3EE", // Bright cyan
    500: "#06B6D4", // Base - Electric cyan
    600: "#0891B2", // Deep cyan
    700: "#0E7490", // Teal cyan
    800: "#155E75", // Dark teal
    900: "#164E63", // Deep teal
    950: "#083344", // Darkest teal
  },

  neutral: {
    25: "#FDFDFD",  // Ultra light gray
    50: "#FAFAFA",  // Lightest charcoal
    100: "#F4F4F5", // Light charcoal
    200: "#E4E4E7", // Soft gray
    300: "#D4D4D8", // Medium light gray
    400: "#A1A1AA", // Medium gray
    500: "#71717A", // Base gray
    600: "#52525B", // Dark gray
    700: "#3F3F46", // Charcoal
    800: "#27272A", // Deep charcoal
    900: "#18181B", // Dark charcoal
    950: "#0A0A0B", // Ultra dark charcoal
  },

  semantic: {
    success: {
      50: "#F0FDF4",  // Light success background
      100: "#DCFCE7", // Success background
      500: "#22C55E", // Base success
      600: "#16A34A", // Success hover
      700: "#15803D", // Success active
      900: "#14532D", // Dark success text
    },
    error: {
      50: "#FEF2F2",  // Light error background
      100: "#FEE2E2", // Error background
      500: "#EF4444", // Base error
      600: "#DC2626", // Error hover
      700: "#B91C1C", // Error active
      900: "#7F1D1D", // Dark error text
    },
    warning: {
      50: "#FFFBEB",  // Light warning background
      100: "#FEF3C7", // Warning background
      500: "#F59E0B", // Base warning
      600: "#D97706", // Warning hover
      700: "#B45309", // Warning active
      900: "#78350F", // Dark warning text
    },
    info: {
      50: "#EFF6FF",  // Light info background
      100: "#DBEAFE", // Info background
      500: "#3B82F6", // Base info
      600: "#2563EB", // Info hover
      700: "#1D4ED8", // Info active
      900: "#1E3A8A", // Dark info text
    },
  },

  // Surface colors for comprehensive theming
  surface: {
    light: {
      primary: "#FFFFFF",   // Pure white
      secondary: "#FAFAFA", // Light gray
      tertiary: "#F4F4F5",  // Lighter gray
      inverse: "#18181B",   // Dark for contrast
    },
    dark: {
      primary: "#0A0A0B",   // Ultra dark
      secondary: "#18181B", // Dark charcoal
      tertiary: "#27272A",  // Medium dark
      inverse: "#FFFFFF",   // White for contrast
    },
  },

  // Text colors with WCAG AA compliance
  text: {
    light: {
      primary: "#18181B",   // Dark text on light (21:1 contrast)
      secondary: "#52525B", // Medium dark (7:1 contrast)
      tertiary: "#71717A",  // Medium gray (4.5:1 contrast)
      inverse: "#FFFFFF",   // White text on dark
      disabled: "#A1A1AA",  // Disabled text
    },
    dark: {
      primary: "#FAFAFA",   // Light text on dark (21:1 contrast)
      secondary: "#D4D4D8", // Medium light (7:1 contrast)
      tertiary: "#A1A1AA",  // Medium gray (4.5:1 contrast)
      inverse: "#18181B",   // Dark text on light
      disabled: "#52525B",  // Disabled text
    },
  },

  // Border colors for both themes
  border: {
    light: {
      primary: "#E4E4E7",   // Light border
      secondary: "#D4D4D8", // Medium border
      focus: "#9333EA",     // Primary focus ring
      error: "#EF4444",     // Error border
    },
    dark: {
      primary: "#3F3F46",   // Dark border
      secondary: "#52525B", // Medium dark border
      focus: "#A855F7",     // Primary focus ring (lighter for dark)
      error: "#F87171",     // Error border (lighter for dark)
    },
  },
};

export const typography: TypographyTokens = {
  fonts: {
    sans: "Inter, system-ui, -apple-system, sans-serif",
    mono: "JetBrains Mono, Consolas, Monaco, monospace",
  },

  sizes: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
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
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

export const spacing: SpacingTokens = {
  0: "0",
  1: "0.25rem",   // 4px
  2: "0.5rem",    // 8px
  3: "0.75rem",   // 12px
  4: "1rem",      // 16px
  5: "1.25rem",   // 20px
  6: "1.5rem",    // 24px
  8: "2rem",      // 32px
  10: "2.5rem",   // 40px
  12: "3rem",     // 48px
  16: "4rem",     // 64px
  20: "5rem",     // 80px
  24: "6rem",     // 96px
};

export const radius: RadiusTokens = {
  none: "0",
  sm: "0.125rem",  // 2px
  base: "0.25rem", // 4px
  md: "0.375rem",  // 6px
  lg: "0.5rem",    // 8px
  xl: "0.75rem",   // 12px
  "2xl": "1rem",   // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

export const shadows: ShadowTokens = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  base: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  lg: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  "2xl": "0 35px 60px -15px rgb(0 0 0 / 0.3)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none",
};

export const animations: AnimationTokens = {
  durations: {
    instant: "75ms",
    fast: "150ms",
    base: "250ms",
    slow: "400ms",
    slower: "600ms",
  },

  easings: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
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
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const borders: BorderTokens = {
  widths: {
    none: "0",
    thin: "1px",
    base: "2px",
    thick: "4px",
  },

  styles: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
    none: "none",
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
  none: "0",
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px",
};

// Helper function to convert hex to HSL (for CSS variables)
export function hexToHSL(hex: string): string {
  // Remove the hash if present
  hex = hex.replace(/^#/, "");

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

  return `${Math.round(h * 360).toString()} ${Math.round(s * 100).toString()}% ${Math.round(l * 100).toString()}%`;
}

// Export HSL values for CSS variables - Enhanced structure
export const colorsHSL = {
  primary: Object.entries(colors.primary).reduce<Record<string, string>>((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {}),

  secondary: Object.entries(colors.secondary).reduce<Record<string, string>>((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {}),

  accent: Object.entries(colors.accent).reduce<Record<string, string>>((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {}),

  neutral: Object.entries(colors.neutral).reduce<Record<string, string>>((acc, [key, value]) => ({
    ...acc,
    [key]: hexToHSL(value),
  }), {}),

  semantic: {
    success: Object.entries(colors.semantic.success).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    error: Object.entries(colors.semantic.error).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    warning: Object.entries(colors.semantic.warning).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    info: Object.entries(colors.semantic.info).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),
  },

  surface: {
    light: Object.entries(colors.surface.light).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    dark: Object.entries(colors.surface.dark).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),
  },

  text: {
    light: Object.entries(colors.text.light).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    dark: Object.entries(colors.text.dark).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),
  },

  border: {
    light: Object.entries(colors.border.light).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),

    dark: Object.entries(colors.border.dark).reduce<Record<string, string>>((acc, [key, value]) => ({
      ...acc,
      [key]: hexToHSL(value),
    }), {}),
  },
};