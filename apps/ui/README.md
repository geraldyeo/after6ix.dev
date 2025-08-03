# @after6ix/ui

The After6ix design system and UI kit - a comprehensive collection of design tokens, utilities, and components for building consistent user interfaces across the After6ix monorepo.

## Overview

This package provides:

- **Design Tokens** - Colors, typography, spacing, shadows, animations, and more
- **Tailwind CSS v4** - Modern utility-first CSS framework with After6ix customizations
- **React Components** - Accessible, customizable UI components based on shadcn/ui
- **Storybook Documentation** - Interactive component gallery and design token reference
- **Utilities** - Helper functions for className management
- **Type Safety** - Full TypeScript support with exported types

## Quick Start

```tsx
// 1. Import styles in your app's root CSS file
import '@after6ix/ui/styles';

// 2. Use components in your React app
import { Button } from '@after6ix/ui';

function App() {
  return (
    <Button variant="primary">
      Get Started
    </Button>
  );
}
```

## Installation

This package is part of the After6ix monorepo and is automatically available to other workspace packages.

```bash
# Already linked in the workspace, no installation needed
# Just import and use!
```

For external projects (when published):

```bash
pnpm add @after6ix/ui
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

### Using Components

```typescript
import { Button } from '@after6ix/ui';

// Use the Button component with variants
<Button variant="primary" size="lg">
  Click me
</Button>

// All available variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Size options
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">Icon</Button>
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

## Theme System

### Light and Dark Mode Support

The After6ix design system includes comprehensive theme support with automatic light and dark mode switching.

#### Using the Theme Provider

```tsx
import { ThemeProvider } from '@after6ix/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="after6ix-theme">
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

#### Theme Options

- **`light`** - Force light theme
- **`dark`** - Force dark theme  
- **`system`** - Automatically match user's OS preference

#### Theme Controls

```tsx
import { useTheme, ThemeToggle } from '@after6ix/ui';

function Header() {
  const { theme, setTheme } = useTheme();
  
  return (
    <header>
      {/* Simple toggle button */}
      <ThemeToggle />
      
      {/* Or custom controls */}
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </header>
  );
}
```

#### CSS Variables

The theme system uses CSS custom properties that automatically update based on the active theme:

```css
/* Light theme (default) */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --primary: 275 80% 56%;
  /* ... and more */
}

/* Dark theme */
.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --primary: 275 80% 71%;
  /* ... and more */
}
```

## Design Tokens Reference

### Color System

The After6ix color palette is inspired by twilight hours when developers do their best work. All colors are theme-aware and automatically adjust for light and dark modes.

#### Primary - Twilight Purple

- `primary-25` through `primary-950`
- Base: `primary-600` (#9333EA)
- Extended scale for fine-grained control

#### Secondary - Deep Sky

- `secondary-25` through `secondary-950`
- Base: `secondary-600` (#2563EB)

#### Accent - Electric Cyan

- `accent-25` through `accent-950`
- Base: `accent-500` (#06B6D4)

#### Neutral - Charcoal

- `neutral-25` through `neutral-950`
- For text and backgrounds
- Includes theme-aware surface, text, and border tokens

#### Semantic Colors

- Success: `success-50` through `success-900`
- Error: `error-50` through `error-900`
- Warning: `warning-50` through `warning-900`
- Info: `info-50` through `info-900`

#### Theme-Aware Tokens

Special tokens that automatically adapt to the current theme:

```typescript
// Surface colors
surface.base      // Main background
surface.paper     // Card/panel background
surface.overlay   // Modal/dropdown background
surface.muted     // Subtle backgrounds

// Text colors
text.primary      // Main text
text.secondary    // Supporting text
text.muted        // De-emphasized text
text.disabled     // Disabled state text

// Border colors
border.base       // Default borders
border.strong     // Emphasized borders
border.muted      // Subtle borders
```

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

### Using the Button Component

```tsx
import { Button } from '@after6ix/ui';

// Basic usage
<Button>Click me</Button>

// With variants and sizes
<Button variant="secondary" size="lg">
  Large Secondary Button
</Button>

// As a link (polymorphic)
<Button asChild>
  <a href="/about">Learn More</a>
</Button>

// With custom className
<Button 
  variant="accent" 
  className="w-full md:w-auto"
