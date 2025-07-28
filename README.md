# After6ix

A TypeScript monorepo for after6ix.dev, built with modern web technologies and managed by pnpm workspaces.

## 🏗️ Monorepo Structure

```
after6ix.dev/
├── apps/                 # Frontend applications
│   ├── cv/               # CV and Resume Improver (React)
│   └── site/             # Main After6ix website (React)
├── packages/             # Shared packages and utilities
│   └── core/             # Core utilities and shared functions
├── docs/
│   └── adr/              # Global architecture decision records
├── eslint.config.mjs     # ESLint configuration
├── tsconfig.base.json    # Base TypeScript configuration
├── tsconfig.json         # Root TypeScript configuration
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## 🛠️ Tech Stack

- **Language**: TypeScript (strict mode enabled)
- **Package Manager**: pnpm (v10.11.0+)
- **Runtime**: Node.js (v22.15.0+)
- **Module System**: ES modules (`"type": "module"`)
- **Build System**: TypeScript project references
- **Code Quality**: ESLint with TypeScript and React support
- **Frontend**: React 18 with modern JSX transform
- **Infrastructure**: SST (Serverless Stack)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.15.0
- pnpm >= 10.11.0

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Build all packages
pnpm -w run build:packages

# Watch mode for package development
pnpm -w run dev:packages

# Build entire TypeScript project
pnpm -w run build:all

# Clean build artifacts
pnpm -w run clean:all

# Run linting
pnpm -w run lint

# Run linting with auto-fix
pnpm -w run lint:fix

# Run SST development server
pnpm -w run dev

# Run tests (placeholder)
pnpm test
```

### Adding Dependencies

```bash
# Add to root workspace
pnpm add -w <package>

# Add to specific workspace
pnpm add <package> --filter <workspace-name>

# Add dev dependency to root
pnpm add -Dw <package>
```

## 📁 Workspace Configuration

### Apps (Frontend Applications)
- React 18 with TypeScript
- Modern JSX transform (`react-jsx`)
- Path mappings for absolute imports (`@/*`, `@components/*`, etc.)
- Strict TypeScript configuration

### Packages (Shared Libraries)
- ES modules with TypeScript
- Composite projects for project references
- Build outputs to `dist` directory
- Source files in `src` directory

Each workspace has its own `tsconfig.json` extending from `tsconfig.base.json`.

## 🔧 Configuration

### TypeScript
- Strict mode with all type checking enabled
- ES2022 target for modern JavaScript features
- Project references for cross-package imports
- Declaration maps for improved debugging
- Path mappings in base config for `@after6ix/*` imports

### ESLint
- Separate configurations for TypeScript and JavaScript files
- React plugin for JSX/TSX files in apps workspace
- Type-aware linting for TypeScript files
- Ignores build artifacts and `.sst` directory

### Cross-Package Imports
```typescript
// Import from @after6ix/core in any app
import { greeting, formatDate } from '@after6ix/core';
```

## 📚 Architecture Decision Records (ADR)

We use Architecture Decision Records to document important architectural decisions in this project.

### ADR Commands

```bash
# Create a new ADR
pnpm log4brains adr new

# View ADRs in web UI (http://localhost:4004)
pnpm log4brains preview

# Build static ADR documentation
pnpm log4brains build

# List all ADRs
pnpm log4brains list
```

### ADR Structure

This project uses a multi-package ADR structure:

- **Global ADRs**: `docs/adr/` - Monorepo-wide architectural decisions
- **Site ADRs**: `apps/site/docs/adr/` - After6ix website specific decisions
- **CV ADRs**: `apps/cv/docs/adr/` - CV app specific decisions

When creating a new ADR with `pnpm log4brains adr new`, you'll be prompted to select the appropriate scope (Global, apps-site, or apps-cv).

All ADRs are:
- Written in Markdown using MADR (Markdown Architectural Decision Records) format
- Numbered sequentially within their scope (e.g., `0001-use-log4brains.md`)
- Viewable together in the log4brains web UI

## 📝 Contributing

See [CLAUDE.md](./CLAUDE.md) for AI-assisted development guidelines.