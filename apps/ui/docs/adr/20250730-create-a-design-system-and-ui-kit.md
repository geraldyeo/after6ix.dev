# Create a design system and ui-kit

- Status: proposed
- Deciders: Gerald Yeo, Engineering Team
- Date: 2025-07-30
- Tags: design-system, ui-kit, frontend, monorepo

Technical Story: Create a unified design system and UI kit for the After6ix monorepo to ensure consistency across all applications and improve development velocity.

## Context and Problem Statement

The After6ix monorepo contains multiple applications (site, cv) that currently lack a unified design language. Without a centralized design system and UI kit, each application may develop inconsistent visual patterns, duplicate component implementations, and create a fragmented user experience. How can we establish a comprehensive design system that promotes consistency, reusability, and accelerates development across all workspace applications?

## Decision Drivers

- **Consistency**: Need for unified visual language across all After6ix applications
- **Developer Velocity**: Reduce duplicate work by providing reusable components
- **Maintainability**: Centralized updates to design tokens and components
- **Brand Identity**: Establish a distinctive After6ix brand through consistent design
- **Scalability**: Support future applications and features without design debt
- **TypeScript Support**: Leverage the monorepo's TypeScript-first approach for type-safe components
- **Performance**: Optimize bundle sizes through shared component libraries

## Considered Options

1. **Build Custom Design System** - Create a bespoke design system tailored to After6ix needs
2. **Adopt Existing Design System** - Use established systems like Material-UI, Ant Design, or Chakra UI
3. **Hybrid Approach** - Build custom system on top of headless UI libraries (Radix UI, Headless UI)
4. **shadcn/ui Approach** - Use shadcn/ui as foundation, customizing components with our design tokens
5. **CSS Framework Only** - Use Tailwind CSS with custom component library

## Decision Outcome

Chosen option: **"shadcn/ui Approach"** - Use shadcn/ui as the foundation for our design system, customizing it with After6ix design tokens and extending with additional components as needed.

This approach provides:

- Battle-tested component patterns built on Radix UI
- Copy-paste architecture allows full ownership and customization
- Accessibility-first components from Radix UI
- Modern patterns using Tailwind CSS and CSS variables
- Type-safe component APIs with TypeScript
- No external dependencies - components live in our codebase
- Easy to extend and modify to match After6ix brand
- Active community and regular updates to reference

### Positive Consequences

- **Unified Brand Experience**: Consistent look and feel across all After6ix applications
- **Faster Development**: Pre-built components accelerate feature development
- **Improved Accessibility**: Radix UI provides WCAG-compliant components out of the box
- **Type Safety**: Full TypeScript support with auto-completion and compile-time checks
- **Design Token System**: Centralized management of colors, spacing, typography
- **Documentation**: Built-in component documentation and usage examples
- **Testing**: Easier to test with isolated component libraries

### Negative Consequences

- **Initial Investment**: Significant upfront time required to build the system
- **Learning Curve**: Team needs to learn new design token conventions and component APIs
- **Maintenance Overhead**: Ongoing maintenance of the design system package
- **Migration Effort**: Existing components need to be refactored to use the new system

## Pros and Cons of the Options

### Build Custom Design System

Fully custom implementation from scratch

- Good, because complete control over every aspect
- Good, because can optimize for specific After6ix needs
- Bad, because requires significant development time
- Bad, because need to handle accessibility ourselves
- Bad, because higher risk of bugs and edge cases

### Adopt Existing Design System

Use Material-UI, Ant Design, or similar

- Good, because immediate productivity with pre-built components
- Good, because well-tested and documented
- Good, because large community support
- Bad, because limited customization without overrides
- Bad, because larger bundle sizes
- Bad, because may not align with After6ix brand vision

### Hybrid Approach

Radix UI primitives + Tailwind CSS + Custom tokens

- Good, because accessibility handled by Radix UI
- Good, because full control over visual design
- Good, because smaller bundle size (only import what you use)
- Good, because can leverage Tailwind's utility classes
- Good, because headless components are framework-agnostic
- Bad, because requires implementing all styling from scratch
- Bad, because need to solve common patterns ourselves

