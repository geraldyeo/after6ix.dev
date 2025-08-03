import{j as e}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as l}from"./index-BkWWnryS.js";import{M as a}from"./blocks-DiHAVNKK.js";import{b as o}from"./tokens-XHGu56gE.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";function i(t){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design Tokens/Blur"}),`
`,e.jsx(s.h1,{id:"blur",children:"Blur"}),`
`,e.jsx(s.p,{children:"The After6ix blur system provides consistent backdrop blur values for creating depth and focus effects."}),`
`,e.jsx(s.h2,{id:"blur-scale",children:"Blur Scale"}),`
`,e.jsx("div",{className:"grid grid-cols-2 gap-4 my-8",children:Object.entries(o).map(([n,r])=>e.jsxs("div",{className:"relative h-32 rounded-lg overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 p-4",children:e.jsx("p",{className:"text-white text-sm",children:"Background content with colorful gradient"})}),e.jsx("div",{className:"absolute inset-0 bg-white/30",style:{backdropFilter:`blur(${r})`}}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"bg-white rounded-lg p-4 shadow-lg",children:[e.jsx("div",{className:"text-sm font-mono text-neutral-600",children:n}),e.jsx("div",{className:"text-xs text-neutral-500",children:r})]})})]},n))}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { blur } from '@after6ix/ui/tokens';

// In styles
const styles = {
  backdropFilter: \\\`blur(\\\${blur.md})\\\`,
};

// With Tailwind
<div className="backdrop-blur-md">
  {/* Blur utilities */}
</div>
`})})]})}function p(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(i,{...t})}):i(t)}export{p as default};
