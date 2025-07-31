import{j as n}from"./jsx-runtime-BAi7uFCh.js";import{useMDXComponents as r}from"./index-BU1_zfef.js";import{M as l}from"./blocks-B4_zSmj7.js";import{a as i}from"./tokens-Bui9w2eS.js";import"./iframe-o697XxlU.js";import"./index-BkZgbL14.js";function o(t){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Design Tokens/Animations"}),`
`,n.jsx(s.h1,{id:"animations",children:"Animations"}),`
`,n.jsx(s.p,{children:"The After6ix animation system provides smooth, performant transitions."}),`
`,n.jsx(s.h2,{id:"duration-scale",children:"Duration Scale"}),`
`,n.jsx("div",{className:"space-y-4 my-8",children:Object.entries(i.durations).map(([e,a])=>n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("span",{className:"text-sm font-mono text-neutral-500 w-20",children:[e,":"]}),n.jsx("span",{className:"text-sm text-neutral-600",children:a}),n.jsx("div",{className:"flex-1",children:n.jsxs("div",{className:"relative h-2 bg-neutral-100 rounded overflow-hidden",children:[n.jsx("div",{className:"absolute left-0 top-0 bottom-0 bg-primary-600 rounded",style:{animation:`slide-${e} ${a} ease-in-out infinite`,width:"20%"}}),n.jsx("style",{jsx:!0,children:`
          @keyframes slide-${e} {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(400%); }
          }
        `})]})})]},e))}),`
`,n.jsx(s.h2,{id:"easing-functions",children:"Easing Functions"}),`
`,n.jsx("div",{className:"space-y-3 my-8",children:Object.entries(i.easings).map(([e,a])=>n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("span",{className:"text-sm font-mono text-neutral-500 w-20",children:[e,":"]}),n.jsx("span",{className:"text-xs text-neutral-600 font-mono",children:a})]},e))}),`
`,n.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`import { animations } from '@after6ix/ui/tokens';

// CSS-in-JS
const styles = {
  transition: \`all \${animations.durations.base} \${animations.easings.out}\`,
};

// Tailwind classes
<div className="transition-all duration-base ease-out">
  {/* Animation utilities map to our tokens */}
</div>
`})})]})}function p(t={}){const{wrapper:s}={...r(),...t.components};return s?n.jsx(s,{...t,children:n.jsx(o,{...t})}):o(t)}export{p as default};
