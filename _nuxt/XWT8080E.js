import{dn as p,dk as u,dq as f,dG as g,dl as a}from"./BWftuhBA.js";import{n as b,r as m,c as w}from"./k02276lB.js";import{T as l}from"./9AMiDrxW.js";const C={interpolate(r,e,t){if(r.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const n=r[0]||0,i=r[1]||0,o=e[0]||0,s=e[1]||0;return t<n?o:t>i?s:(s-o)/(i-n)*(t-n)+o}},v=p`
  :host {
    width: 100%;
    display: block;
  }
`;var c=function(r,e,t,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,n);else for(var h=r.length-1;h>=0;h--)(s=r[h])&&(o=(i<3?s(o):i>3?s(e,t,o):s(e,t))||o);return i>3&&o&&Object.defineProperty(e,t,o),o};let d=class extends u{constructor(){super(),this.unsubscribe=[],this.text="",this.open=l.state.open,this.unsubscribe.push(f.subscribeKey("view",()=>{l.hide()}),g.subscribeKey("open",e=>{e||l.hide()}),l.subscribeKey("open",e=>{this.open=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),l.hide()}render(){return a`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return a`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),n={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const i=t.getBoundingClientRect();n.left=e.left-(window.innerWidth-i.width)/2,n.top=e.top-(window.innerHeight-i.height)/2}l.showTooltip({message:this.text,triggerRect:n,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||l.hide()}};d.styles=[v];c([b()],d.prototype,"text",void 0);c([m()],d.prototype,"open",void 0);d=c([w("w3m-tooltip-trigger")],d);export{C as M};
