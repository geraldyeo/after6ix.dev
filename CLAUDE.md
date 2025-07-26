# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a pnpm workspace monorepo for after6ix.dev, currently in early development stage. The project is TypeScript-dominant and uses strict TypeScript configuration.

## Commands

### Development Setup
```bash
# Install dependencies
pnpm install

# Run tests (currently placeholder)
pnpm test

# Run linting
pnpm lint

# Run linting with auto-fix
pnpm lint:fix
```

### Package Management
```bash
# Add dependency to root
pnpm add -w <package>

# Add dependency to specific workspace
pnpm add <package> --filter <workspace-name>

# Add dev dependency to root
pnpm add -Dw <package>
```

## Architecture

### Workspace Structure
- **`apps/*`** - Frontend applications
  - **`cv`** - CV and Resume Improver (@after6ix/cv)
  - **`site`** - Main After6ix website (@after6ix/site)
- **`packages/*`** - Backend modules and shared libraries (not yet created)

The workspace is configured in `pnpm-workspace.yaml` to automatically include any packages in these directories.

### TypeScript Configuration
- **`tsconfig.base.json`** - Shared strict TypeScript configuration with ES2022 target
- **`tsconfig.json`** - Root configuration using TypeScript project references
- Composite projects enabled for better monorepo support
- Strict mode with all checks enabled

### Key Requirements
- Node.js >= 22.15.0
- pnpm >= 10.11.0 (enforced via packageManager field)

## Development Notes

1. No build, lint, or format commands are currently configured - these should be added as needed
2. When creating new packages or apps, ensure they have their own `tsconfig.json` that extends from `tsconfig.base.json`
3. TypeScript project references should be used for inter-package dependencies