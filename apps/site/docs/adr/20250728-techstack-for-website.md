# Techstack for website

- Status: proposed
- Deciders: Gerald Yeo
- Date: 2025-01-29
- Tags: frontend, static-site, astro, deployment

Technical Story: Selecting the appropriate tech stack for the After6ix main website that will serve as a blog and services showcase, while preparing for future SaaS integrations.

## Context and Problem Statement

We need to build a performant, SEO-optimized website for After6ix that serves as a blog and services showcase. The site must be able to integrate with future SaaS offerings (CV/resume improver, photo colorization) that will be deployed on subdomains. How do we choose a tech stack that balances simplicity for static content with the ability to share components and authentication with more complex SaaS applications?

## Decision Drivers

- **SEO optimization** - Critical for blog discoverability and organic traffic
- **Page load speed** - Essential for user experience and SEO rankings
- **Component sharing** - Need to share UI components across main site and SaaS apps
- **No vendor lock-in** - Maintain flexibility in deployment and hosting options
- **Developer experience** - Simple content authoring with MDX, not overly complex
- **Future extensibility** - Support for authentication consistency across subdomains
- **Deployment flexibility** - Ability to deploy via SST to AWS or Cloudflare

## Considered Options

- **Astro** - Static site generator with React integration
- **Next.js** - Full-stack React framework with SSG/SSR capabilities
- **Remix** - Full-stack React framework focused on web standards
- **Vanilla React + Vite** - Custom static site setup

## Decision Outcome

Chosen option: **Astro**, because it excels at static site generation with excellent performance and SEO capabilities while allowing React components for interactivity. It avoids the complexity of Remix and the vendor lock-in concerns with Next.js, while still enabling component sharing with future TanStack Start applications.

### Positive Consequences

- Exceptional performance with minimal JavaScript by default
- Built-in SEO optimizations and content collections for blog management
- Can share React components and Tailwind/shadcn UI system with SaaS apps
- MDX support out of the box for rich content authoring
- Flexible deployment options via SST to either AWS or Cloudflare
- Clear separation of concerns between static content and dynamic SaaS apps

### Negative Consequences

- Limited server-side capabilities (mitigated by using TanStack Start for SaaS)
- Need to configure cross-subdomain authentication separately
- Requires careful planning for shared component library structure

## Pros and Cons of the Options

### Astro

Modern static site generator optimized for content-focused websites with selective hydration.

- Good, because it ships zero JavaScript by default, resulting in blazing fast page loads
- Good, because it has first-class MDX support and content collections for blog management
- Good, because it supports multiple UI frameworks (React, Vue, Svelte) with islands architecture
- Good, because it has excellent build performance and optimized asset handling
- Good, because it integrates well with Tailwind CSS and component libraries
- Bad, because it lacks built-in server-side features for dynamic functionality
- Bad, because authentication needs to be handled externally or via edge functions

### Next.js

Full-stack React framework with extensive ecosystem and features.

- Good, because it offers complete full-stack capabilities (SSG, SSR, API routes)
- Good, because it has a massive ecosystem and community support
- Good, because it provides built-in image optimization and performance features
- Bad, because it has vendor lock-in concerns with Vercel-specific optimizations
- Bad, because it ships more JavaScript than necessary for a mostly static site
- Bad, because recent versions have increased complexity with App Router

### Remix

Modern full-stack framework focused on web standards and progressive enhancement.

- Good, because it follows web standards and progressive enhancement principles
- Good, because it has excellent data loading patterns and error handling
- Good, because it works well with edge computing platforms
- Bad, because it's overly complex for a primarily static blog site
- Bad, because it has a steeper learning curve compared to static site generators
- Bad, because the ecosystem is smaller than Next.js or Astro

### Vanilla React + Vite

Custom setup using React with Vite as the build tool.

- Good, because it offers complete control over the architecture
- Good, because Vite provides fast development experience
- Good, because there's no framework lock-in
- Bad, because it requires building all static site features from scratch
- Bad, because SEO optimization needs manual implementation
- Bad, because content management and routing need custom solutions

## Links

- [Astro Documentation](https://astro.build/)
- [SST Documentation](https://sst.dev/)
- [TanStack Start](https://tanstack.com/start) - For future SaaS applications
- Related to future ADR: Authentication strategy across subdomains
- Related to future ADR: Shared component library architecture
