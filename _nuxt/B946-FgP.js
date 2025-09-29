import{dh as $,di as R,dj as O,dk as m,dl as l,cM as u,cO as x,fI as Pe,dZ as k,cG as C,cH as g,dG as B,dn as oe,cF as A,el as be,dy as b,ds as _,dq as f,cN as j,cI as T,dt as Ae,du as ce,dr as y,fJ as En,hl as de,hm as Ee,hn as Q,fC as An,fN as W,ho as De,dw as ln,eW as In,eV as kn,gh as _n,eU as Wn,d_ as li,fK as gi,fL as yi,hp as Tn,hq as Rn,fM as Bi}from"./BWftuhBA.js";import{n as c,c as p,U as F,r as d,a as cn,e as Nn,i as On,t as Pn}from"./k02276lB.js";import{o as h}from"./BdAFPLnU.js";import"./C8o-AMPh.js";import"./T0NY8ydf.js";import"./CjEoAlaX.js";import"./BEWobgdt.js";import{a as wa,W as ma}from"./UnELzBto.js";import"./BldV-3Oe.js";import"./B-m5cCON.js";import"./CetEskz5.js";import{H as xi}from"./DL8bsgOG.js";import"./CSdV4Ptl.js";import"./BuRruZ2g.js";import{M as _t}from"./XWT8080E.js";import"./9AMiDrxW.js";import"./B4nHCBLZ.js";import"./mMb8yvjp.js";import{e as vi,n as $i,p as Dn,v as Oe,s as dt,M as ri,m as Ln}from"./BYfp64Cn.js";import"./ybiNaeao.js";import{n as jn}from"./D3oIVDWC.js";import"./qn4hSlSa.js";import"./6z8wsPDa.js";import"./joGi2Rrq.js";import{O as Wt}from"./MRnqprDn.js";import{e as Bn}from"./B9rrG0PI.js";import"./B8ZjmjHW.js";import"./DB4pb4mn.js";import"./wa8s78jl.js";import{N as Un}from"./DmfK5sOV.js";import"./CSkCGytw.js";const zn=$`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[20]};
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[16]};
    height: 32px;
    transition: box-shadow ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:t})=>t[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:t})=>t[16]};
    padding-left: ${({spacing:t})=>t[1]};
    padding-right: ${({spacing:t})=>t[1]};
    background: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:t})=>t.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var pe=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let J=class extends m{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${h(this.balance?void 0:"local-no-balance")}
        data-error=${h(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const e=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l` <wui-icon size="inherit" color="inherit" icon="networkPlaceholder"></wui-icon> `;return l`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return l`<wui-text variant="md-regular" color="inherit">
      ${this.address?F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const e=this.loading?l`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:l`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return l`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${e}</wui-flex
      >`}return null}};J.styles=[R,O,zn];pe([c()],J.prototype,"networkSrc",void 0);pe([c()],J.prototype,"avatarSrc",void 0);pe([c()],J.prototype,"balance",void 0);pe([c({type:Boolean})],J.prototype,"isUnsupportedChain",void 0);pe([c({type:Boolean})],J.prototype,"disabled",void 0);pe([c({type:Boolean})],J.prototype,"loading",void 0);pe([c()],J.prototype,"address",void 0);pe([c()],J.prototype,"profileName",void 0);pe([c()],J.prototype,"charsStart",void 0);pe([c()],J.prototype,"charsEnd",void 0);J=pe([p("wui-account-button")],J);var H=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class K extends m{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=x.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(u.getAccountData(this.namespace)),this.setNetworkData(u.getNetworkData(this.namespace))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(u.subscribeChainProp("accountState",i=>{this.setAccountData(i)},e),u.subscribeChainProp("networkState",i=>{var o;this.setNetworkData(i),this.isSupported=u.checkIfSupportedNetwork(e,(o=i==null?void 0:i.caipNetwork)==null?void 0:o.caipNetworkId)},e)):this.unsubscribe.push(Pe.subscribeNetworkImages(()=>{this.networkImage=k.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),C.subscribeKey("balance",i=>this.balanceVal=i),C.subscribeKey("balanceSymbol",i=>this.balanceSymbol=i),C.subscribeKey("profileName",i=>this.profileName=i),C.subscribeKey("profileImage",i=>this.profileImage=i),u.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=k.getNetworkImage(i),this.isSupported=i!=null&&i.chainNamespace?u.checkIfSupportedNetwork(i==null?void 0:i.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!u.state.activeChain)return null;const e=this.balance==="show",i=typeof this.balanceVal!="string",{formattedText:o}=g.parseBalance(this.balanceVal,this.balanceSymbol);return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${x.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${h(g.getPlainAddress(this.caipAddress))}
        profileName=${h(this.profileName)}
        networkSrc=${h(this.networkImage)}
        avatarSrc=${h(this.profileImage)}
        balance=${e?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||x.state.allowUnsupportedChain?B.open({namespace:this.namespace}):B.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){var i,o;(i=e==null?void 0:e.assets)!=null&&i.imageId&&(this.networkImage=await k.fetchNetworkImage((o=e==null?void 0:e.assets)==null?void 0:o.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=k.getNetworkImage(e.caipNetwork))}}H([c({type:Boolean})],K.prototype,"disabled",void 0);H([c()],K.prototype,"balance",void 0);H([c()],K.prototype,"charsStart",void 0);H([c()],K.prototype,"charsEnd",void 0);H([c()],K.prototype,"namespace",void 0);H([d()],K.prototype,"caipAddress",void 0);H([d()],K.prototype,"balanceVal",void 0);H([d()],K.prototype,"balanceSymbol",void 0);H([d()],K.prototype,"profileName",void 0);H([d()],K.prototype,"profileImage",void 0);H([d()],K.prototype,"network",void 0);H([d()],K.prototype,"networkImage",void 0);H([d()],K.prototype,"isSupported",void 0);let Ui=class extends K{};Ui=H([p("w3m-account-button")],Ui);let zi=class extends K{};zi=H([p("appkit-account-button")],zi);const Mn=oe`
  :host {
    display: block;
    width: max-content;
  }
`;var fe=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class se extends m{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var e,i;this.caipAddress=this.namespace?(i=(e=u.state.chains.get(this.namespace))==null?void 0:e.accountState)==null?void 0:i.caipAddress:u.state.activeCaipAddress,this.namespace?this.unsubscribe.push(u.subscribeChainProp("accountState",o=>{this.caipAddress=o==null?void 0:o.caipAddress},this.namespace)):this.unsubscribe.push(u.subscribeKey("activeCaipAddress",o=>this.caipAddress=o))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${h(this.balance)}
            .charsStart=${h(this.charsStart)}
            .charsEnd=${h(this.charsEnd)}
            namespace=${h(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${h(this.size)}
            label=${h(this.label)}
            loadingLabel=${h(this.loadingLabel)}
            namespace=${h(this.namespace)}
          ></appkit-connect-button>
        `}}se.styles=Mn;fe([c({type:Boolean})],se.prototype,"disabled",void 0);fe([c()],se.prototype,"balance",void 0);fe([c()],se.prototype,"size",void 0);fe([c()],se.prototype,"label",void 0);fe([c()],se.prototype,"loadingLabel",void 0);fe([c()],se.prototype,"charsStart",void 0);fe([c()],se.prototype,"charsEnd",void 0);fe([c()],se.prototype,"namespace",void 0);fe([d()],se.prototype,"caipAddress",void 0);let Mi=class extends se{};Mi=fe([p("w3m-button")],Mi);let Fi=class extends se{};Fi=fe([p("appkit-button")],Fi);const Fn=$`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:t})=>t[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:t})=>t[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:t})=>t[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:t})=>t.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:t})=>t[20]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[16]};
    padding: ${({spacing:t})=>t[4]} ${({spacing:t})=>t[5]};
  }
`;var $t=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Le=class extends m{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return l`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const e={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i={primary:"invert",secondary:"accent-primary"};return this.loading?l`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:l` <wui-text variant=${e[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`}};Le.styles=[R,O,Fn];$t([c()],Le.prototype,"size",void 0);$t([c()],Le.prototype,"variant",void 0);$t([c({type:Boolean})],Le.prototype,"loading",void 0);$t([c()],Le.prototype,"text",void 0);Le=$t([p("wui-connect-button")],Le);var Re=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class Ne extends m{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=B.state.open,this.loading=this.namespace?B.state.loadingNamespaceMap.get(this.namespace):B.state.loading,this.unsubscribe.push(B.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-connect-button
        size=${h(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?B.close():this.loading||B.open({view:"Connect",namespace:this.namespace})}}Re([c()],Ne.prototype,"size",void 0);Re([c()],Ne.prototype,"label",void 0);Re([c()],Ne.prototype,"loadingLabel",void 0);Re([c()],Ne.prototype,"namespace",void 0);Re([d()],Ne.prototype,"open",void 0);Re([d()],Ne.prototype,"loading",void 0);let Vi=class extends Ne{};Vi=Re([p("w3m-connect-button")],Vi);let Hi=class extends Ne{};Hi=Re([p("appkit-connect-button")],Hi);const Vn=$`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:t})=>t[32]};
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]}
      ${({spacing:t})=>t[1]} ${({spacing:t})=>t[1]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:t})=>t[32]};
  }
`;var Ct=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let je=class extends m{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const e={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return l`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${e[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l` <wui-icon-box color="default" icon="networkPlaceholder"></wui-icon-box> `}};je.styles=[R,O,Vn];Ct([c()],je.prototype,"imageSrc",void 0);Ct([c({type:Boolean})],je.prototype,"isUnsupportedChain",void 0);Ct([c({type:Boolean})],je.prototype,"disabled",void 0);Ct([c()],je.prototype,"size",void 0);je=Ct([p("wui-network-button")],je);const Hn=oe`
  :host {
    display: block;
    width: max-content;
  }
`;var Ce=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class ge extends m{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=u.state.activeCaipNetwork,this.networkImage=k.getNetworkImage(this.network),this.caipAddress=u.state.activeCaipAddress,this.loading=B.state.loading,this.isSupported=x.state.allowUnsupportedChain?!0:u.state.activeChain?u.checkIfSupportedNetwork(u.state.activeChain):!0,this.unsubscribe.push(Pe.subscribeNetworkImages(()=>{this.networkImage=k.getNetworkImage(this.network)}),u.subscribeKey("activeCaipAddress",e=>{this.caipAddress=e}),u.subscribeKey("activeCaipNetwork",e=>{var i;this.network=e,this.networkImage=k.getNetworkImage(e),this.isSupported=e!=null&&e.chainNamespace?u.checkIfSupportedNetwork(e.chainNamespace):!0,k.fetchNetworkImage((i=e==null?void 0:e.assets)==null?void 0:i.imageId)}),B.subscribeKey("loading",e=>this.loading=e))}firstUpdated(){var e,i;k.fetchNetworkImage((i=(e=this.network)==null?void 0:e.assets)==null?void 0:i.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.network?u.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${x.state.allowUnsupportedChain?!1:!e}
        imageSrc=${h(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!x.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(A.sendEvent({type:"track",event:"CLICK_NETWORKS"}),B.open({view:"Networks"}))}}ge.styles=Hn;Ce([c({type:Boolean})],ge.prototype,"disabled",void 0);Ce([c({type:String})],ge.prototype,"label",void 0);Ce([d()],ge.prototype,"network",void 0);Ce([d()],ge.prototype,"networkImage",void 0);Ce([d()],ge.prototype,"caipAddress",void 0);Ce([d()],ge.prototype,"loading",void 0);Ce([d()],ge.prototype,"isSupported",void 0);let Ki=class extends ge{};Ki=Ce([p("w3m-network-button")],Ki);let qi=class extends ge{};qi=Ce([p("appkit-network-button")],qi);const Kn=$`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:t})=>t[2]};
    color: ${({tokens:t})=>t.theme.textInvert};
    background-color: ${({tokens:t})=>t.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:t})=>t[2]};
    align-items: normal;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.core.foregroundAccent020};
    }
  }
