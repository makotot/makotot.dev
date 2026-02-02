# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server (runs Panda codegen + parallel Velite watch + Next.js Turbopack)
pnpm build            # Production build (Panda codegen + Velite + Next.js)
pnpm lint             # ESLint
pnpm format:check     # Prettier check
pnpm format:write     # Prettier write
pnpm test:unit        # Vitest unit tests
pnpm test:storybook   # Storybook component tests (requires Playwright)
pnpm storybook        # Component development UI (port 6006)
```

## Architecture

### Tech Stack

- **Next.js 16** with App Router and Turbopack
- **Velite** for MDX content management (compiles posts from `/content/posts` to `.velite`)
- **Panda CSS** for styling (generates utilities to `/styled-system`)
- **React 19** with react-aria-components for accessible UI

### Project Structure

```
/src
  /app                    # Next.js App Router pages
  /features               # Feature-organized business logic (e.g., Posts)
  /components             # Shared UI components
  /types                  # Global type definitions

/content/posts            # MDX blog posts with frontmatter
/.velite                  # Generated content (posts.json, types) - gitignored
/styled-system            # Generated Panda CSS utilities
```

### Content Pipeline

1. MDX files in `/content/posts` with frontmatter (title, date, draft, tags)
2. Velite compiles at dev/build time with Shiki syntax highlighting
3. Import posts via `import { posts } from '#site/content'`
4. External Zenn posts fetched server-side and merged with local posts

### Styling Patterns

Two Panda CSS APIs used:

- `css()` - Atomic utility API for element-specific styles
- `sva()` - Slot variant API for component composition (see `Posts` component)

MDX posts support custom components: `<Callout>` and `<Tweet>`

### Key Configuration

- `velite.config.mts` - Post schema and MDX processing with Shiki
- `panda.config.ts` - CSS configuration with typography preset
- `next.config.mjs` - Auto-triggers Velite build, enables typedRoutes

### Testing

**Framework**: Vitest + @storybook/addon-vitest + Playwright

**Test Types**:

- **Unit tests** (`*.test.ts`): Pure logic tests using Vitest
- **Component tests** (`*.stories.tsx`): Storybook stories run as browser tests via addon-vitest

**Commands**:

- `pnpm test:unit` - Run unit tests (no browser required)
- `pnpm test:storybook` - Run Storybook component tests (requires Playwright browsers)

**Configuration**:

- `vitest.config.ts` - Main config with storybook project using Playwright browser
- `.storybook/vitest.setup.ts` - Setup file for Storybook tests (a11y annotations)

**Test Location**:

- Co-locate tests with source: `src/features/Posts/formatter/dateShort/index.test.ts`
- Co-locate stories with components: `src/components/Header/index.stories.tsx`

### Conventions

- Feature-first architecture: features contain related components, types, formatters
- Components exported from `index.tsx` files
- Tests (`*.test.ts`) and stories (`*.stories.tsx`) co-located with components
- ESLint flat config with func-style rule requiring function declarations
