"use client"

import { ThemeToggle } from "./theme-toggle"

/**
 * Theme Demo Component
 * Add this component to any page to showcase the Professional Blue-Purple theme system
 * Remove from production builds
 */
export function ThemeDemo() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">Theme Demo</h3>
        <ThemeToggle />
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-primary rounded"></div>
          <span>Primary</span>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-secondary rounded"></div>
          <span>Secondary</span>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-accent rounded"></div>
          <span>Accent</span>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>Success</span>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-amber-500 rounded"></div>
          <span>Warning</span>
        </div>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-destructive rounded"></div>
          <span>Error</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-border">
        <button className="btn-primary text-xs px-3 py-1">Primary Button</button>
      </div>
    </div>
  )
}