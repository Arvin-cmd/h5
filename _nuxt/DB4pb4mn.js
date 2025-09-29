import{dh as c,di as l,dk as u,dl as f}from"./BWftuhBA.js";import{n as p,c as m}from"./k02276lB.js";const g=c`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${r=>r.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var h=function(r,e,a,s){var i=arguments.length,t=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,a):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,a,s);else for(var d=r.length-1;d>=0;d--)(n=r[d])&&(t=(i<3?n(t):i>3?n(e,a,t):n(e,a))||t);return i>3&&t&&Object.defineProperty(e,a,t),t};let o=class extends u{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,s=36-e,i=116+s,t=245+s,n=360+s*1.75;return f`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${t}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};o.styles=[l,g];h([p({type:Number})],o.prototype,"radius",void 0);o=h([m("wui-loading-thumbnail")],o);
