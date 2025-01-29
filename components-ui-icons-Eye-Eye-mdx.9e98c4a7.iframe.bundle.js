/*! For license information please see components-ui-icons-Eye-Eye-mdx.9e98c4a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[5595,6729],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ui/icons/Eye/Eye.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_Eye:()=>_Eye,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Eye/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n\nimport React from 'react';\nimport Eye from '.';\n\nexport default {\n  title: 'UI Components/Icons/Eye',\n  component: Eye,\n};\n\nexport const _Eye = (args) => <Eye {...args} />;\n\n_Eye.argTypes = {\n  width: { control: 'text' },\n};\n\n_Eye.args = {\n  width: '2rem',\n};\n\n_Eye.story = {\n  name: 'Eye',\n};\n",locationsMap:{eye:{startLoc:{col:20,line:12},endLoc:{col:47,line:12},startBody:{col:20,line:12},endBody:{col:47,line:12}}}}},title:"UI Components/Icons/Eye",component:___WEBPACK_IMPORTED_MODULE_1__.A},_Eye=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});_Eye.displayName="_Eye",_Eye.argTypes={width:{control:"text"}},_Eye.args={width:"2rem"},_Eye.story={name:"Eye"},_Eye.parameters={..._Eye.parameters,docs:{..._Eye.parameters?.docs,source:{originalSource:"args => <Eye {...args} />",..._Eye.parameters?.docs?.source}}};const __namedExportsOrder=["_Eye"];try{_Eye.displayName="_Eye",_Eye.__docgenInfo={description:"",displayName:"_Eye",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Eye/Eye.stories.tsx#_Eye"]={docgenInfo:_Eye.__docgenInfo,name:"_Eye",path:"src/components/ui/icons/Eye/Eye.stories.tsx#_Eye"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Eye/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/icons/Svg.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Eye=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Svg__WEBPACK_IMPORTED_MODULE_1__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M12.006 7c2.627 0 4.897 1.813 6.339 3.334.888.934.888 2.398 0 3.332-1.442 1.52-3.712 3.334-6.34 3.334-2.626 0-4.897-1.813-6.34-3.335-.887-.933-.887-2.396.002-3.331C7.107 8.814 9.379 7 12.006 7zm0 1c-2.392 0-4.544 1.893-5.614 3.023-.512.539-.512 1.415-.001 1.954 1.07 1.13 3.223 3.022 5.615 3.022 2.39 0 4.544-1.893 5.613-3.022.513-.539.513-1.415 0-1.954C16.55 9.893 14.398 8 12.007 8zm0 1c1.653 0 3 1.346 3 3s-1.347 3-3 3c-1.655 0-3-1.346-3-3s1.345-3 3-3zm0 1c-1.104 0-2 .897-2 2s.896 2 2 2c1.102 0 2-.897 2-2s-.898-2-2-2z"})});Eye.displayName="Eye";const __WEBPACK_DEFAULT_EXPORT__=Eye;try{Eye.displayName="Eye",Eye.__docgenInfo={description:"",displayName:"Eye",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:null,description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Eye/index.tsx#Eye"]={docgenInfo:Eye.__docgenInfo,name:"Eye",path:"src/components/ui/icons/Eye/index.tsx#Eye"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/icons/Svg.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Svg=({className,children,viewBox="0 0 24 24",xmlns="http://www.w3.org/2000/svg",width,height,title,...otherProps})=>{const styles={width,height};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{xmlns,className:`Svg ${className||""}`,height,style:styles,viewBox,width,...otherProps,children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title",{children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g",{fillRule:"evenodd",fill:"currentColor",children})]})};Svg.displayName="Svg";const __WEBPACK_DEFAULT_EXPORT__=Svg;try{Svg.displayName="Svg",Svg.__docgenInfo={description:"",displayName:"Svg",props:{className:{defaultValue:null,description:"CSS classname to apply custom styles.",name:"className",required:!1,type:{name:"string | undefined"}},viewBox:{defaultValue:{value:"0 0 24 24"},description:"Defines the position and dimension of an SVG viewport. viewBox attribute is a list of four numbers: min-x, min-y, width and height.",name:"viewBox",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"The horizontal length of a SVG component.",name:"width",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"The vertical length of a SVG component.",name:"height",required:!1,type:{name:"string | undefined"}},title:{defaultValue:null,description:"The title of a SVG component.",name:"title",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional styling via styled component string.",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/icons/Svg.tsx#Svg"]={docgenInfo:Svg.__docgenInfo,name:"Svg",path:"src/components/ui/icons/Svg.tsx#Svg"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_k:()=>_light__WEBPACK_IMPORTED_MODULE_0__._,a5:()=>_dark__WEBPACK_IMPORTED_MODULE_1__.a,kH:()=>_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.k});var _light__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/theme/light.ts"),_dark__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/theme/dark.ts"),_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/theme/StyledReset.ts"),__webpack_require__("./src/theme/GlobalStyles.ts"))},"./src/components/ui/icons/Eye/Eye.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ui/icons/Eye/index.tsx"),_theme___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/theme/index.ts"),_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/theme/GlobalStyles.ts"),_Eye_stories_tsx__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/icons/Eye/Eye.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.W8,{of:_Eye_stories_tsx__WEBPACK_IMPORTED_MODULE_5__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"eye-icon",children:"Eye Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The Eye component creates an eye icon using inline SVG."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { Eye } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_8__.NP,{theme:_theme___WEBPACK_IMPORTED_MODULE_3__._k,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_theme_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.k,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.A,{width:"2rem"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Eye width="2rem" />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.A})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);