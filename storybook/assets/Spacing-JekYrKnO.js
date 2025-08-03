import{j as s}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as c}from"./index-BkWWnryS.js";import{M as r}from"./blocks-DiHAVNKK.js";import{f as o}from"./tokens-XHGu56gE.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";function i(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{title:"Design Tokens/Spacing"}),`
`,s.jsx(n.h1,{id:"spacing",children:"Spacing"}),`
`,s.jsx(n.p,{children:"The After6ix spacing system uses a consistent 4px base unit to create harmonious layouts."}),`
`,s.jsx(n.h2,{id:"spacing-scale",children:"Spacing Scale"}),`
`,s.jsx("div",{className:"my-8",children:s.jsx("div",{className:"space-y-2",children:Object.entries(o).map(([a,t])=>s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs("span",{className:"text-sm font-mono text-neutral-500 w-16",children:[a,":"]}),s.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[s.jsx("div",{className:"bg-primary-600 h-8",style:{width:t}}),s.jsx("span",{className:"text-sm text-neutral-600",children:t})]})]},a))})}),`
`,s.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-tsx",children:`import { spacing } from '@after6ix/ui/tokens';

// In styles
const styles = {
  padding: spacing[4],      // 16px
  marginTop: spacing[8],    // 32px
  gap: spacing[2],         // 8px
};

// With Tailwind classes
<div className="p-4 mt-8 space-x-2">
  {/* Tailwind's spacing scale matches our tokens */}
</div>
`})})]})}function g(e={}){const{wrapper:n}={...c(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(i,{...e})}):i(e)}export{g as default};