### shadcn/ui Approach (Chosen)

Use shadcn/ui components as foundation with custom theming

- Good, because proven component patterns and implementations
- Good, because copy-paste means we own the code
- Good, because built on Radix UI (accessibility included)
- Good, because uses modern CSS variables for theming
- Good, because active community and examples
- Good, because easy to customize with our design tokens
- Good, because no lock-in to external library
- Bad, because need to adapt default styles to After6ix brand
- Bad, because must maintain copied components

### CSS Framework Only

Tailwind CSS with custom React components

- Good, because quick to implement basic components
- Good, because utility-first approach is flexible
- Bad, because no accessibility primitives
- Bad, because need to implement complex interactions from scratch
- Bad, because inconsistent component APIs without a framework

## Implementation Plan

### Phase 1: Foundation (Week 1-2)

- Set up `@after6ix/ui` package in the monorepo
- Configure shadcn/ui CLI and components.json
- Adapt shadcn/ui's CSS variables to After6ix design tokens
- Install initial set of core components (Button, Card, Input, etc.)
- Create custom theme configuration with our color palette

### Phase 2: Core Components (Week 3-4)

- Customize shadcn/ui components with After6ix styling
- Add additional components not in shadcn/ui as needed
- Set up Storybook for component documentation
- Create usage guidelines showing After6ix patterns

### Phase 3: Advanced Components (Week 5-6)

- Build complex components (DataTable, Forms, Modals)
- Implement responsive design patterns
- Add animation and interaction patterns

### Phase 4: Integration (Week 7-8)

- Migrate existing apps to use design system
- Refine based on real-world usage
- Document migration guide

## Design Tokens Structure

### Color System

Based on the "After6ix - Where Code Comes Alive" brand concept, our color palette draws inspiration from twilight hours when developers do their best work.

```typescript
// Color token structure
interface ColorTokens {
  // Primary - Twilight Purple
  primary: {
    50: '#FAF5FF';
    100: '#F3E8FF';
    200: '#E9D5FF';
    300: '#D8B4FE';
    400: '#C084FC';
    500: '#A855F7';
    600: '#9333EA'; // Base
    700: '#7C3AED';
    800: '#6B46C1';
    900: '#581C87';
  };
  
  // Secondary - Deep Sky
  secondary: {
    50: '#EFF6FF';
    100: '#DBEAFE';
    200: '#BFDBFE';
    300: '#93C5FD';
    400: '#60A5FA';
    500: '#3B82F6';
    600: '#2563EB'; // Base
    700: '#1D4ED8';
    800: '#1E40AF';
    900: '#1E3A8A';
  };
  
  // Accent - Electric Cyan
  accent: {
    50: '#ECFEFF';
    100: '#CFFAFE';
    200: '#A5F3FC';
    300: '#67E8F9';
    400: '#22D3EE';
    500: '#06B6D4'; // Base
    600: '#0891B2';
    700: '#0E7490';
    800: '#155E75';
    900: '#164E63';
  };
  
  // Neutrals - Charcoal
  neutral: {
    50: '#FAFAFA';
    100: '#F4F4F5';
    200: '#E4E4E7';
    300: '#D4D4D8';
    400: '#A1A1AA';
    500: '#71717A';
    600: '#52525B';
    700: '#3F3F46';
    800: '#27272A';
    900: '#18181B';
  };
  
  // Semantic colors
  semantic: {
    success: { light: '#10B981'; base: '#059669'; dark: '#047857' };
    error: { light: '#F87171'; base: '#EF4444'; dark: '#DC2626' };
    warning: { light: '#FBBF24'; base: '#F59E0B'; dark: '#D97706' };
    info: { light: '#38BDF8'; base: '#0EA5E9'; dark: '#0284C7' };
  };
}
```

### Typography System

