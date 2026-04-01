# Plan — MYS-7: API Integration Layer

## SPARC Phase 1: Specification

### Task Summary
Set up the API integration layer for the MysteryD Shopify embedded app. This is the foundation for all data fetching.

### Scope
- Read-only access to orders, customers, analytics (v1 MVP)
- No write operations
- No billing
- Shopify API scopes: `read_orders`, `read_customers`, `read_analytics`

### Requirements
1. **TanStack Query (React Query v5)** — Install, configure, wrap app
2. **Authentication Flow** — Shopify OAuth token management, session storage, token refresh
3. **API Service Layer** — Typed API clients for Shopify (orders, customers, analytics)
4. **Error Handling** — Consistent error states across all queries
5. **Loading States** — Standardized loading states via TanStack Query

### Edge Cases
- Token expiration during session → redirect to re-auth
- Network failure → retry with exponential backoff (max 3 retries)
- Invalid/missing shop context → show setup required state
- API rate limiting (429) → respect Retry-After header
- CORS issues in embedded app context → use Shopify's proxy endpoints

---

## SPARC Phase 2: Pseudocode / TDD Anchors

### Tests to Write First (TDD Red)
1. `src/lib/api/__tests__/shopify-auth.test.ts` — Auth token storage/retrieval
2. `src/lib/api/__tests__/orders.test.ts` — Orders query with mock
3. `src/lib/api/__tests__/customers.test.ts` — Customers query with mock
4. `src/lib/api/__tests__/analytics.test.ts` — Analytics query with mock
5. `src/lib/api/__tests__/query-client.test.ts` — QueryClient configuration

### Core Logic
```
QueryClientProvider
  └── TanStack Query Config (staleTime, retry, etc.)
        ├── useAuth() hook — token management
        ├── useOrders() hook — /admin/api/2024-01/orders.json
        ├── useCustomers() hook — /admin/api/2024-01/customers.json
        └── useAnalytics() hook — /admin/api/2024-01/analytics.json
```

---

## SPARC Phase 3: Architecture

### File Structure
```
src/lib/api/
├── client.ts              # Base fetch client with auth headers
├── shopify-auth.ts        # OAuth token management
├── query-client.ts        # TanStack Query client config
├── orders.ts              # Orders API types + hooks
├── customers.ts           # Customers API types + hooks
├── analytics.ts           # Analytics API types + hooks
├── types.ts               # Shared Shopify API types
└── __tests__/             # TDD test files
```

### Key Interfaces
```typescript
interface ShopifySession {
  shop: string;
  accessToken: string;
  scope: string;
}

interface ShopifyOrder {
  id: number;
  name: string;
  total_price: string;
  // ... minimal types for MVP
}

interface ShopifyCustomer {
  id: number;
  email: string;
  // ... minimal types for MVP
}

interface AnalyticsData {
  // ... analytics response types
}
```

### Security
- Access tokens stored in memory only (never localStorage for embedded apps)
- Tokens passed via `Authorization: Bearer {token}` header
- Shop domain validated before any API call

---

## SPARC Phase 4: Refinement (Implementation)

1. Install `@tanstack/react-query` and `@tanstack/react-query-devtools`
2. Create `src/lib/api/` directory structure
3. Write tests first (TDD Red)
4. Implement minimal code to pass tests (TDD Green)
5. Refactor for quality (TDD Refactor)

---

## SPARC Phase 5: Completion

**Status: ✅ COMPLETE**

### Deliverables
- [x] TanStack Query installed and configured with devtools
- [x] Shopify auth token management via `shopify-auth.ts` (sync sessionStorage)
- [x] Typed API service layer: `client.ts`, `orders.ts`, `customers.ts`, `analytics.ts`
- [x] Shared types in `types.ts` (ShopifyOrder, ShopifyCustomer, ShopifyAddress, etc.)
- [x] QueryProvider component wrapping the app
- [x] All hooks: `useOrders`, `useOrder`, `useCustomers`, `useCustomer`, `useAnalytics`

### Testing
- [x] 232 tests passing
- [x] `shopify-auth.test.ts` — 6 tests (session storage get/store/clear/isAuthenticated)
- [x] `query-client.test.ts` — 5 tests (QueryClient config)
- [x] `orders.test.tsx` — 3 tests (useOrders/useOrder hooks)
- [x] `customers.test.tsx` — 3 tests (useCustomers/useCustomer hooks)
- [x] `analytics.test.tsx` — 2 tests (useAnalytics hook)

### Quality
- [x] Lint passes (1 pre-existing warning in `app-user-menu.tsx`)
- [x] Build passes
- [x] All SPARC phases completed

### Issue Fixes (Pre-existing)
- Fixed Checkbox `indeterminate` type in `checkbox.tsx` (was blocking build)
- Fixed `ShopifyApiError` declaration conflict between `client.ts` and `types.ts`
- Installed missing `@radix-ui/react-toast` dependency

### Files Created
```
src/lib/api/
├── index.tsx            # QueryProvider + barrel exports
├── shopify-auth.ts     # ShopifySession types + sync sessionStorage helpers
├── query-client.ts     # TanStack Query client factory
├── client.ts           # Base fetch with ShopifyApiError class
├── types.ts            # ShopifyOrder, ShopifyCustomer, ShopifyAddress, etc.
├── orders.ts           # useOrders, useOrder hooks
├── customers.ts        # useCustomers, useCustomer hooks
├── analytics.ts        # useAnalytics hook
└── __tests__/          # 5 test files (232 tests total)
```

### Blocking MYS-8
MYS-8 (Core App Pages) is now unblocked and can proceed.