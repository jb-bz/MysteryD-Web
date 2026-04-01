# MysteryD Shopify App — Design Specification

**Version:** 0.2 — Draft
**Owner:** UX Designer
**Last Updated:** 2026-03-31

---

## Overview

This document covers the design system and component specifications for MysteryD's Shopify app(s). The app(s) will be embedded within the Shopify admin via App Bridge, serving merchants who need focused, well-supported tools — not bloated app suites.

The design system extends the **Violet Depths** brand palette established for the MysteryD website, adapted for embedded app contexts.

---

## Design Principles

1. **Clarity over density** — Shopify admin has high information density. We resist the temptation to show everything. Focus on what matters right now.
2. **Embedded, not duplicated** — We live inside Shopify. We don't reimagine the wheel. App Bridge patterns take priority over custom chrome.
3. **Accessible by default** — WCAG 2.1 AA minimum. Color contrast checked before shipping. Touch targets ≥44px. Focus visible always.
4. **Predictable** — Components behave the same way across every surface. No surprises.
5. **Performance-first animations** — Animations enhance clarity, never distract. Respect `prefers-reduced-motion`.

---

## Color Palette

Extends the Violet Depths palette for embedded app context.

### Light Mode
| Token | Value | Usage |
|---|---|---|
| `--app-bg` | `#F5F3FF` | App background |
| `--app-surface` | `#FFFFFF` | Cards, panels, modals |
| `--app-border` | `#DDD6FE` | Dividers, borders |
| `--app-text-primary` | `#1E1B2E` | Primary text |
| `--app-text-secondary` | `#4C4469` | Secondary/meta text |
| `--app-accent` | `#7C3AED` | Primary actions, links, focus |
| `--app-accent-hover` | `#6D28D9` | Hovered primary actions |
| `--app-success` | `#10B981` | Success states, positive metrics |
| `--app-warning` | `#F59E0B` | Warning states |
| `--app-error` | `#EF4444` | Error states, destructive actions |
| `--app-muted` | `#C4B5FD` | Disabled, placeholder text |

### Dark Mode
| Token | Value | Usage |
|---|---|---|
| `--app-bg` | `#0F0A1E` | App background |
| `--app-surface` | `#1A1033` | Cards, panels, modals |
| `--app-border` | `#3D2F6B` | Dividers, borders |
| `--app-text-primary` | `#EDE9FE` | Primary text |
| `--app-text-secondary` | `#A89BC2` | Secondary/meta text |
| `--app-accent` | `#9D5FF3` | Primary actions, links, focus |
| `--app-accent-hover` | `#7C3AED` | Hovered primary actions |
| `--app-success` | `#34D399` | Success states |
| `--app-warning` | `#FBBF24` | Warning states |
| `--app-error` | `#F87171` | Error states |
| `--app-muted` | `#3D2F6B` | Disabled, placeholder text |

---

## Typography

Same type system as the brand website — adapted for app UI density.

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| App Heading | Fraunces | 24–32px | 700 | Page titles, section headers |
| Section Heading | Fraunces | 18–20px | 700 | Card headers, panel titles |
| Body | Source Serif 4 | 14–16px | 400 | Primary content |
| UI Label | Source Serif 4 | 13–14px | 600 | Button text, form labels |
| Caption/Meta | JetBrains Mono | 11–12px | 400 | Timestamps, badges, counts |
| Code/Mono | JetBrains Mono | 13px | 400 | API keys, shop names |

---

## Spacing System

Based on 4px grid. App UI is denser than marketing pages — tighter spacing is appropriate.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Icon gaps, tight inline spacing |
| `--space-2` | 8px | Form element gaps, dense lists |
| `--space-3` | 12px | Card padding (compact), table cells |
| `--space-4` | 16px | Standard padding, section gaps |
| `--space-5` | 20px | Card padding (comfortable) |
| `--space-6` | 24px | Section gaps, panel margins |
| `--space-8` | 32px | Major section breaks |

---

## App Layout

