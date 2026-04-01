# MysteryD Design System

## Overview

The MysteryD design system is built on a violet depth color palette with editorial/brutalist aesthetics. It provides reusable components, design tokens, and interaction patterns for the MysteryD web presence.

## Design Tokens

Design tokens are the atomic values that power the entire design system — colors, spacing, typography, shadows, and more. They are defined in CSS variables (`src/lib/app-tokens.css` and `src/app/globals.css`) and exported as portable JSON (`src/lib/tokens.json`) for cross-platform consumption.

### Token Files

| File | Purpose |
|------|---------|
| `src/lib/app-tokens.css` | App-specific semantic tokens (Shopify app surface) |
| `src/app/globals.css` | Core design tokens + Tailwind theme integration |
| `src/lib/tokens.json` | Portable JSON export for design tools, platform bridging |
| `src/lib/tokens.ts` | TypeScript types for programmatic token access |

### Color Palette

**Light Mode:**
- Background: `#F5F3FF` (soft violet white)
- Foreground: `#1E1B2E` (deep violet black)
- Primary: `#7C3AED` (vivid purple)
- Primary Hover: `#6D28D9` (deeper purple)
- Secondary: `#EDE9FE` (soft violet surface)
- Accent: `#1E1B2E` (use dark as accent)
- Muted: `#C4B5FD` (soft purple for secondary text)
- Border: `#DDD6FE` (subtle violet border)

**Dark Mode:**
- Background: `#0F0A1E` (deep midnight)
- Foreground: `#EDE9FE` (soft violet white)
- Primary: `#9D5FF3` (bright violet)
- Secondary: `#1A1033` (dark violet surface)
- Accent: `#F5F3FF` (use light as accent)
- Muted: `#A89BC2` (muted violet)
- Border: `#3D2F6B` (subtle violet border)

### Typography

**Font Families:**
- **Display/Headings**: Fraunces (700, 900) — dramatic headlines at 80-120px
- **Body**: Source Serif 4 (400, 600) — refined readability
- **UI/Sans**: system-ui stack — clean interface text
- **Mono/Labels**: JetBrains Mono — code-adjacent elements, tags, labels

**Type Scale:**

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem / 12px | 1rem | Captions, timestamps |
| `text-sm` | 0.875rem / 14px | 1.25rem | Secondary text, labels |
| `text-base` | 1rem / 16px | 1.5rem | Body text |
| `text-lg` | 1.125rem / 18px | 1.75rem | Large body |
| `text-xl` | 1.25rem / 20px | 1.75rem | Small headings |
| `text-2xl` | 1.5rem / 24px | 2rem | Section headings |
| `text-3xl` | 1.875rem / 30px | 2.25rem | Card headings |
| `text-4xl` | 2.25rem / 36px | 2.5rem | Page headings |
| `text-5xl` | 3rem / 48px | 1.1 | Hero subheads |
| `text-6xl` | 3.75rem / 60px | 1 | Hero headlines |
| `text-7xl` | 4.5rem / 72px | 1 | Display |
| `text-8xl` | 6rem / 96px | 1 | Large display |
| `text-9xl` | 8rem / 128px | 1 | Maximum display |

### Spatial System

**Spacing Scale (4px base):**

| Token | Value | Common Usage |
|-------|-------|--------------|
| `space-0` | 0 | Reset |
| `space-1` | 4px | Icon gaps, tight padding |
| `space-2` | 8px | Component internal spacing |
| `space-3` | 12px | Input padding, small gaps |
| `space-4` | 16px | Standard padding, gaps |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Section gaps |
| `space-8` | 32px | Large gaps |
| `space-10` | 40px | Section padding |
| `space-12` | 48px | Large section gaps |
| `space-16` | 64px | Page section spacing |
| `space-20` | 80px | Hero section padding |
| `space-24` | 96px | Large hero spacing |

**Layout:**

| Token | Value | Usage |
|-------|-------|-------|
| `sidebar-width` | 240px | Full sidebar |
| `sidebar-collapsed-width` | 64px | Collapsed sidebar |
| `header-height` | 56px | App header |
| `content-max-width` | 1200px | Main content |
| `form-max-width` | 560px | Form containers |

