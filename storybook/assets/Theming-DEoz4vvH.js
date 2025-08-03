import{j as e}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as d}from"./index-BkWWnryS.js";import{M as l,b as r,S as t}from"./blocks-DiHAVNKK.js";import{T as h,a as m}from"./theme-toggle-DgnsiNc8.js";import{B as i}from"./button-ZcuymWCK.js";import{C as o,a as x,b as j,c as p,d as a}from"./card-B4U9d6Gr.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";function c(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design Tokens/Theming"}),`
`,e.jsx(s.h1,{id:"theming-system",children:"Theming System"}),`
`,e.jsx(s.p,{children:"The After6ix design system includes a comprehensive theming solution that supports light, dark, and system preference themes with smooth transitions and consistent color application across all components."}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Light & Dark Themes"}),": Complete support for both light and dark modes with optimized color palettes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"System Preference"}),": Automatically detects and respects user's system theme preference"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Smooth Transitions"}),": CSS-based transitions provide smooth visual feedback when switching themes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CSS Custom Properties"}),": Uses CSS variables for runtime theme switching without page reloads"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Persistent State"}),": Remembers user's theme preference in localStorage"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": WCAG-compliant contrast ratios in both light and dark themes"]}),`
`]}),`
`,e.jsx(s.h2,{id:"theme-tokens",children:"Theme Tokens"}),`
`,e.jsx(s.p,{children:"The theme system is built on a foundation of semantic color tokens that automatically adapt to the active theme:"}),`
`,e.jsx(s.h3,{id:"surface-colors",children:"Surface Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--surface-primary"}),": Main background surfaces"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--surface-secondary"}),": Secondary background areas"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--surface-tertiary"}),": Tertiary surfaces and subtle backgrounds"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--surface-inverse"}),": High contrast surfaces"]}),`
`]}),`
`,e.jsx(s.h3,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--text-primary"}),": Primary text content (21:1 contrast)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--text-secondary"}),": Secondary text content (7:1 contrast)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--text-tertiary"}),": Tertiary text content (4.5:1 contrast)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--text-inverse"}),": Inverse text for high contrast"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--text-disabled"}),": Disabled text states"]}),`
`]}),`
`,e.jsx(s.h3,{id:"border-colors",children:"Border Colors"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--border-primary"}),": Primary borders and dividers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--border-secondary"}),": Secondary borders"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--border-focus"}),": Focus ring colors"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"--border-error"}),": Error state borders"]}),`
`]}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.h3,{id:"react-context",children:"React Context"}),`
`,e.jsxs(s.p,{children:["Wrap your application with the ",e.jsx(s.code,{children:"ThemeProvider"})," to enable theme functionality:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { ThemeProvider } from '@after6ix/ui'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      {/* Your app content */}
    </ThemeProvider>
  )
}
`})}),`
`,e.jsx(s.h3,{id:"usetheme-hook",children:"useTheme Hook"}),`
`,e.jsxs(s.p,{children:["Access and control the theme state using the ",e.jsx(s.code,{children:"useTheme"})," hook:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { useTheme } from '@after6ix/ui'

function MyComponent() {
  const { theme, setTheme, actualTheme } = useTheme()
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Actual theme: {actualTheme}</p>
      <button onClick={() => setTheme('dark')}>
        Switch to dark theme
      </button>
    </div>
  )
}
`})}),`
`,e.jsx(s.h2,{id:"components",children:"Components"}),`
`,e.jsx(s.h3,{id:"theme-toggle-button",children:"Theme Toggle Button"}),`
`,e.jsx(s.p,{children:"A simple toggle that cycles between light, dark, and system themes:"}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Theme Toggle",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(h,{variant:"button",size:"default"}),e.jsx("span",{children:"Click to cycle through themes"})]})})}),`
`,e.jsx(s.h3,{id:"theme-toggle-group",children:"Theme Toggle Group"}),`
`,e.jsx(s.p,{children:"A comprehensive theme selector with all options visible:"}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Theme Toggle Group",children:e.jsx(m,{})})}),`
`,e.jsx(s.h2,{id:"theme-examples",children:"Theme Examples"}),`
`,e.jsx(s.h3,{id:"component-adaptation",children:"Component Adaptation"}),`
`,e.jsx(s.p,{children:"See how components automatically adapt to theme changes:"}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Component Adaptation",children:e.jsx("div",{className:"space-y-4 max-w-sm",children:e.jsxs(o,{children:[e.jsxs(x,{children:[e.jsx(j,{children:"Adaptive Components"}),e.jsx(p,{children:e.jsx(s.p,{children:"These components automatically adapt to theme changes"})})]}),e.jsxs(a,{className:"space-y-3",children:[e.jsx(i,{variant:"default",className:"w-full",children:"Primary"}),e.jsx(i,{variant:"secondary",className:"w-full",children:"Secondary"}),e.jsx(i,{variant:"outline",className:"w-full",children:"Outline"}),e.jsx(i,{variant:"ghost",className:"w-full",children:"Ghost"})]})]})})})}),`
`,e.jsx(s.h3,{id:"surface-variations",children:"Surface Variations"}),`
`,e.jsx(s.p,{children:"Different surface types respond appropriately to theme changes:"}),`
`,e.jsx(r,{children:e.jsx(t,{name:"Surface Variations",children:e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsx(o,{variant:"default",children:e.jsxs(a,{className:"p-4",children:[e.jsx("h4",{className:"font-medium",children:"Default Card"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Basic card with border"})]})}),e.jsx(o,{variant:"shadow",children:e.jsxs(a,{className:"p-4",children:[e.jsx("h4",{className:"font-medium",children:"Shadow Card"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Card with subtle shadow"})]})}),e.jsx(o,{variant:"elevated",children:e.jsxs(a,{className:"p-4",children:[e.jsx("h4",{className:"font-medium",children:"Elevated Card"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Card with prominent shadow"})]})})]})})}),`
`,e.jsx(s.h2,{id:"implementation-details",children:"Implementation Details"}),`
`,e.jsx(s.h3,{id:"css-custom-properties",children:"CSS Custom Properties"}),`
`,e.jsxs(s.p,{children:["The theme system uses CSS custom properties defined in ",e.jsx(s.code,{children:":root"})," for light mode and ",e.jsx(s.code,{children:".dark"})," for dark mode overrides:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`:root {
  --background: 0 0% 100%;
  --foreground: 240 6% 10%;
  --primary: 267 80% 58%;
  --primary-foreground: 0 0% 98%;
  /* ... more tokens */
}

.dark {
  --background: 240 11% 4%;
  --foreground: 0 0% 98%;
  --primary: 280 91% 65%;
  --primary-foreground: 240 11% 4%;
  /* ... more tokens */
}
`})}),`
`,e.jsx(s.h3,{id:"transition-system",children:"Transition System"}),`
`,e.jsxs(s.p,{children:["Smooth transitions are applied during theme changes using the ",e.jsx(s.code,{children:".theme-transition"})," class:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.theme-transition * {
  transition: background-color var(--duration-base) var(--easing-out),
              border-color var(--duration-base) var(--easing-out),
              color var(--duration-base) var(--easing-out);
}
`})}),`
`,e.jsx(s.h3,{id:"component-integration",children:"Component Integration"}),`
`,e.jsx(s.p,{children:"Components use CSS custom properties through Tailwind's arbitrary value syntax:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
`})}),`
`,e.jsx(s.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Use Semantic Tokens"}),": Always use semantic color tokens (",e.jsx(s.code,{children:"--text-primary"}),", ",e.jsx(s.code,{children:"--surface-secondary"}),") rather than color scale tokens (",e.jsx(s.code,{children:"--neutral-900"}),") in components"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Test Both Themes"}),": Ensure your components work well in both light and dark themes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Respect System Preference"}),": Default to ",e.jsx(s.code,{children:'"system"'})," theme to respect user preferences"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Smooth Transitions"}),": Let the theme system handle transitions automatically"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Accessibility"}),": The provided tokens maintain WCAG AA contrast ratios - don't override without testing"]}),`
`]}),`
`,e.jsx(s.h2,{id:"browser-support",children:"Browser Support"}),`
`,e.jsx(s.p,{children:"The theming system uses modern CSS features:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"CSS Custom Properties"}),": Supported in all modern browsers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"prefers-color-scheme"}),": Supported in all modern browsers"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"localStorage"}),": Supported in all browsers"]}),`
`]}),`
`,e.jsx(s.p,{children:"For older browsers, graceful degradation provides a consistent light theme experience."})]})}function S(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(c,{...n})}):c(n)}export{S as default};
