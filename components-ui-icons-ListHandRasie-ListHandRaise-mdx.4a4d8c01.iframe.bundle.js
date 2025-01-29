/*! For license information please see components-ui-icons-ListHandRasie-ListHandRaise-mdx.4a4d8c01.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[935,7565],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/icons/ListHandRasie/ListHandRaise.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_ListHandRaise:()=>_ListHandRaise,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/ListHandRasie/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport ListHandRaise from '.';\n\nexport default {\n  title: 'UI Components/Icons/ListHandRaise',\n  component: ListHandRaise,\n};\n\nexport const _ListHandRaise = (args) => <ListHandRaise {...args} />;\n\n_ListHandRaise.argTypes = {\n  width: { control: 'text' },\n};\n\n_ListHandRaise.args = {\n  width: '2rem',\n};\n\n_ListHandRaise.story = {\n  name: 'ListHandRaise',\n};\n",locationsMap:{"list-hand-raise":{startLoc:{col:30,line:12},endLoc:{col:67,line:12},startBody:{col:30,line:12},endBody:{col:67,line:12}}}}},title:"UI Components/Icons/ListHandRaise",component:___WEBPACK_IMPORTED_MODULE_1__.A},_ListHandRaise=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});_ListHandRaise.displayName="_ListHandRaise",_ListHandRaise.argTypes={width:{control:"text"}},_ListHandRaise.args={width:"2rem"},_ListHandRaise.story={name:"ListHandRaise"},_ListHandRaise.parameters={..._ListHandRaise.parameters,docs:{..._ListHandRaise.parameters?.docs,source:{originalSource:"args => <ListHandRaise {...args} />",..._ListHandRaise.parameters?.docs?.source}}};const __namedExportsOrder=["_ListHandRaise"];try{_ListHandRaise.displayName="_ListHandRaise",_ListHandRaise.__docgenInfo={description:"",displayName:"_ListHandRaise",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/ListHandRasie/ListHandRaise.stories.tsx#_ListHandRaise"]={docgenInfo:_ListHandRaise.__docgenInfo,name:"_ListHandRaise",path:"src/components/ui/icons/ListHandRasie/ListHandRaise.stories.tsx#_ListHandRaise"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/ListHandRasie/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ListHandRaise=({...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.A,{...rest,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M16.06 10.682c1.623 0 2.943 1.32 2.943 2.942v3.434c0 1.622-1.32 2.942-2.942 2.942h-3.34c-1.623 0-2.944-1.32-2.944-2.942v-3.434c0-1.622 1.32-2.942 2.944-2.942zm0 1h-3.34c-1.072 0-1.944.87-1.944 1.942v3.434c0 1.07.873 1.942 1.944 1.942h3.34c1.072 0 1.943-.871 1.943-1.942v-3.434c0-1.071-.872-1.942-1.942-1.942zm-.033 4.863c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2.13c-.275 0-.5-.224-.5-.5 0-.245.178-.45.411-.492l.09-.008h2.129zm-3.109.146c.1.09.15.22.15.35 0 .07-.01.13-.04.19-.02.07-.06.12-.11.17-.09.09-.22.14-.35.14-.14 0-.26-.05-.35-.14-.05-.05-.09-.1-.11-.17-.03-.06-.04-.12-.04-.19 0-.13.05-.26.15-.35.18-.19.51-.19.7 0zm0-1.7c.1.09.15.221.15.351 0 .13-.05.26-.15.35-.09.1-.22.15-.35.15-.07 0-.13-.01-.19-.04-.07-.02-.12-.06-.16-.11-.1-.09-.15-.22-.15-.35 0-.07.01-.13.04-.19.02-.06.06-.12.11-.16.18-.19.521-.19.7 0zm-2.042-10.99c.485 0 .91.287 1.136.714.151-.064.314-.1.485-.1.68 0 1.24.566 1.304 1.286l.006.137v.123c.1-.029.203-.043.311-.043.68 0 1.24.597 1.304 1.359l.006.144v1.625c0 .276-.223.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V7.621c0-.288-.164-.503-.31-.503-.13 0-.275.17-.305.41l-.006.093v1.674c0 .277-.223.5-.5.5-.245 0-.45-.176-.492-.41l-.008-.09V6.038c0-.23-.142-.423-.31-.423-.147 0-.275.148-.305.34l-.006.083V9.25c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V5.423c0-.229-.142-.423-.31-.423-.147 0-.275.149-.305.34l-.006.083v3.768c0 .276-.224.5-.5.5-.245 0-.45-.177-.492-.41l-.008-.09V6.588c0-.287-.164-.5-.311-.5-.13 0-.274.168-.304.408l-.006.092v5.567c0 .276-.224.5-.5.5-.111 0-.249-.037-.348-.104l-.066-.056-1.1-1.185c-.403-.519-.637-.565-.7-.568-.026.001-.098-.003-.194.101-.07.078-.04.38.116.65l.064.1 1.461 2.012c.002.002.493.657 1.227 1.38.197.192.199.51.006.706-.098.1-.228.15-.357.15-.127 0-.253-.048-.35-.144-.745-.732-1.248-1.388-1.322-1.487l-.009-.012-1.466-2.019c-.426-.592-.599-1.47-.11-2.009.267-.292.609-.456.975-.427.438.018.87.272 1.284.754l.137.168.252.27V6.588c0-.828.588-1.5 1.31-1.5.117 0 .23.016.337.05C9.714 4.488 10.244 4 10.876 4zm4.318 10.84c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-1.296c-.276 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h1.296zm-2.276-1.56c.1.101.15.22.15.36 0 .13-.05.25-.15.35-.09.09-.22.15-.35.15-.14 0-.26-.06-.35-.15-.1-.09-.15-.22-.15-.35 0-.07.01-.14.04-.2.02-.059.06-.11.11-.16.18-.18.521-.18.7 0zm3.294-.143c.276 0 .5.224.5.5 0 .245-.177.45-.41.492l-.09.008h-2.314c-.277 0-.5-.224-.5-.5 0-.246.177-.45.41-.492l.09-.008h2.314z"})});ListHandRaise.displayName="ListHandRaise",ListHandRaise.displayName="ListHandRaise";const __WEBPACK_DEFAULT_EXPORT__=ListHandRaise;try{ListHandRaise.displayName="ListHandRaise",ListHandRaise.__docgenInfo={description:"",displayName:"ListHandRaise",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/ListHandRasie/index.tsx#ListHandRaise"]={docgenInfo:ListHandRaise.__docgenInfo,name:"ListHandRaise",path:"src/components/ui/icons/ListHandRasie/index.tsx#ListHandRaise"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_k:()=>_light__WEBPACK_IMPORTED_MODULE_0__._,a5:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.a,kH:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.k});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/icons/ListHandRasie/ListHandRaise.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/ListHandRasie/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/GlobalStyles.ts"),_ListHandRaise_stories_tsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/icons/ListHandRasie/ListHandRaise.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.W8,{of:_ListHandRaise_stories_tsx__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"listhandraise-icon",children:"ListHandRaise Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The ListHandRaise component creates an ListHandRaise icon using inline SVG."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { ListHandRaise } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_8__.NP,{theme:_theme___WEBPACK_IMPORTED_MODULE_3__._k,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.k,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{width:"2rem"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<ListHandRaise width="2rem" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.A})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);