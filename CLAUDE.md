# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a pnpm workspace monorepo for after6ix.dev, currently in early development stage. The project is TypeScript-dominant and uses strict TypeScript configuration.

## Tool usages and core workflows with Claude Code

### Tools

- Sequential Thinking must be used for all multi-step problems or research tasks
- Perplexity Search must be used for any fact-finding or research queries
- Context7 must be used for any documentation lookup of libraries or API
- Firecrawl must be used for extracting data for any web scraping tasks

### Specialized Agents

The following specialized agents are available organized by category:

#### Analysis

- **ogilvy-creative-duo**: Marketing and advertising creative development
- **prd-adr-reviewer**: Technical review of PRDs and ADRs
- **ui-ux-designer**: User interface and experience design

#### Architecture

- **cloud-architect**: Cloud infrastructure design and optimization
- **design-system-architect**: Component libraries and design systems

#### Development

- **api-documenter**: API documentation and OpenAPI specs
- **architect-reviewer**: Code architecture review
- **backend-architect**: Backend system architecture
- **code-reviewer**: Code quality and best practices review
- **database-optimizer**: Database performance optimization
- **debugger-specialist**: P0 issue debugging and troubleshooting
- **frontend-developer**: React components and frontend development
- **pair-programmer**: Real-time code review and pair programming
- **security-auditor**: Security audits and vulnerability assessment
- **sql-query-optimizer**: SQL query optimization
- **test-automator**: Test automation and coverage
- **typescript-pro**: Advanced TypeScript patterns

#### Infrastructure

- **deployment-engineer**: CI/CD pipelines and containerization
- **devops-troubleshooter**: Production issue debugging

#### Context Management

- **context-manager**: Multi-agent workflow coordination

### Tool-specific Guidelines

#### Sequential Thinking

- Always break complex tasks into manageable steps
- Document thought process clearly
- Allow for revision and refinement
- Track branches and alternatives

### Core workflows

#### 1. INITIAL ANALYSIS (Sequential Thinking)

- Break down the research query into core components
- Identify key concepts and relationships
- Plan search and verification strategy
- Determine which tools will be most effective

#### 2. PRIMARY SEARCH (Perplexity Search)

- Start with broad context searches
- Use targeted follow-up searches for specific aspects
- Document and analyze search results

#### 3. DEEP VERIFICATION (Firecrawl)

- Navigate to key websites identified in search
- Extract specific data points
- Click through and explore relevant links
- Fill forms if needed for data gathering

#### 4. SYNTHESIS & PRESENTATION

- Combine findings from all tools
- Present information in structured format
- Highlight key insights and relationships

### ADR Check Workflow (REQUIRED for Feature Work)

When working on any new feature or modifying existing features, you MUST:

1. **Check for existing ADRs** before implementation:
   - Search global ADRs in `./docs/adr/` for monorepo-wide decisions
   - Search package-specific ADRs based on the feature location:
     - Site features: check `./apps/site/docs/adr/`
     - CV features: check `./apps/cv/docs/adr/`
   - Use `pnpm log4brains list` or search for relevant keywords in ADR files

2. **Confirm ADR requirements** with the user:
   - If relevant ADRs exist: Reference them and confirm the implementation aligns with documented decisions
   - If no ADRs exist: Ask the user if an ADR should be created before proceeding
   - If uncertain about scope: Ask the user whether the decision should be global or package-specific

3. **Reference ADRs in code**:
   - Add comments in code referencing relevant ADR numbers (e.g., `// See ADR-0001`)
   - Ensure implementation follows the decisions documented in ADRs

Example workflow:

```text
User: "Add authentication to the CV app"
AI: Let me check for existing ADRs about authentication...
[Searches ./docs/adr/ and ./apps/cv/docs/adr/]
AI: I found no existing ADRs about authentication. Should I create an ADR to document the authentication approach before implementing?
```

## Commands

### Development Setup

```bash
# Install dependencies
pnpm install

# Run tests (currently placeholder)
pnpm test

# Run linting
pnpm -w run lint

# Run linting with auto-fix
pnpm -w run lint:fix

# Build all packages
pnpm -w run build:packages

# Build entire TypeScript project
pnpm -w run build:all

# Watch mode for packages development
pnpm -w run dev:packages

# Clean build artifacts
pnpm -w run clean:all
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

### Architecture Decision Records (ADR)

```bash
# Create a new ADR
pnpm log4brains adr new

# Preview ADRs locally with hot reload
pnpm log4brains preview

# Build static ADR documentation
pnpm log4brains build

