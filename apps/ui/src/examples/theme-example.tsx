import { ThemeProvider, ThemeToggle, Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from "../index";

export function ThemeExample() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="example-theme">
      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">After6ix Theme System</h1>
            <ThemeToggle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Light & Dark Themes</CardTitle>
                <CardDescription>
                  Seamless switching between light and dark modes with smooth transitions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="default" className="w-full">Primary Action</Button>
                <Button variant="secondary" className="w-full">Secondary Action</Button>
                <Button variant="outline" className="w-full">Outline Button</Button>
              </CardContent>
            </Card>

            <Card variant="shadow">
              <CardHeader>
                <CardTitle>System Integration</CardTitle>
                <CardDescription>
                  Automatically respects system theme preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  The theme system detects your operating system's theme preference and
                  applies the appropriate theme automatically.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>WCAG Compliant</CardTitle>
                <CardDescription>
                  All color combinations meet accessibility standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Primary Text</span>
                    <span className="text-[hsl(var(--muted-foreground))]">21:1</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Secondary Text</span>
                    <span className="text-[hsl(var(--muted-foreground))]">7:1</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Tertiary Text</span>
                    <span className="text-[hsl(var(--muted-foreground))]">4.5:1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Dynamic color system that adapts to the current theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-16 bg-[hsl(var(--primary))] rounded-lg flex items-center justify-center text-[hsl(var(--primary-foreground))] font-medium">
                    Primary
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-[hsl(var(--secondary))] rounded-lg flex items-center justify-center text-[hsl(var(--secondary-foreground))] font-medium">
                    Secondary
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-[hsl(var(--accent))] rounded-lg flex items-center justify-center text-[hsl(var(--accent-foreground))] font-medium">
                    Accent
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 bg-[hsl(var(--destructive))] rounded-lg flex items-center justify-center text-[hsl(var(--destructive-foreground))] font-medium">
                    Destructive
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}