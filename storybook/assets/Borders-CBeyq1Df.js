import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as i}from"./index-BU1_zfef.js";import{M as l}from"./blocks-B4_zSmj7.js";import{c as o}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function d(r){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design Tokens/Borders"}),`
`,e.jsx(s.h1,{id:"borders",children:"Borders"}),`
`,e.jsx(s.p,{children:"The After6ix border system provides consistent border widths and styles."}),`
`,e.jsx(s.h2,{id:"border-widths",children:"Border Widths"}),`
`,e.jsx("div",{className:"space-y-3 my-8",children:Object.entries(o.widths).map(([t,n])=>e.jsxs("div",{className:"flex items-center gap-4 p-4",children:[e.jsxs("span",{className:"text-sm font-mono text-neutral-600 w-20",children:[t,":"]}),e.jsx("div",{className:"flex-1 h-12 bg-white border-primary-600 border-l-0 border-r-0 border-t-0",style:{borderBottomWidth:n,borderBottomStyle:"solid"}}),e.jsx("span",{className:"text-sm text-neutral-500",children:n})]},t))}),`
`,e.jsx(s.h2,{id:"border-styles",children:"Border Styles"}),`
`,e.jsx("div",{className:"space-y-3 my-8",children:Object.entries(o.styles).map(([t,n])=>e.jsxs("div",{className:"flex items-center gap-4 p-4",children:[e.jsxs("span",{className:"text-sm font-mono text-neutral-600 w-20",children:[t,":"]}),e.jsx("div",{className:"flex-1 h-12 bg-white border-neutral-600 border-2 border-l-0 border-r-0 border-t-0",style:{borderBottomStyle:n}}),e.jsx("span",{className:"text-sm text-neutral-500",children:n})]},t))}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { borders } from '@after6ix/ui/tokens';

// In styles
const styles = {
  borderWidth: borders.widths.base,
  borderStyle: borders.styles.solid,
};

// With Tailwind
<div className="border-2 border-solid">
  {/* Border utilities */}
</div>
`})})]})}function p(r={}){const{wrapper:s}={...i(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(d,{...r})}):d(r)}export{p as default};