# List all ADRs
pnpm log4brains list
```

#### ADR Workflow

1. **Creating ADRs**: Use `pnpm log4brains adr new` to create a new ADR. You'll be prompted to select which package the ADR belongs to:
   - **Global ADRs**: Select "Global" for architecture decisions affecting the entire monorepo
   - **Package-specific ADRs**: Select the specific package (apps-site, apps-cv) for decisions scoped to that package

2. **ADR Structure**: Multi-package structure with:
   - **Global ADRs**: `./docs/adr/` - For monorepo-wide decisions
   - **Site ADRs**: `./apps/site/docs/adr/` - For the main After6ix website
   - **CV ADRs**: `./apps/cv/docs/adr/` - For the CV and Resume Improver app

3. **ADR Format**: Uses MADR (Markdown Architectural Decision Records) format

4. **Viewing ADRs**: Use `pnpm log4brains preview` to view all ADRs (global and package-specific) in a web UI at [localhost:4004](http://localhost:4004)

5. **Building Documentation**: Use `pnpm log4brains build` to generate static HTML documentation in `.log4brains/out/`

6. **Best Practices**:
   - Use global ADRs for decisions about: monorepo structure, shared tooling, cross-package dependencies
   - Use package-specific ADRs for: UI/UX decisions, package-specific libraries, internal architecture

## Project Architecture

### Workspace Structure

- **`apps/*`** - Frontend applications
  - **`cv`** - CV and Resume Improver (@after6ix/cv)
  - **`site`** - Main After6ix website (@after6ix/site)
  - **`ui`** - Design system and UI components (@after6ix/ui)
- **`packages/*`** - Shared libraries and utilities
  - **`core`** - Core utilities and shared functions (@after6ix/core)

The workspace is configured in `pnpm-workspace.yaml` to automatically include any packages in these directories.

### Shared Module Compilation Strategy

**Important**: Shared packages (`@after6ix/ui`, `@after6ix/core`) are NOT pre-built. They export TypeScript source files directly, and consuming applications handle the compilation. This approach:

- **Simplifies development** - No build step needed for shared packages
- **Enables better tree-shaking** - Consuming apps optimize exactly what they use
- **Improves DX** - Direct source imports with full TypeScript support
- **Reduces complexity** - No need for complex build configurations in shared packages

When creating new shared packages:

1. Export TypeScript source files directly in `package.json`
2. Set `"type": "module"` for ES modules
3. Let consuming applications handle transpilation
4. No need for build tools like tsup, rollup, or webpack

### TypeScript Configuration

- **`tsconfig.base.json`** - Shared strict TypeScript configuration with ES2022 target
- **`tsconfig.json`** - Root configuration using TypeScript project references
- **React Apps** - Both `apps/site` and `apps/cv` have React-specific TypeScript configurations
- Composite projects enabled for better monorepo support
- Strict mode with all checks enabled
- Path mappings configured for absolute imports

#### TypeScript Best Practices

**IMPORTANT**: Always prioritize catching errors early:

1. **Never use `skipLibCheck: true`** - We want to catch type issues in dependencies
2. **Keep strict mode enabled** - All strict checks should remain on
3. **Don't ignore type errors** - Fix them properly instead of using `@ts-ignore`
4. **Validate third-party types** - If a library has type issues, consider:
   - Updating to a fixed version
   - Contributing fixes upstream
   - Using a well-typed alternative
   - Creating proper type definitions

This approach ensures:

- Runtime errors are caught at compile time
- API contracts are validated across packages
- Dependencies remain type-safe
- Better developer experience with accurate IntelliSense

### Key Requirements

- Node.js >= 22.15.0
- pnpm >= 10.11.0 (enforced via packageManager field)

### Module System

- All packages and apps use ES modules (`"type": "module"` in package.json)
- ESLint is configured to handle both TypeScript and JavaScript files
- TypeScript files get type-checking rules, JavaScript files get standard ESLint rules

### Cross-Package Imports

- Packages can import from each other using workspace protocol: `"@after6ix/core": "workspace:*"`
- TypeScript paths are configured for clean imports
- Build outputs go to `dist` directories

## Development Notes

1. Build packages before running apps that depend on them: `pnpm -w run build:packages`
2. When creating new packages or apps, ensure they have their own `tsconfig.json` that extends from `tsconfig.base.json`
3. TypeScript project references should be used for inter-package dependencies
4. Use `pnpm exec` or `pnpm dlx` instead of `npx` for better pnpm compatibility

## Documentation Guidelines

To maintain readability, if this CLAUDE.md file exceeds 1000 words, refactor it by:

- Moving detailed sections to separate files in `/docs` (e.g., project-setup.md, api-guidelines.md, testing-approach.md, deployment-notes.md)
- Keeping only essential information in CLAUDE.md: tool usage instructions, specialized agent configurations, and links to the detailed documentation
- This prevents the file from becoming unwieldy while preserving quick access to critical Claude Code instructions
