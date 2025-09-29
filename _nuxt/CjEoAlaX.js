import{dh as h,di as f,dk as u,dl as v}from"./BWftuhBA.js";import{n as d,c as m,U as p}from"./k02276lB.js";import"./C8o-AMPh.js";const x=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:l})=>l[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var i=function(l,a,r,o){var s=arguments.length,e=s<3?a:o===null?o=Object.getOwnPropertyDescriptor(a,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(l,a,r,o);else for(var n=l.length-1;n>=0;n--)(c=l[n])&&(e=(s<3?c(e):s>3?c(a,r,e):c(a,r))||e);return s>3&&e&&Object.defineProperty(a,r,e),e};let t=class extends u{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const a={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${a[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${a[this.size??"xl"]});
    `,v`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",v`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const a=p.generateAvatarColors(this.address);return this.style.cssText+=`
 ${a}`,null}return this.dataset.variant="default",null}};t.styles=[f,x];i([d()],t.prototype,"imageSrc",void 0);i([d()],t.prototype,"alt",void 0);i([d()],t.prototype,"address",void 0);i([d()],t.prototype,"size",void 0);t=i([m("wui-avatar")],t);