**Border Radius:**

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Badges, small elements |
| `radius-base` | 10px | Buttons, inputs |
| `radius-lg` | 14px | Cards, modals |
| `radius-xl` | 16px | Large cards |
| `radius-2xl` | 20px | Panels |
| `radius-3xl` | 24px | Wide panels |
| `radius-4xl` | 28px | Extra wide |
| `radius-full` | 9999px | Pills, avatars |

**Shadows:**

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle depth |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.07)` | Cards, dropdowns |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.08)` | Modals, popovers |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1)` | Hover lift effect |

### Motion Philosophy

- **Page load**: Staggered fade-up reveals (opacity 0→1, translateY 20px→0), 600ms, 100ms stagger
- **Scroll**: Subtle parallax on hero elements, fade-in on scroll
- **Hover**: Scale transforms (1.02-1.05), color shifts, underline animations
- **Transitions**: 300ms ease-out default, never linear
- **Accessibility**: All animations respect `prefers-reduced-motion`

## Components

### Available Components

| Component | Status | Description |
|-----------|--------|-------------|
| Button | Stable | Primary, secondary, and ghost variants with loading state |
| Input | Stable | Text input with label support |
| Card | Stable | Container with header, body, footer slots |
| Avatar | Stable | User avatar with fallback |
| Label | Stable | Form label with optional required indicator |
| Separator | Stable | Visual divider |
| Badge | Stable | Status tags and labels |
| Spinner | Stable | Loading indicator |
| Dialog | Stable | Modal dialog with header, body, footer |
| EmptyState | Stable | Empty list/table state with icon, message, and optional CTA |
| Tooltip | Stable | Contextual information on hover/focus |
| Tabs | Stable | Tabbed content navigation |
| Accordion | Stable | Collapsible content sections |
| ActivityItem | Stable | Activity feed item with icon, description, timestamp, and optional link |
| Table | Stable | Data table with header, body, footer |
| NewsletterForm | Stable | Email signup form for waitlist and newsletter |
| StatCard | Stable | KPI/metric display with trend, icon, loading, and error states |

### Component Status Definitions

- **Stable**: Ready for production use
- **Beta**: Functional but may have edge cases
- **Deprecated**: Will be removed; do not use

## Component API

### Button

```tsx
import { Button } from "@/components/ui";

// Variants: "default" | "secondary" | "outline" | "ghost" | "destructive"
<Button variant="default">Click me</Button>

// Sizes: "default" | "sm" | "lg" | "icon"
<Button size="sm">Small</Button>

// With loading state
<Button loading={true}>Saving...</Button>

// Disabled
<Button disabled>Not clickable</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"secondary"` \| `"outline"` \| `"ghost"` \| `"destructive"` | `"default"` | Visual style |
| `size` | `"default"` \| `"sm"` \| `"lg"` \| `"icon"` | `"default"` | Size variant |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `disabled` | `boolean` | `false` | Disables the button |
| `className` | `string` | - | Additional CSS classes |

**Accessibility:** Uses native `<button>`. Focus ring visible on keyboard navigation.

---

### Input

```tsx
import { Input, Label } from "@/components/ui";

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="you@example.com" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"ghost"` | `"default"` | Visual style |
| `className` | `string` | - | Additional CSS classes |
| `aria-invalid` | `boolean` | - | Indicates invalid state |
| `aria-describedby` | `string` | - | IDs of error messages |

**Accessibility:** Uses native `<input>`. Pair with `<Label>` for proper association. Use `aria-invalid` and `aria-describedby` for error states.

---

### Badge

```tsx
import { Badge } from "@/components/ui";

<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Error</Badge>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default"` \| `"secondary"` \| `"outline"` \| `"destructive"` | `"default"` | Visual style |
| `className` | `string` | - | Additional CSS classes |

---

### Spinner

```tsx
import { Spinner } from "@/components/ui";

<Spinner />
<Spinner size="sm" />
<Spinner size="lg" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm"` \| `"default"` \| `"lg"` | `"default"` | Spinner size |
| `className` | `string` | - | Additional CSS classes |

