import{dn as m,di as c,dk as f,dl as p}from"./BWftuhBA.js";import{n as u,c as h}from"./k02276lB.js";import{o as v}from"./BdAFPLnU.js";import"./ybiNaeao.js";const b=m`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var o=function(l,i,r,s){var a=arguments.length,e=a<3?i:s===null?s=Object.getOwnPropertyDescriptor(i,r):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,i,r,s);else for(var d=l.length-1;d>=0;d--)(n=l[d])&&(e=(a<3?n(e):a>3?n(i,r,e):n(i,r))||e);return a>3&&e&&Object.defineProperty(i,r,e),e};let t=class extends f{constructor(){super(...arguments),this.disabled=!1}render(){return p`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${v(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?p`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};t.styles=[c,b];o([u()],t.prototype,"errorMessage",void 0);o([u({type:Boolean})],t.prototype,"disabled",void 0);o([u()],t.prototype,"value",void 0);o([u()],t.prototype,"tabIdx",void 0);t=o([h("wui-email-input")],t);