```typescript
interface TypographyTokens {
  fonts: {
    sans: 'Inter, system-ui, -apple-system, sans-serif';
    mono: 'JetBrains Mono, Consolas, Monaco, monospace';
  };
  
  sizes: {
    xs: '0.75rem';    // 12px
    sm: '0.875rem';   // 14px
    base: '1rem';     // 16px
    lg: '1.125rem';   // 18px
    xl: '1.25rem';    // 20px
    '2xl': '1.5rem';  // 24px
    '3xl': '1.875rem'; // 30px
    '4xl': '2.25rem'; // 36px
    '5xl': '3rem';    // 48px
  };
  
  weights: {
    thin: 100;
    light: 300;
    normal: 400;
    medium: 500;
    semibold: 600;
    bold: 700;
    extrabold: 800;
  };
  
  lineHeights: {
    tight: 1.25;
    snug: 1.375;
    normal: 1.5;
    relaxed: 1.625;
    loose: 2;
  };
}
```

### Spacing & Layout

```typescript
interface SpacingTokens {
  0: '0';
  1: '0.25rem';   // 4px
  2: '0.5rem';    // 8px
  3: '0.75rem';   // 12px
  4: '1rem';      // 16px
  5: '1.25rem';   // 20px
  6: '1.5rem';    // 24px
  8: '2rem';      // 32px
  10: '2.5rem';   // 40px
  12: '3rem';     // 48px
  16: '4rem';     // 64px
  20: '5rem';     // 80px
  24: '6rem';     // 96px
}

interface RadiusTokens {
  none: '0';
  sm: '0.125rem';  // 2px
  base: '0.25rem'; // 4px
  md: '0.375rem';  // 6px
  lg: '0.5rem';    // 8px
  xl: '0.75rem';   // 12px
  '2xl': '1rem';   // 16px
  '3xl': '1.5rem'; // 24px
  full: '9999px';
}
```

### Effects

```typescript
interface ShadowTokens {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)';
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)';
  base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)';
  md: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)';
  lg: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)';
  xl: '0 25px 50px -12px rgb(0 0 0 / 0.25)';
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)';
  none: 'none';
}

interface AnimationTokens {
  durations: {
    fast: '150ms';
    base: '250ms';
    slow: '400ms';
    slower: '600ms';
  };
  
  easings: {
    linear: 'linear';
    in: 'cubic-bezier(0.4, 0, 1, 1)';
    out: 'cubic-bezier(0, 0, 0.2, 1)';
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)';
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  };
}
```

## Design Token Integration with shadcn/ui

### Customization Approaches

shadcn/ui provides multiple layers of customization since you own the code:

#### 1. CSS Variables (Theme Layer)

- Modify CSS custom properties in your global CSS
- Perfect for color schemes, spacing, and typography
- Maintains consistency across all components

#### 2. Component Code (Structure Layer)

- Directly edit the copied component files
- Add new props, change behavior, modify structure
- Full TypeScript support for type-safe modifications

#### 3. Tailwind Classes (Style Layer)

- Modify className strings in components
- Use class-variance-authority for variant management
- Extend with custom utility classes

#### 4. Component Composition (API Layer)

- Wrap shadcn/ui components with your own
- Add business logic and custom props
- Create compound components for complex UIs

### How Our Tokens Map to shadcn/ui

shadcn/ui uses CSS variables for theming, which allows us to seamlessly integrate our After6ix design tokens:

1. **Color Tokens**: Our color scales map to CSS custom properties in HSL format
2. **Typography Tokens**: Font families, sizes, and weights integrate via Tailwind config
3. **Spacing Tokens**: Direct mapping to Tailwind's spacing scale
4. **Effect Tokens**: Shadows and animations extend Tailwind's defaults

