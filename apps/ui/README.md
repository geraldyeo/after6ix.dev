# @after6ix/ui

The After6ix design system and UI kit - a comprehensive collection of design tokens, utilities, and components for building consistent user interfaces across the After6ix monorepo.

## Overview

This package provides:

- **Design Tokens** - Colors, typography, spacing, shadows, animations, and more
- **Tailwind CSS v4** - Modern utility-first CSS framework with After6ix customizations
- **Utilities** - Helper functions for className management
- **Type Safety** - Full TypeScript support with exported types

## Installation

This package is part of the After6ix monorepo and is automatically available to other workspace packages.

```bash
# Already linked in the workspace, no installation needed
# Just import and use!
```

## Usage

### Importing Styles

In your application's main CSS file:

```css
/* Import the complete design system styles */
@import '@after6ix/ui/styles';
```

### Using Design Tokens

```typescript
import { colors, spacing, typography, shadows } from '@after6ix/ui/tokens';

// Access color values
console.log(colors.primary[600]); // #9333EA - Twilight Purple

// Use in CSS-in-JS
const styles = {
  color: colors.primary[600],
  padding: spacing[4], // 1rem
  fontFamily: typography.fonts.sans,
  boxShadow: shadows.md,
};
```

### Using Utilities

```typescript
import { cn } from '@after6ix/ui/utils';

// Combine classNames safely
const className = cn(
  'bg-primary-600 text-white',
  isActive && 'ring-2 ring-primary-500',
  className // User-provided classes
);
```

### Using with Tailwind Classes

The design system extends Tailwind CSS v4 with After6ix tokens:

```jsx
// Color scales
<div className="bg-primary-600 text-primary-100">
  Twilight Purple background
</div>

// Semantic colors
<div className="bg-secondary-500 hover:bg-secondary-600">
  Deep Sky button
</div>

// Spacing
<div className="p-4 m-6 gap-8">
  Using consistent spacing
</div>

// Shadows
<div className="shadow-lg hover:shadow-xl">
  Elevated card
</div>

// Animations
<div className="transition-all duration-base ease-out">
  Smooth transitions
</div>
```

## Design Tokens Reference

### Color System

The After6ix color palette is inspired by twilight hours when developers do their best work.

#### Primary - Twilight Purple

- `primary-50` through `primary-900`
- Base: `primary-600` (#9333EA)

#### Secondary - Deep Sky

- `secondary-50` through `secondary-900`
- Base: `secondary-600` (#2563EB)

#### Accent - Electric Cyan

- `accent-50` through `accent-900`
- Base: `accent-500` (#06B6D4)

#### Neutral - Charcoal

- `neutral-50` through `neutral-900`
- For text and backgrounds

#### Semantic Colors

- Success: `success`, `success-light`, `success-dark`
- Error: `error`, `error-light`, `error-dark`
- Warning: `warning`, `warning-light`, `warning-dark`
- Info: `info`, `info-light`, `info-dark`

### Typography

```typescript
// Font Families
font-sans: 'Inter, system-ui, -apple-system, sans-serif'
font-mono: 'JetBrains Mono, Consolas, Monaco, monospace'

// Font Sizes
text-xs: 0.75rem    // 12px
text-sm: 0.875rem   // 14px
text-base: 1rem     // 16px
text-lg: 1.125rem   // 18px
text-xl: 1.25rem    // 20px
text-2xl: 1.5rem    // 24px
text-3xl: 1.875rem  // 30px
text-4xl: 2.25rem   // 36px
text-5xl: 3rem      // 48px

// Font Weights
font-thin: 100
font-light: 300
font-normal: 400
font-medium: 500
font-semibold: 600
font-bold: 700
font-extrabold: 800
```

### Spacing Scale

```typescript
spacing-0: 0
spacing-1: 0.25rem   // 4px
spacing-2: 0.5rem    // 8px
spacing-3: 0.75rem   // 12px
spacing-4: 1rem      // 16px
spacing-5: 1.25rem   // 20px
spacing-6: 1.5rem    // 24px
spacing-8: 2rem      // 32px
spacing-10: 2.5rem   // 40px
spacing-12: 3rem     // 48px
spacing-16: 4rem     // 64px
spacing-20: 5rem     // 80px
spacing-24: 6rem     // 96px
```

### Other Tokens

#### Border Radius

- `rounded-none` through `rounded-full`
- Common: `rounded-lg` (0.5rem)

#### Shadows

- `shadow-xs` through `shadow-2xl`
- Special: `shadow-inner`, `shadow-none`

#### Animations

- Durations: `duration-instant` (75ms) through `duration-slower` (600ms)
- Easings: `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`, `ease-bounce`

#### Z-Index

- Layering: `z-hide` (-1) through `z-notification` (1700)
- Common: `z-dropdown` (1000), `z-modal` (1400), `z-tooltip` (1600)

#### Breakpoints

- `xs`: 320px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## TypeScript Support

The package exports all necessary types:

```typescript
import type { 
  ColorTokens, 
  TypographyTokens, 
  SpacingTokens,
  ClassValue,
  VariantProps 
} from '@after6ix/ui';
```

## Examples

### Creating a Themed Button

```tsx
import { cn } from '@after6ix/ui/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

function Button({ 
  variant = 'primary', 
  size = 'md', 
  className,
  children 
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-base',
        
        // Variant styles
        {
          'bg-primary-600 text-white hover:bg-primary-700': variant === 'primary',
          'bg-secondary-600 text-white hover:bg-secondary-700': variant === 'secondary',
          'bg-accent-500 text-white hover:bg-accent-600': variant === 'accent',
        }[variant],
        
        // Size styles
        {
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        }[size],
        
        // User styles
        className
      )}
    >
      {children}
    </button>
  );
}
```

### Using Design Tokens in CSS-in-JS

```typescript
import { colors, shadows, spacing } from '@after6ix/ui/tokens';

const cardStyles = {
  backgroundColor: colors.neutral[50],
  padding: spacing[6],
  borderRadius: radius.lg,
  boxShadow: shadows.md,
  transition: `box-shadow ${animations.durations.base} ${animations.easings.out}`,
  
  '&:hover': {
    boxShadow: shadows.lg,
  },
};
```

## Development

This package exports TypeScript source files directly. Consuming applications handle the compilation, which means:

- No build step required
- Hot reload works seamlessly
- Full TypeScript support in IDEs
- Optimal tree-shaking in production builds

## Future Components

The design system will be extended with shadcn/ui components customized with After6ix tokens. Components will be added incrementally as needed.

## Contributing

When adding new tokens or utilities:

1. Update the TypeScript interfaces in `src/styles/tokens.ts`
2. Add corresponding CSS variables in `src/styles/tailwind.css`
3. Document the additions in this README
4. Ensure all tokens follow the existing naming conventions

## License

MIT - Part of the After6ix monorepo