**Accessibility:** `aria-label="Loading"` and `role="status"` are always applied. Screen readers announce "Loading" instead of "graphic".

---

### Dialog

```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm action</DialogTitle>
      <DialogDescription>This cannot be undone.</DialogDescription>
    </DialogHeader>
    {/* Body content */}
  </DialogContent>
</Dialog>
```

**Accessibility:** Uses `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing to the DialogTitle. Closes on Escape key press.

---

### EmptyState

```tsx
import { EmptyState } from "@/components/ui";
import { Package } from "lucide-react";

// Basic empty state
<EmptyState
  title="No campaigns yet"
  description="Create your first campaign to get started."
/>

// With icon and CTA
<EmptyState
  title="No stores"
  description="Add stores to start mystery shopping them."
  icon={<Package className="h-8 w-8" />}
  action={{ label: "Add Store", onClick: () => navigate("/stores/new") }}
/>

// In a data table context
<DataTable>
  <TableBody>
    {rows.length === 0 ? (
      <EmptyState
        title="No results"
        description="Try adjusting your filters."
        action={{ label: "Clear Filters", onClick: clearFilters }}
      />
    ) : rows.map(row => <TableRow ... />)}
  </TableBody>
</DataTable>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Required. Primary message (e.g., "No campaigns yet") |
| `description` | `string` | — | Optional secondary explanation |
| `icon` | `React.ReactNode` | — | Optional icon rendered in a colored badge |
| `action` | `{ label: string; onClick: () => void }` | — | Optional CTA button |
| `className` | `string` | — | Additional CSS classes |

**Accessibility:**
- Uses `role="status"` with `aria-live="polite"` for screen reader announcement
- Title uses `role="heading"` for semantic structure
- Icon is decorative (`aria-hidden`), not read aloud
- When action is present, keyboard focus moves naturally to the button

---

### ActivityItem

```tsx
import { ActivityItem } from "@/components/ui";
import { CheckCircle } from "lucide-react";

// Basic usage
<ActivityItem
  description="Campaign 'Q1 Audit' was completed"
  timestamp="2 hours ago"
/>

// With icon
<ActivityItem
  description="New store 'Acme' was added"
  timestamp="30 minutes ago"
  icon={<CheckCircle className="h-4 w-4" />}
/>

// With link
<ActivityItem
  description="View campaign report"
  timestamp="Mar 15, 2026"
  href="/campaigns/q1-audit"
/>

// Activity feed
<div className="divide-y">
  <ActivityItem description="Campaign completed" timestamp="2h ago" icon={<CheckCircle />} />
  <ActivityItem description="Store added" timestamp="1d ago" icon={<Plus />} />
</div>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | — | Activity description text |
| `timestamp` | `string \| React.ReactNode` | — | When it happened; string values get a `<time>` element with `dateTime` |
| `icon` | `React.ReactNode` | — | Optional leading icon (rendered in a decorative badge) |
| `href` | `string` | — | Optional. Makes description a link to the referenced resource |
| `className` | `string` | — | Additional CSS classes |

**Accessibility:**
- Icon container has `aria-hidden="true"` — it is decorative and not read aloud
- Description text is the primary accessible content
- When `href` is provided, description becomes an accessible link
- String `timestamp` is rendered as `<time>` with `dateTime` attribute for machine readability

---

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">First</TabsTrigger>
    <TabsTrigger value="tab2">Second</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

**Props (Tabs):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | - | Initially selected tab |
| `value` | `string` | - | Controlled selected tab |
| `onValueChange` | `(value: string) => void` | - | Change handler |

**Accessibility:** Uses `role="tablist"`, `role="tab"`, `role="tabpanel"`. Arrow keys navigate between tabs. `aria-selected` indicates active state.

---

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui";

<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>What is MysteryD?</AccordionTrigger>
    <AccordionContent>MysteryD is a design system.</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Props (Accordion):**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"single"` \| `"multiple"` | - | Single or multi-select |