### Token Configuration

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // After6ix color scales available as utilities
        primary: {
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          // ... through 900
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: { /* ... */ },
        accent: { /* ... */ },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      spacing: {
        // Extends with our token values
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-base) var(--easing-out)',
        'slide-up': 'slideUp var(--duration-slow) var(--easing-out)',
      },
    },
  },
};
```

### Customization Examples

#### 1. Theme Customization (CSS Variables)

```css
/* globals.css - Override shadcn/ui defaults with After6ix tokens */
:root {
  --primary: 267 80% 58%; /* Twilight Purple */
  --secondary: 221 83% 53%; /* Deep Sky */
  --accent: 189 94% 43%; /* Electric Cyan */
}
```

#### 2. Component Structure Customization

```tsx
// components/ui/button.tsx - Add loading state
export interface ButtonProps extends /* ... */ {
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, icon, children, disabled, ...props }, ref) => {
    return (
      <Comp disabled={disabled || loading} {...props}>
        {loading && <Spinner className="mr-2" />}
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Comp>
    );
  }
);
```

#### 3. Style Customization (Tailwind)

```tsx
// components/ui/card.tsx - After6ix branded card
const cardVariants = cva(
  "rounded-xl border transition-all duration-base",
  {
    variants: {
      variant: {
        default: "bg-card border-border",
        elevated: "bg-card shadow-lg border-transparent",
        gradient: "bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200",
        glass: "bg-white/80 backdrop-blur-sm border-white/20",
      }
    }
  }
);
```

#### 4. Component Composition

```tsx
// components/after6ix/feature-card.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  badge,
  gradient = false 
}: FeatureCardProps) {
  return (
    <Card variant={gradient ? "gradient" : "elevated"}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-primary-100 text-primary-600">
            {icon}
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
```

### Best Practices for Maintainable Design System

For a scalable and maintainable design system using shadcn/ui and Tailwind, we recommend a layered approach:

#### 1. Foundation Layer (CSS Variables + Tailwind Config)

**Use for**: Brand colors, typography, spacing, shadows, animations
**Why**: Single source of truth, easy to update globally, maintains consistency

```typescript
// tailwind.config.ts - Core design tokens
export default {
  theme: {
    extend: {
      colors: {
        // Reference CSS variables
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
};

// globals.css - Brand-specific values
:root {
  --primary: 267 80% 58%; /* After6ix Twilight Purple */
}
```

#### 2. Component Layer (Minimal Modifications)

**Use for**: Adding essential props, fixing accessibility issues
**Why**: Preserves upgrade path, reduces maintenance burden

```tsx
// ✅ Good: Extend with new props
export interface ButtonProps extends BaseButtonProps {
  loading?: boolean;
}

// ❌ Avoid: Changing core behavior
// Don't modify the underlying Radix UI implementation
```

#### 3. Variant Layer (CVA Extensions)

**Use for**: New visual styles, component states
**Why**: Leverages existing patterns, type-safe, predictable

```tsx
// ✅ Good: Add new variants
const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      ...existingVariants,
      brand: "bg-gradient-to-r from-primary-600 to-secondary-600",
    },
  },
});
```

#### 4. Composition Layer (New Components)

**Use for**: Business-specific components, complex patterns
**Why**: Keeps base components clean, enables reuse

```tsx
// ✅ Good: Compose from primitives
export function FeatureCard({ ...props }) {
  return (
    <Card>
      <CardHeader>...</CardHeader>
      <CardContent>...</CardContent>
    </Card>
  );
}
```

### Recommended Architecture

```ascii
@after6ix/ui/
├── styles/
│   ├── globals.css          # CSS variables, base styles
│   └── tokens.ts            # TypeScript token exports
├── components/
│   ├── ui/                  # shadcn/ui components (minimal changes)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── after6ix/            # Custom composed components
│       ├── feature-card.tsx
│       ├── pricing-table.tsx
│       └── ...
├── lib/
│   └── utils.ts             # Shared utilities
└── index.ts                 # Public API exports
```

### Maintenance Guidelines

1. **Minimize Core Changes**: Keep shadcn/ui components as close to original as possible
2. **Document Deviations**: When you must modify core components, document why
3. **Use Composition**: Build complex components by composing primitives
4. **Centralize Tokens**: All design decisions in CSS variables and Tailwind config
5. **Version Control**: Tag releases when updating shadcn/ui components
6. **Testing Strategy**: Focus tests on custom components and compositions

### Anti-Patterns to Avoid

```tsx
// ❌ Don't: Heavily modify core components
// This makes updates difficult
const Button = () => {
  // 100+ lines of custom logic
};

// ❌ Don't: Inline style overrides
<Button style={{ backgroundColor: '#9333EA' }} />

// ❌ Don't: Create divergent component APIs
<Button color="purple" size="medium" /> // Non-standard props
```

### Upgrade Strategy

When shadcn/ui releases updates:

1. Review changelog for breaking changes
2. Copy new component versions to a branch
3. Reapply minimal modifications
4. Test composed components
5. Update documentation

This approach balances customization needs with long-term maintainability.

## Component Architecture

### Component Structure

Each component follows a consistent structure:

```typescript
// Component file structure
components/
├── Button/
│   ├── Button.tsx          // Main component
│   ├── Button.stories.tsx  // Storybook stories
│   ├── Button.test.tsx     // Unit tests
│   ├── Button.types.ts     // TypeScript interfaces
│   ├── Button.styles.ts    // Styled components/CSS
│   └── index.ts           // Public exports

// Component template
interface ComponentProps extends React.ComponentPropsWithoutRef<'element'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  // ... other props
}

