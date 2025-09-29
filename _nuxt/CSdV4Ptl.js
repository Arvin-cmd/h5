import{f$ as yt,dh as nt,dk as ot,dl as w,di as Ct,cM as pt,g0 as R,cH as xt,dq as Rt,cO as Nt,cF as kt,dt as Lt,du as Ft}from"./BWftuhBA.js";import{U as _t,n as M,c as st,r as at}from"./k02276lB.js";import"./BEWobgdt.js";import"./B8ZjmjHW.js";import{o as jt}from"./BdAFPLnU.js";import"./C8o-AMPh.js";import"./qn4hSlSa.js";var mt={exports:{}},zt=mt.exports,Mt;function Yt(){return Mt||(Mt=1,(function(t,e){(function(i,r){t.exports=r()})(zt,(function(){var i=1e3,r=6e4,o=36e5,n="millisecond",s="second",u="minute",g="hour",p="day",y="week",$="month",L="quarter",T="year",N="date",E="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,X=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,tt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var l=["th","st","nd","rd"],a=h%100;return"["+h+(l[(a-20)%10]||l[a]||l[0])+"]"}},et=function(h,l,a){var d=String(h);return!d||d.length>=l?h:""+Array(l+1-d.length).join(a)+h},U={s:et,z:function(h){var l=-h.utcOffset(),a=Math.abs(l),d=Math.floor(a/60),c=a%60;return(l<=0?"+":"-")+et(d,2,"0")+":"+et(c,2,"0")},m:function h(l,a){if(l.date()<a.date())return-h(a,l);var d=12*(a.year()-l.year())+(a.month()-l.month()),c=l.clone().add(d,$),m=a-c<0,f=l.clone().add(d+(m?-1:1),$);return+(-(d+(a-c)/(m?c-f:f-c))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:$,y:T,w:y,d:p,D:N,h:g,m:u,s,ms:n,Q:L}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},O="en",I={};I[O]=tt;var V="$isDayjsObject",q=function(h){return h instanceof lt||!(!h||!h[V])},ct=function h(l,a,d){var c;if(!l)return O;if(typeof l=="string"){var m=l.toLowerCase();I[m]&&(c=m),a&&(I[m]=a,c=m);var f=l.split("-");if(!c&&f.length>1)return h(f[0])}else{var v=l.name;I[v]=l,c=v}return!d&&c&&(O=c),c||!d&&O},D=function(h,l){if(q(h))return h.clone();var a=typeof l=="object"?l:{};return a.date=h,a.args=arguments,new lt(a)},x=U;x.l=ct,x.i=q,x.w=function(h,l){return D(h,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var lt=(function(){function h(a){this.$L=ct(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[V]=!0}var l=h.prototype;return l.parse=function(a){this.$d=(function(d){var c=d.date,m=d.utc;if(c===null)return new Date(NaN);if(x.u(c))return new Date;if(c instanceof Date)return new Date(c);if(typeof c=="string"&&!/Z$/i.test(c)){var f=c.match(Q);if(f){var v=f[2]-1||0,b=(f[7]||"0").substring(0,3);return m?new Date(Date.UTC(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)):new Date(f[1],v,f[3]||1,f[4]||0,f[5]||0,f[6]||0,b)}}return new Date(c)})(a),this.init()},l.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},l.$utils=function(){return x},l.isValid=function(){return this.$d.toString()!==E},l.isSame=function(a,d){var c=D(a);return this.startOf(d)<=c&&c<=this.endOf(d)},l.isAfter=function(a,d){return D(a)<this.startOf(d)},l.isBefore=function(a,d){return this.endOf(d)<D(a)},l.$g=function(a,d,c){return x.u(a)?this[d]:this.set(c,a)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(a,d){var c=this,m=!!x.u(d)||d,f=x.p(a),v=function(W,A){var z=x.w(c.$u?Date.UTC(c.$y,A,W):new Date(c.$y,A,W),c);return m?z:z.endOf(p)},b=function(W,A){return x.w(c.toDate()[W].apply(c.toDate("s"),(m?[0,0,0,0]:[23,59,59,999]).slice(A)),c)},_=this.$W,S=this.$M,C=this.$D,J="set"+(this.$u?"UTC":"");switch(f){case T:return m?v(1,0):v(31,11);case $:return m?v(1,S):v(0,S+1);case y:var B=this.$locale().weekStart||0,it=(_<B?_+7:_)-B;return v(m?C-it:C+(6-it),S);case p:case N:return b(J+"Hours",0);case g:return b(J+"Minutes",1);case u:return b(J+"Seconds",2);case s:return b(J+"Milliseconds",3);default:return this.clone()}},l.endOf=function(a){return this.startOf(a,!1)},l.$set=function(a,d){var c,m=x.p(a),f="set"+(this.$u?"UTC":""),v=(c={},c[p]=f+"Date",c[N]=f+"Date",c[$]=f+"Month",c[T]=f+"FullYear",c[g]=f+"Hours",c[u]=f+"Minutes",c[s]=f+"Seconds",c[n]=f+"Milliseconds",c)[m],b=m===p?this.$D+(d-this.$W):d;if(m===$||m===T){var _=this.clone().set(N,1);_.$d[v](b),_.init(),this.$d=_.set(N,Math.min(this.$D,_.daysInMonth())).$d}else v&&this.$d[v](b);return this.init(),this},l.set=function(a,d){return this.clone().$set(a,d)},l.get=function(a){return this[x.p(a)]()},l.add=function(a,d){var c,m=this;a=Number(a);var f=x.p(d),v=function(S){var C=D(m);return x.w(C.date(C.date()+Math.round(S*a)),m)};if(f===$)return this.set($,this.$M+a);if(f===T)return this.set(T,this.$y+a);if(f===p)return v(1);if(f===y)return v(7);var b=(c={},c[u]=r,c[g]=o,c[s]=i,c)[f]||1,_=this.$d.getTime()+a*b;return x.w(_,this)},l.subtract=function(a,d){return this.add(-1*a,d)},l.format=function(a){var d=this,c=this.$locale();if(!this.isValid())return c.invalidDate||E;var m=a||"YYYY-MM-DDTHH:mm:ssZ",f=x.z(this),v=this.$H,b=this.$m,_=this.$M,S=c.weekdays,C=c.months,J=c.meridiem,B=function(A,z,rt,dt){return A&&(A[z]||A(d,m))||rt[z].slice(0,dt)},it=function(A){return x.s(v%12||12,A,"0")},W=J||function(A,z,rt){var dt=A<12?"AM":"PM";return rt?dt.toLowerCase():dt};return m.replace(X,(function(A,z){return z||(function(rt){switch(rt){case"YY":return String(d.$y).slice(-2);case"YYYY":return x.s(d.$y,4,"0");case"M":return _+1;case"MM":return x.s(_+1,2,"0");case"MMM":return B(c.monthsShort,_,C,3);case"MMMM":return B(C,_);case"D":return d.$D;case"DD":return x.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return B(c.weekdaysMin,d.$W,S,2);case"ddd":return B(c.weekdaysShort,d.$W,S,3);case"dddd":return S[d.$W];case"H":return String(v);case"HH":return x.s(v,2,"0");case"h":return it(1);case"hh":return it(2);case"a":return W(v,b,!0);case"A":return W(v,b,!1);case"m":return String(b);case"mm":return x.s(b,2,"0");case"s":return String(d.$s);case"ss":return x.s(d.$s,2,"0");case"SSS":return x.s(d.$ms,3,"0");case"Z":return f}return null})(A)||f.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(a,d,c){var m,f=this,v=x.p(d),b=D(a),_=(b.utcOffset()-this.utcOffset())*r,S=this-b,C=function(){return x.m(f,b)};switch(v){case T:m=C()/12;break;case $:m=C();break;case L:m=C()/3;break;case y:m=(S-_)/6048e5;break;case p:m=(S-_)/864e5;break;case g:m=S/o;break;case u:m=S/r;break;case s:m=S/i;break;default:m=S}return c?m:x.a(m)},l.daysInMonth=function(){return this.endOf($).$D},l.$locale=function(){return I[this.$L]},l.locale=function(a,d){if(!a)return this.$L;var c=this.clone(),m=ct(a,d,!0);return m&&(c.$L=m),c},l.clone=function(){return x.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},h})(),Dt=lt.prototype;return D.prototype=Dt,[["$ms",n],["$s",s],["$m",u],["$H",g],["$W",p],["$M",$],["$y",T],["$D",N]].forEach((function(h){Dt[h[1]]=function(l){return this.$g(l,h[0],h[1])}})),D.extend=function(h,l){return h.$i||(h(l,lt,D),h.$i=!0),D},D.locale=ct,D.isDayjs=q,D.unix=function(h){return D(1e3*h)},D.en=I[O],D.Ls=I,D.p={},D}))})(mt)),mt.exports}var Et=Yt();const K=yt(Et);var ft={exports:{}},Ut=ft.exports,St;function qt(){return St||(St=1,(function(t,e){(function(i,r){t.exports=r()})(Ut,(function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var r=["th","st","nd","rd"],o=i%100;return"["+i+(r[(o-20)%10]||r[o]||r[0])+"]"}}}))})(ft)),ft.exports}var Bt=qt();const Wt=yt(Bt);var gt={exports:{}},Ht=gt.exports,Ot;function Gt(){return Ot||(Ot=1,(function(t,e){(function(i,r){t.exports=r()})(Ht,(function(){return function(i,r,o){i=i||{};var n=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(p,y,$,L){return n.fromToBase(p,y,$,L)}o.en.relativeTime=s,n.fromToBase=function(p,y,$,L,T){for(var N,E,Q,X=$.$locale().relativeTime||s,tt=i.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],et=tt.length,U=0;U<et;U+=1){var O=tt[U];O.d&&(N=L?o(p).diff($,O.d,!0):$.diff(p,O.d,!0));var I=(i.rounding||Math.round)(Math.abs(N));if(Q=N>0,I<=O.r||!O.r){I<=1&&U>0&&(O=tt[U-1]);var V=X[O.l];T&&(I=T(""+I)),E=typeof V=="string"?V.replace("%d",I):V(I,y,O.l,Q);break}}if(y)return E;var q=Q?X.future:X.past;return typeof q=="function"?q(E):q.replace("%s",E)},n.to=function(p,y){return u(p,y,this,!0)},n.from=function(p,y){return u(p,y,this)};var g=function(p){return p.$u?o.utc():o()};n.toNow=function(p){return this.to(g(this),p)},n.fromNow=function(p){return this.from(g(this),p)}}}))})(gt)),gt.exports}var Pt=Gt();const Vt=yt(Pt);var wt={exports:{}},Jt=wt.exports,It;function Zt(){return It||(It=1,(function(t,e){(function(i,r){t.exports=r()})(Jt,(function(){return function(i,r,o){o.updateLocale=function(n,s){var u=o.Ls[n];if(u)return(s?Object.keys(s):[]).forEach((function(g){u[g]=s[g]})),u}}}))})(wt)),wt.exports}var Kt=Zt();const Qt=yt(Kt);K.extend(Vt);K.extend(Qt);const Xt={...Wt,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}},te=["January","February","March","April","May","June","July","August","September","October","November","December"];K.locale("en-web3-modal",Xt);const $t={getMonthNameByIndex(t){return te[t]},getYear(t=new Date().toISOString()){return K(t).year()},getRelativeDateFromNow(t){return K(t).locale("en-web3-modal").fromNow(!0)},formatDate(t,e="DD MMM"){return K(t).format(e)}},ee=3,ht=.1,ie=["receive","deposit","borrow","claim"],re=["withdraw","repay","burn"],Z={getTransactionGroupTitle(t,e){const i=$t.getYear(),r=$t.getMonthNameByIndex(e);return t===i?r:`${r} ${t}`},getTransactionImages(t){const[e]=t;return(t==null?void 0:t.length)>1?t.map(r=>this.getTransactionImage(r)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Z.getTransactionTransferTokenType(t),url:Z.getTransactionImageURL(t)}},getTransactionImageURL(t){var o,n,s,u,g;let e;const i=!!(t!=null&&t.nft_info),r=!!(t!=null&&t.fungible_info);return t&&i?e=(s=(n=(o=t==null?void 0:t.nft_info)==null?void 0:o.content)==null?void 0:n.preview)==null?void 0:s.url:t&&r&&(e=(g=(u=t==null?void 0:t.fungible_info)==null?void 0:u.icon)==null?void 0:g.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t,e){var L;const i=(L=t==null?void 0:t.metadata)==null?void 0:L.operationType,r=e||(t==null?void 0:t.transfers),o=(r==null?void 0:r.length)>0,n=(r==null?void 0:r.length)>1,s=o&&(r==null?void 0:r.every(T=>!!(T!=null&&T.fungible_info))),[u,g]=r;let p=this.getTransferDescription(u),y=this.getTransferDescription(g);if(!o)return(i==="send"||i==="receive")&&s?(p=_t.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),y=_t.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[p,y]):[t.metadata.status];if(n)return r.map(T=>this.getTransferDescription(T));let $="";return ie.includes(i)?$="+":re.includes(i)&&($="-"),p=$.concat(p),[p]},getTransferDescription(t){var i;let e="";return t&&(t!=null&&t.nft_info?e=((i=t==null?void 0:t.nft_info)==null?void 0:i.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var r;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(r=t==null?void 0:t.fungible_info)==null?void 0:r.symbol].join(" ").trim():null},mergeTransfers(t){if((t==null?void 0:t.length)<=1)return t;const i=this.filterGasFeeTransfers(t).reduce((o,n)=>{var g;const s=(g=n==null?void 0:n.fungible_info)==null?void 0:g.name,u=o.find(({fungible_info:p,direction:y})=>s&&s===(p==null?void 0:p.name)&&y===n.direction);if(u){const p=Number(u.quantity.numeric)+Number(n.quantity.numeric);u.quantity.numeric=p.toString(),u.value=(u.value||0)+(n.value||0)}else o.push(n);return o},[]);let r=i;return i.length>2&&(r=i.sort((o,n)=>(n.value||0)-(o.value||0)).slice(0,2)),r=r.sort((o,n)=>o.direction==="out"&&n.direction==="in"?-1:o.direction==="in"&&n.direction==="out"?1:0),r},filterGasFeeTransfers(t){const e=t.reduce((r,o)=>{var s;const n=(s=o==null?void 0:o.fungible_info)==null?void 0:s.name;return n&&(r[n]||(r[n]=[]),r[n].push(o)),r},{}),i=[];return Object.values(e).forEach(r=>{if(r.length===1){const o=r[0];o&&i.push(o)}else{const o=r.filter(s=>s.direction==="in"),n=r.filter(s=>s.direction==="out");if(o.length===1&&n.length===1){const s=o[0],u=n[0];let g=!1;if(s&&u){const p=Number(s.quantity.numeric),y=Number(u.quantity.numeric);y<p*ht?(i.push(s),g=!0):p<y*ht&&(i.push(u),g=!0)}g||i.push(...r)}else{const s=this.filterGasFeesFromTokenGroup(r);i.push(...s)}}}),t.forEach(r=>{var o;(o=r==null?void 0:r.fungible_info)!=null&&o.name||i.push(r)}),i},filterGasFeesFromTokenGroup(t){if(t.length<=1)return t;const e=t.map(u=>Number(u.quantity.numeric)),i=Math.max(...e),r=Math.min(...e),o=.01;if(r<i*o)return t.filter(g=>Number(g.quantity.numeric)>=i*o);const n=t.filter(u=>u.direction==="in"),s=t.filter(u=>u.direction==="out");if(n.length===1&&s.length===1){const u=n[0],g=s[0];if(u&&g){const p=Number(u.quantity.numeric),y=Number(g.quantity.numeric);if(y<p*ht)return[u];if(p<y*ht)return[g]}}return t},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(ee):null}};var bt;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(bt||(bt={}));const ne=nt`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:t})=>t.core.glass010};
    background-color: ${({tokens:t})=>t.core.glass010};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: ${({borderRadius:t})=>t[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:t})=>t[4]};
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var G=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let F=class extends ot{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,i]=this.images;this.images.length||(this.dataset.noImages="true");const r=(e==null?void 0:e.type)==="NFT",o=i!=null&&i.url?i.type==="NFT":r,n=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",s=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${s};
    `,w`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,i]=this.images,r=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||i!=null&&i.url)?w`<div class="swap-images-container">
        ${e!=null&&e.url?w`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${i!=null&&i.url?w`<wui-image src=${i.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?w`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:r==="NFT"?w`<wui-icon size="inherit" color="default" name="nftPlaceholder"></wui-icon>`:w`<wui-icon size="inherit" color="default" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-primary",i;return i=this.getIcon(),this.status&&(e=this.getStatusColor()),i?w`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${e} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};F.styles=[ne];G([M()],F.prototype,"type",void 0);G([M()],F.prototype,"status",void 0);G([M()],F.prototype,"direction",void 0);G([M({type:Boolean})],F.prototype,"onlyDirectionIcon",void 0);G([M({type:Array})],F.prototype,"images",void 0);G([M({type:Object})],F.prototype,"secondImage",void 0);F=G([st("wui-transaction-visual")],F);const oe=nt`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Y=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let k=class extends ot{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return w`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${jt(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${bt[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[0];return e?w`
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const e=(i=this.descriptions)==null?void 0:i[1];return e?w`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${e}</span>
          </wui-text>
        `:null}};k.styles=[Ct,oe];Y([M()],k.prototype,"type",void 0);Y([M({type:Array})],k.prototype,"descriptions",void 0);Y([M()],k.prototype,"date",void 0);Y([M({type:Boolean})],k.prototype,"onlyDirectionIcon",void 0);Y([M()],k.prototype,"status",void 0);Y([M()],k.prototype,"direction",void 0);Y([M({type:Array})],k.prototype,"images",void 0);k=Y([st("wui-transaction-list-item")],k);const se=nt`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t[128]};
  }

  .fallback-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
    border-radius: ${({borderRadius:t})=>t[3]};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:t})=>t[128]};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:t})=>t["01"]};
    color: ${({tokens:t})=>t.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:t})=>t.core.textSuccess} 30%,
      ${({tokens:t})=>t.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:t})=>t[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var ut=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const vt={sm:"xxs",lg:"md"};let H=class extends ot{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return w`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[e,i]=this.images;return this.images.length===2&&(e||i)?w`
        <wui-image class="swap-crop-left-image" src=${e} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:e?w`<wui-image src=${e} alt="Swap image"></wui-image>`:null}fiatTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${vt[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return w`<wui-icon
      class="fallback-icon"
      size=${vt[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[e]=this.images;return e?w`<wui-image src=${e} alt="Token image"></wui-image> `:w`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?w`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:w`<wui-icon
      class="direction-icon"
      size=${vt[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};H.styles=[se];ut([M()],H.prototype,"type",void 0);ut([M()],H.prototype,"size",void 0);ut([M()],H.prototype,"statusImageUrl",void 0);ut([M({type:Array})],H.prototype,"images",void 0);H=ut([st("wui-transaction-thumbnail")],H);const ae=nt`
  :host > wui-flex:first-child {
    gap: ${({spacing:t})=>t[2]};
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ue=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let Tt=class extends ot{render(){return w`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};Tt.styles=[Ct,ae];Tt=ue([st("wui-transaction-list-item-loader")],Tt);const ce=nt`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:t})=>t[3]};
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

  .emptyContainer {
    height: 100%;
  }
`;var P=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var u=t.length-1;u>=0;u--)(s=t[u])&&(n=(o<3?s(n):o>3?s(e,i,n):s(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};const At="last-transaction",le=7;let j=class extends ot{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=pt.state.activeCaipAddress,this.transactionsByYear=R.state.transactionsByYear,this.loading=R.state.loading,this.empty=R.state.empty,this.next=R.state.next,R.clearCursor(),this.unsubscribe.push(pt.subscribeKey("activeCaipAddress",e=>{e&&this.caipAddress!==e&&(R.resetTransactions(),R.fetchTransactions(e)),this.caipAddress=e}),pt.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),R.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){R.resetTransactions(),this.caipAddress&&R.fetchTransactions(xt.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const r=parseInt(i,10),o=new Array(12).fill(null).map((n,s)=>{var p;const u=Z.getTransactionGroupTitle(r,s),g=(p=this.transactionsByYear[r])==null?void 0:p[s];return{groupTitle:u,transactions:g}}).filter(({transactions:n})=>n).reverse();return o.map(({groupTitle:n,transactions:s},u)=>{const g=u===o.length-1;return s?w`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${g?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${n}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(s,g)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,i){const{date:r,descriptions:o,direction:n,images:s,status:u,type:g,transfers:p,isAllNFT:y}=this.getTransactionListItemProps(e);return w`
      <wui-transaction-list-item
        date=${r}
        .direction=${n}
        id=${i&&this.next?At:""}
        status=${u}
        type=${g}
        .images=${s}
        .onlyDirectionIcon=${y||p.length===1}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,i){return e.map((r,o)=>{const n=i&&o===e.length-1;return w`${this.templateRenderTransaction(r,n)}`})}emptyStateActivity(){return w`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return w`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?w`${this.emptyStateAccount()}`:w`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(le).fill(w` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){Rt.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=Nt.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(R.fetchTransactions(xt.getPlainAddress(this.caipAddress)),kt.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:xt.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:Lt(pt.state.activeChain)===Ft.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,r,o;(i=this.paginationObserver)==null||i.disconnect();const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${At}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var g,p,y;const i=$t.formatDate((g=e==null?void 0:e.metadata)==null?void 0:g.minedAt),r=Z.mergeTransfers(e==null?void 0:e.transfers),o=Z.getTransactionDescriptions(e,r),n=r==null?void 0:r[0],s=!!n&&(r==null?void 0:r.every($=>!!$.nft_info)),u=Z.getTransactionImages(r);return{date:i,direction:n==null?void 0:n.direction,descriptions:o,isAllNFT:s,images:u,status:(p=e.metadata)==null?void 0:p.status,transfers:r,type:(y=e.metadata)==null?void 0:y.operationType}}};j.styles=ce;P([M()],j.prototype,"page",void 0);P([at()],j.prototype,"caipAddress",void 0);P([at()],j.prototype,"transactionsByYear",void 0);P([at()],j.prototype,"loading",void 0);P([at()],j.prototype,"empty",void 0);P([at()],j.prototype,"next",void 0);j=P([st("w3m-activity-list")],j);
