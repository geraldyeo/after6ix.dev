# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Nx-based monorepo workspace for after6ix.dev, using TypeScript and npm workspaces. The project is currently in its initial setup phase with no packages created yet.

## Essential Commands

### Development Commands
```bash
# Generate a new library
npx nx g @nx/js:lib packages/<package-name> --publishable --importPath=@after6ix/<package-name>

# Build a specific project
npx nx build <project-name>

# Run tests for a specific project
npx nx test <project-name>

# Lint a specific project
npx nx lint <project-name>

# Type check a specific project
npx nx typecheck <project-name>

# Run multiple tasks across all projects
npx nx run-many -t lint test build

# View project graph
npx nx graph

# Release packages
npx nx release

# Sync TypeScript project references
npx nx sync
```

### Single Test Execution
```bash
# Run a single test file
npx nx test <project-name> --testFile=<test-file-name>

# Run tests in watch mode
npx nx test <project-name> --watch
```

## Architecture and Structure

The workspace follows Nx monorepo conventions:

- **packages/**: Contains all publishable libraries and applications
- **nx.json**: Central Nx configuration with caching, task pipelines, and plugin settings
- **tsconfig.base.json**: Shared TypeScript configuration with strict mode and composite projects enabled
- **TypeScript Configuration**: Uses composite projects for better monorepo performance and strict type checking

### Key Configuration Details

- **Target**: ES2022 with Node.js module resolution
- **Build Tool**: SWC for fast compilation
- **Code Quality**: Prettier for formatting, TypeScript strict mode for type safety
- **CI/CD**: GitHub Actions workflow configured for main branch and PRs

### Nx-Specific Patterns

1. All tasks are inferred automatically by the TypeScript plugin
2. Caching is configured with named inputs for production and all file types
3. Projects should be generated using Nx generators to maintain consistency
4. Each package in packages/ should have its own project.json or package.json

## Important Notes

- This is a fresh Nx workspace with infrastructure ready but no actual packages yet
- All commands should be run through Nx (npx nx) rather than directly
- The workspace uses npm workspaces, so dependencies are hoisted to the root
- Nx Cloud is configured (ID: 6881ae1ccc7a680070c08f5b) but currently commented out in CI