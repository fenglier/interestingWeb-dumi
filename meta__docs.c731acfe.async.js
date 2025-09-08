"use strict";(self.webpackChunkinterestingWeb=self.webpackChunkinterestingWeb||[]).push([[904],{39264:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-carousel-demo-carouseldemo":{component:b.memo(b.lazy(function(){return e.e(433).then(e.bind(e,71572))})),asset:{type:"BLOCK",id:"docs-components-carousel-demo-carouseldemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69118).Z},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}},"docs-components-carousel-demo-animationcarouseldemo":{component:b.memo(b.lazy(function(){return e.e(433).then(e.bind(e,21652))})),asset:{type:"BLOCK",id:"docs-components-carousel-demo-animationcarouseldemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96332).Z},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},10220:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-color-picker-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.ColorPicker,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){return s.createElement(s.Fragment,null,s.createElement(r,{defaultValue:"#128702",onChange:function(ce){console.log("color:",ce)}}))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-color-picker-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ColorPicker } from 'interestingWeb';
import React from 'react';
const ColorPickerDemo = () => {
  return (
    <>
      <ColorPicker
        defaultValue={'#128702'}
        onChange={( color) => {
          console.log('color:', color);
        }}
      />
    </>
  );
};
export default ColorPickerDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},44980:function(E,n,e){e.r(n),e.d(n,{demos:function(){return k}});var o=e(67294),k={}},73052:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-image-preview-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.ImagePreview,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){return s.createElement(s.Fragment,null,s.createElement(r,{width:300,height:300,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),s.createElement(r,{width:300,height:300,src:"https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"}))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-image-preview-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ImagePreview } from 'interestingWeb';
import React from 'react';

const ImagePreviewDemo = () => {
  return (
    <>
      <ImagePreview
        width={300}
        height={300}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <ImagePreview
        width={300}
        height={300}
        src="https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"
      />
    </>
  );
};

export default ImagePreviewDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},4593:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-message-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Message,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){return s.createElement(s.Fragment,null,s.createElement(r,null),s.createElement(r,{count:99}))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Message } from 'interestingWeb';
import React from 'react';
const MessageDemo = () => {
  return (
    <>
      <Message />
      <Message count={99} />
    </>
  );
};
export default MessageDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},5857:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-steps-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Steps,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){var Z=1,ce=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}];return s.createElement(r,{current:Z,items:ce})},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-steps-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Steps} from "interestingWeb";
import React from 'react';

const StepsDemo = () => {
  const current = 1;
  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  return <Steps current={current} items={steps} />;
};

export default StepsDemo`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},89675:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-components-tree-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Tree,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){var Z=[{label:"Parent 1",value:"1",children:[{label:"Child 1-1",value:"1-1",children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}];return s.createElement(r,{data:Z,onChange:function(re,se){console.log(re),console.log(se)}})},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
    />
  );
};
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:null,title:"\u57FA\u7840\u4F7F\u7528"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}},"docs-components-tree-demo-1":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Tree,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){var Z=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}];return s.createElement(r,{data:Z,onChange:function(re,se){console.log(re),console.log(se)}})},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      expand: true,
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          expand: false,
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
    />
  );
};
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u8BBE\u7F6E\u8282\u70B9\u7684expand",title:"\u5C55\u5F00\u8282\u70B9"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}},"docs-components-tree-demo-2":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Tree,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){var Z=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}],ce=["Child 1-1"];return s.createElement(r,{data:Z,onChange:function(se,xe){console.log(se),console.log(xe)},checked:ce})},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      expand: true,
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          expand: false,
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  const checked = ['Child 1-1'];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
      checked={checked}
    />
  );
};
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u901A\u8FC7Tree\u7684checked\u5C5E\u6027\u8BBE\u7F6E",title:"\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u62E9"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}},"docs-components-tree-demo-3":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,16671));case 2:return d=t.sent,r=d.Tree,t.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=t.sent,s=i.default,_=function(){var Z=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}],ce=["Child 1-1"],re=["Grandchild 1-1-2"];return s.createElement(r,{data:Z,onChange:function(xe,te){console.log(xe),console.log(te)},disabled:ce,checked:re})},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      expand: true,
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          expand: false,
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  const disabled = ['Child 1-1'];
  const checked = ['Grandchild 1-1-2'];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
      disabled={disabled}
      checked={checked}
    />
  );
};
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u901A\u8FC7Tree\u7684disabled\u5C5E\u6027\u8BBE\u7F6E",title:"\u8BBE\u7F6E\u4E0D\u53EF\u9009\u4E2D\u7684\u8282\u70B9"},context:{interestingWeb:m,react:o||(o=e.t(b,2))},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},73577:function(E,n,e){var o,k;e.r(n),e.d(n,{demos:function(){return r}});var u=e(17061),D=e.n(u),f=e(17156),b=e.n(f),m=e(67294),c=e(16671),h=e(59904),d=e(58339),r={"docs-components-water-fall-demo-waterfall":{component:m.memo(m.lazy(function(){return e.e(433).then(e.bind(e,43874))})),asset:{type:"BLOCK",id:"docs-components-water-fall-demo-waterfall",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(89328).Z},interestingWeb:{type:"NPM",value:"0.0.1"},"./data2.json":{type:"FILE",value:e(4703).Z},"./data1.json":{type:"FILE",value:e(57095).Z}},entry:"index.tsx"},context:{"./data2.json":o||(o=e.t(h,2)),"./data1.json":k||(k=e.t(d,2)),interestingWeb:c,"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/demos/data2.json":o||(o=e.t(h,2)),"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/demos/data1.json":k||(k=e.t(d,2))},renderOpts:{compile:function(){var i=b()(D()().mark(function _(){var a,t=arguments;return D()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,e.e(250).then(e.bind(e,90250));case 2:return Z.abrupt("return",(a=Z.sent).default.apply(a,t));case 3:case"end":return Z.stop()}},_)}));function s(){return i.apply(this,arguments)}return s}()}}}},68636:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-ball-bounce-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.BallBounce,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-ball-bounce-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallBounce } from 'interestingWeb';

const BallBounceDemo = () => {
  return <BallBounce />;
};
export default BallBounceDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},2648:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-ball-collision-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.BallCollision,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-ball-collision-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallCollision } from 'interestingWeb';

const BallCollisionDemo = () => {
  return <BallCollision />;
};

export default BallCollisionDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},55693:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-ball-free-down-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.BallFreeDown,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-ball-free-down-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallFreeDown } from 'interestingWeb';

const BallFreeDownDemo = () => {
  return <BallFreeDown />;
};

export default BallFreeDownDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},91314:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-barrage-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.Barrage,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-barrage-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Barrage } from 'interestingWeb';
const BarrageDemo = () => {
  return <Barrage />;
};
export default BarrageDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},17793:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-drag-order-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.DragOrder,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-drag-order-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { DragOrder } from 'interestingWeb';

const DragOrderDemo = () => {
  return <DragOrder />;
};

export default DragOrderDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},78882:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-inertia-ball-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.InertiaBall,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-inertia-ball-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import {InertiaBall } from 'interestingWeb';

const InertiaBallDemo = ()=>{
    return <InertiaBall />
}

export default InertiaBallDemo`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},42386:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-pacman-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.Pacman,_=function(){return r.createElement("div",{style:{display:"flex",width:"100%",height:"10rem",justifyContent:"center",alignItems:"center",boxShadow:"var(--shadow-lg)"}},r.createElement(s,null))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-pacman-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Pacman } from 'interestingWeb';
const PacmanDemo = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '10rem',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <Pacman />
    </div>
  );
};
export default PacmanDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},83546:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-push-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.Push,_=function(){var Z=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`,ce=[{key:"1",exist:"header 1",expander:r.createElement("p",null,Z)},{key:"2",exist:"header 2",expander:r.createElement("p",null,Z)},{key:"3",exist:"header 3",expander:r.createElement("p",null,Z)}];return r.createElement("div",{style:{height:"5rem"}},r.createElement(s,{items:ce,defaultActive:2,onChange:function(se){console.log(se)}}))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-push-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Push } from 'interestingWeb';

const PushDemo = () => {
  const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.\`;
  const items = [
    { key: '1', exist: 'header 1', expander: <p>{text}</p> },
    {
      key: '2',
      exist: 'header 2',
      expander: <p>{text}</p>,
    },
    {
      key: '3',
      exist: 'header 3',
      expander: <p>{text}</p>,
    },
  ];
  return (
    <div style={{ height: '5rem' }}>
      <Push
        items={items}
        defaultActive={2}
        onChange={(id) => {
          console.log(id);
        }}
      />
    </div>
  );
};

export default PushDemo`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},78784:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-ripple-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.Ripple,_=function(){return r.createElement(s,null,r.createElement("div",{style:{width:"5rem",height:"5rem",backgroundColor:"var(--color-bg-primary)"}}))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-ripple-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Ripple } from 'interestingWeb';

const RippleDemo = () => {
  return (
    <Ripple>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          backgroundColor: 'var(--color-bg-primary)',
        }}
      ></div>
    </Ripple>
  );
};
export default RippleDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},60506:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-rubber-ball-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.RubberBall,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-rubber-ball-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { RubberBall } from 'interestingWeb';

const RubberBallDemo = () => {
  return <RubberBall />;
};