| `collapsible` | `boolean` | `false` | All items can be collapsed |
| `defaultValue` | `string` \| `string[]` | - | Initially open item(s) |

**Accessibility:** Uses `aria-expanded` on triggers. Enter/Space toggles. Supports full keyboard navigation.

---

### Table

```tsx
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui";

<Table>
  <TableCaption>Optional caption</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>Engineer</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Accessibility:** `scope="col"` is applied to all TableHead cells, properly associating headers with data cells.

---

### NewsletterForm

```tsx
import { NewsletterForm } from "@/components/ui";

// Newsletter signup
<NewsletterForm variant="newsletter" />

// Waitlist signup
<NewsletterForm variant="waitlist" source="landing-page" />

// Compact inline version
<NewsletterForm variant="newsletter" compact />

// With custom title/description
<NewsletterForm 
  variant="newsletter" 
  title="Stay updated" 
  description="Get the latest news."
/>

// With submission handler
<NewsletterForm 
  variant="newsletter"
  onSubmit={async (data) => {
    await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify(data) })
  }}
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"waitlist"` \| `"newsletter"` | `"newsletter"` | Form type |
| `source` | `string` | `"newsletter"` | Attribution source |
| `title` | `string` | Default title | Custom heading |
| `description` | `string` | Default description | Custom description |
| `compact` | `boolean` | `false` | Inline compact layout |
| `className` | `string` | - | Additional CSS classes |
| `onSubmit` | `(data: NewsletterFormData) => Promise<void>` | - | Custom submit handler |

**NewsletterFormData:**
```ts
interface NewsletterFormData {
  email: string;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  timestamp?: string;
}
```

**Accessibility:** 
- Input has `aria-label="Email address"`
- Error state has `aria-invalid` and `aria-describedby` pointing to error message
- Error messages use `role="alert"` for screen reader announcement
- Success state replaces form with confirmation message

---

### StatCard

```tsx
import { StatCard } from "@/components/ui";

// Basic usage
<StatCard label="Total Campaigns" value={128} />

// With trend indicator
<StatCard
  label="Active Campaigns"
  value={47}
  trend={{ direction: "up", value: "+12%", label: "vs last month" }}
/>

// With icon and description
<StatCard
  label="Revenue"
  value="$48,290"
  description="Across all active campaigns"
  icon={<DollarSign className="h-5 w-5" />}
/>

// Loading and error states
<StatCard label="Pending" value={0} loading />
<StatCard label="API Calls" value={0} error />

// Dashboard grid layout
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <StatCard label="Merchants" value="1,284" trend={{ direction: "up", value: "+8%" }} />
  <StatCard label="Campaigns" value={47} trend={{ direction: "up", value: "+12%" }} />
  <StatCard label="Response Rate" value="23%" trend={{ direction: "down", value: "-5%" }} />
  <StatCard label="Avg Score" value={94.2} trend={{ direction: "neutral", value: "0%" }} />
</div>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Metric label (e.g., "Total Campaigns") |
| `value` | `string \| number` | — | Metric value; numbers are formatted with `Intl.NumberFormat` |
| `trend` | `TrendConfig` | — | Optional trend indicator |
| `trend.direction` | `"up"` \| `"down"` \| `"neutral"` | — | Trend direction |
| `trend.value` | `string` | — | Trend value (e.g., "+12%") |
| `trend.label` | `string` | — | Optional context (e.g., "vs last month") |
| `description` | `string` | — | Optional secondary text below the value |
| `icon` | `React.ReactNode` | — | Optional icon displayed in a colored badge |
| `loading` | `boolean` | `false` | Shows spinner; hides value, trend, icon |
| `error` | `boolean` | `false` | Shows em dash as value |
| `className` | `string` | — | Additional CSS classes |

**Accessibility:**
- Uses `role="figure"` on the card container
- Trend direction conveyed via `aria-label` on the trend indicator
- Trend icons use `aria-hidden="true"` to avoid duplication
- Loading spinner has `role="status"` with `aria-label="Loading"`
- Error state uses em dash (—) as a universally understood placeholder

