import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as d}from"./index-BU1_zfef.js";import{M as a}from"./blocks-B4_zSmj7.js";import{r as o}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Design Tokens/Radius"}),`
`,e.jsx(s.h1,{id:"border-radius",children:"Border Radius"}),`
`,e.jsx(s.p,{children:"The After6ix radius system provides consistent values for creating rounded corners throughout the interface."}),`
`,e.jsx(s.h2,{id:"radius-scale",children:"Radius Scale"}),`
`,e.jsx("div",{className:"grid grid-cols-3 gap-4 my-8",children:Object.entries(o).map(([r,t])=>e.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg text-center",children:[e.jsx("div",{className:"mx-auto w-24 h-24 bg-primary-600 flex items-center justify-center text-white font-semibold",style:{borderRadius:t},children:r}),e.jsxs("div",{className:"mt-3",children:[e.jsx("div",{className:"text-sm font-mono text-neutral-600",children:r}),e.jsx("div",{className:"text-xs text-neutral-500",children:t})]})]},r))}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { radius } from '@after6ix/ui/tokens';

// In styles
const cardStyle = {
  borderRadius: radius.lg,
};

// With Tailwind classes
<div className="rounded-lg">
  {/* Border radius utilities map to our tokens */}
</div>
`})})]})}function p(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default};
