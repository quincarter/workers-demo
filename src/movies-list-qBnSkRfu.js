import{k as r,D as m,h as g,i as h,r as c,t as u}from"./index-CmUrdf08.js";import{V as b}from"./view.mixin-DNt-vTzz.js";import"./movie-info-CSTOOj3y.js";import"./movie-info.styles-D7XcGgfj.js";const v='(function(){"use strict";const n=\'(function(){"use strict";const t=async e=>{const a=await fetch(`https://api.trakt.tv/movies/${e}?extended=full,images`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}});postMessage(await a.json())};onmessage=e=>{t(e.data)}})();\\n\',r=typeof self<"u"&&self.Blob&&new Blob([n],{type:"text/javascript;charset=utf-8"});function i(t){let e;try{if(e=r&&(self.URL||self.webkitURL).createObjectURL(r),!e)throw"";const a=new Worker(e,{name:t==null?void 0:t.name});return a.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),a}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(n),{name:t==null?void 0:t.name})}finally{e&&(self.URL||self.webkitURL).revokeObjectURL(e)}}const c="https://api.trakt.tv/movies",o=async(t,e)=>{let a=[];e.map(l=>{const s=new i;s.onmessage=f=>{if(a.push(f.data),e.length===a.length)postMessage({[t]:[...a]});else{const k=new Array(e.length-a.length).fill({});postMessage({[t]:[...a,...k]})}s.terminate()},s.postMessage(l.movie.ids.trakt)})},d=async()=>{const e=await(await fetch(`${c}/trending?limit=20`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json();postMessage({trendingCount:e.length}),o("trending",e)},p=async()=>{const e=await(await fetch(`${c}/played/period?limit=100`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json();postMessage({moviesCount:e.length}),o("movies",e)};onmessage=async t=>{console.log("data",t),d(),p()}})();\n',f=typeof self<"u"&&self.Blob&&new Blob([v],{type:"text/javascript;charset=utf-8"});function y(e){let t;try{if(t=f&&(self.URL||self.webkitURL).createObjectURL(f),!t)throw"";const i=new Worker(t,{name:e==null?void 0:e.name});return i.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),i}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(v),{name:e==null?void 0:e.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(e,t,i,a)=>{for(var s=a>1?void 0:a?k(t,i):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(s=(a?d(t,i,s):d(s))||s);return a&&s&&w(t,i,s),s};const p=new y;let n=class extends b(g){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1,this.movies=[],this.trending=[],this.selectedMovie={}}connectedCallback(){super.connectedCallback(),p.onmessage=e=>{e.data.moviesCount&&(this.movies=new Array(e.data.moviesCount).fill({})),e.data.trendingCount&&(this.trending=new Array(e.data.trendingCount).fill({})),e.data.movies&&(this.movies=[...e.data.movies],localStorage.setItem("topMovies",JSON.stringify(e.data.movies))),e.data.trending&&(this.trending=[...e.data.trending],localStorage.setItem("trendingMovies",JSON.stringify(e.data.trending)))}}firstUpdated(e){const t=JSON.parse(localStorage.getItem("topMovies")||"[]"),i=JSON.parse(localStorage.getItem("trendingMovies")||"[]");t.length&&i.length?(this.movies=t,this.trending=i):p.postMessage("requesting movies")}setSelectedMovie(e){var t,i;((i=(t=this.selectedMovie)==null?void 0:t.ids)==null?void 0:i.trakt)===parseInt(e)?(this.selectedMovie={},document.body.classList.contains("selected-movie")&&document.body.classList.remove("selected-movie")):(this.selectedMovie=this.movies.find(a=>a.ids.trakt===parseInt(e)),document.body.classList.contains("selected-movie")||document.body.classList.add("selected-movie"))}renderMovieCard(e){var t,i;return r`<generic-card
      img-src="https://${e.images.poster}"
      img-alt="${e.title} Poster"
      img-height="16rem"
      card-id="${e.ids.trakt}"
      card-interactive
      ?card-selected="${((i=(t=this.selectedMovie)==null?void 0:t.ids)==null?void 0:i.trakt)===e.ids.trakt}"
      @card-clicked="${a=>this.setSelectedMovie(a.detail.id)}"
    >
      <div slot="card-title">
        <h2>${e.title} (${e.year})</h2>
        <span class="movie-rating">${e.certification}</span>
      </div>
      ${e.tagline}
      <div slot="card-footer">
        <ul>
          ${e.genres.map(a=>r`<li>${a}</li>`)}
        </ul>
      </div>
    </generic-card>`}sidebarClosed(){this.selectedMovie={}}render(){var e,t,i;return this.renderMfe(r`
      <div
        class="content-grid ${(e=this.selectedMovie)!=null&&e.title?"selected-movie":""}"
      >
        <div
          class="main-area ${(t=this.selectedMovie)!=null&&t.title?"selected-movie":""}"
        >
          <h1>Trending</h1>
          <div class="card-container trending">
            ${this.trending.map(a=>a.title?r`${this.renderMovieCard(a)}`:r`<generic-card card-loading></generic-card>`)}
          </div>
          <h1>Popular Movies</h1>
          <div class="card-container popular">
            ${this.movies.map(a=>a.title?r`${this.renderMovieCard(a)}`:r`<generic-card card-loading></generic-card>`)}
          </div>
        </div>

        <div class="selected-area ${this.selectedMovie?"selected":""}">
          ${(i=this.selectedMovie)!=null&&i.title?r`<movie-info
                @closed="${this.sidebarClosed}"
                .selectedMovie="${this.selectedMovie}"
              ></movie-info>`:m}
        </div>
      </div>
    `)}};n.styles=[h`
      :host {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .card-container {
        display: flex;
        flex-direction: row;
        flex: 1 1 100%;
        gap: 1rem;
      }

      .card-container.popular {
        flex-wrap: wrap;
        justify-content: space-evenly;
      }

      .card-container.trending {
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }

      .card-container.trending::-webkit-scrollbar {
        display: none;
      }

      ul {
        list-style: none;
        display: flex;
        flex: 1;
        gap: 1rem;
        flex-direction: row;
        overflow-x: scroll;
      }

      li {
        background-color: green;
        color: #fff;
        border-radius: 10px;
        padding-inline: 0.5rem;
      }

      .movie-rating {
        position: absolute;
        top: 0;
        right: 0;
        background-color: black;
        color: #fff;
        border-radius: 50%;
        padding: 0.25rem 0.5rem;
        font-weight: 600;
      }

      .content-grid {
        display: grid;
        grid-template-areas: 'main main main';
        grid-template-columns: 1fr;
        width: 100%;
        height: 100%;
      }

      .content-grid.selected-movie {
        transform: scaleX(100%);
        transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        grid-template-columns: 50% 1fr;
        grid-template-areas: 'main selected selected';
        overflow-y: auto;
      }

      .main-area {
        grid-area: main;
        display: block;
        overflow-y: auto;
      }

      .main-area.selected-movie {
        height: calc(100vh - 4.75rem);
      }

      .selected-area {
        width: 0px;
        transition: all 1s ease-in-out;
        grid-area: selected;
      }

      .selected-area.selected {
        display: flex;
        flex-direction: column;
        width: 100%;
        transition: all 1s ease-in-out;
      }

      @media screen and (max-width: 1150px) {
        .content-grid.selected-movie {
          transform: scaleX(100%);
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          grid-template-columns: 100% 1fr;
          grid-template-areas: 'selected selected selected';
          overflow-y: auto;
        }
      }
    `];o([c()],n.prototype,"movies",2);o([c()],n.prototype,"trending",2);o([c()],n.prototype,"selectedMovie",2);n=o([u("movies-list")],n);export{n as CardExamples};
