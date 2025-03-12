import{i as k,h as v,k as n,n as h,O as j,r as w,t as O}from"./index-CmUrdf08.js";import{MovieInfoStyles as Z}from"./movie-info.styles-D7XcGgfj.js";const S=k`
  :host {
  }

  dialog {
  }

  dialog,
  ::backdrop {
    overscroll-behavior: contain;
  }

  ::backdrop {
    background-color: red;
  }
`,y=class y extends v{render(){return n`<dialog open>This is a dialog</dialog>`}};y.styles=[S];let b=y;customElements.get("custom-dialog")||customElements.define("custom-dialog",b);const H=k`
  img {
    border-radius: 50%;
    object-fit: cover;
    height: 12rem;
    width: 12rem;
  }

  .person-bubble {
    width: 12rem;
    height: 12rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }

  .text > p {
    margin-block: 0;
    text-align: center;
  }
`,A=k`
  :host {
    display: grid;
    width: 100%;
  }
  .skeleton-box {
    display: inline-block;
    height: 1em;
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;
  }

  .skeleton-box.movie-poster {
    width: 10rem;
    height: 15rem;
    border-radius: 15px;
    position: relative;
    top: 3rem;
    margin-inline: auto;
  }
  .skeleton-box.title {
    width: 50%;
    height: 2rem;
    margin-block: 1rem;
  }
  .skeleton-box.description {
    width: 100%;
    height: 1rem;
  }

  .skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    -webkit-animation: shimmer 5s infinite;
    animation: shimmer 5s infinite;
    content: '';
  }
  @-webkit-keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`,x=class x extends v{render(){return n`
      <div class="card-wrapper default">
        <span class="skeleton-box movie-poster"></span>
        <div class="card">
          <span class="skeleton-box title"></span>
          <span class="skeleton-box description"></span>
          <span class="skeleton-box description"></span>
        </div>
      </div>
    `}};x.styles=[A,H];let u=x;customElements.get("person-loading-skeleton")||customElements.define("person-loading-skeleton",u);var C=Object.defineProperty,g=(t,e,o,a)=>{for(var s=void 0,r=t.length-1,i;r>=0;r--)(i=t[r])&&(s=i(e,o,s)||s);return s&&C(e,o,s),s};const M=class M extends v{constructor(){super(...arguments),this.name="",this.role="",this.image="",this.loading=!1}render(){return n`${this.loading?n`<person-loading-skeleton></person-loading-skeleton>`:n` <div class="person-bubble">
          <img loading="lazy" src="${this.image}" alt="${this.name}" />
          <div class="text">
            <p class="name">${this.name}</p>
            <p class="role">${this.role}</p>
          </div>
        </div>`}`}};M.styles=[H];let c=M;g([h({type:String,attribute:"person-name"})],c.prototype,"name");g([h({type:String,attribute:"person-role"})],c.prototype,"role");g([h({type:String,attribute:"person-image"})],c.prototype,"image");g([h({type:Boolean,attribute:"person-loading"})],c.prototype,"loading");customElements.get("person-card")||customElements.define("person-card",c);const E=t=>{const e=Math.floor(t/60),o=t%60;return`${e}h ${o}m`},I=t=>`https://www.imdb.com/title/${t}`,P=t=>`https://trakt.tv/movies/${t}`,_=t=>`https://www.themoviedb.org/movie/${t}?language=en-US`,R='(function(){"use strict";const r=\'(function(){"use strict";const t=async e=>{let s=await(await fetch(`https://api.trakt.tv/people/${e}?extended=full,images`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json();postMessage(s)};onmessage=e=>{t(e.data)}})();\\n\',c=typeof self<"u"&&self.Blob&&new Blob([r],{type:"text/javascript;charset=utf-8"});function i(e){let a;try{if(a=c&&(self.URL||self.webkitURL).createObjectURL(c),!a)throw"";const t=new Worker(a,{name:e==null?void 0:e.name});return t.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(a)}),t}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(r),{name:e==null?void 0:e.name})}finally{a&&(self.URL||self.webkitURL).revokeObjectURL(a)}}const p=async e=>{let t=await(await fetch(`https://api.trakt.tv/movies/${e}/people?extended=cast,crew`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json(),s=[];t.cast.map(o=>{const n=new i;n.onmessage=d=>{s.push({...d.data,...o}),t.cast.length===s.length&&(t={...t,cast:[...s],id:e},postMessage(t)),n.terminate()},n.postMessage(o.person.ids.trakt)})};onmessage=e=>{p(e.data)}})();\n',$=typeof self<"u"&&self.Blob&&new Blob([R],{type:"text/javascript;charset=utf-8"});function B(t){let e;try{if(e=$&&(self.URL||self.webkitURL).createObjectURL($),!e)throw"";const o=new Worker(e,{name:t==null?void 0:t.name});return o.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),o}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(R),{name:t==null?void 0:t.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}const z=j`<svg xmlns="http://www.w3.org/2000/svg" aria-label="IMDb" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#f5c518"/><path d="M104 328V184H64v144zM189 184l-9 67-5-36-5-31h-50v144h34v-95l14 95h25l13-97v97h34V184zM256 328V184h62c15 0 26 11 26 25v94c0 14-11 25-26 25zm47-118l-9-1v94c5 0 9-1 10-3 2-2 2-8 2-18v-56-12l-3-4zM419 220h3c14 0 26 11 26 25v58c0 14-12 25-26 25h-3c-8 0-16-4-21-11l-2 9h-36V184h38v46c5-6 13-10 21-10zm-8 70v-34l-1-11c-1-2-4-3-6-3s-5 1-6 3v57c1 2 4 3 6 3s6-1 6-3l1-12z"/></svg>`,T=j`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
<defs>
    <radialGradient id="a" cx="48.46" cy="-.95" r="64.84" fx="48.46" fy="-.95" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#9f42c6"/>
        <stop offset=".27" stop-color="#a041c3"/>
        <stop offset=".42" stop-color="#a43ebb"/>
        <stop offset=".53" stop-color="#aa39ad"/>
        <stop offset=".64" stop-color="#b4339a"/>
        <stop offset=".73" stop-color="#c02b81"/>
        <stop offset=".82" stop-color="#cf2061"/>
        <stop offset=".9" stop-color="#e1143c"/>
        <stop offset=".97" stop-color="#f50613"/>
        <stop offset="1" stop-color="red"/>
    </radialGradient>
</defs>
<path d="M48 11.26v25.47C48 42.95 42.95 48 36.73 48H11.26C5.04 48 0 42.95 0 36.73V11.26C0 5.04 5.04 0 11.26 0h25.47a11.24 11.24 0 0 1 9.62 5.4c.18.29.34.59.5.89.33.68.6 1.39.79 2.14.1.37.18.76.23 1.15.09.54.13 1.11.13 1.68Z" style="fill:url(#a)"/>
<path d="m13.62 17.97 7.92 7.92 1.47-1.47-7.92-7.92-1.47 1.47Zm14.39 14.4 1.47-1.46-2.16-2.16L47.64 8.43c-.19-.75-.46-1.46-.79-2.14L24.39 28.75l3.62 3.62Zm-15.09-13.7-1.46 1.46 14.4 14.4 1.46-1.47L23 28.75 46.35 5.4c-.36-.6-.78-1.16-1.25-1.68L21.54 27.28l-8.62-8.61Zm34.95-9.09L28.7 28.75l1.47 1.46L48 12.38v-1.12c0-.57-.04-1.14-.13-1.68ZM25.16 22.27l-7.92-7.92-1.47 1.47 7.92 7.92 1.47-1.47Zm16.16 12.85c0 3.42-2.78 6.2-6.2 6.2H12.88c-3.42 0-6.2-2.78-6.2-6.2V12.88c0-3.42 2.78-6.21 6.2-6.21h20.78V4.6H12.88c-4.56 0-8.28 3.71-8.28 8.28v22.24c0 4.56 3.71 8.28 8.28 8.28h22.24c4.56 0 8.28-3.71 8.28-8.28v-3.51h-2.07v3.51Z" style="fill:#fff"/>
</svg>
`,W="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20185.04%20133.4'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:url(%23linear-gradient);}%3c/style%3e%3clinearGradient%20id='linear-gradient'%20y1='66.7'%20x2='185.04'%20y2='66.7'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2390cea1'/%3e%3cstop%20offset='0.56'%20stop-color='%233cbec9'/%3e%3cstop%20offset='1'%20stop-color='%2300b3e5'/%3e%3c/linearGradient%3e%3c/defs%3e%3ctitle%3eAsset%204%3c/title%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='Layer_1-2'%20data-name='Layer%201'%3e%3cpath%20class='cls-1'%20d='M51.06,66.7h0A17.67,17.67,0,0,1,68.73,49h-.1A17.67,17.67,0,0,1,86.3,66.7h0A17.67,17.67,0,0,1,68.63,84.37h.1A17.67,17.67,0,0,1,51.06,66.7Zm82.67-31.33h32.9A17.67,17.67,0,0,0,184.3,17.7h0A17.67,17.67,0,0,0,166.63,0h-32.9A17.67,17.67,0,0,0,116.06,17.7h0A17.67,17.67,0,0,0,133.73,35.37Zm-113,98h63.9A17.67,17.67,0,0,0,102.3,115.7h0A17.67,17.67,0,0,0,84.63,98H20.73A17.67,17.67,0,0,0,3.06,115.7h0A17.67,17.67,0,0,0,20.73,133.37Zm83.92-49h6.25L125.5,49h-8.35l-8.9,23.2h-.1L99.4,49H90.5Zm32.45,0h7.8V49h-7.8Zm22.2,0h24.95V77.2H167.1V70h15.35V62.8H167.1V56.2h16.25V49h-24ZM10.1,35.4h7.8V6.9H28V0H0V6.9H10.1ZM39,35.4h7.8V20.1H61.9V35.4h7.8V0H61.9V13.2H46.75V0H39Zm41.25,0h25V28.2H88V21h15.35V13.8H88V7.2h16.25V0h-24Zm-79,49H9V57.25h.1l9,27.15H24l9.3-27.15h.1V84.4h7.8V49H29.45l-8.2,23.1h-.1L13,49H1.2Zm112.09,49H126a24.59,24.59,0,0,0,7.56-1.15,19.52,19.52,0,0,0,6.35-3.37,16.37,16.37,0,0,0,4.37-5.5A16.91,16.91,0,0,0,146,115.8a18.5,18.5,0,0,0-1.68-8.25,15.1,15.1,0,0,0-4.52-5.53A18.55,18.55,0,0,0,133.07,99,33.54,33.54,0,0,0,125,98H113.29Zm7.81-28.2h4.6a17.43,17.43,0,0,1,4.67.62,11.68,11.68,0,0,1,3.88,1.88,9,9,0,0,1,2.62,3.18,9.87,9.87,0,0,1,1,4.52,11.92,11.92,0,0,1-1,5.08,8.69,8.69,0,0,1-2.67,3.34,10.87,10.87,0,0,1-4,1.83,21.57,21.57,0,0,1-5,.55H121.1Zm36.14,28.2h14.5a23.11,23.11,0,0,0,4.73-.5,13.38,13.38,0,0,0,4.27-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68,9.16,9.16,0,0,0-.55-3.2,7.79,7.79,0,0,0-1.57-2.62,8.38,8.38,0,0,0-2.45-1.85,10,10,0,0,0-3.18-1v-.1a9.28,9.28,0,0,0,4.43-2.82,7.42,7.42,0,0,0,1.67-5,8.34,8.34,0,0,0-1.15-4.65,7.88,7.88,0,0,0-3-2.73,12.9,12.9,0,0,0-4.17-1.3,34.42,34.42,0,0,0-4.63-.32h-13.2Zm7.8-28.8h5.3a10.79,10.79,0,0,1,1.85.17,5.77,5.77,0,0,1,1.7.58,3.33,3.33,0,0,1,1.23,1.13,3.22,3.22,0,0,1,.47,1.82,3.63,3.63,0,0,1-.42,1.8,3.34,3.34,0,0,1-1.13,1.2,4.78,4.78,0,0,1-1.57.65,8.16,8.16,0,0,1-1.78.2H165Zm0,14.15h5.9a15.12,15.12,0,0,1,2.05.15,7.83,7.83,0,0,1,2,.55,4,4,0,0,1,1.58,1.17,3.13,3.13,0,0,1,.62,2,3.71,3.71,0,0,1-.47,1.95,4,4,0,0,1-1.23,1.3,4.78,4.78,0,0,1-1.67.7,8.91,8.91,0,0,1-1.83.2h-7Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,m=(t,e,o,a)=>{for(var s=a>1?void 0:a?J(e,o):e,r=t.length-1,i;r>=0;r--)(i=t[r])&&(s=(a?i(e,o,s):i(s))||s);return a&&s&&G(e,o,s),s};const U=new B,V={TraktSvg:T,ImdbSvg:z};let d=class extends v{constructor(){super(...arguments),this.selectedMovie={},this.people={},this.runtime="",this.setPeopleLoading=!1}connectedCallback(){super.connectedCallback(),this.setPeopleLoading=!0,U.onmessage=t=>{this.people=t.data,this.setPeopleLoading=!1;const e=JSON.parse(localStorage.getItem("peopleObjects")||"[]");(e==null?void 0:e.every(a=>{var s;return parseInt((s=this.people)==null?void 0:s.id)!==parseInt(a==null?void 0:a.id)}))&&(e.push(this.people),localStorage.setItem("peopleObjects",JSON.stringify([...e])))}}updated(t){var e,o,a,s,r;if(((o=(e=this.selectedMovie)==null?void 0:e.ids)==null?void 0:o.trakt)!==((a=this.people)==null?void 0:a.id)){this.setPeopleLoading=!0;const i=JSON.parse(localStorage.getItem("peopleObjects")||"[]");(i==null?void 0:i.every(l=>{var p,L;return((L=(p=this.selectedMovie)==null?void 0:p.ids)==null?void 0:L.trakt)!==(l==null?void 0:l.id)}))?U.postMessage((r=(s=this.selectedMovie)==null?void 0:s.ids)==null?void 0:r.trakt):(this.people=i.find(l=>l.id===this.selectedMovie.ids.trakt),this.setPeopleLoading=!1)}}closeButtonClicked(){var e;this.selectedMovie={},this.people={};const t=new CustomEvent("closed",{bubbles:!0,composed:!0});(e=this.shadowRoot)==null||e.dispatchEvent(t)}render(){var t,e,o,a,s,r,i,f;return n`<div class="movie-info ${this.selectedMovie?"selected":""}">
      <button class="close-button" @click="${this.closeButtonClicked}">
        &#x2715;
      </button>
      <div class="hero">
        <img
          loading="lazy"
          src="https://${this.selectedMovie.images.fanart}"
          alt="${this.selectedMovie.title} Backdrop"
        />
      </div>
      <div class="container">
        <div class="main-info">
          <div class="header">
            <div class="poster">
              <img
                loading="lazy"
                src="https://${this.selectedMovie.images.poster}"
                alt="${this.selectedMovie.title} Poster"
              />
            </div>
            <div class="logo">
              <img
                loading="lazy"
                src="https://${this.selectedMovie.images.logo}"
                alt="${this.selectedMovie.title} Logo"
              />
            </div>
            <div class="metadata">
              <p>
                Runtime: ${E(this.selectedMovie.runtime)}
              </p>
              <p>Release Year: ${this.selectedMovie.year}</p>
              <div class="rating">
                <span class="star"
                  >${Math.round(this.selectedMovie.rating*10)/10}</span
                >
                <span class="thumbs-up">${this.selectedMovie.votes}</span>
              </div>
              <div class="votes"></div>
            </div>
          </div>
          <div class="description">
            <p>${this.selectedMovie.overview}</p>
          </div>
          <div class="links">
            <a
              target="_blank"
              href="${P((e=(t=this.selectedMovie)==null?void 0:t.ids)==null?void 0:e.slug)}"
              >${V.TraktSvg}</a
            >
            <a
              target="_blank"
              href="${_((a=(o=this.selectedMovie)==null?void 0:o.ids)==null?void 0:a.tmdb)}"
              ><img src="${W}" alt="tmdb"
            /></a>
            <a
              target="_blank"
              href="${I((r=(s=this.selectedMovie)==null?void 0:s.ids)==null?void 0:r.imdb)}"
              >${V.ImdbSvg}</a
            >
          </div>
        </div>

        <div class="people">
          <h2>People</h2>
          <ul class="people-list">
            ${(f=(i=this.people)==null?void 0:i.cast)==null?void 0:f.map(l=>{var p;return n`<li>
                  <person-card
                    person-name="${l.name}"
                    person-role="${l.character}"
                    person-image="https://${(p=l==null?void 0:l.images)==null?void 0:p.headshot[0]}"
                    ?person-loading="${this.setPeopleLoading}"
                  ></person-card>
                </li>`})}
          </ul>
        </div>
      </div>
    </div>`}};d.styles=[Z];m([h({type:Object,attribute:"selected-movie"})],d.prototype,"selectedMovie",2);m([w()],d.prototype,"people",2);m([w()],d.prototype,"runtime",2);m([w()],d.prototype,"setPeopleLoading",2);d=m([O("movie-info")],d);export{d as MovieInfo};
