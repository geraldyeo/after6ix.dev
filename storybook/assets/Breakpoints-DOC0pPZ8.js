import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as a}from"./index-BU1_zfef.js";import{M as d}from"./blocks-B4_zSmj7.js";import{d as o}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Design Tokens/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"The After6ix breakpoint system defines responsive design breakpoints for different screen sizes."}),`
`,e.jsx(n.h2,{id:"breakpoint-values",children:"Breakpoint Values"}),`
`,e.jsx("div",{className:"space-y-3 my-8",children:Object.entries(o).map(([s,r])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-neutral-50 rounded-lg",children:[e.jsxs("span",{className:"text-sm font-mono text-neutral-600 w-16",children:[s,":"]}),e.jsx("span",{className:"text-lg font-semibold text-primary-600",children:r}),e.jsxs("span",{className:"text-sm text-neutral-500 ml-auto",children:[s==="sm"&&"Small devices (640px and up)",s==="md"&&"Medium devices (768px and up)",s==="lg"&&"Large devices (1024px and up)",s==="xl"&&"Extra large devices (1280px and up)",s==="2xl"&&"2XL devices (1536px and up)"]})]},s))}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { breakpoints } from '@after6ix/ui/tokens';

// Media queries
const styles = {
  [\`@media (min-width: \${breakpoints.md})\`]: {
    // Styles for medium screens and up
  }
};

// With Tailwind
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Responsive width utilities */}
</div>
`})})]})}function h(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default};
