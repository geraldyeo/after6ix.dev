import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as a}from"./index-BU1_zfef.js";import{M as i}from"./blocks-B4_zSmj7.js";import{z as r}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function o(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Design Tokens/Z-Index"}),`
`,e.jsx(t.h1,{id:"z-index",children:"Z-Index"}),`
`,e.jsx(t.p,{children:"The After6ix z-index system provides a consistent layering scale for managing the stacking order of UI elements."}),`
`,e.jsx(t.h2,{id:"z-index-scale",children:"Z-Index Scale"}),`
`,e.jsx("div",{className:"space-y-3 my-8",children:Object.entries(r).map(([n,d])=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-neutral-50 rounded-lg",children:[e.jsxs("span",{className:"text-sm font-mono text-neutral-600 w-24",children:[n,":"]}),e.jsx("span",{className:"text-2xl font-bold text-primary-600",children:d}),e.jsxs("span",{className:"text-sm text-neutral-500 ml-auto",children:[n==="base"&&"Ground level elements",n==="dropdown"&&"Dropdowns, tooltips",n==="sticky"&&"Sticky headers, toolbars",n==="overlay"&&"Modal backdrops",n==="modal"&&"Modals, dialogs",n==="popover"&&"Popovers, context menus",n==="toast"&&"Toast notifications",n==="tooltip"&&"Tooltips, hints"]})]},n))}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { zIndex } from '@after6ix/ui/tokens';

// In styles
const modalStyle = {
  zIndex: zIndex.modal,
};

// Component stacking
<>
  <div style={{ zIndex: zIndex.overlay }}>Backdrop</div>
  <div style={{ zIndex: zIndex.modal }}>Modal</div>
  <div style={{ zIndex: zIndex.toast }}>Toast</div>
</>
`})})]})}function j(s={}){const{wrapper:t}={...a(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{j as default};
