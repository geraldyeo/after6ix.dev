import{j as e}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as c}from"./index-BU1_zfef.js";import{M as l,C as i,a as s}from"./blocks-B4_zSmj7.js";import{e as r}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...c(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Design Tokens/Colors"}),`
`,e.jsx(n.h1,{id:"after6ix-design-system",children:"After6ix Design System"}),`
`,e.jsx(n.p,{children:"The After6ix design system is inspired by twilight hours when developers do their best work. Our tokens provide a consistent foundation for building beautiful, accessible interfaces."}),`
`,e.jsx(n.h2,{id:"color-system",children:"Color System"}),`
`,e.jsx(n.h3,{id:"primary---twilight-purple",children:"Primary - Twilight Purple"}),`
`,e.jsx(i,{children:e.jsx(s,{title:"Primary",subtitle:"Twilight Purple",colors:r.primary})}),`
`,e.jsx(n.h3,{id:"secondary---deep-sky",children:"Secondary - Deep Sky"}),`
`,e.jsx(i,{children:e.jsx(s,{title:"Secondary",subtitle:"Deep Sky Blue",colors:r.secondary})}),`
`,e.jsx(n.h3,{id:"accent---electric-cyan",children:"Accent - Electric Cyan"}),`
`,e.jsx(i,{children:e.jsx(s,{title:"Accent",subtitle:"Electric Cyan",colors:r.accent})}),`
`,e.jsx(n.h3,{id:"neutral---charcoal",children:"Neutral - Charcoal"}),`
`,e.jsx(i,{children:e.jsx(s,{title:"Neutral",subtitle:"Charcoal Gray",colors:r.neutral})}),`
`,e.jsx(n.h3,{id:"semantic-colors",children:"Semantic Colors"}),`
`,e.jsxs(i,{children:[e.jsx(s,{title:"Success",colors:r.semantic.success}),e.jsx(s,{title:"Error",colors:r.semantic.error}),e.jsx(s,{title:"Warning",colors:r.semantic.warning}),e.jsx(s,{title:"Info",colors:r.semantic.info})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Import tokens
import { colors, spacing, typography } from '@after6ix/ui/tokens';

// Use in styles
const buttonStyle = {
  backgroundColor: colors.primary[600],
  padding: spacing[4],
  fontSize: typography.sizes.base,
};
`})})]})}function u(t={}){const{wrapper:n}={...c(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as default};
