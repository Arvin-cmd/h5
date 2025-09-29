import{cG as f,cM as g,cF as _,dq as p,dy as m,cI as w,cH as c,el as E,ds as $,dh as y,di as b,dk as C,dl as v,dj as R}from"./BWftuhBA.js";import{n as u,c as S}from"./k02276lB.js";import{o as O}from"./BdAFPLnU.js";function T(){try{return c.returnOpenHref(`${$.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function U(){p.push("ConnectingFarcaster");const e=m.getAuthConnector();if(e&&!f.state.farcasterUrl)try{const{url:o}=await e.provider.getFarcasterUri();f.setFarcasterUrl(o,g.state.activeChain)}catch(o){p.goBack(),w.showError(o)}}async function j(e){p.push("ConnectingSocial");const o=m.getAuthConnector();let t=null;try{const i=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(o&&e){if(c.isTelegram()||(t=T()),t)f.setSocialWindow(t,g.state.activeChain);else if(!c.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await o.provider.getSocialRedirectUri({provider:e});if(!n)throw t==null||t.close(),new Error("Could not fetch the social redirect uri");if(t&&(t.location.href=n),c.isTelegram()){E.setTelegramSocialProvider(e);const r=c.formatTelegramSocialLoginUrl(n);c.openHref(r,"_top")}clearTimeout(i)}}catch(i){t==null||t.close(),w.showError(i==null?void 0:i.message)}}async function H(e){f.setSocialProvider(e,g.state.activeChain),_.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await U():await j(e)}const I=y`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var x=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let h=class extends C{constructor(){super(...arguments),this.logo="google"}render(){return v`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};h.styles=[b,I];x([u()],h.prototype,"logo",void 0);h=x([S("wui-logo")],h);const L=y`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var d=function(e,o,t,i){var n=arguments.length,r=n<3?o:i===null?i=Object.getOwnPropertyDescriptor(o,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,t,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(n<3?a(r):n>3?a(o,t,r):a(o,t))||r);return n>3&&r&&Object.defineProperty(o,t,r),r};let s=class extends C{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return v`
      <button ?disabled=${this.disabled} tabindex=${O(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};s.styles=[b,R,L];d([u()],s.prototype,"logo",void 0);d([u()],s.prototype,"name",void 0);d([u()],s.prototype,"tabIdx",void 0);d([u({type:Boolean})],s.prototype,"disabled",void 0);s=d([S("wui-list-social")],s);export{H as e};
