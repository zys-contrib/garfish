"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[704],{7779:function(t,e,p){p.r(e),p.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return i},default:function(){return k}});var n=p(1513),a=p(1275),l=(p(7711),p(4635)),d=["components"],r={title:"Garfish.registerApp",slug:"/api/registerApp",order:3},s=void 0,u={unversionedId:"guide/API/registerApp",id:"guide/API/registerApp",isDocsHomePage:!1,title:"Garfish.registerApp",description:"Garfish.registerApp \u662f\u7528\u4e8e\u6ce8\u518c\u5b50\u5e94\u7528\u7684 API\uff0c\u901a\u8fc7 registerApp \u53ef\u4ee5\u52a8\u6001\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f\uff0c\u53ef\u4ee5\u6ce8\u518c\u5355\u4e2a\u5b50\u5e94\u7528\u4e5f\u53ef\u4ee5\u4e00\u6b21\u6027\u6ce8\u518c\u591a\u4e2a\u5b50\u5e94\u7528\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 run \u65b9\u6cd5\u6ce8\u518c\u5e94\u7528\u5e76\u521d\u59cb\u5316\u5e94\u7528\u914d\u7f6e\uff0c\u5728 run \u65b9\u6cd5\u4e2d\u7684\u4f7f\u7528 apps \u53c2\u6570\u63d0\u4f9b\u5b50\u5e94\u7528\u4fe1\u606f\u5217\u8868\uff0capps \u53c2\u6570\u5728\u5e95\u5c42\u5c31\u662f\u4f7f\u7528 registerApp \u4f20\u9012\u6570\u7ec4\u7684\u65b9\u5f0f\u6ce8\u518c\u591a\u4e2a\u5b50\u5e94\u7528\u7684\u3002",source:"@site/docs/guide/API/registerApp.md",sourceDirName:"guide/API",slug:"/api/registerApp",permalink:"/api/registerApp",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/guide/API/registerApp.md",tags:[],version:"current",lastUpdatedBy:"Zhou xiao",lastUpdatedAt:1641376960,formattedLastUpdatedAt:"2022/1/5",frontMatter:{title:"Garfish.registerApp",slug:"/api/registerApp",order:3},sidebar:"guide",previous:{title:"Garfish.run",permalink:"/api/run"},next:{title:"Garfish.loadApp",permalink:"/api/loadApp"}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:3}],o={toc:i};function k(t){var e=t.components,p=(0,a.Z)(t,d);return(0,l.kt)("wrapper",(0,n.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Garfish.registerApp")," \u662f\u7528\u4e8e\u6ce8\u518c\u5b50\u5e94\u7528\u7684 API\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerApp")," \u53ef\u4ee5\u52a8\u6001\u6ce8\u518c\u5b50\u5e94\u7528\u4fe1\u606f\uff0c\u53ef\u4ee5\u6ce8\u518c\u5355\u4e2a\u5b50\u5e94\u7528\u4e5f\u53ef\u4ee5\u4e00\u6b21\u6027\u6ce8\u518c\u591a\u4e2a\u5b50\u5e94\u7528\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u6ce8\u518c\u5e94\u7528\u5e76\u521d\u59cb\u5316\u5e94\u7528\u914d\u7f6e\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"run")," \u65b9\u6cd5\u4e2d\u7684\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"apps")," \u53c2\u6570\u63d0\u4f9b\u5b50\u5e94\u7528\u4fe1\u606f\u5217\u8868\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"apps")," \u53c2\u6570\u5728\u5e95\u5c42\u5c31\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"registerApp")," \u4f20\u9012\u6570\u7ec4\u7684\u65b9\u5f0f\u6ce8\u518c\u591a\u4e2a\u5b50\u5e94\u7528\u7684\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Garfish from 'garfish';\n\nGarfish.registerApp({\n  name: 'vue-app',\n  basename: '/demo',\n  entry: 'http://localhost:3000',\n  activeWhen: '/vue-app',\n  props: {\n    msg: 'vue-app msg',\n  },\n});\n\n// \u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4\uff0c\u4e00\u6b21\u6ce8\u518c\u591a\u4e2a app\nGarfish.registerApp([\n  {\n    name: 'vue-app',\n    entry: 'http://localhost:3000',\n    activeWhen: '/vue-app',\n  },\n  {\n    name: 'react-app',\n    entry: 'http://localhost:2000',\n    activeWhen: '/react-app',\n  },\n]);\n")),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AppInfo | Array<AppInfo>")),(0,l.kt)("dl",{className:"args-list"},(0,l.kt)("dt",null,(0,l.kt)("strong",null,"name: string")),(0,l.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u540d\u79f0\uff0c\u4e5f\u662f\u5b50\u5e94\u7528\u7684\u7684\u552f\u4e00 id\uff0c\u5b50\u5e94\u7528\u7684\u7684 name \u9700\u8981\u4e92\u4e0d\u76f8\u540c"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"basename?: string")),(0,l.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u57fa\u7840\u8def\u5f84\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("code",null,"/"),"\uff0c\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u8def\u5f84"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"entry: string")),(0,l.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u5165\u53e3\u8d44\u6e90\u5730\u5740\uff0c\u53ef\u4ee5\u4e3a HTML \u5b50\u5e94\u7528\u5165\u53e3\u5730\u5740\uff0c\u4e5f\u53ef\u4ee5\u4e3aJS \u5b50\u5e94\u7528\u5165\u53e3\u5730\u5740"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"domGetter?: string | () => Element")),(0,l.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u6302\u8f7d\u70b9\uff0c\u63d0\u4f9b string \u7c7b\u578b\u65f6\u9700\u8981\u5176\u503c\u662f `cssSelector`\uff0cGarfish \u5185\u90e8\u4f1a\u4f7f\u7528 `document.querySelector(domGetter)` \u53bb\u9009\u4e2d\u5b50\u5e94\u7528\u7684\u6302\u8f7d\u70b9\u3002\u5f53\u63d0\u4f9b\u51fd\u6570\u65f6\uff0c\u5b50\u5e94\u7528\u5728\u8def\u7531\u9a71\u52a8\u6302\u8f7d\u548c\u624b\u52a8\u6302\u8f7d\u65f6\u5c06\u4f1a\u6267\u884c\u8be5\u51fd\u6570\u5e76\u4e14\u671f\u671b\u8fd4\u56de\u4e00\u4e2a dom \u5143\u7d20 "),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"props?: Object")),(0,l.kt)("dd",null,"\u4f20\u9012\u7ed9\u5b50\u5e94\u7528\u7684\u53c2\u6570\uff0c\u5b50\u5e94\u7528\u7684\u751f\u547d\u5468\u671f\u5c06\u63a5\u53d7\u5230\u8be5\u53c2\u6570"),(0,l.kt)("dd",null,"\u7528\u4e8e\u914d\u7f6e\u5b50\u5e94\u7528\u6c99\u7bb1\u7684\u8fd0\u884c\u53c2\u6570\uff0c\u5f53\u914d\u7f6e sandbox \u4e3a false \u65f6\u8868\u793a\u5173\u95ed\u6c99\u7bb1\uff0c\u5f53 sandbox \u4e3a\u5bf9\u8c61\u7c7b\u578b\u65f6\u53ef\u4ee5\u914d\u7f6e\u4ee5\u4e0b\u53c2\u6570",(0,l.kt)("dl",{className:"args-list"},(0,l.kt)("dt",null,(0,l.kt)("strong",null,"snapshot?: false\uff08\u9ed8\u8ba4\u503c\u4e3a false\uff09")),(0,l.kt)("dd",null,"\u8868\u660e\u662f\u5426\u5f00\u542f\u5feb\u7167\u6c99\u7bb1\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5173\u95ed\u5feb\u7167\u6c99\u7bb1\uff0c\u4f7f\u7528 VM \u6c99\u7bb1\uff08VM \u6c99\u7bb1\u652f\u6301\u591a\u5b9e\u4f8b\uff09"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"strictIsolation?: false\uff08\u9ed8\u8ba4\u503c\u4e3a false\uff09")),(0,l.kt)("dd",null,"\u8868\u660e\u662f\u5426\u5f00\u542f\u5f00\u542f\u4e25\u683c\u9694\u79bb\uff0c\u5f00\u542f\u4e25\u683c\u9694\u79bb\u540e\uff0c\u5b50\u5e94\u7528\u7684\u6e32\u67d3\u8282\u70b9\u5c06\u4f1a\u5f00\u542f Shadow DOM close \u6a21\u5f0f\uff0c\u5e76\u4e14\u5b50\u5e94\u7528\u7684\u67e5\u8be2\u548c\u6dfb\u52a0\u884c\u4e3a\u4ec5\u4f1a\u5728 DOM \u4f5c\u7528\u57df\u5185\u8fdb\u884c"),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"modules?: Module[]\uff08\u9ed8\u8ba4\u503c: []\uff09")),(0,l.kt)("dd",null,"\u7528\u4e8e\u8986\u76d6\u5b50\u5e94\u7528\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4ec5\u5728 snapshot: false \u65f6\u6709\u6548"))),(0,l.kt)("dt",null,(0,l.kt)("strong",null,"activeWhen?: string | (path: string)=> boolean")),(0,l.kt)("dd",null,"\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u53ef\u4ee5\u4e3a string \u7c7b\u578b\u548c\u51fd\u6570\u7c7b\u578b\u3002 \u4e3a string \u7c7b\u578b\u65f6\u586b\u5199\u5b50\u5e94\u7528\u7684\u4e00\u7ea7\u8def\u7531\uff0c\u8be5\u503c\u5c06\u4f1a\u53d7\u5230 basename \u7684\u5f71\u54cd\uff0c\u5b9e\u9645\u5b50\u5e94\u7528\u6fc0\u6d3b\u7684\u8def\u5f84\u4e3a basename + activeWhen\u3002 \u4e3a\u51fd\u6570\u65f6\u5728\u51fd\u6570\u5185\u5224\u65ad\u53c2\u6570 ",(0,l.kt)("code",null,"path")," \u662f\u5426\u4e3a\u7b26\u5408\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u82e5\u8fd4\u56de ",(0,l.kt)("code",null,"true")," \u5219\u6ee1\u8db3\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u4e0d\u4f1a\u53d7\u5230 basename \u7684\u5f71\u54cd",(0,l.kt)("br",null),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("code",null,"activeWhen: '/vue-app',\uff08basename:'/'\uff09")),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app"),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app/about"),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app/detail/goods"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/vue-app2"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/react-app")),(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("code",null,"activeWhen: '/vue-app',\uff08basename:'/demo'\uff09")),(0,l.kt)("dd",null,"\u2705 https://demo.app/demo/vue-app"),(0,l.kt)("dd",null,"\u2705 https://demo.app/demo/vue-app/about"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/vue-app"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/vue-app/detail/goods"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/react-app")),"\u4e3a\u51fd\u6570\u65f6\u5728\u51fd\u6570\u5185\u5224\u65ad\u53c2\u6570 ",(0,l.kt)("code",null,"path")," \u662f\u5426\u4e3a\u7b26\u5408\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6\uff0c\u82e5\u8fd4\u56de ",(0,l.kt)("code",null,"true")," \u5219\u6ee1\u8db3\u5b50\u5e94\u7528\u7684\u6fc0\u6d3b\u6761\u4ef6",(0,l.kt)("dl",null,(0,l.kt)("dt",null,(0,l.kt)("code",null,"activeWhen: (path)=> path.startsWith('/vue-app') || path.startsWith('/sub-app') ")),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app"),(0,l.kt)("dd",null,"\u2705 https://demo.app/sub-app"),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app2"),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app/about"),(0,l.kt)("dd",null,"\u2705 https://demo.app/sub-app/about"),(0,l.kt)("dd",null,"\u2705 https://demo.app/vue-app/detail/goods"),(0,l.kt)("dd",null,"\ud83d\udeab https://demo.app/react-app")))))}k.isMDXComponent=!0}}]);