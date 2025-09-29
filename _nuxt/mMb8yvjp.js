import{dh as d,di as p,dk as f,dl as c}from"./BWftuhBA.js";import{n as m,c as h}from"./k02276lB.js";const x=d`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }
`;var u=function(e,r,o,n){var i=arguments.length,t=i<3?r:n===null?n=Object.getOwnPropertyDescriptor(r,o):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(e,r,o,n);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(t=(i<3?a(t):i>3?a(r,o,t):a(r,o))||t);return i>3&&t&&Object.defineProperty(r,o,t),t};let s=class extends f{constructor(){super(...arguments),this.text=""}render(){return c`${this.template()}`}template(){return this.text?c`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};s.styles=[p,x];u([m()],s.prototype,"text",void 0);s=u([h("wui-separator")],s);
