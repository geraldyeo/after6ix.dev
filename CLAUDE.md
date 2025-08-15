# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a pnpm workspace monorepo for after6ix.dev, currently in early development stage. The project is TypeScript-dominant and uses strict TypeScript configuration.

## Feature Development Workflow

### Step 1: ADR Check/Creation (REQUIRED for Features)

1. **Check for existing ADRs** before any feature work:
   - Search global ADRs in `./docs/adr/` for monorepo-wide decisions
   - Search package-specific ADRs based on feature location
   - Use `pnpm log4brains list` or search for relevant keywords
2. **If no ADR exists**:
   - Ask clarifying questions about the feature
   - Draft an ADR documenting the architectural decision
   - Request approval for the ADR
3. **If ADR exists**:
   - Proceed to create implementation plan based on the ADR

### Step 2: Implementation Planning

1. **Enter plan mode** to create a detailed implementation plan
2. **Document the plan** in `.claude/tasks/YYYY-MM-DD-TASK_NAME.md` with:
   - Use ISO date format for chronological ordering (e.g., `2025-01-15-add-authentication.md`)
   - Detailed implementation approach aligned with ADR
   - Tasks broken down into manageable steps
   - MVP-focused scope (avoid over-engineering)
3. **Research requirements** when external knowledge is needed:
   - Use Context7 first for library documentation/syntax
   - Use Perplexity or research agents as fallback
   - Use Sequential Thinking only for complex multi-step research
4. **Request plan approval** - Present the plan and wait for explicit approval

### Step 3: Implementation

1. **Track progress** using TodoWrite tool for task management
2. **Update the plan** in the same task file as you progress
3. **Document completed work** by appending to the task file:
   - Detailed descriptions of changes made
   - Key decisions and their rationale
   - Context needed for handover to other engineers
4. **Run validation commands** after implementation:
   - Run lint commands: `pnpm -w run lint`
   - Run type-check commands (never build commands)
5. **Reference ADRs in code** with comments (e.g., `// See ADR-0001`)

## Tool usages and core workflows with Claude Code

### Tools

- Sequential Thinking: Use for complex multi-step problems or research tasks
- Context7: Primary tool for library documentation and API syntax lookup
- Perplexity Search: Use for fact-finding or when Context7 doesn't have the information
- Firecrawl: Use for extracting data from web pages and scraping tasks
- Task tool with research agents: Fallback for specialized research needs

### Specialized Agents

The following specialized agents are available organized by category:

#### Analysis

- **ogilvy-creative-duo**: Marketing and advertising creative development
- **prd-adr-reviewer**: Technical review of PRDs and ADRs
- **ui-ux-designer**: User interface and experience design

#### Business & Marketing

- **business-analyst**: Business metrics analysis, KPI tracking, and growth projections
- **content-marketer**: SEO-optimized content creation for blogs, social media, and newsletters
- **sales-automator**: Sales collateral, cold emails, and follow-up sequences

#### Data & AIML

- **ai-engineer**: LLM applications, RAG systems, chatbots, and AI integration
- **data-engineer**: Data pipelines, ETL/ELT processes, and streaming architectures
- **data-scientist**: Data analysis, SQL queries, BigQuery, and analytics
- **prompt-engineer**: Prompt creation, optimization, and AI system prompt design

#### Development & Architecture

- **architect-reviewer**: Code architecture review
- **backend-architect**: Backend system architecture
- **cloud-architect**: Cloud infrastructure design and optimization
- **code-reviewer**: Code quality and best practices review
- **database-optimizer**: Database performance optimization
- **debugger-specialist**: P0 issue debugging and troubleshooting
- **design-system-architect**: Component libraries and design systems
- **frontend-developer**: React components and frontend development
- **pair-programmer**: Real-time code review and pair programming
- **security-auditor**: Security audits and vulnerability assessment
- **sql-query-optimizer**: SQL query optimization
- **test-automator**: Test automation and coverage
- **typescript-pro**: Advanced TypeScript patterns

#### Documentation

- **api-documenter**: API documentation and OpenAPI specs
- **docs-architect**: Comprehensive technical documentation from codebases
- **reference-builder**: Exhaustive technical references and API documentation

#### Infrastructure & Operations

- **deployment-engineer**: CI/CD pipelines and containerization
- **devops-troubleshooter**: Production issue debugging

#### Root Level

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

1. **Avoid `skipLibCheck: true` when possible** - Prefer catching type issues in dependencies
   - If necessary due to third-party type issues, document why and what workarounds were attempted
2. **Keep strict mode enabled** - All strict checks should remain on
3. **Don't ignore type errors** - Fix them properly instead of using `@ts-ignore`
4. **Validate third-party types** - If a library has type issues, consider:
   - Updating to a fixed version
   - Contributing fixes upstream
   - Using a well-typed alternative
   - Creating proper type definitions
   - As last resort: use `skipLibCheck` with documentation

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

1. Shared packages (`@after6ix/ui`, `@after6ix/core`) export TypeScript source directly - no build needed
2. When creating new packages or apps, ensure they have their own `tsconfig.json` that extends from `tsconfig.base.json`
3. TypeScript project references should be used for inter-package dependencies
4. Use `pnpm exec` or `pnpm dlx` instead of `npx` for better pnpm compatibility
5. Claude should only run lint and type-check commands, not build commands

## Documentation Structure

### Task Documentation

- **`.claude/tasks/`** - Permanent storage for task plans and implementation notes
  - File naming: `YYYY-MM-DD-TASK_NAME.md` (e.g., `2025-01-15-add-authentication.md`)
  - ISO date format ensures chronological ordering
  - Committed to repository for historical context
  - Updated throughout implementation with progress and decisions
  - Provides continuity across Claude sessions

### CLAUDE.md Refactoring

- **`/docs`** - For extracted sections when CLAUDE.md exceeds 1000 words
  - Move detailed sections to separate files (e.g., project-setup.md, api-guidelines.md)
  - Keep only essential information in CLAUDE.md
  - Maintain links to detailed documentation
