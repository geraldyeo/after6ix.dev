import{j as e}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as d}from"./index-BkWWnryS.js";import{M as r}from"./blocks-DiHAVNKK.js";import{s as i}from"./tokens-XHGu56gE.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";function a(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Design Tokens/Shadows"}),`
`,e.jsx(s.h1,{id:"shadows",children:"Shadows"}),`
`,e.jsx(s.p,{children:"The After6ix shadow system provides depth and hierarchy to UI elements."}),`
`,e.jsx(s.h2,{id:"shadow-scale",children:"Shadow Scale"}),`
`,e.jsx("div",{className:"grid grid-cols-2 gap-6 my-8",children:Object.entries(i).map(([t,o])=>e.jsxs("div",{className:"p-6 bg-neutral-50 rounded-lg",children:[e.jsxs("div",{className:"bg-white rounded-lg p-6 text-center",style:{boxShadow:o},children:[e.jsx("div",{className:"text-sm font-mono text-neutral-500 mb-2",children:t}),e.jsx("div",{className:"text-2xl font-bold text-primary-600",children:"Aa"})]}),e.jsx("div",{className:"mt-3 text-xs text-neutral-600 font-mono break-all",children:o})]},t))}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { shadows } from '@after6ix/ui/tokens';

// In styles
const cardStyle = {
  boxShadow: shadows.md,
  ':hover': {
    boxShadow: shadows.lg,
  }
};

// With Tailwind classes
<div className="shadow-md hover:shadow-lg">
  {/* Shadow utilities map to our tokens */}
</div>
`})})]})}function j(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(a,{...n})}):a(n)}export{j as default};
