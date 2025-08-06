# Product Requirements Document (PRD)
# After6ix.dev - Creative Coding Playground

## Executive Summary

After6ix.dev is a personal creative coding space designed to showcase experimental projects, indie games, and generative art installations created outside of work hours. The site serves as both a portfolio and a community hub for developers who see code as a creative medium.

## Product Vision

"Where Code Clocks Out and Creativity Clocks In" - After6ix.dev transforms from a traditional developer portfolio into an interactive playground that celebrates the artistic side of programming. The site embodies the transformation that happens when structured development becomes creative expression.

## Target Audience

### Primary Users
- **Creative Developers**: Programmers who explore coding as an artistic medium
- **Indie Game Enthusiasts**: Developers interested in experimental game development
- **Generative Art Community**: Artists and coders working at the intersection of algorithms and aesthetics
- **Potential Collaborators**: Fellow developers looking for creative partnerships

### Secondary Users
- **Recruiters/Employers**: Looking for developers with creative problem-solving skills
- **Students**: Learning about creative coding and seeking inspiration
- **Art/Tech Enthusiasts**: Interested in the intersection of technology and art

## Key Features

### 1. Project Showcase (MVP)
**Priority**: P0 - Must Have

Interactive gallery of creative projects with:
- **Live Demos**: Embedded interactive experiences
- **Process Documentation**: "Behind the code" stories showing evolution
- **Source Code Links**: GitHub repositories with creative commons licenses
- **Visual Preview**: Animated thumbnails or video previews

### 2. Generative Art Gallery
**Priority**: P0 - Must Have

Dynamic display of generative art pieces:
- **Interactive Canvas**: Visitors can interact with generative algorithms
- **Parameter Controls**: Adjust variables to see real-time changes
- **Save/Share**: Download generated art or share on social media
- **Code Snippets**: Show the elegant code behind each piece

### 3. Indie Game Playground
**Priority**: P1 - Should Have

Browser-based game experiences:
- **WebGL Games**: Playable directly in the browser
- **Progress Tracking**: Save game states locally
- **Development Logs**: Document the creative process
- **Community Feedback**: Comments and ratings system

### 4. Creative Coding Blog
**Priority**: P1 - Should Have

Technical blog focused on creative coding:
- **Tutorials**: Step-by-step guides for creative techniques
- **Experiments**: Document failed attempts and happy accidents
- **Tool Reviews**: Reviews of creative coding frameworks
- **Guest Posts**: Collaborations with other creative developers

### 5. Code Playground
**Priority**: P2 - Nice to Have

In-browser coding environment:
- **Live Editor**: Monaco or CodeMirror integration
- **Instant Preview**: See code changes in real-time
- **Preset Examples**: Starting templates for common patterns
- **Fork & Share**: Save and share code experiments

### 6. Community Features
**Priority**: P2 - Nice to Have

Foster connection among night coders:
- **Project Submissions**: Allow others to showcase their work
- **Monthly Challenges**: Themed creative coding challenges
- **Discord Integration**: Link to community chat
- **Collaboration Board**: Find partners for creative projects

## Technical Requirements

