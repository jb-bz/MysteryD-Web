# MysteryD Website Redesign Specification

## Concept & Vision

A bold editorial aesthetic that treats the website like a high-end tech magazine. The design should feel **earned confidence** — not flashy startup energy, but the quiet self-assurance of someone who has been in the industry 30+ years and doesn't need to prove anything. The "No black boxes" tagline manifests visually as transparency, clarity, and directness.

**Tone**: Refined brutalism meets editorial design. Bold typography creates drama. Generous whitespace provides breathing room. Subtle animations add life without distraction.

## Design Language

### Aesthetic Direction
Editorial/brutalist hybrid — dramatic typography scaled large, asymmetric layouts that break the grid, strategic use of dark sections to create contrast and atmosphere. Think Stripe's clarity meets a high-end print magazine.

### Color Palette (Violet Depths Extended)
```
Light Mode:
- Background: #F5F3FF (soft violet white)
- Foreground: #1E1B2E (deep violet black)
- Primary: #7C3AED (vivid purple)
- Primary Hover: #6D28D9 (deeper purple)
- Secondary: #EDE9FE (soft violet surface)
- Accent: #1E1B2E (use dark as accent in key moments)
- Muted: #C4B5FD (soft purple for secondary text)
- Border: #DDD6FE (subtle violet border)

Dark Mode:
- Background: #0F0A1E (deep midnight)
- Foreground: #EDE9FE (soft violet white)
- Primary: #9D5FF3 (bright violet)
- Secondary: #1A1033 (dark violet surface)
- Accent: #F5F3FF (use light as accent in key moments)
- Muted: #A89BC2 (muted violet)
```

### Typography
- **Display**: Fraunces (700, 900) — used at extreme scales (80px-120px) for dramatic headlines
- **Headings**: Fraunces (700) — large, confident
- **Body**: Source Serif 4 (400, 600) — refined readability
- **Mono/Labels**: JetBrains Mono — for code-adjacent elements, tags, labels

### Spatial System
- Section padding: 120px-160px vertical on hero, 80px-100px on subsequent sections
- Content max-width: 1200px with asymmetric internal layouts
- Grid: 12-column with intentional breaks and overlaps
- Negative space used deliberately — let content breathe

### Motion Philosophy
- **Page load**: Staggered fade-up reveals (opacity 0→1, translateY 20px→0), 600ms duration, 100ms stagger
- **Scroll**: Subtle parallax on hero elements, fade-in on scroll for sections
- **Hover**: Scale transforms (1.02-1.05), color shifts, underline animations
- **Transitions**: 300ms ease-out as default, never linear

### Visual Assets
- **Icons**: Lucide React — consistent stroke weight, minimal style
- **Decorative**: Geometric shapes (circles, lines), gradient meshes, noise texture overlay at 3-5% opacity
- **No images at launch**: Typography and layout create visual interest

## Layout & Structure

### Page Architecture

**Home Page Flow**:
1. **Hero** (dark bg) — Full viewport, dramatic headline, minimal copy, two CTAs
2. **Manifesto Strip** (light bg) — Short bold statement, single column, editorial feel
3. **What We're Building** (dark bg) — Asymmetric two-column, large number, descriptive text
4. **Why MysteryD** (light bg) — Three value props in editorial card layout
5. **Follow the Build** (gradient bg) — Conversion section, newsletter + GitHub
6. **Footer** (dark bg) — Minimal, functional

### Responsive Strategy
- Desktop: Full asymmetric layouts, max visual drama
- Tablet: Simplified asymmetry, maintains hierarchy
- Mobile: Single column, typography scale maintained, touch-friendly

## Features & Interactions

### Header
- Fixed position, transparent on hero, solid on scroll
- Logo (wordmark), nav links, dark mode toggle
- Mobile: hamburger menu with slide-out drawer

### Hero Section
- Headline at 80-100px, animate on load
- Tagline below at 20-24px
- Two CTAs: primary (GitHub), secondary (newsletter)
- Subtle gradient mesh or noise texture background

### Value Props Cards
- Large numeral or icon (48px+)
- Bold title, restrained description
- Hover: subtle lift (translateY -4px), shadow increase

### Newsletter Form
- Single email input, inline submit button
- Success/error states with appropriate messaging
- Focus states: ring animation

### Dark Mode Toggle
- Icon-based toggle (sun/moon)
- Smooth transition between modes (background color crossfade)
- Persisted in localStorage

## Component Inventory

### Header
- States: transparent (over hero), solid (scrolled), mobile menu open
- Contains: logo, nav links (Home, About, Apps, Blog), dark mode toggle

### Hero
- States: loading (staggered animation), loaded
- Contains: headline, subheadline, CTA buttons

### Section (generic)
- Variants: light-bg, dark-bg, gradient-bg
- Contains: optional eyebrow label, headline, body content

### ValueProp Card
- States: default, hover (lifted)
- Contains: icon/number, title, description

### NewsletterForm
- States: default, focused, loading, success, error
- Contains: email input, submit button

### Footer
- States: single variant
- Contains: logo, nav links, copyright

### Button
- Variants: primary (filled), secondary (outline), ghost
- States: default, hover, active, disabled, loading

## Technical Approach

### Framework
- Next.js 15 (App Router) — existing codebase
- Tailwind CSS + Shadcn/ui — existing setup
- CSS custom properties for theming (existing)

### Key Implementation Details
1. **Dark mode**: next-themes with class strategy (already configured)
2. **Animations**: CSS animations + Tailwind animate utilities
3. **Fonts**: next/font/google for Fraunces + Source Serif 4 (already configured)
4. **Components**: Extend existing Shadcn/ui components
5. **No external dependencies** beyond existing stack

### File Structure
```
src/
├── app/
│   ├── page.tsx (home) — complete redesign
│   ├── about/page.tsx — maintain existing content, new design
│   ├── apps/page.tsx — shell with refined placeholder
│   ├── blog/page.tsx — shell with refined placeholder
│   ├── layout.tsx — update with new structure
│   └── globals.css — enhanced with animations, new utilities
├── components/
│   ├── header.tsx — redesigned
│   ├── footer.tsx — redesigned
│   ├── ui/ — existing shadcn components
│   └── ...
```

### Animation Keyframes (to add to globals.css)
- `@keyframes fade-up` — opacity + translateY
- `@keyframes stagger-fade-up` — with animation-delay
- `@keyframes scale-in` — scale from 0.95 to 1
- `@keyframes noise` — subtle grain animation

## Open Items (from original brief - unchanged)
- Final logo (owner: Jolon) — wordmark placeholder until delivered
- GitHub org/handle (owner: Jolon) — confirm URL for CTAs
- Mailing list provider (owner: Jolon) — Resend, Buttondown, or Kit

## Deliverables
- All 4 pages redesigned with bold, modern, engaging aesthetic
- Production build succeeds
- Dark/light mode toggle working
- Mailing list form (placeholder implementation)
- GitHub CTAs pointing to confirmed URL
- Ready for deployment once MYS-13 is resolved