### Shell Layout (Embedded App Bridge)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  App Name              [Merchant: mystore.myshopify] │
│  ─────────────────────────────────────────────────────────  │
│  [Sidebar Nav]              │  [Page Content]               │
│  ───────────────────────────│  ───────────────────────────  │
│  • Dashboard                 │  Page title + actions         │
│  • [Nav Item]                │                               │
│  • [Nav Item]                │  Content area                 │
│  • [Nav Item]                │                               │
│                              │                               │
│  [User Menu]                 │                               │
└──────────────────────────────┴───────────────────────────────┘
```

- **App Bar**: 56px height. Shows app branding (logo + name), connected store name.
- **Sidebar**: 240px wide (collapsible to 64px icon rail). Sticky. Active state highlighted with accent left border.
- **Content Area**: Fluid width. Max content width 1200px for data tables, 720px for forms.
- **No top navigation** — sidebar handles all navigation within the app.

### Page Patterns

1. **Dashboard** — Stats cards row + recent activity list + quick actions
2. **List/Index** — Filterable data table with bulk actions
3. **Detail** — Full-width content with sidebar for metadata/actions
4. **Form/Setup** — Centered single-column form, max-width 560px
5. **Modal** — Centered dialog for confirmations, quick edits

---

## Core Components

### App Shell

| Component | States | Notes |
|---|---|---|
| `AppShell` | default | Full app container with header, sidebar, content |
| `AppHeader` | default | Top bar with app branding + connected store |
| `AppSidebar` | expanded, collapsed | Primary navigation. Collapsible to icon rail. |
| `AppSidebarNav` | default, active, hover | Nav items with icons. Active state: left accent border + bg highlight |
| `AppUserMenu` | closed, open | Store name + avatar dropdown |
| `SkipLink` | — | Skip to main content (accessibility) |

### Navigation

| Component | States | Notes |
|---|---|---|
| `NavItem` | default, active, hover, disabled | Icon + label. Active = accent left border. |
| `BreadcrumbNav` | default | Page hierarchy. Accessible. |
| `Tabs` | default | For sub-page navigation within a feature |
| `Badge` | default, success, warning, error | Counts, statuses, labels |

### Data Display

| Component | States | Notes |
|---|---|---|
| `DataTable` | default, loading, empty, error | Sortable columns, row selection, pagination |
| `StatsCard` | default, loading | Metric value + label + optional trend indicator |
| `ActivityItem` | default | Timestamp + description + optional action link |
| `StatusBadge` | active, inactive, pending, error | Semantic status indicator |
| `EmptyState` | default | Icon + message + CTA for empty lists |
| `LoadingState` | — | Skeleton loaders matching content shape |
| `ErrorState` | default | Error message + retry action |

### Forms & Inputs

| Component | States | Notes |
|---|---|---|
| `Input` | default, focus, error, disabled | Label above. Error message below. |
| `Textarea` | default, focus, error, disabled | Auto-grow option |
| `Select` | default, open, focus, error, disabled | Native select with custom styling |
| `Checkbox` | unchecked, checked, indeterminate, disabled | Accessible with label |
| `RadioGroup` | default | Accessible radio group |
| `Switch` | off, on, disabled | Toggle with accessible label |
| `FormField` | default, error | Wraps Input + Label + Error message |

### Actions

| Component | States | Notes |
|---|---|---|
| `Button` | default, hover, active, disabled, loading | Primary/Secondary/Ghost variants |
| `IconButton` | default, hover, active, disabled | Square button, icon only |
| `ActionMenu` | closed, open | Dropdown for secondary actions |
| `CreateButton` | default | "New [Item]" CTA button with + icon |

### Feedback & Overlays

| Component | States | Notes |
|---|---|---|
| `Modal` | default | Confirmation dialogs, quick edits. Focus trap. |
| `Toast` | info, success, warning, error | Auto-dismiss. Stack at bottom-right. |
| `Tooltip` | — | On hover/focus. 500ms delay. |
| `AlertBanner` | info, success, warning, error | Top-of-content persistent messages |
| `ConfirmDialog` | default | Modal with destructive action confirmation |

### Layout

| Component | States | Notes |
|---|---|---|
| `Card` | default | Surface container. Header + body + footer slots. |
| `CardHeader` | default | Title + optional description |
| `SectionCard` | default | Grouped content within a page |
| `Divider` | — | Horizontal rule |
| `Stack` | default | Vertical stack of items with consistent gap |
| `Grid` | default | CSS Grid wrapper for responsive columns |
| `PageContainer` | default | Centers content, applies max-width and padding |

---

## Accessibility Requirements

All components meet WCAG 2.1 AA:

- **Color contrast**: 4.5:1 minimum for normal text, 3:1 for large text and UI components
- **Focus visible**: Every interactive element has a visible focus indicator (ring or outline)
- **Touch targets**: Minimum 44×44px for all interactive elements
- **Keyboard navigation**: Full keyboard operability, logical tab order
- **ARIA**: All components have appropriate roles, states, and properties annotated
- **Motion**: All animations respect `prefers-reduced-motion`
- **Screen reader**: Content is announced correctly; live regions for dynamic updates

---

## Shopify-Specific Considerations

### App Bridge Integration

- Use `@shopify/app-bridge` for: redirect, toasts, modals, context cards
- Our custom `Modal` component wraps App Bridge's modal for consistency with the design system
- Our custom `Toast` component wraps App Bridge's toast
- Navigation uses App Bridge's `NavigationMenu` when possible

### Embedded App Context

- App runs inside Shopify admin iframe
- Standard Shopify admin chrome (sidebar, top bar) is NOT shown — we provide our own
- Store context (shop domain, access token) passed via App Bridge URL tokens
- Connection status shown in app header

### Polaris Compatibility

- For complex data tables and form patterns, Polaris components may be used as a base and styled with our design tokens
- Our design system takes priority for: color palette, typography, spacing, animation style
- Polaris is a foundation, not the final word — we adapt it to the Violet Depths system

---

## File Structure (Planned)

```
src/
├── app/
│   ├── (app)/
│   │   ├── layout.tsx          # App shell with sidebar
│   │   ├── page.tsx            # Dashboard
│   │   ├── [feature]/
│   │   │   ├── page.tsx        # List/index view
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Detail view
│   │   └── settings/
│   │       └── page.tsx
├── components/
│   ├── app/
│   │   ├── app-shell.tsx
│   │   ├── app-header.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── app-nav-item.tsx
│   │   └── app-user-menu.tsx
│   ├── data/
│   │   ├── data-table.tsx
│   │   ├── stats-card.tsx
│   │   ├── status-badge.tsx
│   │   ├── activity-item.tsx
│   │   └── empty-state.tsx
│   ├── feedback/
│   │   ├── toast.tsx
│   │   ├── alert-banner.tsx
│   │   └── confirm-dialog.tsx
│   └── ui/                     # Extended from brand website
│       └── ...
├── hooks/
│   ├── use-app-bridge.ts
│   └── use-shop-origin.ts
└── lib/
    └── app-tokens.css           # CSS custom properties for app
