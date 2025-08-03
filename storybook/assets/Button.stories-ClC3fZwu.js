import{j as e}from"./iframe-CM2Mt5Od.js";import{B as w}from"./button-ZcuymWCK.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,L={title:"UI Kit/Button",component:w,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link","accent"],description:"The visual style of the button"},size:{control:"select",options:["default","sm","lg","xl","icon"],description:"The size of the button"},asChild:{control:"boolean",description:"Whether to render as a child component"},disabled:{control:"boolean",description:"Whether the button is disabled"},children:{control:"text",description:"The content of the button"}},args:{}},s={args:{children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},a={args:{variant:"accent",children:"Accent Button"}},o={args:{variant:"destructive",children:"Destructive Button"}},t={args:{variant:"outline",children:"Outline Button"}},c={args:{variant:"ghost",children:"Ghost Button"}},i={args:{variant:"link",children:"Link Button"}},l={args:{size:"sm",children:"Small"}},d={args:{size:"lg",children:"Large"}},u={args:{size:"xl",children:"Extra Large"}},p={args:{size:"icon",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}},m={args:{disabled:!0,children:"Disabled"}},h={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})}),e.jsx("span",{children:"With Icon"})]})}},g={args:{disabled:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{className:"animate-spin h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e.jsx("span",{children:"Loading"})]})}},v={args:{children:"Click me",onClick:r("onClick"),onMouseEnter:r("onMouseEnter"),onMouseLeave:r("onMouseLeave"),onFocus:r("onFocus"),onBlur:r("onBlur")}},x={args:{asChild:!0,children:e.jsx("a",{href:"#example",children:"Link styled as button"})},parameters:{docs:{description:{story:"Using the `asChild` prop with Radix UI Slot to render as a different element"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent',
    children: 'Accent Button'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: 'Destructive Button'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Link Button'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl',
    children: 'Extra Large'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        <span>With Icon</span>
      </>
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: <>
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Loading</span>
      </>
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    onClick: action('onClick'),
    onMouseEnter: action('onMouseEnter'),
    onMouseLeave: action('onMouseLeave'),
    onFocus: action('onFocus'),
    onBlur: action('onBlur')
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="#example">Link styled as button</a>
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the \`asChild\` prop with Radix UI Slot to render as a different element'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};const k=["Default","Secondary","Accent","Destructive","Outline","Ghost","Link","Small","Large","ExtraLarge","Icon","Disabled","WithIcon","Loading","WithActions","AsChild"],f=Object.freeze(Object.defineProperty({__proto__:null,Accent:a,AsChild:x,Default:s,Destructive:o,Disabled:m,ExtraLarge:u,Ghost:c,Icon:p,Large:d,Link:i,Loading:g,Outline:t,Secondary:n,Small:l,WithActions:v,WithIcon:h,__namedExportsOrder:k,default:L},Symbol.toStringTag,{value:"Module"}));export{a as A,f as B,s as D,u as E,c as G,p as I,i as L,t as O,n as S,h as W,o as a,l as b,d as c,m as d,g as e,v as f,x as g};
