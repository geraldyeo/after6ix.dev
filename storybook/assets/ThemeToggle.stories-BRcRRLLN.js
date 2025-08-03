import{j as e}from"./iframe-CM2Mt5Od.js";import{T as h,a as u}from"./theme-toggle-DgnsiNc8.js";import{B as t}from"./button-ZcuymWCK.js";import{C as d,a as i,b as c,c as m,d as l}from"./card-B4U9d6Gr.js";import"./preload-helper-D9Z9MdNV.js";const x={title:"UI Kit/Theme Toggle",component:h,parameters:{layout:"centered",docs:{description:{component:"Theme toggle components that allow users to switch between light, dark, and system themes. These components integrate with the theme context to provide seamless theme switching with smooth transitions."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["button","dropdown"],description:"The variant of the theme toggle"},size:{control:"select",options:["sm","default","lg"],description:"The size of the theme toggle"}}},s={args:{variant:"button",size:"default"}},a={args:{variant:"button",size:"sm"}},o={args:{variant:"dropdown",size:"default"}},r={render:()=>e.jsx(u,{}),name:"Theme Toggle Group",parameters:{docs:{description:{story:"A group of buttons that allows users to select between light, dark, and system themes."}}}},n={render:()=>e.jsxs("div",{className:"space-y-6 max-w-md mx-auto",children:[e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx(c,{children:"Theme Demo"}),e.jsx(m,{children:"This card demonstrates how the theme system works across components."})]}),e.jsxs(l,{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Toggle Theme:"}),e.jsx(h,{variant:"button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{variant:"default",className:"w-full",children:"Primary Button"}),e.jsx(t,{variant:"secondary",className:"w-full",children:"Secondary Button"}),e.jsx(t,{variant:"outline",className:"w-full",children:"Outline Button"}),e.jsx(t,{variant:"ghost",className:"w-full",children:"Ghost Button"})]}),e.jsx("div",{className:"pt-4 border-t border-border",children:e.jsx(u,{})})]})]}),e.jsxs(d,{variant:"elevated",children:[e.jsxs(i,{children:[e.jsx(c,{children:"Elevated Card"}),e.jsx(m,{children:"This card has an elevated shadow that responds to theme changes."})]}),e.jsx(l,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notice how the text colors, backgrounds, and borders all adapt seamlessly when you switch themes using the controls above."})})]})]}),name:"Theme System Demo",parameters:{layout:"padded",docs:{description:{story:"A comprehensive demonstration of the theme system working across multiple components. Switch themes using the toggle above to see the smooth transitions."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'default'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'button',
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dropdown',
    size: 'default'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeToggleGroup />,
  name: 'Theme Toggle Group',
  parameters: {
    docs: {
      description: {
        story: 'A group of buttons that allows users to select between light, dark, and system themes.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Theme Demo</CardTitle>
          <CardDescription>
            This card demonstrates how the theme system works across components.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Toggle Theme:</span>
            <ThemeToggle variant="button" />
          </div>
          
          <div className="space-y-2">
            <Button variant="default" className="w-full">Primary Button</Button>
            <Button variant="secondary" className="w-full">Secondary Button</Button>
            <Button variant="outline" className="w-full">Outline Button</Button>
            <Button variant="ghost" className="w-full">Ghost Button</Button>
          </div>
          
          <div className="pt-4 border-t border-border">
            <ThemeToggleGroup />
          </div>
        </CardContent>
      </Card>
      
      <Card variant="elevated">
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            This card has an elevated shadow that responds to theme changes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Notice how the text colors, backgrounds, and borders all adapt seamlessly 
            when you switch themes using the controls above.
          </p>
        </CardContent>
      </Card>
    </div>,
  name: 'Theme System Demo',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A comprehensive demonstration of the theme system working across multiple components. Switch themes using the toggle above to see the smooth transitions.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const y=["Default","Small","Dropdown","ThemeToggleGroupStory","InContext"];export{s as Default,o as Dropdown,n as InContext,a as Small,r as ThemeToggleGroupStory,y as __namedExportsOrder,x as default};
