import{dn as h,dk as p,cO as c,dl as a,cF as x,dt as b,cM as g,du as v,dq as C,dh as m,di as _,dj as $}from"./BWftuhBA.js";import{c as w,r as T}from"./k02276lB.js";import"./B8ZjmjHW.js";const O=h``;var R=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let f=class extends p{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return!e&&!r?null:a`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return a` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){x.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:b(g.state.activeChain)===v.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("WhatIsABuy")}};f.styles=[O];f=R([w("w3m-onramp-providers-footer")],f);const P="https://reown.com",U=m`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:n})=>n.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var W=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let d=class extends p{render(){return a`
      <a
        data-testid="ux-branding-reown"
        href=${P}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};d.styles=[_,$,U];d=W([w("wui-ux-by-reown")],d);const j=m`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:n})=>n[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:n})=>n.core.textAccentPrimary};
    font-weight: 500;
  }
`;var y=function(n,e,r,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(t=(i<3?s(t):i>3?s(e,r,t):s(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let u=class extends p{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(c.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var t;const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state,o=(t=c.state.features)==null?void 0:t.legalCheckbox;return!e&&!r||o?a`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:a`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=c.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?a`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(e=!1){var r;return(r=this.remoteFeatures)!=null&&r.reownBranding?e?a`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:a`<wui-ux-by-reown></wui-ux-by-reown>`:null}};u.styles=[j];y([T()],u.prototype,"remoteFeatures",void 0);u=y([w("w3m-legal-footer")],u);