**Notes:**
- Numeric values are automatically formatted with thousand separators via `Intl.NumberFormat`
- Pass string values as-is for percentages, currency, or custom formats (e.g., `"87.5%"`, `"$48,290"`)
- The component composes the existing `Card` component — inherits Card's styling and design tokens

## Accessibility

All components meet WCAG 2.1 AA standards:

- **Color contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Focus states**: Visible focus indicators on all interactive elements
- **Touch targets**: Minimum 44x44px
- **Keyboard navigation**: Full keyboard support
- **Screen readers**: ARIA labels and roles where needed
- **Reduced motion**: Respects `prefers-reduced-motion`

### Interactive Element Requirements

All interactive elements include:
- Visible focus state (ring-2 ring-ring ring-offset-2)
- Hover states for pointer devices
- Active/pressed states
- Disabled states with reduced opacity
- Loading states where applicable

## File Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens and base styles
│   └── layout.tsx           # Root layout with ThemeProvider
├── components/
│   ├── header.tsx           # Site header with navigation
│   ├── footer.tsx            # Site footer
│   ├── theme-provider.tsx   # Dark mode provider
│   ├── icons.tsx             # Custom SVG icons
│   └── ui/                   # Design system components
│       ├── index.ts          # Barrel export
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       ├── avatar.tsx
│       ├── label.tsx
│       ├── separator.tsx
│       ├── badge.tsx
│       ├── spinner.tsx
│       ├── dialog.tsx
│       ├── empty-state.tsx     # Empty list/table state
│       ├── tooltip.tsx
│       ├── tabs.tsx
│       ├── accordion.tsx
│       ├── activity-item.tsx  # Activity feed item
│       ├── table.tsx
│       ├── newsletter-form.tsx  # Unified form (waitlist + newsletter)
│       └── stat-card.tsx        # KPI/metric display card
└── lib/
    ├── utils.ts              # Utility functions (cn)
    └── app-tokens.css        # App-specific design tokens (for Shopify app)
```

## Usage Guidelines

### Adding New Components

1. Follow the existing component patterns in `src/components/ui/`
2. Use `cn` from `@/lib/utils` for className merging
3. Support both light and dark modes via CSS variables
4. Include proper TypeScript types
5. Add ARIA attributes for accessibility
6. Document props and usage
7. Add a `*.test.tsx` file with Vitest tests
8. Add a `*.stories.tsx` file for Storybook documentation

### Testing

Tests are run with Vitest using `happy-dom` environment (avoids Tailwind CSS 4 ESM conflicts with jsdom).

```bash
npm run test          # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:coverage # Generate coverage report
```

Test files should be co-located with components: `src/components/ui/button.test.tsx`

### Storybook

Storybook is configured with `@storybook/react-vite`. To start:

```bash
npm run storybook   # Start dev server on port 6006
```

Storybook configuration:
- `.storybook/main.ts` — framework and addon configuration
- `.storybook/preview.tsx` — preview settings (backgrounds, controls)
- `src/**/*.stories.tsx` — component stories

Stories should include:
- Default export with component metadata (`title`, `component`, `tags`, `argTypes`)
- Named exports for each variant (`Default`, `Secondary`, etc.)

### Dark Mode

Dark mode is handled via `next-themes` with class-based strategy. Components automatically adapt via CSS variables defined in `globals.css`.

### Responsive Design

- Mobile-first approach
- Breakpoints: md (768px), lg (1024px), xl (1280px)
- Touch targets: 44px minimum on mobile

## Shopify App Patterns

*To be established as app development progresses.*

## Animation Keyframes

Available animations in `globals.css`:

- `fade-up`: opacity + translateY reveal
- `fade-in`: simple opacity reveal
- `scale-in`: scale from 0.94 to 1
- `slide-down`: dropdown reveal
- `slide-in-right`: slide from right
- `float`: gentle floating motion
- `pulse-glow`: glowing pulse effect
- `gradient-shift`: background gradient animation
- `spin-slow`: slow rotation

Utility classes: `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in`, `.animate-slide-down`, etc.

Stagger delays: `.stagger-1` through `.stagger-7` (100-700ms delays)