export default RubberBallDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},62518:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-shake-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_,a;return u()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=S.sent,r=d.default,S.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=S.sent,s=i.Message,_=i.Shake,a=function(){return r.createElement(r.Fragment,null,r.createElement(_,null,r.createElement(s,null)),r.createElement(_,null,r.createElement(s,{count:100})))},S.abrupt("return",{default:a});case 11:case"end":return S.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-shake-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Message, Shake } from 'interestingWeb';
const ShakeDemo = () => {
  return (
    <>
      <Shake>
        <Message />
      </Shake>
      <Shake>
        <Message count={100} />
      </Shake>
    </>
  );
};
export default ShakeDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},59124:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(16671),c={"docs-effects-trail-demo-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,16671));case 6:return i=t.sent,s=i.Trail,_=function(){return r.createElement(s,null)},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-effects-trail-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Trail } from 'interestingWeb';

const TrailDemo = () => {
  return <Trail />;
};
export default TrailDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(b,2)),interestingWeb:m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},81667:function(E,n,e){e.r(n),e.d(n,{demos:function(){return k}});var o=e(67294),k={}},60810:function(E,n,e){e.r(n),e.d(n,{demos:function(){return k}});var o=e(67294),k={}},11171:function(E,n,e){e.r(n),e.d(n,{demos:function(){return k}});var o=e(67294),k={}},48415:function(E,n,e){e.r(n),e.d(n,{demos:function(){return m}});var o=e(17061),k=e.n(o),u=e(17156),D=e.n(u),f=e(67294),b=e(6930),m={"docs-layouts-middle-adapt-demo-0":{component:f.memo(f.lazy(D()(k()().mark(function c(){var h,d,r;return k()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,6930));case 2:return h=s.sent,d=h.default,r=function(){return f.createElement(f.Fragment,null,f.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),f.createElement("div",{className:d.BFC8},f.createElement("div",{className:d.left2},"\u5DE6\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.right2},"\u53F3\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.middle},"\u4E2D\u95F4\u81EA\u9002\u5E94")),f.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09"),f.createElement("div",{className:d.BFC9},f.createElement("div",{className:d.itemLeft},"\u5DE6\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.itemMiddle},"\u4E2D\u95F4\u81EA\u9002\u5E94"),f.createElement("div",{className:d.itemRight},"\u53F3\u4FA7\u56FA\u5B9A")))},s.abrupt("return",{default:r});case 6:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-layouts-middle-adapt-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import style from "./MiddleAdapt.module.scss";
const MiddleAdapt = () => {
  return (
    <>
      <h2>\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09</h2>
      <div className={style.BFC8}>
        <div className={style.left2}>\u5DE6\u4FA7\u56FA\u5B9A</div>
        <div className={style.right2}>\u53F3\u4FA7\u56FA\u5B9A</div>
        <div className={style.middle}>\u4E2D\u95F4\u81EA\u9002\u5E94</div>
      </div>
      <h2>\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09</h2>
      <div className={style.BFC9}>
        <div className={style.itemLeft}>\u5DE6\u4FA7\u56FA\u5B9A</div>
        <div className={style.itemMiddle}>\u4E2D\u95F4\u81EA\u9002\u5E94</div>
        <div className={style.itemRight}>\u53F3\u4FA7\u56FA\u5B9A</div>
      </div>
    </>
  );
};

export default MiddleAdapt;`},"./MiddleAdapt.module.scss":{type:"FILE",value:e(91152).Z}},entry:"index.tsx"},context:{"./MiddleAdapt.module.scss":b,"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/MiddleAdapt.module.scss":b},renderOpts:{compile:function(){var c=D()(k()().mark(function d(){var r,i=arguments;return k()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(250).then(e.bind(e,90250));case 2:return _.abrupt("return",(r=_.sent).default.apply(r,i));case 3:case"end":return _.stop()}},d)}));function h(){return c.apply(this,arguments)}return h}()}}}},21443:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(3658),c={"docs-layouts-view-port-layout-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,3658));case 6:return i=t.sent,s=i.default,_=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:s.center},"hello world"))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-layouts-view-port-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import style from "./ViewPortLayout.module.scss";

const Demo = ()=>{
    return <>
    <div className = {style.center}>
        hello world
    </div>
    </>
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"./ViewPortLayout.module.scss":{type:"FILE",value:e(64757).Z}},entry:"index.tsx"},context:{"./ViewPortLayout.module.scss":m,react:o||(o=e.t(b,2)),"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/ViewPortLayout.module.scss":m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},53307:function(E,n,e){e.r(n),e.d(n,{demos:function(){return m}});var o=e(17061),k=e.n(o),u=e(17156),D=e.n(u),f=e(67294),b=e(21126),m={"docs-layouts-fix-one-side-demo-0":{component:f.memo(f.lazy(D()(k()().mark(function c(){var h,d,r;return k()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,21126));case 2:return h=s.sent,d=h.default,r=function(){return f.createElement(f.Fragment,null,f.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09"),f.createElement("div",{className:d.BFC5},f.createElement("div",{className:d.fixLeft},"\u5DE6\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.autoAdapt},"\u53F3\u4FA7\u81EA\u9002\u5E94")),f.createElement("h2",null,"\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u5DE6\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),f.createElement("div",{className:d.BFC6},f.createElement("div",{className:d.rightFloat},"\u53F3\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.autoLeft},"\u5DE6\u4FA7\u81EA\u9002\u5E94")),f.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),f.createElement("div",{className:d.BFC7},f.createElement("div",{className:d.leftFloat},"\u5DE6\u4FA7\u56FA\u5B9A"),f.createElement("div",{className:d.autoRight},"\u53F3\u4FA7\u81EA\u9002\u5E94")))},s.abrupt("return",{default:r});case 6:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"docs-layouts-fix-one-side-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import style from './FixOneSide.module.scss';
const fixOneSide = () => {
  return (
    <>
      <h2>\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09</h2>
      <div className={style.BFC5}>
        <div className={style.fixLeft}>\u5DE6\u4FA7\u56FA\u5B9A</div>
        <div className={style.autoAdapt}>\u53F3\u4FA7\u81EA\u9002\u5E94</div>
      </div>
      <h2>\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u5DE6\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09</h2>
      <div className={style.BFC6}>
        <div className={style.rightFloat}>\u53F3\u4FA7\u56FA\u5B9A</div>
        <div className={style.autoLeft}>\u5DE6\u4FA7\u81EA\u9002\u5E94</div>
      </div>
      <h2>\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09</h2>
      <div className={style.BFC7}>
        <div className={style.leftFloat}>\u5DE6\u4FA7\u56FA\u5B9A</div>
        <div className={style.autoRight}>\u53F3\u4FA7\u81EA\u9002\u5E94</div>
      </div>
    </>
  );
};
export default fixOneSide`},"./FixOneSide.module.scss":{type:"FILE",value:e(38102).Z}},entry:"index.tsx"},context:{"./FixOneSide.module.scss":b,"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/FixOneSide.module.scss":b},renderOpts:{compile:function(){var c=D()(k()().mark(function d(){var r,i=arguments;return k()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(250).then(e.bind(e,90250));case 2:return _.abrupt("return",(r=_.sent).default.apply(r,i));case 3:case"end":return _.stop()}},d)}));function h(){return c.apply(this,arguments)}return h}()}}}},29157:function(E,n,e){e.r(n),e.d(n,{demos:function(){return k}});var o=e(67294),k={}},223:function(E,n,e){var o;e.r(n),e.d(n,{demos:function(){return c}});var k=e(17061),u=e.n(k),D=e(17156),f=e.n(D),b=e(67294),m=e(50477),c={"docs-layouts-nine-demo-0":{component:b.memo(b.lazy(f()(u()().mark(function h(){var d,r,i,s,_;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,r=d.default,t.next=6,Promise.resolve().then(e.bind(e,50477));case 6:return i=t.sent,s=i.default,_=function(){return r.createElement("div",{className:s.flex},r.createElement("div",{className:s.item},"1"),r.createElement("div",{className:s.item},"2"),r.createElement("div",{className:s.item},"3"),r.createElement("div",{className:s.item},"4"),r.createElement("div",{className:s.item},"5"),r.createElement("div",{className:s.item},"6"),r.createElement("div",{className:s.item},"7"),r.createElement("div",{className:s.item},"8"))},t.abrupt("return",{default:_});case 10:case"end":return t.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-layouts-nine-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

import style from "./NineLayout.module.scss";
const NineLayout = () => {
  return (
    <div className={style.flex} >
      <div className={style.item}>1</div>
      <div className={style.item}>2</div>
      <div className={style.item}>3</div>
      <div className={style.item}>4</div>
      <div className={style.item}>5</div>
      <div className={style.item}>6</div>
      <div className={style.item}>7</div>
      <div className={style.item}>8</div>
      {/*  <div className="item">9</div> */}
    </div>
  );
};
export default NineLayout;`},react:{type:"NPM",value:"18.3.1"},"./NineLayout.module.scss":{type:"FILE",value:e(58880).Z}},entry:"index.tsx"},context:{"./NineLayout.module.scss":m,react:o||(o=e.t(b,2)),"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/NineLayout.module.scss":m},renderOpts:{compile:function(){var h=f()(u()().mark(function r(){var i,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(i=a.sent).default.apply(i,s));case 3:case"end":return a.stop()}},r)}));function d(){return h.apply(this,arguments)}return d}()}}}},16671:function(E,n,e){e.r(n),e.d(n,{AnimationCarousel:function(){return d},BallBounce:function(){return sn},BallCollision:function(){return on},BallFreeDown:function(){return un},Barrage:function(){return hn},Carousel:function(){return r},ColorPicker:function(){return _},DragOrder:function(){return yn},ImagePreview:function(){return ce},InertiaBall:function(){return In},Loader:function(){return Wn},Message:function(){return xe},Pacman:function(){return Pn},Push:function(){return Bn},Ripple:function(){return On},RubberBall:function(){return Ln},Shake:function(){return Kn},Steps:function(){return Ne},Trail:function(){return Sn},Tree:function(){return Ge},WaterFall:function(){return cn}});var o=e(861),k=e.n(o),u=e(27424),D=e.n(u),f={carousel:"klEWe2CIGWEUd3sdfSTn",trackWrapper:"xMFILfis7wQb6DFG9mG3",track:"lHIEMG4M0E_b10UbgiTm",slide:"Oeer6NoVD98tpEKP5G_S",controls:"JH8YihuD_WkXZS4kbiqL",scrollContainer:"wR_GJ8sonc9fVzE0KMKZ",scrollContent:"iqHQq7gKq8UmCutFeYIN",item:"se97KUt_ojoO6bDbQ8yO",marquee:"X2VQPsIYOn8UnUVt1YGp"},b=e(96486),m=e(67294),c=e(85893),h=function(l){var p=l.children,x=l.autoPlay,g=x===void 0?!0:x,w=l.interval,v=w===void 0?3e3:w,P=l.width,M=P===void 0?50:P,y=l.defaultAnimationTime,I=y===void 0?1:y,j=(0,m.useState)(g),W=D()(j,2),T=W[0],F=W[1],L=(0,m.useState)(1),R=D()(L,2),q=R[0],B=R[1],C=(0,m.useRef)(q),N=(0,m.useState)(!1),V=D()(N,2),$=V[0],H=V[1],G=(0,m.useRef)(null),K=p.length,J=[p[p.length-1]].concat(k()(p),[p[0]]),X=function(Y){G.current&&($||(H(!0),B(Y)))},ee=(0,b.debounce)(function(){F(!1),X(q-1)},100),ne=(0,b.debounce)(function(){F(!1),X(q+1)},100),O=function(){H(!1),q===0?B(K):q===K+1&&B(1)};return(0,m.useEffect)(function(){C.current=q},[q]),(0,m.useEffect)(function(){var U;if(T){var Y=function Q(){B(function(ae){return X(ae+1),ae+1}),U=setTimeout(Q,I*1e3+50)};Y()}return function(){return clearTimeout(U)}},[T]),(0,c.jsxs)("div",{className:f.carousel,children:[(0,c.jsx)("div",{className:f.trackWrapper,children:(0,c.jsx)("div",{className:f.track,ref:G,style:{transform:"translateX(-".concat(q*M,"%)"),transition:$?"transform ".concat(I,"s linear"):"none"},onTransitionEnd:O,children:J.map(function(U,Y){return(0,c.jsx)("div",{className:f.slide,style:{flexBasis:"".concat(M,"%")},children:U},Y)})})}),(0,c.jsxs)("div",{className:f.controls,children:[(0,c.jsx)("button",{onClick:ee,children:"\u2039"}),(0,c.jsx)("button",{onClick:ne,children:"\u203A"})]})]})},d=function(l){var p=l.items,x=l.animationTime,g=(0,m.useRef)(null);(0,m.useEffect)(function(){g.current&&(g.current.style.animation="".concat(f.marquee," ").concat(x,"s linear infinite"))},[]);var w=[].concat(k()(p),k()(p));return(0,c.jsx)("div",{className:f.scrollContainer,children:(0,c.jsx)("div",{className:f.scrollContent,ref:g,children:w.map(function(v){return(0,c.jsx)("div",{className:f.item,style:{width:"".concat(v.width,"px")},onClick:function(){return v.clickHandler&&v.clickHandler(v)},children:v.element})})})})},r=h,i={colorPicker:"HP5CvepNpFck7PFH_w1v",colorValue:"Kw11rf7qcj8TFiJT0Xr2"},s=function(l){var p=l.defaultValue,x=l.onChange,g=(0,m.useState)(p||"#ff0000"),w=D()(g,2),v=w[0],P=w[1],M=function(I){P(I.target.value),x&&x(I.target.value)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"color",className:i.colorPicker,value:v,onChange:M}),(0,c.jsx)("span",{className:i.colorValue,children:v})]})},_=s,a=e(73935),t={thumbnail:"VezCn_25mK4qRtnntruS",overlay:"lXr6wNksQkYLr8jd1NKm",fadeIn:"UHJZUjrT7Z8tA8ZilrkB",zoomedImage:"ew1z0gOz3Yg4DtYnBhjp",operationContainer:"uTqHsVudO5oHFdSQER4q",operationItem:"NfbNMV8VJsgwdjDajpud",scaleUp:"AyT6jIOfZ90rP1M39Q9z"},S=.3,Z=function(l){var p=l.src,x=l.alt,g=l.width,w=l.height,v=(0,m.useState)(!1),P=D()(v,2),M=P[0],y=P[1],I=(0,m.useState)(""),j=D()(I,2),W=j[0],T=j[1],F=(0,m.useRef)(""),L=(0,m.useRef)(null),R=(0,m.useRef)(null),q=function(){if(L.current){document.documentElement.style.overflow="clip";var H=L.current.getBoundingClientRect(),G;window.innerWidth>window.innerHeight?G=window.innerHeight*.9/H.height:G=window.innerWidth*.9/H.width;var K=H.left,J=H.top,X="translate(".concat(K,"px, ").concat(J,"px) scale(1, 1)");(0,a.flushSync)(function(){T(X),y(!0)});var ee="translate(50vw, 50vh) translate(-50%, -50%) scale(".concat(G,", ").concat(G,")");setTimeout(function(){F.current=X,T(ee)},50)}},B=function(){T(F.current),setTimeout(function(){y(!1),document.documentElement.style.overflow=""},S*1e3)},C=function(H){H.stopPropagation()},N=function(H){if(R.current){var G=R.current.style.transform;R.current.style.transformOrigin="center center";var K=G.match(/rotate\(([-\d.]+)deg\)/),J=K?parseFloat(K[1]):0;H?J+=90:J-=90;var X=G.replace(/rotate\(([-\d.]+)deg\)/,"rotate(".concat(J,"deg)"));K?R.current.style.transform=X:R.current.style.transform="".concat(G," rotate(").concat(J,"deg)")}},V=function(H){if(R.current){H.stopPropagation();var G=H.deltaY,K=R.current.style.transform,J=K.match(/scale\(([\d.]+),\s*([\d.]+)\)/),X=1,ee=1;J?(X=parseFloat(J[1]),ee=parseFloat(J[2])):R.current.style.transform="".concat(K," scale(1, 1)");var ne=G>0?.9:1.1;X*=ne,ee*=ne;var O=K.replace(/scale\(([\d.]+),\s*([\d.]+)\)/,"scale(".concat(X,", ").concat(ee,")"));R.current.style.transform=O}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{ref:L,width:"".concat(g||200),height:"".concat(w||200),src:p||x,className:t.thumbnail,onClick:q}),M&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:t.overlay,onClick:B,children:(0,c.jsx)("img",{width:"".concat(g||200),height:"".concat(w||200),src:p||x,onClick:C,className:t.zoomedImage,ref:R,style:{transform:W,transition:"transform ".concat(S,"s ease")},onWheel:V})}),(0,c.jsxs)("div",{className:t.operationContainer,children:[(0,c.jsx)("div",{className:t.operationItem,onClick:function(){return N(!1)},children:(0,c.jsxs)("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor",children:[(0,c.jsx)("defs",{children:(0,c.jsx)("style",{})}),(0,c.jsx)("path",{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}),(0,c.jsx)("path",{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"})]})}),(0,c.jsx)("div",{className:t.operationItem,onClick:function(){return N(!0)},children:(0,c.jsxs)("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor",children:[(0,c.jsx)("defs",{children:(0,c.jsx)("style",{})}),(0,c.jsx)("path",{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}),(0,c.jsx)("path",{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"})]})})]})]})]})},ce=Z,re={container:"kuFfA1WiSjkfVFF2djYN",messageOutside:"K3UyAh2cKAui4v9j0ZBZ",unread:"gqPfQEFbYzoUiev6sFZS"},se=function(l){var p=l.count;return p!=null?(0,c.jsxs)("div",{className:re.messageOutside,children:[(0,c.jsx)("div",{className:re.unread,children:p}),(0,c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z",fill:"currentColor"})]})]}):(0,c.jsx)("div",{className:re.container,children:(0,c.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z",fill:"currentColor"})]})})},xe=se,te={container:"rO2ZsNqFTN8teEKKHt4N",item:"Z0jFKUcN4MEgp13LWqvc",icon:"HKldn6cMxAI5sW86TOaI",iconFinish:"BwF3D_dk0o0SanDHvwcV",iconActive:"cUaBA_pBicYxRpe36Cpq",spin:"tVUqXRkw77kitckXdWiD",content:"OQCQqFy9F2Eeuzfyw8sq",finish:"JHv8KyYWywj8WusQMFqe",stepper:"weRPMZvgaYYJ0Mt1ZR3e",step:"Z4hKP_WhNg6etC8CJBtj",circle:"l6p1bK1YCAotnCoy84Az",completed:"ps3I68uOuh8rCqQVt9OQ",active:"LYCaRoNNsHYXxPk6bZfy",label:"sDUDclrZXRwyJO5dYWtB"},Fe=function(l){var p=l.items,x=l.current,g=p.map(function(w,v){return v<x?(0,c.jsxs)("div",{className:te.item,children:[(0,c.jsx)("div",{className:"".concat(te.icon," ").concat(te.iconFinish),children:v+1}),(0,c.jsx)("div",{className:"".concat(te.content," ").concat(te.finish),children:w.title})]}):v==x?(0,c.jsxs)("div",{className:te.item,children:[(0,c.jsxs)("div",{style:{position:"relative"},children:[(0,c.jsx)("div",{className:"".concat(te.icon," ").concat(te.iconActive)}),(0,c.jsx)("div",{className:"".concat(te.icon),children:v+1})]}),(0,c.jsx)("div",{className:"".concat(te.content," ").concat(te.active),children:w.title})]}):(0,c.jsxs)("div",{className:te.item,children:[(0,c.jsx)("div",{className:te.icon,children:v+1}),(0,c.jsx)("div",{className:te.content,children:w.title})]})});return(0,c.jsx)("div",{className:te.container,children:g})},Ne=Fe,je={childPadding:"J3ezreV03ik3bGUVHPVU",arrowDown:"sso9CabVhILhJ0mTHLQ7",arrowRight:"_MP4s6xA8uInVh2Po4_g"},z=function(A){return A[A.UNCHECKED=0]="UNCHECKED",A[A.CHECKED=1]="CHECKED",A[A.INDETERMINATE=2]="INDETERMINATE",A}(z||{}),Pe=function A(l,p){var x,g=JSON.parse(JSON.stringify(l));if(g!=null&&((x=g.children)!==null&&x!==void 0?x:[]).length>0){var w,v=((w=g.children)!==null&&w!==void 0?w:[]).map(function(P){var M=A(P,g);return M});g.children=v}return g.parent=p!=null&&p.id?p==null?void 0:p.id:(p==null?void 0:p.label)||"",g.id=g.id?g.id:g.label,g.expand=g.expand==null||g.expand==null?!0:g.expand,g.check=g.check==null||g.check==null?z.UNCHECKED:g.check,g},Ke=function(l,p){l.size!==0&&p.forEach(function(x){var g=l.get(x);if(g){var w;g.check=z.CHECKED;var v=function I(j){j.check=z.CHECKED,j.children&&j.children.forEach(function(W){I(W)})};((w=g.children)!==null&&w!==void 0?w:[]).forEach(function(I){v(I)});for(var P=g;l.get(P.parent);)P=l.get(P.parent);var M=P,y=function I(j){if(j.children){j.check=z.UNCHECKED;var W=j.children.map(function(F){return I(F)}),T=new Set(W);return T.size===1?T.has(z.CHECKED)?j.check=z.CHECKED:T.has(z.UNCHECKED)?j.check=z.UNCHECKED:j.check=z.INDETERMINATE:j.check=z.INDETERMINATE,j.check}else return j.check};y(M)}})},Ue=function(l,p){l.size!==0&&p.forEach(function(x){var g=l.get(x);if(g){var w;g.disabled=!0;var v=function P(M){M.disabled=!0,M.children&&M.children.forEach(function(y){P(y)})};((w=g.children)!==null&&w!==void 0?w:[]).forEach(function(P){v(P)})}})},Se=function(l){var p,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],w=(0,m.useState)((p=JSON.parse(JSON.stringify(l)))===null||p===void 0?void 0:p.map(function(I){return Pe(I,void 0)})),v=D()(w,2),P=v[0],M=v[1],y=(0,m.useRef)(new Map);return(0,m.useEffect)(function(){var I,j=(I=JSON.parse(JSON.stringify(l)))===null||I===void 0?void 0:I.map(function(F){return Pe(F,void 0)});M(j);var W=new Map,T=function F(L){var R;if(L.id&&W.set(L.id,L),L!=null&&((R=L.children)!==null&&R!==void 0?R:[]).length>0){var q;((q=L.children)!==null&&q!==void 0?q:[]).forEach(function(B){F(B)})}};j.map(function(F){T(F)}),y.current=W,Ke(W,x),Ue(W,g)},[l,x,g]),[P,y,M]},Ve=[],He=[],$e=function(l){var p=l.data,x=l.checked,g=x===void 0?Ve:x,w=l.disabled,v=w===void 0?He:w,P=l.onChange,M=Se(p,g,v),y=D()(M,3),I=y[0],j=y[1],W=y[2],T=function(q){var B,C=q.target,N=C.checked,V=C.id,$=j.current.get(V);$.check=N?z.CHECKED:z.UNCHECKED;var H=function ne(O){O.check=N?z.CHECKED:z.UNCHECKED,O.children&&O.children.forEach(function(U){U.disabled||ne(U)})};((B=$.children)!==null&&B!==void 0?B:[]).forEach(function(ne){H(ne)});for(var G=$;j.current.get(G.parent);)G=j.current.get(G.parent);var K=G,J=function ne(O){if(O.children){O.check=z.UNCHECKED;var U=O.children.map(function(Q){return ne(Q)}),Y=new Set(U);return Y.size===1?Y.has(z.CHECKED)?O.check=z.CHECKED:Y.has(z.UNCHECKED)?O.check=z.UNCHECKED:O.check=z.INDETERMINATE:O.check=z.INDETERMINATE,O.check}else return O.check};J(K),W(k()(I));var X=JSON.parse(JSON.stringify($)),ee=JSON.parse(JSON.stringify(I));P&&P(X,ee)},F=function(q){var B=q.currentTarget.id,C=j.current.get(B);C.expand=!C.expand,W(k()(I))},L=function R(q){var B=function(N){var V;return((V=N==null?void 0:N.children)!==null&&V!==void 0?V:[]).length>0?(0,c.jsx)("svg",{width:"1rem",height:"1rem",id:N.id,onClick:F,className:N.expand?je.arrowDown:je.arrowRight,children:(0,c.jsx)("use",{href:"#arrow-down"})}):(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("span",{style:{display:"inline-block",width:"1rem",height:"1rem"}})})};return q.map(function(C){return(0,c.jsxs)("div",{children:[B(C),(0,c.jsx)("input",{disabled:C.disabled,type:"checkbox",name:C.label,value:C.value,id:C.id,onChange:T,checked:C.check===z.CHECKED,ref:function(V){V&&(V.indeterminate=C.check===z.INDETERMINATE)}}),C.label,C.expand&&C.children&&C.children.length>0&&(0,c.jsx)("div",{className:je.childPadding,children:R(C.children)})]},C.value)})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("svg",{style:{display:"none"},children:[(0,c.jsx)("symbol",{id:"arrow-down",viewBox:"0 0 1024 1024",children:(0,c.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})}),(0,c.jsx)("symbol",{id:"arrow-right",viewBox:"0 0 1024 1024",children:(0,c.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})})]}),L(I)]})},Ge=$e,Ye=e(17061),ke=e.n(Ye),Ze=e(42122),fe=e.n(Ze),ze=e(17156),qe=e.n(ze),oe={masonry:"ZKyh4srEj1IAy_tA8x7V","card-box":"rg93kbLeGJEsjZ6CzLQj",card:"YVQWIFW2q649PBKiHshs","card-container":"bkkpFFgyJtsXa2Zk8ew_",cardImage:"V0O1PrzA18boxpHcg3VS",cardFooter:"sQIzYaws_LMO4Ig3AZNR",title:"QZtWroTpdWgDltqRVTDY",author:"q1RLBUuZM6wTiNqtfcE4",authorInfo:"Y98lr59qgJfGTrUJjKw7",avatar:"IWK11NJHfzUClCvrAqgy",name:"SpbD4atKRWETHsXatnwP"},Xe=function(l){var p=l.card,x=l.top,g=l.left,w=l.height,v=l.width,P=l.title,M=l.author,y=l.like;return(0,c.jsxs)("div",{className:oe.card,style:{top:"".concat(x,"px"),left:"".concat(g,"px"),width:"".concat(v,"px")},children:[(0,c.jsx)("div",{style:{height:"".concat(w,"px"),width:"".concat(v,"px"),backgroundColor:"".concat(p.backgroundColor)}}),(0,c.jsxs)("div",{className:oe.cardFooter,children:[(0,c.jsx)("div",{className:oe.title,children:P}),(0,c.jsxs)("div",{className:oe.author,children:[(0,c.jsxs)("div",{className:oe.authorInfo,children:[(0,c.jsx)("div",{className:oe.avatar,style:{backgroundColor:"".concat(p.backgroundColor)}}),(0,c.jsx)("span",{className:oe.name,children:M})]}),(0,c.jsx)("svg",{width:"16",height:"16",children:(0,c.jsx)("use",{href:"#like"})}),(0,c.jsx)("div",{className:"like",children:y})]})]})]})},Je=Xe,Qe=e(23279),en=e.n(Qe),nn=function(l){var p=!1;return function(){for(var x=this,g=arguments.length,w=new Array(g),v=0;v<g;v++)w[v]=arguments[v];p||(p=!0,window.requestAnimationFrame(function(){l.apply(x,w),p=!1}))}},Ie=function(l){return l>=1200?5:l>=992?4:l>=768?3:2},Ee=function(l){return l>=1200||l>=992||l>=768,10},We=function(l){return l>=1200||l>=992||l>=768,24},tn=function(l){var p=(0,m.useRef)(null),x=(0,m.useRef)(Ie(window.innerWidth)),g=(0,m.useRef)(Ee(window.innerWidth)),w=(0,m.useRef)(We(window.innerWidth)),v=(0,m.useRef)(0),P=(0,m.useRef)(Array(x.current).fill(0)),M=(0,m.useState)([]),y=D()(M,2),I=y[0],j=y[1],W=(0,m.useState)([]),T=D()(W,2),F=T[0],L=T[1],R=(0,m.useState)([]),q=D()(R,2),B=q[0],C=q[1],N=(0,m.useState)(window.innerWidth),V=D()(N,2),$=V[0],H=V[1],G=(0,m.useRef)(1),K=(0,m.useRef)(!1),J=en()(function(){if(p.current){var O=p.current.offsetWidth,U=Ie(O),Y=Ee(O),Q=We(O),ae=(O-(U-1)*Y-2*Q)/U;(U!==x.current||Y!==g.current||Q!==w.current||ae!==v.current)&&(x.current=U,g.current=Y,w.current=Q,v.current=ae,H(O))}},200),X=nn(function(){if(p.current){var O=p.current,U=O.scrollTop,Y=O.scrollHeight,Q=O.clientHeight,ae=Y-Q-U;if(ae<=50&&!K.current){var ie=function(){var ge=qe()(ke()().mark(function pe(){var ue;return ke()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,l(G.current++);case 2:ue=me.sent,ue?C(function(de){return[].concat(k()(de),k()(ue.map(function(we){return fe()(fe()({},we),{},{like:Number(we.like)})})))}):K.current=!0;case 4:case"end":return me.stop()}},pe)}));return function(){return ge.apply(this,arguments)}}();ie()}}}),ee=function(U,Y){var Q=[];return U.forEach(function(ae){var ie=Math.floor(ae.height*Y/ae.width);Q.push({id:ae.id,width:Y,height:ie,left:0,top:0,auhtor:"",title:"",like:0})}),Q},ne=function(U,Y,Q,ae,ie,ge){var pe=[],ue=Y.current.children;return Array.from(ue).forEach(function(ve,me){var de=Math.min.apply(Math,k()(U)),we=U.indexOf(de),Vn=we?Q+we*(ae+ie):Q,Hn=de,$n=ve.getBoundingClientRect().height;pe.push(fe()(fe()({},ge[me]),{},{top:Hn,left:Vn})),U[we]+=$n+ie}),[pe,U]};return(0,m.useEffect)(function(){if(p.current){var O=p.current.offsetWidth,U=Ie(O),Y=Ee(O),Q=We(O),ae=(O-(U-1)*Y-2*Q)/U;x.current=U,g.current=Y,w.current=Q,v.current=ae;var ie=function(){var pe=qe()(ke()().mark(function ue(){var ve;return ke()().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return de.next=2,l(G.current++);case 2:ve=de.sent,ve?C(k()(ve)):K.current=!0;case 4:case"end":return de.stop()}},ue)}));return function(){return pe.apply(this,arguments)}}();ie();var ge=new ResizeObserver(function(){J()});return p.current&&ge.observe(p.current),function(){ge.disconnect(),G.current=1}}},[]),(0,m.useEffect)(function(){if(!($<=0)&&!(x.current<=0)&&!(v.current<=0)){var O=ee(B,v.current);j(k()(O)),L(k()(O))}},[$,B]),(0,m.useLayoutEffect)(function(){var O;if(p.current&&!($<=0)){var U=(O=p.current)===null||O===void 0?void 0:O.children;if(U.length>0){var Y=ne(Array(x.current).fill(0),p,w.current,v.current,g.current,I),Q=D()(Y,2),ae=Q[0],ie=Q[1];L(k()(ae)),P.current=k()(ie)}}},[I]),[B,p,F,X]},an=function(l){var p=l.getData,x=tn(p),g=D()(x,4),w=g[0],v=g[1],P=g[2],M=g[3];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("svg",{style:{display:"none"},children:(0,c.jsx)("symbol",{id:"like",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{fill:"currentColor",fillOpacity:".8",d:"M3.256 3.913a3.083 3.083 0 0 0-.003 4.397L8 12.998l4.743-4.684a3.085 3.085 0 0 0 .001-4.4c-.6-.593-1.4-.914-2.233-.914a3.17 3.17 0 0 0-1.91.635L8 4.087l-.601-.452A3.17 3.17 0 0 0 5.489 3c-.834 0-1.634.321-2.233.913m10.19 5.111-4.748 4.69a.996.996 0 0 1-1.397 0L2.549 9.02a4.083 4.083 0 0 1 .004-5.82A4.17 4.17 0 0 1 5.488 2c.907 0 1.787.29 2.512.835A4.17 4.17 0 0 1 10.51 2c1.093 0 2.146.422 2.936 1.202a4.085 4.085 0 0 1 0 5.822"})})}),(0,c.jsx)("div",{className:oe.masonry,ref:v,onScroll:M,children:w.map(function(y){var I;if(P.find(function(j){return j.id===y.id}))return I=P.find(function(j){return j.id===y.id}),(0,c.jsx)(Je,{title:y.title,author:y.auhtor,like:y.like,height:I.height,width:I.width,top:I.top,left:I.left,card:y},y.id)})})]})},cn=an,Be={container:"t4YNnHb8JSkBI2hGvB0F",ball:"yF8vtqTIJTgTf4HpQqFN"},rn=function(){var l=(0,m.useRef)(null),p=(0,m.useRef)(null);return(0,m.useEffect)(function(){if(!(!l.current||!p.current)){var x=l.current,g=p.current,w=0,v=2,P=x.getBoundingClientRect().width,M=function y(){w+=v;var I=g.clientWidth-P;(w<=0||w>=I)&&(v=-v),x.style.transform="translate(".concat(w,"px,-50%)"),requestAnimationFrame(y)};M()}},[]),(0,c.jsx)("div",{className:Be.container,ref:p,children:(0,c.jsx)("div",{className:Be.ball,ref:l})})},sn=rn,dn=function(){var l=(0,m.useRef)(null);return(0,m.useEffect)(function(){var p=l.current;if(p){var x=p.getContext("2d");p.width=600,p.height=400;for(var g=10,w=20,v=[],P=0;P<g;P++)v.push({x:Math.random()*(p.width-2*w)+w,y:Math.random()*(p.height-2*w)+w,vx:Math.random()*4,vy:Math.random()*4,radius:w,color:"hsl(".concat(Math.random()*360,", 70%, 60%)")});var M=function(W,T){return Math.hypot(W.x-T.x,W.y-T.y)},y=function(W,T){var F=W.vx,L=W.vy;W.vx=T.vx,W.vy=T.vy,T.vx=F,T.vy=L},I=function j(){x&&(x.clearRect(0,0,p.width,p.height),v.forEach(function(W,T){W.x+=W.vx,W.y+=W.vy,(W.x-W.radius<=0||W.x+W.radius>=p.width)&&(W.vx*=-1),(W.y-W.radius<=0||W.y+W.radius>=p.height)&&(W.vy*=-1);for(var F=T+1;F<v.length;F++){var L=v[F],R=M(W,L);R<W.radius+L.radius&&y(W,L)}x.beginPath(),x.arc(W.x,W.y,W.radius,0,Math.PI*2),x.fillStyle=W.color,x.fill(),x.closePath()}),requestAnimationFrame(j))};I()}},[]),(0,c.jsx)("canvas",{ref:l,style:{border:"0.1rem solid var(--color-bg-secondary)"}})},on=dn,De={container:"cmtdyNB3pUQ9NUZ7GIuz",ball:"r5_KIxxmJhQFTcQhjM8Z",ground:"HxqN0SRYwgHyzeyumobw"},ln=function(){var l=!1,p,x=0,g=0,w=.5,v=.7,P=200,M=(0,m.useRef)(null),y=(0,m.useRef)(null),I=(0,m.useRef)(null),j=function(){if(!y.current)return;function B(){g+=w,x+=g,!(x>=P&&(x=P,g=-g*v,Math.abs(g)<1))&&(y.current&&(y.current.style.top=x+"px"),requestAnimationFrame(B))}B()};(0,m.useEffect)(function(){j()},[]);var W=function(B){if(B.button===0){if(!y.current)return;l=!0,g=0;var C=y.current.getBoundingClientRect();p=B.clientY-C.top-C.height/2,y.current.style.cursor="grabbing",window.addEventListener("mousemove",L),window.addEventListener("mouseup",R)}},T=function(B){},F=function(B){},L=function(B){if(l){var C;if(!y.current||!M.current||!I.current)return;var N=y.current.getBoundingClientRect(),V=M.current.getBoundingClientRect(),$=(C=I.current)===null||C===void 0?void 0:C.getBoundingClientRect();if(B.clientY-(N.height/2+p)<V.top)x=0,l=!1;else if(B.clientY+(N.height/2-p)>$.top)l=!1;else{var H=B.clientY-V.top-p-N.height/2;x=H}y.current.style.top="".concat(x,"px")}},R=function q(B){if(B.button===0){if(!y.current)return;l=!1,y.current.style.cursor="grab",g=0,window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",q),j()}};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{ref:M,className:De.container,id:"container",children:[(0,c.jsx)("div",{ref:y,id:"ball",onMouseMove:T,onMouseUp:F,onMouseDown:W,className:De.ball,onClick:j}),(0,c.jsx)("div",{id:"ground",ref:I,className:De.ground})]})})},un=ln,he={wrapper:"OGBCntX41b0bz9X4Xk_R",inputBar:"ZI_OtAoHUMoBOfAbEt8L",barrageContainer:"bD1x4X4P7Ms17tGdHGbj",barrage:"B9DD_xt72g_QlbHfLiOT",likeBtn:"ZNfgIZY0ZAZdOYAn07bg",text:"GtpCBUDYfcH22SrmTMN0"},mn=function(l){var p=l.barrage,x=l.containerRef,g=l.onOutScreen,w=(0,m.useRef)(null);return(0,m.useEffect)(function(){var v=w.current;if(!(!v||!x.current)){var P=x.current.offsetWidth,M=v.offsetWidth,y=v.animate([{transform:"translateX(0px)"},{transform:"translateX(-".concat(M+P,"px)")}],{duration:8e3,easing:"linear",fill:"forwards"});v._barrageAnim=y;var I=function j(){var W=v.getBoundingClientRect(),T=x.current.getBoundingClientRect();W.right<T.left?g(p.id):requestAnimationFrame(j)};requestAnimationFrame(I)}},[p.id,x]),(0,c.jsxs)("div",{ref:w,className:he.barrage,style:{top:"".concat(p.top,"px")},onMouseEnter:function(P){var M;return(M=P.currentTarget._barrageAnim)===null||M===void 0?void 0:M.pause()},onMouseLeave:function(P){var M;return(M=P.currentTarget._barrageAnim)===null||M===void 0?void 0:M.play()},children:[(0,c.jsx)("span",{className:he.text,children:p.text}),(0,c.jsx)("button",{className:he.likeBtn,onClick:function(P){P.stopPropagation(),alert("\u4F60\u70B9\u8D5E\u4E86\uFF1A".concat(p.text))},children:"\u2764\uFE0F"})]})},_n=mn,pn=0,fn=function(){var l=(0,m.useState)([]),p=D()(l,2),x=p[0],g=p[1],w=(0,m.useRef)(null),v=function(I){var j=pn++,W=Math.random()*80+10,T={id:j,text:I,top:W};g(function(F){return[].concat(k()(F),[T])})},P=function(I){I.preventDefault();var j=I.currentTarget.elements.namedItem("barrageText"),W=j.value.trim();W&&(v(W),j.value="")},M=function(I,j){if(!(!I||!w.current)){var W=w.current.offsetWidth,T=I.offsetWidth,F=I.animate([{transform:"translateX(".concat(0,"px)")},{transform:"translateX(-".concat(T+W,"px)")}],{duration:8e3,easing:"linear",fill:"forwards"});I._barrageAnim=F;var L=function R(){var q=I.getBoundingClientRect(),B=w.current.getBoundingClientRect();q.right<B.left?g(function(C){return C.filter(function(N){return N.id!==j})}):requestAnimationFrame(R)};requestAnimationFrame(L)}};return(0,c.jsxs)("div",{className:he.wrapper,children:[(0,c.jsxs)("form",{onSubmit:P,className:he.inputBar,children:[(0,c.jsx)("input",{name:"barrageText",placeholder:"\u53D1\u9001\u5F39\u5E55..."}),(0,c.jsx)("button",{type:"submit",children:"\u53D1\u9001"})]}),(0,c.jsx)("div",{className:he.barrageContainer,ref:w,children:x.map(function(y){return(0,c.jsx)(_n,{barrage:y,containerRef:w,onOutScreen:function(j){return g(function(W){return W.filter(function(T){return T.id!==j})})}},y.id)})})]})},hn=fn,be={container:"qV_9KXrs8sxr5OGldy4b",bottomMenu:"CxrIIKwqVnUEadYARj7v",menuItem:"Qbh36rduOUlR8feelPgu",label:"hu4TX3QmXcgM6_brdiJM",menuItemHover:"Ytiq8xPD5O4naDjaX0Kw",dragging:"o9ytXt3y_UZKUNLlYFpB"},bn=e(26330),gn=e(69539),vn=e(94933),wn=e(51468),xn=[{id:"home",icon:(0,c.jsx)(bn.Z,{}),label:"\u9996\u9875"},{id:"cart",icon:(0,c.jsx)(gn.Z,{}),label:"\u8D2D\u7269\u8F66"},{id:"me",icon:(0,c.jsx)(vn.Z,{}),label:"\u6211\u7684"},{id:"tv",icon:(0,c.jsx)(wn.Z,{}),label:"\u89C6\u9891"}],Ce=0,Me=0,kn=function(){var l=(0,m.useState)(xn),p=D()(l,2),x=p[0],g=p[1],w=(0,m.useRef)(x),v=(0,m.useRef)(null),P=(0,m.useState)(null),M=D()(P,2),y=M[0],I=M[1],j=(0,m.useRef)(null),W=function(q){return function(B){v.current===null&&I(q)}},T=function(q){return function(B){if(v.current=q,document.addEventListener("mousemove",F),document.addEventListener("mouseup",L),!!j.current){var C=Array.from(j.current.children),N=C[q].cloneNode(!0);N.style.position="fixed",N.style.zIndex="1000";var V=C[q].getBoundingClientRect(),$=B.clientX,H=B.clientY;console.log(V.left,V.top,V.width,V.height),Ce=$-V.left,Me=H-V.top,N.style.top="".concat(C[q].offsetTop,"px"),N.style.left="".concat(C[q].offsetLeft,"px"),j.current.insertAdjacentElement("afterend",N),C[q].style.opacity="0.2"}}},F=function(q){if(!(v.current===null||!j.current)){var B=v.current,C=Array.from(j.current.children),N=q.clientX,V=q.clientY,$=j.current.getBoundingClientRect().left,H=j.current.nextSibling;if(H){var G=C[B].getBoundingClientRect();H.style.transform="translate(".concat(N-Ce-G.left,"px,").concat(V-Me-G.top,"px)")}for(var K=0;K<C.length;K++){var J=C[K].getBoundingClientRect(),X=$+C[K].offsetLeft+J.width/2;if(console.log("offsetLeft:",C[K].offsetLeft),K<B)if(N<X){var ee=C[K+1].getBoundingClientRect(),ne=$+C[K+1].offsetLeft+ee.width/2;C[K].style.transform="translateX(".concat(ne-X,"px)")}else C[K].style.transform="translateX(0px)";if(K>B)if(N>X){console.log("mouseX:",N,"midX:",X);var O=C[K-1].getBoundingClientRect(),U=$+C[K-1].offsetLeft+O.width/2;console.log("preRect.left:",O.left,"prevRect.width:",O.width),console.log("prevRectMidX:",U),C[K].style.transform="translateX(".concat(-(X-U),"px)")}else C[K].style.transform="translateX(0px)"}}},L=function R(){var q,B,C=function(){if(!j.current)return[];var G=j.current.nextSibling,K=Array.from(j.current.children);K.splice(v.current,1,G);var J=K.map(function(ee,ne){return{el:ee,order:ne}});J.sort(function(ee,ne){var O=ee.el.getBoundingClientRect(),U=ne.el.getBoundingClientRect();return O.left-U.left});var X=J.map(function(ee){return ee.order});return X},N=C();v.current=null,document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",R);var V=Array.from(((q=j.current)===null||q===void 0?void 0:q.children)||[]);V.forEach(function(H){H.style.cssText=""});var $=N.map(function(H){return w.current[H]});g($),w.current=$,I(null),(B=j.current)===null||B===void 0||(B=B.nextSibling)===null||B===void 0||B.remove()};return(0,c.jsx)("div",{className:be.container,children:(0,c.jsx)("div",{className:be.bottomMenu,ref:j,children:x==null?void 0:x.map(function(R,q){var B;return v.current?B="":B=y==q?be.menuItemHover:"",(0,c.jsxs)("div",{className:"".concat(be.menuItem," ").concat(v.current===q?be.dragging:"","  ").concat(B," "),onMouseDown:T(q),onMouseEnter:W(q),onMouseLeave:function(){return I(null)},children:[R.icon,(0,c.jsx)("span",{className:be.label,children:R.label})]},R.id)})})})},yn=kn,Re={container:"eCUwI5l8JTQC0HNkyHhD",ball:"GbBY0yWdZ8Oh_XpfcH9o"},le=function(A){return A.left="left",A.right="right",A.static="static",A}(le||{}),jn=function(){var l=(0,m.useRef)(null),p=(0,m.useRef)(null),x=!1,g=0,w=0,v=0,P=0,M,y,I=!1,j=.98,W=function(q){x=!0,g=q.clientX,v=q.clientX,cancelAnimationFrame(M)},T=function(q){if(!(!l.current||!p.current)&&x){var B=q.clientX-g,C=p.current.getBoundingClientRect(),N=l.current.getBoundingClientRect();B>0?(y=le.right,C.right-N.right<0&&(B=0)):(y=le.left,N.left-C.left<0&&(B=0)),w+=B,l.current.style.transform="translate(".concat(w,"px,-50%)"),P=q.clientX-v,v=q.clientX,g=q.clientX}},F=function(){x=!1,L()},L=function R(){if(!(!l.current||!p.current)){P*=j,w+=P;var q=p.current.getBoundingClientRect(),B=l.current.getBoundingClientRect();y===le.right?q.right-B.right<0&&(w=w- -(q.right-B.right),I=!0,y=le.left,P=-P):y===le.left&&B.left-q.left<0&&(w=w-(B.left-q.left),I=!0,y=le.right,P=-P),l.current.style.transform="translate(".concat(w,"px,-50%)"),Math.abs(P)>.1?M=requestAnimationFrame(R):(I=!1,y=le.static)}};return(0,m.useEffect)(function(){if(l.current){var R=l.current;return R.addEventListener("mousedown",W),window.addEventListener("mousemove",T),window.addEventListener("mouseup",F),function(){R.removeEventListener("mousedown",W),window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",F)}}},[]),(0,c.jsx)("div",{className:Re.container,ref:p,children:(0,c.jsx)("div",{ref:l,className:Re.ball})})},In=jn,Te={BFC:"NGvi6nEYiTQo6rdLZ8Ae",loader:"yHe4GbKbYhAQSd6OWJDX",spin:"bS2QH6u3418Yp3ZNxhLp"},En=function(){return(0,c.jsx)("div",{className:Te.BFC,style:{display:"flex",width:"100%",height:"5rem",justifyContent:"center",alignItems:"center"},children:(0,c.jsx)("div",{className:Te.loader})})},Wn=En,_e={pacMan:"ih_24EyalFE3sLJc6oH_",eyeCenter:"YhWSgaHEFwUdkD99iwoT",eye:"rVM3bABHhUMawj2J4s6S",openclose:"QNq4_H58IdIZolmnVUNb",mouth1:"LqyT8gLeHUox88nLL8OO",upup:"NFXWtWulwioFwaL3xE8v",mouth2:"rw1w9rT1pR4SEtzLmilC",downdown:"swQdYIqkBgrjI6PSCin_",bean1:"FwmB9mDRZ4b6LwXvHjKU",beanAnimation:"HVDPW0Vqs3cjgRlSDpvL",bean2:"qEttfB3z3gNIkXqsKWi4"},Dn=function(){return(0,c.jsxs)("div",{className:_e.pacMan,children:[(0,c.jsx)("div",{className:_e.eyeCenter,children:(0,c.jsx)("div",{className:_e.eye})}),(0,c.jsx)("div",{className:_e.mouth1}),(0,c.jsx)("div",{className:_e.mouth2}),(0,c.jsx)("div",{className:_e.bean1}),(0,c.jsx)("div",{className:_e.bean2})]})},Pn=Dn,ye={container:"T8rrl3nUK7ArMCfWho3h",exist:"djmsKuJgAwbASc0xWODq",expander:"tJoFvNM1JVI1B1iPIbjK",open:"lNGjQVxWhQcEZNSxqhSQ"},qn=function(l){var p=l.items,x=l.onChange;if(!Array.isArray(p))throw Error("items must be an array");var g=(0,m.useState)(Array(p.length).fill(!1)),w=D()(g,2),v=w[0],P=w[1],M=function(I,j){v[I]=!v[I],P(k()(v)),x(j||String(I))};return(0,m.useEffect)(function(){},[]),(0,c.jsx)("div",{className:ye.container,children:p.map(function(y,I){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:ye.exist,onClick:function(){return M(I,y.key)},children:y.exist}),(0,c.jsx)("div",{className:"".concat(ye.expander," ").concat(v[I]?ye.open:""),children:y.expander})]})})})},Bn=qn,Cn=e(70215),Mn=e.n(Cn),Oe={rippleButton:"dpJjedHuRN0GG6grT0At",ripple:"tocYG3ISL0VKTYCx5aC4","ripple-animation":"TxQIw8XukH47gdOAsGci"},Rn=["children","onClick"],Tn=function(l){var p=l.children,x=l.onClick,g=Mn()(l,Rn),w=(0,m.useRef)(null),v=function(y){if(w.current){var I=w.current,j=I.getBoundingClientRect(),W=Math.max(j.width,j.height),T=y.clientX-j.left-W/2,F=y.clientY-j.top-W/2,L=document.createElement("span");L.className=Oe.ripple,L.style.width=L.style.height="".concat(W,"px"),L.style.left="".concat(T,"px"),L.style.top="".concat(F,"px"),I.appendChild(L),setTimeout(function(){L.remove()},6e3)}},P=function(y){v(y),x==null||x(y)};return(0,c.jsx)("div",fe()(fe()({ref:w,className:Oe.rippleButton,onClick:P},g),{},{children:p}))},On=Tn,Ae={container:"ypOIJ_d9VZMnhq9XbcyH",ball:"XYY8U5yzo38ScwBwymBh"},An=function(){var l=(0,m.useRef)(null),p=(0,m.useState)(!1),x=D()(p,2),g=x[0],w=x[1],v=(0,m.useState)(0),P=D()(v,2),M=P[0],y=P[1],I=function(F){l.current&&(w(!0),y(F.clientX),l.current.style.transition="none")},j=function(F){if(g&&l.current){var L=F.clientX-M,R=1+Math.min(Math.abs(L)/150,.5),q=L>=0?1:-1;l.current.style.transform="translate(".concat(L,"px,-50%) scaleX(").concat(R,")")}},W=function(){g&&l.current&&(w(!1),l.current.style.transition="transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1)",l.current.style.transform="translate(0,-50%) scaleX(1)")};return(0,c.jsx)("div",{className:Ae.container,children:(0,c.jsx)("div",{ref:l,className:Ae.ball,onMouseDown:I,onMouseMove:j,onMouseUp:W,onMouseLeave:W})})},Ln=An,Fn={shakeContainer:"CGC2cDORRgH2DqgCMBYi",shake:"o0v4EVJhJY8XlAQ3CN6K"},Nn=function(l){var p=l.children;return(0,c.jsx)("div",{className:Fn.shakeContainer,children:p})},Kn=Nn,Le={container:"NtkHqEFZwTcAKyLS68Km",trail:"F5n8EGmPISkQLEywlN50",fadeOut:"pb4_9SXI4I1sQZmyQFIX"},Un=function(){var l=(0,m.useRef)(null),p=function(g){if(l.current){var w=l.current.getBoundingClientRect(),v=document.createElement("div");v.className=Le.trail,v.style.left="".concat(g.clientX-w.left,"px"),v.style.top="".concat(g.clientY-w.top,"px"),v.style.transform="translate(-50%,-50%)",l.current.appendChild(v),setTimeout(function(){v.remove()},500)}};return(0,c.jsx)("div",{className:Le.container,onMouseMove:p,ref:l})},Sn=Un},21126:function(E,n,e){e.r(n),n.default={BFC5:"UJVWpZeCNzAsA2wREnKY",fixLeft:"PtAr_GzvKCUwW3z28ztv",autoAdapt:"f4o8bquDYEcGAnDSD78l",BFC6:"P2QQbC88cYxcKVJBwudg",rightFloat:"YsX3gPYEEBgEg7nkxDPk",autoLeft:"MqUjhj5E1rMkRkJNw1sr",BFC7:"A2cIIDLjhu8nma_8ym35",leftFloat:"U0_L0rZxV_oWZ41WP5ZL",autoRight:"t255eVQVT8a4cqjWGojg"}},6930:function(E,n,e){e.r(n),n.default={BFC8:"QIew919AbEJKW9o1xydg",left2:"UbuyAE7uaQwf3KxiPzA6",right2:"AljDRFNsI5EvgrAjyLn9",middle:"gd_APSMAhzQ3Zy0GKNsY",BFC9:"KvA1O0dqtDkdSYRUhYLA",itemLeft:"bpwEELSD2owOkh3zslPT",itemMiddle:"whf4THbme_c8xh7oKQWa",itemRight:"aQ2JkOb71gwHjVe0Mrsp"}},50477:function(E,n,e){e.r(n),n.default={flex:"hz5xG20g1ewbldUTZesc",item:"pYb2awPdU48tEDVcmQcs"}},3658:function(E,n,e){e.r(n),n.default={center:"D8zUp_EELg1gmqR8bLIR"}},51014:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"TODO",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"autoPlay",paraId:1,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u64AD\u653E",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"true",paraId:1,tocIndex:4},{value:"width",paraId:1,tocIndex:4},{value:"\u6BCF\u4E2A\u5143\u7D20\u7684\u5BBD\u5EA6",paraId:1,tocIndex:4},{value:"number",paraId:1,tocIndex:4},{value:"50",paraId:1,tocIndex:4},{value:"defaultAnimationTime",paraId:1,tocIndex:4},{value:"\u5207\u6362\u5143\u7D20\u65F6\uFF0C\u52A8\u753B\u65F6\u95F4",paraId:1,tocIndex:4},{value:"number",paraId:1,tocIndex:4},{value:"1\uFF081s \u7684\u610F\u601D\uFF09",paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"animationTime",paraId:2,tocIndex:5},{value:"\u52A8\u753B\u65F6\u95F4",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"\u5B50\u5143\u7D20\u96C6\u5408",paraId:2,tocIndex:5},{value:"{ element: React.ReactNode; width: number }[]",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u65B9\u6CD5",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8FD4\u56DE\u503C",paraId:3,tocIndex:5},{value:"clickHandler",paraId:3,tocIndex:5},{value:"\u5143\u7D20\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:5},{value:"\u5B50\u5143\u7D20\u672C\u8EAB",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u8F6E\u64AD\u56FE\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9879\u76EE\u3002\u5B83\u652F\u6301\u81EA\u52A8\u8F6E\u64AD\u3001\u5DE6\u53F3\u5207\u6362\u7B49\u529F\u80FD\u3002",paraId:4,tocIndex:6},{value:`
  \u91C7\u7528\u201C\u514B\u9686\u9996\u5C3E\u5143\u7D20 + translateX + transition\u201D\u7684\u65B9\u5F0F`,paraId:5},{value:` 
  **\u6838\u5FC3\u601D\u8DEF**
  `,paraId:5},{value:`
    `,paraId:6,tocIndex:6},{value:`
      \u6DFB\u52A0\u9996\u5C3E\u514B\u9686\u5143\u7D20\uFF1A
      `,paraId:6,tocIndex:6},{value:`
        `,paraId:7,tocIndex:6},{value:"\u6BD4\u5982\u8F6E\u64AD\u5185\u5BB9\u662F [A, B, C]\uFF0C\u90A3\u4E48\u5B9E\u9645\u6E32\u67D3\u5185\u5BB9\u4E3A [C, A, B, C, A]\u3002",paraId:7,tocIndex:6},{value:`
        `,paraId:7,tocIndex:6},{value:"\u521D\u59CB\u5C55\u793A\u7684\u662F\u7D22\u5F15 1 \u7684\u4F4D\u7F6E\uFF08\u4E5F\u5C31\u662F\u771F\u5B9E\u7684 A\uFF09\u3002",paraId:7,tocIndex:6},{value:`
        `,paraId:7,tocIndex:6},{value:`
          \u5F53\u4F60\u5411\u5DE6\u6ED1\u52A8\u5230C\uFF08\u7D22\u5F150\uFF09
          \u6216\u5411\u53F3\u6ED1\u52A8\u5230A\uFF08\u7D22\u5F154\uFF09\u65F6\uFF0C\u7B49\u52A8\u753B\u7ED3\u675F\u540E\u7ACB\u5373\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u771F\u5B9E\u4F4D\u7F6E
          C\uFF08\u7D22\u5F153\uFF09 \u6216 A\uFF08\u7D22\u5F151\uFF09\uFF0C\u65E0\u8FC7\u6E21\u8DF3\u8F6C\u3002
        `,paraId:7,tocIndex:6},{value:`
      `,paraId:7,tocIndex:6},{value:`
    `,paraId:6,tocIndex:6},{value:`
    `,paraId:6,tocIndex:6},{value:`
      \u4F7F\u7528 translateX + transition
      \u5B9E\u73B0\u8FC7\u6E21\uFF0C\u5728\u8FC7\u6E21\u7ED3\u675F\u540E\u6267\u884C\u65E0\u52A8\u753B\u7684\u8DF3\u8F6C\uFF0C\u4FDD\u8BC1\u7528\u6237\u611F\u77E5\u4E0D\u5230\u8DF3\u52A8\u3002
    `,paraId:6,tocIndex:6},{value:`
  `,paraId:6,tocIndex:6}]},81375:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u62FE\u53D6\u989C\u8272\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"defaultValue",paraId:1,tocIndex:2},{value:"\u989C\u8272\u9ED8\u8BA4\u503C,\u652F\u6301 RGB,HSB,HEX",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u989C\u8272\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:2},{value:"mode: \u989C\u8272\u6A21\u578B\uFF08RGB/HSB/HEX\uFF09, color: \u989C\u8272\u7F16\u7801",paraId:2,tocIndex:2},{value:"void",paraId:2,tocIndex:2},{value:'\u4F7F\u7528\u7684\u662F<input type = "color"/>\u5B9E\u73B0\u7684',paraId:3,tocIndex:3},{value:"RGB\u3001HSB\u3001HEX \u8FD9\u4E09\u79CD\u989C\u8272\u6A21\u578B\uFF0C\u5B83\u4EEC\u7684\u8BBE\u8BA1\u76EE\u7684\u4E0D\u540C\uFF1ARGB \u662F \u201C\u7ED9\u673A\u5668\u7528\u7684\u663E\u793A\u6807\u51C6\u201D\uFF0CHEX \u662F \u201C\u7ED9\u4EE3\u7801\u7528\u7684 RGB \u7B80\u5316\u683C\u5F0F\u201D\uFF0C\u800C HSB \u662F \u201C\u7ED9\u4EBA\u7528\u7684\u89C6\u89C9\u76F4\u89C9\u6A21\u578B\u201D\u3002\u56E0\u6B64\uFF0CHSB \u6700\u80FD\u5E2E\u52A9\u4EBA\u7C7B\u7406\u89E3\u989C\u8272\u3002",paraId:4,tocIndex:3},{value:"\u7EF4\u5EA6",paraId:5,tocIndex:3},{value:"\u542B\u4E49",paraId:5,tocIndex:3},{value:"\u8303\u56F4",paraId:5,tocIndex:3},{value:"\u4EBA\u7C7B\u611F\u77E5\u5BF9\u5E94",paraId:5,tocIndex:3},{value:"\u793A\u4F8B\uFF08\u4EE5\u7EA2\u8272\u4E3A\u4F8B\uFF09",paraId:5,tocIndex:3},{value:"Hue\uFF08\u8272\u76F8\uFF09",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u79CD\u7C7B\u201D",paraId:5,tocIndex:3},{value:"0\xB0~360\xB0",paraId:5,tocIndex:3},{value:"\u7EA2\u3001\u9EC4\u3001\u7EFF\u3001\u84DD\u7B49 \u201C\u57FA\u7840\u8272\u201D",paraId:5,tocIndex:3},{value:"0\xB0= \u7EAF\u7EA2\uFF0C60\xB0= \u9EC4\uFF0C120\xB0= \u7EFF",paraId:5,tocIndex:3},{value:"Saturation",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u7EAF\u5EA6 / \u9C9C\u8273\u5EA6\u201D",paraId:5,tocIndex:3},{value:"0%~100%",paraId:5,tocIndex:3},{value:"\u9C9C\u8273\uFF08100%\uFF09\u2192 \u7070\u6697\uFF080%\uFF09",paraId:5,tocIndex:3},{value:"100%= \u7EAF\u7EA2\uFF0C50%= \u6DE1\u7EA2\uFF0C0%= \u7070",paraId:5,tocIndex:3},{value:"Brightness",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u660E\u6697\u7A0B\u5EA6\u201D",paraId:5,tocIndex:3},{value:"0%~100%",paraId:5,tocIndex:3},{value:"\u660E\u4EAE\uFF08100%\uFF09\u2192 \u9ED1\u6697\uFF080%\uFF09",paraId:5,tocIndex:3},{value:"100%= \u4EAE\u7EA2\uFF0C50%= \u6697\u7EA2\uFF0C0%= \u9ED1",paraId:5,tocIndex:3}]},9209:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:`\u7EC4\u4EF6\u8BBE\u8BA1\u65F6\u9700\u8981\u8003\u8651\uFF1A
\u8F93\u5165\uFF0C\u8F93\u51FA`,paraId:0}]},78161:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u9700\u8981\u663E\u793A\u56FE\u7247\u65F6\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"src",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u8D44\u6E90",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u4EE5\u539F\u56FE\u7247\u4E3A\u53C2\u7167\u70B9\u653E\u5927\uFF08\u7F29\u653E\u539F\u59CB\u4F4D\u7F6E\uFF09",paraId:2,tocIndex:3},{value:"\u5168\u5C4F\u9884\u89C8\u65F6\u56FE\u7247\u5C45\u4E2D",paraId:2,tocIndex:3},{value:"\u653E\u5927\u8FC7\u7A0B\u5E26\u52A8\u753B",paraId:2,tocIndex:3},{value:"\u80CC\u666F\u906E\u7F69 + \u5173\u95ED\u6309\u94AE",paraId:2,tocIndex:3},{value:`
\u5B9E\u73B0\u65B9\u6848\uFF1A\u4F7F\u7528 CSS transform + transform-origin + transition + JavaScript \u63A7\u5236\u3002\u5173\u952E\u70B9\uFF1A\u8BB0\u5F55\u539F\u56FE\u7684\u4F4D\u7F6E\uFF08getBoundingClientRect\uFF09\uFF0C\u628A\u6A21\u6001\u56FE\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4ECE\u539F\u56FE\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u4F7F\u7528 transform: scale(...) + transform-origin \u5B9E\u73B0\u5E73\u6ED1\u653E\u5927\u3002
`,paraId:3,tocIndex:3},{value:"\u65CB\u8F6C\u7684\u5B9E\u73B0\uFF0C\u662F\u901A\u8FC7transform-origin: center center \u8BBE\u7F6E\u9009\u62E9\u4E2D\u5FC3\uFF0C\u518D\u5728\u5DF2\u6709\u65CB\u8F6C\u7684\u57FA\u7840\u4E0A\u987A\u65F6\u9488\u548C\u9006\u65F6\u9488\u65CB\u8F6C",paraId:4,tocIndex:3}]},5357:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u663E\u793A\u672A\u8BFB\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"count",paraId:1,tocIndex:2},{value:"\u663E\u793A\u672A\u8BFB\u4FE1\u606F\u6570\u91CF\u3002\u6CA1\u6709\u8FD9\u4E2A\u53C2\u6570\u5C31\u5355\u7EAF\u63D0\u793A\u6709\u672A\u8BFB\u4FE1\u606F",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u4F7F\u7528\u4F2A\u5143\u7D20::after ,'position:absolute'\u548C left\u3001top \u5B9E\u73B0\u3001",paraId:2,tocIndex:3},{value:"::after \u63D2\u5165\u7684\u4F4D\u7F6E\u662F\u5185\u5BB9\uFF08content\uFF09\u7684\u6700\u540E\u9762\uFF0C\u5C31\u50CF\u4F60\u5728\u5143\u7D20\u672B\u5C3E\u52A0\u4E86\u4E00\u6BB5\u6587\u5B57\uFF1B",paraId:3,tocIndex:3},{value:"\u5B83\u7684\u6E32\u67D3\u4F4D\u7F6E\u4ECD\u5728 content \u533A\u57DF\u4E4B\u5185\uFF1B",paraId:3,tocIndex:3}]},44124:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"current",paraId:0,tocIndex:2},{value:"\u5DF2\u6267\u884C\u5B8C\u54EA\u4E2A\u6B65\u9AA4",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"items",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"{title:string}[]",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"\u7ED3\u5408flex\u5E03\u5C40\u548C\u4F2A\u5143\u7D20::after\u5B9E\u73B0",paraId:1,tocIndex:3}]},92395:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u6570\u636E\u6E90",paraId:0,tocIndex:6},{value:"Array<{labe:string,value:string,children:[]}>",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"onChange",paraId:0,tocIndex:6},{value:"\u70B9\u51FB\u9009\u4E2D\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:0,tocIndex:6},{value:"(checkNode, currentTree) => void",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"selected",paraId:0,tocIndex:6},{value:"\u8BBE\u7F6E\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\u3002\u5982\u679C\u7236\u8282\u70B9\u88AB\u9009\u4E2D\uFF0C\u5B50\u8282\u70B9\u90E8\u5206\u9009\u4E2D\uFF0C\u5219\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u8BBE\u7F6E\u65E0\u6548\uFF0C\u5B50\u8282\u70B9\u4F1A\u88AB\u5168\u90E8\u9009\u62E9",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"expand",paraId:0,tocIndex:6},{value:"\u8BBE\u7F6E\u5C55\u5F00\u7684\u8282\u70B9",paraId:0,tocIndex:6},{value:"\u5BF9\u8282\u70B9\u7684\u64CD\u4F5C\u6709\u9009\u4E2D\u3001\u5C55\u5F00\u3001\u7981\u7528\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u6765\u8BBE\u7F6E\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u5728 treeData \u7684\u6BCF\u4E2A\u8282\u70B9\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4F46\u6B64\u65F6\u8981\u4FDD\u8BC1\u5B50\u8282\u70B9\u548C\u7236\u8282\u70B9\u90FD\u8BBE\u7F6E\u6B63\u786E\u3002\u4F8B\u5982\u8BBE\u7F6E\u81EA\u5DF1\u70B9\u4E3A\u5168\u9009\uFF0C\u7236\u8282\u70B9\u5E76\u4E0D\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u9009\u62E9\uFF1B\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\uFF0C\u901A\u8FC7 tree \u7684\u5C5E\u6027\u6765\u8BBE\u7F6E",paraId:1,tocIndex:7},{value:"\u53C2\u6570",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"expand",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00",paraId:2,tocIndex:7},{value:"boolean",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"label",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u5C55\u793A\u6807\u7B7E",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"value",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u503C",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"id",paraId:2,tocIndex:7},{value:"\u8282\u70B9 id",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u662F label \u7684\u503C",paraId:2,tocIndex:7},{value:"check",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u9009\u4E2D\u7C7B\u578B",paraId:2,tocIndex:7},{value:"0: \u672A\u9009\u62E9\uFF0C1\uFF1A\u5168\u9009\uFF0C2 \u8868\u793A\u534A\u9009",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u7ED3\u5408\u6811\u7684\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u7B97\u6CD5\u548C HashMap \u5B58\u50A8\u6765\u5B9E\u73B0\u3002\u5F53\u6539\u53D8\u5F53\u524D\u8282\u70B9\u7684\u72B6\u6001\u65F6\uFF0C\u5728 hashMap \u4E2D\u627E\u5230\u5F53\u524D\u8282\u70B9\u3002",paraId:3,tocIndex:8},{value:"\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u5B50\u5B59\u8282\u70B9\uFF0C\u4FEE\u6539\u76F8\u5E94\u7684\u72B6\u6001\u3002",paraId:4,tocIndex:8},{value:"\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u6700\u9AD8\u5C42\u7236\u8282\u70B9\u3002\u7136\u540E\u518D\u901A\u8FC7\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\uFF0C\u6839\u636E\u5B50\u8282\u70B9\u7684\u72B6\u6001\uFF0C\u8BBE\u7F6E\u7236\u8282\u70B9\u72B6\u6001\u3002\u5982\u6240\u6709\u5B50\u8282\u70B9\u7684\u72B6\u6001\u90FD\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5219\u7236\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\u4E3A\u5168\u9009\uFF1B\u5982\u679C\u5B50\u8282\u70B9\u6709\u201C\u5168\u9009\u201D\u548C\u201C\u6CA1\u6709\u9009\u4E2D\u201D\u4E24\u4E2D\u72B6\u6001\uFF0C\u5219\u7236\u8282\u70B9\u72B6\u6001\u8BBE\u7F6E\u4E3A\u534A\u9009\u3002",paraId:4,tocIndex:8}]},97801:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u9002\u7528\u4E8E\u5185\u5BB9\u5C3A\u5BF8\u4E0D\u4E00\u6837\u65F6\uFF0C\u63D0\u5347\u4FE1\u606F\u5BC6\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u65B9\u6CD5",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"getData",paraId:1,tocIndex:2},{value:"\u83B7\u53D6\u7011\u5E03\u6D41\u6570\u636E",paraId:1,tocIndex:2},{value:"(page: number) => Promise<CardType[]>\u3002page\u662F\u7B2C\u51E0\u9875\u7684\u610F\u601D\uFF0CCardType { auhtor: string; title: string;id: string;  width: number;  height: number;  left: number;  top: number;  like: number;}",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 Masonry\u7B97\u6CD5\uFF0C\u6CA1\u6E32\u67D3\u4E00\u5F20\u5361\u7247\u5C31\u8981\u91CD\u65B0\u5224\u65AD\u54EA\u4E00\u5217\u6700\u77ED\uFF0C\u7136\u540E\u628ACard\u63D2\u5165\u5230\u8BE5\u5217\u4E0B\u65B9\u3002left top \u5B9E\u73B0\u7011\u5E03\u6D41\uFF0C\u901A\u8FC7\u83B7\u53D6\u771F\u5B9E dom\uFF0C\u786E\u5B9A left \u548C top",paraId:2,tocIndex:3}]},93685:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"clientWidth \u662F\u4E00\u4E2A DOM \u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\uFF1Adom \u5143\u7D20\u53EF\u89C6\u5185\u5BB9\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u5305\u62EC\u8FB9\u6846\uFF08border\uFF09\u3001\u6EDA\u52A8\u6761\uFF08scrollbar\uFF09\u3001\u5916\u8FB9\u8DDD\uFF08margin\uFF09\uFF0C\u4F46\u5305\u62EC\u5185\u8FB9\u8DDD\uFF08padding\uFF09",paraId:0,tocIndex:2},{value:"css \u4E2D translateX \u548C left \u7684\u533A\u522B",paraId:1,tocIndex:2},{value:"left \u662F\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u4F1A\u6539\u53D8\u5143\u7D20\u7684\u5E03\u5C40\u4F4D\u7F6E\uFF1B",paraId:2,tocIndex:2},{value:"translateX \u662F\u53D8\u6362\u5C5E\u6027\uFF0C\u4E0D\u5F71\u54CD\u5E03\u5C40\uFF0C\u53EA\u662F\u201C\u89C6\u89C9\u4E0A\u7684\u79FB\u52A8\u201D\u3002",paraId:2,tocIndex:2}]},75860:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u591A\u7403\u78B0\u649E\uFF082D\uFF09\u52A8\u753B\u6548\u679C",paraId:0,tocIndex:2},{value:"\u6BCF\u4E2A\u7403\u5177\u6709\u72B6\u6001\uFF1A\u4F4D\u7F6E\uFF08x, y\uFF09\u3001\u901F\u5EA6\uFF08vx, vy\uFF09\u3001\u534A\u5F84\u3001\u989C\u8272\u7B49",paraId:1,tocIndex:2},{value:"\u66F4\u65B0\u4F4D\u7F6E\uFF1A\u6BCF\u4E00\u5E27\u6839\u636E\u901F\u5EA6\u66F4\u65B0\u7403\u7684\u4F4D\u7F6E",paraId:1,tocIndex:2},{value:"\u8FB9\u754C\u53CD\u5F39\uFF1A\u5982\u679C\u7403\u649E\u5230\u5BB9\u5668\u8FB9\u7F18\uFF0C\u53CD\u5F39\uFF08\u53CD\u8F6C\u901F\u5EA6\u65B9\u5411\uFF09",paraId:1,tocIndex:2},{value:"\u7403\u4E0E\u7403\u78B0\u649E\u68C0\u6D4B\uFF1A\u5982\u679C\u4E24\u4E2A\u7403\u76F8\u4EA4\uFF0C\u5219\u5904\u7406\u78B0\u649E\u54CD\u5E94\uFF08\u4EA4\u6362\u901F\u5EA6\u6216\u53CD\u5F39\u65B9\u5411\uFF09",paraId:1,tocIndex:2},{value:"Canvas \u548C DOM \u5143\u7D20\uFF08\u5982 div\uFF09\u5728\u52A8\u753B\u5904\u7406\u4E0A\u5404\u6709\u4F18\u52A3\u3002",paraId:2,tocIndex:2},{value:"Canvas \u66F4\u9002\u5408\u5927\u91CF\u5143\u7D20\u7684\u9AD8\u9891\u52A8\u753B\u3002Canvas \u662F\u57FA\u4E8E\u50CF\u7D20\u7ED8\u5236\u7684\u4F4D\u56FE\u6E32\u67D3\uFF0C\u6BCF\u4E00\u5E27\u662F\u91CD\u753B\u6574\u4E2A\u753B\u9762\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0CDOM \u662F\u57FA\u4E8E\u8282\u70B9\u7684\uFF0C\u6BCF\u4E2A\u5C0F\u7403\u4E00\u4E2A div\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u9891\u7E41\u5730\uFF1A\u91CD\u6392\uFF08reflow\uFF09\u3001\u91CD\u7ED8\uFF08repaint\uFF09\u3001\u5904\u7406\u590D\u6742\u7684 DOM \u7ED3\u6784",paraId:3,tocIndex:2},{value:"\u7CBE\u7EC6\u63A7\u5236\u7ED8\u56FE\u548C\u7269\u7406\u884C\u4E3A\u3002",paraId:3,tocIndex:2},{value:"\u907F\u514D\u8FC7\u591A DOM \u64CD\u4F5C\u5BFC\u81F4\u6027\u80FD\u74F6\u9888\u3002DOM \u64CD\u4F5C\u5C5E\u4E8E\u6602\u8D35\u64CD\u4F5C\uFF0C\u5C24\u5176\u662F\u5F53\u6D89\u53CA\u6210\u767E\u4E0A\u5343\u4E2A\u8282\u70B9\u65F6\u3002Canvas \u53EA\u7BA1\u7406\u4E00\u4E2A canvas \u5143\u7D20\uFF0C\u6240\u6709\u66F4\u65B0\u90FD\u662F\u5728\u663E\u5B58\u4E2D\u5B8C\u6210\u7684\u3002",paraId:3,tocIndex:2},{value:"\u573A\u666F",paraId:4,tocIndex:2},{value:"\u66F4\u5408\u9002\u7684\u6280\u672F",paraId:4,tocIndex:2},{value:"\u7F51\u9875\u5E03\u5C40\u3001\u53EF\u8BBF\u95EE\u6027\u597D\u3001\u6613\u4EA4\u4E92",paraId:4,tocIndex:2},{value:"DOM + CSS + JS",paraId:4,tocIndex:2},{value:"\u6E38\u620F\u3001\u56FE\u5F62\u6A21\u62DF\u5668\u3001\u7C92\u5B50\u7CFB\u7EDF",paraId:4,tocIndex:2},{value:"Canvas / WebGL",paraId:4,tocIndex:2}]},97590:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u901A\u8FC7 e.clientX/Y \u83B7\u53D6\u9F20\u6807\u76F8\u5BF9\u4E8E",paraId:0,tocIndex:2},{value:"\u89C6\u53E3",paraId:0,tocIndex:2},{value:"\u4F4D\u7F6E\uFF0Cdom.getBoundingClientRect().top/left \u83B7\u53D6 dom \u5143\u7D20\u76F8\u5BF9\u4E8E",paraId:0,tocIndex:2},{value:"\u89C6\u53E3",paraId:0,tocIndex:2},{value:"\u7684\u4F4D\u7F6E\u3002\u901A\u8FC7",paraId:0,tocIndex:2},{value:"el.style.top",paraId:0,tocIndex:2},{value:"\u63A7\u5236\u5C0F\u7403\u62D6\u52A8\u65F6\u7684\u4F4D\u7F6E",paraId:0,tocIndex:2},{value:"\u4E3A\u4EC0\u4E48\u201CuseRef \u83B7\u53D6 DOM \u5F15\u7528\uFF08\u4E0D\u8981\u6BCF\u6B21\u90FD document.getElementById\uFF09\u201D",paraId:1,tocIndex:2},{value:`\u907F\u514D\u8DE8\u7EC4\u4EF6\u3001\u5168\u5C40\u526F\u4F5C\u7528\u6C61\u67D3
document.getElementById \u662F\u5168\u5C40\u67E5\u627E\uFF0C\u5982\u679C\u4F60\u7684\u9875\u9762\u4E0A\u6709\u591A\u4E2A\u540C ID \u7684\u5143\u7D20\uFF08\u6216\u591A\u4E2A\u7EC4\u4EF6\u90FD\u53EB ball\uFF09\uFF0C\u4F60\u5F88\u53EF\u80FD\u64CD\u4F5C\u5230\u4E86\u9519\u8BEF\u7684\u5143\u7D20\u3002`,paraId:2,tocIndex:2},{value:`useRef \u66F4\u9AD8\u6548\uFF0C\u4E5F\u66F4\u7B26\u5408 React \u601D\u60F3
useRef \u662F React \u63D0\u4F9B\u7684\u65B9\u5F0F\uFF0C\u7528\u4E8E\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5E76\u6301\u4E45\u4FDD\u5B58\u67D0\u4E2A DOM \u5143\u7D20\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u90FD\u91CD\u65B0\u67E5\u627E\u3002`,paraId:2,tocIndex:2}]},28327:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5F39\u5E55\u7CFB\u7EDF\uFF08Barrage / Danmaku\uFF09\u662F\u6307\uFF1A\u7528\u6237\u53D1\u9001\u7684\u8BC4\u8BBA\u6587\u5B57\u4EE5\u201C\u6F02\u6D6E\u5B57\u5E55\u201D\u7684\u5F62\u5F0F\u5728\u5C4F\u5E55\u4E0A\u6A2A\u5411\u6EDA\u52A8\u3002bilibili \u7684\u5F39\u5E55\u662F\u4E00\u4E2A\u4E2A div \u5143\u7D20\uFF0C\u4ECE\u53F3\u5F80\u5DE6\u79FB\u52A8\u7684\u3002",paraId:0,tocIndex:1},{value:"\u9F20\u6807\u79FB\u52A8\u5230\u5F39\u5E55\u4E0A\uFF0C\u663E\u793A\u70B9\u8D5E\u3002js \u901A\u8FC7 animationPlayState\uFF08running/pause\uFF09\u6765\u63A7\u5236\u52A8\u753B\u72B6\u6001\u3002(\u6682\u505C\u52A8\u753B\u540E\uFF0C\u52A8\u753B\u7684 duration \u548C\u5B9E\u9645\u8FD0\u884C\u65F6\u957F\u5BF9\u4E0D\u4E0A\u4E86)",paraId:1,tocIndex:1}]},94190:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:`\u5B9E\u73B0\u601D\u8DEF\u6982\u89C8\uFF1A
\u9F20\u6807\u6309\u4E0B\u67D0\u9879\uFF0C\u8BB0\u5F55\u5F53\u524D\u7D22\u5F15;\u751F\u6210\u4E00\u4E2A visibiligy =hidden,opacity = 0 \u7684\u5143\u7D20\u8FDB\u884C\u7AD9\u4F4D\u3002 \u521B\u5EFA\u4E00\u4E2A clone \u7684\u5143\u7D20\uFF08fixed \u5B9A\u4F4D\uFF09\u8DDF\u968F\u9F20\u6807\u79FB\u52A8`,paraId:0,tocIndex:1},{value:"\u62D6\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u83B7\u53D6\u9F20\u6807\u6A2A\u5750\u6807\uFF1B",paraId:1,tocIndex:1},{value:"\u5224\u65AD\u9F20\u6807\u5728\u54EA\u4E2A\u83DC\u5355\u9879\u4E2D\u95F4\u7EBF\u4E4B\u524D\uFF0C\u52A8\u6001\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\uFF1B\u76F8\u5E94\u7684\u4FEE\u6539\u6CA1\u6709\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5F53\u524D\u88AB\u62D6\u52A8\u7684\u5143\u7D20\u524D\u9762\u7684\u5143\u7D20\uFF0C\u5982\u679C\u4E2D\u95F4\u7EBF\u5927\u4E8E\u9F20\u6807\uFF0C\u540E\u79FB\u4E00\u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF1B\u5F53\u524D\u88AB\u62D6\u52A8\u7684\u5143\u7D20\u540E\u9762\u7684\u5143\u7D20\uFF0C\u5982\u679C\u4E2D\u95F4\u7EBF\u5C0F\u4E8E\u9F20\u6807\uFF0C\u524D\u79FB\u52A8\u4E00\u4E2A\u4F4D\u7F6E\uFF08\u89C6\u89C9\u4E0A\u79FB\u52A8\u5C31\u884C\uFF09\u3002",paraId:2,tocIndex:1},{value:"\u9F20\u6807\u91CA\u653E\uFF0C\u79FB\u9664\u76D1\u542C\u5668\uFF0C\u5B8C\u6210\u62D6\u52A8\u3002\u5224\u65AD clone \u5143\u7D20\u4EE5\u53CA\u4E4B\u524D\u7684\u83DC\u5355\u9879\u7684\u89C6\u53E3\u4F4D\u7F6E\uFF08\u4E0D\u542B\u9690\u85CF\u5143\u7D20\uFF09\uFF0C\u4ECE\u800C\u83B7\u53D6\u5230\u6392\u5E8F\u540E\u7684\u5143\u7D20\u987A\u5E8F\u3002",paraId:3,tocIndex:1}]},17005:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u60EF\u6027\u62D6\u52A8\uFF08Inertial Drag\uFF09\u662F\u6307\uFF1A\u7528\u6237\u62D6\u52A8\u5143\u7D20\u91CA\u653E\u9F20\u6807\u540E\uFF0C\u5143\u7D20\u4F1A\u6839\u636E\u62D6\u52A8\u65F6\u7684\u901F\u5EA6\u7EE7\u7EED\u6ED1\u52A8\u4E00\u6BB5\u8DDD\u79BB\uFF0C\u6700\u540E\u51CF\u901F\u505C\u6B62\uFF0C\u5C31\u50CF\u5728\u771F\u5B9E\u4E16\u754C\u4E2D\u6709\u201C\u60EF\u6027\u201D\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"TODO",paraId:1,tocIndex:2}]},80377:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5E38\u7528\u4E8E\u88C5\u9970\u3001\u52A0\u8F7D\u52A8\u753B\u3001\u89C6\u89C9\u8DA3\u5473\u7B49",paraId:0,tocIndex:0},{value:"\u5173\u952E\u70B9\u662F border-right:transparent \u5F62\u6210 2 \u4E2A\u6247\u5F62\uFF0C\u7136\u540E\u65CB\u8F6C\u5B83\u4EEC\uFF0C\u5F62\u6210\u5F20\u95ED\u5634\u7684\u6548\u679C\uFF1B\u4F7F\u7528::before \u4F2A\u5143\u7D20\u5F62\u6210\u773C\u775B\uFF1B\u8C46\u5B50\u9760\u8FD1\u5634\u5DF4\u6D88\u5931\u3002",paraId:1,tocIndex:2},{value:`\u65E0\u6CD5\u76F4\u63A5\u7528 CSS \u8BA9 absolute \u5B50\u5143\u7D20\u53C2\u4E0E\u7236\u5143\u7D20\u5C3A\u5BF8\u8BA1\u7B97
\u8FD9\u662F\u6D4F\u89C8\u5668\u6392\u7248\u89C4\u5219\u51B3\u5B9A\u7684\uFF0C\u7EAF CSS \u65E0\u6CD5\u8BA9\u8131\u79BB\u6587\u6863\u6D41\u7684\u5B50\u5143\u7D20\u81EA\u7136\u6491\u5F00\u7236\u5BB9\u5668\u3002`,paraId:2,tocIndex:2}]},5893:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u63A8\u5F00\u6548\u679C\uFF0C\u5373\u4E00\u4E2A\u5143\u7D20\u7684\u5C3A\u5BF8\u53D8\u5316\uFF0C\u63A8\u5F00\u53E6\u5916\u4E00\u4E2A\u5143\u7D20\u3002\u5728\u6298\u53E0\u9762\u677F\u3001\u4FA7\u8FB9\u680F\u5C55\u5F00\u3001\u8BC4\u8BBA/\u56DE\u590D\u6846\u5C55\u5F00\u4E2D\u5E38\u7528\u5230\u3002",paraId:0,tocIndex:2},{value:"\u96BE\u70B9\u662F\u5982\u4F55\u63A8\u5F00\u5176\u5B83\u5143\u7D20\u3002\u53EF\u4EE5\u4F7F\u7528 CSS height, margin, padding, \u8BA9\u76D2\u5B50\u7684\u9AD8\u5EA6\u4ECE 0 \u5F00\u59CB\u53D8\u5F97\uFF0C\u518D\u4F7F\u7528 transition \u63A7\u5236\u8FC7\u6E21\u6548\u679C",paraId:1,tocIndex:2},{value:"\u9700\u8981\u548C\u8986\u76D6\uFF08Overlay\uFF09\u6548\u679C\u76F8\u533A\u522B\uFF0C\u5143\u7D20\u662F\u6D6E\u5728\u5176\u5B83\u5143\u7D20\u4E0A\u9762\uFF0C\u4E0D\u5F71\u54CD\u5176\u4ED6\u5185\u5BB9\u3002",paraId:2,tocIndex:2}]},28248:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5B83\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u7684\u7528\u6237\u4EA4\u4E92\u53CD\u9988\u52A8\u753B\u3002\u5B9E\u73B0\u539F\u7406\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"\u7528\u6237\u70B9\u51FB\u6309\u94AE\uFF0C\u8BB0\u5F55\u70B9\u51FB\u4F4D\u7F6E\uFF08\u76F8\u5BF9\u4E8E\u6309\u94AE\u7684\u4F4D\u7F6E\uFF09\u3002\u901A\u8FC7 event.clientX/clientY \u83B7\u53D6\u70B9\u51FB\u70B9\u7684\u5750\u6807",paraId:1,tocIndex:1},{value:"\u5728\u8BE5\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u5706\u5F62\u5143\u7D20\uFF08div\uFF09\uFF0C\u5E76\u8BBE\u7F6E\u521D\u59CB\u6837\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u7528 CSS \u52A8\u753B\uFF08transform: scale(...) + opacity\uFF09\u6765\u8BA9\u5B83\u4ECE\u5C0F\u53D8\u5927+\u6E10\u9690\u3002",paraId:1,tocIndex:1},{value:"\u52A8\u753B\u7ED3\u675F\u540E\u79FB\u9664\u8BE5\u5143\u7D20\u3002",paraId:1,tocIndex:1}]},67837:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u201C\u6A61\u76AE\u7B4B\u62C9\u4F38\u201D\u52A8\u753B\u5E38\u7528\u4E8E\u6A21\u62DF\u5177\u6709\u5F39\u6027\u963B\u5C3C\u7684\u7269\u4F53\u62C9\u4F38\u4E0E\u56DE\u5F39\uFF0C\u6BD4\u5982\u62D6\u62FD\u4E00\u4E2A\u5C0F\u7403\u65F6\uFF0C\u5B83\u50CF\u6A61\u76AE\u7B4B\u4E00\u6837\u88AB\u62C9\u957F\u3001\u677E\u5F00\u540E\u56DE\u5F39\u3002",paraId:0,tocIndex:1},{value:"scaleX(...)",paraId:1,tocIndex:1},{value:"\uFF1A\u6A21\u62DF\u6A61\u76AE\u7B4B\u7684\u6A2A\u5411\u53D8\u5F62\uFF0C1 + \u62C9\u4F38\u8DDD\u79BB / \u7CFB\u6570",paraId:1,tocIndex:1},{value:"cubic-bezier(...)\uFF1A\u5B9E\u73B0\u5F39\u6027\u56DE\u5F39\u6548\u679C\u7684\u5173\u952E",paraId:1,tocIndex:1},{value:"\u53EF\u6839\u636E\u62C9\u4F38\u957F\u5EA6\u52A8\u6001\u63A7\u5236 scale \u503C\uFF0C\u6A21\u62DF\u66F4\u5F3A\u7684\u5F39\u529B",paraId:1,tocIndex:1}]},67369:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u6296\u52A8\u6548\u679C\u5E38",paraId:0,tocIndex:0},{value:"\u5F15\u8D77\u7528\u6237\u6CE8\u610F\u6216\u63D0\u793A\u9519\u8BEF",paraId:0,tocIndex:0},{value:"\uFF0C\u662F\u201C\u8D1F\u53CD\u9988\u201D\u7684\u5E38\u89C1\u8868\u73B0",paraId:0,tocIndex:0},{value:"\u5B83\u662F\u4F7F\u7528 translate \u548C transform \u5B9E\u73B0\u7684\u3002",paraId:1,tocIndex:2},{value:`@keyframes shake {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
`,paraId:2,tocIndex:2}]},76709:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u901A\u8FC7\u63D2\u5165\u4E00\u4E2A position:absolute \u7684 div\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u6DE1\u51FA\u52A8\u753B\u5B9E\u73B0\u3002",paraId:0,tocIndex:1}]},33697:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},87799:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"This is a guide example.",paraId:0}]},51446:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[]},81699:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:`.BFC8 {
  background-color: var(--color-bg);
  overflow: hidden;
  border: var(--color-border) dashed 1px;
}

.left2 {
  float: left;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.right2 {
  float: right;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.middle {
  margin-left: 150px;
  margin-right: 150px;
  height: 200px;
  background-color: var(--color-secondary);
}

.BFC9 {
  background-color: var(--color-bg);
  display: flex;
  border: var(--color-bg) dashed 1px;
}

.itemLeft {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}
.itemMiddle {
  background-color: var(--color-secondary);
  height: 200px;

  flex: auto;
}
.itemRight {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}

`,paraId:0}]},55563:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u89C6\u53E3\u5C45\u4E2D\u5B9A\u4F4D",paraId:0}]},89370:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:`.BFC5 {
  display: flex;
  align-items: flex-start;
  height: 200px;
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
}
.fixLeft {
  width: 20%;
  height: 100%;
  background-color: var(--color-primary);
}

.autoAdapt {
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-secondary);
}

.BFC6 {
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.rightFloat {
  float: right;
  height: 200px;
  color: var(--color-text);
  background-color: var(--color-primary);
  width: 200px;
}

.autoLeft {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}

.BFC7 {
  background-color: bisque;
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.leftFloat {
  float: left;
  height: 200px;
  width: 150px;
  color: var(--color-text);
  background-color: var(--color-primary);
}

.autoRight {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}
`,paraId:0}]},8861:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u5E38\u89C1\u7684\u6709\u8DA3\u5E03\u5C40\u6709\u4E5D\u5BAB\u683C\u5E03\u5C40\u3001\u4E24\u7AEF\u5BF9\u9F50\u5E03\u5C40\uFF08\u4E2D\u95F4\u81EA\u9002\u5E94\uFF09\u3001\u4E00\u4FA7\u56FA\u5B9A\u5E03\u5C40\u3001\u5143\u7D20\u89C6\u53E3\u5B9A\u4F4D",paraId:0}]},95648:function(E,n,e){e.r(n),e.d(n,{texts:function(){return o}});const o=[{value:"\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5B50\u5143\u7D20\u7684width\u4E3A33%",paraId:0},{value:`.flex {
  display: flex;
  /*  height: 30rem; */
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  /*   background-color: var(--color-bg); */
  flex-wrap: wrap;
  gap: 0.5%;
  border: var(--color-border) dashed 1px;
}
.item {
  width: 33%;
  aspect-ratio: 1 / 1;
  border: var(--color-border) dashed 1px;
  background-color: var(--color-bg-primary);
}
`,paraId:1}]},96332:function(E,n){n.Z=`/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-02 11:10:53
 * @lastEditors: fengli
 * @lastEditTime:
 */
import { AnimationCarousel } from 'interestingWeb';
import React from 'react';

const AnimationCarouselDemo: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <AnimationCarousel
        animationTime={20}
        items={[
          {
            width: '400',
            element: (
              <img
                src="https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
            clickHandler: (item) => {
              console.log('click', item);
            },
          },
          {
            width: '400',
            element: (
              <img
                src="https://images.unsplash.com/photo-1631354111370-40aba7ab8d6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
          {
            width: '400',
            element: (
              <img
                src="https://images.unsplash.com/photo-1717337702411-56d978e8c9d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            ),
          },
        ]}
      ></AnimationCarousel>
    </div>
  );
};
export default AnimationCarouselDemo;
`},69118:function(E,n){n.Z=`/*
 * @Author: fengli
 * @Description: 
 * @Date: 2025-09-02 10:43:25
 * @lastEditors: fengli
 * @lastEditTime: 
 */
import { Carousel } from 'interestingWeb';
import React from 'react';

const CarouselDemo: React.FC = () => {
  return (
    <div style={{ height: '20rem', width: '100%' }}>
      <Carousel autoPlay={false} width={100} defaultAnimationTime={3}>
        <img
          src="https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="https://images.unsplash.com/photo-1631354111370-40aba7ab8d6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        <img
          src="https://images.unsplash.com/photo-1717337702411-56d978e8c9d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Carousel>
    </div>
  );
};
export default CarouselDemo;
`},89328:function(E,n){n.Z=`/*
 * @Author: fengli
 * @Description: 
 * @Date: 2025-09-02 12:00:52
 * @lastEditors: fengli
 * @lastEditTime: 
 */

import {WaterFall} from "interestingWeb";
import data1 from "./data1.json";
import data2 from "./data2.json";

export  const WaterFallDemo = () => {
  const getData = async (source) => {
    if (source > 2) {
      // throw new Error("Invalid data source");
      // return [];
    }
    /* \u6A21\u62DF\u9875\u9762\u52A0\u8F7D\u662F\u83B7\u53D6\u6570\u636E */
    const colorArr = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
    let data = await Promise.resolve(source == 1 ? data1 : data2);
    let temp_data1 = data.data.items.map((i, index) => ({
      id: i.id,
      url: i.note_card.cover.url_pre,
      backgroundColor: colorArr[index % colorArr.length],
      width: i.note_card.cover.width,
      height: i.note_card.cover.height,
      title: i.note_card.display_title,
      auhtor: i.note_card.user.nick_name,
      like: Number(i.note_card.interact_info.liked_count),
      left: 0, // Default value for left
      top: 0, // Default value for top
    }));
    return temp_data1;
  };
  return (
    <>
      <div className="theme">
        \u4F7F\u7528Masonry,left top\u5B9E\u73B0\u7011\u5E03\u6D41\uFF0C\u901A\u8FC7\u83B7\u53D6\u771F\u5B9Edom\uFF0C\u786E\u5B9Aleft\u548Ctop
      </div>
      <div className="BFC">
        <WaterFall getData={getData}/>
      </div>
    </>
  );
};

export default WaterFallDemo;`},57095:function(E,n){n.Z=`{
  "code": 0,
  "success": true,
  "msg": "\u6210\u529F",
  "data": {
    "items": [
      {
        "id": "6598b4c500000000130364cc",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5927\u5382\u7684\u7B80\u5386\u5565\u6837 ",
          "user": {
            "nick_name": "\u5C9B\u4E3B",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30thmlog14s6g5oaf42ggjhjlbgq7aj0",
            "user_id": "614f20a1000000000201c675",
            "nickname": "\u5C9B\u4E3B"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "69"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/1612cc0f3b5bafb9356cd99076407748/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1312,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/77483bedfa86f89c1652e5b21f698a86/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/1612cc0f3b5bafb9356cd99076407748/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/77483bedfa86f89c1652e5b21f698a86/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "659b6b7c000000001802adab",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u6211\u624D20\u5C81\u5C31\u6709\u4E86\uFF0C\u8FD9\u6B63\u5E38\u5417\uFF1F\uFF1F\uFF1F",
          "user": {
            "nickname": "Again",
            "nick_name": "Again",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nopsr5gn0005o60l9b09affqh6uj4g",
            "user_id": "60c0aa56000000000100a9ef"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "129"
          },
          "cover": {
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f45e47ef0a0be091b6e75d0b8d22ac15/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/c661568214809411cbbb6cd26e930c41/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/f45e47ef0a0be091b6e75d0b8d22ac15/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/c661568214809411cbbb6cd26e930c41/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1833
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "657bf2260000000016004828",
        "model_type": "note",
        "note_card": {
          "display_title": "\u6211\u5929\uFF01\u8FD9\u4E00\u6B21\u76F4\u89C2\u611F\u53D7\u5230\u2026\u2026",
          "user": {
            "nick_name": "Only",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/5ea22b110000000001001d86.jpg",
            "user_id": "5ea22b110000000001001d86",
            "nickname": "Only"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "20618"
          },
          "cover": {
            "file_id": "",
            "height": 1707,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/555c72d5f3c50ef8ac442765eaeed624/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/444cec837b7089dfa4ea85cdb93502aa/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/555c72d5f3c50ef8ac442765eaeed624/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/444cec837b7089dfa4ea85cdb93502aa/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_mw_1"
          },
          "type": "normal"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "657c11be000000003801eb9a",
        "model_type": "note",
        "note_card": {
          "cover": {
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/1b5d3e2bf5d3e07d94e08ee4de5a5fc9/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f21e3a5afeb8b55797f1e4e2ea1959fc/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/1b5d3e2bf5d3e07d94e08ee4de5a5fc9/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/f21e3a5afeb8b55797f1e4e2ea1959fc/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1440
          },
          "type": "normal",
          "display_title": "\u4ECE\u672A\u89C1\u8FC7\u5982\u6B64\u6B79\u6BD2\u7684\u8EAB\u6750 \u8FD8\u6709\u6551\u5417...",
          "user": {
            "nick_name": "\u4F60\u7F8E\u513F.",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/60c1e720000000000101e8eb.jpg",
            "user_id": "60c1e720000000000101e8eb",
            "nickname": "\u4F60\u7F8E\u513F."
          },
          "interact_info": {
            "liked": false,
            "liked_count": "21439"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5065\u8EAB\u623F\u9047\u5230\u8FD9\u79CD\u810F\u4E1C\u897F\u8BE5\u600E\u4E48\u529E\uFF1F",
          "user": {
            "user_id": "5d294e0a000000001602b371",
            "nickname": "\u82E6\u8FC7\u91D1\u5DF4\u5229",
            "nick_name": "\u82E6\u8FC7\u91D1\u5DF4\u5229",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/5f721425f06d5400013b5391.jpg"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "13413"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/4e50bf4756a0edd4ed7eec28beebb1ff/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/675906a405f1372ef6fca4ae746c5b96/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/4e50bf4756a0edd4ed7eec28beebb1ff/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/675906a405f1372ef6fca4ae746c5b96/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "6597b2c6000000001000d8b8"
      },
      {
        "ignore": false,
        "id": "6588f79800000000160049c4",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5FEB\u6765\u8BF4\u8BF4\u4F60\u4EEC\u7684\u793E\u6B7B\u77AC\u95F4\uFF01",
          "user": {
            "nickname": "\u7231\u4E3D\u4E1D\u4E0D\u662F\u7231\u4E3D\u5F0F",
            "nick_name": "\u7231\u4E3D\u4E1D\u4E0D\u662F\u7231\u4E3D\u5F0F",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t1cfcu04a6g4bump9ia4ao4gnrc978",
            "user_id": "5c00e4a20000000007002b04"
          },
          "interact_info": {
            "liked_count": "46795",
            "liked": false
          },
          "cover": {
            "height": 2414,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/6d415c33214ffd9368e17db73d38bdeb/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/35224f8df18aac70c8fcc2ebc6fffc63/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/6d415c33214ffd9368e17db73d38bdeb/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/35224f8df18aac70c8fcc2ebc6fffc63/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_mw_1",
            "file_id": ""
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw"
      },
      {
        "id": "6593d6e7000000000f032d35",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u907F\u96F7\u80D6\u4E1C\u6765 \u90FD\u522B\u6765\u4E86",
          "user": {
            "nick_name": "\u7389\u7389",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/6441e5e8a61cee6d85b08ec8.jpg",
            "user_id": "5a484b3ae8ac2b1c85179580",
            "nickname": "\u7389\u7389"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "422"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/1663099a9e1c3650b2accc7ea879f61d/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/c37370a326375aec4acf6667381f393b/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/1663099a9e1c3650b2accc7ea879f61d/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/c37370a326375aec4acf6667381f393b/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "65882507000000003403db0d",
        "model_type": "note",
        "note_card": {
          "user": {
            "user_id": "63563412000000001802c841",
            "nickname": "HankHill\u58C1\u7EB8\u5C0F\u5C4B",
            "nick_name": "HankHill\u58C1\u7EB8\u5C0F\u5C4B",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q1n2dmo7k4g5oqm6g965i21farl7g0"
          },
          "interact_info": {
            "liked_count": "1981",
            "liked": false
          },
          "cover": {
            "file_id": "",
            "height": 1706,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/dc1ee16760cd48c24234c57394bf0906/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/b204beae44975112de7896a96ac220ad/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/dc1ee16760cd48c24234c57394bf0906/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/b204beae44975112de7896a96ac220ad/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_mw_1"
          },
          "type": "normal",
          "display_title": "8k\u6781\u6E05\u58C1\u7EB8 | \u9AD8\u7A7A\u629B\u7269 |"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "video",
          "display_title": "\u300A\u6211\u76842023\u5E74\u5EA6\u603B\u7ED3\u300B",
          "user": {
            "nick_name": "\u534A\u53E3\u5C0F\u5E0C",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/608c2099c7594a002dc9f736.jpg",
            "user_id": "5a979279e8ac2b02fa0bfb45",
            "nickname": "\u534A\u53E3\u5C0F\u5E0C"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "6934"
          },
          "cover": {
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/66dda1773a32f0b32ff7416fdbf2c77f/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/b4526083825e54d951cf71ec8da20c70/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/66dda1773a32f0b32ff7416fdbf2c77f/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/b4526083825e54d951cf71ec8da20c70/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1440
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "65913bd50000000010010074"
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u6C89\u9ED8\u4E0D\u4EE3\u8868\u9000\u8BA9\uFF0C\u4F60\u5F53\u6211\u662F\u50BB\u5B50\u5417\uFF1F",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rh5nkkc1o605p9ov4638kghgu42u78",
            "user_id": "6538f90c000000000d005211",
            "nickname": "\u5468\u58EE\u5E08\u6CD5\u5F8B\u670D\u52A1",
            "nick_name": "\u5468\u58EE\u5E08\u6CD5\u5F8B\u670D\u52A1"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "178"
          },
          "cover": {
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f59a8ca40649b23060fb6eeb156a2b6a/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/d846048ea95b70875bcfc50459b42589/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/f59a8ca40649b23060fb6eeb156a2b6a/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/d846048ea95b70875bcfc50459b42589/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "659deb30000000000f01dc33"
      },
      {
        "note_card": {
          "user": {
            "nick_name": "\u9648\u4F69\u65AF",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64477af44eb377a38141bb57.jpg",
            "user_id": "640ff195000000001400e506",
            "nickname": "\u9648\u4F69\u65AF"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "4515"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f793ce035cf4ab0377bc144bfe8852a5/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/9fe6e9ad32e8890629ec3026e404a830/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/f793ce035cf4ab0377bc144bfe8852a5/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/9fe6e9ad32e8890629ec3026e404a830/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1440,
            "width": 1080,
            "url": ""
          },
          "type": "video",
          "display_title": "\u575A\u6301\u5C31\u662F\u80DC\u5229\uFF01\u5F1F\u5144\u4EEC\uFF0C\u7ED9\u6211\u9876\u4F4F\uFF01\u9876\u4F4F\uFF01 #\u9648\u4F69"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "655c32bd000000001100f33f",
        "model_type": "note"
      },
      {
        "id": "6597e1cf000000000f01e3b8",
        "model_type": "note",
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "100"
          },
          "cover": {
            "file_id": "",
            "height": 1920,
            "width": 2560,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/8ebf87c4b646d896d64b043411280158/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/308e04eae8380bf74af0690687af8e89/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/8ebf87c4b646d896d64b043411280158/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/308e04eae8380bf74af0690687af8e89/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_mw_1"
          },
          "type": "normal",
          "display_title": "Java\u8FD8\u662F\u524D\u7AEF\uFF1F ",
          "user": {
            "nick_name": "\u65E9\u7761\u65E9\u8D77",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/5f428ecbb911850001786288.jpg",
            "user_id": "5c22df380000000007029f49",
            "nickname": "\u65E9\u7761\u65E9\u8D77"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "video",
          "display_title": "\u8FD9\u662F\u9B54\u6CD5\u5417\uFF1F\u9F3B\u5B50\u771F\u7684\u5C0F\u4E86\u4E00\u5708\uFF01\uFF01\u62EF\u6551\u5BBD\u9F3B\u5934",
          "user": {
            "nick_name": "\u9EA6\u7247maimai",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/63c6333af49cc7b05d2e2ad4.jpg",
            "user_id": "5fbdf7900000000001002913",
            "nickname": "\u9EA6\u7247maimai"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "10137"
          },
          "cover": {
            "file_id": "",
            "height": 1497,
            "width": 1123,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f70576f68c1a1bfd2d5c64236a9fe464/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/d07689183720dd3f7deccd1c1580bd68/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/f70576f68c1a1bfd2d5c64236a9fe464/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/d07689183720dd3f7deccd1c1580bd68/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "659d2fbc000000001d036e52"
      },
      {
        "id": "65768ab1000000000703bebf",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u6CA1\u60F3\u5230\u5929\u79E4\u8BC4\u5206\u8FD9\u4E48\u9AD8",
          "user": {
            "nickname": "\u7CD6\u7092\u5C0F\u6817\u5B50\u{1F330}",
            "nick_name": "\u7CD6\u7092\u5C0F\u6817\u5B50\u{1F330}",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pqidfrrn0005nkdpuvg8h9k497helg",
            "user_id": "5e8dcfbf0000000001004534"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "5715"
          },
          "cover": {
            "file_id": "",
            "height": 1920,
            "width": 887,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/93c604e3c670d65aa7ce5c36b66a2ffc/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/31da2313773337e53771c58a154ad5b6/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/93c604e3c670d65aa7ce5c36b66a2ffc/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/31da2313773337e53771c58a154ad5b6/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "659663b50000000013034c06",
        "model_type": "note",
        "note_card": {
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/ee59bc00993beb551fbc3b5db6c29f0f/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1706,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/744fb45312177056e5ec51611f08f846/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/ee59bc00993beb551fbc3b5db6c29f0f/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/744fb45312177056e5ec51611f08f846/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_prv_1"
          },
          "type": "normal",
          "display_title": "\u9AD8\u60C5\u5546\u56DE\u590D\uFF5C\u9886\u5BFC\u501F1w\u8FD81\u5343\u5E76\u8BF4\u9EBB\u70E6\u4F60\u4E86\uFF1F",
          "user": {
            "nick_name": "\u661F\u661F\u2728\u9AD8\u60C5\u5546",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/65856902060f7d407c635702.jpg",
            "user_id": "65856789000000001c03c51a",
            "nickname": "\u661F\u661F\u2728\u9AD8\u60C5\u5546"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "10916"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "6597585a0000000011018329",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u7F57\u7FD4\u8BF4:\u4F60\u5B66\u4E0D\u8FDB\u53BB\uFF0C\u73A9\u4E0D\u5C3D\u5174\uFF0C\u7761\u4E0D\u8E0F\u5B9E\uFF0C\u5FC3\u60C5\u4E0D\u723D\uFF0C\u6D51\u8EAB\u4E0D\u5BF9\u52B2\uFF0C\u5374\u5403\u5F97\u7279\u522B\u591A\u3002\u6CA1\u6709",
          "user": {
            "user_id": "6295cb38000000001501fa97",
            "nickname": "\u5218\u563B\u563B\u52AA\u529B\u6210\u957F\u8BB0",
            "nick_name": "\u5218\u563B\u563B\u52AA\u529B\u6210\u957F\u8BB0",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64111c3d281f8089224dc17c.jpg"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "61049"
          },
          "cover": {
            "file_id": "",
            "height": 1400,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f66fe4cc166462f82746ee2c69a7059c/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/8d08bf0051fffe003a26b10d70f46510/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/f66fe4cc166462f82746ee2c69a7059c/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/8d08bf0051fffe003a26b10d70f46510/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_mw_1"
          }
        }
      },
      {
        "ignore": false,
        "id": "658f68e40000000011032e94",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5927\u5B66\u8DEF\u9648\u5BE8\u82B1\u5349\u4E0D\u5E72\u4E86\uFF0C\u6709\u7A7A\u7684\u53EF\u4EE5\u53BB\u770B\u770B",
          "user": {
            "user_id": "556d11ff62a60c5c79619ad9",
            "nickname": "hedy",
            "nick_name": "hedy",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/556d11ff62a60c5c79619ad9.jpg"
          },
          "interact_info": {
            "liked_count": "784",
            "liked": false
          },
          "cover": {
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/7ab097cc73ee996a2bb6de40b09c33ef/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/d5b7e0a1e9f446cef45072b853a8240d/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/7ab097cc73ee996a2bb6de40b09c33ef/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/d5b7e0a1e9f446cef45072b853a8240d/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 2263
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw"
      },
      {
        "model_type": "note",
        "note_card": {
          "user": {
            "nickname": "\u6709\u7528\u7684\u54B8\u9C7C",
            "nick_name": "\u6709\u7528\u7684\u54B8\u9C7C",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/63e0bc0e50f03d23dab07d89.jpg",
            "user_id": "62f1d2500000000015017c55"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "810"
          },
          "cover": {
            "file_id": "",
            "height": 1660,
            "width": 1242,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/79b1485ac89e58e957a626f7289e9314/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/2db8fbaeb4d3cdf7af1566ee74860b82/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/79b1485ac89e58e957a626f7289e9314/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/2db8fbaeb4d3cdf7af1566ee74860b82/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_mw_1"
          },
          "type": "normal",
          "display_title": "\u5168\u7F51\u6700\u5168\u203C\uFE0F\u534E\u4E3A\u9690\u85CF\u529F\u80FD\u770B\u8FD9\u4E00\u7BC7\u5C31\u591F\u5566"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "6597d27200000000110188bd"
      },
      {
        "id": "659a54a2000000001102f6fb",
        "model_type": "note",
        "note_card": {
          "user": {
            "nickname": "\u6211\u4E0D\u77E5\u9053\u5E94\u8BE5\u53EB\u4EC0\u4E48",
            "nick_name": "\u6211\u4E0D\u77E5\u9053\u5E94\u8BE5\u53EB\u4EC0\u4E48",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sb53dsn2idg5o60h9p85saca9ahcv8",
            "user_id": "60c08a72000000002002f14c"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "5218"
          },
          "cover": {
            "height": 1698,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/4333f8aa21be673ad726bf569a8f05e2/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f5b489fb5482615f457e0847d9d3ae1c/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/4333f8aa21be673ad726bf569a8f05e2/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/f5b489fb5482615f457e0847d9d3ae1c/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_mw_1",
            "file_id": ""
          },
          "type": "normal",
          "display_title": "\u8FD9\u2026\u7559\u5B66\u540E\u90FD\u4F1A\u6CBE\u67D3\u4EC0\u4E48\u6076\u4E60\u554A\uFF1F"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "659656d0000000001200345b",
        "model_type": "note",
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "9920"
          },
          "cover": {
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/d6b662922c63468edb649c6ad311bbfe/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/e2aa37aa5b52db648447a2e844933f19/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/d6b662922c63468edb649c6ad311bbfe/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/e2aa37aa5b52db648447a2e844933f19/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2048,
            "width": 1536
          },
          "type": "normal",
          "display_title": "\u7B2C\u4E00\u6B21\u8FD9\u4E48\u76F4\u89C2\u611F\u53D7\u5230\uFF01\uFF01\uFF01",
          "user": {
            "nick_name": "Mmmeng",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/610bce2015b15c46ac0bc441.jpg",
            "user_id": "5daab94700000000010068cf",
            "nickname": "Mmmeng"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "659a9505000000001e00740c",
        "model_type": "note",
        "note_card": {
          "display_title": "\u5FC3\u7406\u6D4B\u8BD5\uFF1A8\u79D2\u6D4B\u51FA\u4EC0\u4E48\u5BF9\u4F60\u624D\u662F\u6700\u91CD\u8981\u7684",
          "user": {
            "nick_name": "\u5929\u8D4B\u5206\u6790\u5E08\u5C1A\u6069",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/627cffba374c60e7a5703fa5.jpg",
            "user_id": "5f00598b00000000010051e9",
            "nickname": "\u5929\u8D4B\u5206\u6790\u5E08\u5C1A\u6069"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "5935"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/3adebb6146073841a4e05895b0177575/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1707,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/09f63674f5cb5a1f3055d042675ddc93/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/3adebb6146073841a4e05895b0177575/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/09f63674f5cb5a1f3055d042675ddc93/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_prv_1"
          },
          "type": "normal"
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "658eafe3000000001303469f",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u90D1\u5DDE\u503C\u5F97\u53BB\u7684\u795E\u4ED9\u5916\u4F01",
          "user": {
            "nick_name": "offer\u5148\u751F\u793E\u62DB\u7248",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64534897e0321e000190be5e.jpg",
            "user_id": "645346f8000000000f006da8",
            "nickname": "offer\u5148\u751F\u793E\u62DB\u7248"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "2749"
          },
          "cover": {
            "height": 1660,
            "width": 1242,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/da489da471da3d07377d730725f0e563/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/7570856e1f916437a65bcd8359ff12bb/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/da489da471da3d07377d730725f0e563/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/7570856e1f916437a65bcd8359ff12bb/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_mw_1",
            "file_id": ""
          }
        }
      },
      {
        "ignore": false,
        "id": "658ce308000000001e004c85",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u4E00\u8DEF\u4ECE\u6218\u573A\u6D3B\u7740\u56DE\u6765\u7684\u8001\u5175\uFF0C\u4EC5\u4EC5\u662F\u5E78\u8FD0\u5417",
          "user": {
            "nick_name": "\u662F\u5178\u5178\u5988\u54AA\u5440",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/645b7e4b86578b8c6ab3b056.jpg",
            "user_id": "6578037c0000000019011b7b",
            "nickname": "\u662F\u5178\u5178\u5988\u54AA\u5440"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "772"
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/373dd002f873b431113396ec3726bd6f/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/76c17787ee7016231402ff9758de37db/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1510,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/373dd002f873b431113396ec3726bd6f/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/76c17787ee7016231402ff9758de37db/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_mw_1"
              }
            ]
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw"
      },
      {
        "ignore": false,
        "id": "658ab5ca000000001d029caf",
        "model_type": "note",
        "note_card": {
          "user": {
            "nick_name": "\u68A8\u6DA1\u5C0F\u5B5F",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/5d9f1352936fcd0001383415.jpg",
            "user_id": "5cc28851000000001000762b",
            "nickname": "\u68A8\u6DA1\u5C0F\u5B5F"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "66220"
          },
          "cover": {
            "file_id": "",
            "height": 1440,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/fe35fc4ddce9cc576f3dfa322884adab/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/91a10b45750aa27b171108956cd26418/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/fe35fc4ddce9cc576f3dfa322884adab/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/91a10b45750aa27b171108956cd26418/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_mw_1"
          },
          "type": "video",
          "display_title": "\u6625\u8282\u95F7\u58F0\u53D1\u5927\u8D22 "
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw"
      },
      {
        "id": "6586e8f5000000000902467b",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u8FD9\u4E00\u523B\uFF0C\u5BF9\u5468\u8463\u5FC3\u60C5\u662F\u590D\u6742\u7684",
          "user": {
            "nick_name": "Ben\u4E0D\u559C\u6B22\u5403\u9C7C",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/6593e58acd8c473d611b16e4.jpg",
            "user_id": "5df4cb2f0000000001001e87",
            "nickname": "Ben\u4E0D\u559C\u6B22\u5403\u9C7C"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "11881"
          },
          "cover": {
            "width": 1706,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/1d1273238460a157417524b6a6a4e4b5/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/e4546825fd9963d7de366572d440d6ac/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/1d1273238460a157417524b6a6a4e4b5/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/e4546825fd9963d7de366572d440d6ac/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "id": "6581502b000000003803379a",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5E74\u6536\u5165\u5BF9\u5E94\u4E70\u8F66\u699C\uFF0C\u770B\u770B\u4EC0\u4E48\u8F66\u6700\u9002\u5408\u4F60\u2705",
          "user": {
            "user_id": "5b28a0a54eacab4c53c7fbf2",
            "nickname": "\u6C7D\u8F66\u884C\u4E1A\u89C2\u5BDF",
            "nick_name": "\u6C7D\u8F66\u884C\u4E1A\u89C2\u5BDF",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/6540b787c83a0733f0997431.jpg"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "3575"
          },
          "cover": {
            "height": 1092,
            "width": 822,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/178dba068cfc5db065c6deb47d468abb/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/f45abd2720d25811cd4e1310a5845ec6/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/178dba068cfc5db065c6deb47d468abb/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/f45abd2720d25811cd4e1310a5845ec6/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_mw_1",
            "file_id": ""
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/aafcd943137bcbbcbcfdd2b0eaff547e/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101130/4f24b24bd9c320a106ae3933aad59097/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101130/aafcd943137bcbbcbcfdd2b0eaff547e/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101130/4f24b24bd9c320a106ae3933aad59097/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": ""
          },
          "type": "normal",
          "display_title": "\u4E0D\u77E5\u9053\u54EA\u4E2A\u4E1A\u4E3B\u5E72\u7684\u{1F44D}",
          "user": {
            "nick_name": "\u8DB4\u5728\u684C\u4E0A\u6570\u7F8A",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pg7vphemi6g4a90emv53sub49iu4a0",
            "user_id": "5b64fe5106825b0001f6f3cb",
            "nickname": "\u8DB4\u5728\u684C\u4E0A\u6570\u7F8A"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "20264"
          }
        },
        "track_id": "2cp1cm86pbar7jvmeqnlw",
        "ignore": false,
        "id": "65855a79000000000801d6c2"
      }
    ],
    "cursor_score": "1.704857399973002E9"
  }
}
`},4703:function(E,n){n.Z=`{
  "code": 0,
  "success": true,
  "msg": "\u6210\u529F",
  "data": {
    "cursor_score": "1.7048572509700022E9",
    "items": [
      {
        "model_type": "note",
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "3472"
          },
          "cover": {
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/d054deefdcf9171a0b4559c73958533f/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/05fb42e78d46d9f17489a12f97a5c9aa/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/d054deefdcf9171a0b4559c73958533f/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/05fb42e78d46d9f17489a12f97a5c9aa/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1440
          },
          "type": "normal",
          "display_title": "\u7537\u670B\u53CB\u7B2C\u4E00\u6B21\u8BF7\u7236\u6BCD\u5403\u996D\u{1F972}\u6C57\u6D41\u6D43\u80CC\u4E86\u2026\u2026",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/63f5dc6f1a5c041f3a6889f8.jpg",
            "user_id": "590361196a6a69017a438f9a",
            "nickname": "\u5C0F\u9E21\u597D\u997F",
            "nick_name": "\u5C0F\u9E21\u597D\u997F"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "658d79c30000000010012ab9"
      },
      {
        "id": "658d0a7d0000000011032c9f",
        "model_type": "note",
        "note_card": {
          "cover": {
            "file_id": "",
            "height": 1919,
            "width": 1439,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/7bf81ec323f433bc2bc7ac1832c2eaf4/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/30c6e7f450056cd453d4781b64bfa7a2/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/7bf81ec323f433bc2bc7ac1832c2eaf4/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/30c6e7f450056cd453d4781b64bfa7a2/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_mw_1"
          },
          "type": "normal",
          "display_title": "\u653E\u5047\u56DE\u5BB6\u5728\u9AD8\u94C1\u770B\u5230\u4E00\u4E2A\u8EAB\u6750\u8D3C\u597D\u7684\u5973\u751F...",
          "user": {
            "nick_name": "yuanyuan",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/63d7895c28025eb34161dd39.jpg",
            "user_id": "5d39b87f0000000010013440",
            "nickname": "yuanyuan"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "3014"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "ignore": false,
        "id": "6577090c000000003403f23d",
        "model_type": "note",
        "note_card": {
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/38312adc417d8bb848715c28d4a718aa/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/f1c11d7ec9853aed1a5d1fe42dbf4e37/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/38312adc417d8bb848715c28d4a718aa/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/f1c11d7ec9853aed1a5d1fe42dbf4e37/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_mw_1"
              }
            ]
          },
          "type": "video",
          "display_title": "\u4E8C\u80CE\u5BB6\u5EAD\u6539\u902080\u5E73\u8001\u623F\uFF0C\u7ADF\u7136\u641E\u51FA\u67656\u5C45\u5BA4\uFF01",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/62c63d37a75a838247c41e34.jpg",
            "user_id": "5f93bc060000000001002e14",
            "nickname": "\u5C0F\u5B87",
            "nick_name": "\u5C0F\u5B87"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "235256"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom"
      },
      {
        "id": "65950119000000001d0160d7",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "#2024\u5E74\u7B2C\u4E00\u5F20\u7167\u7247\u{1F5FA}\uFE0F",
          "user": {
            "nick_name": "\u5C0F\u5C0F\u5C0F\u5C0F\u5B87\u5B87",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/61ba0c4a1102b02dae482074.jpg",
            "user_id": "5d5d1bd000000000010180de",
            "nickname": "\u5C0F\u5C0F\u5C0F\u5C0F\u5B87\u5B87"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "24210"
          },
          "cover": {
            "height": 1920,
            "width": 1440,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/1b57d3d61e8e27939d7f680a1a567614/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/7e958e690e6368e0bdb4ce9e3aa57f14/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/1b57d3d61e8e27939d7f680a1a567614/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/7e958e690e6368e0bdb4ce9e3aa57f14/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_mw_1",
            "file_id": ""
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "id": "658fdb920000000015000b1b",
        "model_type": "note",
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "1787"
          },
          "cover": {
            "height": 600,
            "width": 600,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/4d8e9be2d7a140bd6bbcb06f8cdf4671/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/0c576a006f101b43a66dc8b817d3dc48/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/4d8e9be2d7a140bd6bbcb06f8cdf4671/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/0c576a006f101b43a66dc8b817d3dc48/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_mw_1",
            "file_id": ""
          },
          "type": "normal",
          "display_title": "\u804A\u70B9\u79C1\u5BC6\u95EE\u9898\uFF0C\u53CD\u6B63\u5927\u5BB6\u4E5F\u6CA1\u89C1\u8FC7\u2026\u2026",
          "user": {
            "nick_name": "\u6708",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/645b7f3c86578b8c6ab3b068.jpg",
            "user_id": "64e8368f0000000001011ff0",
            "nickname": "\u6708"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "id": "658e6de0000000001a028579",
        "model_type": "note",
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "4768"
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/b51e1e6ede636c947d798781c5740933/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/9492de9fa216e1abf5631ebe8bcdb344/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1214,
            "width": 920,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/b51e1e6ede636c947d798781c5740933/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/9492de9fa216e1abf5631ebe8bcdb344/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_mw_1"
              }
            ]
          },
          "type": "normal",
          "display_title": "\u4E00\u5F20\u56FE\u770B\u61C2\u9152\u5E97\u5206\u7EA7\uFF0C\u5143\u65E6\u51FA\u95E8\u5FC5\u5907",
          "user": {
            "user_id": "6287dd75000000002102b7b9",
            "nickname": "\u51B7\u4E09\u5C81",
            "nick_name": "\u51B7\u4E09\u5C81",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/636150fc5fa9516215622bf4.jpg"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "id": "658ce23c000000001200b531",
        "model_type": "note",
        "note_card": {
          "type": "video",
          "display_title": "\u53C8\u53CC\u53D2\u6CA1\u6D41\u91CF\uFF1F\u8BB8\u613F\uFF1F\u4E0D\u5982@\u85AF\u6761\u5C0F\u52A9\u624B\uFF01",
          "user": {
            "nickname": "\u85AF\u6761\u5C0F\u52A9\u624B",
            "nick_name": "\u85AF\u6761\u5C0F\u52A9\u624B",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/612735fd6e367601e555d896.jpg",
            "user_id": "5e9d779f0000000001002219"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "12694"
          },
          "cover": {
            "file_id": "",
            "height": 1914,
            "width": 1436,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/5f352712e47ba58df55b5367fce621da/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/4a29cdb7ecd44b280e762ac48c9d9684/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/5f352712e47ba58df55b5367fce621da/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/4a29cdb7ecd44b280e762ac48c9d9684/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "id": "659d162a00000000110325c3",
        "model_type": "note",
        "note_card": {
          "user": {
            "nick_name": "\u65AF\u5E74",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30o58b15kicc05nqkdheg8pfn5he1bug",
            "user_id": "5f546c5d00000000010065f7",
            "nickname": "\u65AF\u5E74"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "11"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/c6b2cf793a05b81e2a7a237d13772bd3/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/293056c610738cabbdfb294c7d73729b/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/c6b2cf793a05b81e2a7a237d13772bd3/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/293056c610738cabbdfb294c7d73729b/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_prv_1"
          },
          "type": "normal",
          "display_title": "\u8DDF\u7537\u670B\u53CB\u53D1\u751F\u4E86\u597D\u5C34\u5C2C..."
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "ignore": false,
        "id": "659cc979000000001d02561a",
        "model_type": "note",
        "note_card": {
          "type": "video",
          "display_title": "\u4ECA\u5E74\u8FD9\u4E2A\u7EA2\u5305\u5C01\u9762\u7EDD\u4E86(\u514D\u8D39\u9001)",
          "user": {
            "nick_name": "\u8BBE\u8BA1\u4E01\u5B50\u6237",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64c4b453dcb18b56fa6a28df.jpg",
            "user_id": "5d12fe7500000000110227e0",
            "nickname": "\u8BBE\u8BA1\u4E01\u5B50\u6237"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "4534"
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/b02cba9cf21c6682495a4f1860bde957/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/0a75fe114f320d809d55bf5f0bba548a/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1440,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/b02cba9cf21c6682495a4f1860bde957/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/0a75fe114f320d809d55bf5f0bba548a/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_mw_1"
              }
            ]
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom"
      },
      {
        "note_card": {
          "display_title": "\u7279\u6B8A\u5C0F\u7656\u597D\uFF01\u8C01\u61C2\u554A\xB7\xB7\xB7\xB7\xB7\xB7\u5F88\u7F9E\u803B\u5440",
          "user": {
            "nick_name": "\u{1F34C}\u{1F34C}",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30tlepr8bkk005n9hrgr4edqfprih5v8",
            "user_id": "5d31dc36000000001103374f",
            "nickname": "\u{1F34C}\u{1F34C}"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "1782"
          },
          "cover": {
            "file_id": "",
            "height": 767,
            "width": 600,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/cc1655b76ad49f2634d8c82781d01fad/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/90c91b56ed8abb6e2a53e03661def984/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/cc1655b76ad49f2634d8c82781d01fad/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/90c91b56ed8abb6e2a53e03661def984/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_mw_1"
          },
          "type": "normal"
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "659b6931000000001101d2ab",
        "model_type": "note"
      },
      {
        "id": "658c2ba5000000001d035ea0",
        "model_type": "note",
        "note_card": {
          "type": "video",
          "display_title": "\u5341\u7EA7\u9888\u690E\u60A3\u8005\u5F3A\u70C8\u63A8\u8350\u2757\uFE0F\u8FD9\u4E5F\u592A\u592A\u592A\u653E\u677E\u4E86\uFF01",
          "user": {
            "nick_name": "\u91D1\u5C0F\u80D6 Yoga",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64ba0556ff449c630b1a7075.jpg",
            "user_id": "55a4ea8067bc654ccf9c0297",
            "nickname": "\u91D1\u5C0F\u80D6 Yoga"
          },
          "interact_info": {
            "liked_count": "53104",
            "liked": false
          },
          "cover": {
            "file_id": "",
            "height": 1181,
            "width": 886,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/2b3b3d702d7b7962dfc65977078af60c/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/50cf371be487d3f97c6422343bb75217/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/2b3b3d702d7b7962dfc65977078af60c/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/50cf371be487d3f97c6422343bb75217/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "display_title": "\u201C\u5730\u94C1\u65E0\u88E4\u65E5\u201D\u4E3B\u6253\u4E00\u4E2A\u6F2B\u4E0D\u7ECF\u5FC3",
          "user": {
            "user_id": "5722923450c4b40d04c1c8ee",
            "nickname": "\u82F1\u56FD\u541B",
            "nick_name": "\u82F1\u56FD\u541B",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30oaj3n8jic0048b74u939i7e26vgck8"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "1797"
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/f23b131c25a8e8944fbc92211b164321/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/9926ce4110335a8b6de44cbc44d9d9b3/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1440,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/f23b131c25a8e8944fbc92211b164321/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/9926ce4110335a8b6de44cbc44d9d9b3/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ]
          },
          "type": "video"
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "659cf39f000000001d014210"
      },
      {
        "id": "6581457d000000003403f752",
        "model_type": "note",
        "note_card": {
          "cover": {
            "width": 750,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/354f6be081c995a8e94e5491249fcda9/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/292dd7716164c766ea10fd8afc974d21/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/354f6be081c995a8e94e5491249fcda9/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/292dd7716164c766ea10fd8afc974d21/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1000
          },
          "type": "normal",
          "display_title": "2023\u5E74\u5927\u5BB6\u90FD\u6709\u526F\u4E1A\u5417\uFF1F\u8BF4\u8BF4\u90FD\u5728\u5E72\u561B",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2opc7sr0k60604bq66auf1c1elp7idr8",
            "user_id": "5be97cf09fafbe000144b02e",
            "nickname": "\u539F\u6765\u662F\u5927\u8471\u5440",
            "nick_name": "\u539F\u6765\u662F\u5927\u8471\u5440"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "4310"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u5B83\u552F\u4E00\u7684\u7F3A\u70B9:\u90D1\u5DDE\u53EA\u6709\u4E00\u5BB6\u{1F62D}\u3002\u3002\u3002\u3002\u3002",
          "user": {
            "nick_name": "\u4E03\u67D2",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/6067cbfdca7f028c8652fcfd.jpg",
            "user_id": "5feb40f600000000010017c6",
            "nickname": "\u4E03\u67D2"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "3462"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/ae92873b1e2668e2f48639ec5e34b8ad/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/b39ac63ed2a1b31c2b0f292703e695b8/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/ae92873b1e2668e2f48639ec5e34b8ad/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/b39ac63ed2a1b31c2b0f292703e695b8/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "658c38db000000001d034366"
      },
      {
        "id": "6598bc4f000000001000fd3b",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u4E00\u4EBA\u8BF4\u4E00\u4E2A\u5173\u4E8E\u7537\u6027\u7684\u51B7\u77E5\u8BC6\uFF08\u70B8\u88C2\uFF09",
          "user": {
            "nick_name": "\u817F\u77ED\u7684\u957F\u9888\u9E7F",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30ti65a7cke605oh5jlbocs6o07pmol8",
            "user_id": "62259d5700000000210270d8",
            "nickname": "\u817F\u77ED\u7684\u957F\u9888\u9E7F"
          },
          "interact_info": {
            "liked_count": "1180",
            "liked": false
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/088f01432ef7e74f65a40f5f828a1485/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/7f2fafd5d53fb0ccf6af7ca36bd73f99/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_mw_1",
            "file_id": "",
            "height": 781,
            "width": 616,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/088f01432ef7e74f65a40f5f828a1485/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/7f2fafd5d53fb0ccf6af7ca36bd73f99/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_mw_1"
              }
            ]
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "2024\u56FD\u6F2B\u7535\u5F71\u5408\u96C6\u203C\uFE0F\u6BCF\u4E00\u4E2A\u90FD\u88AB\u60CA\u8273\u4F4F\u{1F525}",
          "user": {
            "nick_name": "\u7B71\u7B71\u7684\u52A8\u6F2B\u65E5\u8BB0",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2okjnsl6k80605ofro2moci9m4efe588",
            "user_id": "61fbc0ad0000000021024936",
            "nickname": "\u7B71\u7B71\u7684\u52A8\u6F2B\u65E5\u8BB0"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "27404"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/331ad4448cfec0815dd1559831e19266/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1677,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/355b9684756a5e3ec4b1a3d571b0ea66/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/331ad4448cfec0815dd1559831e19266/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/355b9684756a5e3ec4b1a3d571b0ea66/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "6593deaf00000000110141b6"
      },
      {
        "note_card": {
          "type": "normal",
          "display_title": "\u554A\u554A\u554A\uFF01\u516C\u53F8\u53D1\u7684\u5DE5\u4F5C\u624B\u673A\u597D\u810F\uFF01\uFF01\uFF01",
          "user": {
            "nickname": "Jessie",
            "nick_name": "Jessie",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30r5pbt9q1e005na5m2b4lf8kquk2hb8",
            "user_id": "5d45b096000000001202bd14"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "17160"
          },
          "cover": {
            "width": 1920,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/0c4052de1ad9a83814de5dcfc89f7986/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/0f748f51612a2ec7b675e6800c61844c/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/0c4052de1ad9a83814de5dcfc89f7986/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/0f748f51612a2ec7b675e6800c61844c/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "658e2c76000000001a003116",
        "model_type": "note"
      },
      {
        "id": "657417f4000000003a00b73c",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u539F\u6765\u7F51\u4E0A\u8BF4\u7684\u90FD\u662F\u771F\u7684\uFF0C\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s9149k02g005ostnbc9ghh1l3rntrg",
            "user_id": "639dbad80000000026004621",
            "nickname": "\u5C0F73",
            "nick_name": "\u5C0F73"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "13080"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/86bbcee5685d4fe34c178b5a62ce24d8/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/783d9fde580af648b06aa3b210c3823a/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/86bbcee5685d4fe34c178b5a62ce24d8/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/783d9fde580af648b06aa3b210c3823a/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1440,
            "url": ""
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "id": "658695b7000000000703af32",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u96F6\u94B1\u901A\u7684\u94B1\u4E0D\u89C1\u4E86\u3002\u3002",
          "user": {
            "nick_name": "\u5200\u9798",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/612343a9000000000100addb.jpg",
            "user_id": "612343a9000000000100addb",
            "nickname": "\u5200\u9798"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "32788"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/ba819969472ae110dac922c573f39dc7/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2400,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/2a4d080b569fe6414206d52365aaca95/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/ba819969472ae110dac922c573f39dc7/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/2a4d080b569fe6414206d52365aaca95/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_prv_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "note_card": {
          "type": "normal",
          "display_title": "\u5F53\u5E74\u63D0\u62D4\u6211\u7684\u5927\u54E5\u5631\u5490\u6211:\u9022\u5E74\u8FC7\u8282\u5343\u4E07\u4E0D\u8981\u4E00\u53E5\u5BA2\u6C14\u8BDD\u90FD\u4E0D\u9001\uFF0CL\u5BFC\u4E5F\u662F\u4EBA\uFF0C\u4ED6\u4E5F\u9700\u8981\u522B",
          "user": {
            "user_id": "658144ee00000000200361f9",
            "nickname": "\u5C0F\u8F69\u603B\u5973\u6027\u6210\u957F",
            "nick_name": "\u5C0F\u8F69\u603B\u5973\u6027\u6210\u957F",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30srv2jfik06g5pc18jn86ofp7npv8i0"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "14128"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/d5968dfef7542ccf9eeb1cfe661d3264/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/74752a7c6729553adbbd08eac90492f5/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/d5968dfef7542ccf9eeb1cfe661d3264/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/74752a7c6729553adbbd08eac90492f5/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1996,
            "url": ""
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "659bd29c00000000110163ec",
        "model_type": "note"
      },
      {
        "id": "65855088000000003802cf0e",
        "model_type": "note",
        "note_card": {
          "user": {
            "nick_name": "\u8863\u5FB7TOPMAN",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2qmoldq2jm06g5otip2fpt2f812j2vi0",
            "user_id": "63b2c89f00000000270289e8",
            "nickname": "\u8863\u5FB7TOPMAN"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "8320"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/1325aa269d66f585d529deaea6a4812f/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_mw_1",
            "file_id": "",
            "height": 675,
            "width": 506,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/5bef72c1e85c193850ec36fefd5325ad/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/1325aa269d66f585d529deaea6a4812f/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/5bef72c1e85c193850ec36fefd5325ad/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_prv_1"
          },
          "type": "video",
          "display_title": "10\u79D2\u5B66\u4F1A\u81EA\u6D4B\uFF0C\u5230\u5E95\u662F\u9732\u989D\u5934\uFF0C\u8FD8\u662F\u7559\u5218\u6D77\uFF1F"
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "note_card": {
          "interact_info": {
            "liked": false,
            "liked_count": "62861"
          },
          "cover": {
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/5d4436359e307460925c7341b059585a/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/ea9818dabf6dff1994d316b46b5718ed/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1560,
            "width": 1170,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/5d4436359e307460925c7341b059585a/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/ea9818dabf6dff1994d316b46b5718ed/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_mw_1"
              }
            ]
          },
          "type": "video",
          "display_title": "\u5728\u4E00\u58F0\u58F0\u201C\u8001\u5E08\u597D\u201D\u4E2D\u8FF7\u5931\u81EA\u6211",
          "user": {
            "nick_name": "\u5415\u98DE",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/5fb938aa0a7d18000148a6ee.jpg",
            "user_id": "5c38a9590000000007020716",
            "nickname": "\u5415\u98DE"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "658d4b41000000001e00b743",
        "model_type": "note"
      },
      {
        "id": "659516f1000000000f013670",
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u7B2C\u4E00\u6B21\u8FD9\u4E48\u76F4\u89C2\u7684\u611F\u53D7\u5230\uFF01\uFF01\uFF01",
          "user": {
            "nickname": "Ydli_y2qx",
            "nick_name": "Ydli_y2qx",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/63ea36f3205a418832fd618f.jpg",
            "user_id": "592116a350c4b435df9dd9b7"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "21970"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/b6de56c66ec3eaafd45035355e2b22a5/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/984effe646dd24d41b1822a862948520/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/b6de56c66ec3eaafd45035355e2b22a5/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/984effe646dd24d41b1822a862948520/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2049,
            "width": 1536,
            "url": ""
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u4E0A\u5CB8 \u7559\u5728\u6CB3\u5357\u4E86 ",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/64cf34e6c884c027a483ded8.jpg",
            "user_id": "63b44de9000000002801add0",
            "nickname": "\u53EF\u53EF\u4E50\u4E50",
            "nick_name": "\u53EF\u53EF\u4E50\u4E50"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "461"
          },
          "cover": {
            "file_id": "",
            "height": 3636,
            "width": 1800,
            "url": "",
            "info_list": [
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/f55f072dc798db221d6a3abaa070de3b/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_prv_1",
                "image_scene": "WB_PRV"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/38f3dafec051b956fc30193a73eb6fb8/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/f55f072dc798db221d6a3abaa070de3b/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/38f3dafec051b956fc30193a73eb6fb8/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "659918aa00000000110198c7"
      },
      {
        "ignore": false,
        "id": "65900eff000000001200aff4",
        "model_type": "note",
        "note_card": {
          "user": {
            "nick_name": "\u90D1\u5DDE\u79CB\u5200\u9C7C",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/634d7fb9d68d0d0efcb02bf2.jpg",
            "user_id": "61a3360200000000100058e3",
            "nickname": "\u90D1\u5DDE\u79CB\u5200\u9C7C"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "4196"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/4184d68290118fffa7912e95e0b80a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/b771466ce003a0630bf80f034ba37a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/4184d68290118fffa7912e95e0b80a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/b771466ce003a0630bf80f034ba37a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_mw_1",
            "file_id": "",
            "height": 2560,
            "width": 1920,
            "url": ""
          },
          "type": "normal",
          "display_title": "\u6B63\u5F18\u57CE\uFF01\uFF01\u6D88\u8D39\u89C2\u5D29\u584C\u4E86\uFF01\uFF01\u{1F92F}\u{1F92F}\u{1F92F}"
        },
        "track_id": "2cp1c9sack4nc8jac9xom"
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "vol 223 \u540D\u4FA6\u63A2\u67EF\u5357 \u6BDB\u5229\u5C0F\u4E94\u90CE \u7CCA\u6D82\u4FA6\u63A2",
          "user": {
            "nick_name": "\u5927\u5934\u963F\u8FB0",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/6481c6cfc66cea47a1fb04e3.jpg",
            "user_id": "609705b6000000000101d730",
            "nickname": "\u5927\u5934\u963F\u8FB0"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "53204"
          },
          "cover": {
            "height": 1440,
            "width": 1080,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/c9dd61e2b810d5aa015ad8beea823c54/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/18ce3255cd8c3a8e32ffffe11b816344/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/c9dd61e2b810d5aa015ad8beea823c54/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/18ce3255cd8c3a8e32ffffe11b816344/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_mw_1",
            "file_id": ""
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "65906ddb0000000012008378"
      },
      {
        "model_type": "note",
        "note_card": {
          "type": "normal",
          "display_title": "\u{1F62E}\u5BB6\u4EBA\u4EEC\uFF0C\u4EC0\u4E48\u53EB\u964D\u7EF4\u6253\u51FB\uFF1F\u{1F62E}",
          "user": {
            "nick_name": "\u7CD6\u7CD6\u5988\u5988\u8BB2\u80B2\u513F",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30qhdlipkgc605p6a1eb2osbn8nls618",
            "user_id": "64ca0b96000000000b007177",
            "nickname": "\u7CD6\u7CD6\u5988\u5988\u8BB2\u80B2\u513F"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "5828"
          },
          "cover": {
            "file_id": "",
            "height": 1439,
            "width": 1079,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/5a5690f3cb9fd9f878931ec39416e2c9/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/2044ab1f5d52667619e501b97edb092a/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/5a5690f3cb9fd9f878931ec39416e2c9/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/2044ab1f5d52667619e501b97edb092a/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_mw_1"
          }
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false,
        "id": "658bda2b000000001e007e5e"
      },
      {
        "id": "659bc9ee0000000012002874",
        "model_type": "note",
        "note_card": {
          "user": {
            "nick_name": "\u4E00\u4E00\u7231\u5403\u8089\u8089",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/649329fd819b225fb0f839aa.jpg",
            "user_id": "63118fc8000000001200dbbc",
            "nickname": "\u4E00\u4E00\u7231\u5403\u8089\u8089"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "23054"
          },
          "cover": {
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/3c4a7e688abb75482e6975cb01cce412/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1707,
            "width": 1280,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/743679a8db1fa55196a6fe2b4e71bbea/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/3c4a7e688abb75482e6975cb01cce412/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/743679a8db1fa55196a6fe2b4e71bbea/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_prv_1"
          },
          "type": "normal",
          "display_title": "\u5DE6\u6ED1\u770B\u59D0\u59D0\u8131\u8863\u670D "
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      },
      {
        "ignore": false,
        "id": "65961a49000000000f01c671",
        "model_type": "note",
        "note_card": {
          "display_title": "\u4EF0\u671BU9\u539F\u5730\u6389\u5934 ",
          "user": {
            "nick_name": "\u5E03\u8FEA\u6F6E\u8F66\u{1F697}",
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2o884n42js0004a7bj4m7i86s4m3jvro",
            "user_id": "5b526c79e8ac2b7a16f520dc",
            "nickname": "\u5E03\u8FEA\u6F6E\u8F66\u{1F697}"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "3593"
          },
          "cover": {
            "file_id": "",
            "height": 1184,
            "width": 888,
            "url": "",
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/6bccb2dc169cbfcd8a466165ff86be2e/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_prv_1"
              },
              {
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/a2204589a91bb1cc74db1376660eb720/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_mw_1",
                "image_scene": "WB_DFT"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/6bccb2dc169cbfcd8a466165ff86be2e/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/a2204589a91bb1cc74db1376660eb720/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_mw_1"
          },
          "type": "video"
        },
        "track_id": "2cp1c9sack4nc8jac9xom"
      },
      {
        "id": "6598d2ee0000000018029a44",
        "model_type": "note",
        "note_card": {
          "display_title": "\u{1F4B0}\u{1F4B0}\u5FEB\u6765\u770B\u770B\uFF01\u4F60\u5BB6\u91CC\u8FD8\u6709\u65E9\u4E9B\u5E74\u7684\u8001",
          "user": {
            "avatar": "https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pbod9sek2605nu63kdg8n9j9c58rs8",
            "user_id": "5fc61d1b0000000001005d33",
            "nickname": "\u8001\u516D\u8BB0\u5F55\u4E00\u7EBF\u4E0B\u4E61\u53E4\u73A9\u6536\u85CF",
            "nick_name": "\u8001\u516D\u8BB0\u5F55\u4E00\u7EBF\u4E0B\u4E61\u53E4\u73A9\u6536\u85CF"
          },
          "interact_info": {
            "liked": false,
            "liked_count": "1668"
          },
          "cover": {
            "info_list": [
              {
                "image_scene": "WB_PRV",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/eb17e25a3a8626127b3a4a4698564ec1/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_prv_1"
              },
              {
                "image_scene": "WB_DFT",
                "url": "http://sns-webpic-qc.xhscdn.com/202401101127/917ad54ae5e6c1b407e558a821c23a1a/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_mw_1"
              }
            ],
            "url_pre": "http://sns-webpic-qc.xhscdn.com/202401101127/eb17e25a3a8626127b3a4a4698564ec1/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_prv_1",
            "url_default": "http://sns-webpic-qc.xhscdn.com/202401101127/917ad54ae5e6c1b407e558a821c23a1a/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_mw_1",
            "file_id": "",
            "height": 1920,
            "width": 1080,
            "url": ""
          },
          "type": "video"
        },
        "track_id": "2cp1c9sack4nc8jac9xom",
        "ignore": false
      }
    ]
  }
}
`},38102:function(E,n){n.Z=`.BFC5 {
  display: flex;
  align-items: flex-start;
  height: 200px;
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
}
.fixLeft {
  width: 20%;
  height: 100%;
  background-color: var(--color-primary);
}

.autoAdapt {
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-secondary);
}

.BFC6 {
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.rightFloat {
  float: right;
  height: 200px;
  color: var(--color-text);
  background-color: var(--color-primary);
  width: 200px;
}

.autoLeft {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}

.BFC7 {
  background-color: bisque;
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.leftFloat {
  float: left;
  height: 200px;
  width: 150px;
  color: var(--color-text);
  background-color: var(--color-primary);
}

.autoRight {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}`},91152:function(E,n){n.Z=`.BFC8 {
  background-color: var(--color-bg);
  overflow: hidden;
  border: var(--color-border) dashed 1px;
}

.left2 {
  float: left;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.right2 {
  float: right;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.middle {
  margin-left: 150px;
  margin-right: 150px;
  height: 200px;
  background-color: var(--color-secondary);
}

.BFC9 {
  background-color: var(--color-bg);
  display: flex;
  border: var(--color-bg) dashed 1px;
}

.itemLeft {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}
.itemMiddle {
  background-color: var(--color-secondary);
  height: 200px;

  flex: auto;
}
.itemRight {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}
`},58880:function(E,n){n.Z=`.flex {
  display: flex;
  /*  height: 30rem; */
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  /*   background-color: var(--color-bg); */
  flex-wrap: wrap;
  gap: 0.5%;
  border: var(--color-border) dashed 1px;
}
.item {
  width: 33%;
  aspect-ratio: 1 / 1;
  border: var(--color-border) dashed 1px;
  background-color: var(--color-bg-primary);
}`},64757:function(E,n){n.Z=`.center {
  position: fixed;
  left: calc(50vw); /* \u89C6\u53E3\u5BBD\u5E26\u4E00\u534A */
  top: calc(50vh); /* \u8DDD\u79BB\u9AD8\u5EA680px */
  width: 200px;
  background-color: var(--color-bg-secondary);
  transform: translate(-50%, -50%); /* \u5DE6\u79FB\u81EA\u8EAB\u5BBD\u5EA6\u7684\u4E00\u534A\uFF0C\u4E0A\u79FB\u81EA\u8EAB\u9AD8\u5EA6\u7684\u4E00\u534A */
}
`},58339:function(E){E.exports=JSON.parse('{"code":0,"success":true,"msg":"\u6210\u529F","data":{"items":[{"id":"6598b4c500000000130364cc","model_type":"note","note_card":{"type":"normal","display_title":"\u5927\u5382\u7684\u7B80\u5386\u5565\u6837 ","user":{"nick_name":"\u5C9B\u4E3B","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30thmlog14s6g5oaf42ggjhjlbgq7aj0","user_id":"614f20a1000000000201c675","nickname":"\u5C9B\u4E3B"},"interact_info":{"liked":false,"liked_count":"69"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/1612cc0f3b5bafb9356cd99076407748/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_mw_1","file_id":"","height":1312,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/77483bedfa86f89c1652e5b21f698a86/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/1612cc0f3b5bafb9356cd99076407748/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/77483bedfa86f89c1652e5b21f698a86/1040g2sg30tiq9uobks405oaf42ggjhjl895jomg!nc_n_webp_prv_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"659b6b7c000000001802adab","model_type":"note","note_card":{"type":"normal","display_title":"\u6211\u624D20\u5C81\u5C31\u6709\u4E86\uFF0C\u8FD9\u6B63\u5E38\u5417\uFF1F\uFF1F\uFF1F","user":{"nickname":"Again","nick_name":"Again","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30nopsr5gn0005o60l9b09affqh6uj4g","user_id":"60c0aa56000000000100a9ef"},"interact_info":{"liked":false,"liked_count":"129"},"cover":{"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f45e47ef0a0be091b6e75d0b8d22ac15/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/c661568214809411cbbb6cd26e930c41/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/f45e47ef0a0be091b6e75d0b8d22ac15/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/c661568214809411cbbb6cd26e930c41/1040g00830tlf3ko14s005o60l9b09affp1bhr2o!nc_n_webp_mw_1","file_id":"","height":2560,"width":1833}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"657bf2260000000016004828","model_type":"note","note_card":{"display_title":"\u6211\u5929\uFF01\u8FD9\u4E00\u6B21\u76F4\u89C2\u611F\u53D7\u5230\u2026\u2026","user":{"nick_name":"Only","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/5ea22b110000000001001d86.jpg","user_id":"5ea22b110000000001001d86","nickname":"Only"},"interact_info":{"liked":false,"liked_count":"20618"},"cover":{"file_id":"","height":1707,"width":1280,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/555c72d5f3c50ef8ac442765eaeed624/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/444cec837b7089dfa4ea85cdb93502aa/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/555c72d5f3c50ef8ac442765eaeed624/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/444cec837b7089dfa4ea85cdb93502aa/1040g00830smnhlv2js405nl25c8g87c6tn476b8!nc_n_webp_mw_1"},"type":"normal"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"657c11be000000003801eb9a","model_type":"note","note_card":{"cover":{"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/1b5d3e2bf5d3e07d94e08ee4de5a5fc9/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f21e3a5afeb8b55797f1e4e2ea1959fc/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/1b5d3e2bf5d3e07d94e08ee4de5a5fc9/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/f21e3a5afeb8b55797f1e4e2ea1959fc/1040g2sg30smrcipcjq005o61ssg0bq7b8ljejfg!nc_n_webp_mw_1","file_id":"","height":1920,"width":1440},"type":"normal","display_title":"\u4ECE\u672A\u89C1\u8FC7\u5982\u6B64\u6B79\u6BD2\u7684\u8EAB\u6750 \u8FD8\u6709\u6551\u5417...","user":{"nick_name":"\u4F60\u7F8E\u513F.","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/60c1e720000000000101e8eb.jpg","user_id":"60c1e720000000000101e8eb","nickname":"\u4F60\u7F8E\u513F."},"interact_info":{"liked":false,"liked_count":"21439"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"model_type":"note","note_card":{"type":"normal","display_title":"\u5065\u8EAB\u623F\u9047\u5230\u8FD9\u79CD\u810F\u4E1C\u897F\u8BE5\u600E\u4E48\u529E\uFF1F","user":{"user_id":"5d294e0a000000001602b371","nickname":"\u82E6\u8FC7\u91D1\u5DF4\u5229","nick_name":"\u82E6\u8FC7\u91D1\u5DF4\u5229","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/5f721425f06d5400013b5391.jpg"},"interact_info":{"liked":false,"liked_count":"13413"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/4e50bf4756a0edd4ed7eec28beebb1ff/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/675906a405f1372ef6fca4ae746c5b96/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/4e50bf4756a0edd4ed7eec28beebb1ff/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/675906a405f1372ef6fca4ae746c5b96/1040g00830thqq57ikq005n999o55lcrhm2qh9m0!nc_n_webp_prv_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"6597b2c6000000001000d8b8"},{"ignore":false,"id":"6588f79800000000160049c4","model_type":"note","note_card":{"type":"normal","display_title":"\u5FEB\u6765\u8BF4\u8BF4\u4F60\u4EEC\u7684\u793E\u6B7B\u77AC\u95F4\uFF01","user":{"nickname":"\u7231\u4E3D\u4E1D\u4E0D\u662F\u7231\u4E3D\u5F0F","nick_name":"\u7231\u4E3D\u4E1D\u4E0D\u662F\u7231\u4E3D\u5F0F","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30t1cfcu04a6g4bump9ia4ao4gnrc978","user_id":"5c00e4a20000000007002b04"},"interact_info":{"liked_count":"46795","liked":false},"cover":{"height":2414,"width":1080,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/6d415c33214ffd9368e17db73d38bdeb/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/35224f8df18aac70c8fcc2ebc6fffc63/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/6d415c33214ffd9368e17db73d38bdeb/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/35224f8df18aac70c8fcc2ebc6fffc63/1040g00830t3eeum7426g4bump9ia4ao4b7rpfjg!nc_n_webp_mw_1","file_id":""}},"track_id":"2cp1cm86pbar7jvmeqnlw"},{"id":"6593d6e7000000000f032d35","model_type":"note","note_card":{"type":"normal","display_title":"\u907F\u96F7\u80D6\u4E1C\u6765 \u90FD\u522B\u6765\u4E86","user":{"nick_name":"\u7389\u7389","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/6441e5e8a61cee6d85b08ec8.jpg","user_id":"5a484b3ae8ac2b1c85179580","nickname":"\u7389\u7389"},"interact_info":{"liked":false,"liked_count":"422"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/1663099a9e1c3650b2accc7ea879f61d/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/c37370a326375aec4acf6667381f393b/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/1663099a9e1c3650b2accc7ea879f61d/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/c37370a326375aec4acf6667381f393b/1040g00830te277buka004a0j615jl5c069ihj0o!nc_n_webp_prv_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"65882507000000003403db0d","model_type":"note","note_card":{"user":{"user_id":"63563412000000001802c841","nickname":"HankHill\u58C1\u7EB8\u5C0F\u5C4B","nick_name":"HankHill\u58C1\u7EB8\u5C0F\u5C4B","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30q1n2dmo7k4g5oqm6g965i21farl7g0"},"interact_info":{"liked_count":"1981","liked":false},"cover":{"file_id":"","height":1706,"width":1280,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/dc1ee16760cd48c24234c57394bf0906/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/b204beae44975112de7896a96ac220ad/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/dc1ee16760cd48c24234c57394bf0906/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/b204beae44975112de7896a96ac220ad/spectrum/1040g0k030t2kiicrk6005oqm6g965i21ob0rhio!nc_n_webp_mw_1"},"type":"normal","display_title":"8k\u6781\u6E05\u58C1\u7EB8 | \u9AD8\u7A7A\u629B\u7269 |"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"model_type":"note","note_card":{"type":"video","display_title":"\u300A\u6211\u76842023\u5E74\u5EA6\u603B\u7ED3\u300B","user":{"nick_name":"\u534A\u53E3\u5C0F\u5E0C","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/608c2099c7594a002dc9f736.jpg","user_id":"5a979279e8ac2b02fa0bfb45","nickname":"\u534A\u53E3\u5C0F\u5E0C"},"interact_info":{"liked":false,"liked_count":"6934"},"cover":{"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/66dda1773a32f0b32ff7416fdbf2c77f/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/b4526083825e54d951cf71ec8da20c70/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/66dda1773a32f0b32ff7416fdbf2c77f/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/b4526083825e54d951cf71ec8da20c70/1040g00830tbgpfb34a004a2vqk97juq55jia4mo!nc_n_webp_mw_1","file_id":"","height":1440}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"65913bd50000000010010074"},{"model_type":"note","note_card":{"type":"normal","display_title":"\u6C89\u9ED8\u4E0D\u4EE3\u8868\u9000\u8BA9\uFF0C\u4F60\u5F53\u6211\u662F\u50BB\u5B50\u5417\uFF1F","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30rh5nkkc1o605p9ov4638kghgu42u78","user_id":"6538f90c000000000d005211","nickname":"\u5468\u58EE\u5E08\u6CD5\u5F8B\u670D\u52A1","nick_name":"\u5468\u58EE\u5E08\u6CD5\u5F8B\u670D\u52A1"},"interact_info":{"liked":false,"liked_count":"178"},"cover":{"file_id":"","height":2560,"width":1920,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/f59a8ca40649b23060fb6eeb156a2b6a/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/d846048ea95b70875bcfc50459b42589/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/f59a8ca40649b23060fb6eeb156a2b6a/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/d846048ea95b70875bcfc50459b42589/1040g2sg30tnt6fheks6g5p9ov4638kgh4dhbsso!nc_n_webp_mw_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"659deb30000000000f01dc33"},{"note_card":{"user":{"nick_name":"\u9648\u4F69\u65AF","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64477af44eb377a38141bb57.jpg","user_id":"640ff195000000001400e506","nickname":"\u9648\u4F69\u65AF"},"interact_info":{"liked":false,"liked_count":"4515"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f793ce035cf4ab0377bc144bfe8852a5/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/9fe6e9ad32e8890629ec3026e404a830/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/f793ce035cf4ab0377bc144bfe8852a5/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/9fe6e9ad32e8890629ec3026e404a830/1040g2sg30rnnd5sr2i005p0fu6al1p86d1mmb7g!nc_n_webp_mw_1","file_id":"","height":1440,"width":1080,"url":""},"type":"video","display_title":"\u575A\u6301\u5C31\u662F\u80DC\u5229\uFF01\u5F1F\u5144\u4EEC\uFF0C\u7ED9\u6211\u9876\u4F4F\uFF01\u9876\u4F4F\uFF01 #\u9648\u4F69"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"655c32bd000000001100f33f","model_type":"note"},{"id":"6597e1cf000000000f01e3b8","model_type":"note","note_card":{"interact_info":{"liked":false,"liked_count":"100"},"cover":{"file_id":"","height":1920,"width":2560,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/8ebf87c4b646d896d64b043411280158/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/308e04eae8380bf74af0690687af8e89/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/8ebf87c4b646d896d64b043411280158/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/308e04eae8380bf74af0690687af8e89/1040g2sg30ti0hr8j4k6g5n12rss1t7q969pb8t0!nc_n_webp_mw_1"},"type":"normal","display_title":"Java\u8FD8\u662F\u524D\u7AEF\uFF1F ","user":{"nick_name":"\u65E9\u7761\u65E9\u8D77","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/5f428ecbb911850001786288.jpg","user_id":"5c22df380000000007029f49","nickname":"\u65E9\u7761\u65E9\u8D77"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"model_type":"note","note_card":{"type":"video","display_title":"\u8FD9\u662F\u9B54\u6CD5\u5417\uFF1F\u9F3B\u5B50\u771F\u7684\u5C0F\u4E86\u4E00\u5708\uFF01\uFF01\u62EF\u6551\u5BBD\u9F3B\u5934","user":{"nick_name":"\u9EA6\u7247maimai","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/63c6333af49cc7b05d2e2ad4.jpg","user_id":"5fbdf7900000000001002913","nickname":"\u9EA6\u7247maimai"},"interact_info":{"liked":false,"liked_count":"10137"},"cover":{"file_id":"","height":1497,"width":1123,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/f70576f68c1a1bfd2d5c64236a9fe464/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/d07689183720dd3f7deccd1c1580bd68/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/f70576f68c1a1bfd2d5c64236a9fe464/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/d07689183720dd3f7deccd1c1580bd68/1040g2sg30tn6a1km4m005nttuu808a8jd3find0!nc_n_webp_mw_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"659d2fbc000000001d036e52"},{"id":"65768ab1000000000703bebf","model_type":"note","note_card":{"type":"normal","display_title":"\u6CA1\u60F3\u5230\u5929\u79E4\u8BC4\u5206\u8FD9\u4E48\u9AD8","user":{"nickname":"\u7CD6\u7092\u5C0F\u6817\u5B50\u{1F330}","nick_name":"\u7CD6\u7092\u5C0F\u6817\u5B50\u{1F330}","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pqidfrrn0005nkdpuvg8h9k497helg","user_id":"5e8dcfbf0000000001004534"},"interact_info":{"liked":false,"liked_count":"5715"},"cover":{"file_id":"","height":1920,"width":887,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/93c604e3c670d65aa7ce5c36b66a2ffc/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/31da2313773337e53771c58a154ad5b6/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/93c604e3c670d65aa7ce5c36b66a2ffc/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/31da2313773337e53771c58a154ad5b6/1040g2sg30sheljh6j6005nkdpuvg8h9k7c1397g!nc_n_webp_mw_1"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"659663b50000000013034c06","model_type":"note","note_card":{"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/ee59bc00993beb551fbc3b5db6c29f0f/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_mw_1","file_id":"","height":1706,"width":1280,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/744fb45312177056e5ec51611f08f846/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/ee59bc00993beb551fbc3b5db6c29f0f/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/744fb45312177056e5ec51611f08f846/1040g2sg30tghtaa44g005pc5cu4n7h8qak4a6ro!nc_n_webp_prv_1"},"type":"normal","display_title":"\u9AD8\u60C5\u5546\u56DE\u590D\uFF5C\u9886\u5BFC\u501F1w\u8FD81\u5343\u5E76\u8BF4\u9EBB\u70E6\u4F60\u4E86\uFF1F","user":{"nick_name":"\u661F\u661F\u2728\u9AD8\u60C5\u5546","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/65856902060f7d407c635702.jpg","user_id":"65856789000000001c03c51a","nickname":"\u661F\u661F\u2728\u9AD8\u60C5\u5546"},"interact_info":{"liked":false,"liked_count":"10916"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"6597585a0000000011018329","model_type":"note","note_card":{"type":"normal","display_title":"\u7F57\u7FD4\u8BF4:\u4F60\u5B66\u4E0D\u8FDB\u53BB\uFF0C\u73A9\u4E0D\u5C3D\u5174\uFF0C\u7761\u4E0D\u8E0F\u5B9E\uFF0C\u5FC3\u60C5\u4E0D\u723D\uFF0C\u6D51\u8EAB\u4E0D\u5BF9\u52B2\uFF0C\u5374\u5403\u5F97\u7279\u522B\u591A\u3002\u6CA1\u6709","user":{"user_id":"6295cb38000000001501fa97","nickname":"\u5218\u563B\u563B\u52AA\u529B\u6210\u957F\u8BB0","nick_name":"\u5218\u563B\u563B\u52AA\u529B\u6210\u957F\u8BB0","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64111c3d281f8089224dc17c.jpg"},"interact_info":{"liked":false,"liked_count":"61049"},"cover":{"file_id":"","height":1400,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f66fe4cc166462f82746ee2c69a7059c/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/8d08bf0051fffe003a26b10d70f46510/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/f66fe4cc166462f82746ee2c69a7059c/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/8d08bf0051fffe003a26b10d70f46510/1040g2sg30thfov264q605oklpcs5buknepakm50!nc_n_webp_mw_1"}}},{"ignore":false,"id":"658f68e40000000011032e94","model_type":"note","note_card":{"type":"normal","display_title":"\u5927\u5B66\u8DEF\u9648\u5BE8\u82B1\u5349\u4E0D\u5E72\u4E86\uFF0C\u6709\u7A7A\u7684\u53EF\u4EE5\u53BB\u770B\u770B","user":{"user_id":"556d11ff62a60c5c79619ad9","nickname":"hedy","nick_name":"hedy","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/556d11ff62a60c5c79619ad9.jpg"},"interact_info":{"liked_count":"784","liked":false},"cover":{"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/7ab097cc73ee996a2bb6de40b09c33ef/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/d5b7e0a1e9f446cef45072b853a8240d/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/7ab097cc73ee996a2bb6de40b09c33ef/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/d5b7e0a1e9f446cef45072b853a8240d/1040g00830ta34fimka6040nn3g8vv6mpgcp16b0!nc_n_webp_mw_1","file_id":"","height":2560,"width":2263}},"track_id":"2cp1cm86pbar7jvmeqnlw"},{"model_type":"note","note_card":{"user":{"nickname":"\u6709\u7528\u7684\u54B8\u9C7C","nick_name":"\u6709\u7528\u7684\u54B8\u9C7C","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/63e0bc0e50f03d23dab07d89.jpg","user_id":"62f1d2500000000015017c55"},"interact_info":{"liked":false,"liked_count":"810"},"cover":{"file_id":"","height":1660,"width":1242,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/79b1485ac89e58e957a626f7289e9314/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/2db8fbaeb4d3cdf7af1566ee74860b82/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/79b1485ac89e58e957a626f7289e9314/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/2db8fbaeb4d3cdf7af1566ee74860b82/1040g00830thukuk44ke05onhq985av2l0kpidq0!nc_n_webp_mw_1"},"type":"normal","display_title":"\u5168\u7F51\u6700\u5168\u203C\uFE0F\u534E\u4E3A\u9690\u85CF\u529F\u80FD\u770B\u8FD9\u4E00\u7BC7\u5C31\u591F\u5566"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"6597d27200000000110188bd"},{"id":"659a54a2000000001102f6fb","model_type":"note","note_card":{"user":{"nickname":"\u6211\u4E0D\u77E5\u9053\u5E94\u8BE5\u53EB\u4EC0\u4E48","nick_name":"\u6211\u4E0D\u77E5\u9053\u5E94\u8BE5\u53EB\u4EC0\u4E48","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30sb53dsn2idg5o60h9p85saca9ahcv8","user_id":"60c08a72000000002002f14c"},"interact_info":{"liked":false,"liked_count":"5218"},"cover":{"height":1698,"width":1280,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/4333f8aa21be673ad726bf569a8f05e2/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f5b489fb5482615f457e0847d9d3ae1c/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/4333f8aa21be673ad726bf569a8f05e2/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/f5b489fb5482615f457e0847d9d3ae1c/1040g2sg30tkd2d374e6g5o60h9p85sacana6f8g!nc_n_webp_mw_1","file_id":""},"type":"normal","display_title":"\u8FD9\u2026\u7559\u5B66\u540E\u90FD\u4F1A\u6CBE\u67D3\u4EC0\u4E48\u6076\u4E60\u554A\uFF1F"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"659656d0000000001200345b","model_type":"note","note_card":{"interact_info":{"liked":false,"liked_count":"9920"},"cover":{"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/d6b662922c63468edb649c6ad311bbfe/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/e2aa37aa5b52db648447a2e844933f19/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/d6b662922c63468edb649c6ad311bbfe/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/e2aa37aa5b52db648447a2e844933f19/1040g00830tggatru4m005ndan53g8q6fogqhebo!nc_n_webp_mw_1","file_id":"","height":2048,"width":1536},"type":"normal","display_title":"\u7B2C\u4E00\u6B21\u8FD9\u4E48\u76F4\u89C2\u611F\u53D7\u5230\uFF01\uFF01\uFF01","user":{"nick_name":"Mmmeng","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/610bce2015b15c46ac0bc441.jpg","user_id":"5daab94700000000010068cf","nickname":"Mmmeng"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"659a9505000000001e00740c","model_type":"note","note_card":{"display_title":"\u5FC3\u7406\u6D4B\u8BD5\uFF1A8\u79D2\u6D4B\u51FA\u4EC0\u4E48\u5BF9\u4F60\u624D\u662F\u6700\u91CD\u8981\u7684","user":{"nick_name":"\u5929\u8D4B\u5206\u6790\u5E08\u5C1A\u6069","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/627cffba374c60e7a5703fa5.jpg","user_id":"5f00598b00000000010051e9","nickname":"\u5929\u8D4B\u5206\u6790\u5E08\u5C1A\u6069"},"interact_info":{"liked":false,"liked_count":"5935"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/3adebb6146073841a4e05895b0177575/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_mw_1","file_id":"","height":1707,"width":1280,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/09f63674f5cb5a1f3055d042675ddc93/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/3adebb6146073841a4e05895b0177575/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/09f63674f5cb5a1f3055d042675ddc93/spectrum/1040g0k030tkkqmhq4q005no0b65g8kf9cbsh9co!nc_n_webp_prv_1"},"type":"normal"},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"658eafe3000000001303469f","model_type":"note","note_card":{"type":"normal","display_title":"\u90D1\u5DDE\u503C\u5F97\u53BB\u7684\u795E\u4ED9\u5916\u4F01","user":{"nick_name":"offer\u5148\u751F\u793E\u62DB\u7248","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64534897e0321e000190be5e.jpg","user_id":"645346f8000000000f006da8","nickname":"offer\u5148\u751F\u793E\u62DB\u7248"},"interact_info":{"liked":false,"liked_count":"2749"},"cover":{"height":1660,"width":1242,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/da489da471da3d07377d730725f0e563/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/7570856e1f916437a65bcd8359ff12bb/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/da489da471da3d07377d730725f0e563/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/7570856e1f916437a65bcd8359ff12bb/1040g00830t916rbc3q005p2j8rs3ord860tcfm8!nc_n_webp_mw_1","file_id":""}}},{"ignore":false,"id":"658ce308000000001e004c85","model_type":"note","note_card":{"type":"normal","display_title":"\u4E00\u8DEF\u4ECE\u6218\u573A\u6D3B\u7740\u56DE\u6765\u7684\u8001\u5175\uFF0C\u4EC5\u4EC5\u662F\u5E78\u8FD0\u5417","user":{"nick_name":"\u662F\u5178\u5178\u5988\u54AA\u5440","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/645b7e4b86578b8c6ab3b056.jpg","user_id":"6578037c0000000019011b7b","nickname":"\u662F\u5178\u5178\u5988\u54AA\u5440"},"interact_info":{"liked":false,"liked_count":"772"},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/373dd002f873b431113396ec3726bd6f/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/76c17787ee7016231402ff9758de37db/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_mw_1","file_id":"","height":1510,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/373dd002f873b431113396ec3726bd6f/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/76c17787ee7016231402ff9758de37db/1040g00830t78ul6e46005pbo0du6a6rr6bm50qg!nc_n_webp_mw_1"}]}},"track_id":"2cp1cm86pbar7jvmeqnlw"},{"ignore":false,"id":"658ab5ca000000001d029caf","model_type":"note","note_card":{"user":{"nick_name":"\u68A8\u6DA1\u5C0F\u5B5F","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/5d9f1352936fcd0001383415.jpg","user_id":"5cc28851000000001000762b","nickname":"\u68A8\u6DA1\u5C0F\u5B5F"},"interact_info":{"liked":false,"liked_count":"66220"},"cover":{"file_id":"","height":1440,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/fe35fc4ddce9cc576f3dfa322884adab/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/91a10b45750aa27b171108956cd26418/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/fe35fc4ddce9cc576f3dfa322884adab/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/91a10b45750aa27b171108956cd26418/spectrum/1040g0k030t54tt5j3u005n62h18k0thb5eq1mq8!nc_n_webp_mw_1"},"type":"video","display_title":"\u6625\u8282\u95F7\u58F0\u53D1\u5927\u8D22 "},"track_id":"2cp1cm86pbar7jvmeqnlw"},{"id":"6586e8f5000000000902467b","model_type":"note","note_card":{"type":"normal","display_title":"\u8FD9\u4E00\u523B\uFF0C\u5BF9\u5468\u8463\u5FC3\u60C5\u662F\u590D\u6742\u7684","user":{"nick_name":"Ben\u4E0D\u559C\u6B22\u5403\u9C7C","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/6593e58acd8c473d611b16e4.jpg","user_id":"5df4cb2f0000000001001e87","nickname":"Ben\u4E0D\u559C\u6B22\u5403\u9C7C"},"interact_info":{"liked":false,"liked_count":"11881"},"cover":{"width":1706,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/1d1273238460a157417524b6a6a4e4b5/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101130/e4546825fd9963d7de366572d440d6ac/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/1d1273238460a157417524b6a6a4e4b5/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/e4546825fd9963d7de366572d440d6ac/1040g2sg30t1e5phq4a005nfkpcng87k7bp63ed8!nc_n_webp_mw_1","file_id":"","height":2560}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"id":"6581502b000000003803379a","model_type":"note","note_card":{"type":"normal","display_title":"\u5E74\u6536\u5165\u5BF9\u5E94\u4E70\u8F66\u699C\uFF0C\u770B\u770B\u4EC0\u4E48\u8F66\u6700\u9002\u5408\u4F60\u2705","user":{"user_id":"5b28a0a54eacab4c53c7fbf2","nickname":"\u6C7D\u8F66\u884C\u4E1A\u89C2\u5BDF","nick_name":"\u6C7D\u8F66\u884C\u4E1A\u89C2\u5BDF","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/6540b787c83a0733f0997431.jpg"},"interact_info":{"liked":false,"liked_count":"3575"},"cover":{"height":1092,"width":822,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/178dba068cfc5db065c6deb47d468abb/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/f45abd2720d25811cd4e1310a5845ec6/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/178dba068cfc5db065c6deb47d468abb/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/f45abd2720d25811cd4e1310a5845ec6/1040g2sg30srv904o40004a6csogabuvibeuep3g!nc_n_webp_mw_1","file_id":""}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false},{"model_type":"note","note_card":{"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101130/aafcd943137bcbbcbcfdd2b0eaff547e/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101130/4f24b24bd9c320a106ae3933aad59097/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101130/aafcd943137bcbbcbcfdd2b0eaff547e/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101130/4f24b24bd9c320a106ae3933aad59097/1040g00830svth7b3k66g4a90emv53suba9ekns8!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":""},"type":"normal","display_title":"\u4E0D\u77E5\u9053\u54EA\u4E2A\u4E1A\u4E3B\u5E72\u7684\u{1F44D}","user":{"nick_name":"\u8DB4\u5728\u684C\u4E0A\u6570\u7F8A","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pg7vphemi6g4a90emv53sub49iu4a0","user_id":"5b64fe5106825b0001f6f3cb","nickname":"\u8DB4\u5728\u684C\u4E0A\u6570\u7F8A"},"interact_info":{"liked":false,"liked_count":"20264"}},"track_id":"2cp1cm86pbar7jvmeqnlw","ignore":false,"id":"65855a79000000000801d6c2"}],"cursor_score":"1.704857399973002E9"}}')},59904:function(E){E.exports=JSON.parse('{"code":0,"success":true,"msg":"\u6210\u529F","data":{"cursor_score":"1.7048572509700022E9","items":[{"model_type":"note","note_card":{"interact_info":{"liked":false,"liked_count":"3472"},"cover":{"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/d054deefdcf9171a0b4559c73958533f/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/05fb42e78d46d9f17489a12f97a5c9aa/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/d054deefdcf9171a0b4559c73958533f/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/05fb42e78d46d9f17489a12f97a5c9aa/1040g2sg30t7r49kp441g49elvgghj3sqm5bh2jo!nc_n_webp_mw_1","file_id":"","height":1920,"width":1440},"type":"normal","display_title":"\u7537\u670B\u53CB\u7B2C\u4E00\u6B21\u8BF7\u7236\u6BCD\u5403\u996D\u{1F972}\u6C57\u6D41\u6D43\u80CC\u4E86\u2026\u2026","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/63f5dc6f1a5c041f3a6889f8.jpg","user_id":"590361196a6a69017a438f9a","nickname":"\u5C0F\u9E21\u597D\u997F","nick_name":"\u5C0F\u9E21\u597D\u997F"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"658d79c30000000010012ab9"},{"id":"658d0a7d0000000011032c9f","model_type":"note","note_card":{"cover":{"file_id":"","height":1919,"width":1439,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/7bf81ec323f433bc2bc7ac1832c2eaf4/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/30c6e7f450056cd453d4781b64bfa7a2/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/7bf81ec323f433bc2bc7ac1832c2eaf4/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/30c6e7f450056cd453d4781b64bfa7a2/1040g2sg30t7doo72k2005n9pn1vk2d20sq29t58!nc_n_webp_mw_1"},"type":"normal","display_title":"\u653E\u5047\u56DE\u5BB6\u5728\u9AD8\u94C1\u770B\u5230\u4E00\u4E2A\u8EAB\u6750\u8D3C\u597D\u7684\u5973\u751F...","user":{"nick_name":"yuanyuan","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/63d7895c28025eb34161dd39.jpg","user_id":"5d39b87f0000000010013440","nickname":"yuanyuan"},"interact_info":{"liked":false,"liked_count":"3014"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"ignore":false,"id":"6577090c000000003403f23d","model_type":"note","note_card":{"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/38312adc417d8bb848715c28d4a718aa/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/f1c11d7ec9853aed1a5d1fe42dbf4e37/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_mw_1","file_id":"","height":1920,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/38312adc417d8bb848715c28d4a718aa/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/f1c11d7ec9853aed1a5d1fe42dbf4e37/110/0/01e57708f210fa010010000000018c58fb0763_0.jpg!nc_n_webp_mw_1"}]},"type":"video","display_title":"\u4E8C\u80CE\u5BB6\u5EAD\u6539\u902080\u5E73\u8001\u623F\uFF0C\u7ADF\u7136\u641E\u51FA\u67656\u5C45\u5BA4\uFF01","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/62c63d37a75a838247c41e34.jpg","user_id":"5f93bc060000000001002e14","nickname":"\u5C0F\u5B87","nick_name":"\u5C0F\u5B87"},"interact_info":{"liked":false,"liked_count":"235256"}},"track_id":"2cp1c9sack4nc8jac9xom"},{"id":"65950119000000001d0160d7","model_type":"note","note_card":{"type":"normal","display_title":"#2024\u5E74\u7B2C\u4E00\u5F20\u7167\u7247\u{1F5FA}\uFE0F","user":{"nick_name":"\u5C0F\u5C0F\u5C0F\u5C0F\u5B87\u5B87","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/61ba0c4a1102b02dae482074.jpg","user_id":"5d5d1bd000000000010180de","nickname":"\u5C0F\u5C0F\u5C0F\u5C0F\u5B87\u5B87"},"interact_info":{"liked":false,"liked_count":"24210"},"cover":{"height":1920,"width":1440,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/1b57d3d61e8e27939d7f680a1a567614/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/7e958e690e6368e0bdb4ce9e3aa57f14/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/1b57d3d61e8e27939d7f680a1a567614/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/7e958e690e6368e0bdb4ce9e3aa57f14/1040g00830tgiklst4q005nat3f80b06u0h99uho!nc_n_webp_mw_1","file_id":""}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"id":"658fdb920000000015000b1b","model_type":"note","note_card":{"interact_info":{"liked":false,"liked_count":"1787"},"cover":{"height":600,"width":600,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/4d8e9be2d7a140bd6bbcb06f8cdf4671/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/0c576a006f101b43a66dc8b817d3dc48/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/4d8e9be2d7a140bd6bbcb06f8cdf4671/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/0c576a006f101b43a66dc8b817d3dc48/1040g00830ta5ph764a6g5p786q7ga7vgk9gkd1o!nc_n_webp_mw_1","file_id":""},"type":"normal","display_title":"\u804A\u70B9\u79C1\u5BC6\u95EE\u9898\uFF0C\u53CD\u6B63\u5927\u5BB6\u4E5F\u6CA1\u89C1\u8FC7\u2026\u2026","user":{"nick_name":"\u6708","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/645b7f3c86578b8c6ab3b068.jpg","user_id":"64e8368f0000000001011ff0","nickname":"\u6708"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"id":"658e6de0000000001a028579","model_type":"note","note_card":{"interact_info":{"liked":false,"liked_count":"4768"},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/b51e1e6ede636c947d798781c5740933/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/9492de9fa216e1abf5631ebe8bcdb344/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_mw_1","file_id":"","height":1214,"width":920,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/b51e1e6ede636c947d798781c5740933/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/9492de9fa216e1abf5631ebe8bcdb344/1040g00830t8ovcjejs0g5ok7rlqoddtpacn7r5g!nc_n_webp_mw_1"}]},"type":"normal","display_title":"\u4E00\u5F20\u56FE\u770B\u61C2\u9152\u5E97\u5206\u7EA7\uFF0C\u5143\u65E6\u51FA\u95E8\u5FC5\u5907","user":{"user_id":"6287dd75000000002102b7b9","nickname":"\u51B7\u4E09\u5C81","nick_name":"\u51B7\u4E09\u5C81","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/636150fc5fa9516215622bf4.jpg"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"id":"658ce23c000000001200b531","model_type":"note","note_card":{"type":"video","display_title":"\u53C8\u53CC\u53D2\u6CA1\u6D41\u91CF\uFF1F\u8BB8\u613F\uFF1F\u4E0D\u5982@\u85AF\u6761\u5C0F\u52A9\u624B\uFF01","user":{"nickname":"\u85AF\u6761\u5C0F\u52A9\u624B","nick_name":"\u85AF\u6761\u5C0F\u52A9\u624B","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/612735fd6e367601e555d896.jpg","user_id":"5e9d779f0000000001002219"},"interact_info":{"liked":false,"liked_count":"12694"},"cover":{"file_id":"","height":1914,"width":1436,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/5f352712e47ba58df55b5367fce621da/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/4a29cdb7ecd44b280e762ac48c9d9684/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/5f352712e47ba58df55b5367fce621da/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/4a29cdb7ecd44b280e762ac48c9d9684/1040g00830t78qg5qk4005nkteufg88gp1g5nj28!nc_n_webp_mw_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"id":"659d162a00000000110325c3","model_type":"note","note_card":{"user":{"nick_name":"\u65AF\u5E74","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30o58b15kicc05nqkdheg8pfn5he1bug","user_id":"5f546c5d00000000010065f7","nickname":"\u65AF\u5E74"},"interact_info":{"liked":false,"liked_count":"11"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/c6b2cf793a05b81e2a7a237d13772bd3/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/293056c610738cabbdfb294c7d73729b/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/c6b2cf793a05b81e2a7a237d13772bd3/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/293056c610738cabbdfb294c7d73729b/1040g00830tn16ha2ki3g4benvbudv267rftdqn8!nc_n_webp_prv_1"},"type":"normal","display_title":"\u8DDF\u7537\u670B\u53CB\u53D1\u751F\u4E86\u597D\u5C34\u5C2C..."},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"ignore":false,"id":"659cc979000000001d02561a","model_type":"note","note_card":{"type":"video","display_title":"\u4ECA\u5E74\u8FD9\u4E2A\u7EA2\u5305\u5C01\u9762\u7EDD\u4E86(\u514D\u8D39\u9001)","user":{"nick_name":"\u8BBE\u8BA1\u4E01\u5B50\u6237","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64c4b453dcb18b56fa6a28df.jpg","user_id":"5d12fe7500000000110227e0","nickname":"\u8BBE\u8BA1\u4E01\u5B50\u6237"},"interact_info":{"liked":false,"liked_count":"4534"},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/b02cba9cf21c6682495a4f1860bde957/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/0a75fe114f320d809d55bf5f0bba548a/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_mw_1","file_id":"","height":1920,"width":1440,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/b02cba9cf21c6682495a4f1860bde957/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/0a75fe114f320d809d55bf5f0bba548a/1040g00830tmpqmdh4k005n8ivpqkc9v0iqnnfh0!nc_n_webp_mw_1"}]}},"track_id":"2cp1c9sack4nc8jac9xom"},{"note_card":{"display_title":"\u7279\u6B8A\u5C0F\u7656\u597D\uFF01\u8C01\u61C2\u554A\xB7\xB7\xB7\xB7\xB7\xB7\u5F88\u7F9E\u803B\u5440","user":{"nick_name":"\u{1F34C}\u{1F34C}","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30tlepr8bkk005n9hrgr4edqfprih5v8","user_id":"5d31dc36000000001103374f","nickname":"\u{1F34C}\u{1F34C}"},"interact_info":{"liked":false,"liked_count":"1782"},"cover":{"file_id":"","height":767,"width":600,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/cc1655b76ad49f2634d8c82781d01fad/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/90c91b56ed8abb6e2a53e03661def984/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/cc1655b76ad49f2634d8c82781d01fad/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/90c91b56ed8abb6e2a53e03661def984/1040g2sg30tleqnfqke005n9hrgr4edqfnjmmplg!nc_n_webp_mw_1"},"type":"normal"},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"659b6931000000001101d2ab","model_type":"note"},{"id":"658c2ba5000000001d035ea0","model_type":"note","note_card":{"type":"video","display_title":"\u5341\u7EA7\u9888\u690E\u60A3\u8005\u5F3A\u70C8\u63A8\u8350\u2757\uFE0F\u8FD9\u4E5F\u592A\u592A\u592A\u653E\u677E\u4E86\uFF01","user":{"nick_name":"\u91D1\u5C0F\u80D6 Yoga","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64ba0556ff449c630b1a7075.jpg","user_id":"55a4ea8067bc654ccf9c0297","nickname":"\u91D1\u5C0F\u80D6 Yoga"},"interact_info":{"liked_count":"53104","liked":false},"cover":{"file_id":"","height":1181,"width":886,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/2b3b3d702d7b7962dfc65977078af60c/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/50cf371be487d3f97c6422343bb75217/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/2b3b3d702d7b7962dfc65977078af60c/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/50cf371be487d3f97c6422343bb75217/1040g2sg30t6i1oes460g40uv8kl800knupihgto!nc_n_webp_mw_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"model_type":"note","note_card":{"display_title":"\u201C\u5730\u94C1\u65E0\u88E4\u65E5\u201D\u4E3B\u6253\u4E00\u4E2A\u6F2B\u4E0D\u7ECF\u5FC3","user":{"user_id":"5722923450c4b40d04c1c8ee","nickname":"\u82F1\u56FD\u541B","nick_name":"\u82F1\u56FD\u541B","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30oaj3n8jic0048b74u939i7e26vgck8"},"interact_info":{"liked":false,"liked_count":"1797"},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/f23b131c25a8e8944fbc92211b164321/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/9926ce4110335a8b6de44cbc44d9d9b3/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_mw_1","file_id":"","height":1440,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/f23b131c25a8e8944fbc92211b164321/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/9926ce4110335a8b6de44cbc44d9d9b3/1040g2sg30tmuumem4e0048b74u939i7e4t5nmeg!nc_n_webp_mw_1","image_scene":"WB_DFT"}]},"type":"video"},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"659cf39f000000001d014210"},{"id":"6581457d000000003403f752","model_type":"note","note_card":{"cover":{"width":750,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/354f6be081c995a8e94e5491249fcda9/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/292dd7716164c766ea10fd8afc974d21/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/354f6be081c995a8e94e5491249fcda9/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/292dd7716164c766ea10fd8afc974d21/1040g2sg30srtv92142604bq66auf1c1eqbirg1o!nc_n_webp_mw_1","file_id":"","height":1000},"type":"normal","display_title":"2023\u5E74\u5927\u5BB6\u90FD\u6709\u526F\u4E1A\u5417\uFF1F\u8BF4\u8BF4\u90FD\u5728\u5E72\u561B","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2opc7sr0k60604bq66auf1c1elp7idr8","user_id":"5be97cf09fafbe000144b02e","nickname":"\u539F\u6765\u662F\u5927\u8471\u5440","nick_name":"\u539F\u6765\u662F\u5927\u8471\u5440"},"interact_info":{"liked":false,"liked_count":"4310"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"model_type":"note","note_card":{"type":"normal","display_title":"\u5B83\u552F\u4E00\u7684\u7F3A\u70B9:\u90D1\u5DDE\u53EA\u6709\u4E00\u5BB6\u{1F62D}\u3002\u3002\u3002\u3002\u3002","user":{"nick_name":"\u4E03\u67D2","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/6067cbfdca7f028c8652fcfd.jpg","user_id":"5feb40f600000000010017c6","nickname":"\u4E03\u67D2"},"interact_info":{"liked":false,"liked_count":"3462"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/ae92873b1e2668e2f48639ec5e34b8ad/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/b39ac63ed2a1b31c2b0f292703e695b8/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/ae92873b1e2668e2f48639ec5e34b8ad/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/b39ac63ed2a1b31c2b0f292703e695b8/1040g2sg30t6k5nug3q005nvb83r085u6b228lpo!nc_n_webp_prv_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"658c38db000000001d034366"},{"id":"6598bc4f000000001000fd3b","model_type":"note","note_card":{"type":"normal","display_title":"\u4E00\u4EBA\u8BF4\u4E00\u4E2A\u5173\u4E8E\u7537\u6027\u7684\u51B7\u77E5\u8BC6\uFF08\u70B8\u88C2\uFF09","user":{"nick_name":"\u817F\u77ED\u7684\u957F\u9888\u9E7F","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30ti65a7cke605oh5jlbocs6o07pmol8","user_id":"62259d5700000000210270d8","nickname":"\u817F\u77ED\u7684\u957F\u9888\u9E7F"},"interact_info":{"liked_count":"1180","liked":false},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/088f01432ef7e74f65a40f5f828a1485/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/7f2fafd5d53fb0ccf6af7ca36bd73f99/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_mw_1","file_id":"","height":781,"width":616,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/088f01432ef7e74f65a40f5f828a1485/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/7f2fafd5d53fb0ccf6af7ca36bd73f99/1040g00830tir3fagkk605oh5jlbocs6o6h3sf2g!nc_n_webp_mw_1"}]}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"model_type":"note","note_card":{"type":"normal","display_title":"2024\u56FD\u6F2B\u7535\u5F71\u5408\u96C6\u203C\uFE0F\u6BCF\u4E00\u4E2A\u90FD\u88AB\u60CA\u8273\u4F4F\u{1F525}","user":{"nick_name":"\u7B71\u7B71\u7684\u52A8\u6F2B\u65E5\u8BB0","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2okjnsl6k80605ofro2moci9m4efe588","user_id":"61fbc0ad0000000021024936","nickname":"\u7B71\u7B71\u7684\u52A8\u6F2B\u65E5\u8BB0"},"interact_info":{"liked":false,"liked_count":"27404"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/331ad4448cfec0815dd1559831e19266/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_mw_1","file_id":"","height":2560,"width":1677,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/355b9684756a5e3ec4b1a3d571b0ea66/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/331ad4448cfec0815dd1559831e19266/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/355b9684756a5e3ec4b1a3d571b0ea66/1040g00830te35ivejujg5ofro2moci9mr43dpto!nc_n_webp_prv_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"6593deaf00000000110141b6"},{"note_card":{"type":"normal","display_title":"\u554A\u554A\u554A\uFF01\u516C\u53F8\u53D1\u7684\u5DE5\u4F5C\u624B\u673A\u597D\u810F\uFF01\uFF01\uFF01","user":{"nickname":"Jessie","nick_name":"Jessie","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30r5pbt9q1e005na5m2b4lf8kquk2hb8","user_id":"5d45b096000000001202bd14"},"interact_info":{"liked":false,"liked_count":"17160"},"cover":{"width":1920,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/0c4052de1ad9a83814de5dcfc89f7986/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/0f748f51612a2ec7b675e6800c61844c/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/0c4052de1ad9a83814de5dcfc89f7986/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/0f748f51612a2ec7b675e6800c61844c/1040g2sg30t8h5gkd40005na5m2b4lf8k7puutn8!nc_n_webp_mw_1","file_id":"","height":2560}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"658e2c76000000001a003116","model_type":"note"},{"id":"657417f4000000003a00b73c","model_type":"note","note_card":{"type":"normal","display_title":"\u539F\u6765\u7F51\u4E0A\u8BF4\u7684\u90FD\u662F\u771F\u7684\uFF0C\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30s9149k02g005ostnbc9ghh1l3rntrg","user_id":"639dbad80000000026004621","nickname":"\u5C0F73","nick_name":"\u5C0F73"},"interact_info":{"liked":false,"liked_count":"13080"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/86bbcee5685d4fe34c178b5a62ce24d8/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/783d9fde580af648b06aa3b210c3823a/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/86bbcee5685d4fe34c178b5a62ce24d8/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/783d9fde580af648b06aa3b210c3823a/1040g00830sf25cj0ja005ostnbc9ghh1ujro05o!nc_n_webp_mw_1","file_id":"","height":1920,"width":1440,"url":""}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"id":"658695b7000000000703af32","model_type":"note","note_card":{"type":"normal","display_title":"\u96F6\u94B1\u901A\u7684\u94B1\u4E0D\u89C1\u4E86\u3002\u3002","user":{"nick_name":"\u5200\u9798","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/612343a9000000000100addb.jpg","user_id":"612343a9000000000100addb","nickname":"\u5200\u9798"},"interact_info":{"liked":false,"liked_count":"32788"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/ba819969472ae110dac922c573f39dc7/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_mw_1","file_id":"","height":2400,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/2a4d080b569fe6414206d52365aaca95/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/ba819969472ae110dac922c573f39dc7/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/2a4d080b569fe6414206d52365aaca95/1040g00830t140l72426g5o938ekg9berpm604h8!nc_n_webp_prv_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"note_card":{"type":"normal","display_title":"\u5F53\u5E74\u63D0\u62D4\u6211\u7684\u5927\u54E5\u5631\u5490\u6211:\u9022\u5E74\u8FC7\u8282\u5343\u4E07\u4E0D\u8981\u4E00\u53E5\u5BA2\u6C14\u8BDD\u90FD\u4E0D\u9001\uFF0CL\u5BFC\u4E5F\u662F\u4EBA\uFF0C\u4ED6\u4E5F\u9700\u8981\u522B","user":{"user_id":"658144ee00000000200361f9","nickname":"\u5C0F\u8F69\u603B\u5973\u6027\u6210\u957F","nick_name":"\u5C0F\u8F69\u603B\u5973\u6027\u6210\u957F","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30srv2jfik06g5pc18jn86ofp7npv8i0"},"interact_info":{"liked":false,"liked_count":"14128"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/d5968dfef7542ccf9eeb1cfe661d3264/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/74752a7c6729553adbbd08eac90492f5/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/d5968dfef7542ccf9eeb1cfe661d3264/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/74752a7c6729553adbbd08eac90492f5/1040g2sg30tlrmgqskq6g5pc18jn86ofpt6hfbe8!nc_n_webp_mw_1","file_id":"","height":2560,"width":1996,"url":""}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"659bd29c00000000110163ec","model_type":"note"},{"id":"65855088000000003802cf0e","model_type":"note","note_card":{"user":{"nick_name":"\u8863\u5FB7TOPMAN","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2qmoldq2jm06g5otip2fpt2f812j2vi0","user_id":"63b2c89f00000000270289e8","nickname":"\u8863\u5FB7TOPMAN"},"interact_info":{"liked":false,"liked_count":"8320"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/1325aa269d66f585d529deaea6a4812f/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_mw_1","file_id":"","height":675,"width":506,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/5bef72c1e85c193850ec36fefd5325ad/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/1325aa269d66f585d529deaea6a4812f/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/5bef72c1e85c193850ec36fefd5325ad/spectrum/1040g0k030svrp40c46005otip2fpt2f8ibeekto!nc_n_webp_prv_1"},"type":"video","display_title":"10\u79D2\u5B66\u4F1A\u81EA\u6D4B\uFF0C\u5230\u5E95\u662F\u9732\u989D\u5934\uFF0C\u8FD8\u662F\u7559\u5218\u6D77\uFF1F"},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"note_card":{"interact_info":{"liked":false,"liked_count":"62861"},"cover":{"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/5d4436359e307460925c7341b059585a/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/ea9818dabf6dff1994d316b46b5718ed/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_mw_1","file_id":"","height":1560,"width":1170,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/5d4436359e307460925c7341b059585a/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/ea9818dabf6dff1994d316b46b5718ed/spectrum/1040g0k030t7lldhrk6005n1ol5chs1omiu1vq00!nc_n_webp_mw_1"}]},"type":"video","display_title":"\u5728\u4E00\u58F0\u58F0\u201C\u8001\u5E08\u597D\u201D\u4E2D\u8FF7\u5931\u81EA\u6211","user":{"nick_name":"\u5415\u98DE","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/5fb938aa0a7d18000148a6ee.jpg","user_id":"5c38a9590000000007020716","nickname":"\u5415\u98DE"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"658d4b41000000001e00b743","model_type":"note"},{"id":"659516f1000000000f013670","model_type":"note","note_card":{"type":"normal","display_title":"\u7B2C\u4E00\u6B21\u8FD9\u4E48\u76F4\u89C2\u7684\u611F\u53D7\u5230\uFF01\uFF01\uFF01","user":{"nickname":"Ydli_y2qx","nick_name":"Ydli_y2qx","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/63ea36f3205a418832fd618f.jpg","user_id":"592116a350c4b435df9dd9b7"},"interact_info":{"liked":false,"liked_count":"21970"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/b6de56c66ec3eaafd45035355e2b22a5/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/984effe646dd24d41b1822a862948520/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/b6de56c66ec3eaafd45035355e2b22a5/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/984effe646dd24d41b1822a862948520/1040g00830tf99e96400049guojba7mdnstm52c0!nc_n_webp_mw_1","file_id":"","height":2049,"width":1536,"url":""}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"model_type":"note","note_card":{"type":"normal","display_title":"\u4E0A\u5CB8 \u7559\u5728\u6CB3\u5357\u4E86 ","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/64cf34e6c884c027a483ded8.jpg","user_id":"63b44de9000000002801add0","nickname":"\u53EF\u53EF\u4E50\u4E50","nick_name":"\u53EF\u53EF\u4E50\u4E50"},"interact_info":{"liked":false,"liked_count":"461"},"cover":{"file_id":"","height":3636,"width":1800,"url":"","info_list":[{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/f55f072dc798db221d6a3abaa070de3b/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_prv_1","image_scene":"WB_PRV"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/38f3dafec051b956fc30193a73eb6fb8/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/f55f072dc798db221d6a3abaa070de3b/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/38f3dafec051b956fc30193a73eb6fb8/1040g00830tj6g2nj4q6g5otk9nkq3begbi4v4jg!nc_n_webp_mw_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"659918aa00000000110198c7"},{"ignore":false,"id":"65900eff000000001200aff4","model_type":"note","note_card":{"user":{"nick_name":"\u90D1\u5DDE\u79CB\u5200\u9C7C","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/634d7fb9d68d0d0efcb02bf2.jpg","user_id":"61a3360200000000100058e3","nickname":"\u90D1\u5DDE\u79CB\u5200\u9C7C"},"interact_info":{"liked":false,"liked_count":"4196"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/4184d68290118fffa7912e95e0b80a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/b771466ce003a0630bf80f034ba37a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/4184d68290118fffa7912e95e0b80a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/b771466ce003a0630bf80f034ba37a99/1040g00830taapgli3s505od36o140m735h5lfo0!nc_n_webp_mw_1","file_id":"","height":2560,"width":1920,"url":""},"type":"normal","display_title":"\u6B63\u5F18\u57CE\uFF01\uFF01\u6D88\u8D39\u89C2\u5D29\u584C\u4E86\uFF01\uFF01\u{1F92F}\u{1F92F}\u{1F92F}"},"track_id":"2cp1c9sack4nc8jac9xom"},{"model_type":"note","note_card":{"type":"normal","display_title":"vol 223 \u540D\u4FA6\u63A2\u67EF\u5357 \u6BDB\u5229\u5C0F\u4E94\u90CE \u7CCA\u6D82\u4FA6\u63A2","user":{"nick_name":"\u5927\u5934\u963F\u8FB0","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/6481c6cfc66cea47a1fb04e3.jpg","user_id":"609705b6000000000101d730","nickname":"\u5927\u5934\u963F\u8FB0"},"interact_info":{"liked":false,"liked_count":"53204"},"cover":{"height":1440,"width":1080,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/c9dd61e2b810d5aa015ad8beea823c54/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/18ce3255cd8c3a8e32ffffe11b816344/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/c9dd61e2b810d5aa015ad8beea823c54/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/18ce3255cd8c3a8e32ffffe11b816344/1040g2sg30tanktc8js005o4n0mr0blpgecrb360!nc_n_webp_mw_1","file_id":""}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"65906ddb0000000012008378"},{"model_type":"note","note_card":{"type":"normal","display_title":"\u{1F62E}\u5BB6\u4EBA\u4EEC\uFF0C\u4EC0\u4E48\u53EB\u964D\u7EF4\u6253\u51FB\uFF1F\u{1F62E}","user":{"nick_name":"\u7CD6\u7CD6\u5988\u5988\u8BB2\u80B2\u513F","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30qhdlipkgc605p6a1eb2osbn8nls618","user_id":"64ca0b96000000000b007177","nickname":"\u7CD6\u7CD6\u5988\u5988\u8BB2\u80B2\u513F"},"interact_info":{"liked":false,"liked_count":"5828"},"cover":{"file_id":"","height":1439,"width":1079,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/5a5690f3cb9fd9f878931ec39416e2c9/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/2044ab1f5d52667619e501b97edb092a/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/5a5690f3cb9fd9f878931ec39416e2c9/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/2044ab1f5d52667619e501b97edb092a/1040g2sg30t68hg1ik03g5p6a1eb2osbnjq7ealo!nc_n_webp_mw_1"}},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false,"id":"658bda2b000000001e007e5e"},{"id":"659bc9ee0000000012002874","model_type":"note","note_card":{"user":{"nick_name":"\u4E00\u4E00\u7231\u5403\u8089\u8089","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/649329fd819b225fb0f839aa.jpg","user_id":"63118fc8000000001200dbbc","nickname":"\u4E00\u4E00\u7231\u5403\u8089\u8089"},"interact_info":{"liked":false,"liked_count":"23054"},"cover":{"url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/3c4a7e688abb75482e6975cb01cce412/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_mw_1","file_id":"","height":1707,"width":1280,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/743679a8db1fa55196a6fe2b4e71bbea/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/3c4a7e688abb75482e6975cb01cce412/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/743679a8db1fa55196a6fe2b4e71bbea/1040g00830tlqkj9g4u005oohhv44hmtsno1uc3g!nc_n_webp_prv_1"},"type":"normal","display_title":"\u5DE6\u6ED1\u770B\u59D0\u59D0\u8131\u8863\u670D "},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false},{"ignore":false,"id":"65961a49000000000f01c671","model_type":"note","note_card":{"display_title":"\u4EF0\u671BU9\u539F\u5730\u6389\u5934 ","user":{"nick_name":"\u5E03\u8FEA\u6F6E\u8F66\u{1F697}","avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1000g2jo2o884n42js0004a7bj4m7i86s4m3jvro","user_id":"5b526c79e8ac2b7a16f520dc","nickname":"\u5E03\u8FEA\u6F6E\u8F66\u{1F697}"},"interact_info":{"liked":false,"liked_count":"3593"},"cover":{"file_id":"","height":1184,"width":888,"url":"","info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/6bccb2dc169cbfcd8a466165ff86be2e/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_prv_1"},{"url":"http://sns-webpic-qc.xhscdn.com/202401101127/a2204589a91bb1cc74db1376660eb720/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_mw_1","image_scene":"WB_DFT"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/6bccb2dc169cbfcd8a466165ff86be2e/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/a2204589a91bb1cc74db1376660eb720/1040g00830tg7gjdo3q204a7bj4m7i86sal5ni28!nc_n_webp_mw_1"},"type":"video"},"track_id":"2cp1c9sack4nc8jac9xom"},{"id":"6598d2ee0000000018029a44","model_type":"note","note_card":{"display_title":"\u{1F4B0}\u{1F4B0}\u5FEB\u6765\u770B\u770B\uFF01\u4F60\u5BB6\u91CC\u8FD8\u6709\u65E9\u4E9B\u5E74\u7684\u8001","user":{"avatar":"https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30pbod9sek2605nu63kdg8n9j9c58rs8","user_id":"5fc61d1b0000000001005d33","nickname":"\u8001\u516D\u8BB0\u5F55\u4E00\u7EBF\u4E0B\u4E61\u53E4\u73A9\u6536\u85CF","nick_name":"\u8001\u516D\u8BB0\u5F55\u4E00\u7EBF\u4E0B\u4E61\u53E4\u73A9\u6536\u85CF"},"interact_info":{"liked":false,"liked_count":"1668"},"cover":{"info_list":[{"image_scene":"WB_PRV","url":"http://sns-webpic-qc.xhscdn.com/202401101127/eb17e25a3a8626127b3a4a4698564ec1/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_prv_1"},{"image_scene":"WB_DFT","url":"http://sns-webpic-qc.xhscdn.com/202401101127/917ad54ae5e6c1b407e558a821c23a1a/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_mw_1"}],"url_pre":"http://sns-webpic-qc.xhscdn.com/202401101127/eb17e25a3a8626127b3a4a4698564ec1/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_prv_1","url_default":"http://sns-webpic-qc.xhscdn.com/202401101127/917ad54ae5e6c1b407e558a821c23a1a/1040g2sg30titvp494s6g5nu63kdg8n9j6kiuk20!nc_n_webp_mw_1","file_id":"","height":1920,"width":1080,"url":""},"type":"video"},"track_id":"2cp1c9sack4nc8jac9xom","ignore":false}]}}')}}]);