`;var qt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ye=class extends m{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="md" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};Ye.styles=[R,O,Kn];qt([c()],Ye.prototype,"label",void 0);qt([c()],Ye.prototype,"description",void 0);qt([c()],Ye.prototype,"icon",void 0);Ye=qt([p("wui-notice-card")],Ye);var dn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ci=class extends m{constructor(){super(),this.unsubscribe=[],this.socialProvider=be.getConnectedSocialProvider(),this.socialUsername=be.getConnectedSocialUsername(),this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();if(!i||e!==_.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const o=i.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,i){i||f.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};dn([d()],ci.prototype,"namespace",void 0);ci=dn([p("w3m-account-auth-button")],ci);var ye=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ue=class extends m{constructor(){super(),this.usubscribe=[],this.networkImages=Pe.state.networkImages,this.address=C.state.address,this.profileImage=C.state.profileImage,this.profileName=C.state.profileName,this.network=u.state.activeCaipNetwork,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.remoteFeatures=x.state.remoteFeatures,this.usubscribe.push(C.subscribe(e=>{e.address&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),u.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}),x.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var i,o,s;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((o=(i=this.network)==null?void 0:i.assets)==null?void 0:o.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${h(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${F.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${h(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((s=this.network)==null?void 0:s.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var n;const e=(n=this.network)==null?void 0:n.chainNamespace,i=b.getConnectorId(e),o=b.getAuthConnector();return!u.checkIfNamesSupported()||!o||i!==_.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var s;const e=b.getConnectorId((s=this.network)==null?void 0:s.chainNamespace),i=b.getAuthConnector(),{origin:o}=location;return!i||e!==_.CONNECTOR_ID.AUTH||o.includes(j.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=u.getAllRequestedCaipNetworks(),i=e?e.length>1:!1,o=e==null?void 0:e.find(({id:s})=>{var n;return s===((n=this.network)==null?void 0:n.id)});return i||!o}onCopyAddress(){try{this.address&&(g.copyToClopboard(this.address),T.showSuccess("Address copied"))}catch{T.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){var n;const e=(n=this.network)==null?void 0:n.chainNamespace,i=u.checkIfSmartAccountEnabled(),o=b.getConnectorId(e);return!b.getAuthConnector()||o!==_.CONNECTOR_ID.AUTH||!i?null:(this.switched||(this.text=Ae(e)===ce.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),l`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `)}onChooseName(){f.push("ChooseAccountName")}async changePreferredAccountType(){var n;const e=(n=this.network)==null?void 0:n.chainNamespace,i=u.checkIfSmartAccountEnabled(),o=Ae(e)===ce.ACCOUNT_TYPES.SMART_ACCOUNT||!i?ce.ACCOUNT_TYPES.EOA:ce.ACCOUNT_TYPES.SMART_ACCOUNT;b.getAuthConnector()&&(this.loading=!0,await y.setPreferredAccountType(o,e),this.text=o===ce.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,En.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&f.push("Networks")}async onDisconnect(){var e,i;try{this.disconnecting=!0;const o=(e=this.network)==null?void 0:e.chainNamespace,n=y.getConnections(o).length>0,r=o&&b.state.activeConnectorIds[o],a=(i=this.remoteFeatures)==null?void 0:i.multiWallet;await y.disconnect(a?{id:r,namespace:o}:{}),n&&a&&(f.push("ProfileWallets"),T.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),T.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){A.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}};ye([d()],ue.prototype,"address",void 0);ye([d()],ue.prototype,"profileImage",void 0);ye([d()],ue.prototype,"profileName",void 0);ye([d()],ue.prototype,"network",void 0);ye([d()],ue.prototype,"disconnecting",void 0);ye([d()],ue.prototype,"loading",void 0);ye([d()],ue.prototype,"switched",void 0);ye([d()],ue.prototype,"text",void 0);ye([d()],ue.prototype,"remoteFeatures",void 0);ue=ye([p("w3m-account-settings-view")],ue);const qn=$`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    color: ${({tokens:t})=>t.theme.textSecondary};
    border-radius: ${({borderRadius:t})=>t[20]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:t})=>t.theme.textPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:t})=>t.theme.textPrimary};
    }
  }
