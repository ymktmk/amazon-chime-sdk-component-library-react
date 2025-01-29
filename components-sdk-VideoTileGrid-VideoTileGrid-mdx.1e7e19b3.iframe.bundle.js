(self.webpackChunkamazon_chime_sdk_component_library_react=self.webpackChunkamazon_chime_sdk_component_library_react||[]).push([[2698],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/sdk/ContentShare/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>ContentShare});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),_providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/ContentShareProvider/index.tsx"),_ui_ContentTile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/ContentTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ContentShare=({className,...rest})=>{const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_1__.n3)(),{tileId}=(0,_providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_2__.TD)(),videoEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(audioVideo&&videoEl.current&&tileId)return audioVideo.bindVideoElement(tileId,videoEl.current),()=>{audioVideo.getVideoTile(tileId)&&audioVideo.unbindVideoElement(tileId)}}),[audioVideo,tileId]),tileId?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_ContentTile__WEBPACK_IMPORTED_MODULE_3__.W,{objectFit:"contain",className:className||"",...rest,ref:videoEl}):null};try{ContentShare.displayName="ContentShare",ContentShare.__docgenInfo={description:"",displayName:"ContentShare",props:{nameplate:{defaultValue:null,description:"",name:"nameplate",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/ContentShare/index.tsx#ContentShare"]={docgenInfo:ContentShare.__docgenInfo,name:"ContentShare",path:"src/components/sdk/ContentShare/index.tsx#ContentShare"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/FeaturedRemoteVideos/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>FeaturedRemoteVideos});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ContentShareProvider/index.tsx"),_providers_FeaturedVideoTileProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/FeaturedVideoTileProvider/index.tsx"),_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/RemoteVideoTileProvider/index.tsx"),_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/providers/RosterProvider/index.tsx"),_ui_VideoGrid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/VideoGrid/index.tsx"),_RemoteVideo__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/sdk/RemoteVideo/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FeaturedRemoteVideos=props=>{const gridData=(0,_ui_VideoGrid__WEBPACK_IMPORTED_MODULE_5__.uy)(),{roster}=(0,_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_4__.A)(),{tileId:featuredTileId}=(0,_providers_FeaturedVideoTileProvider__WEBPACK_IMPORTED_MODULE_2__.b)(),{tileId:contentTileId}=(0,_providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_1__.TD)(),{tiles,tileIdToAttendeeId}=(0,_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_3__.C)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment,{children:tiles.map((tileId=>{const featured=!contentTileId&&featuredTileId===tileId,styles=gridData&&featured?"grid-area: ft;":"",classes=`${featured?"ch-featured-tile":""} ${props.className||""}`,attendee=roster[tileIdToAttendeeId[tileId]]||{},{name}=attendee;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RemoteVideo__WEBPACK_IMPORTED_MODULE_6__.A,{tileId,name,...props,className:classes,key:tileId,css:styles})}))})};try{FeaturedRemoteVideos.displayName="FeaturedRemoteVideos",FeaturedRemoteVideos.__docgenInfo={description:"",displayName:"FeaturedRemoteVideos",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/FeaturedRemoteVideos/index.tsx#FeaturedRemoteVideos"]={docgenInfo:FeaturedRemoteVideos.__docgenInfo,name:"FeaturedRemoteVideos",path:"src/components/sdk/FeaturedRemoteVideos/index.tsx#FeaturedRemoteVideos"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/LocalVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>LocalVideo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useApplyVideoObjectFit/index.tsx"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),_providers_LocalVideoProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/LocalVideoProvider/index.tsx"),_ui_VideoTile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledLocalVideo=(0,styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay)(_ui_VideoTile__WEBPACK_IMPORTED_MODULE_4__.A)`
  ${props=>props.active?"":"display: none"};
`,LocalVideo=({nameplate,...rest})=>{const{tileId,isVideoEnabled}=(0,_providers_LocalVideoProvider__WEBPACK_IMPORTED_MODULE_3__.o)(),audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__.n3)(),videoEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__.F)(videoEl),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(audioVideo&&tileId&&videoEl.current&&isVideoEnabled)return audioVideo.bindVideoElement(tileId,videoEl.current),()=>{audioVideo.getVideoTile(tileId)&&audioVideo.unbindVideoElement(tileId)}}),[audioVideo,tileId,isVideoEnabled]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLocalVideo,{active:isVideoEnabled,nameplate,ref:videoEl,...rest})};LocalVideo.displayName="LocalVideo";try{LocalVideo.displayName="LocalVideo",LocalVideo.__docgenInfo={description:"",displayName:"LocalVideo",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},nameplate:{defaultValue:null,description:"",name:"nameplate",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/LocalVideo/index.tsx#LocalVideo"]={docgenInfo:LocalVideo.__docgenInfo,name:"LocalVideo",path:"src/components/sdk/LocalVideo/index.tsx#LocalVideo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/RemoteVideo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>RemoteVideo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useApplyVideoObjectFit/index.tsx"),_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/AudioVideoProvider/index.tsx"),_ui_VideoTile__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ui/VideoTile/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RemoteVideo=({name,className,tileId,...rest})=>{const audioVideo=(0,_providers_AudioVideoProvider__WEBPACK_IMPORTED_MODULE_2__.n3)(),videoEl=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,_hooks_useApplyVideoObjectFit__WEBPACK_IMPORTED_MODULE_1__.F)(videoEl),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(audioVideo&&videoEl.current)return audioVideo.bindVideoElement(tileId,videoEl.current),()=>{audioVideo.getVideoTile(tileId)&&audioVideo.unbindVideoElement(tileId)}}),[audioVideo,tileId]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_VideoTile__WEBPACK_IMPORTED_MODULE_3__._,{...rest,ref:videoEl,nameplate:name,className:`ch-remote-video--${tileId} ${className||""}`})};RemoteVideo.displayName="RemoteVideo";try{RemoteVideo.displayName="RemoteVideo",RemoteVideo.__docgenInfo={description:"",displayName:"RemoteVideo",props:{tileId:{defaultValue:null,description:"The tile ID to bind the video element to",name:"tileId",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"The name to show on the video's nameplate",name:"name",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/RemoteVideo/index.tsx#RemoteVideo"]={docgenInfo:RemoteVideo.__docgenInfo,name:"RemoteVideo",path:"src/components/sdk/RemoteVideo/index.tsx#RemoteVideo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/RemoteVideos/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>RemoteVideos});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/RemoteVideoTileProvider/index.tsx"),_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/RosterProvider/index.tsx"),_RemoteVideo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/sdk/RemoteVideo/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RemoteVideos=props=>{const{roster}=(0,_providers_RosterProvider__WEBPACK_IMPORTED_MODULE_2__.A)(),{tiles,tileIdToAttendeeId}=(0,_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_1__.C)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:tiles.map((tileId=>{const attendee=roster[tileIdToAttendeeId[tileId]]||{},{name}=attendee;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RemoteVideo__WEBPACK_IMPORTED_MODULE_3__.A,{...props,key:tileId,tileId,name})}))})};try{RemoteVideos.displayName="RemoteVideos",RemoteVideos.__docgenInfo={description:"",displayName:"RemoteVideos",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/RemoteVideos/index.tsx#RemoteVideos"]={docgenInfo:RemoteVideos.__docgenInfo,name:"RemoteVideos",path:"src/components/sdk/RemoteVideos/index.tsx#RemoteVideos"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/VideoTileGrid/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>VideoTileGrid});__webpack_require__("./node_modules/react/index.js");var _providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/providers/ContentShareProvider/index.tsx"),_providers_FeaturedVideoTileProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/providers/FeaturedVideoTileProvider/index.tsx"),_providers_LocalVideoProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/providers/LocalVideoProvider/index.tsx"),_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/providers/RemoteVideoTileProvider/index.tsx"),_ui_VideoGrid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/ui/VideoGrid/index.tsx"),_ContentShare__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/sdk/ContentShare/index.tsx"),_FeaturedRemoteVideos__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/sdk/FeaturedRemoteVideos/index.tsx"),_LocalVideo__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/sdk/LocalVideo/index.tsx"),_RemoteVideos__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/sdk/RemoteVideos/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VideoTileGrid=({noRemoteVideoView,layout="featured",...rest})=>{const{tileId:featureTileId}=(0,_providers_FeaturedVideoTileProvider__WEBPACK_IMPORTED_MODULE_2__.b)(),{tiles}=(0,_providers_RemoteVideoTileProvider__WEBPACK_IMPORTED_MODULE_4__.C)(),{tileId:contentTileId}=(0,_providers_ContentShareProvider__WEBPACK_IMPORTED_MODULE_1__.TD)(),{isVideoEnabled}=(0,_providers_LocalVideoProvider__WEBPACK_IMPORTED_MODULE_3__.o)(),featured="featured"===layout&&!!featureTileId||!!contentTileId,remoteSize=tiles.length+(contentTileId?1:0),gridSize=remoteSize>1&&isVideoEnabled?remoteSize+1:remoteSize;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_ui_VideoGrid__WEBPACK_IMPORTED_MODULE_5__.YR,{...rest,size:gridSize,layout:featured?"featured":null,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ContentShare__WEBPACK_IMPORTED_MODULE_6__.P,{css:"grid-area: ft;"}),"featured"===layout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_FeaturedRemoteVideos__WEBPACK_IMPORTED_MODULE_7__.X,{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RemoteVideos__WEBPACK_IMPORTED_MODULE_9__.b,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_LocalVideo__WEBPACK_IMPORTED_MODULE_8__.f,{nameplate:"Me",css:gridSize>1?"\n  height: 100%;\n  width: 100%;\n":"\n  display: flex;\n  position: absolute;\n  bottom: 1rem;\n  right: 1rem;\n  width: 20vw;\n  max-height: 30vh;\n  height: auto;\n\n  video {\n    position: static;\n  }\n"}),0===remoteSize&&noRemoteVideoView]})};VideoTileGrid.displayName="VideoTileGrid";try{VideoTileGrid.displayName="VideoTileGrid",VideoTileGrid.__docgenInfo={description:"",displayName:"VideoTileGrid",props:{noRemoteVideoView:{defaultValue:null,description:"A component to render when there are no remote videos present",name:"noRemoteVideoView",required:!1,type:{name:"ReactNode"}},layout:{defaultValue:{value:"featured"},description:"The layout of the grid.",name:"layout",required:!1,type:{name:"Layout | undefined"}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional class names to apply to the element",name:"className",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/sdk/VideoTileGrid/index.tsx#VideoTileGrid"]={docgenInfo:VideoTileGrid.__docgenInfo,name:"VideoTileGrid",path:"src/components/sdk/VideoTileGrid/index.tsx#VideoTileGrid"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ui/Base/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>baseSpacing,i:()=>baseStyles});var styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const baseStyles=({css})=>css?`@media { ${css} };`:"",baseSpacing=props=>(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.xe)(props)},"./src/components/ui/ContentTile/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,W:()=>ContentTile});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ui_VideoTile__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/ui/VideoTile/index.tsx");const ContentTile=(0,styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay)(_ui_VideoTile__WEBPACK_IMPORTED_MODULE_0__._)`
  background-color: ${({theme})=>theme.colors.greys.grey80};
`,__WEBPACK_DEFAULT_EXPORT__=ContentTile;try{ContentTile.displayName="ContentTile",ContentTile.__docgenInfo={description:"",displayName:"ContentTile",props:{css:{defaultValue:null,description:"Optional css",name:"css",required:!1,type:{name:"string | undefined"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLVideoElement | null) => void) | RefObject<HTMLVideoElement> | null | undefined"}},nameplate:{defaultValue:null,description:"The name to show on the video tile",name:"nameplate",required:!1,type:{name:"string | undefined"}},objectFit:{defaultValue:null,description:"Specifies which CSS object-fit value to apply to the VideoTile so that it resizes to fit its container",name:"objectFit",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fill"'},{value:'"none"'},{value:'"contain"'},{value:'"cover"'},{value:'"scale-down"'}]}},tag:{defaultValue:null,description:"Optional tag to render the component as a different HTML tag",name:"tag",required:!1,type:{name:"any"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ui/ContentTile/index.tsx#ContentTile"]={docgenInfo:ContentTile.__docgenInfo,name:"ContentTile",path:"src/components/ui/ContentTile/index.tsx#ContentTile"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useApplyVideoObjectFit/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>useApplyVideoObjectFit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useApplyVideoObjectFit(videoEl){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{function onLoaded(){if(!videoEl.current)return;const height=videoEl.current.videoHeight,width=videoEl.current.videoWidth;videoEl.current.style.objectFit=height>width?"contain":"cover"}return videoEl.current?.addEventListener("loadedmetadata",onLoaded),()=>videoEl.current?.removeEventListener("loadedmetadata",onLoaded)}),[videoEl])}try{useApplyVideoObjectFit.displayName="useApplyVideoObjectFit",useApplyVideoObjectFit.__docgenInfo={description:"",displayName:"useApplyVideoObjectFit",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useApplyVideoObjectFit/index.tsx#useApplyVideoObjectFit"]={docgenInfo:useApplyVideoObjectFit.__docgenInfo,name:"useApplyVideoObjectFit",path:"src/hooks/useApplyVideoObjectFit/index.tsx#useApplyVideoObjectFit"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/sdk/VideoTileGrid/VideoTileGrid.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/sdk/VideoTileGrid/index.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"SDK Components/VideoTileGrid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"videotilegrid",children:"VideoTileGrid"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"VideoTileGrid"})," component renders all meeting session video tiles in a responsive grid layout. This includes the local tile, remote tiles, and content share tile. By default a user joins without video, so in order to see the VideoTileGrid there must be at least one video tile being shared. To start sharing a video, see the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"?path=/docs/sdk-components-localvideo--page",children:"LocalVideo"})," component."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing",children:"Importing"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-javascript",children:"import { VideoTileGrid } from 'amazon-chime-sdk-component-library-react';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import React from 'react';\nimport {\n  MeetingProvider,\n  VideoTileGrid\n} from 'amazon-chime-sdk-component-library-react';\n\nconst App = () => (\n  <MeetingProvider>\n    <VideoTileGrid />\n  </MeetingProvider>\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ov,{of:___WEBPACK_IMPORTED_MODULE_2__.c})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_amazon_chime_sdk_component_library_react_amazon_chime_sdk_component_library_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);
//# sourceMappingURL=components-sdk-VideoTileGrid-VideoTileGrid-mdx.1e7e19b3.iframe.bundle.js.map