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

## Git Commit Conventions

This project follows the Conventional Commits specification for commit messages:

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Examples
```bash
# Feature with scope
feat(auth): add OAuth2 integration

# Fix without scope
fix: resolve memory leak in data processing

# Breaking change
feat(api): change response format

BREAKING CHANGE: API responses now use camelCase instead of snake_case

# Multiple line body
docs: update contribution guidelines

- Add commit message conventions
- Include code review process
- Update testing requirements
```

### Tips for Writing Good Commit Messages
1. Keep the subject line under 50 characters
2. Use imperative mood in the subject line ("add" not "added" or "adds")
3. Capitalize the first letter of the subject line
4. Do not end the subject line with a period
5. Separate subject from body with a blank line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

## Important Notes

- This is a fresh Nx workspace with infrastructure ready but no actual packages yet
- All commands should be run through Nx (npx nx) rather than directly
- The workspace uses npm workspaces, so dependencies are hoisted to the root
- Nx Cloud is configured (ID: 6881ae1ccc7a680070c08f5b) but currently commented out in CI