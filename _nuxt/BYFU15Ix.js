const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VOyda--L.js","./D_vluf58.js","./entry.BuaL0_O2.css","./C3ymAs7h.js","./DWnPW5tP.js","./Dd2gLQCX.js","./CUWIWHhy.js","./ByY7f5MS.js","./vmA1mMKr.js","./CnnHwRr6.js","./CpVPO0t0.js","./CaMrKZab.js","./DJDHKK_C.js","./D5kvRJUc.js","./ClCVn2ms.js","./DYMXYo77.js","./UD6BnfnY.js","./DMif1mDF.js","./D0umrAze.js","./Ce0TjmYa.js","./lYg7nrNB.js","./Ch8KxytG.js","./DIw2WdW-.js","./BV3Gm3_9.js","./CLpiPi9l.js","./DMNNWs4Z.js","./D-Tepxa5.js","./mE5CF4eX.js","./Ci0cGFwk.js","./Ows_Ykgy.js","./CP2ZIcSx.js","./S6PstjS7.js","./BkS1sTbC.js","./Vxst8i2-.js","./B4ZZxOpI.js","./CyNk6FAI.js","./Yee0Q0xe.js","./Dtsyb0NN.js","./BHtXJ3Ok.js","./CY9MuDDK.js","./CHZpMHUY.js","./Db_4wKf5.js","./_vEmJh0x.js","./BI26WOud.js","./RtHNwvX6.js","./9QQbRdav.js","./SxJphYdB.js","./Cq8V1E-s.js","./BAS1zYMd.js","./_dZT-YxD.js","./CndFcx4G.js","./BMzgHXEg.js","./B9ufQLVk.js","./DJxXz5x9.js","./yAce530s.js","./DX5tYnkc.js","./V_C0HR1I.js","./ChzFOyoO.js","./DqaYSgC-.js","./OekruNMl.js","./CkgmG5Km.js","./Dt7QG23C.js","./D1bPan-7.js","./DoMcWWBW.js","./GYJRlxEq.js","./LaxKZh48.js","./BXaLSapU.js","./D7BSVdyQ.js","./CtoDZHKh.js","./H9vAFKao.js","./DGnHE2K5.js","./DZT0MwC9.js","./CBlBpmmj.js","./CE9nxfo6.js","./D3DCdTDx.js","./ByejedmA.js","./a2Fqwp8p.js","./DFUXbXWg.js","./CgSp9tny.js","./DD2-T1m2.js","./B51HHUeh.js","./C3YP5Gdz.js","./CjrzkDGH.js"])))=>i.map(i=>d[i]);
import{cJ as z,cK as B,cL as T,L as P,O as R,S as M,M as L,N as S,Z as i,E as j}from"./D_vluf58.js";const w={getSpacingStyles(t,r){if(Array.isArray(t))return t[r]?`var(--wui-spacing-${t[r]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:r,charsEnd:e,truncate:o}){return t.length<=r+e?t:o==="end"?`${t.substring(0,r)}...`:o==="start"?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(r))}...${t.substring(t.length-Math.floor(e))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(e),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let d=0;d<5;d+=1){const p=this.tintColor(o,.15*d);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const r=parseInt(t,16),e=r>>16&255,o=r>>8&255,n=r&255;return[e,o,n]},tintColor(t,r){const[e,o,n]=t,a=Math.round(e+(255-e)*r),s=Math.round(o+(255-o)*r),c=Math.round(n+(255-n)*r);return[a,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var r;return t||(typeof window<"u"&&window.matchMedia&&typeof window.matchMedia=="function"?(r=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&r.matches?"dark":"light":"dark")},splitBalance(t){const r=t.split(".");return r.length===2?[r[0],r[1]]:["0","00"]},roundNumber(t,r,e){return t.toString().length>=r?Number(t).toFixed(e):t},formatNumberToLocalString(t,r=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:r,minimumFractionDigits:r})}};function H(t,r){const{kind:e,elements:o}=r;return{kind:e,elements:o,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function U(t,r){return customElements.get(t)||customElements.define(t,r),r}function I(t){return function(e){return typeof e=="function"?U(t,e):H(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:z},N=(t=F,r,e)=>{const{kind:o,metadata:n}=e;let a=globalThis.litPropertyMetadata.get(n);if(a===void 0&&globalThis.litPropertyMetadata.set(n,a=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),a.set(e.name,t),o==="accessor"){const{name:s}=e;return{set(c){const u=r.get.call(this);r.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(o==="setter"){const{name:s}=e;return function(c){const u=this[s];r.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(r,e)=>typeof e=="object"?N(t,r,e):((o,n,a)=>{const s=n.hasOwnProperty(a);return n.constructor.createProperty(a,o),s?Object.getOwnPropertyDescriptor(n,a):void 0})(t,r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=t=>t===null||typeof t!="object"&&typeof t!="function",W=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...r)=>({_$litDirective$:t,values:r});let x=class{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,e,o){this._$Ct=r,this._$AM=e,this._$Ci=o}_$AS(r,e){return this.update(r,e)}update(r,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=(t,r)=>{var o;const e=t._$AN;if(e===void 0)return!1;for(const n of e)(o=n._$AO)==null||o.call(n,r,!1),h(n,r);return!0},E=t=>{let r,e;do{if((r=t._$AM)===void 0)break;e=r._$AN,e.delete(t),t=r}while((e==null?void 0:e.size)===0)},k=t=>{for(let r;r=t._$AM;t=r){let e=r._$AN;if(e===void 0)r._$AN=e=new Set;else if(e.has(t))break;e.add(t),Z(r)}};function q(t){this._$AN!==void 0?(E(this),this._$AM=t,k(this)):this._$AM=t}function K(t,r=!1,e=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(r)if(Array.isArray(o))for(let a=e;a<o.length;a++)h(o[a],!1),E(o[a]);else o!=null&&(h(o,!1),E(o));else h(this,t)}const Z=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=K),t._$AQ??(t._$AQ=q))};class X extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,e,o){super._$AT(r,e,o),k(this),this.isConnected=r._$AU}_$AO(r,e=!0){var o,n;r!==this.isConnected&&(this.isConnected=r,r?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),e&&(h(this,r),E(this))}setValue(r){if(W(this._$Ct))this._$Ct._$AI(r,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=r,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Y{constructor(r){this.G=r}disconnect(){this.G=void 0}reconnect(r){this.G=r}deref(){return this.G}}class J{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(r=>this.Z=r))}resume(){var r;(r=this.Z)==null||r.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=t=>!G(t)&&typeof t.then=="function",D=1073741823;class Q extends X{constructor(){super(...arguments),this._$Cwt=D,this._$Cbt=[],this._$CK=new Y(this),this._$CX=new J}render(...r){return r.find(e=>!O(e))??T}update(r,e){const o=this._$Cbt;let n=o.length;this._$Cbt=e;const a=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<e.length&&!(c>this._$Cwt);c++){const u=e[c];if(!O(u))return this._$Cwt=c,u;c<n&&u===o[c]||(this._$Cwt=D,n=0,Promise.resolve(u).then(async d=>{for(;s.get();)await s.get();const p=a.deref();if(p!==void 0){const $=p._$Cbt.indexOf(u);$>-1&&$<p._$Cwt&&(p._$Cwt=$,p.setValue(d))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(Q);class rt{constructor(){this.cache=new Map}set(r,e){this.cache.set(r,e)}get(r){return this.cache.get(r)}has(r){return this.cache.has(r)}delete(r){this.cache.delete(r)}clear(){this.cache.clear()}}const A=new rt,et=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var f=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(n<3?s(a):n>3?s(r,e,a):s(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};const b={add:async()=>(await i(async()=>{const{addSvg:t}=await import("./VOyda--L.js");return{addSvg:t}},__vite__mapDeps([0,1,2]),import.meta.url)).addSvg,allWallets:async()=>(await i(async()=>{const{allWalletsSvg:t}=await import("./C3ymAs7h.js");return{allWalletsSvg:t}},__vite__mapDeps([3,1,2]),import.meta.url)).allWalletsSvg,arrowBottomCircle:async()=>(await i(async()=>{const{arrowBottomCircleSvg:t}=await import("./DWnPW5tP.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([4,1,2]),import.meta.url)).arrowBottomCircleSvg,appStore:async()=>(await i(async()=>{const{appStoreSvg:t}=await import("./Dd2gLQCX.js");return{appStoreSvg:t}},__vite__mapDeps([5,1,2]),import.meta.url)).appStoreSvg,apple:async()=>(await i(async()=>{const{appleSvg:t}=await import("./CUWIWHhy.js");return{appleSvg:t}},__vite__mapDeps([6,1,2]),import.meta.url)).appleSvg,arrowBottom:async()=>(await i(async()=>{const{arrowBottomSvg:t}=await import("./ByY7f5MS.js");return{arrowBottomSvg:t}},__vite__mapDeps([7,1,2]),import.meta.url)).arrowBottomSvg,arrowLeft:async()=>(await i(async()=>{const{arrowLeftSvg:t}=await import("./vmA1mMKr.js");return{arrowLeftSvg:t}},__vite__mapDeps([8,1,2]),import.meta.url)).arrowLeftSvg,arrowRight:async()=>(await i(async()=>{const{arrowRightSvg:t}=await import("./CnnHwRr6.js");return{arrowRightSvg:t}},__vite__mapDeps([9,1,2]),import.meta.url)).arrowRightSvg,arrowTop:async()=>(await i(async()=>{const{arrowTopSvg:t}=await import("./CpVPO0t0.js");return{arrowTopSvg:t}},__vite__mapDeps([10,1,2]),import.meta.url)).arrowTopSvg,bank:async()=>(await i(async()=>{const{bankSvg:t}=await import("./CaMrKZab.js");return{bankSvg:t}},__vite__mapDeps([11,1,2]),import.meta.url)).bankSvg,browser:async()=>(await i(async()=>{const{browserSvg:t}=await import("./DJDHKK_C.js");return{browserSvg:t}},__vite__mapDeps([12,1,2]),import.meta.url)).browserSvg,bin:async()=>(await i(async()=>{const{binSvg:t}=await import("./D5kvRJUc.js");return{binSvg:t}},__vite__mapDeps([13,1,2]),import.meta.url)).binSvg,bitcoin:async()=>(await i(async()=>{const{bitcoinSvg:t}=await import("./ClCVn2ms.js");return{bitcoinSvg:t}},__vite__mapDeps([14,1,2]),import.meta.url)).bitcoinSvg,card:async()=>(await i(async()=>{const{cardSvg:t}=await import("./DYMXYo77.js");return{cardSvg:t}},__vite__mapDeps([15,1,2]),import.meta.url)).cardSvg,checkmark:async()=>(await i(async()=>{const{checkmarkSvg:t}=await import("./UD6BnfnY.js");return{checkmarkSvg:t}},__vite__mapDeps([16,1,2]),import.meta.url)).checkmarkSvg,checkmarkBold:async()=>(await i(async()=>{const{checkmarkBoldSvg:t}=await import("./DMif1mDF.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([17,1,2]),import.meta.url)).checkmarkBoldSvg,chevronBottom:async()=>(await i(async()=>{const{chevronBottomSvg:t}=await import("./D0umrAze.js");return{chevronBottomSvg:t}},__vite__mapDeps([18,1,2]),import.meta.url)).chevronBottomSvg,chevronLeft:async()=>(await i(async()=>{const{chevronLeftSvg:t}=await import("./Ce0TjmYa.js");return{chevronLeftSvg:t}},__vite__mapDeps([19,1,2]),import.meta.url)).chevronLeftSvg,chevronRight:async()=>(await i(async()=>{const{chevronRightSvg:t}=await import("./lYg7nrNB.js");return{chevronRightSvg:t}},__vite__mapDeps([20,1,2]),import.meta.url)).chevronRightSvg,chevronTop:async()=>(await i(async()=>{const{chevronTopSvg:t}=await import("./Ch8KxytG.js");return{chevronTopSvg:t}},__vite__mapDeps([21,1,2]),import.meta.url)).chevronTopSvg,chromeStore:async()=>(await i(async()=>{const{chromeStoreSvg:t}=await import("./DIw2WdW-.js");return{chromeStoreSvg:t}},__vite__mapDeps([22,1,2]),import.meta.url)).chromeStoreSvg,clock:async()=>(await i(async()=>{const{clockSvg:t}=await import("./BV3Gm3_9.js");return{clockSvg:t}},__vite__mapDeps([23,1,2]),import.meta.url)).clockSvg,close:async()=>(await i(async()=>{const{closeSvg:t}=await import("./CLpiPi9l.js");return{closeSvg:t}},__vite__mapDeps([24,1,2]),import.meta.url)).closeSvg,compass:async()=>(await i(async()=>{const{compassSvg:t}=await import("./DMNNWs4Z.js");return{compassSvg:t}},__vite__mapDeps([25,1,2]),import.meta.url)).compassSvg,coinPlaceholder:async()=>(await i(async()=>{const{coinPlaceholderSvg:t}=await import("./D-Tepxa5.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([26,1,2]),import.meta.url)).coinPlaceholderSvg,copy:async()=>(await i(async()=>{const{copySvg:t}=await import("./mE5CF4eX.js");return{copySvg:t}},__vite__mapDeps([27,1,2]),import.meta.url)).copySvg,cursor:async()=>(await i(async()=>{const{cursorSvg:t}=await import("./Ci0cGFwk.js");return{cursorSvg:t}},__vite__mapDeps([28,1,2]),import.meta.url)).cursorSvg,cursorTransparent:async()=>(await i(async()=>{const{cursorTransparentSvg:t}=await import("./Ows_Ykgy.js");return{cursorTransparentSvg:t}},__vite__mapDeps([29,1,2]),import.meta.url)).cursorTransparentSvg,circle:async()=>(await i(async()=>{const{circleSvg:t}=await import("./CP2ZIcSx.js");return{circleSvg:t}},__vite__mapDeps([30,1,2]),import.meta.url)).circleSvg,desktop:async()=>(await i(async()=>{const{desktopSvg:t}=await import("./S6PstjS7.js");return{desktopSvg:t}},__vite__mapDeps([31,1,2]),import.meta.url)).desktopSvg,disconnect:async()=>(await i(async()=>{const{disconnectSvg:t}=await import("./BkS1sTbC.js");return{disconnectSvg:t}},__vite__mapDeps([32,1,2]),import.meta.url)).disconnectSvg,discord:async()=>(await i(async()=>{const{discordSvg:t}=await import("./Vxst8i2-.js");return{discordSvg:t}},__vite__mapDeps([33,1,2]),import.meta.url)).discordSvg,ethereum:async()=>(await i(async()=>{const{ethereumSvg:t}=await import("./B4ZZxOpI.js");return{ethereumSvg:t}},__vite__mapDeps([34,1,2]),import.meta.url)).ethereumSvg,etherscan:async()=>(await i(async()=>{const{etherscanSvg:t}=await import("./CyNk6FAI.js");return{etherscanSvg:t}},__vite__mapDeps([35,1,2]),import.meta.url)).etherscanSvg,extension:async()=>(await i(async()=>{const{extensionSvg:t}=await import("./Yee0Q0xe.js");return{extensionSvg:t}},__vite__mapDeps([36,1,2]),import.meta.url)).extensionSvg,externalLink:async()=>(await i(async()=>{const{externalLinkSvg:t}=await import("./Dtsyb0NN.js");return{externalLinkSvg:t}},__vite__mapDeps([37,1,2]),import.meta.url)).externalLinkSvg,facebook:async()=>(await i(async()=>{const{facebookSvg:t}=await import("./BHtXJ3Ok.js");return{facebookSvg:t}},__vite__mapDeps([38,1,2]),import.meta.url)).facebookSvg,farcaster:async()=>(await i(async()=>{const{farcasterSvg:t}=await import("./CY9MuDDK.js");return{farcasterSvg:t}},__vite__mapDeps([39,1,2]),import.meta.url)).farcasterSvg,filters:async()=>(await i(async()=>{const{filtersSvg:t}=await import("./CHZpMHUY.js");return{filtersSvg:t}},__vite__mapDeps([40,1,2]),import.meta.url)).filtersSvg,github:async()=>(await i(async()=>{const{githubSvg:t}=await import("./Db_4wKf5.js");return{githubSvg:t}},__vite__mapDeps([41,1,2]),import.meta.url)).githubSvg,google:async()=>(await i(async()=>{const{googleSvg:t}=await import("./_vEmJh0x.js");return{googleSvg:t}},__vite__mapDeps([42,1,2]),import.meta.url)).googleSvg,helpCircle:async()=>(await i(async()=>{const{helpCircleSvg:t}=await import("./BI26WOud.js");return{helpCircleSvg:t}},__vite__mapDeps([43,1,2]),import.meta.url)).helpCircleSvg,image:async()=>(await i(async()=>{const{imageSvg:t}=await import("./RtHNwvX6.js");return{imageSvg:t}},__vite__mapDeps([44,1,2]),import.meta.url)).imageSvg,id:async()=>(await i(async()=>{const{idSvg:t}=await import("./9QQbRdav.js");return{idSvg:t}},__vite__mapDeps([45,1,2]),import.meta.url)).idSvg,infoCircle:async()=>(await i(async()=>{const{infoCircleSvg:t}=await import("./SxJphYdB.js");return{infoCircleSvg:t}},__vite__mapDeps([46,1,2]),import.meta.url)).infoCircleSvg,lightbulb:async()=>(await i(async()=>{const{lightbulbSvg:t}=await import("./Cq8V1E-s.js");return{lightbulbSvg:t}},__vite__mapDeps([47,1,2]),import.meta.url)).lightbulbSvg,mail:async()=>(await i(async()=>{const{mailSvg:t}=await import("./BAS1zYMd.js");return{mailSvg:t}},__vite__mapDeps([48,1,2]),import.meta.url)).mailSvg,mobile:async()=>(await i(async()=>{const{mobileSvg:t}=await import("./_dZT-YxD.js");return{mobileSvg:t}},__vite__mapDeps([49,1,2]),import.meta.url)).mobileSvg,more:async()=>(await i(async()=>{const{moreSvg:t}=await import("./CndFcx4G.js");return{moreSvg:t}},__vite__mapDeps([50,1,2]),import.meta.url)).moreSvg,networkPlaceholder:async()=>(await i(async()=>{const{networkPlaceholderSvg:t}=await import("./BMzgHXEg.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([51,1,2]),import.meta.url)).networkPlaceholderSvg,nftPlaceholder:async()=>(await i(async()=>{const{nftPlaceholderSvg:t}=await import("./B9ufQLVk.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([52,1,2]),import.meta.url)).nftPlaceholderSvg,off:async()=>(await i(async()=>{const{offSvg:t}=await import("./DJxXz5x9.js");return{offSvg:t}},__vite__mapDeps([53,1,2]),import.meta.url)).offSvg,playStore:async()=>(await i(async()=>{const{playStoreSvg:t}=await import("./yAce530s.js");return{playStoreSvg:t}},__vite__mapDeps([54,1,2]),import.meta.url)).playStoreSvg,plus:async()=>(await i(async()=>{const{plusSvg:t}=await import("./DX5tYnkc.js");return{plusSvg:t}},__vite__mapDeps([55,1,2]),import.meta.url)).plusSvg,qrCode:async()=>(await i(async()=>{const{qrCodeIcon:t}=await import("./V_C0HR1I.js");return{qrCodeIcon:t}},__vite__mapDeps([56,1,2]),import.meta.url)).qrCodeIcon,recycleHorizontal:async()=>(await i(async()=>{const{recycleHorizontalSvg:t}=await import("./ChzFOyoO.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([57,1,2]),import.meta.url)).recycleHorizontalSvg,refresh:async()=>(await i(async()=>{const{refreshSvg:t}=await import("./DqaYSgC-.js");return{refreshSvg:t}},__vite__mapDeps([58,1,2]),import.meta.url)).refreshSvg,search:async()=>(await i(async()=>{const{searchSvg:t}=await import("./OekruNMl.js");return{searchSvg:t}},__vite__mapDeps([59,1,2]),import.meta.url)).searchSvg,send:async()=>(await i(async()=>{const{sendSvg:t}=await import("./CkgmG5Km.js");return{sendSvg:t}},__vite__mapDeps([60,1,2]),import.meta.url)).sendSvg,swapHorizontal:async()=>(await i(async()=>{const{swapHorizontalSvg:t}=await import("./Dt7QG23C.js");return{swapHorizontalSvg:t}},__vite__mapDeps([61,1,2]),import.meta.url)).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i(async()=>{const{swapHorizontalMediumSvg:t}=await import("./D1bPan-7.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([62,1,2]),import.meta.url)).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i(async()=>{const{swapHorizontalBoldSvg:t}=await import("./DoMcWWBW.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([63,1,2]),import.meta.url)).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./GYJRlxEq.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([64,1,2]),import.meta.url)).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i(async()=>{const{swapVerticalSvg:t}=await import("./LaxKZh48.js");return{swapVerticalSvg:t}},__vite__mapDeps([65,1,2]),import.meta.url)).swapVerticalSvg,solana:async()=>(await i(async()=>{const{solanaSvg:t}=await import("./BXaLSapU.js");return{solanaSvg:t}},__vite__mapDeps([66,1,2]),import.meta.url)).solanaSvg,telegram:async()=>(await i(async()=>{const{telegramSvg:t}=await import("./D7BSVdyQ.js");return{telegramSvg:t}},__vite__mapDeps([67,1,2]),import.meta.url)).telegramSvg,threeDots:async()=>(await i(async()=>{const{threeDotsSvg:t}=await import("./CtoDZHKh.js");return{threeDotsSvg:t}},__vite__mapDeps([68,1,2]),import.meta.url)).threeDotsSvg,twitch:async()=>(await i(async()=>{const{twitchSvg:t}=await import("./H9vAFKao.js");return{twitchSvg:t}},__vite__mapDeps([69,1,2]),import.meta.url)).twitchSvg,twitter:async()=>(await i(async()=>{const{xSvg:t}=await import("./DGnHE2K5.js");return{xSvg:t}},__vite__mapDeps([70,1,2]),import.meta.url)).xSvg,twitterIcon:async()=>(await i(async()=>{const{twitterIconSvg:t}=await import("./DZT0MwC9.js");return{twitterIconSvg:t}},__vite__mapDeps([71,1,2]),import.meta.url)).twitterIconSvg,user:async()=>(await i(async()=>{const{userSvg:t}=await import("./CBlBpmmj.js");return{userSvg:t}},__vite__mapDeps([72,1,2]),import.meta.url)).userSvg,verify:async()=>(await i(async()=>{const{verifySvg:t}=await import("./CE9nxfo6.js");return{verifySvg:t}},__vite__mapDeps([73,1,2]),import.meta.url)).verifySvg,verifyFilled:async()=>(await i(async()=>{const{verifyFilledSvg:t}=await import("./D3DCdTDx.js");return{verifyFilledSvg:t}},__vite__mapDeps([74,1,2]),import.meta.url)).verifyFilledSvg,wallet:async()=>(await i(async()=>{const{walletSvg:t}=await import("./ByejedmA.js");return{walletSvg:t}},__vite__mapDeps([75,1,2]),import.meta.url)).walletSvg,walletConnect:async()=>(await i(async()=>{const{walletConnectSvg:t}=await import("./a2Fqwp8p.js");return{walletConnectSvg:t}},__vite__mapDeps([76,1,2]),import.meta.url)).walletConnectSvg,walletConnectLightBrown:async()=>(await i(async()=>{const{walletConnectLightBrownSvg:t}=await import("./a2Fqwp8p.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([76,1,2]),import.meta.url)).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i(async()=>{const{walletConnectBrownSvg:t}=await import("./a2Fqwp8p.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([76,1,2]),import.meta.url)).walletConnectBrownSvg,walletPlaceholder:async()=>(await i(async()=>{const{walletPlaceholderSvg:t}=await import("./DFUXbXWg.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([77,1,2]),import.meta.url)).walletPlaceholderSvg,warningCircle:async()=>(await i(async()=>{const{warningCircleSvg:t}=await import("./CgSp9tny.js");return{warningCircleSvg:t}},__vite__mapDeps([78,1,2]),import.meta.url)).warningCircleSvg,x:async()=>(await i(async()=>{const{xSvg:t}=await import("./DGnHE2K5.js");return{xSvg:t}},__vite__mapDeps([70,1,2]),import.meta.url)).xSvg,info:async()=>(await i(async()=>{const{infoSvg:t}=await import("./DD2-T1m2.js");return{infoSvg:t}},__vite__mapDeps([79,1,2]),import.meta.url)).infoSvg,exclamationTriangle:async()=>(await i(async()=>{const{exclamationTriangleSvg:t}=await import("./B51HHUeh.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([80,1,2]),import.meta.url)).exclamationTriangleSvg,reown:async()=>(await i(async()=>{const{reownSvg:t}=await import("./C3YP5Gdz.js");return{reownSvg:t}},__vite__mapDeps([81,1,2]),import.meta.url)).reownSvg,"x-mark":async()=>(await i(async()=>{const{xMarkSvg:t}=await import("./CjrzkDGH.js");return{xMarkSvg:t}},__vite__mapDeps([82,1,2]),import.meta.url)).xMarkSvg};async function it(t){if(A.has(t))return A.get(t);const e=(b[t]??b.copy)();return A.set(t,e),e}let g=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(it(this.name),S`<div class="fallback"></div>`)}`}};g.styles=[R,M,et];f([l()],g.prototype,"size",void 0);f([l()],g.prototype,"name",void 0);f([l()],g.prototype,"color",void 0);f([l()],g.prototype,"aspectRatio",void 0);g=f([I("wui-icon")],g);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){var r;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((r=t.strings)==null?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(r=>t[r]).join(" ")+" "}update(t,[r]){var o,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in r)r[a]&&!((o=this.nt)!=null&&o.has(a))&&this.st.add(a);return this.render(r)}const e=t.element.classList;for(const a of this.st)a in r||(e.remove(a),this.st.delete(a));for(const a in r){const s=!!r[a];s===this.st.has(a)||(n=this.nt)!=null&&n.has(a)||(s?(e.add(a),this.st.add(a)):(e.remove(a),this.st.delete(a)))}return T}}),ot=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(n<3?s(a):n>3?s(r,e,a):s(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};let v=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const r={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(r)}></slot>`}};v.styles=[R,ot];y([l()],v.prototype,"variant",void 0);y([l()],v.prototype,"color",void 0);y([l()],v.prototype,"align",void 0);y([l()],v.prototype,"lineClamp",void 0);v=y([I("wui-text")],v);const nt=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var m=function(t,r,e,o){var n=arguments.length,a=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,r,e,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(n<3?s(a):n>3?s(r,e,a):s(r,e))||a);return n>3&&a&&Object.defineProperty(r,e,a),a};let _=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};_.styles=[R,nt];m([l()],_.prototype,"flexDirection",void 0);m([l()],_.prototype,"flexWrap",void 0);m([l()],_.prototype,"flexBasis",void 0);m([l()],_.prototype,"flexGrow",void 0);m([l()],_.prototype,"flexShrink",void 0);m([l()],_.prototype,"alignItems",void 0);m([l()],_.prototype,"justifyContent",void 0);m([l()],_.prototype,"columnGap",void 0);m([l()],_.prototype,"rowGap",void 0);m([l()],_.prototype,"gap",void 0);m([l()],_.prototype,"padding",void 0);m([l()],_.prototype,"margin",void 0);_=m([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=t=>t??j;export{w as U,at as a,I as c,C as e,X as f,l as n,pt as o,ct as r};
