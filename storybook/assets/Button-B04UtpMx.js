import{j as n}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as l}from"./index-BkWWnryS.js";import{M as c,b as e,c as d,A as h}from"./blocks-DiHAVNKK.js";import{B as r,D as i,S as x,A as u,a as j,O as m,G as p,L as f,b as g,c as v,E as b,I as N,d as y,W as B,e as k,f as w,g as A}from"./Button.stories-ClC3fZwu.js";import{B as o}from"./button-ZcuymWCK.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";function a(t){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:r}),`
`,n.jsx(s.h1,{id:"button",children:"Button"}),`
`,n.jsx(s.p,{children:"The After6ix button component is built with our design tokens and provides consistent interaction patterns across the application."}),`
`,n.jsx(s.h2,{id:"component-overview",children:"Component Overview"}),`
`,n.jsx(e,{of:i}),`
`,n.jsx(d,{of:i}),`
`,n.jsx(s.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(s.p,{children:"Our button component supports multiple visual variants for different use cases:"}),`
`,n.jsxs("div",{className:"grid grid-cols-2 gap-4 my-8",children:[n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx(e,{of:i}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Default primary action"})]}),n.jsxs("div",{children:[n.jsx(e,{of:x}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Secondary actions"})]}),n.jsxs("div",{children:[n.jsx(e,{of:u}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Highlight important actions"})]}),n.jsxs("div",{children:[n.jsx(e,{of:j}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Dangerous actions like delete"})]})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx(e,{of:m}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Low emphasis actions"})]}),n.jsxs("div",{children:[n.jsx(e,{of:p}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Minimal style for tertiary actions"})]}),n.jsxs("div",{children:[n.jsx(e,{of:f}),n.jsx("p",{className:"text-sm text-neutral-600 mt-2",children:"Navigation or external links"})]})]})]}),`
`,n.jsx(s.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsxs("div",{className:"flex items-center gap-4 my-8",children:[n.jsx(e,{of:g}),n.jsx(e,{of:i}),n.jsx(e,{of:v}),n.jsx(e,{of:b}),n.jsx(e,{of:N})]}),`
`,n.jsx(s.h2,{id:"states",children:"States"}),`
`,n.jsxs("div",{className:"flex flex-col my-8 gap-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(e,{of:i}),n.jsx(e,{of:y})]}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsx(e,{of:B}),n.jsx(e,{of:k})]})]}),`
`,n.jsx(s.h2,{id:"interactive-actions",children:"Interactive Actions"}),`
`,n.jsx(s.p,{children:"The button component supports various interaction handlers. Try clicking, hovering, and focusing on the button below to see the actions logged in the Actions panel:"}),`
`,n.jsx(e,{of:w}),`
`,n.jsx(s.h2,{id:"api-reference",children:"API Reference"}),`
`,n.jsx(h,{of:r}),`
`,n.jsx(s.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,n.jsx(s.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { Button } from '@after6ix/ui/components/button';

function MyComponent() {
  return (
    <Button onClick={() => console.log('clicked')}>
      Click me
    </Button>
  );
}
`})}),`
`,n.jsx(s.h3,{id:"with-icons",children:"With Icons"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`<Button>
  <DownloadIcon />
  Download Report
</Button>
`})}),`
`,n.jsx(s.h3,{id:"as-link",children:"As Link"}),`
`,n.jsxs(s.p,{children:["The button component can render as any element using the ",n.jsx(s.code,{children:"asChild"})," prop from Radix UI:"]}),`
`,n.jsx(e,{of:A}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>
`})}),`
`,n.jsx(s.h3,{id:"button-group",children:"Button Group"}),`
`,n.jsxs("div",{className:"inline-flex rounded-lg shadow-sm my-8",children:[n.jsx(o,{variant:"outline",className:"rounded-r-none",children:"Left"}),n.jsx(o,{variant:"outline",className:"rounded-none border-l-0",children:"Center"}),n.jsx(o,{variant:"outline",className:"rounded-l-none border-l-0",children:"Right"})]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`<div className="inline-flex rounded-lg shadow-sm">
  <Button variant="outline" className="rounded-r-none">Left</Button>
  <Button variant="outline" className="rounded-none border-l-0">Center</Button>
  <Button variant="outline" className="rounded-l-none border-l-0">Right</Button>
</div>
`})}),`
`,n.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"All buttons have proper focus states with visible focus rings"}),`
`,n.jsxs(s.li,{children:["Disabled buttons have ",n.jsx(s.code,{children:"aria-disabled"})," and prevent interaction"]}),`
`,n.jsx(s.li,{children:"Icon-only buttons should include proper aria-labels"}),`
`,n.jsx(s.li,{children:"Keyboard navigation works with Tab and Enter/Space keys"}),`
`]}),`
`,n.jsx(s.h2,{id:"design-tokens-used",children:"Design Tokens Used"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Colors"}),": Primary, Secondary, Accent, Error (destructive), Neutral"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Typography"}),": Font size and weight tokens"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Spacing"}),": Padding uses spacing tokens"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Shadows"}),": Shadow tokens for depth"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Animations"}),": Transition duration tokens"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Border Radius"}),": Radius tokens for corners"]}),`
`]})]})}function R(t={}){const{wrapper:s}={...l(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(a,{...t})}):a(t)}export{R as default};
