"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[395],{9904:function(e,n,a){var t=a(7711);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},9755:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(1513),r=a(7711),l=a(6928),i=a(8229);var u=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(1255),s=a(1506),p="tabItem_dVQ5";function m(e){var n,a,t,l=e.lazy,i=e.block,m=e.defaultValue,d=e.values,c=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),k=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(t=f[0])?void 0:t.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),N=g.tabGroupChoices,y=g.setTabGroupChoices,T=(0,r.useState)(b),x=T[0],w=T[1],I=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var Z=N[c];null!=Z&&Z!==x&&v.some((function(e){return e.value===Z}))&&w(Z)}var A=function(e){var n=e.currentTarget,a=I.indexOf(n),t=v[a].value;t!==x&&(C(n),w(t),null!=c&&y(c,t))},G=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;a=I[t]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var n=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":x===n}),key:n,ref:function(e){return I.push(e)},onKeyDown:G,onFocus:A,onClick:A},null!=a?a:n)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},8565:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return h}});var t=a(1513),r=a(1275),l=(a(7711),a(4635)),i=a(9755),u=a(9904),o=["components"],s={title:"\u5feb\u901f\u5f00\u59cb",slug:"/quick-start",order:2},p=void 0,m={unversionedId:"guide/quick-start",id:"guide/quick-start",isDocsHomePage:!1,title:"\u5feb\u901f\u5f00\u59cb",description:"\u672c\u8282\u4e3b\u8981\u4ece\u4e3b\u5e94\u7528\u89c6\u89d2\u51fa\u53d1\uff0c\u901a\u8fc7 Garfish API \u7684\u52a0\u8f7d\u65b9\u5f0f\u6982\u89c8\u6027\u63cf\u8ff0\u4e3b\u5e94\u7528\u5982\u4f55\u63a5\u5165\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c",source:"@site/docs/guide/quick-start.md",sourceDirName:"guide",slug:"/quick-start",permalink:"/quick-start",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1641376960,formattedLastUpdatedAt:"2022/1/5",frontMatter:{title:"\u5feb\u901f\u5f00\u59cb",slug:"/quick-start",order:2},sidebar:"guide",previous:{title:"Garfish \u4ecb\u7ecd",permalink:"/guide"},next:{title:"\u6982\u89c8",permalink:"/api"}},d=[{value:"\u4e3b\u5e94\u7528",id:"\u4e3b\u5e94\u7528",children:[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:3},{value:"\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8 Garfish",id:"\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8-garfish",children:[],level:3}],level:2},{value:"\u5b50\u5e94\u7528",id:"\u5b50\u5e94\u7528",children:[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-1",children:[],level:3},{value:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e",id:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e",children:[],level:3},{value:"\u901a\u8fc7 Bridge \u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528",id:"\u901a\u8fc7-bridge-\u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:d};function h(e){var n=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u8282\u4e3b\u8981\u4ece\u4e3b\u5e94\u7528\u89c6\u89d2\u51fa\u53d1\uff0c\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"/api"},"Garfish API")," \u7684\u52a0\u8f7d\u65b9\u5f0f\u6982\u89c8\u6027\u63cf\u8ff0\u4e3b\u5e94\u7528\u5982\u4f55\u63a5\u5165\u5fae\u524d\u7aef\u5b50\u5e94\u7528\uff0c"),(0,l.kt)("p",null,"\u901a\u8fc7 Garfish API \u63a5\u5165\u5b50\u5e94\u7528\u6574\u4f53\u6d41\u7a0b\u6982\u8ff0\u4e3a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"garfish")," \u4f9d\u8d56\u5305\uff08\u5b57\u8282\u5185\u90e8\u7814\u53d1\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"@byted/garfish")," \u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"li"},"garfish"),"\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"Garfish.run"),"\uff0c\u63d0\u4f9b\u6302\u8f7d\u70b9\u3001basename\u3001\u5b50\u5e94\u7528\u5217\u8868")),(0,l.kt)("h2",{id:"\u4e3b\u5e94\u7528"},"\u4e3b\u5e94\u7528"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install garfish --save\n"))),(0,l.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add garfish\n")))),(0,l.kt)("h3",{id:"\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8-garfish"},"\u6ce8\u518c\u5b50\u5e94\u7528\u5e76\u542f\u52a8 Garfish"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\uff08\u4e3b\u5e94\u7528\u5165\u53e3\u5904\uff09\nimport Garfish from 'garfish';\n/*\n  \u5f53\u6267\u884c `Garfish.run` \u540e\uff0c\u6b64\u65f6 `Garfish` \u6846\u67b6\u5c06\u4f1a\u542f\u52a8\u8def\u7531\u52ab\u6301\u80fd\u529b\n  \u5f53\u6d4f\u89c8\u5668\u7684\u5730\u5740\u53d1\u751f\u53d8\u5316\u65f6\uff0c`Garfish` \u6846\u67b6\u5185\u90e8\u4fbf\u4f1a\u7acb\u5373\u89e6\u53d1\u5339\u914d\u903b\u8f91\u5f53\u5e94\u7528\u7b26\u5408\u5339\u914d\u903b\u8f91\u65f6\u5c06\u4f1a\u81ea\u52a8\u5c06\u5e94\u7528\u6302\u8f7d\u81f3\u9875\u9762\u4e2d\n  \u5e76\u4f9d\u6b21\u89e6\u53d1\u5b50\u5e94\u7528\u52a0\u8f7d\u3001\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u7684\u751f\u547d\u5468\u671f\n  \u8df3\u8f6c\u81f3: /react \u65f6\uff0c\u81ea\u52a8\u6302\u8f7d react \u5e94\u7528\n  \u8df3\u8f6c\u81f3: /vue \u65f6\uff0c\u81ea\u52a8\u6302\u8f7d vue \u5e94\u7528\n*/\nGarfish.run({\n  basename: '/',\n  domGetter: '#subApp',\n  apps: [\n    {\n      // \u6bcf\u4e2a\u5e94\u7528\u7684 name \u9700\u8981\u4fdd\u6301\u552f\u4e00\n      name: 'react',\n      // \u53ef\u4e3a\u51fd\u6570\uff0c\u5f53\u51fd\u6570\u8fd4\u56de\u503c\u4e3a true \u65f6\uff0c\u6807\u8bc6\u6ee1\u8db3\u6fc0\u6d3b\u6761\u4ef6\uff0c\u8be5\u5e94\u7528\u5c06\u4f1a\u81ea\u52a8\u6302\u8f7d\u81f3\u9875\u9762\u4e2d\uff0c\u624b\u52a8\u6302\u5728\u65f6\u53ef\u4e0d\u586b\u5199\u8be5\u53c2\u6570\n      activeWhen: '/react',\n      // \u5b50\u5e94\u7528\u7684\u5165\u53e3\u5730\u5740\uff0c\u53ef\u4ee5\u4e3a HTML \u5730\u5740\u548c JS \u5730\u5740\n      // \u6ce8\u610f\uff1aentry \u5730\u5740\u4e0d\u53ef\u4ee5\u4e0e\u4e3b\u5e94\u7528+\u5b50\u5e94\u7528\u6fc0\u6d3b\u5730\u5740\u76f8\u540c\uff0c\u5426\u5219\u5237\u65b0\u65f6\u5c06\u4f1a\u76f4\u63a5\u8fd4\u56de\u5b50\u5e94\u7528\u5185\u5bb9\n      entry: 'http://localhost:3000',\n    },\n    {\n      name: 'vue',\n      activeWhen: '/vue',\n      entry: 'http://localhost:8080',\n    },\n  ],\n});\n")),(0,l.kt)("h2",{id:"\u5b50\u5e94\u7528"},"\u5b50\u5e94\u7528"),(0,l.kt)("h3",{id:"\u5b89\u88c5\u4f9d\u8d56-1"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)(i.Z,{defaultValue:"npm",groupId:"npm2yarn",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @garfish/bridge --save\n"))),(0,l.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @garfish/bridge\n")))),(0,l.kt)("h3",{id:"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e"},"\u8c03\u6574\u5b50\u5e94\u7528\u7684\u6784\u5efa\u914d\u7f6e"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"Webpack",label:"Webpack",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    // \u9700\u8981\u914d\u7f6e\u6210 umd \u89c4\u8303\n    libraryTarget: 'umd',\n    // \u4fee\u6539\u4e0d\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\uff0c\u907f\u514d\u9003\u9038\u6c99\u7bb1\n    globalObject: 'window',\n    // \u8bf7\u6c42\u786e\u4fdd\u6bcf\u4e2a\u5b50\u5e94\u7528\u8be5\u503c\u90fd\u4e0d\u76f8\u540c\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0 webpack chunk \u4e92\u76f8\u5f71\u54cd\u7684\u53ef\u80fd\n    // webpack 5 \u4f7f\u7528 chunkLoadingGlobal \u4ee3\u66ff\uff0c\u82e5\u4e0d\u586b webpack 5 \u5c06\u4f1a\u76f4\u63a5\u4f7f\u7528 package.json name \u4f5c\u4e3a\u552f\u4e00\u503c\uff0c\u8bf7\u786e\u4fdd\u5e94\u7528\u95f4\u7684 name \u5404\u4e0d\u76f8\u540c\n    jsonpFunction: 'vue-app-jsonpFunction',\n    // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u8def\u5f84\u53d8\u4e3a\u7edd\u5bf9\u8def\u5f84\uff0c\u907f\u514d\u5b50\u5e94\u7528\u7684\u76f8\u5bf9\u8d44\u6e90\u5728\u53d8\u4e3a\u4e3b\u5e94\u7528\u4e0a\u7684\u76f8\u5bf9\u8d44\u6e90\uff0c\u56e0\u4e3a\u5b50\u5e94\u7528\u548c\u4e3b\u5e94\u7528\u5728\u540c\u4e00\u4e2a\u6587\u6863\u6d41\uff0c\u76f8\u5bf9\u8def\u5f84\u662f\u76f8\u5bf9\u4e8e\u4e3b\u5e94\u7528\u800c\u8a00\u7684\n    publicPath: 'http://localhost:8000',\n  },\n  devServer: {\n    // \u4fdd\u8bc1\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\u5e94\u7528\u7aef\u53e3\u4e0d\u4e00\u6837\n    port: '8000',\n    headers: {\n      // \u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u652f\u6301\u8de8\u57df\uff0c\u5728\u4e0a\u7ebf\u540e\u9700\u8981\u4fdd\u8bc1\u5b50\u5e94\u7528\u7684\u8d44\u6e90\u5728\u4e3b\u5e94\u7528\u7684\u73af\u5883\u4e2d\u52a0\u8f7d\u4e0d\u4f1a\u5b58\u5728\u8de8\u57df\u95ee\u9898\uff08**\u4e5f\u9700\u8981\u9650\u5236\u8303\u56f4\u6ce8\u610f\u5b89\u5168\u95ee\u9898**\uff09\n      'Access-Control-Allow-Origin': '*',\n    },\n  },\n};\n"))),(0,l.kt)(u.Z,{value:"vite",label:"Vite",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { htmlPlugin } from '@garfish/vite-plugin';\n\n// \u4f7f\u7528 Vite \u5e94\u7528\u4f5c\u4e3a\u5b50\u5e94\u7528\u65f6\u9700\u8981\u6ce8\u610f\uff1a\n// \u5b50\u5e94\u7528\u5fc5\u987b\u4f7f\u7528\u7f13\u5b58\u6a21\u5f0f cache: true \u6a21\u5f0f\uff0c\u8def\u7531\u9a71\u52a8\u65f6\u9ed8\u8ba4\u4f7f\u7528 cache \u6a21\u5f0f\uff0c\u89e6\u53d1\u5c06 appInfo.cache = false\uff08\u56e0\u4e3a esmodule \u5185\u5bb9\u65e0\u6cd5\u91cd\u590d\u6267\u884c\uff09\n// \u5b50\u5e94\u7528\u4e0d\u53ef\u91cd\u590d\u4f7f\u7528 app.mount\uff0c\u7b2c\u4e8c\u6b21\u6e32\u67d3\u65f6\u53ea\u80fd\u4f7f\u7528 app.show\uff0c\u5426\u5219\u5c06\u8d70\u975e\u7f13\u5b58\u6a21\u5f0f\uff08\u56e0\u4e3a esmodule \u5185\u5bb9\u65e0\u6cd5\u91cd\u590d\u6267\u884c\uff09\n// \u9700\u8981\u5c06\u5b50\u5e94\u7528\u6c99\u7bb1\u5173\u95ed sandbox: false\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u51fa\u73b0\u5b50\u5e94\u7528\u90e8\u5206\u4ee3\u7801\u5728\u6c99\u7bb1\u5185\u6267\u884c\uff0c\u90e8\u5206\u4e0d\u5728\u6c99\u7bb1\u6267\u884c: Garfish.run({ apps: [{ name:'vite-app',entry:'xxx',sandbox: false }] })\n// \u5b50\u5e94\u7528\u7684\u526f\u4f5c\u7528\u5c06\u4f1a\u53d1\u751f\u9003\u9038\uff0c\u5728\u5b50\u5e94\u7528\u5378\u8f7d\u540e\u9700\u8981\u5c06\u5bf9\u5e94\u5168\u5c40\u7684\u526f\u4f5c\u7528\u6e05\u9664\nexport default defineConfig({\n  // \u63d0\u4f9b\u8d44\u6e90\u7edd\u5bf9\u8def\u5f84\uff0c\u7aef\u53e3\u53ef\u81ea\u5b9a\u4e49\n  base: 'http://localhost:3000/',\n  server: {\n    port: 3000,\n    cors: true,\n    // \u63d0\u4f9b\u8d44\u6e90\u7edd\u5bf9\u8def\u5f84\uff0c\u7aef\u53e3\u53ef\u81ea\u5b9a\u4e49\n    origin: 'http://localhost:3000',\n  },\n  plugins: [\n    // \u4f7f\u7528 vite-plugin \u7684 html plugin\uff0c\u5e76\u5b9a\u4e49 ID\uff0c\u8be5 ID \u4e0e brdige \u7684 ID \u9700\u76f8\u540c\n    htmlPlugin('vite-vue-sub-app', {\n      useDevMode: true,\n    }),\n  ],\n});\n")))),(0,l.kt)("h3",{id:"\u901a\u8fc7-bridge-\u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528"},"\u901a\u8fc7 Bridge \u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528"),(0,l.kt)(i.Z,{groupId:"framework",mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"React",label:"React",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { reactBridge } from '@garfish/bridge';\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { BrowserRouter, Switch, Route, Link } from 'react-router-dom';\n\nfunction App({ basename }) {\n  return (\n    <BrowserRouter basename={basename}>\n      <Link to=\"/\">Home</Link>\n      <Switch>\n        <Route exact path=\"/\">\n          <HelloGarfish />\n        </Route>\n      </Switch>\n    </BrowserRouter>\n  );\n}\n\nexport const provider = reactBridge({\n  React,\n  ReactDOM,\n  el: '#root',\n  rootComponent: App,\n});\n"))),(0,l.kt)(u.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import Vue from 'vue';\nimport App from './App.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nfunction newRouter(basename) {\n  const router = new VueRouter({\n    mode: 'history',\n    base: basename,\n    router,\n    routes: [{ path: '/', component: HelloGarfish }],\n  });\n  return router;\n}\n\nexport const provider = vueBridge({\n  Vue,\n  rootComponent: App,\n  appOptions: ({ basename }) => ({\n    el: '#app',\n    router: newRouter(basename),\n    store,\n  }),\n});\n"))),(0,l.kt)(u.Z,{value:"Vue3",label:"Vue3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { h, createApp } from 'vue';\nimport App from './App.vue';\nimport { vueBridge } from '@garfish/bridge';\n\nexport const provider = vueBridge({\n  createApp,\n  appId: 'vite-vue-sub-app', // \u5728 vite \u5e94\u7528\u65f6\u63d0\u4f9b\uff0c\u8be5\u503c\u4e0e htmlPlugin \u7b2c\u4e00\u4e2a\u53c2\u6570\u76f8\u540c\n  appOptions: ({ basename }) => ({\n    el: '#app',\n    render() {\n      return h(App);\n    },\n  }),\n});\n")))),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u4f7f\u7528 Garfish API \u642d\u5efa\u4e00\u5957\u5fae\u524d\u7aef\u4e3b\u5b50\u5e94\u7528\u7684\u4e3b\u8981\u6210\u672c\u6765\u81ea\u4e24\u65b9\u9762"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u5e94\u7528\u7684\u642d\u5efa",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u5b50\u5e94\u7528\u7684\u57fa\u672c\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Garfish \u5728\u4e3b\u5e94\u7528\u4e0a\u8c03\u5ea6\u7ba1\u7406\u5b50\u5e94\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u7684\u6539\u9020",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0\u5bf9\u5e94\u7684\u6784\u5efa\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"@garfish/bridge")," \u5305\u63d0\u4f9b\u7684\u51fd\u6570\u5305\u88c5\u5b50\u5e94\u7528\u540e\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"li"},"provider")," \u51fd\u6570\u5e76\u5bfc\u51fa"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u5e94\u7528\u9488\u5bf9\u4e0d\u540c\u7684\u6846\u67b6\u7c7b\u578b\uff0c\u6dfb\u52a0\u4e0d\u540c ",(0,l.kt)("inlineCode",{parentName:"li"},"basename")," \u7684\u8bbe\u7f6e\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"React \u5728\u6839\u7ec4\u4ef6\u4e2d\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"li"},"basename")," \u5c06\u5176\u4f20\u9012\u81f3 ",(0,l.kt)("inlineCode",{parentName:"li"},"BrowserRouter")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"basename")," \u5c5e\u6027\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"Vue \u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"basename")," \u4f20\u9012\u81f3 ",(0,l.kt)("inlineCode",{parentName:"li"},"VueRouter")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"basename")," \u5c5e\u6027\u4e2d")))))))}h.isMDXComponent=!0}}]);