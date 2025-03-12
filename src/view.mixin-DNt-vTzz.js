import{s as l,r as c,k as h,n as f,N as p,A as m,M as v,R as x}from"./index-CmUrdf08.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class d{constructor(i,r,s,t){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(e,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=e,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(e,a)),this.unsubscribe=a},this.host=i,r.context!==void 0){const e=r;this.context=e.context,this.callback=e.callback,this.subscribe=e.subscribe??!1}else this.context=r,this.callback=s,this.subscribe=t??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new l(this.context,this.host,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b({context:n,subscribe:i}){return(r,s)=>{typeof s=="object"?s.addInitializer(function(){new d(this,{context:n,callback:t=>{r.set.call(this,t)},subscribe:i})}):r.constructor.addInitializer(t=>{new d(t,{context:n,callback:e=>{t[s]=e},subscribe:i})})}}var g=Object.defineProperty,o=(n,i,r,s)=>{for(var t=void 0,e=n.length-1,a;e>=0;e--)(a=n[e])&&(t=a(i,r,t)||t);return t&&g(i,r,t),t};const N=n=>{class i extends n{constructor(){super(...arguments),this.navItems=[],this.accesses=[],this.tagName="",this.componentData={},this.featureIsEnabled=!1,this.isMfe=!1}connectedCallback(){var s;super.connectedCallback(),this.featureIsEnabled=!0,this.isMfe?this.componentData=this.navItems.filter(t=>{var e;return((e=t.mfeComponent)==null?void 0:e.tagName)===this.tagName})[0]:this.componentData=this.navItems.filter(t=>t.tagName===this.tagName)[0],(s=this.mfeLoader)==null||s.init()}firstUpdated(s){var e,a;super.firstUpdated(s);let t;if((e=this.mfeLoader)==null||e.config.filter(u=>{u.tagName===this.tagName&&(t=document.createElement(this.tagName))}),t){const u=(a=this.shadowRoot)==null?void 0:a.querySelector(`#mfe-container-${this.tagName}`);u==null||u.appendChild(t)}}renderUnderConstruction(){var s;return(s=this.componentData)!=null&&s.userHasPermission?h`<under-construction></under-construction>`:h`<no-access></no-access>`}renderMfe(s){var t;return s?h`${s}`:h`${this.featureIsEnabled&&((t=this.componentData)!=null&&t.userHasPermission)&&this.isMfe?h`<div id="mfe-container-${this.tagName}"></div>`:this.renderUnderConstruction()}`}render(){return h`${this.renderMfe}`}}return o([b({context:p,subscribe:!0}),f({type:Array})],i.prototype,"navItems"),o([b({context:m,subscribe:!0}),c()],i.prototype,"accesses"),o([b({context:v,subscribe:!0}),c()],i.prototype,"mfeLoader"),o([b({context:x,subscribe:!0}),c()],i.prototype,"_router"),o([c()],i.prototype,"tagName"),o([c()],i.prototype,"componentData"),o([c()],i.prototype,"featureIsEnabled"),i};export{N as V};
