import{j as n}from"./iframe-CM2Mt5Od.js";import{useMDXComponents as d}from"./index-BkWWnryS.js";import{M as a,P as o,b as r,c as t}from"./blocks-DiHAVNKK.js";import{C as c,D as l,S as h,B as x,E as j,G as p,W as g,a as f,L as u,I as m,b as C}from"./Card.stories-CMF4JeNu.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DgHoDJr7.js";import"./card-B4U9d6Gr.js";import"./button-ZcuymWCK.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{of:c}),`
`,n.jsx(e.h1,{id:"card",children:"Card"}),`
`,n.jsx(e.p,{children:"A flexible container component for grouping related content and actions. Cards provide a clean way to display information in a contained, scannable format."}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@after6ix/ui/components";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
`})}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsx(e.p,{children:"The Card component is composed of several sub-components:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"}),": The main container"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardHeader"}),": Contains the title and description"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardTitle"}),": The main heading of the card"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardDescription"}),": Supporting text for the title"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardContent"}),": The main content area"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CardFooter"}),": Actions or additional information"]}),`
`]}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(r,{of:l}),`
`,n.jsx(r,{of:h}),`
`,n.jsx(r,{of:x}),`
`,n.jsx(r,{of:j}),`
`,n.jsx(r,{of:p}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(e.p,{children:"The standard card with a subtle border. Use for most content containers."}),`
`,n.jsx(e.h3,{id:"shadow",children:"Shadow"}),`
`,n.jsx(e.p,{children:"Adds a shadow effect with hover state. Good for interactive cards or to create depth."}),`
`,n.jsx(e.h3,{id:"bordered",children:"Bordered"}),`
`,n.jsx(e.p,{children:"Features a more prominent 2px border. Use when you need stronger visual separation."}),`
`,n.jsx(e.h3,{id:"elevated",children:"Elevated"}),`
`,n.jsx(e.p,{children:"Creates a floating effect with a larger shadow. Perfect for featured content."}),`
`,n.jsx(e.h3,{id:"ghost",children:"Ghost"}),`
`,n.jsx(e.p,{children:"Transparent background variant. Useful for placeholder content or subtle grouping."}),`
`,n.jsx(e.h2,{id:"padding-options",children:"Padding Options"}),`
`,n.jsxs(e.p,{children:["Control the internal spacing of the card with the ",n.jsx(e.code,{children:"padding"})," prop:"]}),`
`,n.jsx(r,{of:g}),`
`,n.jsx(r,{of:f}),`
`,n.jsx(r,{of:u}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"none"}),": No padding (useful for images or custom layouts)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"sm"}),": 16px padding for compact layouts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"default"}),": 24px padding (recommended for most use cases)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"lg"}),": 32px padding for spacious layouts"]}),`
`]}),`
`,n.jsx(e.h2,{id:"interactive-cards",children:"Interactive Cards"}),`
`,n.jsx(e.p,{children:"Cards can be made interactive by adding click handlers and hover effects:"}),`
`,n.jsx(r,{of:m}),`
`,n.jsx(e.h2,{id:"complex-layouts",children:"Complex Layouts"}),`
`,n.jsx(e.p,{children:"Cards are highly composable and can contain any type of content:"}),`
`,n.jsx(r,{of:C}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Cards are semantic containers and don't have specific ARIA requirements"}),`
`,n.jsx(e.li,{children:"When cards are interactive (clickable), ensure they have appropriate keyboard support"}),`
`,n.jsx(e.li,{children:"Use proper heading hierarchy within cards (CardTitle renders an h3 by default)"}),`
`,n.jsx(e.li,{children:"Add descriptive text to CardDescription for screen reader users"}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent Spacing"}),": Use the same padding variant across similar cards"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clear Hierarchy"}),": Always include a CardTitle when using CardHeader"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Actionable Cards"}),": If the entire card is clickable, indicate this visually with hover states"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Content Organization"}),": Group related information within the same card"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Visual Balance"}),": Don't overload cards with too much information"]}),`
`]}),`
`,n.jsx(e.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsx(e.p,{children:"The Card component uses the following design tokens:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Colors"}),": Neutral color scale for borders and backgrounds"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Spacing"}),": Consistent padding based on the spacing scale"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Border Radius"}),": ",n.jsx(e.code,{children:"rounded-xl"})," (12px) for modern, friendly appearance"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Shadows"}),": Multiple levels from ",n.jsx(e.code,{children:"shadow-md"})," to ",n.jsx(e.code,{children:"shadow-xl"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Transitions"}),": Smooth hover effects using ",n.jsx(e.code,{children:"duration-base"})]}),`
`]})]})}function k(s={}){const{wrapper:e}={...d(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{k as default};
