# Copilot Instructions - SaaS UI Landing Page

## Architecture Overview

This is a Next.js 14 App Router landing page template built with **Chakra UI** and **Saas UI** for medical technology company VogtMedTech. The architecture follows a clean separation between marketing pages, authentication flows, and reusable components.

### Key Technologies

- **Next.js 14** (App Router with TypeScript)
- **Chakra UI** + **Saas UI** for components and theming
- **Framer Motion** for animations
- **pnpm** as package manager

## File Organization Patterns

### Path Aliases (critical for imports)

```typescript
// Always use these aliases defined in tsconfig.json:
"#components/*": ["./components/*"],
"#hooks/*": ["./hooks/*"],
"#data/*": ["./data/*"],
"#theme": ["./theme"]

// Example: import { Hero } from '#components/hero'
```

### Component Structure

- **Barrel exports**: Each component folder has `index.ts` that re-exports main component
- **Props pattern**: Components extend Chakra UI props (e.g., `FlexProps`) for consistent styling API
- **Theme integration**: Components use `useStyleConfig` and `ThemingProps` for custom theming

### Route Groups

- `(marketing)/`: Public landing pages with `MarketingLayout`
- `(auth)/`: Login/signup pages without marketing layout

## Development Workflow

### Commands (use pnpm, not npm/yarn)

```bash
pnpm dev      # Development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint checking
```

### Theme System

- **Dark mode default**: `initialColorMode: 'dark'` in `theme/index.ts`
- **Custom theme**: Extends Saas UI base theme with custom components in `theme/components/`
- **Typography**: Inter Variable font, custom font sizes in `theme/foundations/typography.ts`

## Data Configuration

**All content is centralized in `/data/` files:**

- `config.tsx`: Site metadata, navigation, footer links
- `pricing.tsx`: Pricing table data
- `testimonials.tsx`: Customer testimonials
- `faq.tsx`: FAQ questions and answers

When updating content, modify these data files rather than hardcoding in components.

## Component Patterns

### Layout Pattern

```typescript
// Marketing pages automatically get MarketingLayout via (marketing)/layout.tsx
// Contains: AnnouncementBanner + Header + main content + Footer
export default function Layout({ children }: { children: React.ReactNode }) {
  return <MarketingLayout>{children}</MarketingLayout>
}
```

### Section Pattern

```typescript
// Use Section component for consistent page sections
<Section variant="alternate" py="20">
  <SectionTitle title="Features" description="Why choose us" />
  <Features />
</Section>
```

### Styling Convention

- Use Chakra UI props for styling (`py`, `px`, `bg`, etc.)
- Support both light/dark modes with `_dark` pseudo props
- Responsive arrays: `spacing={[4, null, 8]}` (mobile, tablet, desktop)

## Integration Points

### Authentication

- **Saas UI Auth**: Provider wraps app in `app/provider.tsx`
- **Auth routes**: `/login` and `/signup` pages in `(auth)/` group

### SVG Handling

- **Custom webpack config**: SVGs imported as React components via `@svgr/webpack`
- **Logo components**: Organized in `components/logos/` with individual exports

### Motion/Animation

- **Framer Motion**: Integrated throughout with custom components in `components/motion/`
- **Page transitions**: Use `PageTransition` wrapper for route animations

## Vogt MedTech Branding & Design System

### Brand Identity

- **Primary Color**: `#007BFF` (Professional Medical Blue)
- **Accent Color**: `#00C2A8` (Innovation Teal/Green)
- **Typography**: Inter Variable font family
- **Design Language**: Clean, modern, trustworthy with rounded corners and subtle gradients
- **Tone**: Professional, innovative, healthcare-focused

### Color Usage Guidelines

- Primary blue for CTAs, headings, and key UI elements
- Teal accent for highlights, hover states, and secondary actions
- White backgrounds with subtle shadows for depth
- Dark mode: Maintain accessibility with adjusted blue tones

### Navigation Structure

- **Rich multi-level menus**: Defined in `data/menu.ts`
- **Desktop**: Hoverable dropdowns with icons and descriptions
- **Mobile**: Drawer-based navigation (hamburger menu)
- **Sticky header**: With subtle shadow on scroll
- **Accessibility**: Full keyboard navigation and ARIA labels

### Medical Tech Context

Consider medical device compliance, HIPAA where applicable, accessibility standards (WCAG 2.1 AA), and professional healthcare aesthetics in all design decisions. The site should convey innovation while maintaining trust and credibility.