>
  Full Width on Mobile
</Button>

// Icon button
<Button size="icon" variant="ghost">
  <svg>...</svg>
</Button>
```

### Creating Custom Components with Design Tokens

```tsx
import { cn } from '@after6ix/ui/utils';
import { colors, spacing } from '@after6ix/ui/tokens';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

function Card({ title, description, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 p-6',
        'shadow-sm hover:shadow-md transition-shadow duration-base',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600">
        {description}
      </p>
    </div>
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

### Running Storybook

To view the design system documentation and component gallery:

```bash
# From the ui package directory
pnpm storybook

# Or from the monorepo root
pnpm --filter @after6ix/ui storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

#### Theme Support in Storybook

Storybook is configured with the `@storybook/addon-themes` addon for easy theme switching:

- Use the theme selector in the toolbar to switch between light and dark modes
- All components and documentation automatically update to reflect the selected theme
- Theme selection persists across page reloads
- Components showcase proper theme adaptation in both modes

### Building Storybook

To build the static Storybook site:

```bash
# From the ui package directory
pnpm build-storybook

# Or from the monorepo root
pnpm --filter @after6ix/ui build-storybook
```

The static site will be generated in `storybook-static/`

## Package Structure

```
@after6ix/ui/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI components (Button, Card, etc.)
│   │   └── index.ts        # Component exports
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # cn() and other helpers
│   ├── stories/            # Storybook stories
│   │   ├── design-tokens/  # Token documentation
│   │   └── ui-kit/         # Component stories
│   ├── styles/             # CSS and design tokens
│   │   ├── globals.css     # Global styles and CSS variables
│   │   ├── tailwind.css    # Tailwind v4 configuration
│   │   └── tokens.ts       # TypeScript token definitions
│   └── index.ts            # Main package exports
├── docs/
│   └── adr/                # Architecture Decision Records
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Package configuration
```

## Architecture Decision Records

Key design decisions for the UI package are documented in ADRs:

- [Create a Design System and UI Kit](./docs/adr/20250730-create-a-design-system-and-ui-kit.md) - The foundational decision to build a comprehensive design system

## Components

### Available Components

- **Button** - A versatile button component with multiple variants and sizes
  - Variants: default, secondary, accent, destructive, outline, ghost, link
  - Sizes: sm, default, lg, xl, icon
  - Full accessibility support with focus states
  - Polymorphic component support via `asChild` prop
  - Theme-aware with automatic color adjustments

- **Card** - A flexible container component for grouping related content
  - Variants: default, shadow, bordered, elevated, ghost
  - Padding options: none, sm, default, lg
  - Composable with CardHeader, CardTitle, CardDescription, CardContent, CardFooter
  - Theme-aware backgrounds and borders
  - Smooth hover transitions

### Future Components

The design system will be extended with additional shadcn/ui components customized with After6ix tokens. Components will be added incrementally as needed.

## shadcn/ui Integration

This package is configured to work with shadcn/ui's CLI tool. The `components.json` file defines:

- Style: new-york variant
- TypeScript support enabled
- Tailwind CSS v4 configuration
- Path aliases for clean imports

To add new shadcn/ui components:

```bash
# From the ui package directory
pnpm dlx shadcn@latest add <component-name>
```

## Contributing

When adding new components or features:

### Adding Components

1. **Create the component** in `src/components/ui/`
2. **Export it** from `src/components/index.ts`
3. **Add Storybook stories** in `src/stories/ui-kit/`
4. **Update documentation** in this README
5. **Follow conventions**:
   - Use `cva` for variant styling
   - Support `asChild` prop for polymorphic components
   - Include proper TypeScript types
   - Ensure full accessibility

### Adding Design Tokens

1. **Update TypeScript interfaces** in `src/styles/tokens.ts`
2. **Add CSS variables** in `src/styles/tailwind.css`
3. **Create Storybook documentation** in `src/stories/design-tokens/`
4. **Update this README** with new token documentation
5. **Follow naming conventions**:
   - Use semantic names (primary, secondary, accent)
   - Include scale values (50-900 for colors)
   - Be consistent with existing patterns

### Code Style Guidelines

- Use functional components with TypeScript
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Write comprehensive Storybook stories
- Include JSDoc comments for public APIs

## License

MIT - Part of the After6ix monorepo
