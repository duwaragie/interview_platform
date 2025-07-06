import { ThemeToggle } from "@/components/theme-toggle";

export default function ThemeTestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-primary">
            Professional Blue-Purple Theme
          </h1>
          <ThemeToggle />
        </div>
        
        <div className="grid gap-6">
          {/* Color Showcase */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded" />
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded" />
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent rounded" />
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-muted rounded" />
                <p className="text-sm font-medium">Muted</p>
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Status Colors</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-green-500 rounded" />
                <p className="text-sm font-medium">Success</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-amber-500 rounded" />
                <p className="text-sm font-medium">Warning</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-destructive rounded" />
                <p className="text-sm font-medium">Error</p>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
            <div className="space-y-4">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                Primary Button
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/90 transition-colors ml-4">
                Secondary Button
              </button>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded hover:bg-accent/90 transition-colors ml-4">
                Accent Button
              </button>
            </div>
          </div>

          {/* Text Examples */}
          <div className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Typography</h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold">Primary Text</p>
              <p className="text-muted-foreground">Secondary Text</p>
              <p className="text-sm text-muted-foreground">Small Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}