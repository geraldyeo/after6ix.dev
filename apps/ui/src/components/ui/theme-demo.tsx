import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { ThemeToggle, ThemeToggleGroup } from "./theme-toggle";
import { useTheme } from "../../contexts/theme-context";
import { cn } from "@lib/utils";

interface ThemeDemoProps {
  className?: string;
}

export function ThemeDemo({ className }: ThemeDemoProps) {
  const { theme, actualTheme } = useTheme();

  return (
    <div className={cn("space-y-6 max-w-4xl mx-auto", className)}>
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Theme System Demo</h2>
        <p className="text-muted-foreground">
          Experience the After6ix design system's comprehensive theming capabilities
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>Current: <strong>{theme}</strong></span>
          <span>•</span>
          <span>Active: <strong>{actualTheme}</strong></span>
        </div>
      </div>

      {/* Theme Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Controls</CardTitle>
          <CardDescription>
            Try switching between themes to see smooth transitions across all components
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Quick Toggle:</span>
            <ThemeToggle variant="button" />
          </div>

          <div className="space-y-3">
            <span className="text-sm font-medium">Theme Selection:</span>
            <ThemeToggleGroup />
          </div>
        </CardContent>
      </Card>

      {/* Button Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants</CardTitle>
          <CardDescription>
            All button styles adapt automatically to the selected theme
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">Primary Variants</h4>
            <Button variant="default" className="w-full">Default Button</Button>
            <Button variant="secondary" className="w-full">Secondary Button</Button>
            <Button variant="accent" className="w-full">Accent Button</Button>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">Utility Variants</h4>
            <Button variant="outline" className="w-full">Outline Button</Button>
            <Button variant="ghost" className="w-full">Ghost Button</Button>
            <Button variant="destructive" className="w-full">Destructive Button</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card Variants */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Standard card with border</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card uses the default variant with a subtle border that adapts to the current theme.
            </p>
          </CardContent>
        </Card>

        <Card variant="shadow">
          <CardHeader>
            <CardTitle>Shadow Card</CardTitle>
            <CardDescription>Card with subtle shadow</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card has a soft shadow that provides depth while maintaining theme consistency.
            </p>
          </CardContent>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>Card with prominent shadow</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This card has a more prominent shadow for important content areas.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Color Palette Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Color System</CardTitle>
          <CardDescription>
            Visual representation of the current theme's color palette
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Surfaces</h4>
              <div className="space-y-1">
                <div className="h-8 rounded bg-[hsl(var(--background))] border border-border flex items-center justify-center text-xs">
                  Background
                </div>
                <div className="h-8 rounded bg-[hsl(var(--card))] border border-border flex items-center justify-center text-xs">
                  Card
                </div>
                <div className="h-8 rounded bg-[hsl(var(--muted))] border border-border flex items-center justify-center text-xs">
                  Muted
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Brand Colors</h4>
              <div className="space-y-1">
                <div className="h-8 rounded bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] flex items-center justify-center text-xs font-medium">
                  Primary
                </div>
                <div className="h-8 rounded bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] flex items-center justify-center text-xs font-medium">
                  Secondary
                </div>
                <div className="h-8 rounded bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] flex items-center justify-center text-xs font-medium">
                  Accent
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Text Colors</h4>
              <div className="space-y-1">
                <div className="h-8 rounded bg-[hsl(var(--muted))] flex items-center justify-center">
                  <span className="text-xs text-[hsl(var(--foreground))]">Primary</span>
                </div>
                <div className="h-8 rounded bg-[hsl(var(--muted))] flex items-center justify-center">
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">Muted</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Status</h4>
              <div className="space-y-1">
                <div className="h-8 rounded bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] flex items-center justify-center text-xs font-medium">
                  Destructive
                </div>
                <div className="h-8 rounded border border-[hsl(var(--border))] bg-[hsl(var(--background))] flex items-center justify-center text-xs">
                  Border
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Example */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
          <CardDescription>
            How to use the theme system in your components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">CSS Custom Properties</h4>
              <div className="bg-[hsl(var(--muted))] p-4 rounded-lg text-sm font-mono">
                <div>className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"</div>
                <div>className="border-[hsl(var(--border))] text-[hsl(var(--foreground))]"</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-2">React Hook Usage</h4>
              <div className="bg-[hsl(var(--muted))] p-4 rounded-lg text-sm font-mono">
                <div>const {"{ theme, setTheme, actualTheme }"} = useTheme()</div>
                <div>setTheme('dark') // or 'light' or 'system'</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}