### Performance
- **Page Load**: < 2s for initial load (leveraging Astro's minimal JS)
- **Interaction**: 60fps for all animations and interactions
- **SEO**: Score > 90 on Lighthouse SEO audit

### Accessibility
- **WCAG 2.1 AA**: Full compliance
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Reduced Motion**: Respect user preferences

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: Responsive design for tablets and phones
- **Progressive Enhancement**: Core content accessible without JS

## Design Requirements

### Visual Identity
Based on the After6ix brand guidelines:

- **Color Palette**:
  - Primary: Twilight Purple (#9333EA)
  - Secondary: Deep Sky Blue (#2563EB)
  - Accent: Electric Cyan (#06B6D4)
  - Background: Midnight Base (#0A0E27)

- **Typography**:
  - Headers: Space Grotesk
  - Body: Inter
  - Code: JetBrains Mono

- **Visual Style**:
  - Dark mode by default with light mode option
  - Glitch aesthetics for transitions
  - Particle effects responding to user interaction
  - Code syntax morphing into visual patterns

### Key UI Components

1. **Hero Section**
   - Animated background with generative patterns
   - Morphing text effect on tagline
   - Interactive particles following cursor
   - CTA buttons with gradient hover effects

2. **Project Cards**
   - Hover reveals live preview
   - Loading animation shows code compiling
   - Tags for technology used
   - View count and interaction metrics

3. **Navigation**
   - Sticky header with blur backdrop
   - Smooth scroll with section highlighting
   - Mobile hamburger with slide-in menu
   - Search with instant results

4. **Footer**
   - Social links with hover animations
   - Recent activity feed
   - Newsletter signup
   - "Currently Playing With" widget

## Content Strategy

### Launch Content
1. **3-5 Showcase Projects**: Mix of games and generative art
2. **Welcome Blog Post**: "Why After6ix Exists"
3. **First Tutorial**: "Your First Generative Art Piece"
4. **About Page**: Personal story and mission

### Ongoing Content
- **Weekly Experiments**: Small code sketches
- **Monthly Deep Dives**: Detailed project breakdowns
- **Quarterly Challenges**: Community events
- **Annual Retrospective**: Year in creative coding

## User Journey

### First-Time Visitor
1. Lands on hero with animated background
2. Scrolls to see featured projects
3. Interacts with a live demo
4. Reads about the process
5. Explores other projects or blog
6. Subscribes to newsletter or follows social

### Returning Visitor
1. Checks "What's New" section
2. Plays with latest experiment
3. Reads new blog post
4. Participates in community challenge
5. Shares their own creation

### Contributing Developer
1. Discovers submission guidelines
2. Prepares project with documentation
3. Submits via form or GitHub PR
4. Receives feedback from community
5. Gets featured in gallery

## Success Metrics

### Engagement
- **Time on Site**: Average > 3 minutes
- **Pages per Session**: > 2.5
- **Interaction Rate**: > 40% interact with demos
- **Return Visitors**: > 30% monthly

### Community
- **Newsletter Subscribers**: 500 in first 6 months
- **Project Submissions**: 10+ per month
- **Social Shares**: 100+ per month
- **GitHub Stars**: 50+ on key projects

### Technical
- **Uptime**: 99.9%
- **Error Rate**: < 0.1%
- **Performance Score**: > 90 (Lighthouse)
- **Accessibility Score**: 100 (Lighthouse)

## Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- Set up Astro with After6ix design system
- Implement hero section with animations
- Create project showcase structure
- Deploy to Cloudflare/AWS via SST

### Phase 2: Core Features (Weeks 3-4)
- Build project gallery with filtering
- Add interactive demos framework
- Implement blog with MDX
- Create about and contact pages

### Phase 3: Interactivity (Weeks 5-6)
- Add generative art playground
- Implement code playground
- Create sharing functionality
- Add analytics and monitoring

### Phase 4: Community (Weeks 7-8)
- Build submission system
- Add commenting/feedback
- Create challenge framework
- Launch newsletter

### Phase 5: Polish (Weeks 9-10)
- Performance optimization
- SEO enhancements
- Accessibility audit
- Beta testing with community

## Technical Architecture

### Frontend (Astro)
```
apps/site/
├── src/
│   ├── components/
│   │   ├── showcase/      # Project gallery components
│   │   ├── playground/    # Interactive demo components
│   │   ├── blog/         # Blog-specific components
│   │   └── common/       # Shared components
│   ├── content/
│   │   ├── projects/     # Project MDX files
│   │   ├── blog/         # Blog posts
│   │   └── experiments/  # Code experiments
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── Project.astro
│   │   └── Blog.astro
│   ├── pages/
│   │   ├── index.astro   # Homepage
│   │   ├── projects/     # Project pages
│   │   ├── blog/         # Blog pages
│   │   ├── playground/   # Interactive demos
│   │   └── about.astro
│   └── styles/
│       └── global.css    # After6ix design tokens
```

### Integration Points
- **GitHub API**: Fetch project stats and contributions
- **Analytics**: Privacy-focused analytics (Plausible/Fathom)
- **Newsletter**: ConvertKit or similar for subscriptions
- **Comments**: Giscus (GitHub discussions) for community interaction
- **Search**: Algolia or local search for content discovery

### Performance Optimizations
- **Image Optimization**: Astro Image with lazy loading
- **Code Splitting**: Dynamic imports for heavy demos
- **Caching**: Edge caching for static assets
- **Preloading**: Critical resources and fonts
- **Service Worker**: Offline support for key pages

## Risk Mitigation

### Technical Risks
- **Browser Compatibility**: Test on multiple devices/browsers
- **Performance Degradation**: Monitor with web vitals
- **Security**: Sanitize user inputs, CSP headers

### Content Risks
- **Burnout**: Start with minimal viable content
- **Quality**: Establish review process for submissions
- **Legal**: Clear licensing for all shared code

### Community Risks
- **Spam**: Implement moderation for submissions
- **Toxicity**: Clear community guidelines
- **Inactivity**: Regular engagement initiatives

## Future Enhancements

### Version 2.0
- **AI-Powered**: Generate art with visitor prompts
- **Multiplayer**: Collaborative coding sessions
- **Mobile App**: Native app for project viewing
- **API**: Public API for project data

### Long-term Vision
- **Workshops**: Online creative coding workshops
- **Marketplace**: Sell generative art NFTs
- **Studio**: Offer creative coding services
- **Conference**: Annual After6ix creative coding conference

## Appendix

### Competitor Analysis
- **CodePen**: Focus on code snippets vs complete projects
- **OpenProcessing**: Academic focus vs playful approach
- **Glitch**: General purpose vs creative coding specific
- **Observable**: Data viz focus vs games/art focus

### Technical Stack (Confirmed via ADR)
- **Framework**: Astro (See ADR: techstack-for-website)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: SST to AWS/Cloudflare
- **Content**: MDX for rich content
- **Interactivity**: React islands for dynamic features

### Design System Reference
- See: `apps/ui/docs/adr/20250730-create-a-design-system-and-ui-kit.md`
- Components from `@after6ix/ui` package
- After6ix design tokens and brand guidelines

---

## Creative Asset Generation Prompts

### Brand Overview for AI Image Generation

When generating images for After6ix, include these key brand elements:
- **Core Concept**: "Where Code Clocks Out and Creativity Clocks In"
- **Visual Style**: Dark, moody backgrounds with vibrant neon accents
- **Color Palette**: Twilight Purple (#9333EA), Deep Sky Blue (#2563EB), Electric Cyan (#06B6D4), Midnight Base (#0A0E27)
- **Aesthetic**: Cyberpunk meets generative art, glitch aesthetics, code-as-art

### Hero Section Background

#### Prompt 1: Animated Code Transformation
```
A dark midnight blue background (#0A0E27) with streams of glowing code syntax in twilight purple (#9333EA) and electric cyan (#06B6D4) that morph into abstract generative art patterns. The code should appear to be "breaking free" from its structured form, transforming into organic, flowing shapes. Include particle effects and subtle glitch artifacts. Style: Digital art, cyberpunk aesthetic, high contrast, neon glow effects. Aspect ratio: 16:9
```

#### Prompt 2: Neural Network Visualization
```
Abstract visualization of a neural network made from code snippets and mathematical formulas, set against a deep midnight background. The network nodes glow in gradient colors from twilight purple to electric cyan, with data flowing between connections like liquid light. Incorporate subtle scan lines and digital noise for texture. Style: Futuristic data visualization, tron-like aesthetic, highly detailed. Aspect ratio: 16:9
```

#### Prompt 3: Generative Landscape
```
A procedurally generated landscape made entirely from code elements - mountains formed by stacked function brackets, rivers of flowing CSS gradients, trees with recursive fractal branches made of JavaScript syntax. Sky features a gradient from midnight base to deep sky blue with floating code particles like digital snow. Style: Surreal digital art, vaporwave influence, dreamy atmosphere. Aspect ratio: 16:9
```

### Project Card Thumbnails

#### Indie Game Preview
```
Retro-futuristic game controller dissolving into pixels and code on one side, with the pixels reforming into game sprites and geometric shapes on the other. Use a gradient background from dark purple to midnight blue. Add scanline effects and neon highlights in electric cyan. Style: Pixel art meets vector graphics, nostalgic gaming aesthetic. Aspect ratio: 4:3
```

#### Generative Art Preview
```
Spiraling fibonacci sequence visualization where each segment contains different programming languages syntax, gradually transitioning from monochrome code at the center to vibrant generative patterns at the edges. Colors shift from white through twilight purple to electric cyan. Style: Mathematical art, clean geometric design, gradient mapping. Aspect ratio: 1:1
```

#### Creative Coding Preview
```
Split-screen composition: left side shows clean, organized code in a terminal window, right side shows the same code "coming alive" as colorful particle systems, fractals, and flowing algorithms. Include a glitch effect at the dividing line. Style: Technical illustration, modern design, high contrast. Aspect ratio: 16:9
```

### Icon Set

#### Feature Icons
```
Set of 6 minimalist icons for After6ix features, each incorporating code elements:
1. Project Gallery: Folder icon made of code brackets with sparkles
2. Blog: Speech bubble filled with syntax highlighting
3. Playground: Game controller constructed from terminal prompts
4. Community: Network nodes connected by curly braces
5. About: Person silhouette filled with scrolling code
6. Contact: @ symbol morphing into particle effects

Style: Line art with gradient fills, twilight purple to electric cyan color scheme, dark background, neon glow effects. Format: SVG-friendly design
```

### Section Dividers

#### Glitch Transition
```
Horizontal divider showing a wave pattern that appears to "glitch" - starting as clean sine wave on the left, progressively becoming more distorted with digital artifacts, data corruption effects, and pixel sorting in the middle, then reforming into geometric patterns on the right. Use scanlines and chromatic aberration. Colors: Gradient from purple to cyan with glitch artifacts in complementary colors. Aspect ratio: Ultra-wide banner
```

### Loading Animations

#### Code Compilation Loader
```
Circular loading animation where code syntax elements orbit around a central point, gradually compiling into a glowing geometric shape. As pieces come together, they emit particle effects in purple and cyan. Include subtle matrix-like rain effect in background. Style: Smooth vector animation, tron aesthetic, mesmerizing loop. Square format for easy integration
```

### 404 Error Page

#### Creative 404 Illustration
```
A confused robot made entirely of code syntax and terminal windows, scratching its head (made of a spinning loading icon). Background shows a maze of broken code paths and dead-end functions. Include error messages floating like thought bubbles, glitching between different programming languages. Style: Playful technical illustration, cyberpunk character design. Aspect ratio: 4:3
```

### Social Media Graphics

#### Twitter/X Header
```
Panoramic view of a digital cityscape where buildings are constructed from code blocks, terminal windows, and algorithm flowcharts. The sky features the Aurora Borealis effect in purple and cyan gradients with floating code particles. Include the After6ix tagline in glowing neon text. Style: Cyberpunk city, detailed architectural elements, cinematic lighting. Aspect ratio: 3:1
```

#### Open Graph Image
```
Dynamic composition showing a clock at 6:00 with its hands made of code brackets, the clock face dissolving into creative patterns, particles, and generative art. Include subtle animation elements suggested through motion blur and light trails. Dark background with neon accent lighting. Style: Conceptual design, time-lapse effect, premium feel. Aspect ratio: 1200x630px
```

### Texture Pack

#### Background Patterns
```
Set of 4 seamless tileable patterns:
1. Subtle code rain with varying opacity, dark purple on midnight base
2. Circuit board pattern with rounded corners, thin cyan lines on dark
3. Hexagonal grid with random nodes lighting up, purple gradient fills
4. Glitch artifact stripes, horizontal scan lines with color separation

Style: Subtle, professional, low contrast for background use. Format: Seamless tile, 1024x1024px
```

### Blog Post Headers

#### Technical Tutorial Header
```
Isometric view of a workbench where code elements are being assembled like physical components - functions as building blocks, variables as wires, loops as gears. Tools include a syntax highlighter paintbrush and a debugger magnifying glass. Soft purple and cyan lighting from above. Style: Technical illustration, isometric design, detailed craftsmanship. Aspect ratio: 2:1
```

#### Creative Process Header
```
Time-lapse style image showing the evolution of a simple "Hello World" program transforming through multiple stages into complex generative art, with ghost images showing each transformation step. Clock in corner showing time passing after 6pm. Style: Multiple exposure effect, artistic progression, dreamy atmosphere. Aspect ratio: 2:1
```

### Avatar/Logo Variations

#### Animated Logo Concept
```
The number "6" constructed from code brackets and syntax elements, with the negative space forming an abstract clock hand. As it animates, particles flow through the shape like sand in an hourglass, changing color from purple to cyan. The "ix" appears as pixelated/glitched text. Style: Minimalist logo design, clever use of negative space, smooth animation potential
```

### Email Newsletter Header

#### Weekly Digest Header
```
Inbox interface made of code where emails transform into butterflies (made of colorful code snippets) flying out of the screen. Each butterfly represents different creative coding concepts. Dark gradient background with subtle grid pattern. Style: Whimsical technical art, email client aesthetic, magical realism. Aspect ratio: 600x200px
```

### Certificate/Badge Design

#### Challenge Completion Badge
```
Hexagonal badge with layered depth effect, center shows achievement icon made of code elements, surrounded by rotating ring of syntax particles. Outer edge has circuit-like pattern. Gradient from dark center to glowing purple/cyan edges. Include procedural serial number made of hash functions. Style: Gaming achievement aesthetic, premium metallic feel, holographic effect
```

### Best Practices for Using These Prompts

1. **Consistency**: Always include the color palette hex codes for brand consistency
2. **Modifications**: Add "no text" if you want purely visual elements
3. **Style modifiers**: Append styles like "octane render", "unreal engine", or "trending on artstation" for different quality levels
4. **Variations**: Generate multiple versions by adding "variation 1 of 4" etc.
5. **Format**: Specify exact dimensions needed for web optimization
6. **Exclusions**: Add negative prompts like "no people", "no faces" if needed

### Tools Recommended

- **Midjourney**: Best for artistic, conceptual pieces
- **DALL-E 3**: Great for specific technical illustrations
- **Stable Diffusion**: Good for batch generation and fine control
- **Adobe Firefly**: Excellent for vector-style graphics
- **Leonardo.ai**: Strong for game art and UI elements

### Additional Notes

- Always generate at 2x resolution for retina displays
- Save original prompts with images for future iterations
- Create both light and dark mode versions where applicable
- Consider accessibility - ensure sufficient contrast
- Test images at different screen sizes before finalizing

---

*This PRD is a living document and will be updated as the project evolves. For technical implementation details, refer to the Architecture Decision Records (ADRs) in the repository.*