export const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ variant = 'primary', size = 'md', ...props }, ref) => {
    // Implementation using Radix UI primitives
  }
);
```

### Component Categories

1. **Primitives** - Basic building blocks
   - Button, Input, Label, Textarea
   - Typography (Heading, Text, Code)
   - Box, Flex, Grid

2. **Feedback** - User feedback components
   - Alert, Toast, Progress, Spinner
   - Badge, Tooltip, Popover

3. **Form Controls** - Form elements
   - Checkbox, Radio, Switch, Slider
   - Select, DatePicker, FilePicker

4. **Layout** - Structure components
   - Container, Section, Divider
   - Card, Panel, Accordion

5. **Navigation** - Navigation elements
   - Tabs, Breadcrumb, Pagination
   - Menu, Navigation, Sidebar

6. **Data Display** - Data visualization
   - Table, DataGrid, List
   - Avatar, Timeline, Stat

7. **Overlays** - Modal components
   - Dialog, Drawer, Modal
   - ContextMenu, DropdownMenu

### Component API Principles

1. **Composability**: Components should work together seamlessly
2. **Accessibility**: All components meet WCAG 2.1 AA standards
3. **Type Safety**: Full TypeScript support with proper generics
4. **Flexibility**: Support for `as` prop for polymorphic components
5. **Consistency**: Similar props across similar components
6. **Performance**: Use React.memo and proper optimization techniques

### Example Implementation

```typescript
// Example: Customizing shadcn/ui Button for After6ix
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// shadcn/ui button adapted with After6ix design tokens
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Using After6ix twilight purple as primary
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        // Using deep sky blue as secondary
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        // Using electric cyan for destructive/accent
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// CSS Variables integrating After6ix design tokens with shadcn/ui
/*
@layer base {
  :root {
    /* After6ix Color Tokens mapped to shadcn/ui conventions */
    
    /* Primary - Twilight Purple */
    --primary-50: 280 100% 98%; /* #FAF5FF */
    --primary-100: 282 100% 97%; /* #F3E8FF */
    --primary-200: 281 100% 92%; /* #E9D5FF */
    --primary-300: 280 97% 85%; /* #D8B4FE */
    --primary-400: 280 89% 75%; /* #C084FC */
    --primary-500: 280 91% 65%; /* #A855F7 */
    --primary-600: 267 80% 58%; /* #9333EA - Base */
    --primary-700: 263 90% 58%; /* #7C3AED */
    --primary-800: 262 72% 50%; /* #6B46C1 */
    --primary-900: 264 67% 35%; /* #581C87 */
    
    /* Secondary - Deep Sky */
    --secondary-50: 214 100% 97%; /* #EFF6FF */
    --secondary-100: 214 95% 93%; /* #DBEAFE */
    --secondary-200: 213 97% 87%; /* #BFDBFE */
    --secondary-300: 212 96% 78%; /* #93C5FD */
    --secondary-400: 213 94% 68%; /* #60A5FA */
    --secondary-500: 217 91% 60%; /* #3B82F6 */
    --secondary-600: 221 83% 53%; /* #2563EB - Base */
    --secondary-700: 224 76% 48%; /* #1D4ED8 */
    --secondary-800: 226 71% 40%; /* #1E40AF */
    --secondary-900: 224 64% 33%; /* #1E3A8A */
    
    /* Accent - Electric Cyan */
    --accent-50: 183 100% 96%; /* #ECFEFF */
    --accent-100: 185 95% 90%; /* #CFFAFE */
    --accent-200: 186 94% 82%; /* #A5F3FC */
    --accent-300: 187 92% 69%; /* #67E8F9 */
    --accent-400: 188 91% 53%; /* #22D3EE */
    --accent-500: 189 94% 43%; /* #06B6D4 - Base */
    --accent-600: 192 91% 36%; /* #0891B2 */
    --accent-700: 193 82% 31%; /* #0E7490 */
    --accent-800: 194 70% 27%; /* #155E75 */
    --accent-900: 196 64% 24%; /* #164E63 */
    
    /* shadcn/ui semantic mappings using After6ix tokens */
    --background: 0 0% 100%; /* White */
    --foreground: 240 10% 11%; /* Charcoal 900 #18181B */
    
    --card: 0 0% 100%;
    --card-foreground: 240 10% 11%;
    
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 11%;
    
    --primary: var(--primary-600);
    --primary-foreground: 0 0% 98%;
    
    --secondary: var(--secondary-600);
    --secondary-foreground: 0 0% 98%;
    
    --muted: 240 5% 96%; /* Neutral 100 */
    --muted-foreground: 240 3.8% 46%; /* Neutral 600 */
    
    --accent: var(--accent-500);
    --accent-foreground: 240 10% 11%;
    
    --destructive: 0 84% 60%; /* Error base */
    --destructive-foreground: 0 0% 98%;
    
    --border: 240 6% 90%; /* Neutral 200 */
    --input: 240 6% 90%;
    --ring: var(--primary-600);
    
    /* Spacing & Effects from After6ix tokens */
    --radius: 0.5rem; /* radius-lg */
    
    /* Typography */
    --font-sans: "Inter", system-ui, -apple-system, sans-serif;
    --font-mono: "JetBrains Mono", Consolas, Monaco, monospace;
  }
  
  .dark {
    /* Dark mode adjustments */
    --background: 240 10% 3.9%; /* Near black */
    --foreground: 0 0% 95%; /* Neutral 100 */
    
    --card: 240 10% 9%;
    --card-foreground: 0 0% 95%;
    
    --primary: 267 70% 65%; /* Adjusted for dark mode */
    --secondary: 221 70% 60%;
    --accent: 189 80% 50%;
    
    --muted: 240 5% 15%;
    --muted-foreground: 240 5% 60%;
    
    --border: 240 6% 20%;
    --input: 240 6% 20%;
  }
}

/* Extended color utilities for After6ix palette */
@layer utilities {
  /* Primary color scale */
  .text-primary-50 { color: hsl(var(--primary-50)); }
  .text-primary-100 { color: hsl(var(--primary-100)); }
  /* ... etc for all scales */
  
  .bg-primary-50 { background-color: hsl(var(--primary-50)); }
  .bg-primary-100 { background-color: hsl(var(--primary-100)); }
  /* ... etc for all scales */
  
  /* Animation durations from tokens */
  .duration-fast { transition-duration: 150ms; }
  .duration-base { transition-duration: 250ms; }
  .duration-slow { transition-duration: 400ms; }
  .duration-slower { transition-duration: 600ms; }
}
*/

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

## Links

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Class Variance Authority](https://cva.style/docs)
- Related to [UI Package Setup ADR] (to be created)
- Implements [Global Styling Strategy ADR] (to be created)
