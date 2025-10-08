import{bz as d,bI as u,ca as p,bA as m,bD as f}from"./CTDKT58D.js";import{n as h,c as b}from"./BRMLB2Zy.js";const g=d`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var n=function(s,t,r,o){var a=arguments.length,e=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,t,r,o);else for(var l=s.length-1;l>=0;l--)(c=s[l])&&(e=(a<3?c(e):a>3?c(t,r,e):c(t,r))||e);return a>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends m{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};i.styles=[u,p,g];n([h()],i.prototype,"src",void 0);n([h()],i.prototype,"alt",void 0);n([h()],i.prototype,"size",void 0);i=n([b("wui-image")],i);