`;var St=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Gn={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Yn={lg:"md",md:"sm",sm:"sm"};let Be=class extends m{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return l`
      <button data-active=${this.active}>
        ${this.icon?l`<wui-icon size=${Yn[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Gn[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Be.styles=[R,O,qn];St([c()],Be.prototype,"icon",void 0);St([c()],Be.prototype,"size",void 0);St([c()],Be.prototype,"label",void 0);St([c({type:Boolean})],Be.prototype,"active",void 0);Be=St([p("wui-tab-item")],Be);const Xn=$`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[32]};
    padding: ${({spacing:t})=>t["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var Et=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ue=class extends m{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,i)=>{var s;const o=i===this.activeTab;return l`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(s=e.label)==null?void 0:s.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};Ue.styles=[R,O,Xn];Et([c({type:Array})],Ue.prototype,"tabs",void 0);Et([c()],Ue.prototype,"onTabChange",void 0);Et([c()],Ue.prototype,"size",void 0);Et([d()],Ue.prototype,"activeTab",void 0);Ue=Et([p("wui-tabs")],Ue);const Qn=$`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    column-gap: ${({spacing:t})=>t[1]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:t})=>t[6]};
    height: ${({spacing:t})=>t[6]};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:t})=>t.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var xe=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ne=class extends m{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?l`<wui-icon
          size=${h(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:l`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return l`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${e}
        <wui-flex class="circle"></wui-flex>
      </wui-flex>
    `}textTemplate(){return l`
      <wui-text variant="lg-regular" color="primary">
        ${F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return l`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};ne.styles=[R,O,Qn];xe([c()],ne.prototype,"address",void 0);xe([c()],ne.prototype,"profileName",void 0);xe([c()],ne.prototype,"alt",void 0);xe([c()],ne.prototype,"imageSrc",void 0);xe([c()],ne.prototype,"icon",void 0);xe([c()],ne.prototype,"iconSize",void 0);xe([c({type:Boolean})],ne.prototype,"loading",void 0);xe([c({type:Number})],ne.prototype,"charsStart",void 0);xe([c({type:Number})],ne.prototype,"charsEnd",void 0);ne=xe([p("wui-wallet-switch")],ne);const Jn=$`
  wui-icon-link {
    margin-right: calc(${({spacing:t})=>t[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:t})=>t[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[3]};
    height: 48px;
    padding: ${({spacing:t})=>t[2]};
    padding-right: ${({spacing:t})=>t[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[6]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:t})=>t[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:t})=>t.md}
        ${({easings:t})=>t["ease-out-power-1"]},
      opacity ${({durations:t})=>t.md} ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var re=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let q=class extends m{constructor(){super(),this.unsubscribe=[],this.caipAddress=C.state.caipAddress,this.address=g.getPlainAddress(C.state.caipAddress),this.profileImage=C.state.profileImage,this.profileName=C.state.profileName,this.disconnecting=!1,this.balance=C.state.balance,this.balanceSymbol=C.state.balanceSymbol,this.features=x.state.features,this.remoteFeatures=x.state.remoteFeatures,this.namespace=u.state.activeChain,this.activeConnectorIds=b.state.activeConnectorIds,this.unsubscribe.push(C.subscribeKey("caipAddress",e=>{this.address=g.getPlainAddress(e),this.caipAddress=e}),C.subscribeKey("balance",e=>this.balance=e),C.subscribeKey("balanceSymbol",e=>this.balanceSymbol=e),C.subscribeKey("profileName",e=>this.profileName=e),C.subscribeKey("profileImage",e=>this.profileImage=e),x.subscribeKey("features",e=>this.features=e),x.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e),b.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeChain",e=>this.namespace=e),u.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.chainNamespace&&(this.namespace=e==null?void 0:e.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?b.getConnectorById(e):void 0,o=k.getConnectorImage(i),{value:s,decimals:n,symbol:r}=g.parseBalance(this.balance,this.balanceSymbol);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${h(this.caipAddress)}
          address=${h(g.getPlainAddress(this.caipAddress))}
          imageSrc=${h(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <wui-flex flexDirection="row" alignItems="flex-end" justifyContent="center" gap="1">
          <wui-text variant="h3-regular" color="primary">${s}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${n}</wui-text>
          <wui-text variant="h6-medium" color="primary">${r}</wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var r,a,w;if(!this.namespace)return null;const e=j.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=j.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=!!((r=this.features)!=null&&r.receive),s=((a=this.remoteFeatures)==null?void 0:a.onramp)&&e,n=((w=this.remoteFeatures)==null?void 0:w.payWithExchange)&&i;return!s&&!o&&!n?null:l`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var i;return(((i=this.features)==null?void 0:i.walletFeaturesOrder)||j.DEFAULT_FEATURES.walletFeaturesOrder).map(o=>{switch(o){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var i;return this.namespace&&((i=this.remoteFeatures)==null?void 0:i.activity)&&j.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var o;const e=(o=this.remoteFeatures)==null?void 0:o.swaps,i=u.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var s;const e=(s=this.features)==null?void 0:s.send,i=u.state.activeChain;if(!i)throw new Error("SendController:sendTemplate - namespace is required");const o=j.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!o?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=u.state.activeChain;if(!e)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const i=b.getConnectorId(e),o=b.getAuthConnector(),{origin:s}=location;return!o||i!==_.CONNECTOR_ID.AUTH||s.includes(j.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){f.push("FundWallet")}handleClickSwap(){f.push("Swap")}handleClickSend(){f.push("WalletSend")}explorerBtnTemplate(){return C.state.addressExplorerUrl?l`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){A.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:Ae(u.state.activeChain)===ce.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Transactions")}async onDisconnect(){var e;try{this.disconnecting=!0;const o=y.getConnections(this.namespace).length>0,s=this.namespace&&b.state.activeConnectorIds[this.namespace],n=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await y.disconnect(n?{id:s,namespace:this.namespace}:{}),o&&n&&(f.push("ProfileWallets"),T.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),T.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=C.state.addressExplorerUrl;e&&g.openHref(e,"_blank")}onGoToUpgradeView(){A.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),f.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){f.push("ProfileWallets")}};q.styles=Jn;re([d()],q.prototype,"caipAddress",void 0);re([d()],q.prototype,"address",void 0);re([d()],q.prototype,"profileImage",void 0);re([d()],q.prototype,"profileName",void 0);re([d()],q.prototype,"disconnecting",void 0);re([d()],q.prototype,"balance",void 0);re([d()],q.prototype,"balanceSymbol",void 0);re([d()],q.prototype,"features",void 0);re([d()],q.prototype,"remoteFeatures",void 0);re([d()],q.prototype,"namespace",void 0);re([d()],q.prototype,"activeConnectorIds",void 0);q=re([p("w3m-account-default-widget")],q);const Zn=$`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:t})=>t.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }
`;var Ci=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ht=class extends m{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ht.styles=[R,Zn];Ci([c()],ht.prototype,"dollars",void 0);Ci([c()],ht.prototype,"pennies",void 0);ht=Ci([p("wui-balance")],ht);const eo=$`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:t})=>t.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:t})=>t.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:t})=>t.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:t})=>t.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:t})=>t.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var At=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const to={sm:"sm-regular",md:"md-regular"};let ze=class extends m{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,l`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${to[this.size]}>${this.message}</wui-text>`}};ze.styles=[R,O,eo];At([c()],ze.prototype,"placement",void 0);At([c()],ze.prototype,"variant",void 0);At([c()],ze.prototype,"size",void 0);At([c()],ze.prototype,"message",void 0);ze=At([p("wui-tooltip")],ze);const io=oe`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var no=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let di=class extends m{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};di.styles=io;di=no([p("w3m-account-activity-widget")],di);const oo=$`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:t})=>t[4]};
    padding: ${({spacing:t})=>t[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var it=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ie=class extends m{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?l`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?l`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Ie.styles=[R,O,oo];it([c()],Ie.prototype,"icon",void 0);it([c()],Ie.prototype,"text",void 0);it([c()],Ie.prototype,"description",void 0);it([c()],Ie.prototype,"tag",void 0);it([c({type:Boolean})],Ie.prototype,"disabled",void 0);Ie=it([p("wui-list-description")],Ie);const so=oe`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Si=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let pt=class extends m{constructor(){super(),this.unsubscribe=[],this.tokenBalance=C.state.tokenBalance,this.remoteFeatures=x.state.remoteFeatures,this.unsubscribe.push(C.subscribe(e=>{this.tokenBalance=e.tokenBalance}),x.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.onramp?l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:l``}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(i=>l`<wui-list-token
          tokenName=${i.name}
          tokenImageUrl=${i.iconUrl}
          tokenAmount=${i.quantity.numeric}
          tokenValue=${i.value}
          tokenCurrency=${i.symbol}
        ></wui-list-token>`)}onReceiveClick(){f.push("WalletReceive")}onBuyClick(){A.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:Ae(u.state.activeChain)===ce.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("OnRampProviders")}};pt.styles=so;Si([d()],pt.prototype,"tokenBalance",void 0);Si([d()],pt.prototype,"remoteFeatures",void 0);pt=Si([p("w3m-account-tokens-widget")],pt);const ro=$`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:t})=>t[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:t})=>t[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var we=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Z=class extends m{constructor(){super(...arguments),this.unsubscribe=[],this.address=C.state.address,this.profileName=C.state.profileName,this.network=u.state.activeCaipNetwork,this.currentTab=C.state.currentTab,this.tokenBalance=C.state.tokenBalance,this.features=x.state.features,this.namespace=u.state.activeChain,this.activeConnectorIds=b.state.activeConnectorIds,this.remoteFeatures=x.state.remoteFeatures}firstUpdated(){C.fetchTokenBalance(),this.unsubscribe.push(C.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):B.close()}),b.subscribeKey("activeConnectorIds",e=>{this.activeConnectorIds=e}),u.subscribeKey("activeChain",e=>this.namespace=e),u.subscribeKey("activeCaipNetwork",e=>this.network=e),x.subscribeKey("features",e=>this.features=e),x.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");if(!this.namespace)return null;const e=this.activeConnectorIds[this.namespace],i=e?b.getConnectorById(e):void 0,{icon:o,iconSize:s}=this.getAuthData();return l`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${s}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var n;const e=((n=this.features)==null?void 0:n.walletFeaturesOrder)||j.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(r=>{var a,w;return r==="send"||r==="receive"?!((a=this.features)!=null&&a[r]):r==="swaps"||r==="onramp"?!((w=this.remoteFeatures)!=null&&w[r]):!0}))return null;const o=e.map(r=>r==="receive"||r==="onramp"?"fund":r),s=[...new Set(o)];return l`<wui-flex gap="2">
      ${s.map(r=>{switch(r){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var r,a,w;if(!this.namespace)return null;const e=j.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=j.PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),o=(r=this.features)==null?void 0:r.receive,s=((a=this.remoteFeatures)==null?void 0:a.onramp)&&e,n=((w=this.remoteFeatures)==null?void 0:w.payWithExchange)&&i;return!s&&!o&&!n?null:l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var o;const e=(o=this.remoteFeatures)==null?void 0:o.swaps,i=u.state.activeChain===_.CHAIN.EVM;return!e||!i?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var s;const e=(s=this.features)==null?void 0:s.send,i=u.state.activeChain,o=j.SEND_SUPPORTED_NAMESPACES.includes(i);return!e||!o?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>C.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===_.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const i=g.calculateBalance(this.tokenBalance),{dollars:o="0",pennies:s="00"}=g.formatTokenBalance(i);return l`<wui-balance dollars=${o} pennies=${s}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const e=xi.getTabsByNamespace(u.state.activeChain);return e.length===0?null:l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){C.setCurrentTab(e)}onFundWalletClick(){f.push("FundWallet")}onSwapClick(){var e,i,o;(e=this.network)!=null&&e.caipNetworkId&&!j.SWAP_SUPPORTED_NETWORKS.includes((i=this.network)==null?void 0:i.caipNetworkId)?f.push("UnsupportedChain",{swapUnsupportedChain:!0}):(A.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((o=this.network)==null?void 0:o.caipNetworkId)||"",isSmartAccount:Ae(u.state.activeChain)===ce.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("Swap"))}getAuthData(){const e=be.getConnectedSocialProvider(),i=be.getConnectedSocialUsername(),o=b.getAuthConnector(),s=(o==null?void 0:o.provider.getEmail())??"";return{name:de.getAuthName({email:s,socialUsername:i,socialProvider:e}),icon:e??"mail",iconSize:e?"xl":"md"}}onGoToProfileWalletsView(){f.push("ProfileWallets")}onSendClick(){var e;A.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((e=this.network)==null?void 0:e.caipNetworkId)||"",isSmartAccount:Ae(u.state.activeChain)===ce.ACCOUNT_TYPES.SMART_ACCOUNT}}),f.push("WalletSend")}};Z.styles=ro;we([d()],Z.prototype,"watchTokenBalance",void 0);we([d()],Z.prototype,"address",void 0);we([d()],Z.prototype,"profileName",void 0);we([d()],Z.prototype,"network",void 0);we([d()],Z.prototype,"currentTab",void 0);we([d()],Z.prototype,"tokenBalance",void 0);we([d()],Z.prototype,"features",void 0);we([d()],Z.prototype,"namespace",void 0);we([d()],Z.prototype,"activeConnectorIds",void 0);we([d()],Z.prototype,"remoteFeatures",void 0);Z=we([p("w3m-account-wallet-features-widget")],Z);var un=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ui=class extends m{constructor(){super(),this.unsubscribe=[],this.namespace=u.state.activeChain,this.unsubscribe.push(u.subscribeKey("activeChain",e=>{this.namespace=e}))}render(){if(!this.namespace)return null;const e=b.getConnectorId(this.namespace),i=b.getAuthConnector();return l`
      ${i&&e===_.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};un([d()],ui.prototype,"namespace",void 0);ui=un([p("w3m-account-view")],ui);const ao=$`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var X=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let U=class extends m{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return l`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?l`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return l` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:l`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:i,label:o,description:s,enableButton:n,buttonType:r,buttonLabel:a,buttonVariant:w,tagVariant:v,tagLabel:S,alignItems:E="flex-end"}){return l`
      <wui-flex justifyContent="space-between" alignItems=${E} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?l`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${F.getTruncateString({string:i||e,charsStart:i?16:this.charsStart,charsEnd:i?0:this.charsEnd,truncate:i?"end":"middle"})}
            </wui-text>

            ${v&&S?l`<wui-tag variant=${v} size="sm">${S}</wui-tag>`:null}
          </wui-flex>

          ${s?l`<wui-text variant="sm-regular" color="secondary">${s}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:r,buttonLabel:a,buttonVariant:w}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:i,buttonVariant:o}){return l`
      <wui-button
        size="sm"
        variant=${o}
        @click=${e==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${i}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};U.styles=[R,O,ao];X([c()],U.prototype,"address",void 0);X([c()],U.prototype,"profileName",void 0);X([c({type:Array})],U.prototype,"content",void 0);X([c()],U.prototype,"alt",void 0);X([c()],U.prototype,"imageSrc",void 0);X([c()],U.prototype,"icon",void 0);X([c()],U.prototype,"iconSize",void 0);X([c()],U.prototype,"iconBadge",void 0);X([c()],U.prototype,"iconBadgeSize",void 0);X([c()],U.prototype,"buttonVariant",void 0);X([c({type:Boolean})],U.prototype,"enableMoreButton",void 0);X([c({type:Number})],U.prototype,"charsStart",void 0);X([c({type:Number})],U.prototype,"charsEnd",void 0);U=X([p("wui-active-profile-wallet-item")],U);const lo=$`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:t})=>t["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var z=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let D=class extends m{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return l`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${F.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return l`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${h(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};D.styles=[R,O,lo];z([c()],D.prototype,"address",void 0);z([c()],D.prototype,"profileName",void 0);z([c()],D.prototype,"alt",void 0);z([c()],D.prototype,"buttonLabel",void 0);z([c()],D.prototype,"buttonVariant",void 0);z([c()],D.prototype,"imageSrc",void 0);z([c()],D.prototype,"icon",void 0);z([c()],D.prototype,"iconSize",void 0);z([c()],D.prototype,"iconBadge",void 0);z([c()],D.prototype,"iconBadgeSize",void 0);z([c()],D.prototype,"rightIcon",void 0);z([c()],D.prototype,"rightIconSize",void 0);z([c({type:Boolean})],D.prototype,"loading",void 0);z([c({type:Number})],D.prototype,"charsStart",void 0);z([c({type:Number})],D.prototype,"charsEnd",void 0);D=z([p("wui-inactive-profile-wallet-item")],D);const ai={getAuthData(t){var r,a;const e=t.connectorId===_.CONNECTOR_ID.AUTH;if(!e)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=((r=t==null?void 0:t.auth)==null?void 0:r.name)??be.getConnectedSocialProvider(),o=((a=t==null?void 0:t.auth)==null?void 0:a.username)??be.getConnectedSocialUsername(),s=b.getAuthConnector(),n=(s==null?void 0:s.provider.getEmail())??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:e?de.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}},co=$`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:t})=>t["ease-out-power-1"]}
      ${({durations:t})=>t.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-separator {
    margin: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:t})=>t[2]};
  }

  .recent-connection {
    padding: ${({spacing:t})=>t[2]} 0 ${({spacing:t})=>t[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var ee=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const ie={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},ut={eip155:"ethereum",solana:"solana",bip122:"bitcoin"},uo=[{namespace:"eip155",icon:ut.eip155,label:"EVM"},{namespace:"solana",icon:ut.solana,label:"Solana"},{namespace:"bip122",icon:ut.bip122,label:"Bitcoin"}],ho={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"}};let V=class extends m{constructor(){var e,i;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=u.state.activeChain,this.namespaces=Array.from(u.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=b.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=u.state.activeCaipNetwork,this.user=C.state.user,this.remoteFeatures=x.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(e=u.getAccountData(this.namespace))==null?void 0:e.caipAddress,this.profileName=(i=u.getAccountData(this.namespace))==null?void 0:i.profileName,this.unsubscribers.push(y.subscribeKey("connections",()=>this.onConnectionsChange()),y.subscribeKey("recentConnections",()=>this.requestUpdate()),b.subscribeKey("activeConnectorIds",o=>{this.activeConnectorIds=o}),u.subscribeKey("activeCaipNetwork",o=>this.caipNetwork=o),C.subscribeKey("user",o=>this.user=o),x.subscribeKey("remoteFeatures",o=>this.remoteFeatures=o)),this.chainListener=u.subscribeChainProp("accountState",o=>{this.caipAddress=o==null?void 0:o.caipAddress,this.profileName=o==null?void 0:o.profileName},this.namespace)}disconnectedCallback(){var e,i;this.unsubscribers.forEach(o=>o()),(e=this.resizeObserver)==null||e.disconnect(),this.removeScrollListener(),(i=this.chainListener)==null||i.call(this)}firstUpdated(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".wallet-list");if(!e)return;const i=()=>this.updateScrollOpacity(e);requestAnimationFrame(i),e.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(e),i()}render(){const e=this.namespace;if(!e)throw new Error("Namespace is not set");return l`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){const e=uo.filter(o=>this.namespaces.includes(o.namespace));return e.length>1?l`
        <wui-tabs
          .onTabChange=${o=>this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){const o=this.getActiveConnections(e).flatMap(({accounts:s})=>s).length+(this.caipAddress?1:0);return l`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${ut[e]??ut.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>y.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){const i=this.hasAnyConnections(e);return l`
      <wui-flex flexDirection="column" class=${cn({"wallet-list":!0,"active-wallets-box":i,"empty-wallet-list-box":!i})} rowgap="3">
        ${i?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){const i=this.getActiveConnections(e),o=this.activeConnectorIds[e],s=this.getPlainAddress();return l`
      ${s||o||i.length>0?l`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){const i=this.activeConnectorIds[e];if(!i)return null;const{connections:o}=Ee.getConnectionsData(e),s=b.getConnectorById(i),n=k.getConnectorImage(s),r=this.getPlainAddress();if(!r)return null;const a=e===_.CHAIN.BITCOIN,w=ai.getAuthData({connectorId:i,accounts:[]}),v=this.getActiveConnections(e).flatMap(I=>I.accounts).length>0,S=o.find(I=>I.connectorId===i),E=S==null?void 0:S.accounts.filter(I=>!Q.isLowerCaseMatch(I.address,r));return l`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${r}
          alt=${s==null?void 0:s.name}
          .content=${this.getProfileContent({address:r,connections:o,connectorId:i,namespace:e})}
          .charsStart=${ie.ADDRESS_DISPLAY.START}
          .charsEnd=${ie.ADDRESS_DISPLAY.END}
          .icon=${w.icon}
          .iconSize=${w.iconSize}
          .iconBadge=${this.isSmartAccount(r)?ie.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(r)?ie.BADGE.SIZE:void 0}
          imageSrc=${n}
          ?enableMoreButton=${w.isAuth}
          @copy=${()=>this.handleCopyAddress(r)}
          @disconnect=${()=>this.handleDisconnect(e,i)}
          @switch=${()=>{a&&S&&(E!=null&&E[0])&&this.handleSwitchWallet(S,E[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(r)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${v?l`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){const i=this.getActiveConnections(e);return i.length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(i,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){const{recentConnections:i}=Ee.getConnectionsData(e);return i.flatMap(s=>s.accounts).length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(i,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,i,o){return e.filter(s=>s.accounts.length>0).map((s,n)=>{const r=b.getConnectorById(s.connectorId),a=k.getConnectorImage(r)??"",w=ai.getAuthData(s);return s.accounts.map((v,S)=>{const E=n!==0||S!==0,I=this.isAccountLoading(s.connectorId,v.address);return l`
            <wui-flex flexDirection="column">
              ${E?l`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${v.address}
                alt=${s.connectorId}
                buttonLabel=${i?"Connect":"Switch"}
                buttonVariant=${i?"neutral-secondary":"accent-secondary"}
                rightIcon=${i?"bin":"power"}
                rightIconSize="sm"
                class=${i?"recent-connection":"active-connection"}
                data-testid=${i?"recent-connection":"active-connection"}
                imageSrc=${a}
                .iconBadge=${this.isSmartAccount(v.address)?ie.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(v.address)?ie.BADGE.SIZE:void 0}
                .icon=${w.icon}
                .iconSize=${w.iconSize}
                .loading=${I}
                .showBalance=${!1}
                .charsStart=${ie.ADDRESS_DISPLAY.START}
                .charsEnd=${ie.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(s,v.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:s,address:v.address,isRecentConnection:i,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;const{title:i}=this.getChainLabelInfo(e);return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){const{title:i,description:o}=this.getChainLabelInfo(e);return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){var o,s,n;const i=this.namespaces[e];i&&((o=this.chainListener)==null||o.call(this),this.currentTab=this.namespaces.indexOf(i),this.namespace=i,this.caipAddress=(s=u.getAccountData(i))==null?void 0:s.caipAddress,this.profileName=(n=u.getAccountData(i))==null?void 0:n.profileName,this.chainListener=u.subscribeChainProp("accountState",r=>{this.caipAddress=r==null?void 0:r.caipAddress},i))}async handleSwitchWallet(e,i,o){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=i,await y.switchConnection({connection:e,address:i,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:s,hasSwitchedWallet:n}){n?T.showSuccess("Wallet switched"):s&&T.showSuccess("Account switched")}})}catch{T.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(e){const{connection:i,address:o,isRecentConnection:s,namespace:n}=e;s?(be.deleteAddressFromConnection({connectorId:i.connectorId,address:o,namespace:n}),y.syncStorageConnections(),T.showSuccess("Wallet deleted")):this.handleDisconnect(n,i.connectorId)}async handleDisconnect(e,i){try{await y.disconnectConnector({id:i,namespace:e}),T.showSuccess("Wallet disconnected")}catch{T.showError("Failed to disconnect wallet")}}handleCopyAddress(e){g.copyToClopboard(e),T.showSuccess("Address copied")}handleMore(){f.push("AccountSettings")}handleExternalLink(e){var o,s;const i=(s=(o=this.caipNetwork)==null?void 0:o.blockExplorers)==null?void 0:s.default.url;i&&g.openHref(`${i}/address/${e}`,"_blank")}handleAddConnection(e){b.setFilterByNamespace(e),f.push("Connect",{addWalletForNamespace:e})}getChainLabelInfo(e){return ho[e]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(e){var o,s;if(!this.namespace)return!1;const i=(s=(o=this.user)==null?void 0:o.accounts)==null?void 0:s.find(n=>n.type==="smartAccount");return i&&e?Q.isLowerCaseMatch(i.address,e):!1}getPlainAddress(){return this.caipAddress?g.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){const i=this.activeConnectorIds[e],{connections:o}=Ee.getConnectionsData(e),[s]=o.filter(w=>Q.isLowerCaseMatch(w.connectorId,i));if(!i)return o;const n=e===_.CHAIN.BITCOIN,{address:r}=this.caipAddress?An.parseCaipAddress(this.caipAddress):{};let a=[...r?[r]:[]];return n&&s&&(a=s.accounts.map(w=>w.address)||[]),Ee.excludeConnectorAddressFromConnections({connectorId:i,addresses:a,connections:o})}hasAnyConnections(e){const i=this.getActiveConnections(e),{recentConnections:o}=Ee.getConnectionsData(e);return!!this.caipAddress||i.length>0||o.length>0}isAccountLoading(e,i){return Q.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&Q.isLowerCaseMatch(this.lastSelectedAddress,i)&&this.isSwitching}getProfileContent(e){const{address:i,connections:o,connectorId:s,namespace:n}=e,[r]=o.filter(w=>Q.isLowerCaseMatch(w.connectorId,s));if(n===_.CHAIN.BITCOIN&&(r!=null&&r.accounts.every(w=>typeof w.type=="string")))return this.getBitcoinProfileContent(r.accounts,i);const a=ai.getAuthData({connectorId:s,accounts:[]});return[{address:i,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...a.isAuth?{description:this.isSmartAccount(i)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(e,i){const o=e.length>1,s=this.getPlainAddress();return e.map(n=>{const r=Q.isLowerCaseMatch(n.address,s);let a="PAYMENT";return n.type==="ordinal"&&(a="ORDINALS"),{address:n.address,tagLabel:Q.isLowerCaseMatch(n.address,i)?"Active":void 0,tagVariant:Q.isLowerCaseMatch(n.address,i)?"success":void 0,enableButton:!0,...o?{label:a,alignItems:"flex-end",buttonType:r?"disconnect":"switch",buttonLabel:r?"Disconnect":"Switch",buttonVariant:r?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");e&&e.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){var e;return!!((e=this.remoteFeatures)!=null&&e.multiWallet)}updateScrollOpacity(e){e.style.setProperty("--connect-scroll--top-opacity",_t.interpolate([0,ie.SCROLL_THRESHOLD],ie.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",_t.interpolate([0,ie.SCROLL_THRESHOLD],ie.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:e}=Ee.getConnectionsData(this.namespace);e.length===0&&f.reset("ProfileWallets")}this.requestUpdate()}};V.styles=co;ee([d()],V.prototype,"currentTab",void 0);ee([d()],V.prototype,"namespace",void 0);ee([d()],V.prototype,"namespaces",void 0);ee([d()],V.prototype,"caipAddress",void 0);ee([d()],V.prototype,"profileName",void 0);ee([d()],V.prototype,"activeConnectorIds",void 0);ee([d()],V.prototype,"lastSelectedAddress",void 0);ee([d()],V.prototype,"lastSelectedConnectorId",void 0);ee([d()],V.prototype,"isSwitching",void 0);ee([d()],V.prototype,"caipNetwork",void 0);ee([d()],V.prototype,"user",void 0);ee([d()],V.prototype,"remoteFeatures",void 0);V=ee([p("w3m-profile-wallets-view")],V);const po=$`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:t})=>t.neutrals300};
    border-radius: ${({borderRadius:t})=>t.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      border ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      box-shadow ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      width ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      height ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:t})=>t.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    background-color: ${({tokens:t})=>t.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:t})=>t.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:t})=>t.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:t})=>t.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:t})=>t.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:t})=>t.theme.textTertiary};
  }
`;var Gt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Xe=class extends m{constructor(){super(...arguments),this.inputElementRef=vi(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return l`
      <label data-size=${this.size}>
        <input
          ${$i(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};Xe.styles=[R,O,po];Gt([c({type:Boolean})],Xe.prototype,"checked",void 0);Gt([c({type:Boolean})],Xe.prototype,"disabled",void 0);Gt([c()],Xe.prototype,"size",void 0);Xe=Gt([p("wui-toggle")],Xe);const fo=$`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.theme.foregroundPrimary};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var hn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Tt=class extends m{constructor(){super(...arguments),this.checked=!1}render(){return l`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Tt.styles=[R,O,fo];hn([c({type:Boolean})],Tt.prototype,"checked",void 0);Tt=hn([p("wui-certified-switch")],Tt);const wo=$`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:t})=>t[3]};
    color: ${({tokens:t})=>t.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:t})=>t[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }
`;var pn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Rt=class extends m{constructor(){super(...arguments),this.inputComponentRef=vi(),this.inputValue=""}render(){return l`
      <wui-input-text
        ${$i(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?l`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,i=e==null?void 0:e.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};Rt.styles=[R,wo];pn([c()],Rt.prototype,"inputValue",void 0);Rt=pn([p("wui-search-bar")],Rt);const mo=$`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:t})=>t.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var fn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Nt=class extends m{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${jn}`:l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Nt.styles=[R,O,mo];fn([c()],Nt.prototype,"type",void 0);Nt=fn([p("wui-card-select-loader")],Nt);const bo=oe`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var ae=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let G=class extends m{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&F.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&F.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&F.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&F.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&F.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&F.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&F.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&F.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};G.styles=[R,bo];ae([c()],G.prototype,"gridTemplateRows",void 0);ae([c()],G.prototype,"gridTemplateColumns",void 0);ae([c()],G.prototype,"justifyItems",void 0);ae([c()],G.prototype,"alignItems",void 0);ae([c()],G.prototype,"justifyContent",void 0);ae([c()],G.prototype,"alignContent",void 0);ae([c()],G.prototype,"columnGap",void 0);ae([c()],G.prototype,"rowGap",void 0);ae([c()],G.prototype,"gap",void 0);ae([c()],G.prototype,"padding",void 0);ae([c()],G.prototype,"margin",void 0);G=ae([p("wui-grid")],G);const go=$`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]} ${({spacing:t})=>t[0]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:t})=>t[4]}, 20px);
    transition:
      color ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-1"]},
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]},
      border-radius ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:t})=>t.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:t})=>t.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:t})=>t.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:t})=>t.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Se=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let he=class extends m{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const e=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${h(e?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${e?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="lg"
        imageSrc=${h(this.imageSrc)}
        name=${h((e=this.wallet)==null?void 0:e.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=k.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await k.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,A.sendEvent({type:"track",event:"WALLET_IMPRESSION",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:f.state.view,query:this.walletQuery,certified:this.certified}}))}};he.styles=go;Se([d()],he.prototype,"visible",void 0);Se([d()],he.prototype,"imageSrc",void 0);Se([d()],he.prototype,"imageLoading",void 0);Se([d()],he.prototype,"isImpressed",void 0);Se([c()],he.prototype,"explorerId",void 0);Se([c()],he.prototype,"walletQuery",void 0);Se([c()],he.prototype,"certified",void 0);Se([c({type:Object})],he.prototype,"wallet",void 0);he=Se([p("w3m-all-wallets-list-item")],he);const yo=$`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:t})=>t[4]};
    padding-bottom: ${({spacing:t})=>t[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Ke=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Gi="local-paginator";let ve=class extends m{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!W.state.wallets.length,this.wallets=W.state.wallets,this.recommended=W.state.recommended,this.featured=W.state.featured,this.filteredWallets=W.state.filteredWallets,this.unsubscribe.push(W.subscribeKey("wallets",e=>this.wallets=e),W.subscribeKey("recommended",e=>this.recommended=e),W.subscribeKey("featured",e=>this.featured=e),W.subscribeKey("filteredWallets",e=>this.filteredWallets=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(i=>i()),(e=this.paginationObserver)==null||e.disconnect()}render(){return l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const e=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");e&&(await W.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,i){return[...Array(e)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${h(i)}></wui-card-select-loader>
      `)}getWallets(){var s;const e=[...this.featured,...this.recommended];((s=this.filteredWallets)==null?void 0:s.length)>0?e.push(...this.filteredWallets):e.push(...this.wallets);const i=g.uniqueBy(e,"id"),o=De.markWalletsAsInstalled(i);return De.markWalletsWithDisplayIndex(o)}walletsTemplate(){return this.getWallets().map(i=>l`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:i,featured:o,count:s,mobileFilteredOutWalletsLength:n}=W.state,r=window.innerWidth<352?3:4,a=e.length+i.length;let v=Math.ceil(a/r)*r-a+r;return v-=e.length?o.length%r:0,s===0&&o.length>0?null:s===0||[...o,...e,...i].length<s-(n??0)?this.shimmerTemplate(v,Gi):null}createPaginationObserver(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${Gi}`);e&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:s,count:n,wallets:r}=W.state;r.length<n&&W.fetchWalletsByPage({page:s+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){b.selectWalletConnector(e)}};ve.styles=yo;Ke([d()],ve.prototype,"loading",void 0);Ke([d()],ve.prototype,"wallets",void 0);Ke([d()],ve.prototype,"recommended",void 0);Ke([d()],ve.prototype,"featured",void 0);Ke([d()],ve.prototype,"filteredWallets",void 0);Ke([d()],ve.prototype,"badge",void 0);ve=Ke([p("w3m-all-wallets-list")],ve);const xo=oe`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Yt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Qe=class extends m{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await W.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=W.state,i=De.markWalletsAsInstalled(e);return e.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(o=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(o)}
              .wallet=${o}
              data-testid="wallet-search-item-${o.id}"
              explorerId=${o.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){b.selectWalletConnector(e)}};Qe.styles=xo;Yt([d()],Qe.prototype,"loading",void 0);Yt([c()],Qe.prototype,"query",void 0);Yt([c()],Qe.prototype,"badge",void 0);Qe=Yt([p("w3m-all-wallets-search")],Qe);var Ei=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ot=class extends m{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=g.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return l`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",T.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return g.isMobile()?l`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){f.push("ConnectingWalletConnect")}};Ei([d()],Ot.prototype,"search",void 0);Ei([d()],Ot.prototype,"badge",void 0);Ot=Ei([p("w3m-all-wallets-view")],Ot);const vo=$`
  button {
    display: flex;
    gap: ${({spacing:t})=>t[1]};
    padding: ${({spacing:t})=>t[4]};
    width: 100%;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:t})=>t[3]};
    border-radius: ${({borderRadius:t})=>t[3]};
  }

  button:hover {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var nt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ke=class extends m{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const e=`${this.size}-regular`;return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};ke.styles=[R,O,vo];nt([c()],ke.prototype,"text",void 0);nt([c({type:Boolean})],ke.prototype,"disabled",void 0);nt([c()],ke.prototype,"size",void 0);nt([c()],ke.prototype,"icon",void 0);nt([c()],ke.prototype,"tabIdx",void 0);ke=nt([p("wui-list-button")],ke);const $o=$`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:t})=>t[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:t})=>t[3]};
  }

  wui-text {
    margin: ${({spacing:t})=>t[2]} ${({spacing:t})=>t[3]}
      ${({spacing:t})=>t[0]} ${({spacing:t})=>t[3]};
  }
`;var ot=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let _e=class extends m{constructor(){super(),this.unsubscribe=[],this.formRef=vi(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=x.state.remoteFeatures,this.unsubscribe.push(x.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",i=>{i.key==="Enter"&&this.onSubmitEmail(i)})}render(){const e=y.hasAnyConnection(_.CONNECTOR_ID.AUTH);return l`
      <form ${$i(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${h(this.tabIdx)}
          ?disabled=${e}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){var o;if(!xi.isValidEmail(this.email)){ln.open({displayMessage:In.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(s=>s===u.state.activeChain)){const s=u.getFirstCaipNetworkSupportsAuthConnector();if(s){f.push("SwitchNetwork",{network:s});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();const s=b.getAuthConnector();if(!s)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await s.provider.connectEmail({email:this.email});if(A.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP")A.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),f.push("EmailVerifyOtp",{email:this.email});else if(n==="VERIFY_DEVICE")f.push("EmailVerifyDevice",{email:this.email});else if(n==="CONNECT"){const r=(o=this.remoteFeatures)==null?void 0:o.multiWallet;await y.connectExternal(s,u.state.activeChain),r?(f.replace("ProfileWallets"),T.showSuccess("New Wallet Added")):f.replace("Account")}}catch(s){const n=g.parseError(s);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":T.showError(s)}finally{this.loading=!1}}onFocusEvent(){A.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};_e.styles=$o;ot([c()],_e.prototype,"tabIdx",void 0);ot([d()],_e.prototype,"email",void 0);ot([d()],_e.prototype,"loading",void 0);ot([d()],_e.prototype,"error",void 0);ot([d()],_e.prototype,"remoteFeatures",void 0);_e=ot([p("w3m-email-login-widget")],_e);const Co=$`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var Xt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Je=class extends m{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Je.styles=[R,O,Co];Xt([c()],Je.prototype,"logo",void 0);Xt([c({type:Boolean})],Je.prototype,"disabled",void 0);Xt([c()],Je.prototype,"tabIdx",void 0);Je=Xt([p("wui-logo-select")],Je);const So=$`
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var qe=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Yi=2,Xi=6;let $e=class extends m{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=b.state.connectors,this.remoteFeatures=x.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.isPwaLoading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),x.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var o;const e=this.walletGuide==="explore";let i=(o=this.remoteFeatures)==null?void 0:o.socials;return!i&&e?(i=j.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(e){return e.length===2?l` <wui-flex gap="2">
        ${e.slice(0,Yi).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${h(e[0])}
      text=${`Continue with ${F.capitalize(e[0])}`}
      tabIdx=${h(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var s;let e=(s=this.remoteFeatures)==null?void 0:s.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!e||e.length===0)&&i&&(e=j.DEFAULT_SOCIALS),!e||e.length<=Yi?null:e&&e.length>Xi?l`<wui-flex gap="2">
        ${e.slice(1,Xi-1).map(n=>l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${h(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${h(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?l`<wui-flex gap="2">
      ${e.slice(1,e.length).map(n=>l`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${()=>{this.onSocialClick(n)}}
            logo=${n}
            tabIdx=${h(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){f.push("ConnectSocials")}async onSocialClick(e){if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===u.state.activeChain)){const o=u.getFirstCaipNetworkSupportsAuthConnector();if(o){f.push("SwitchNetwork",{network:o});return}}e&&await Bn(e)}async handlePwaFrameLoad(){var e;if(g.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof kn&&await this.authConnector.provider.init()}catch(i){ln.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return y.hasAnyConnection(_.CONNECTOR_ID.AUTH)}};$e.styles=So;qe([c()],$e.prototype,"walletGuide",void 0);qe([c()],$e.prototype,"tabIdx",void 0);qe([d()],$e.prototype,"connectors",void 0);qe([d()],$e.prototype,"remoteFeatures",void 0);qe([d()],$e.prototype,"authConnector",void 0);qe([d()],$e.prototype,"isPwaLoading",void 0);$e=qe([p("w3m-social-login-widget")],$e);var st=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Me=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.count=W.state.count,this.filteredCount=W.state.filteredWallets.length,this.isFetchingRecommendedWallets=W.state.isFetchingRecommendedWallets,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),W.subscribeKey("count",e=>this.count=e),W.subscribeKey("filteredWallets",e=>this.filteredCount=e.length),W.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(v=>v.id==="walletConnect"),{allWallets:i}=x.state;if(!e||i==="HIDE"||i==="ONLY_MOBILE"&&!g.isMobile())return null;const o=W.state.featured.length,s=this.count+o,n=s<10?s:Math.floor(s/10)*10,r=this.filteredCount>0?this.filteredCount:n;let a=`${r}`;this.filteredCount>0?a=`${this.filteredCount}`:r<s&&(a=`${r}+`);const w=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${h(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${w}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){A.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),f.push("AllWallets")}};st([c()],Me.prototype,"tabIdx",void 0);st([d()],Me.prototype,"connectors",void 0);st([d()],Me.prototype,"count",void 0);st([d()],Me.prototype,"filteredCount",void 0);st([d()],Me.prototype,"isFetchingRecommendedWallets",void 0);Me=st([p("w3m-all-wallets-widget")],Me);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qi=(t,e,i)=>{const o=new Map;for(let s=e;s<=i;s++)o.set(t[s],s);return o},wn=Nn(class extends On{constructor(t){if(super(t),t.type!==Pn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;i===void 0?i=e:e!==void 0&&(o=e);const s=[],n=[];let r=0;for(const a of t)s[r]=o?o(a,r):r,n[r]=i(a,r),r++;return{values:n,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){const s=Dn(t),{values:n,keys:r}=this.dt(e,i,o);if(!Array.isArray(s))return this.ut=r,n;const a=this.ut??(this.ut=[]),w=[];let v,S,E=0,I=s.length-1,N=0,P=n.length-1;for(;E<=I&&N<=P;)if(s[E]===null)E++;else if(s[I]===null)I--;else if(a[E]===r[N])w[N]=Oe(s[E],n[N]),E++,N++;else if(a[I]===r[P])w[P]=Oe(s[I],n[P]),I--,P--;else if(a[E]===r[P])w[P]=Oe(s[E],n[P]),dt(t,w[P+1],s[E]),E++,P--;else if(a[I]===r[N])w[N]=Oe(s[I],n[N]),dt(t,s[E],s[I]),I--,N++;else if(v===void 0&&(v=Qi(r,N,P),S=Qi(a,E,I)),v.has(a[E]))if(v.has(a[I])){const te=S.get(r[N]),lt=te!==void 0?s[te]:null;if(lt===null){const ct=dt(t,s[E]);Oe(ct,n[N]),w[N]=ct}else w[N]=Oe(lt,n[N]),dt(t,s[E],lt),s[te]=null;N++}else ri(s[I]),I--;else ri(s[E]),E++;for(;N<=P;){const te=dt(t,w[P+1]);Oe(te,n[N]),w[N++]=te}for(;E<=I;){const te=s[E++];te!==null&&ri(te)}return this.ut=r,Ln(t,w),_n}});var Qt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let ft=class extends m{constructor(){super(),this.unsubscribe=[],this.connectors=[],this.connections=y.state.connections,this.unsubscribe.push(y.subscribeKey("connections",e=>this.connections=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(i=>i.type==="ANNOUNCED");return e!=null&&e.length?l`
      <wui-flex flexDirection="column" gap="2">
        ${wn(e.filter(de.showConnector),i=>i.id,i=>{var n,r;const s=(this.connections.get(i.chain)??[]).some(a=>Q.isLowerCaseMatch(a.connectorId,i.id));return l`
              <w3m-list-wallet
                imageSrc=${h(k.getConnectorImage(i))}
                name=${i.name??"Unknown"}
                @click=${()=>this.onConnector(i)}
                tagVariant=${s?"info":"success"}
                tagLabel=${s?"connected":"installed"}
                size="sm"
                data-testid=${`wallet-selector-${i.id}`}
                .installed=${!0}
                tabIdx=${h(this.tabIdx)}
                rdnsId=${h(((n=i.explorerWallet)==null?void 0:n.rdns)||void 0)}
                walletRank=${h((r=i.explorerWallet)==null?void 0:r.order)}
              >
              </w3m-list-wallet>
            `})}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?g.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};Qt([c({type:Number})],ft.prototype,"tabIdx",void 0);Qt([c({attribute:!1})],ft.prototype,"connectors",void 0);Qt([d()],ft.prototype,"connections",void 0);ft=Qt([p("w3m-connect-announced-widget")],ft);var Jt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let wt=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),g.isTelegram()&&g.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=x.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const i=this.filterOutDuplicateWallets(e),o=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`<wui-flex flexDirection="column" gap="2">
      ${i.map(s=>l`
          <w3m-list-wallet
            imageSrc=${h(k.getWalletImage(s))}
            name=${s.name??"Unknown"}
            @click=${()=>this.onConnectWallet(s)}
            size="sm"
            data-testid=${`wallet-selector-${s.id}`}
            tabIdx=${h(this.tabIdx)}
            ?loading=${this.loading}
            ?disabled=${o}
            rdnsId=${s.rdns}
            walletRank=${s.order}
          >
          </w3m-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const i=be.getRecentWallets(),o=this.connectors.map(a=>{var w;return(w=a.info)==null?void 0:w.rdns}).filter(Boolean),s=i.map(a=>a.rdns).filter(Boolean),n=o.concat(s);if(n.includes("io.metamask.mobile")&&g.isMobile()){const a=n.indexOf("io.metamask.mobile");n[a]="io.metamask"}return e.filter(a=>!n.includes(String(a==null?void 0:a.rdns)))}onConnectWallet(e){this.loading||f.push("ConnectingWalletConnect",{wallet:e})}};Jt([c()],wt.prototype,"tabIdx",void 0);Jt([d()],wt.prototype,"connectors",void 0);Jt([d()],wt.prototype,"loading",void 0);wt=Jt([p("w3m-connect-custom-widget")],wt);var Ai=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Pt=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const o=this.connectors.filter(n=>n.type==="EXTERNAL").filter(de.showConnector).filter(n=>n.id!==_.CONNECTOR_ID.COINBASE_SDK);if(!(o!=null&&o.length))return this.style.cssText="display: none",null;const s=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${o.map(n=>{var r,a;return l`
            <w3m-list-wallet
              imageSrc=${h(k.getConnectorImage(n))}
              .installed=${!0}
              name=${n.name??"Unknown"}
              data-testid=${`wallet-selector-external-${n.id}`}
              size="sm"
              @click=${()=>this.onConnector(n)}
              tabIdx=${h(this.tabIdx)}
              ?disabled=${s}
              rdnsId=${(r=n.explorerWallet)==null?void 0:r.rdns}
              walletRank=${(a=n.explorerWallet)==null?void 0:a.order}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){f.push("ConnectingExternal",{connector:e})}};Ai([c()],Pt.prototype,"tabIdx",void 0);Ai([d()],Pt.prototype,"connectors",void 0);Pt=Ai([p("w3m-connect-external-widget")],Pt);var Ii=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Dt=class extends m{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){if(!this.wallets.length)return this.style.cssText="display: none",null;const e=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${this.wallets.map(i=>l`
            <w3m-list-wallet
              data-testid=${`wallet-selector-featured-${i.id}`}
              imageSrc=${h(k.getWalletImage(i))}
              name=${i.name??"Unknown"}
              @click=${()=>this.onConnectWallet(i)}
              tabIdx=${h(this.tabIdx)}
              size="sm"
              ?disabled=${e}
              rdnsId=${i.rdns}
              walletRank=${i.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){b.selectWalletConnector(e)}};Ii([c()],Dt.prototype,"tabIdx",void 0);Ii([c()],Dt.prototype,"wallets",void 0);Dt=Ii([p("w3m-connect-featured-widget")],Dt);var Zt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let mt=class extends m{constructor(){super(),this.unsubscribe=[],this.connectors=[],this.connections=y.state.connections,this.unsubscribe.push(y.subscribeKey("connections",e=>this.connections=e))}render(){const e=de.sortConnectorsByExplorerWallet(this.connectors.filter(de.showConnector));return e.length===0?(this.style.cssText="display: none",null):l`
      <wui-flex flexDirection="column" gap="2">
        ${wn(e,i=>i.id,i=>{var n,r;const s=(this.connections.get(i.chain)??[]).some(a=>Q.isLowerCaseMatch(a.connectorId,i.id));return l`
              <w3m-list-wallet
                imageSrc=${h(k.getConnectorImage(i))}
                .installed=${!0}
                name=${i.name??"Unknown"}
                tagVariant=${s?"info":"success"}
                tagLabel=${s?"connected":"installed"}
                data-testid=${`wallet-selector-${i.id}`}
                size="sm"
                @click=${()=>this.onConnector(i)}
                tabIdx=${h(this.tabIdx)}
                rdnsId=${h(((n=i.explorerWallet)==null?void 0:n.rdns)||void 0)}
                walletRank=${h((r=i.explorerWallet)==null?void 0:r.order)}
              >
              </w3m-list-wallet>
            `})}
      </wui-flex>
    `}onConnector(e){b.setActiveConnector(e),f.push("ConnectingExternal",{connector:e,wallet:e.explorerWallet})}};Zt([c({type:Number})],mt.prototype,"tabIdx",void 0);Zt([c({attribute:!1})],mt.prototype,"connectors",void 0);Zt([d()],mt.prototype,"connections",void 0);mt=Zt([p("w3m-connect-injected-widget")],mt);var ki=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Lt=class extends m{constructor(){super(),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors.filter(o=>o.type==="MULTI_CHAIN"&&o.name!=="WalletConnect");if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const i=de.sortConnectorsByExplorerWallet(e);return l`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(o=>{var s,n;return l`
            <w3m-list-wallet
              imageSrc=${h(k.getConnectorImage(o))}
              .installed=${!0}
              name=${o.name??"Unknown"}
              tagVariant="info"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${o.id}`}
              size="sm"
              @click=${()=>this.onConnector(o)}
              tabIdx=${h(this.tabIdx)}
              rdnsId=${h(((s=o.explorerWallet)==null?void 0:s.rdns)||void 0)}
              walletRank=${h((n=o.explorerWallet)==null?void 0:n.order)}
            >
            </w3m-list-wallet>
          `})}
      </wui-flex>
    `}onConnector(e){b.setActiveConnector(e),f.push("ConnectingMultiChain")}};ki([c()],Lt.prototype,"tabIdx",void 0);ki([c()],Lt.prototype,"connectors",void 0);Lt=ki([p("w3m-connect-multi-chain-widget")],Lt);var ei=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let bt=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.loading=!1,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e)),g.isTelegram()&&g.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const i=be.getRecentWallets().filter(s=>!De.isExcluded(s)).filter(s=>!this.hasWalletConnector(s)).filter(s=>this.isWalletCompatibleWithCurrentChain(s));if(!i.length)return this.style.cssText="display: none",null;const o=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${i.map(s=>l`
            <w3m-list-wallet
              imageSrc=${h(k.getWalletImage(s))}
              name=${s.name??"Unknown"}
              @click=${()=>this.onConnectWallet(s)}
              tagLabel="recent"
              tagVariant="info"
              size="sm"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${o}
              rdnsId=${s.rdns}
              walletRank=${s.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){this.loading||b.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(i=>i.id===e.id||i.name===e.name)}isWalletCompatibleWithCurrentChain(e){const i=u.state.activeChain;return i&&e.chains?e.chains.some(o=>{const s=o.split(":")[0];return i===s}):!0}};ei([c()],bt.prototype,"tabIdx",void 0);ei([d()],bt.prototype,"connectors",void 0);ei([d()],bt.prototype,"loading",void 0);bt=ei([p("w3m-connect-recent-widget")],bt);var ti=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Ji=4;let gt=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,g.isTelegram()&&g.isIos()&&(this.loading=!y.state.wcUri,this.unsubscribe.push(y.subscribeKey("wcUri",e=>this.loading=!e)))}render(){var ct,Oi,Pi,Di,Li,ji;const{connectors:e}=b.state,{customWallets:i,featuredWalletIds:o}=x.state,s=e.find(M=>M.id==="walletConnect"),n=e.filter(M=>M.type==="INJECTED"||M.type==="ANNOUNCED"||M.type==="MULTI_CHAIN");if(!s&&!n.length&&!(i!=null&&i.length))return null;const r=!!((ct=x.state.features)!=null&&ct.email||(Oi=x.state.remoteFeatures)!=null&&Oi.email),a=Array.isArray((Pi=x.state.features)==null?void 0:Pi.socials)&&((Di=x.state.features)==null?void 0:Di.socials.length)>0||Array.isArray((Li=x.state.remoteFeatures)==null?void 0:Li.socials)&&((ji=x.state.remoteFeatures)==null?void 0:ji.socials.length)>0,w=n.filter(M=>M.name!=="Browser Wallet"),v=(o==null?void 0:o.length)||0,S=(i==null?void 0:i.length)||0,E=w.length||0,I=r?1:0,N=a?1:0,P=v+S+E+I+N;if(P>=Ji)return this.style.cssText="display: none",null;const te=De.filterOutDuplicateWallets(this.wallets).slice(0,Ji-P);if(!te.length)return this.style.cssText="display: none",null;const lt=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-flex flexDirection="column" gap="2">
        ${te.map(M=>l`
            <w3m-list-wallet
              imageSrc=${h(k.getWalletImage(M))}
              name=${(M==null?void 0:M.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(M)}
              size="sm"
              tabIdx=${h(this.tabIdx)}
              ?loading=${this.loading}
              ?disabled=${lt}
              rdnsId=${M.rdns}
              walletRank=${M.order}
            >
            </w3m-list-wallet>
          `)}
      </wui-flex>
    `}onConnectWallet(e){if(this.loading)return;const i=b.getConnector({id:e.id,rdns:e.rdns});i?f.push("ConnectingExternal",{connector:i}):f.push("ConnectingWalletConnect",{wallet:e})}};ti([c()],gt.prototype,"tabIdx",void 0);ti([c()],gt.prototype,"wallets",void 0);ti([d()],gt.prototype,"loading",void 0);gt=ti([p("w3m-connect-recommended-widget")],gt);var ii=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let yt=class extends m{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=b.state.connectors,this.connectorImages=Pe.state.connectorImages,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),Pe.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var s;if(g.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(n=>n.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const i=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""],o=y.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return l`
      <w3m-list-wallet
        imageSrc=${h(i)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="accent"
        tabIdx=${h(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
        size="sm"
        ?disabled=${o}
        rdnsId=${(s=e.explorerWallet)==null?void 0:s.rdns}
      >
      </w3m-list-wallet>
    `}onConnector(e){b.setActiveConnector(e),f.push("ConnectingWalletConnect")}};ii([c()],yt.prototype,"tabIdx",void 0);ii([d()],yt.prototype,"connectors",void 0);ii([d()],yt.prototype,"connectorImages",void 0);yt=ii([p("w3m-connect-walletconnect-widget")],yt);const Eo=$`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var rt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let We=class extends m{constructor(){super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.recommended=W.state.recommended,this.featured=W.state.featured,this.explorerWallets=W.state.explorerWallets,this.unsubscribe.push(b.subscribeKey("connectors",e=>this.connectors=e),W.subscribeKey("recommended",e=>this.recommended=e),W.subscribeKey("featured",e=>this.featured=e),W.subscribeKey("explorerFilteredWallets",e=>{this.explorerWallets=e!=null&&e.length?e:W.state.explorerWallets}),W.subscribeKey("explorerWallets",e=>{var i;(i=this.explorerWallets)!=null&&i.length||(this.explorerWallets=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(e,i){return e.map(o=>{if(o.type==="MULTI_CHAIN"&&o.connectors){const n=o.connectors.map(v=>v.id),r=o.connectors.map(v=>v.name),a=o.connectors.map(v=>{var S;return(S=v.info)==null?void 0:S.rdns}),w=i==null?void 0:i.find(v=>n.includes(v.id)||r.includes(v.name)||v.rdns&&(a.includes(v.rdns)||n.includes(v.rdns)));return o.explorerWallet=w??o.explorerWallet,o}const s=i==null?void 0:i.find(n=>{var r;return n.id===o.id||n.rdns===((r=o.info)==null?void 0:r.rdns)||n.name===o.name});return o.explorerWallet=s??o.explorerWallet,o})}processConnectorsByType(e,i=!0){var s;if(!((s=this.explorerWallets)!=null&&s.length))return e;const o=de.sortConnectorsByExplorerWallet([...e]);return i?o.filter(de.showConnector):o}connectorListTemplate(){const e=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),i=de.getConnectorsByType(e,this.recommended,this.featured),o=this.processConnectorsByType(i.announced),s=this.processConnectorsByType(i.injected),n=this.processConnectorsByType(i.multiChain,!1),r=i.custom,a=i.recent,w=i.external,v=i.recommended,S=i.featured;return de.getConnectorTypeOrder({custom:r,recent:a,announced:o,injected:s,multiChain:n,recommended:v,featured:S,external:w}).map(I=>{switch(I){case"injected":return l`
            ${n.length?l`<w3m-connect-multi-chain-widget
                  tabIdx=${h(this.tabIdx)}
                  .connectors=${n}
                ></w3m-connect-multi-chain-widget>`:null}
            ${o.length?l`<w3m-connect-announced-widget
                  tabIdx=${h(this.tabIdx)}
                  .connectors=${o}
                ></w3m-connect-announced-widget>`:null}
            ${s.length?l`<w3m-connect-injected-widget
                  .connectors=${s}
                  tabIdx=${h(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return l`<w3m-connect-walletconnect-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return l`<w3m-connect-recent-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return l`<w3m-connect-featured-widget
            .wallets=${S}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return l`<w3m-connect-custom-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return l`<w3m-connect-external-widget
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return l`<w3m-connect-recommended-widget
            .wallets=${v}
            tabIdx=${h(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${I}`),null}})}};We.styles=Eo;rt([c({type:Number})],We.prototype,"tabIdx",void 0);rt([d()],We.prototype,"connectors",void 0);rt([d()],We.prototype,"recommended",void 0);rt([d()],We.prototype,"featured",void 0);rt([d()],We.prototype,"explorerWallets",void 0);We=rt([p("w3m-connector-list")],We);var mn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let hi=class extends m{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${h(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${h(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};mn([c()],hi.prototype,"tabIdx",void 0);hi=mn([p("w3m-wallet-login-list")],hi);const Ao=$`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var le=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Io=470;let Y=class extends m{constructor(){var e,i;super(),this.unsubscribe=[],this.connectors=b.state.connectors,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.features=x.state.features,this.remoteFeatures=x.state.remoteFeatures,this.enableWallets=x.state.enableWallets,this.noAdapters=u.state.noAdapters,this.walletGuide="get-started",this.checked=Wt.state.isLegalCheckboxChecked,this.isEmailEnabled=((e=this.remoteFeatures)==null?void 0:e.email)&&!u.state.noAdapters,this.isSocialEnabled=((i=this.remoteFeatures)==null?void 0:i.socials)&&this.remoteFeatures.socials.length>0&&!u.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(b.subscribeKey("connectors",o=>{this.connectors=o,this.authConnector=this.connectors.find(s=>s.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),x.subscribeKey("features",o=>{this.features=o}),x.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),x.subscribeKey("enableWallets",o=>this.enableWallets=o),u.subscribeKey("noAdapters",o=>this.setEmailAndSocialEnableCheck(o,this.remoteFeatures)),Wt.subscribeKey("isLegalCheckboxChecked",o=>this.checked=o))}disconnectedCallback(){var i,o;this.unsubscribe.forEach(s=>s()),(i=this.resizeObserver)==null||i.disconnect();const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");e==null||e.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var i,o;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e==null||e.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(o=this.resizeObserver)==null||o.observe(e),this.handleConnectListScroll())}render(){var I;const{termsConditionsUrl:e,privacyPolicyUrl:i}=x.state,o=(I=x.state.features)==null?void 0:I.legalCheckbox,r=!!(e||i)&&!!o&&this.walletGuide==="get-started"&&!this.checked,a={connect:!0,disabled:r},w=x.state.enableWalletGuide,v=this.enableWallets,S=this.isSocialEnabled||this.authConnector,E=r?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${cn(a)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${S&&v&&w&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(E)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var e;return xi.hasFooter()||!((e=this.remoteFeatures)!=null&&e.reownBranding)?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,i){this.isEmailEnabled=(i==null?void 0:i.email)&&!e,this.isSocialEnabled=(i==null?void 0:i.socials)&&i.socials.length>0&&!e,this.remoteFeatures=i,this.noAdapters=e}checkIfAuthEnabled(e){const i=e.filter(s=>s.type===Wn.CONNECTOR_TYPE_AUTH).map(s=>s.chain);return _.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(s=>i.includes(s))}renderConnectMethod(e){const i=De.getConnectOrderMethod(this.features,this.connectors);return l`${i.map((o,s)=>{switch(o){case"email":return l`${this.emailTemplate(e)} ${this.separatorTemplate(s,"email")}`;case"social":return l`${this.socialListTemplate(e)}
          ${this.separatorTemplate(s,"social")}`;case"wallet":return l`${this.walletListTemplate(e)}
          ${this.separatorTemplate(s,"wallet")}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const o=De.getConnectOrderMethod(this.features,this.connectors)[e+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(e+1):void 0}separatorTemplate(e,i){const o=this.checkIsThereNextMethod(e),s=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&o&&!s?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const n=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!n&&o?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const n=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!n&&o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget tabIdx=${h(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${h(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){var a,w;const i=this.enableWallets,o=((a=this.features)==null?void 0:a.emailShowWallets)===!1,s=(w=this.features)==null?void 0:w.collapseWallets,n=o||s;return!i||(g.isTelegram()&&(g.isSafari()||g.isIos())&&y.connectWalletConnect().catch(v=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${h(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${h(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");if(!e)return;e.scrollHeight>Io?(e.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty("--connect-scroll--top-opacity",_t.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",_t.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){f.push("ConnectWallets")}};Y.styles=Ao;le([d()],Y.prototype,"connectors",void 0);le([d()],Y.prototype,"authConnector",void 0);le([d()],Y.prototype,"features",void 0);le([d()],Y.prototype,"remoteFeatures",void 0);le([d()],Y.prototype,"enableWallets",void 0);le([d()],Y.prototype,"noAdapters",void 0);le([c()],Y.prototype,"walletGuide",void 0);le([d()],Y.prototype,"checked",void 0);le([d()],Y.prototype,"isEmailEnabled",void 0);le([d()],Y.prototype,"isSocialEnabled",void 0);le([d()],Y.prototype,"isAuthEnabled",void 0);Y=le([p("w3m-connect-view")],Y);const ko=$`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding-left: ${({spacing:t})=>t[3]};
    padding-right: ${({spacing:t})=>t[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:t})=>t[6]};
  }

  wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ni=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ze=class extends m{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ze.styles=[R,O,ko];ni([c({type:Boolean})],Ze.prototype,"disabled",void 0);ni([c()],Ze.prototype,"label",void 0);ni([c()],Ze.prototype,"buttonLabel",void 0);Ze=ni([p("wui-cta-button")],Ze);const _o=$`
  :host {
    display: block;
    padding: 0 ${({spacing:t})=>t[5]} ${({spacing:t})=>t[5]};
  }
`;var bn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let jt=class extends m{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:i,play_store:o,chrome_store:s,homepage:n}=this.wallet,r=g.isMobile(),a=g.isIos(),w=g.isAndroid(),v=[i,o,n,s].filter(Boolean).length>1,S=F.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return v&&!r?l`
        <wui-cta-button
          label=${`Don't have ${S}?`}
          buttonLabel="Get"
          @click=${()=>f.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!v&&n?l`
        <wui-cta-button
          label=${`Don't have ${S}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?l`
        <wui-cta-button
          label=${`Don't have ${S}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&w?l`
        <wui-cta-button
          label=${`Don't have ${S}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&g.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&g.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&g.openHref(this.wallet.homepage,"_blank")}};jt.styles=[_o];bn([c({type:Object})],jt.prototype,"wallet",void 0);jt=bn([p("w3m-mobile-download-links")],jt);const Wo=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:t})=>t.lg};
    transition-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var me=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};class L extends m{constructor(){var e,i,o,s,n;super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,this.connector=(i=f.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=k.getConnectorImage(this.connector)??k.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((s=this.connector)==null?void 0:s.name)??"Wallet",this.isRetrying=!1,this.uri=y.state.wcUri,this.error=y.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(y.subscribeKey("wcUri",r=>{var a;this.uri=r,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),y.subscribeKey("wcError",r=>this.error=r)),(g.isTelegram()||g.isSafari())&&g.isIos()&&y.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),y.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),l`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${h(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,i;y.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const e=li.state.themeVariables["--w3m-border-radius-master"],i=e?parseInt(e.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(g.copyToClopboard(this.uri),T.showSuccess("Link copied"))}catch{T.showError("Failed to copy")}}}L.styles=Wo;me([d()],L.prototype,"isRetrying",void 0);me([d()],L.prototype,"uri",void 0);me([d()],L.prototype,"error",void 0);me([d()],L.prototype,"ready",void 0);me([d()],L.prototype,"showRetry",void 0);me([d()],L.prototype,"label",void 0);me([d()],L.prototype,"secondaryBtnLabel",void 0);me([d()],L.prototype,"secondaryLabel",void 0);me([d()],L.prototype,"isLoading",void 0);me([c({type:Boolean})],L.prototype,"isMobile",void 0);me([c()],L.prototype,"onRetry",void 0);var To=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Zi=class extends L{constructor(){var i,o,s,n,r;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=y.getConnections((i=this.connector)==null?void 0:i.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=x.state.remoteFeatures,this.currentActiveConnectorId=b.state.activeConnectorIds[(o=this.connector)==null?void 0:o.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const e=(s=this.connector)==null?void 0:s.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(r=this.wallet)==null?void 0:r.order,view:f.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(b.subscribeKey("activeConnectorIds",a=>{var S;const w=a[e],v=(S=this.remoteFeatures)==null?void 0:S.multiWallet;w!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&v?(f.replace("ProfileWallets"),T.showSuccess("New Wallet Added")):B.close())}),y.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){var e;try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==_.CONNECTOR_ID.COINBASE_SDK||!this.error)&&(await y.connectExternal(this.connector,this.connector.chain),A.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown",view:f.state.view,walletRank:(e=this.wallet)==null?void 0:e.order}}))}}catch(i){i instanceof gi&&i.originalName===yi.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?A.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:i.message}}):A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(i==null?void 0:i.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(e){var i,o;if((i=this.connector)!=null&&i.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const s=e.get(this.connector.chain)??[],n=(o=this.remoteFeatures)==null?void 0:o.multiWallet;if(s.length===0)f.replace("Connect");else{const r=Ee.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(w=>w.accounts),a=Ee.getConnectionsByConnectorId(s,this.connector.id).flatMap(w=>w.accounts);a.length===0?this.hasMultipleConnections&&n?(f.replace("ProfileWallets"),T.showSuccess("Wallet deleted")):B.close():!r.every(v=>a.some(S=>Q.isLowerCaseMatch(v.address,S.address)))&&n&&f.replace("ProfileWallets")}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(i=>Q.isLowerCaseMatch(i.connectorId,e.id))}};Zi=To([p("w3m-connecting-external-view")],Zi);const Ro=oe`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var gn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Bt=class extends m{constructor(){super(),this.unsubscribe=[],this.activeConnector=b.state.activeConnector,this.unsubscribe.push(b.subscribeKey("activeConnector",e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${h(k.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${(e=this.activeConnector)==null?void 0:e.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var e,i;return(i=(e=this.activeConnector)==null?void 0:e.connectors)==null?void 0:i.map(o=>{var s;return o.name?l`
            <w3m-list-wallet
              imageSrc=${h(k.getChainImage(o.chain))}
              name=${_.CHAIN_NAME_MAP[o.chain]}
              @click=${()=>this.onConnector(o)}
              size="sm"
              data-testid="wui-list-chain-${o.chain}"
              rdnsId=${(s=o.explorerWallet)==null?void 0:s.rdns}
            ></w3m-list-wallet>
          `:null})}onConnector(e){var o,s,n;const i=(s=(o=this.activeConnector)==null?void 0:o.connectors)==null?void 0:s.find(r=>r.chain===e.chain);if(!i){T.showError("Failed to find connector");return}i.id==="walletConnect"?g.isMobile()?f.push("AllWallets"):f.push("ConnectingWalletConnect"):f.push("ConnectingExternal",{connector:i,wallet:(n=this.activeConnector)==null?void 0:n.explorerWallet})}};Bt.styles=Ro;gn([d()],Bt.prototype,"activeConnector",void 0);Bt=gn([p("w3m-connecting-multi-chain-view")],Bt);var _i=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ut=class extends m{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:i})=>i),e}onTabChange(e){var o;const i=this.platformTabs[e];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};_i([c({type:Array})],Ut.prototype,"platforms",void 0);_i([c()],Ut.prototype,"onSelectPlatfrom",void 0);Ut=_i([p("w3m-connecting-header")],Ut);var No=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let en=class extends L{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:f.state.view}})}async onConnectProxy(){var e,i;try{this.error=!1;const{connectors:o}=b.state,s=o.find(n=>{var r,a,w;return n.type==="ANNOUNCED"&&((r=n.info)==null?void 0:r.rdns)===((a=this.wallet)==null?void 0:a.rdns)||n.type==="INJECTED"||n.name===((w=this.wallet)==null?void 0:w.name)});if(s)await y.connectExternal(s,s.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");B.close(),A.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown",view:f.state.view,walletRank:(i=this.wallet)==null?void 0:i.order}})}catch(o){o instanceof gi&&o.originalName===yi.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?A.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:o.message}}):A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(o==null?void 0:o.message)??"Unknown"}}),this.error=!0}}};en=No([p("w3m-connecting-wc-browser")],en);var Oo=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let tn=class extends L{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:f.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:s,href:n}=g.formatNativeUrl(i,this.uri);y.setWcLinking({name:o,href:n}),y.setRecentWallet(this.wallet),g.openHref(s,"_blank")}catch{this.error=!0}}};tn=Oo([p("w3m-connecting-wc-desktop")],tn);var at=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Fe=class extends L{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=x.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{var i;if((i=this.wallet)!=null&&i.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:o,link_mode:s,name:n}=this.wallet,{redirect:r,redirectUniversalLink:a,href:w}=g.formatNativeUrl(o,this.uri,s);this.redirectDeeplink=r,this.redirectUniversalLink=a,this.target=g.isIframe()?"_top":"_self",y.setWcLinking({name:n,href:w}),y.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?g.openHref(this.redirectUniversalLink,this.target):g.openHref(this.redirectDeeplink,this.target)}catch(o){A.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:o instanceof Error?o.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=j.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(y.subscribeKey("wcUri",()=>{this.onHandleURI()})),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:this.wallet.order,view:f.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onTryAgain(){var e;y.setWcError(!1),(e=this.onConnect)==null||e.call(this)}};at([d()],Fe.prototype,"redirectDeeplink",void 0);at([d()],Fe.prototype,"redirectUniversalLink",void 0);at([d()],Fe.prototype,"target",void 0);at([d()],Fe.prototype,"preferUniversalLinks",void 0);at([d()],Fe.prototype,"isLoading",void 0);Fe=at([p("w3m-connecting-wc-mobile")],Fe);const Po=$`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var yn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let zt=class extends L{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){var e,i,o;this.basic||A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:f.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(i=>i()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){var s,n;if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;y.setWcLinking(void 0),y.setRecentWallet(this.wallet);let o=this.uri;if((s=this.wallet)!=null&&s.mobile_link){const{redirect:r}=g.formatNativeUrl((n=this.wallet)==null?void 0:n.mobile_link,this.uri,null);o=r}return l` <wui-qr-code
      size=${e}
      theme=${li.state.themeMode}
      uri=${o}
      imageSrc=${h(k.getWalletImage(this.wallet))}
      color=${h(li.state.themeVariables["--w3m-qr-color"])}
      alt=${h(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return l`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};zt.styles=Po;yn([c({type:Boolean})],zt.prototype,"basic",void 0);zt=yn([p("w3m-connecting-wc-qrcode")],zt);var Do=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let nn=class extends m{constructor(){var e,i,o;if(super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:f.state.view}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${h(k.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};nn=Do([p("w3m-connecting-wc-unsupported")],nn);var xn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let pi=class extends L{constructor(){var e,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=j.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(y.subscribeKey("wcUri",()=>{this.updateLoadingState()})),A.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(e=this.wallet)==null?void 0:e.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:f.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:s,href:n}=g.formatUniversalUrl(i,this.uri);y.setWcLinking({name:o,href:n}),y.setRecentWallet(this.wallet),g.openHref(s,"_blank")}catch{this.error=!0}}};xn([d()],pi.prototype,"isLoading",void 0);pi=xn([p("w3m-connecting-wc-web")],pi);var Ge=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Te=class extends m{constructor(){var e;super(),this.wallet=(e=f.state.data)==null?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!x.state.siwx,this.remoteFeatures=x.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(x.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return!((e=this.remoteFeatures)!=null&&e.reownBranding)||!this.displayBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){var i,o;if(!(this.platform==="browser"||x.state.manualWCControl&&!e))try{const{wcPairingExpiry:s,status:n}=y.state;if(e||x.state.enableEmbedded||g.isPairingExpired(s)||n==="connecting"){const r=y.getConnections(u.state.activeChain),a=(i=this.remoteFeatures)==null?void 0:i.multiWallet,w=r.length>0;await y.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(w&&a?(f.replace("ProfileWallets"),T.showSuccess("New Wallet Added")):B.close())}}catch(s){if(s instanceof Error&&s.message.includes("An error occurred when attempting to switch chain")&&!x.state.enableNetworkSwitch&&u.state.activeChain){u.setActiveCaipNetwork(Tn.getUnsupportedNetwork(`${u.state.activeChain}:${(o=u.state.activeCaipNetwork)==null?void 0:o.id}`)),u.showUnsupportedChainUI();return}s instanceof gi&&s.originalName===yi.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?A.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:s.message}}):A.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(s==null?void 0:s.message)??"Unknown"}}),y.setWcError(!0),T.showError(s.message??"Connection error"),y.resetWcConnection(),f.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:i,webapp_link:o,injected:s,rdns:n}=this.wallet,r=s==null?void 0:s.map(({injected_id:P})=>P).filter(Boolean),a=[...n?[n]:r??[]],w=x.state.isUniversalProvider?!1:a.length,v=e,S=o,E=y.checkInstalled(a),I=w&&E,N=i&&!g.isMobile();I&&!u.state.noAdapters&&this.platforms.push("browser"),v&&this.platforms.push(g.isMobile()?"mobile":"qrcode"),S&&this.platforms.push("web"),N&&this.platforms.push("desktop"),!I&&w&&!u.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Ge([d()],Te.prototype,"platform",void 0);Ge([d()],Te.prototype,"platforms",void 0);Ge([d()],Te.prototype,"isSiwxEnabled",void 0);Ge([d()],Te.prototype,"remoteFeatures",void 0);Ge([c({type:Boolean})],Te.prototype,"displayBranding",void 0);Ge([c({type:Boolean})],Te.prototype,"basic",void 0);Te=Ge([p("w3m-connecting-wc-view")],Te);var Wi=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Mt=class extends m{constructor(){super(),this.unsubscribe=[],this.isMobile=g.isMobile(),this.remoteFeatures=x.state.remoteFeatures,this.unsubscribe.push(x.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){const{featured:e,recommended:i}=W.state,{customWallets:o}=x.state,s=be.getRecentWallets(),n=e.length||i.length||(o==null?void 0:o.length)||s.length;return l`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return(e=this.remoteFeatures)!=null&&e.reownBranding?l` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Wi([d()],Mt.prototype,"isMobile",void 0);Wi([d()],Mt.prototype,"remoteFeatures",void 0);Mt=Wi([p("w3m-connecting-wc-basic-view")],Mt);const Lo=oe`
  .continue-button-container {
    width: 100%;
  }
`;var vn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ft=class extends m{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{g.openHref(Un.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){f.push("RegisterAccountName"),A.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:Ae(u.state.activeChain)===ce.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Ft.styles=Lo;vn([d()],Ft.prototype,"loading",void 0);Ft=vn([p("w3m-choose-account-name-view")],Ft);var jo=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let on=class extends m{constructor(){var e;super(...arguments),this.wallet=(e=f.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(A.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),g.openHref(e.href,"_blank"))}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};on=jo([p("w3m-downloads-view")],on);var Bo=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Uo="https://walletconnect.com/explorer";let sn=class extends m{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{g.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:i}=W.state,{customWallets:o}=x.state;return[...i,...o??[],...e].slice(0,4).map(n=>l`
        <w3m-list-wallet
          name=${n.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${h(k.getWalletImage(n))}
          @click=${()=>{this.onWalletClick(n)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){A.sendEvent({type:"track",event:"GET_WALLET",properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:"homepage"}}),g.openHref(e.homepage??Uo,"_blank")}};sn=Bo([p("w3m-get-wallet-view")],sn);var $n=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let fi=class extends m{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(i=>l`<wui-visual size="sm" name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};$n([c({type:Array})],fi.prototype,"data",void 0);fi=$n([p("w3m-help-widget")],fi);var zo=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Mo=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let rn=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Mo}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){A.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),f.push("GetWallet")}};rn=zo([p("w3m-what-is-a-wallet-view")],rn);const Fo=$`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Cn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Vt=class extends m{constructor(){super(),this.unsubscribe=[],this.checked=Wt.state.isLegalCheckboxChecked,this.unsubscribe.push(Wt.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var w;const{termsConditionsUrl:e,privacyPolicyUrl:i}=x.state,o=(w=x.state.features)==null?void 0:w.legalCheckbox,n=!!(e||i)&&!!o,r=n&&!this.checked,a=r?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${h(r?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${h(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};Vt.styles=Fo;Cn([d()],Vt.prototype,"checked",void 0);Vt=Cn([p("w3m-connect-wallets-view")],Vt);const Vo=$`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${t=>t.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ho=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let wi=class extends m{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};wi.styles=[R,Vo];wi=Ho([p("wui-loading-hexagon")],wi);const Ko=oe`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ti=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let xt=class extends m{constructor(){var e;super(),this.network=(e=f.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${h(k.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=b.getConnectorId(u.state.activeChain);return b.getAuthConnector()&&e===_.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var o;const e=b.getConnectorId(u.state.activeChain);return b.getAuthConnector()&&e===_.CONNECTOR_ID.AUTH?`Switching to ${((o=this.network)==null?void 0:o.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var e;try{this.error=!1,u.state.activeChain!==((e=this.network)==null?void 0:e.chainNamespace)&&u.setIsSwitchingNamespace(!0),this.network&&await u.switchActiveNetwork(this.network)}catch{this.error=!0}}};xt.styles=Ko;Ti([d()],xt.prototype,"showRetry",void 0);Ti([d()],xt.prototype,"error",void 0);xt=Ti([p("w3m-network-switch-view")],xt);const qo=$`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var It=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Ve=class extends m{constructor(){super(...arguments),this.imageSrc="ethereum",this.name="Ethereum",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${h(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};Ve.styles=[R,O,qo];It([c()],Ve.prototype,"imageSrc",void 0);It([c()],Ve.prototype,"name",void 0);It([c()],Ve.prototype,"tabIdx",void 0);It([c({type:Boolean})],Ve.prototype,"disabled",void 0);Ve=It([p("wui-list-network")],Ve);const Go=oe`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var kt=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let He=class extends m{constructor(){super(),this.unsubscribe=[],this.network=u.state.activeCaipNetwork,this.requestedCaipNetworks=u.getCaipNetworks(),this.search="",this.onDebouncedSearch=g.debounce(e=>{this.search=e},100),this.unsubscribe.push(Pe.subscribeNetworkImages(()=>this.requestUpdate()),u.subscribeKey("activeCaipNetwork",e=>this.network=e),u.subscribe(()=>{this.requestedCaipNetworks=u.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){var o;const e=u.getAllApprovedCaipNetworkIds(),i=g.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=i==null?void 0:i.filter(s=>{var n;return(n=s==null?void 0:s.name)==null?void 0:n.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=i,(o=this.filteredNetworks)==null?void 0:o.map(s=>{var n;return l`
        <wui-list-network
          .selected=${((n=this.network)==null?void 0:n.id)===s.id}
          imageSrc=${h(k.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${this.getNetworkDisabled(s)}
          data-testid=${`w3m-network-switch-${s.name??s.id}`}
        ></wui-list-network>
      `})}getNetworkDisabled(e){const i=e.chainNamespace,o=C.getCaipAddress(i),s=u.getAllApprovedCaipNetworkIds(),n=u.getNetworkProp("supportsAllNetworks",i)!==!1,r=b.getConnectorId(i),a=b.getAuthConnector(),w=r===_.CONNECTOR_ID.AUTH&&a;return!o||n||w?!1:!(s!=null&&s.includes(e.caipNetworkId))}onSwitchNetwork(e){Rn.onSwitchNetwork({network:e})}};He.styles=Go;kt([d()],He.prototype,"network",void 0);kt([d()],He.prototype,"requestedCaipNetworks",void 0);kt([d()],He.prototype,"filteredNetworks",void 0);kt([d()],He.prototype,"search",void 0);He=kt([p("w3m-networks-view")],He);const Yo=$`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:t})=>t[1]} * 9 - ${({borderRadius:t})=>t[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:t})=>t["01"]} ${({spacing:t})=>t[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Sn=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Xo={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let Ht=class extends m{constructor(){var e,i;super(...arguments),this.unsubscribe=[],this.switchToChain=(e=f.state.data)==null?void 0:e.switchToChain,this.caipNetwork=(i=f.state.data)==null?void 0:i.network,this.activeChain=u.state.activeChain}firstUpdated(){this.unsubscribe.push(u.subscribeKey("activeChain",e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.switchToChain?_.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=_.CHAIN_NAME_MAP[this.switchToChain];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${h(Xo[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(u.setIsSwitchingNamespace(!0),b.setFilterByNamespace(this.switchToChain),this.caipNetwork?await u.switchActiveNetwork(this.caipNetwork):u.setActiveNamespace(this.switchToChain),f.reset("Connect"))}};Ht.styles=Yo;Sn([c()],Ht.prototype,"activeChain",void 0);Ht=Sn([p("w3m-switch-active-chain-view")],Ht);var Qo=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};const Jo=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let an=class extends m{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Jo}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{g.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};an=Qo([p("w3m-what-is-a-network-view")],an);const Zo=oe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Ri=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let vt=class extends m{constructor(){var e;super(),this.swapUnsupportedChain=(e=f.state.data)==null?void 0:e.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=x.state.remoteFeatures,this.unsubscribe.push(Pe.subscribeNetworkImages(()=>this.requestUpdate()),x.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=u.getAllRequestedCaipNetworks(),i=u.getAllApprovedCaipNetworkIds(),o=g.sortRequestedNetworks(i,e);return(this.swapUnsupportedChain?o.filter(n=>j.SWAP_SUPPORTED_NETWORKS.includes(n.caipNetworkId)):o).map(n=>l`
        <wui-list-network
          imageSrc=${h(k.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var e;try{this.disconnecting=!0;const i=u.state.activeChain,s=y.getConnections(i).length>0,n=i&&b.state.activeConnectorIds[i],r=(e=this.remoteFeatures)==null?void 0:e.multiWallet;await y.disconnect(r?{id:n,namespace:i}:{}),s&&r&&(f.push("ProfileWallets"),T.showSuccess("Wallet deleted"))}catch{A.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),T.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(e){const i=C.state.caipAddress,o=u.getAllApprovedCaipNetworkIds(),s=u.getNetworkProp("supportsAllNetworks",e.chainNamespace),n=f.state.data;i?o!=null&&o.includes(e.caipNetworkId)?await u.switchActiveNetwork(e):s?f.push("SwitchNetwork",{...n,network:e}):f.push("SwitchNetwork",{...n,network:e}):i||(u.setActiveCaipNetwork(e),f.push("Connect"))}};vt.styles=Zo;Ri([d()],vt.prototype,"disconnecting",void 0);Ri([d()],vt.prototype,"remoteFeatures",void 0);vt=Ri([p("w3m-unsupported-chain-view")],vt);const es=$`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:t})=>t.core.textSuccess};
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:t})=>t.core.textError};
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:t})=>t.core.textWarning};
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var oi=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let et=class extends m{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return l`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};et.styles=[R,O,es];oi([c()],et.prototype,"icon",void 0);oi([c()],et.prototype,"text",void 0);oi([c()],et.prototype,"type",void 0);et=oi([p("wui-banner")],et);const ts=oe`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var is=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let mi=class extends m{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=u.getAllRequestedCaipNetworks(),i=u.getAllApprovedCaipNetworkIds(),o=u.state.activeCaipNetwork,s=u.checkIfSmartAccountEnabled();let n=g.sortRequestedNetworks(i,e);if(s&&Ae(o==null?void 0:o.chainNamespace)===ce.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.filter(a=>a.chainNamespace===(o==null?void 0:o.chainNamespace)).map(a=>l`
        <wui-list-network
          imageSrc=${h(k.getNetworkImage(a))}
          name=${a.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};mi.styles=ts;mi=is([p("w3m-wallet-compatible-networks-view")],mi);const ns=$`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:t})=>t.theme.borderPrimary};
    border-radius: ${({borderRadius:t})=>t[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var si=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let tt=class extends m{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};tt.styles=[R,ns];si([c()],tt.prototype,"imageSrc",void 0);si([c()],tt.prototype,"alt",void 0);si([c({type:Boolean})],tt.prototype,"borderRadiusFull",void 0);tt=si([p("wui-visual-thumbnail")],tt);const os=$`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:t})=>t[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var ss=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let bi=class extends m{constructor(){var e,i;super(...arguments),this.dappImageUrl=(e=x.state.metadata)==null?void 0:e.icons,this.walletImageUrl=(i=C.state.connectedWalletInfo)==null?void 0:i.icon}firstUpdated(){var i;const e=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");e!=null&&e[0]&&this.createAnimation(e[0],"translate(18px)"),e!=null&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){var e;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(e=this.dappImageUrl)==null?void 0:e[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,i){e.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};bi.styles=os;bi=ss([p("w3m-siwx-sign-message-thumbnails")],bi);var Ni=function(t,e,i,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let Kt=class extends m{constructor(){var e;super(...arguments),this.dappName=(e=x.state.metadata)==null?void 0:e.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await Bi.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes("OTP is required")){T.showError({message:"Something went wrong. We need to verify your account again."}),f.replace("DataCapture");return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await Bi.cancelSignMessage().finally(()=>this.isCancelling=!1)}};Ni([d()],Kt.prototype,"isCancelling",void 0);Ni([d()],Kt.prototype,"isSigning",void 0);Kt=Ni([p("w3m-siwx-sign-message-view")],Kt);export{zi as AppKitAccountButton,Fi as AppKitButton,Hi as AppKitConnectButton,qi as AppKitNetworkButton,Ui as W3mAccountButton,ue as W3mAccountSettingsView,ui as W3mAccountView,Ot as W3mAllWalletsView,Mi as W3mButton,Ft as W3mChooseAccountNameView,Vi as W3mConnectButton,Y as W3mConnectView,Vt as W3mConnectWalletsView,Zi as W3mConnectingExternalView,Bt as W3mConnectingMultiChainView,Mt as W3mConnectingWcBasicView,Te as W3mConnectingWcView,on as W3mDownloadsView,wa as W3mFooter,sn as W3mGetWalletView,Ki as W3mNetworkButton,xt as W3mNetworkSwitchView,He as W3mNetworksView,V as W3mProfileWalletsView,ma as W3mRouter,Kt as W3mSIWXSignMessageView,Ht as W3mSwitchActiveChainView,vt as W3mUnsupportedChainView,mi as W3mWalletCompatibleNetworksView,an as W3mWhatIsANetworkView,rn as W3mWhatIsAWalletView};
