"use strict";(self.webpackChunkinterestingWeb=self.webpackChunkinterestingWeb||[]).push([[904],{39264:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-carousel-demo-carouseldemo":{component:g.memo(g.lazy(function(){return e.e(433).then(e.bind(e,71572))})),asset:{type:"BLOCK",id:"docs-components-carousel-demo-carouseldemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(69118).Z},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}},"docs-components-carousel-demo-animationcarouseldemo":{component:g.memo(g.lazy(function(){return e.e(433).then(e.bind(e,21652))})),asset:{type:"BLOCK",id:"docs-components-carousel-demo-animationcarouseldemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(96332).Z},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},10220:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-color-picker-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.ColorPicker,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){return o.createElement(o.Fragment,null,o.createElement(l,{defaultValue:"#128702",onChange:function(ae){console.log("color:",ae)}}))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-color-picker-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ColorPicker } from 'interestingWeb';
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
export default ColorPickerDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},44980:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},73052:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-image-preview-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.ImagePreview,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){return o.createElement(o.Fragment,null,o.createElement(l,{width:300,height:300,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}),o.createElement(l,{width:300,height:300,src:"https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"}))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-image-preview-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ImagePreview } from 'interestingWeb';
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

export default ImagePreviewDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},4593:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-message-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Message,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){return o.createElement(o.Fragment,null,o.createElement(l,null),o.createElement(l,{count:99}))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-message-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Message } from 'interestingWeb';
import React from 'react';
const MessageDemo = () => {
  return (
    <>
      <Message />
      <Message count={99} />
    </>
  );
};
export default MessageDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},5857:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-steps-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Steps,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){var ne=1,ae=[{title:"First",content:"First-content"},{title:"Second",content:"Second-content"},{title:"Last",content:"Last-content"}];return o.createElement(l,{current:ne,items:ae})},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-steps-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {Steps} from "interestingWeb";
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

export default StepsDemo`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},89675:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-components-tree-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Tree,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){var ne=[{label:"Parent 1",value:"1",children:[{label:"Child 1-1",value:"1-1",children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}];return o.createElement(l,{data:ne,onChange:function(le,oe){console.log(le),console.log(oe)}})},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
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
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:null,title:"\u57FA\u7840\u4F7F\u7528"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}},"docs-components-tree-demo-1":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Tree,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){var ne=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}];return o.createElement(l,{data:ne,onChange:function(le,oe){console.log(le),console.log(oe)}})},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
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
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u8BBE\u7F6E\u8282\u70B9\u7684expand",title:"\u5C55\u5F00\u8282\u70B9"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}},"docs-components-tree-demo-2":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Tree,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){var ne=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}],ae=["Child 1-1"];return o.createElement(l,{data:ne,onChange:function(oe,ye){console.log(oe),console.log(ye)},checked:ae})},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
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
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u901A\u8FC7Tree\u7684checked\u5C5E\u6027\u8BBE\u7F6E",title:"\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u62E9"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}},"docs-components-tree-demo-3":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,17926));case 2:return s=n.sent,l=s.Tree,n.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return i=n.sent,o=i.default,f=function(){var ne=[{label:"Parent 1",value:"1",expand:!0,children:[{label:"Child 1-1",value:"1-1",expand:!1,children:[{label:"Grandchild 1-1-1",value:"1-1-1"},{label:"Grandchild 1-1-2",value:"1-1-2"}]},{label:"Child 1-2",value:"1-2"}]},{label:"Parent 2",value:"2",children:[{label:"Child 2-1",value:"2-1"},{label:"Child 2-2",value:"2-2"}]}],ae=["Child 1-1"],le=["Grandchild 1-1-2"];return o.createElement(l,{data:ne,onChange:function(ye,te){console.log(ye),console.log(te)},disabled:ae,checked:le})},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-components-tree-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tree } from 'interestingWeb';
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
export default TreeDemo;`},interestingWeb:{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u901A\u8FC7Tree\u7684disabled\u5C5E\u6027\u8BBE\u7F6E",title:"\u8BBE\u7F6E\u4E0D\u53EF\u9009\u4E2D\u7684\u8282\u70B9"},context:{interestingWeb:m,react:d||(d=e.t(g,2))},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},73577:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},68636:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-ball-bounce-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.BallBounce,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-ball-bounce-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallBounce } from 'interestingWeb';

const BallBounceDemo = () => {
  return <BallBounce />;
};
export default BallBounceDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},2648:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-ball-collision-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.BallCollision,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-ball-collision-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallCollision } from 'interestingWeb';

const BallCollisionDemo = () => {
  return <BallCollision />;
};

export default BallCollisionDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},55693:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-ball-free-down-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.BallFreeDown,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-ball-free-down-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { BallFreeDown } from 'interestingWeb';

const BallFreeDownDemo = () => {
  return <BallFreeDown />;
};

export default BallFreeDownDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},91314:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-barrage-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.Barrage,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-barrage-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Barrage } from 'interestingWeb';
const BarrageDemo = () => {
  return <Barrage />;
};
export default BarrageDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},17793:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-drag-order-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.DragOrder,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-drag-order-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { DragOrder } from 'interestingWeb';

const DragOrderDemo = () => {
  return <DragOrder />;
};

export default DragOrderDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},78882:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-inertia-ball-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.InertiaBall,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-inertia-ball-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import {InertiaBall } from 'interestingWeb';

const InertiaBallDemo = ()=>{
    return <InertiaBall />
}

export default InertiaBallDemo`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},42386:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-pacman-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.Pacman,f=function(){return l.createElement("div",{style:{display:"flex",width:"100%",height:"10rem",justifyContent:"center",alignItems:"center",boxShadow:"var(--shadow-lg)"}},l.createElement(o,null))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-pacman-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default PacmanDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},83546:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-push-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.Push,f=function(){var ne=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`,ae=[{key:"1",exist:"header 1",expander:l.createElement("p",null,ne)},{key:"2",exist:"header 2",expander:l.createElement("p",null,ne)},{key:"3",exist:"header 3",expander:l.createElement("p",null,ne)}];return l.createElement("div",{style:{height:"5rem"}},l.createElement(o,{items:ae,defaultActive:2,onChange:function(oe){console.log(oe)}}))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-push-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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

