# After6ix

A TypeScript monorepo for after6ix.dev, built with modern web technologies and managed by pnpm workspaces.

## 🏗️ Monorepo Structure

```
after6ix.dev/
├── apps/                 # Frontend applications
│   ├── cv/               # CV and Resume Improver
│   └── site/             # Main After6ix website
├── packages/             # Shared packages and backend services
│   └── (Node.js packages and libraries)
├── eslint.config.mjs     # ESLint configuration
├── tsconfig.base.json    # Base TypeScript configuration
├── tsconfig.json         # Root TypeScript configuration
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## 🛠️ Tech Stack

- **Language**: TypeScript (strict mode enabled)
- **Package Manager**: pnpm (v10.11.0+)
- **Runtime**: Node.js (v22.15.0+)
- **Build System**: TypeScript project references
- **Code Quality**: ESLint with TypeScript and React support
- **Frontend**: React applications with modern JSX transform
- **Backend**: Node.js packages with ES modules support

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
# Run linting
pnpm lint

# Run linting with auto-fix
pnpm lint:fix

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

- **apps/**: React applications with JSX/TSX support, React hooks linting
- **packages/**: Node.js packages with CommonJS/ESM support, Node globals

Each workspace package should have its own `tsconfig.json` extending from `tsconfig.base.json`.

## 🔧 TypeScript Configuration

- Strict mode with all type checking enabled
- ES2022 target for modern JavaScript features
- Project references for better monorepo support
- Declaration maps for improved debugging

## 📝 Contributing

See [CLAUDE.md](./CLAUDE.md) for AI-assisted development guidelines.