# Makotot.dev Agent Guide

## Scope

This guide applies to the entire repository.

## Project Context

- **Framework**: Next.js
- **Language**: TypeScript
- **UI Library**: React
- **Styling**: Panda CSS
- **Testing**: Vitest, Playwright, Storybook
- **Linting**: ESLint
- **Formatting**: Prettier
- **Content Management**: Velite
- **Package Manager**: pnpm

## Recommended Commands

Use the following commands from `package.json` during development:

- `pnpm dev`: Start the development server with Turbopack.
- `pnpm build`: Build the application for production.
- `pnpm lint`: Lint the codebase using Next.js's ESLint configuration.
- `pnpm test`: Run the test suite with Vitest.
- `pnpm format:check`: Check formatting with Prettier.
- `pnpm format:write`: Format the codebase with Prettier.
- `pnpm storybook`: Start the Storybook development server.
- `pnpm build-storybook`: Build the Storybook for deployment.
- `pnpm test-storybook`: Run Storybook-related tests.

## Contribution Guidelines

- Format code with `pnpm format:write` before committing.
- Ensure linting passes with `pnpm lint`.
- Run relevant tests (e.g., `pnpm test`, `pnpm test-storybook`) for the areas you modify.
- Follow TypeScript best practices and Panda CSS conventions.
