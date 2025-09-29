import{cM as V,dr as g,cO as h,cF as c,dq as s,dG as _,cI as f,cH as C,dh as D,dk as y,dy as d,dl as u,dn as $,eU as W,ds as N}from"./BWftuhBA.js";import{c as m,r as E}from"./k02276lB.js";import{W as b}from"./B_dGuijh.js";import"./BEWobgdt.js";import"./B8ZjmjHW.js";import{e as P,n as T}from"./BYfp64Cn.js";import"./CetEskz5.js";import"./joGi2Rrq.js";import"./T0NY8ydf.js";import"./BdAFPLnU.js";import"./ybiNaeao.js";var U=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let I=class extends b{constructor(){super(...arguments),this.onOtpSubmit=async e=>{var t,r;try{if(this.authConnector){const n=V.state.activeChain,i=g.getConnections(n),o=(t=h.state.remoteFeatures)==null?void 0:t.multiWallet,l=i.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n)await g.connectExternal(this.authConnector,n);else throw new Error("Active chain is not set on ChainControll");if(c.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown",view:s.state.view,walletRank:void 0}}),(r=h.state.remoteFeatures)!=null&&r.emailCapture)return;if(h.state.siwx){_.close();return}if(l&&o){s.replace("ProfileWallets"),f.showSuccess("New Wallet Added");return}_.close()}}catch(n){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:C.parseError(n)}}),n}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};I=U([m("w3m-email-verify-otp-view")],I);const F=D`
  wui-icon-box {
    height: ${({spacing:a})=>a[16]};
    width: ${({spacing:a})=>a[16]};
  }
`;var x=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let w=class extends y{constructor(){var e;super(),this.email=(e=s.state.data)==null?void 0:e.email,this.authConnector=d.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),c.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.replace("EmailVerifyOtp",{email:this.email})}catch{s.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),f.showSuccess("Code email resent")}}catch(e){f.showError(e)}finally{this.loading=!1}}};w.styles=F;x([E()],w.prototype,"loading",void 0);w=x([m("w3m-email-verify-device-view")],w);const j=$`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var O=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let p=class extends y{constructor(){var e,t;super(...arguments),this.formRef=P(),this.initialEmail=((e=s.state.data)==null?void 0:e.email)??"",this.redirectView=(t=s.state.data)==null?void 0:t.redirectView,this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",t=>{t.key==="Enter"&&this.onSubmitEmail(t)})}render(){return u`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${T(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=d.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const r=await t.provider.updateEmail({email:this.email});c.sendEvent({type:"track",event:"EMAIL_EDIT"}),r.action==="VERIFY_SECONDARY_OTP"?s.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):s.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){f.showError(t),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?u`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${s.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:u`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};p.styles=j;O([E()],p.prototype,"email",void 0);O([E()],p.prototype,"loading",void 0);p=O([m("w3m-update-email-wallet-view")],p);var L=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let A=class extends b{constructor(){var e;super(),this.email=(e=s.state.data)==null?void 0:e.email,this.onOtpSubmit=async t=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:t}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.replace("UpdateEmailSecondaryOtp",s.state.data))}catch(r){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:C.parseError(r)}}),r}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};A=L([m("w3m-update-email-primary-otp-view")],A);var M=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let R=class extends b{constructor(){var e,t;super(),this.email=(e=s.state.data)==null?void 0:e.newEmail,this.redirectView=(t=s.state.data)==null?void 0:t.redirectView,this.onOtpSubmit=async r=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:r}),c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&s.reset(this.redirectView))}catch(n){throw c.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:C.parseError(n)}}),n}},this.onStartOver=()=>{s.replace("UpdateEmailWallet",s.state.data)}}};R=M([m("w3m-update-email-secondary-otp-view")],R);var S=function(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var l=a.length-1;l>=0;l--)(o=a[l])&&(i=(n<3?o(i):n>3?o(e,t,i):o(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i};let v=class extends y{constructor(){var e;super(),this.authConnector=d.getAuthConnector(),this.isEmailEnabled=(e=h.state.remoteFeatures)==null?void 0:e.email,this.isAuthEnabled=this.checkIfAuthEnabled(d.state.connectors),this.connectors=d.state.connectors,d.subscribeKey("connectors",t=>{this.connectors=t,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return u`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter(n=>n.type===W.CONNECTOR_TYPE_AUTH).map(n=>n.chain);return N.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(n=>t.includes(n))}};S([E()],v.prototype,"connectors",void 0);v=S([m("w3m-email-login-view")],v);export{v as W3mEmailLoginView,b as W3mEmailOtpWidget,w as W3mEmailVerifyDeviceView,I as W3mEmailVerifyOtpView,A as W3mUpdateEmailPrimaryOtpView,R as W3mUpdateEmailSecondaryOtpView,p as W3mUpdateEmailWalletView};
