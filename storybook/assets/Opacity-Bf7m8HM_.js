import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as c}from"./index-BU1_zfef.js";import{M as o}from"./blocks-B4_zSmj7.js";import{o as r}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function a(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Design Tokens/Opacity"}),`
`,e.jsx(t.h1,{id:"opacity",children:"Opacity"}),`
`,e.jsx(t.p,{children:"The After6ix opacity system provides consistent transparency values."}),`
`,e.jsx(t.h2,{id:"opacity-scale",children:"Opacity Scale"}),`
`,e.jsx("div",{className:"grid grid-cols-3 gap-4 my-8",children:Object.entries(r).map(([n,i])=>e.jsxs("div",{className:"p-4 bg-neutral-50 rounded-lg",children:[e.jsxs("div",{className:"relative h-20 rounded overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500"}),e.jsx("div",{className:"absolute inset-0 bg-white",style:{opacity:i}})]}),e.jsxs("div",{className:"mt-3 text-center",children:[e.jsxs("div",{className:"text-sm font-mono text-neutral-600",children:[n,"%"]}),e.jsx("div",{className:"text-xs text-neutral-500",children:i})]})]},n))}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { opacity } from '@after6ix/ui/tokens';

// In styles
const styles = {
  opacity: opacity[50], // 50% opacity
};

// With Tailwind
<div className="opacity-50">
  {/* Opacity utilities */}
</div>
`})})]})}function j(s={}){const{wrapper:t}={...c(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(a,{...s})}):a(s)}export{j as default};