```

---

## Implementation Notes

- Design tokens live in `src/lib/app-tokens.css` as CSS custom properties
- All components built with TypeScript, Radix UI primitives where applicable
- Tests written alongside components (TDD — see QA Engineer role)
- Storybook for component documentation and visual testing

---

## Open Items

| Item | Owner | Status |
|---|---|---|
| Confirm app name and logo for app header | Jolon | Open — defaults to "MysteryD" with violet "M" logo |
| Confirm primary navigation structure | UX Designer | ✅ Done — nav confirmed in MYS-50 |
| Define first app feature set | Product | ✅ Approved — MVP fully implemented |
| Shopify App Bridge credentials | Engineering | Open — blocking OAuth/deployment |
| App URL / OAuth callback setup | Engineering | Open — blocking deployment |

---

## Dependencies

- **MYS-5**: Frontend env — potentially outdated (workspace is Next.js, not Vite — flagged for CTO review)
- **MYS-7**: API integration layer — **COMPLETE ✅** (TanStack Query, typed hooks, 232 tests)
- **MYS-8**: Core app pages — **IN PROGRESS (CTO)** — unblocked now that MYS-7 is done
- **MYS-54**: Feature set approved (Dashboard, Orders, Customers, Analytics, Settings) — see plan

---

## Implementation Status (2026-03-31)

### Design System Foundation
| Component | Status | Notes |
|---|---|---|
| Color tokens (light/dark) | ✅ Implemented | In `src/lib/app-tokens.css` and `src/app/globals.css` |
| Typography tokens | ✅ Implemented | Fraunces, Source Serif 4, JetBrains Mono |
| Spacing tokens | ✅ Implemented | 4px grid system |
| Radius tokens | ✅ Implemented | sm/md/lg radii |
| Shadow tokens | ✅ Implemented | sm/md/lg shadows |
| Animation utilities | ✅ Implemented | Custom keyframes in globals.css |

### UI Components (src/components/ui/)
| Component | Status | Notes |
|---|---|---|
| Button | ✅ Implemented | Primary/Secondary/Ghost variants, loading state |
| Input | ✅ Implemented | Focus, error, disabled states |
| Textarea | ✅ Implemented | Auto-grow option |
| Select | ✅ Implemented | Native select styling |
| Checkbox | ✅ Implemented | Accessible with label |
| Radio | ✅ Implemented | Accessible group |
| Switch | ✅ Implemented | Toggle with accessible label |
| Badge | ✅ Implemented | Status variants |
| Card | ✅ Implemented | Header/body/footer slots |
| Dialog/Modal | ✅ Implemented | Focus trap, accessible |
| Tooltip | ✅ Implemented | Hover/focus trigger |
| Alert | ✅ Implemented | Info/success/warning/error |
| Progress | ✅ Implemented | Linear progress bar |
| Tabs | ✅ Implemented | Accessible tablist |
| Separator | ✅ Implemented | Horizontal rule |
| Table | ✅ Implemented | Accessible data table |
| Avatar | ✅ Implemented | Image with fallback |
| Breadcrumb | ✅ Implemented | Accessible navigation |
| ScrollArea | ✅ Implemented | Custom scrollbar |
| Skeleton | ✅ Implemented | Loading placeholder |
| Spinner | ✅ Implemented | Loading indicator |
| Pagination | ✅ Implemented | Page navigation |
| EmptyState | ✅ Implemented | Icon + message + CTA |
| ActivityItem | ✅ Implemented | Timestamp + description |
| StatCard | ✅ Implemented | Metric + label + trend |
| DataTable | ✅ Implemented | Sortable columns, row selection, pagination, loading/empty/error states |
| StatusBadge | ✅ Implemented | Semantic status indicator (active/inactive/pending/error) |

### Feedback & Overlay Components (src/components/ui/)
| Component | Status | Notes |
|---|---|---|
| Toast | ✅ Implemented | Auto-dismiss feedback messages with ToastProvider |
| AlertBanner | ✅ Implemented | Top-of-content persistent messages |
| ConfirmDialog | ✅ Implemented | Modal for destructive action confirmation |

### App Shell Components (src/components/app/)
| Component | Status | Notes |
|---|---|---|
| AppShell | ✅ Implemented | Full container with sidebar, header, main content |
| AppHeader | ✅ Implemented | App branding, store info, notifications, dark mode toggle |
| AppSidebar | ✅ Implemented | Collapsible to icon rail, nav items with badges |
| AppNavItem | ✅ Implemented | Active/hover/disabled states, icon + badge support |
| AppUserMenu | ✅ Implemented | Store dropdown with sign out |
| SkipLink | ✅ Implemented | WCAG skip-to-main-content for keyboard users |

### Accessibility Notes
- All components have visible focus states via `focus-visible:ring-*` classes
- WCAG 2.1 AA contrast ratios verified for Violet Depths palette
- Motion respects `prefers-reduced-motion` via custom media query
- Touch targets meet 44px minimum in Button, NavItem, FormFields

### Implementation Status (Updated 2026-04-01)
| Component | Owner | Status | Notes |
|---|---|---|---|
| Design tokens (light/dark) | UX Designer | ✅ Done | `app-tokens.css` |
| UI component library | UX Designer | ✅ Done | 40+ components |
| AppShell + nav components | UX Designer | ✅ Done | MYS-50 |
| DataTable, StatusBadge, Toast, AlertBanner, ConfirmDialog | UX Designer | ✅ Done | MYS-50 |
| API layer (TanStack Query + hooks) | Engineering | ✅ Done | MYS-7, 232 tests |
| Dashboard page | Engineering | ✅ Done | MYS-8 |
| Orders list + detail | Engineering | ✅ Done | MYS-8 |
| Customers list + detail | Engineering | ✅ Done | MYS-8 |
| Analytics page | Engineering | ✅ Done | MYS-8 |
| Settings page | Engineering | ✅ Done | MYS-8 |
| E2E tests (Playwright) | Engineering | ⏳ Todo | MYS-9, unassigned |

### Open Items
| Item | Owner | Status |
|---|---|---|
| Shopify App Bridge credentials | Engineering | Open — blocking OAuth |
| App URL / OAuth callback setup | Engineering | Open — blocking deployment |
| App Bridge integration hooks | Engineering | Not started — needed: useAppBridge, useShopOrigin |
| E2E test coverage | Engineering | MYS-9, unassigned |
| App Store listing prep | PM | Pending App Bridge + OAuth |