export default PushDemo`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},78784:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-ripple-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.Ripple,f=function(){return l.createElement(o,null,l.createElement("div",{style:{width:"5rem",height:"5rem",backgroundColor:"var(--color-bg-primary)"}}))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-ripple-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default RippleDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},60506:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-rubber-ball-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.RubberBall,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-rubber-ball-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { RubberBall } from 'interestingWeb';

const RubberBallDemo = () => {
  return <RubberBall />;
};

export default RubberBallDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},62518:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-shake-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f,t;return c()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=H.sent,l=s.default,H.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=H.sent,o=i.Message,f=i.Shake,t=function(){return l.createElement(l.Fragment,null,l.createElement(f,null,l.createElement(o,null)),l.createElement(f,null,l.createElement(o,{count:100})))},H.abrupt("return",{default:t});case 11:case"end":return H.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-shake-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default ShakeDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},59124:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(17926),r={"docs-effects-trail-demo-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,17926));case 6:return i=n.sent,o=i.Trail,f=function(){return l.createElement(o,null)},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-effects-trail-demo-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Trail } from 'interestingWeb';

const TrailDemo = () => {
  return <Trail />;
};
export default TrailDemo;`},react:{type:"NPM",value:"18.3.1"},interestingWeb:{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(g,2)),interestingWeb:m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},81667:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},60810:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},11171:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},48415:function(L,a,e){e.r(a),e.d(a,{demos:function(){return m}});var d=e(17061),P=e.n(d),c=e(17156),R=e.n(c),h=e(67294),g=e(6930),m={"docs-layouts-middle-adapt-demo-0":{component:h.memo(h.lazy(R()(P()().mark(function r(){var p,s,l;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,6930));case 2:return p=o.sent,s=p.default,l=function(){return h.createElement(h.Fragment,null,h.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),h.createElement("div",{className:s.BFC8},h.createElement("div",{className:s.left2},"\u5DE6\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.right2},"\u53F3\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.middle},"\u4E2D\u95F4\u81EA\u9002\u5E94")),h.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09"),h.createElement("div",{className:s.BFC9},h.createElement("div",{className:s.itemLeft},"\u5DE6\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.itemMiddle},"\u4E2D\u95F4\u81EA\u9002\u5E94"),h.createElement("div",{className:s.itemRight},"\u53F3\u4FA7\u56FA\u5B9A")))},o.abrupt("return",{default:l});case 6:case"end":return o.stop()}},r)})))),asset:{type:"BLOCK",id:"docs-layouts-middle-adapt-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import style from "./MiddleAdapt.module.scss";
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

export default MiddleAdapt;`},"./MiddleAdapt.module.scss":{type:"FILE",value:e(91152).Z}},entry:"index.tsx"},context:{"./MiddleAdapt.module.scss":g,"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/MiddleAdapt.module.scss":g},renderOpts:{compile:function(){var r=R()(P()().mark(function s(){var l,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(250).then(e.bind(e,90250));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,i));case 3:case"end":return f.stop()}},s)}));function p(){return r.apply(this,arguments)}return p}()}}}},21443:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(3658),r={"docs-layouts-view-port-layout-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,3658));case 6:return i=n.sent,o=i.default,f=function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:o.center},"hello world"))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-layouts-view-port-layout-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import style from "./ViewPortLayout.module.scss";

const Demo = ()=>{
    return <>
    <div className = {style.center}>
        hello world
    </div>
    </>
}

export default Demo`},react:{type:"NPM",value:"18.3.1"},"./ViewPortLayout.module.scss":{type:"FILE",value:e(64757).Z}},entry:"index.tsx"},context:{"./ViewPortLayout.module.scss":m,react:d||(d=e.t(g,2)),"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/ViewPortLayout.module.scss":m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},53307:function(L,a,e){e.r(a),e.d(a,{demos:function(){return m}});var d=e(17061),P=e.n(d),c=e(17156),R=e.n(c),h=e(67294),g=e(21126),m={"docs-layouts-fix-one-side-demo-0":{component:h.memo(h.lazy(R()(P()().mark(function r(){var p,s,l;return P()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,21126));case 2:return p=o.sent,s=p.default,l=function(){return h.createElement(h.Fragment,null,h.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08flex\u5B9E\u73B0\uFF09"),h.createElement("div",{className:s.BFC5},h.createElement("div",{className:s.fixLeft},"\u5DE6\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.autoAdapt},"\u53F3\u4FA7\u81EA\u9002\u5E94")),h.createElement("h2",null,"\u53F3\u4FA7\u56FA\u5B9A\uFF0C\u5DE6\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),h.createElement("div",{className:s.BFC6},h.createElement("div",{className:s.rightFloat},"\u53F3\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.autoLeft},"\u5DE6\u4FA7\u81EA\u9002\u5E94")),h.createElement("h2",null,"\u5DE6\u4FA7\u56FA\u5B9A\uFF0C\u53F3\u4FA7\u81EA\u9002\u5E94\uFF08float\u5B9E\u73B0\uFF09"),h.createElement("div",{className:s.BFC7},h.createElement("div",{className:s.leftFloat},"\u5DE6\u4FA7\u56FA\u5B9A"),h.createElement("div",{className:s.autoRight},"\u53F3\u4FA7\u81EA\u9002\u5E94")))},o.abrupt("return",{default:l});case 6:case"end":return o.stop()}},r)})))),asset:{type:"BLOCK",id:"docs-layouts-fix-one-side-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import style from './FixOneSide.module.scss';
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
export default fixOneSide`},"./FixOneSide.module.scss":{type:"FILE",value:e(38102).Z}},entry:"index.tsx"},context:{"./FixOneSide.module.scss":g,"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/FixOneSide.module.scss":g},renderOpts:{compile:function(){var r=R()(P()().mark(function s(){var l,i=arguments;return P()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,e.e(250).then(e.bind(e,90250));case 2:return f.abrupt("return",(l=f.sent).default.apply(l,i));case 3:case"end":return f.stop()}},s)}));function p(){return r.apply(this,arguments)}return p}()}}}},29157:function(L,a,e){e.r(a),e.d(a,{demos:function(){return P}});var d=e(67294),P={}},223:function(L,a,e){var d;e.r(a),e.d(a,{demos:function(){return r}});var P=e(17061),c=e.n(P),R=e(17156),h=e.n(R),g=e(67294),m=e(50477),r={"docs-layouts-nine-demo-0":{component:g.memo(g.lazy(h()(c()().mark(function p(){var s,l,i,o,f;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,l=s.default,n.next=6,Promise.resolve().then(e.bind(e,50477));case 6:return i=n.sent,o=i.default,f=function(){return l.createElement("div",{className:o.flex},l.createElement("div",{className:o.item},"1"),l.createElement("div",{className:o.item},"2"),l.createElement("div",{className:o.item},"3"),l.createElement("div",{className:o.item},"4"),l.createElement("div",{className:o.item},"5"),l.createElement("div",{className:o.item},"6"),l.createElement("div",{className:o.item},"7"),l.createElement("div",{className:o.item},"8"))},n.abrupt("return",{default:f});case 10:case"end":return n.stop()}},p)})))),asset:{type:"BLOCK",id:"docs-layouts-nine-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

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
export default NineLayout;`},react:{type:"NPM",value:"18.3.1"},"./NineLayout.module.scss":{type:"FILE",value:e(58880).Z}},entry:"index.tsx"},context:{"./NineLayout.module.scss":m,react:d||(d=e.t(g,2)),"/home/runner/work/interestingWeb-dumi/interestingWeb-dumi/docs/layouts/NineLayout.module.scss":m},renderOpts:{compile:function(){var p=h()(c()().mark(function l(){var i,o=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(i=t.sent).default.apply(i,o));case 3:case"end":return t.stop()}},l)}));function s(){return p.apply(this,arguments)}return s}()}}}},17926:function(L,a,e){e.r(a),e.d(a,{AnimationCarousel:function(){return s},BallBounce:function(){return on},BallCollision:function(){return dn},BallFreeDown:function(){return cn},Barrage:function(){return pn},Carousel:function(){return l},ColorPicker:function(){return f},DragOrder:function(){return Pn},ImagePreview:function(){return ae},InertiaBall:function(){return Mn},Loader:function(){return bn},Message:function(){return ye},Pacman:function(){return Rn},Push:function(){return Tn},Ripple:function(){return _n},RubberBall:function(){return Un},Shake:function(){return Fn},Steps:function(){return $e},Trail:function(){return Hn},Tree:function(){return Xe},WaterFall:function(){return an}});var d=e(861),P=e.n(d),c=e(27424),R=e.n(c),h=e(40477),g=e(96486),m=e(67294),r=e(85893),p=function(u){var v=u.children,y=u.autoPlay,I=y===void 0?!0:y,x=u.interval,E=x===void 0?3e3:x,b=u.width,A=b===void 0?50:b,C=u.defaultAnimationTime,M=C===void 0?1:C,D=(0,m.useState)(I),W=R()(D,2),N=W[0],S=W[1],U=(0,m.useState)(1),j=R()(U,2),O=j[0],B=j[1],T=(0,m.useRef)(O),$=(0,m.useState)(!1),G=R()($,2),z=G[0],w=G[1],X=(0,m.useRef)(null),F=v.length,Q=[v[v.length-1]].concat(P()(v),[v[0]]),J=function(V){X.current&&(z||(w(!0),B(V)))},q=(0,g.debounce)(function(){S(!1),J(O-1)},100),ee=(0,g.debounce)(function(){S(!1),J(O+1)},100),_=function(){w(!1),O===0?B(F):O===F+1&&B(1)};return(0,m.useEffect)(function(){T.current=O},[O]),(0,m.useEffect)(function(){var Z;if(N){var V=function k(){B(function(re){return J(re+1),re+1}),Z=setTimeout(k,M*1e3+50)};V()}return function(){return clearTimeout(Z)}},[N]),(0,r.jsxs)("div",{className:h.Z.carousel,children:[(0,r.jsx)("div",{className:h.Z.trackWrapper,children:(0,r.jsx)("div",{className:h.Z.track,ref:X,style:{transform:"translateX(-".concat(O*A,"%)"),transition:z?"transform ".concat(M,"s linear"):"none"},onTransitionEnd:_,children:Q.map(function(Z,V){return(0,r.jsx)("div",{className:h.Z.slide,style:{flexBasis:"".concat(A,"%")},children:Z},V)})})}),(0,r.jsxs)("div",{className:h.Z.controls,children:[(0,r.jsx)("button",{onClick:q,children:"\u2039"}),(0,r.jsx)("button",{onClick:ee,children:"\u203A"})]})]})},s=function(u){var v=u.items,y=u.animationTime,I=(0,m.useRef)(null);(0,m.useEffect)(function(){I.current&&(I.current.style.animation="".concat(h.Z.marquee," ").concat(y,"s linear infinite"))},[]);var x=[].concat(P()(v),P()(v));return(0,r.jsx)("div",{className:h.Z.scrollContainer,children:(0,r.jsx)("div",{className:h.Z.scrollContent,ref:I,children:x.map(function(E){return(0,r.jsx)("div",{className:h.Z.item,style:{width:"".concat(E.width,"px")},onClick:function(){return E.clickHandler&&E.clickHandler(E)},children:E.element})})})})},l=p,i=e(8598),o=function(u){var v=u.defaultValue,y=u.onChange,I=(0,m.useState)(v||"#ff0000"),x=R()(I,2),E=x[0],b=x[1],A=function(M){b(M.target.value),y&&y(M.target.value)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{type:"color",className:i.Z.colorPicker,value:E,onChange:A}),(0,r.jsx)("span",{className:i.Z.colorValue,children:E})]})},f=o,t=e(73935),n=e(54795),H=.3,ne=function(u){var v=u.src,y=u.alt,I=u.width,x=u.height,E=(0,m.useState)(!1),b=R()(E,2),A=b[0],C=b[1],M=(0,m.useState)(""),D=R()(M,2),W=D[0],N=D[1],S=(0,m.useRef)(""),U=(0,m.useRef)(null),j=(0,m.useRef)(null),O=function(){if(U.current){document.documentElement.style.overflow="clip";var w=U.current.getBoundingClientRect(),X;window.innerWidth>window.innerHeight?X=window.innerHeight*.9/w.height:X=window.innerWidth*.9/w.width;var F=w.left,Q=w.top,J="translate(".concat(F,"px, ").concat(Q,"px) scale(1, 1)");(0,t.flushSync)(function(){N(J),C(!0)});var q="translate(50vw, 50vh) translate(-50%, -50%) scale(".concat(X,", ").concat(X,")");setTimeout(function(){S.current=J,N(q)},50)}},B=function(){N(S.current),setTimeout(function(){C(!1),document.documentElement.style.overflow=""},H*1e3)},T=function(w){w.stopPropagation()},$=function(w){if(j.current){var X=j.current.style.transform;j.current.style.transformOrigin="center center";var F=X.match(/rotate\(([-\d.]+)deg\)/),Q=F?parseFloat(F[1]):0;w?Q+=90:Q-=90;var J=X.replace(/rotate\(([-\d.]+)deg\)/,"rotate(".concat(Q,"deg)"));F?j.current.style.transform=J:j.current.style.transform="".concat(X," rotate(").concat(Q,"deg)")}},G=function(w){if(j.current){w.stopPropagation();var X=w.deltaY,F=j.current.style.transform,Q=F.match(/scale\(([\d.]+),\s*([\d.]+)\)/),J=1,q=1;Q?(J=parseFloat(Q[1]),q=parseFloat(Q[2])):j.current.style.transform="".concat(F," scale(1, 1)");var ee=X>0?.9:1.1;J*=ee,q*=ee;var _=F.replace(/scale\(([\d.]+),\s*([\d.]+)\)/,"scale(".concat(J,", ").concat(q,")"));j.current.style.transform=_}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{ref:U,width:"".concat(I||200),height:"".concat(x||200),src:v||y,className:n.Z.thumbnail,onClick:O}),A&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:n.Z.overlay,onClick:B,children:(0,r.jsx)("img",{width:"".concat(I||200),height:"".concat(x||200),src:v||y,onClick:T,className:n.Z.zoomedImage,ref:j,style:{transform:W,transition:"transform ".concat(H,"s ease")},onWheel:G})}),(0,r.jsxs)("div",{className:n.Z.operationContainer,children:[(0,r.jsx)("div",{className:n.Z.operationItem,onClick:function(){return $(!1)},children:(0,r.jsxs)("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("style",{})}),(0,r.jsx)("path",{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}),(0,r.jsx)("path",{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"})]})}),(0,r.jsx)("div",{className:n.Z.operationItem,onClick:function(){return $(!0)},children:(0,r.jsxs)("svg",{viewBox:"64 64 896 896",focusable:"false",width:"1em",height:"1em",fill:"currentColor",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("style",{})}),(0,r.jsx)("path",{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}),(0,r.jsx)("path",{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"})]})})]})]})]})},ae=ne,le=e(50911),oe=function(u){var v=u.count;return v!=null?(0,r.jsxs)("div",{className:le.Z.messageOutside,children:[(0,r.jsx)("div",{className:le.Z.unread,children:v}),(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z",fill:"currentColor"})]})]}):(0,r.jsx)("div",{className:le.Z.container,children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z",fill:"currentColor"})]})})},ye=oe,te=e(80336),Se=function(u){var v=u.items,y=u.current,I=v.map(function(x,E){return E<y?(0,r.jsxs)("div",{className:te.Z.item,children:[(0,r.jsx)("div",{className:"".concat(te.Z.icon," ").concat(te.Z.iconFinish),children:E+1}),(0,r.jsx)("div",{className:"".concat(te.Z.content," ").concat(te.Z.finish),children:x.title})]}):E==y?(0,r.jsxs)("div",{className:te.Z.item,children:[(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsx)("div",{className:"".concat(te.Z.icon," ").concat(te.Z.iconActive)}),(0,r.jsx)("div",{className:"".concat(te.Z.icon),children:E+1})]}),(0,r.jsx)("div",{className:"".concat(te.Z.content," ").concat(te.Z.active),children:x.title})]}):(0,r.jsxs)("div",{className:te.Z.item,children:[(0,r.jsx)("div",{className:te.Z.icon,children:E+1}),(0,r.jsx)("div",{className:te.Z.content,children:x.title})]})});return(0,r.jsx)("div",{className:te.Z.container,children:I})},$e=Se,De=e(42636),Y=function(K){return K[K.UNCHECKED=0]="UNCHECKED",K[K.CHECKED=1]="CHECKED",K[K.INDETERMINATE=2]="INDETERMINATE",K}(Y||{}),Re=function K(u,v){var y,I=JSON.parse(JSON.stringify(u));if(I!=null&&((y=I.children)!==null&&y!==void 0?y:[]).length>0){var x,E=((x=I.children)!==null&&x!==void 0?x:[]).map(function(b){var A=K(b,I);return A});I.children=E}return I.parent=v!=null&&v.id?v==null?void 0:v.id:(v==null?void 0:v.label)||"",I.id=I.id?I.id:I.label,I.expand=I.expand==null||I.expand==null?!0:I.expand,I.check=I.check==null||I.check==null?Y.UNCHECKED:I.check,I},Fe=function(u,v){u.size!==0&&v.forEach(function(y){var I=u.get(y);if(I){var x;I.check=Y.CHECKED;var E=function M(D){D.check=Y.CHECKED,D.children&&D.children.forEach(function(W){M(W)})};((x=I.children)!==null&&x!==void 0?x:[]).forEach(function(M){E(M)});for(var b=I;u.get(b.parent);)b=u.get(b.parent);var A=b,C=function M(D){if(D.children){D.check=Y.UNCHECKED;var W=D.children.map(function(S){return M(S)}),N=new Set(W);return N.size===1?N.has(Y.CHECKED)?D.check=Y.CHECKED:N.has(Y.UNCHECKED)?D.check=Y.UNCHECKED:D.check=Y.INDETERMINATE:D.check=Y.INDETERMINATE,D.check}else return D.check};C(A)}})},Ze=function(u,v){u.size!==0&&v.forEach(function(y){var I=u.get(y);if(I){var x;I.disabled=!0;var E=function b(A){A.disabled=!0,A.children&&A.children.forEach(function(C){b(C)})};((x=I.children)!==null&&x!==void 0?x:[]).forEach(function(b){E(b)})}})},He=function(u){var v,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],x=(0,m.useState)((v=JSON.parse(JSON.stringify(u)))===null||v===void 0?void 0:v.map(function(M){return Re(M,void 0)})),E=R()(x,2),b=E[0],A=E[1],C=(0,m.useRef)(new Map);return(0,m.useEffect)(function(){var M,D=(M=JSON.parse(JSON.stringify(u)))===null||M===void 0?void 0:M.map(function(S){return Re(S,void 0)});A(D);var W=new Map,N=function S(U){var j;if(U.id&&W.set(U.id,U),U!=null&&((j=U.children)!==null&&j!==void 0?j:[]).length>0){var O;((O=U.children)!==null&&O!==void 0?O:[]).forEach(function(B){S(B)})}};D.map(function(S){N(S)}),C.current=W,Fe(W,y),Ze(W,I)},[u,y,I]),[b,C,A]},Ge=[],we=[],ze=function(u){var v=u.data,y=u.checked,I=y===void 0?Ge:y,x=u.disabled,E=x===void 0?we:x,b=u.onChange,A=He(v,I,E),C=R()(A,3),M=C[0],D=C[1],W=C[2],N=function(O){var B,T=O.target,$=T.checked,G=T.id,z=D.current.get(G);z.check=$?Y.CHECKED:Y.UNCHECKED;var w=function ee(_){_.check=$?Y.CHECKED:Y.UNCHECKED,_.children&&_.children.forEach(function(Z){Z.disabled||ee(Z)})};((B=z.children)!==null&&B!==void 0?B:[]).forEach(function(ee){w(ee)});for(var X=z;D.current.get(X.parent);)X=D.current.get(X.parent);var F=X,Q=function ee(_){if(_.children){_.check=Y.UNCHECKED;var Z=_.children.map(function(k){return ee(k)}),V=new Set(Z);return V.size===1?V.has(Y.CHECKED)?_.check=Y.CHECKED:V.has(Y.UNCHECKED)?_.check=Y.UNCHECKED:_.check=Y.INDETERMINATE:_.check=Y.INDETERMINATE,_.check}else return _.check};Q(F),W(P()(M));var J=JSON.parse(JSON.stringify(z)),q=JSON.parse(JSON.stringify(M));b&&b(J,q)},S=function(O){var B=O.currentTarget.id,T=D.current.get(B);T.expand=!T.expand,W(P()(M))},U=function j(O){var B=function($){var G;return((G=$==null?void 0:$.children)!==null&&G!==void 0?G:[]).length>0?(0,r.jsx)("svg",{width:"1rem",height:"1rem",id:$.id,onClick:S,className:$.expand?De.Z.arrowDown:De.Z.arrowRight,children:(0,r.jsx)("use",{href:"#arrow-down"})}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{style:{display:"inline-block",width:"1rem",height:"1rem"}})})};return O.map(function(T){return(0,r.jsxs)("div",{children:[B(T),(0,r.jsx)("input",{disabled:T.disabled,type:"checkbox",name:T.label,value:T.value,id:T.id,onChange:N,checked:T.check===Y.CHECKED,ref:function(G){G&&(G.indeterminate=T.check===Y.INDETERMINATE)}}),T.label,T.expand&&T.children&&T.children.length>0&&(0,r.jsx)("div",{className:De.Z.childPadding,children:j(T.children)})]},T.value)})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{style:{display:"none"},children:[(0,r.jsx)("symbol",{id:"arrow-down",viewBox:"0 0 1024 1024",children:(0,r.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})}),(0,r.jsx)("symbol",{id:"arrow-right",viewBox:"0 0 1024 1024",children:(0,r.jsx)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"})})]}),U(M)]})},Xe=ze,Ve=e(17061),Ce=e.n(Ve),Ye=e(42122),he=e.n(Ye),Je=e(17156),Be=e.n(Je),de=e(20328),Qe=function(u){var v=u.card,y=u.top,I=u.left,x=u.height,E=u.width,b=u.title,A=u.author,C=u.like;return(0,r.jsxs)("div",{className:de.Z.card,style:{top:"".concat(y,"px"),left:"".concat(I,"px"),width:"".concat(E,"px")},children:[(0,r.jsx)("div",{style:{height:"".concat(x,"px"),width:"".concat(E,"px"),backgroundColor:"".concat(v.backgroundColor)}}),(0,r.jsxs)("div",{className:de.Z.cardFooter,children:[(0,r.jsx)("div",{className:de.Z.title,children:b}),(0,r.jsxs)("div",{className:de.Z.author,children:[(0,r.jsxs)("div",{className:de.Z.authorInfo,children:[(0,r.jsx)("div",{className:de.Z.avatar,style:{backgroundColor:"".concat(v.backgroundColor)}}),(0,r.jsx)("span",{className:de.Z.name,children:A})]}),(0,r.jsx)("svg",{width:"16",height:"16",children:(0,r.jsx)("use",{href:"#like"})}),(0,r.jsx)("div",{className:"like",children:C})]})]})]})},ke=Qe,qe=e(23279),en=e.n(qe),nn=function(u){var v=!1;return function(){for(var y=this,I=arguments.length,x=new Array(I),E=0;E<I;E++)x[E]=arguments[E];v||(v=!0,window.requestAnimationFrame(function(){u.apply(y,x),v=!1}))}},Me=function(u){return u>=1200?5:u>=992?4:u>=768?3:2},We=function(u){return u>=1200||u>=992||u>=768,10},be=function(u){return u>=1200||u>=992||u>=768,24},tn=function(u){var v=(0,m.useRef)(null),y=(0,m.useRef)(Me(window.innerWidth)),I=(0,m.useRef)(We(window.innerWidth)),x=(0,m.useRef)(be(window.innerWidth)),E=(0,m.useRef)(0),b=(0,m.useRef)(Array(y.current).fill(0)),A=(0,m.useState)([]),C=R()(A,2),M=C[0],D=C[1],W=(0,m.useState)([]),N=R()(W,2),S=N[0],U=N[1],j=(0,m.useState)([]),O=R()(j,2),B=O[0],T=O[1],$=(0,m.useState)(window.innerWidth),G=R()($,2),z=G[0],w=G[1],X=(0,m.useRef)(1),F=(0,m.useRef)(!1),Q=en()(function(){if(v.current){var _=v.current.offsetWidth,Z=Me(_),V=We(_),k=be(_),re=(_-(Z-1)*V-2*k)/Z;(Z!==y.current||V!==I.current||k!==x.current||re!==E.current)&&(y.current=Z,I.current=V,x.current=k,E.current=re,w(_))}},200),J=nn(function(){if(v.current){var _=v.current,Z=_.scrollTop,V=_.scrollHeight,k=_.clientHeight,re=V-k-Z;if(re<=50&&!F.current){var ie=function(){var Ie=Be()(Ce()().mark(function fe(){var ce;return Ce()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,u(X.current++);case 2:ce=me.sent,ce?T(function(se){return[].concat(P()(se),P()(ce.map(function(xe){return he()(he()({},xe),{},{like:Number(xe.like)})})))}):F.current=!0;case 4:case"end":return me.stop()}},fe)}));return function(){return Ie.apply(this,arguments)}}();ie()}}}),q=function(Z,V){var k=[];return Z.forEach(function(re){var ie=Math.floor(re.height*V/re.width);k.push({id:re.id,width:V,height:ie,left:0,top:0,auhtor:"",title:"",like:0})}),k},ee=function(Z,V,k,re,ie,Ie){var fe=[],ce=V.current.children;return Array.from(ce).forEach(function(Ee,me){var se=Math.min.apply(Math,P()(Z)),xe=Z.indexOf(se),Gn=xe?k+xe*(re+ie):k,wn=se,zn=Ee.getBoundingClientRect().height;fe.push(he()(he()({},Ie[me]),{},{top:wn,left:Gn})),Z[xe]+=zn+ie}),[fe,Z]};return(0,m.useEffect)(function(){if(v.current){var _=v.current.offsetWidth,Z=Me(_),V=We(_),k=be(_),re=(_-(Z-1)*V-2*k)/Z;y.current=Z,I.current=V,x.current=k,E.current=re;var ie=function(){var fe=Be()(Ce()().mark(function ce(){var Ee;return Ce()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,u(X.current++);case 2:Ee=se.sent,Ee?T(P()(Ee)):F.current=!0;case 4:case"end":return se.stop()}},ce)}));return function(){return fe.apply(this,arguments)}}();ie();var Ie=new ResizeObserver(function(){Q()});return v.current&&Ie.observe(v.current),function(){Ie.disconnect(),X.current=1}}},[]),(0,m.useEffect)(function(){if(!(z<=0)&&!(y.current<=0)&&!(E.current<=0)){var _=q(B,E.current);D(P()(_)),U(P()(_))}},[z,B]),(0,m.useLayoutEffect)(function(){var _;if(v.current&&!(z<=0)){var Z=(_=v.current)===null||_===void 0?void 0:_.children;if(Z.length>0){var V=ee(Array(y.current).fill(0),v,x.current,E.current,I.current,M),k=R()(V,2),re=k[0],ie=k[1];U(P()(re)),b.current=P()(ie)}}},[M]),[B,v,S,J]},rn=function(u){var v=u.getData,y=tn(v),I=R()(y,4),x=I[0],E=I[1],b=I[2],A=I[3];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{style:{display:"none"},children:(0,r.jsx)("symbol",{id:"like",viewBox:"0 0 16 16",children:(0,r.jsx)("path",{fill:"currentColor",fillOpacity:".8",d:"M3.256 3.913a3.083 3.083 0 0 0-.003 4.397L8 12.998l4.743-4.684a3.085 3.085 0 0 0 .001-4.4c-.6-.593-1.4-.914-2.233-.914a3.17 3.17 0 0 0-1.91.635L8 4.087l-.601-.452A3.17 3.17 0 0 0 5.489 3c-.834 0-1.634.321-2.233.913m10.19 5.111-4.748 4.69a.996.996 0 0 1-1.397 0L2.549 9.02a4.083 4.083 0 0 1 .004-5.82A4.17 4.17 0 0 1 5.488 2c.907 0 1.787.29 2.512.835A4.17 4.17 0 0 1 10.51 2c1.093 0 2.146.422 2.936 1.202a4.085 4.085 0 0 1 0 5.822"})})}),(0,r.jsx)("div",{className:de.Z.masonry,ref:E,onScroll:A,children:x.map(function(C){var M;if(b.find(function(D){return D.id===C.id}))return M=b.find(function(D){return D.id===C.id}),(0,r.jsx)(ke,{title:C.title,author:C.auhtor,like:C.like,height:M.height,width:M.width,top:M.top,left:M.left,card:C},C.id)})})]})},an=rn,Te=e(33122),ln=function(){var u=(0,m.useRef)(null),v=(0,m.useRef)(null);return(0,m.useEffect)(function(){if(!(!u.current||!v.current)){var y=u.current,I=v.current,x=0,E=2,b=y.getBoundingClientRect().width,A=function C(){x+=E;var M=I.clientWidth-b;(x<=0||x>=M)&&(E=-E),y.style.transform="translate(".concat(x,"px,-50%)"),requestAnimationFrame(C)};A()}},[]),(0,r.jsx)("div",{className:Te.Z.container,ref:v,children:(0,r.jsx)("div",{className:Te.Z.ball,ref:u})})},on=ln,sn=function(){var u=(0,m.useRef)(null);return(0,m.useEffect)(function(){var v=u.current;if(v){var y=v.getContext("2d");v.width=600,v.height=400;for(var I=10,x=20,E=[],b=0;b<I;b++)E.push({x:Math.random()*(v.width-2*x)+x,y:Math.random()*(v.height-2*x)+x,vx:Math.random()*4,vy:Math.random()*4,radius:x,color:"hsl(".concat(Math.random()*360,", 70%, 60%)")});var A=function(W,N){return Math.hypot(W.x-N.x,W.y-N.y)},C=function(W,N){var S=W.vx,U=W.vy;W.vx=N.vx,W.vy=N.vy,N.vx=S,N.vy=U},M=function D(){y&&(y.clearRect(0,0,v.width,v.height),E.forEach(function(W,N){W.x+=W.vx,W.y+=W.vy,(W.x-W.radius<=0||W.x+W.radius>=v.width)&&(W.vx*=-1),(W.y-W.radius<=0||W.y+W.radius>=v.height)&&(W.vy*=-1);for(var S=N+1;S<E.length;S++){var U=E[S],j=A(W,U);j<W.radius+U.radius&&C(W,U)}y.beginPath(),y.arc(W.x,W.y,W.radius,0,Math.PI*2),y.fillStyle=W.color,y.fill(),y.closePath()}),requestAnimationFrame(D))};M()}},[]),(0,r.jsx)("canvas",{ref:u,style:{border:"0.1rem solid var(--color-bg-secondary)"}})},dn=sn,Oe=e(2412),un=function(){var u=!1,v,y=0,I=0,x=.5,E=.7,b=200,A=(0,m.useRef)(null),C=(0,m.useRef)(null),M=(0,m.useRef)(null),D=function(){if(!C.current)return;function B(){I+=x,y+=I,!(y>=b&&(y=b,I=-I*E,Math.abs(I)<1))&&(C.current&&(C.current.style.top=y+"px"),requestAnimationFrame(B))}B()};(0,m.useEffect)(function(){D()},[]);var W=function(B){if(B.button===0){if(!C.current)return;u=!0,I=0;var T=C.current.getBoundingClientRect();v=B.clientY-T.top-T.height/2,C.current.style.cursor="grabbing",window.addEventListener("mousemove",U),window.addEventListener("mouseup",j)}},N=function(B){},S=function(B){},U=function(B){if(u){var T;if(!C.current||!A.current||!M.current)return;var $=C.current.getBoundingClientRect(),G=A.current.getBoundingClientRect(),z=(T=M.current)===null||T===void 0?void 0:T.getBoundingClientRect();if(B.clientY-($.height/2+v)<G.top)y=0,u=!1;else if(B.clientY+($.height/2-v)>z.top)u=!1;else{var w=B.clientY-G.top-v-$.height/2;y=w}C.current.style.top="".concat(y,"px")}},j=function O(B){if(B.button===0){if(!C.current)return;u=!1,C.current.style.cursor="grab",I=0,window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",O),D()}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{ref:A,className:Oe.Z.container,id:"container",children:[(0,r.jsx)("div",{ref:C,id:"ball",onMouseMove:N,onMouseUp:S,onMouseDown:W,className:Oe.Z.ball,onClick:D}),(0,r.jsx)("div",{id:"ground",ref:M,className:Oe.Z.ground})]})})},cn=un,pe=e(44415),mn=function(u){var v=u.barrage,y=u.containerRef,I=u.onOutScreen,x=(0,m.useRef)(null);return(0,m.useEffect)(function(){var E=x.current;if(!(!E||!y.current)){var b=y.current.offsetWidth,A=E.offsetWidth,C=E.animate([{transform:"translateX(0px)"},{transform:"translateX(-".concat(A+b,"px)")}],{duration:8e3,easing:"linear",fill:"forwards"});E._barrageAnim=C;var M=function D(){var W=E.getBoundingClientRect(),N=y.current.getBoundingClientRect();W.right<N.left?I(v.id):requestAnimationFrame(D)};requestAnimationFrame(M)}},[v.id,y]),(0,r.jsxs)("div",{ref:x,className:pe.Z.barrage,style:{top:"".concat(v.top,"px")},onMouseEnter:function(b){var A;return(A=b.currentTarget._barrageAnim)===null||A===void 0?void 0:A.pause()},onMouseLeave:function(b){var A;return(A=b.currentTarget._barrageAnim)===null||A===void 0?void 0:A.play()},children:[(0,r.jsx)("span",{className:pe.Z.text,children:v.text}),(0,r.jsx)("button",{className:pe.Z.likeBtn,onClick:function(b){b.stopPropagation(),alert("\u4F60\u70B9\u8D5E\u4E86\uFF1A".concat(v.text))},children:"\u2764\uFE0F"})]})},vn=mn,fn=0,hn=function(){var u=(0,m.useState)([]),v=R()(u,2),y=v[0],I=v[1],x=(0,m.useRef)(null),E=function(M){var D=fn++,W=Math.random()*80+10,N={id:D,text:M,top:W};I(function(S){return[].concat(P()(S),[N])})},b=function(M){M.preventDefault();var D=M.currentTarget.elements.namedItem("barrageText"),W=D.value.trim();W&&(E(W),D.value="")},A=function(M,D){if(!(!M||!x.current)){var W=x.current.offsetWidth,N=M.offsetWidth,S=M.animate([{transform:"translateX(".concat(0,"px)")},{transform:"translateX(-".concat(N+W,"px)")}],{duration:8e3,easing:"linear",fill:"forwards"});M._barrageAnim=S;var U=function j(){var O=M.getBoundingClientRect(),B=x.current.getBoundingClientRect();O.right<B.left?I(function(T){return T.filter(function($){return $.id!==D})}):requestAnimationFrame(j)};requestAnimationFrame(U)}};return(0,r.jsxs)("div",{className:pe.Z.wrapper,children:[(0,r.jsxs)("form",{onSubmit:b,className:pe.Z.inputBar,children:[(0,r.jsx)("input",{name:"barrageText",placeholder:"\u53D1\u9001\u5F39\u5E55..."}),(0,r.jsx)("button",{type:"submit",children:"\u53D1\u9001"})]}),(0,r.jsx)("div",{className:pe.Z.barrageContainer,ref:x,children:y.map(function(C){return(0,r.jsx)(vn,{barrage:C,containerRef:x,onOutScreen:function(D){return I(function(W){return W.filter(function(N){return N.id!==D})})}},C.id)})})]})},pn=hn,ge=e(72961),gn=e(26330),In=e(69539),En=e(94933),xn=e(51468),yn=[{id:"home",icon:(0,r.jsx)(gn.Z,{}),label:"\u9996\u9875"},{id:"cart",icon:(0,r.jsx)(In.Z,{}),label:"\u8D2D\u7269\u8F66"},{id:"me",icon:(0,r.jsx)(En.Z,{}),label:"\u6211\u7684"},{id:"tv",icon:(0,r.jsx)(xn.Z,{}),label:"\u89C6\u9891"}],Le=0,Ae=0,Cn=function(){var u=(0,m.useState)(yn),v=R()(u,2),y=v[0],I=v[1],x=(0,m.useRef)(y),E=(0,m.useRef)(null),b=(0,m.useState)(null),A=R()(b,2),C=A[0],M=A[1],D=(0,m.useRef)(null),W=function(O){return function(B){E.current===null&&M(O)}},N=function(O){return function(B){if(E.current=O,document.addEventListener("mousemove",S),document.addEventListener("mouseup",U),!!D.current){var T=Array.from(D.current.children),$=T[O].cloneNode(!0);$.style.position="fixed",$.style.zIndex="1000";var G=T[O].getBoundingClientRect(),z=B.clientX,w=B.clientY;console.log(G.left,G.top,G.width,G.height),Le=z-G.left,Ae=w-G.top,$.style.top="".concat(T[O].offsetTop,"px"),$.style.left="".concat(T[O].offsetLeft,"px"),D.current.insertAdjacentElement("afterend",$),T[O].style.opacity="0.2"}}},S=function(O){if(!(E.current===null||!D.current)){var B=E.current,T=Array.from(D.current.children),$=O.clientX,G=O.clientY,z=D.current.getBoundingClientRect().left,w=D.current.nextSibling;if(w){var X=T[B].getBoundingClientRect();w.style.transform="translate(".concat($-Le-X.left,"px,").concat(G-Ae-X.top,"px)")}for(var F=0;F<T.length;F++){var Q=T[F].getBoundingClientRect(),J=z+T[F].offsetLeft+Q.width/2;if(console.log("offsetLeft:",T[F].offsetLeft),F<B)if($<J){var q=T[F+1].getBoundingClientRect(),ee=z+T[F+1].offsetLeft+q.width/2;T[F].style.transform="translateX(".concat(ee-J,"px)")}else T[F].style.transform="translateX(0px)";if(F>B)if($>J){console.log("mouseX:",$,"midX:",J);var _=T[F-1].getBoundingClientRect(),Z=z+T[F-1].offsetLeft+_.width/2;console.log("preRect.left:",_.left,"prevRect.width:",_.width),console.log("prevRectMidX:",Z),T[F].style.transform="translateX(".concat(-(J-Z),"px)")}else T[F].style.transform="translateX(0px)"}}},U=function j(){var O,B,T=function(){if(!D.current)return[];var X=D.current.nextSibling,F=Array.from(D.current.children);F.splice(E.current,1,X);var Q=F.map(function(q,ee){return{el:q,order:ee}});Q.sort(function(q,ee){var _=q.el.getBoundingClientRect(),Z=ee.el.getBoundingClientRect();return _.left-Z.left});var J=Q.map(function(q){return q.order});return J},$=T();E.current=null,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",j);var G=Array.from(((O=D.current)===null||O===void 0?void 0:O.children)||[]);G.forEach(function(w){w.style.cssText=""});var z=$.map(function(w){return x.current[w]});I(z),x.current=z,M(null),(B=D.current)===null||B===void 0||(B=B.nextSibling)===null||B===void 0||B.remove()};return(0,r.jsx)("div",{className:ge.Z.container,children:(0,r.jsx)("div",{className:ge.Z.bottomMenu,ref:D,children:y==null?void 0:y.map(function(j,O){var B;return E.current?B="":B=C==O?ge.Z.menuItemHover:"",(0,r.jsxs)("div",{className:"".concat(ge.Z.menuItem," ").concat(E.current===O?ge.Z.dragging:"","  ").concat(B," "),onMouseDown:N(O),onMouseEnter:W(O),onMouseLeave:function(){return M(null)},children:[j.icon,(0,r.jsx)("span",{className:ge.Z.label,children:j.label})]},j.id)})})})},Pn=Cn,je=e(16582),ue=function(K){return K.left="left",K.right="right",K.static="static",K}(ue||{}),Dn=function(){var u=(0,m.useRef)(null),v=(0,m.useRef)(null),y=!1,I=0,x=0,E=0,b=0,A,C,M=!1,D=.98,W=function(O){y=!0,I=O.clientX,E=O.clientX,cancelAnimationFrame(A)},N=function(O){if(!(!u.current||!v.current)&&y){var B=O.clientX-I,T=v.current.getBoundingClientRect(),$=u.current.getBoundingClientRect();B>0?(C=ue.right,T.right-$.right<0&&(B=0)):(C=ue.left,$.left-T.left<0&&(B=0)),x+=B,u.current.style.transform="translate(".concat(x,"px,-50%)"),b=O.clientX-E,E=O.clientX,I=O.clientX}},S=function(){y=!1,U()},U=function j(){if(!(!u.current||!v.current)){b*=D,x+=b;var O=v.current.getBoundingClientRect(),B=u.current.getBoundingClientRect();C===ue.right?O.right-B.right<0&&(x=x- -(O.right-B.right),M=!0,C=ue.left,b=-b):C===ue.left&&B.left-O.left<0&&(x=x-(B.left-O.left),M=!0,C=ue.right,b=-b),u.current.style.transform="translate(".concat(x,"px,-50%)"),Math.abs(b)>.1?A=requestAnimationFrame(j):(M=!1,C=ue.static)}};return(0,m.useEffect)(function(){if(u.current){var j=u.current;return j.addEventListener("mousedown",W),window.addEventListener("mousemove",N),window.addEventListener("mouseup",S),function(){j.removeEventListener("mousedown",W),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",S)}}},[]),(0,r.jsx)("div",{className:je.Z.container,ref:v,children:(0,r.jsx)("div",{ref:u,className:je.Z.ball})})},Mn=Dn,Ne=e(48094),Wn=function(){return(0,r.jsx)("div",{className:Ne.Z.BFC,style:{display:"flex",width:"100%",height:"5rem",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:Ne.Z.loader})})},bn=Wn,ve=e(40986),On=function(){return(0,r.jsxs)("div",{className:ve.Z.pacMan,children:[(0,r.jsx)("div",{className:ve.Z.eyeCenter,children:(0,r.jsx)("div",{className:ve.Z.eye})}),(0,r.jsx)("div",{className:ve.Z.mouth1}),(0,r.jsx)("div",{className:ve.Z.mouth2}),(0,r.jsx)("div",{className:ve.Z.bean1}),(0,r.jsx)("div",{className:ve.Z.bean2})]})},Rn=On,Pe=e(13251),Bn=function(u){var v=u.items,y=u.onChange;if(!Array.isArray(v))throw Error("items must be an array");var I=(0,m.useState)(Array(v.length).fill(!1)),x=R()(I,2),E=x[0],b=x[1],A=function(M,D){E[M]=!E[M],b(P()(E)),y(D||String(M))};return(0,m.useEffect)(function(){},[]),(0,r.jsx)("div",{className:Pe.Z.container,children:v.map(function(C,M){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:Pe.Z.exist,onClick:function(){return A(M,C.key)},children:C.exist}),(0,r.jsx)("div",{className:"".concat(Pe.Z.expander," ").concat(E[M]?Pe.Z.open:""),children:C.expander})]})})})},Tn=Bn,Ln=e(70215),An=e.n(Ln),_e=e(99515),jn=["children","onClick"],Nn=function(u){var v=u.children,y=u.onClick,I=An()(u,jn),x=(0,m.useRef)(null),E=function(C){if(x.current){var M=x.current,D=M.getBoundingClientRect(),W=Math.max(D.width,D.height),N=C.clientX-D.left-W/2,S=C.clientY-D.top-W/2,U=document.createElement("span");U.className=_e.Z.ripple,U.style.width=U.style.height="".concat(W,"px"),U.style.left="".concat(N,"px"),U.style.top="".concat(S,"px"),M.appendChild(U),setTimeout(function(){U.remove()},6e3)}},b=function(C){E(C),y==null||y(C)};return(0,r.jsx)("div",he()(he()({ref:x,className:_e.Z.rippleButton,onClick:b},I),{},{children:v}))},_n=Nn,Ke=e(31978),Kn=function(){var u=(0,m.useRef)(null),v=(0,m.useState)(!1),y=R()(v,2),I=y[0],x=y[1],E=(0,m.useState)(0),b=R()(E,2),A=b[0],C=b[1],M=function(S){u.current&&(x(!0),C(S.clientX),u.current.style.transition="none")},D=function(S){if(I&&u.current){var U=S.clientX-A,j=1+Math.min(Math.abs(U)/150,.5),O=U>=0?1:-1;u.current.style.transform="translate(".concat(U,"px,-50%) scaleX(").concat(j,")")}},W=function(){I&&u.current&&(x(!1),u.current.style.transition="transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1)",u.current.style.transform="translate(0,-50%) scaleX(1)")};return(0,r.jsx)("div",{className:Ke.Z.container,children:(0,r.jsx)("div",{ref:u,className:Ke.Z.ball,onMouseDown:M,onMouseMove:D,onMouseUp:W,onMouseLeave:W})})},Un=Kn,Sn=e(78131),$n=function(u){var v=u.children;return(0,r.jsx)("div",{className:Sn.Z.shakeContainer,children:v})},Fn=$n,Ue=e(71188),Zn=function(){var u=(0,m.useRef)(null),v=function(I){if(u.current){var x=u.current.getBoundingClientRect(),E=document.createElement("div");E.className=Ue.Z.trail,E.style.left="".concat(I.clientX-x.left,"px"),E.style.top="".concat(I.clientY-x.top,"px"),E.style.transform="translate(-50%,-50%)",u.current.appendChild(E),setTimeout(function(){E.remove()},500)}};return(0,r.jsx)("div",{className:Ue.Z.container,onMouseMove:v,ref:u})},Hn=Zn},51014:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"TODO",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"autoPlay",paraId:1,tocIndex:4},{value:"\u662F\u5426\u81EA\u52A8\u64AD\u653E",paraId:1,tocIndex:4},{value:"boolean",paraId:1,tocIndex:4},{value:"true",paraId:1,tocIndex:4},{value:"width",paraId:1,tocIndex:4},{value:"\u6BCF\u4E2A\u5143\u7D20\u7684\u5BBD\u5EA6",paraId:1,tocIndex:4},{value:"number",paraId:1,tocIndex:4},{value:"50",paraId:1,tocIndex:4},{value:"defaultAnimationTime",paraId:1,tocIndex:4},{value:"\u5207\u6362\u5143\u7D20\u65F6\uFF0C\u52A8\u753B\u65F6\u95F4",paraId:1,tocIndex:4},{value:"number",paraId:1,tocIndex:4},{value:"1\uFF081s \u7684\u610F\u601D\uFF09",paraId:1,tocIndex:4},{value:"\u53C2\u6570",paraId:2,tocIndex:5},{value:"\u8BF4\u660E",paraId:2,tocIndex:5},{value:"\u7C7B\u578B",paraId:2,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:5},{value:"animationTime",paraId:2,tocIndex:5},{value:"\u52A8\u753B\u65F6\u95F4",paraId:2,tocIndex:5},{value:"number",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"items",paraId:2,tocIndex:5},{value:"\u5B50\u5143\u7D20\u96C6\u5408",paraId:2,tocIndex:5},{value:"{ element: React.ReactNode; width: number }[]",paraId:2,tocIndex:5},{value:"-",paraId:2,tocIndex:5},{value:"\u65B9\u6CD5",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u53C2\u6570",paraId:3,tocIndex:5},{value:"\u8FD4\u56DE\u503C",paraId:3,tocIndex:5},{value:"clickHandler",paraId:3,tocIndex:5},{value:"\u5143\u7D20\u88AB\u70B9\u51FB\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:3,tocIndex:5},{value:"\u5B50\u5143\u7D20\u672C\u8EAB",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u8FD9\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u8F6E\u64AD\u56FE\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u591A\u4E2A\u9879\u76EE\u3002\u5B83\u652F\u6301\u81EA\u52A8\u8F6E\u64AD\u3001\u5DE6\u53F3\u5207\u6362\u7B49\u529F\u80FD\u3002",paraId:4,tocIndex:6},{value:`
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
  `,paraId:6,tocIndex:6}]},81375:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u62FE\u53D6\u989C\u8272\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"defaultValue",paraId:1,tocIndex:2},{value:"\u989C\u8272\u9ED8\u8BA4\u503C,\u652F\u6301 RGB,HSB,HEX",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u65B9\u6CD5",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u989C\u8272\u53D8\u5316\u65F6\u7684\u56DE\u8C03\u51FD\u6570",paraId:2,tocIndex:2},{value:"mode: \u989C\u8272\u6A21\u578B\uFF08RGB/HSB/HEX\uFF09, color: \u989C\u8272\u7F16\u7801",paraId:2,tocIndex:2},{value:"void",paraId:2,tocIndex:2},{value:'\u4F7F\u7528\u7684\u662F<input type = "color"/>\u5B9E\u73B0\u7684',paraId:3,tocIndex:3},{value:"RGB\u3001HSB\u3001HEX \u8FD9\u4E09\u79CD\u989C\u8272\u6A21\u578B\uFF0C\u5B83\u4EEC\u7684\u8BBE\u8BA1\u76EE\u7684\u4E0D\u540C\uFF1ARGB \u662F \u201C\u7ED9\u673A\u5668\u7528\u7684\u663E\u793A\u6807\u51C6\u201D\uFF0CHEX \u662F \u201C\u7ED9\u4EE3\u7801\u7528\u7684 RGB \u7B80\u5316\u683C\u5F0F\u201D\uFF0C\u800C HSB \u662F \u201C\u7ED9\u4EBA\u7528\u7684\u89C6\u89C9\u76F4\u89C9\u6A21\u578B\u201D\u3002\u56E0\u6B64\uFF0CHSB \u6700\u80FD\u5E2E\u52A9\u4EBA\u7C7B\u7406\u89E3\u989C\u8272\u3002",paraId:4,tocIndex:3},{value:"\u7EF4\u5EA6",paraId:5,tocIndex:3},{value:"\u542B\u4E49",paraId:5,tocIndex:3},{value:"\u8303\u56F4",paraId:5,tocIndex:3},{value:"\u4EBA\u7C7B\u611F\u77E5\u5BF9\u5E94",paraId:5,tocIndex:3},{value:"\u793A\u4F8B\uFF08\u4EE5\u7EA2\u8272\u4E3A\u4F8B\uFF09",paraId:5,tocIndex:3},{value:"Hue\uFF08\u8272\u76F8\uFF09",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u79CD\u7C7B\u201D",paraId:5,tocIndex:3},{value:"0\xB0~360\xB0",paraId:5,tocIndex:3},{value:"\u7EA2\u3001\u9EC4\u3001\u7EFF\u3001\u84DD\u7B49 \u201C\u57FA\u7840\u8272\u201D",paraId:5,tocIndex:3},{value:"0\xB0= \u7EAF\u7EA2\uFF0C60\xB0= \u9EC4\uFF0C120\xB0= \u7EFF",paraId:5,tocIndex:3},{value:"Saturation",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u7EAF\u5EA6 / \u9C9C\u8273\u5EA6\u201D",paraId:5,tocIndex:3},{value:"0%~100%",paraId:5,tocIndex:3},{value:"\u9C9C\u8273\uFF08100%\uFF09\u2192 \u7070\u6697\uFF080%\uFF09",paraId:5,tocIndex:3},{value:"100%= \u7EAF\u7EA2\uFF0C50%= \u6DE1\u7EA2\uFF0C0%= \u7070",paraId:5,tocIndex:3},{value:"Brightness",paraId:5,tocIndex:3},{value:"\u989C\u8272\u7684 \u201C\u660E\u6697\u7A0B\u5EA6\u201D",paraId:5,tocIndex:3},{value:"0%~100%",paraId:5,tocIndex:3},{value:"\u660E\u4EAE\uFF08100%\uFF09\u2192 \u9ED1\u6697\uFF080%\uFF09",paraId:5,tocIndex:3},{value:"100%= \u4EAE\u7EA2\uFF0C50%= \u6697\u7EA2\uFF0C0%= \u9ED1",paraId:5,tocIndex:3}]},9209:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:`\u7EC4\u4EF6\u8BBE\u8BA1\u65F6\u9700\u8981\u8003\u8651\uFF1A
\u8F93\u5165\uFF0C\u8F93\u51FA`,paraId:0}]},78161:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u9700\u8981\u663E\u793A\u56FE\u7247\u65F6\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"height",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"src",paraId:1,tocIndex:2},{value:"\u56FE\u7247\u8D44\u6E90",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u4EE5\u539F\u56FE\u7247\u4E3A\u53C2\u7167\u70B9\u653E\u5927\uFF08\u7F29\u653E\u539F\u59CB\u4F4D\u7F6E\uFF09",paraId:2,tocIndex:3},{value:"\u5168\u5C4F\u9884\u89C8\u65F6\u56FE\u7247\u5C45\u4E2D",paraId:2,tocIndex:3},{value:"\u653E\u5927\u8FC7\u7A0B\u5E26\u52A8\u753B",paraId:2,tocIndex:3},{value:"\u80CC\u666F\u906E\u7F69 + \u5173\u95ED\u6309\u94AE",paraId:2,tocIndex:3},{value:`
\u5B9E\u73B0\u65B9\u6848\uFF1A\u4F7F\u7528 CSS transform + transform-origin + transition + JavaScript \u63A7\u5236\u3002\u5173\u952E\u70B9\uFF1A\u8BB0\u5F55\u539F\u56FE\u7684\u4F4D\u7F6E\uFF08getBoundingClientRect\uFF09\uFF0C\u628A\u6A21\u6001\u56FE\u8BBE\u7F6E\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4ECE\u539F\u56FE\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u4F7F\u7528 transform: scale(...) + transform-origin \u5B9E\u73B0\u5E73\u6ED1\u653E\u5927\u3002
`,paraId:3,tocIndex:3},{value:"\u65CB\u8F6C\u7684\u5B9E\u73B0\uFF0C\u662F\u901A\u8FC7transform-origin: center center \u8BBE\u7F6E\u9009\u62E9\u4E2D\u5FC3\uFF0C\u518D\u5728\u5DF2\u6709\u65CB\u8F6C\u7684\u57FA\u7840\u4E0A\u987A\u65F6\u9488\u548C\u9006\u65F6\u9488\u65CB\u8F6C",paraId:4,tocIndex:3}]},5357:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u663E\u793A\u672A\u8BFB\u4FE1\u606F\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"count",paraId:1,tocIndex:2},{value:"\u663E\u793A\u672A\u8BFB\u4FE1\u606F\u6570\u91CF\u3002\u6CA1\u6709\u8FD9\u4E2A\u53C2\u6570\u5C31\u5355\u7EAF\u63D0\u793A\u6709\u672A\u8BFB\u4FE1\u606F",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u4F7F\u7528\u4F2A\u5143\u7D20::after ,'position:absolute'\u548C left\u3001top \u5B9E\u73B0\u3001",paraId:2,tocIndex:3},{value:"::after \u63D2\u5165\u7684\u4F4D\u7F6E\u662F\u5185\u5BB9\uFF08content\uFF09\u7684\u6700\u540E\u9762\uFF0C\u5C31\u50CF\u4F60\u5728\u5143\u7D20\u672B\u5C3E\u52A0\u4E86\u4E00\u6BB5\u6587\u5B57\uFF1B",paraId:3,tocIndex:3},{value:"\u5B83\u7684\u6E32\u67D3\u4F4D\u7F6E\u4ECD\u5728 content \u533A\u57DF\u4E4B\u5185\uFF1B",paraId:3,tocIndex:3}]},44124:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u53C2\u6570",paraId:0,tocIndex:2},{value:"\u8BF4\u660E",paraId:0,tocIndex:2},{value:"\u7C7B\u578B",paraId:0,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:2},{value:"current",paraId:0,tocIndex:2},{value:"\u5DF2\u6267\u884C\u5B8C\u54EA\u4E2A\u6B65\u9AA4",paraId:0,tocIndex:2},{value:"number",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"items",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"{title:string}[]",paraId:0,tocIndex:2},{value:"-",paraId:0,tocIndex:2},{value:"\u7ED3\u5408flex\u5E03\u5C40\u548C\u4F2A\u5143\u7D20::after\u5B9E\u73B0",paraId:1,tocIndex:3}]},92395:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u53C2\u6570",paraId:0,tocIndex:6},{value:"\u8BF4\u660E",paraId:0,tocIndex:6},{value:"\u7C7B\u578B",paraId:0,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:6},{value:"data",paraId:0,tocIndex:6},{value:"\u6570\u636E\u6E90",paraId:0,tocIndex:6},{value:"Array<{labe:string,value:string,children:[]}>",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"onChange",paraId:0,tocIndex:6},{value:"\u70B9\u51FB\u9009\u4E2D\u8282\u70B9\u65F6\u7684\u56DE\u8C03",paraId:0,tocIndex:6},{value:"(checkNode, currentTree) => void",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"selected",paraId:0,tocIndex:6},{value:"\u8BBE\u7F6E\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\u3002\u5982\u679C\u7236\u8282\u70B9\u88AB\u9009\u4E2D\uFF0C\u5B50\u8282\u70B9\u90E8\u5206\u9009\u4E2D\uFF0C\u5219\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u8BBE\u7F6E\u65E0\u6548\uFF0C\u5B50\u8282\u70B9\u4F1A\u88AB\u5168\u90E8\u9009\u62E9",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"-",paraId:0,tocIndex:6},{value:"expand",paraId:0,tocIndex:6},{value:"\u8BBE\u7F6E\u5C55\u5F00\u7684\u8282\u70B9",paraId:0,tocIndex:6},{value:"\u5BF9\u8282\u70B9\u7684\u64CD\u4F5C\u6709\u9009\u4E2D\u3001\u5C55\u5F00\u3001\u7981\u7528\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u6765\u8BBE\u7F6E\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u5728 treeData \u7684\u6BCF\u4E2A\u8282\u70B9\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u4F46\u6B64\u65F6\u8981\u4FDD\u8BC1\u5B50\u8282\u70B9\u548C\u7236\u8282\u70B9\u90FD\u8BBE\u7F6E\u6B63\u786E\u3002\u4F8B\u5982\u8BBE\u7F6E\u81EA\u5DF1\u70B9\u4E3A\u5168\u9009\uFF0C\u7236\u8282\u70B9\u5E76\u4E0D\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u9009\u62E9\uFF1B\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u662F\uFF0C\u901A\u8FC7 tree \u7684\u5C5E\u6027\u6765\u8BBE\u7F6E",paraId:1,tocIndex:7},{value:"\u53C2\u6570",paraId:2,tocIndex:7},{value:"\u8BF4\u660E",paraId:2,tocIndex:7},{value:"\u7C7B\u578B",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:7},{value:"expand",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u662F\u5426\u9ED8\u8BA4\u5C55\u5F00",paraId:2,tocIndex:7},{value:"boolean",paraId:2,tocIndex:7},{value:"false",paraId:2,tocIndex:7},{value:"label",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u5C55\u793A\u6807\u7B7E",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"value",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u503C",paraId:2,tocIndex:7},{value:"string",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"id",paraId:2,tocIndex:7},{value:"\u8282\u70B9 id",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u9ED8\u8BA4\u662F label \u7684\u503C",paraId:2,tocIndex:7},{value:"check",paraId:2,tocIndex:7},{value:"\u8282\u70B9\u9009\u4E2D\u7C7B\u578B",paraId:2,tocIndex:7},{value:"0: \u672A\u9009\u62E9\uFF0C1\uFF1A\u5168\u9009\uFF0C2 \u8868\u793A\u534A\u9009",paraId:2,tocIndex:7},{value:"-",paraId:2,tocIndex:7},{value:"\u7ED3\u5408\u6811\u7684\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u7B97\u6CD5\u548C HashMap \u5B58\u50A8\u6765\u5B9E\u73B0\u3002\u5F53\u6539\u53D8\u5F53\u524D\u8282\u70B9\u7684\u72B6\u6001\u65F6\uFF0C\u5728 hashMap \u4E2D\u627E\u5230\u5F53\u524D\u8282\u70B9\u3002",paraId:3,tocIndex:8},{value:"\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\u5B50\u5B59\u8282\u70B9\uFF0C\u4FEE\u6539\u76F8\u5E94\u7684\u72B6\u6001\u3002",paraId:4,tocIndex:8},{value:"\u83B7\u53D6\u5F53\u524D\u8282\u70B9\u7684\u6700\u9AD8\u5C42\u7236\u8282\u70B9\u3002\u7136\u540E\u518D\u901A\u8FC7\u6DF1\u5EA6\u4F18\u5148\u904D\u5386\uFF0C\u6839\u636E\u5B50\u8282\u70B9\u7684\u72B6\u6001\uFF0C\u8BBE\u7F6E\u7236\u8282\u70B9\u72B6\u6001\u3002\u5982\u6240\u6709\u5B50\u8282\u70B9\u7684\u72B6\u6001\u90FD\u4E3A\u9009\u4E2D\u72B6\u6001\uFF0C\u5219\u7236\u8282\u70B9\u7684\u9009\u4E2D\u72B6\u6001\u4E3A\u5168\u9009\uFF1B\u5982\u679C\u5B50\u8282\u70B9\u6709\u201C\u5168\u9009\u201D\u548C\u201C\u6CA1\u6709\u9009\u4E2D\u201D\u4E24\u4E2D\u72B6\u6001\uFF0C\u5219\u7236\u8282\u70B9\u72B6\u6001\u8BBE\u7F6E\u4E3A\u534A\u9009\u3002",paraId:4,tocIndex:8}]},97801:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u9002\u7528\u4E8E\u5185\u5BB9\u5C3A\u5BF8\u4E0D\u4E00\u6837\u65F6\uFF0C\u63D0\u5347\u4FE1\u606F\u5BC6\u5EA6\u3002",paraId:0,tocIndex:0},{value:"\u65B9\u6CD5",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"getData",paraId:1,tocIndex:2},{value:"\u83B7\u53D6\u7011\u5E03\u6D41\u6570\u636E",paraId:1,tocIndex:2},{value:"(page: number) => Promise<CardType[]>\u3002page\u662F\u7B2C\u51E0\u9875\u7684\u610F\u601D\uFF0CCardType { auhtor: string; title: string;id: string;  width: number;  height: number;  left: number;  top: number;  like: number;}",paraId:1,tocIndex:2},{value:"\u4F7F\u7528 Masonry\u7B97\u6CD5\uFF0C\u6CA1\u6E32\u67D3\u4E00\u5F20\u5361\u7247\u5C31\u8981\u91CD\u65B0\u5224\u65AD\u54EA\u4E00\u5217\u6700\u77ED\uFF0C\u7136\u540E\u628ACard\u63D2\u5165\u5230\u8BE5\u5217\u4E0B\u65B9\u3002left top \u5B9E\u73B0\u7011\u5E03\u6D41\uFF0C\u901A\u8FC7\u83B7\u53D6\u771F\u5B9E dom\uFF0C\u786E\u5B9A left \u548C top",paraId:2,tocIndex:3}]},93685:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"clientWidth \u662F\u4E00\u4E2A DOM \u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u5B83\u8FD4\u56DE\u7684\u662F\uFF1Adom \u5143\u7D20\u53EF\u89C6\u5185\u5BB9\u533A\u57DF\u7684\u5BBD\u5EA6\uFF0C\u4E0D\u5305\u62EC\u8FB9\u6846\uFF08border\uFF09\u3001\u6EDA\u52A8\u6761\uFF08scrollbar\uFF09\u3001\u5916\u8FB9\u8DDD\uFF08margin\uFF09\uFF0C\u4F46\u5305\u62EC\u5185\u8FB9\u8DDD\uFF08padding\uFF09",paraId:0,tocIndex:2},{value:"css \u4E2D translateX \u548C left \u7684\u533A\u522B",paraId:1,tocIndex:2},{value:"left \u662F\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u4F1A\u6539\u53D8\u5143\u7D20\u7684\u5E03\u5C40\u4F4D\u7F6E\uFF1B",paraId:2,tocIndex:2},{value:"translateX \u662F\u53D8\u6362\u5C5E\u6027\uFF0C\u4E0D\u5F71\u54CD\u5E03\u5C40\uFF0C\u53EA\u662F\u201C\u89C6\u89C9\u4E0A\u7684\u79FB\u52A8\u201D\u3002",paraId:2,tocIndex:2}]},75860:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u591A\u7403\u78B0\u649E\uFF082D\uFF09\u52A8\u753B\u6548\u679C",paraId:0,tocIndex:2},{value:"\u6BCF\u4E2A\u7403\u5177\u6709\u72B6\u6001\uFF1A\u4F4D\u7F6E\uFF08x, y\uFF09\u3001\u901F\u5EA6\uFF08vx, vy\uFF09\u3001\u534A\u5F84\u3001\u989C\u8272\u7B49",paraId:1,tocIndex:2},{value:"\u66F4\u65B0\u4F4D\u7F6E\uFF1A\u6BCF\u4E00\u5E27\u6839\u636E\u901F\u5EA6\u66F4\u65B0\u7403\u7684\u4F4D\u7F6E",paraId:1,tocIndex:2},{value:"\u8FB9\u754C\u53CD\u5F39\uFF1A\u5982\u679C\u7403\u649E\u5230\u5BB9\u5668\u8FB9\u7F18\uFF0C\u53CD\u5F39\uFF08\u53CD\u8F6C\u901F\u5EA6\u65B9\u5411\uFF09",paraId:1,tocIndex:2},{value:"\u7403\u4E0E\u7403\u78B0\u649E\u68C0\u6D4B\uFF1A\u5982\u679C\u4E24\u4E2A\u7403\u76F8\u4EA4\uFF0C\u5219\u5904\u7406\u78B0\u649E\u54CD\u5E94\uFF08\u4EA4\u6362\u901F\u5EA6\u6216\u53CD\u5F39\u65B9\u5411\uFF09",paraId:1,tocIndex:2},{value:"Canvas \u548C DOM \u5143\u7D20\uFF08\u5982 div\uFF09\u5728\u52A8\u753B\u5904\u7406\u4E0A\u5404\u6709\u4F18\u52A3\u3002",paraId:2,tocIndex:2},{value:"Canvas \u66F4\u9002\u5408\u5927\u91CF\u5143\u7D20\u7684\u9AD8\u9891\u52A8\u753B\u3002Canvas \u662F\u57FA\u4E8E\u50CF\u7D20\u7ED8\u5236\u7684\u4F4D\u56FE\u6E32\u67D3\uFF0C\u6BCF\u4E00\u5E27\u662F\u91CD\u753B\u6574\u4E2A\u753B\u9762\u3002\u76F8\u6BD4\u4E4B\u4E0B\uFF0CDOM \u662F\u57FA\u4E8E\u8282\u70B9\u7684\uFF0C\u6BCF\u4E2A\u5C0F\u7403\u4E00\u4E2A div\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u9891\u7E41\u5730\uFF1A\u91CD\u6392\uFF08reflow\uFF09\u3001\u91CD\u7ED8\uFF08repaint\uFF09\u3001\u5904\u7406\u590D\u6742\u7684 DOM \u7ED3\u6784",paraId:3,tocIndex:2},{value:"\u7CBE\u7EC6\u63A7\u5236\u7ED8\u56FE\u548C\u7269\u7406\u884C\u4E3A\u3002",paraId:3,tocIndex:2},{value:"\u907F\u514D\u8FC7\u591A DOM \u64CD\u4F5C\u5BFC\u81F4\u6027\u80FD\u74F6\u9888\u3002DOM \u64CD\u4F5C\u5C5E\u4E8E\u6602\u8D35\u64CD\u4F5C\uFF0C\u5C24\u5176\u662F\u5F53\u6D89\u53CA\u6210\u767E\u4E0A\u5343\u4E2A\u8282\u70B9\u65F6\u3002Canvas \u53EA\u7BA1\u7406\u4E00\u4E2A canvas \u5143\u7D20\uFF0C\u6240\u6709\u66F4\u65B0\u90FD\u662F\u5728\u663E\u5B58\u4E2D\u5B8C\u6210\u7684\u3002",paraId:3,tocIndex:2},{value:"\u573A\u666F",paraId:4,tocIndex:2},{value:"\u66F4\u5408\u9002\u7684\u6280\u672F",paraId:4,tocIndex:2},{value:"\u7F51\u9875\u5E03\u5C40\u3001\u53EF\u8BBF\u95EE\u6027\u597D\u3001\u6613\u4EA4\u4E92",paraId:4,tocIndex:2},{value:"DOM + CSS + JS",paraId:4,tocIndex:2},{value:"\u6E38\u620F\u3001\u56FE\u5F62\u6A21\u62DF\u5668\u3001\u7C92\u5B50\u7CFB\u7EDF",paraId:4,tocIndex:2},{value:"Canvas / WebGL",paraId:4,tocIndex:2}]},97590:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u901A\u8FC7 e.clientX/Y \u83B7\u53D6\u9F20\u6807\u76F8\u5BF9\u4E8E",paraId:0,tocIndex:2},{value:"\u89C6\u53E3",paraId:0,tocIndex:2},{value:"\u4F4D\u7F6E\uFF0Cdom.getBoundingClientRect().top/left \u83B7\u53D6 dom \u5143\u7D20\u76F8\u5BF9\u4E8E",paraId:0,tocIndex:2},{value:"\u89C6\u53E3",paraId:0,tocIndex:2},{value:"\u7684\u4F4D\u7F6E\u3002\u901A\u8FC7",paraId:0,tocIndex:2},{value:"el.style.top",paraId:0,tocIndex:2},{value:"\u63A7\u5236\u5C0F\u7403\u62D6\u52A8\u65F6\u7684\u4F4D\u7F6E",paraId:0,tocIndex:2},{value:"\u4E3A\u4EC0\u4E48\u201CuseRef \u83B7\u53D6 DOM \u5F15\u7528\uFF08\u4E0D\u8981\u6BCF\u6B21\u90FD document.getElementById\uFF09\u201D",paraId:1,tocIndex:2},{value:`\u907F\u514D\u8DE8\u7EC4\u4EF6\u3001\u5168\u5C40\u526F\u4F5C\u7528\u6C61\u67D3
document.getElementById \u662F\u5168\u5C40\u67E5\u627E\uFF0C\u5982\u679C\u4F60\u7684\u9875\u9762\u4E0A\u6709\u591A\u4E2A\u540C ID \u7684\u5143\u7D20\uFF08\u6216\u591A\u4E2A\u7EC4\u4EF6\u90FD\u53EB ball\uFF09\uFF0C\u4F60\u5F88\u53EF\u80FD\u64CD\u4F5C\u5230\u4E86\u9519\u8BEF\u7684\u5143\u7D20\u3002`,paraId:2,tocIndex:2},{value:`useRef \u66F4\u9AD8\u6548\uFF0C\u4E5F\u66F4\u7B26\u5408 React \u601D\u60F3
useRef \u662F React \u63D0\u4F9B\u7684\u65B9\u5F0F\uFF0C\u7528\u4E8E\u5728\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u5E76\u6301\u4E45\u4FDD\u5B58\u67D0\u4E2A DOM \u5143\u7D20\u7684\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u6BCF\u6B21\u90FD\u91CD\u65B0\u67E5\u627E\u3002`,paraId:2,tocIndex:2}]},28327:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u5F39\u5E55\u7CFB\u7EDF\uFF08Barrage / Danmaku\uFF09\u662F\u6307\uFF1A\u7528\u6237\u53D1\u9001\u7684\u8BC4\u8BBA\u6587\u5B57\u4EE5\u201C\u6F02\u6D6E\u5B57\u5E55\u201D\u7684\u5F62\u5F0F\u5728\u5C4F\u5E55\u4E0A\u6A2A\u5411\u6EDA\u52A8\u3002bilibili \u7684\u5F39\u5E55\u662F\u4E00\u4E2A\u4E2A div \u5143\u7D20\uFF0C\u4ECE\u53F3\u5F80\u5DE6\u79FB\u52A8\u7684\u3002",paraId:0,tocIndex:1},{value:"\u9F20\u6807\u79FB\u52A8\u5230\u5F39\u5E55\u4E0A\uFF0C\u663E\u793A\u70B9\u8D5E\u3002js \u901A\u8FC7 animationPlayState\uFF08running/pause\uFF09\u6765\u63A7\u5236\u52A8\u753B\u72B6\u6001\u3002(\u6682\u505C\u52A8\u753B\u540E\uFF0C\u52A8\u753B\u7684 duration \u548C\u5B9E\u9645\u8FD0\u884C\u65F6\u957F\u5BF9\u4E0D\u4E0A\u4E86)",paraId:1,tocIndex:1}]},94190:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:`\u5B9E\u73B0\u601D\u8DEF\u6982\u89C8\uFF1A
\u9F20\u6807\u6309\u4E0B\u67D0\u9879\uFF0C\u8BB0\u5F55\u5F53\u524D\u7D22\u5F15;\u751F\u6210\u4E00\u4E2A visibiligy =hidden,opacity = 0 \u7684\u5143\u7D20\u8FDB\u884C\u7AD9\u4F4D\u3002 \u521B\u5EFA\u4E00\u4E2A clone \u7684\u5143\u7D20\uFF08fixed \u5B9A\u4F4D\uFF09\u8DDF\u968F\u9F20\u6807\u79FB\u52A8`,paraId:0,tocIndex:1},{value:"\u62D6\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u83B7\u53D6\u9F20\u6807\u6A2A\u5750\u6807\uFF1B",paraId:1,tocIndex:1},{value:"\u5224\u65AD\u9F20\u6807\u5728\u54EA\u4E2A\u83DC\u5355\u9879\u4E2D\u95F4\u7EBF\u4E4B\u524D\uFF0C\u52A8\u6001\u8C03\u6574\u6570\u7EC4\u987A\u5E8F\uFF1B\u76F8\u5E94\u7684\u4FEE\u6539\u6CA1\u6709\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5F53\u524D\u88AB\u62D6\u52A8\u7684\u5143\u7D20\u524D\u9762\u7684\u5143\u7D20\uFF0C\u5982\u679C\u4E2D\u95F4\u7EBF\u5927\u4E8E\u9F20\u6807\uFF0C\u540E\u79FB\u4E00\u4E2A\u5143\u7D20\u4F4D\u7F6E\uFF1B\u5F53\u524D\u88AB\u62D6\u52A8\u7684\u5143\u7D20\u540E\u9762\u7684\u5143\u7D20\uFF0C\u5982\u679C\u4E2D\u95F4\u7EBF\u5C0F\u4E8E\u9F20\u6807\uFF0C\u524D\u79FB\u52A8\u4E00\u4E2A\u4F4D\u7F6E\uFF08\u89C6\u89C9\u4E0A\u79FB\u52A8\u5C31\u884C\uFF09\u3002",paraId:2,tocIndex:1},{value:"\u9F20\u6807\u91CA\u653E\uFF0C\u79FB\u9664\u76D1\u542C\u5668\uFF0C\u5B8C\u6210\u62D6\u52A8\u3002\u5224\u65AD clone \u5143\u7D20\u4EE5\u53CA\u4E4B\u524D\u7684\u83DC\u5355\u9879\u7684\u89C6\u53E3\u4F4D\u7F6E\uFF08\u4E0D\u542B\u9690\u85CF\u5143\u7D20\uFF09\uFF0C\u4ECE\u800C\u83B7\u53D6\u5230\u6392\u5E8F\u540E\u7684\u5143\u7D20\u987A\u5E8F\u3002",paraId:3,tocIndex:1}]},17005:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u60EF\u6027\u62D6\u52A8\uFF08Inertial Drag\uFF09\u662F\u6307\uFF1A\u7528\u6237\u62D6\u52A8\u5143\u7D20\u91CA\u653E\u9F20\u6807\u540E\uFF0C\u5143\u7D20\u4F1A\u6839\u636E\u62D6\u52A8\u65F6\u7684\u901F\u5EA6\u7EE7\u7EED\u6ED1\u52A8\u4E00\u6BB5\u8DDD\u79BB\uFF0C\u6700\u540E\u51CF\u901F\u505C\u6B62\uFF0C\u5C31\u50CF\u5728\u771F\u5B9E\u4E16\u754C\u4E2D\u6709\u201C\u60EF\u6027\u201D\u4E00\u6837\u3002",paraId:0,tocIndex:0},{value:"TODO",paraId:1,tocIndex:2}]},80377:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u5E38\u7528\u4E8E\u88C5\u9970\u3001\u52A0\u8F7D\u52A8\u753B\u3001\u89C6\u89C9\u8DA3\u5473\u7B49",paraId:0,tocIndex:0},{value:"\u5173\u952E\u70B9\u662F border-right:transparent \u5F62\u6210 2 \u4E2A\u6247\u5F62\uFF0C\u7136\u540E\u65CB\u8F6C\u5B83\u4EEC\uFF0C\u5F62\u6210\u5F20\u95ED\u5634\u7684\u6548\u679C\uFF1B\u4F7F\u7528::before \u4F2A\u5143\u7D20\u5F62\u6210\u773C\u775B\uFF1B\u8C46\u5B50\u9760\u8FD1\u5634\u5DF4\u6D88\u5931\u3002",paraId:1,tocIndex:2},{value:`\u65E0\u6CD5\u76F4\u63A5\u7528 CSS \u8BA9 absolute \u5B50\u5143\u7D20\u53C2\u4E0E\u7236\u5143\u7D20\u5C3A\u5BF8\u8BA1\u7B97
\u8FD9\u662F\u6D4F\u89C8\u5668\u6392\u7248\u89C4\u5219\u51B3\u5B9A\u7684\uFF0C\u7EAF CSS \u65E0\u6CD5\u8BA9\u8131\u79BB\u6587\u6863\u6D41\u7684\u5B50\u5143\u7D20\u81EA\u7136\u6491\u5F00\u7236\u5BB9\u5668\u3002`,paraId:2,tocIndex:2}]},5893:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u63A8\u5F00\u6548\u679C\uFF0C\u5373\u4E00\u4E2A\u5143\u7D20\u7684\u5C3A\u5BF8\u53D8\u5316\uFF0C\u63A8\u5F00\u53E6\u5916\u4E00\u4E2A\u5143\u7D20\u3002\u5728\u6298\u53E0\u9762\u677F\u3001\u4FA7\u8FB9\u680F\u5C55\u5F00\u3001\u8BC4\u8BBA/\u56DE\u590D\u6846\u5C55\u5F00\u4E2D\u5E38\u7528\u5230\u3002",paraId:0,tocIndex:2},{value:"\u96BE\u70B9\u662F\u5982\u4F55\u63A8\u5F00\u5176\u5B83\u5143\u7D20\u3002\u53EF\u4EE5\u4F7F\u7528 CSS height, margin, padding, \u8BA9\u76D2\u5B50\u7684\u9AD8\u5EA6\u4ECE 0 \u5F00\u59CB\u53D8\u5F97\uFF0C\u518D\u4F7F\u7528 transition \u63A7\u5236\u8FC7\u6E21\u6548\u679C",paraId:1,tocIndex:2},{value:"\u9700\u8981\u548C\u8986\u76D6\uFF08Overlay\uFF09\u6548\u679C\u76F8\u533A\u522B\uFF0C\u5143\u7D20\u662F\u6D6E\u5728\u5176\u5B83\u5143\u7D20\u4E0A\u9762\uFF0C\u4E0D\u5F71\u54CD\u5176\u4ED6\u5185\u5BB9\u3002",paraId:2,tocIndex:2}]},28248:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u5B83\u662F\u4E00\u79CD\u975E\u5E38\u5E38\u89C1\u7684\u7528\u6237\u4EA4\u4E92\u53CD\u9988\u52A8\u753B\u3002\u5B9E\u73B0\u539F\u7406\u5982\u4E0B\uFF1A",paraId:0,tocIndex:1},{value:"\u7528\u6237\u70B9\u51FB\u6309\u94AE\uFF0C\u8BB0\u5F55\u70B9\u51FB\u4F4D\u7F6E\uFF08\u76F8\u5BF9\u4E8E\u6309\u94AE\u7684\u4F4D\u7F6E\uFF09\u3002\u901A\u8FC7 event.clientX/clientY \u83B7\u53D6\u70B9\u51FB\u70B9\u7684\u5750\u6807",paraId:1,tocIndex:1},{value:"\u5728\u8BE5\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u5706\u5F62\u5143\u7D20\uFF08div\uFF09\uFF0C\u5E76\u8BBE\u7F6E\u521D\u59CB\u6837\u5F0F\u3002",paraId:1,tocIndex:1},{value:"\u7528 CSS \u52A8\u753B\uFF08transform: scale(...) + opacity\uFF09\u6765\u8BA9\u5B83\u4ECE\u5C0F\u53D8\u5927+\u6E10\u9690\u3002",paraId:1,tocIndex:1},{value:"\u52A8\u753B\u7ED3\u675F\u540E\u79FB\u9664\u8BE5\u5143\u7D20\u3002",paraId:1,tocIndex:1}]},67837:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u201C\u6A61\u76AE\u7B4B\u62C9\u4F38\u201D\u52A8\u753B\u5E38\u7528\u4E8E\u6A21\u62DF\u5177\u6709\u5F39\u6027\u963B\u5C3C\u7684\u7269\u4F53\u62C9\u4F38\u4E0E\u56DE\u5F39\uFF0C\u6BD4\u5982\u62D6\u62FD\u4E00\u4E2A\u5C0F\u7403\u65F6\uFF0C\u5B83\u50CF\u6A61\u76AE\u7B4B\u4E00\u6837\u88AB\u62C9\u957F\u3001\u677E\u5F00\u540E\u56DE\u5F39\u3002",paraId:0,tocIndex:1},{value:"scaleX(...)",paraId:1,tocIndex:1},{value:"\uFF1A\u6A21\u62DF\u6A61\u76AE\u7B4B\u7684\u6A2A\u5411\u53D8\u5F62\uFF0C1 + \u62C9\u4F38\u8DDD\u79BB / \u7CFB\u6570",paraId:1,tocIndex:1},{value:"cubic-bezier(...)\uFF1A\u5B9E\u73B0\u5F39\u6027\u56DE\u5F39\u6548\u679C\u7684\u5173\u952E",paraId:1,tocIndex:1},{value:"\u53EF\u6839\u636E\u62C9\u4F38\u957F\u5EA6\u52A8\u6001\u63A7\u5236 scale \u503C\uFF0C\u6A21\u62DF\u66F4\u5F3A\u7684\u5F39\u529B",paraId:1,tocIndex:1}]},67369:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u6296\u52A8\u6548\u679C\u5E38",paraId:0,tocIndex:0},{value:"\u5F15\u8D77\u7528\u6237\u6CE8\u610F\u6216\u63D0\u793A\u9519\u8BEF",paraId:0,tocIndex:0},{value:"\uFF0C\u662F\u201C\u8D1F\u53CD\u9988\u201D\u7684\u5E38\u89C1\u8868\u73B0",paraId:0,tocIndex:0},{value:"\u5B83\u662F\u4F7F\u7528 translate \u548C transform \u5B9E\u73B0\u7684\u3002",paraId:1,tocIndex:2},{value:`@keyframes shake {
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
`,paraId:2,tocIndex:2}]},76709:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u901A\u8FC7\u63D2\u5165\u4E00\u4E2A position:absolute \u7684 div\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u6DE1\u51FA\u52A8\u753B\u5B9E\u73B0\u3002",paraId:0,tocIndex:1}]},33697:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[]},87799:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"This is a guide example.",paraId:0}]},51446:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[]},81699:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:`.BFC8 {
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

`,paraId:0}]},55563:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u89C6\u53E3\u5C45\u4E2D\u5B9A\u4F4D",paraId:0}]},89370:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:`.BFC5 {
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
`,paraId:0}]},8861:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u5E38\u89C1\u7684\u6709\u8DA3\u5E03\u5C40\u6709\u4E5D\u5BAB\u683C\u5E03\u5C40\u3001\u4E24\u7AEF\u5BF9\u9F50\u5E03\u5C40\uFF08\u4E2D\u95F4\u81EA\u9002\u5E94\uFF09\u3001\u4E00\u4FA7\u56FA\u5B9A\u5E03\u5C40\u3001\u5143\u7D20\u89C6\u53E3\u5B9A\u4F4D",paraId:0}]},95648:function(L,a,e){e.r(a),e.d(a,{texts:function(){return d}});const d=[{value:"\u4F7F\u7528flex\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5B50\u5143\u7D20\u7684width\u4E3A33%",paraId:0},{value:`.flex {
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
`,paraId:1}]},96332:function(L,a){a.Z=`/*
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
`},69118:function(L,a){a.Z=`/*
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
`}}]);
