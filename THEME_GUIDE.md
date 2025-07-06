# Professional Blue-Purple Theme System

This project implements a comprehensive dark and light mode theme system using a Professional Blue-Purple color palette.

## Color Palette

### Light Mode
- **Primary**: #2563eb (Professional Blue) - Main buttons and CTAs
- **Secondary**: #7c3aed (Purple Accent) - AI-related components
- **Accent**: #06b6d4 (Cyan Highlight) - Voice indicators and highlights
- **Background**: #ffffff (Pure White)
- **Surface**: #f8fafc (Light Gray)
- **Text Primary**: #1e293b (Dark Slate)
- **Text Secondary**: #64748b (Gray)

### Dark Mode
- **Primary**: #3b82f6 (Bright Blue)
- **Secondary**: #a855f7 (Bright Purple)
- **Accent**: #22d3ee (Bright Cyan)
- **Background**: #0f172a (Dark Navy)
- **Surface**: #1e293b (Slate)
- **Text Primary**: #f1f5f9 (Light Gray)
- **Text Secondary**: #94a3b8 (Medium Gray)

### Status Colors
- **Success**: #22c55e (Light) / #34d399 (Dark)
- **Warning**: #f59e0b (Light) / #fbbf24 (Dark)
- **Error**: #ef4444 (Light) / #f87171 (Dark)

## Usage

### Theme Toggle Component
```tsx
import { ThemeToggle } from "@/components/theme-toggle"

// Add to your layout or navigation
<ThemeToggle />
```

### Using Theme Colors
The theme system uses semantic color tokens that automatically switch between light and dark modes:

```tsx
// Primary colors
<button className="bg-primary text-primary-foreground">Primary Button</button>

// Secondary colors  
<button className="bg-secondary text-secondary-foreground">Secondary Button</button>

// Accent colors
<button className="bg-accent text-accent-foreground">Accent Button</button>

// Background and surface
<div className="bg-background text-foreground">
  <div className="bg-card text-card-foreground">Card content</div>
</div>

// Status colors
<div className="text-green-500">Success</div>
<div className="text-amber-500">Warning</div>  
<div className="text-destructive">Error</div>
```

### Custom Component Classes
The system includes pre-built component classes:

```tsx
// Buttons
<button className="btn-primary">Primary Style</button>
<button className="btn-secondary">Secondary Style</button>

// Cards
<div className="card-border">
  <div className="card">Card content</div>
</div>

// Forms
<form className="form">
  <input className="input" />
  <button className="btn">Submit</button>
</form>
```

## Design Guidelines

### Primary Actions
Use primary blue (`bg-primary`) for:
- Main call-to-action buttons
- Primary navigation items
- Important interactive elements

### AI Features  
Use purple accent (`bg-secondary`) for:
- AI-powered features
- Smart suggestions
- Automated processes

### Voice/Audio Indicators
Use cyan accent (`bg-accent`) for:
- Speaking/listening states
- Audio controls
- Real-time indicators

### Feedback Scores
Use gradients from primary to secondary for:
- Progress indicators
- Score displays
- Performance metrics

## Implementation Details

### Theme Provider
The app uses `next-themes` for theme management with:
- System preference detection
- Persistent theme storage
- SSR compatibility
- Smooth transitions (300ms)

### CSS Architecture
- **CSS Custom Properties**: All colors defined as CSS variables
- **Tailwind Integration**: Semantic color tokens in Tailwind classes
- **Smooth Transitions**: 300ms transition on theme changes
- **Accessibility**: Proper contrast ratios maintained in both themes

### Browser Support
- Modern browsers with CSS custom property support
- Graceful fallbacks for older browsers
- Consistent experience across devices

## Customization

To modify colors, update the CSS custom properties in `app/globals.css`:

```css
:root {
  --primary: oklch(0.55 0.22 264); /* Professional Blue */
  --secondary: oklch(0.55 0.24 290); /* Purple Accent */
  --accent: oklch(0.70 0.14 195); /* Cyan Highlight */
  /* ... other colors */
}

.dark {
  --primary: oklch(0.65 0.20 264); /* Bright Blue */
  --secondary: oklch(0.65 0.24 290); /* Bright Purple */
  --accent: oklch(0.80 0.14 195); /* Bright Cyan */
  /* ... other colors */
}
```

Colors are defined in OKLCH format for better perceptual uniformity and color manipulation.