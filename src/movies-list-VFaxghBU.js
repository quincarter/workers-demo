import{x as r,E as v,i as g,a as h,r as c,t as u}from"./index-CMC5ZSim.js";import{V as b}from"./view.mixin-B-wv-XIk.js";import"./movie-info-ZYSIFE3s.js";import"./movie-info.styles-Ch_58iD9.js";const f='const r=\'const t=async e=>{const a=await fetch(`https://api.trakt.tv/movies/${e}?extended=full,images`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}});postMessage(await a.json())};onmessage=e=>{t(e.data)};\\n\',n=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",r],{type:"text/javascript;charset=utf-8"});function l(t){let e;try{if(e=n&&(self.URL||self.webkitURL).createObjectURL(n),!e)throw"";const a=new Worker(e,{type:"module",name:t==null?void 0:t.name});return a.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(e)}),a}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(r),{type:"module",name:t==null?void 0:t.name})}}const o="https://api.trakt.tv/movies",c=async(t,e)=>{let a=[];e.map(i=>{const s=new l;s.onmessage=d=>{if(a.push(d.data),e.length===a.length)postMessage({[t]:[...a]});else{const p=new Array(e.length-a.length).fill({});postMessage({[t]:[...a,...p]})}s.terminate()},s.postMessage(i.movie.ids.trakt)})},f=async()=>{const e=await(await fetch(`${o}/trending?limit=20`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json();postMessage({trendingCount:e.length}),c("trending",e)},m=async()=>{const e=await(await fetch(`${o}/played/period?limit=100`,{headers:{"Content-Type":"application/json","trakt-api-version":"2","trakt-api-key":"d7c41473f29238207d48782764322e652086cd2bde10d7bc3e89454acb189c3f"}})).json();postMessage({moviesCount:e.length}),c("movies",e)};onmessage=async t=>{console.log("data",t),f(),m()};\n',p=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",f],{type:"text/javascript;charset=utf-8"});function y(e){let t;try{if(t=p&&(self.URL||self.webkitURL).createObjectURL(p),!t)throw"";const i=new Worker(t,{type:"module",name:e==null?void 0:e.name});return i.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),i}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(f),{type:"module",name:e==null?void 0:e.name})}}var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(e,t,i,a)=>{for(var s=a>1?void 0:a?k(t,i):t,d=e.length-1,l;d>=0;d--)(l=e[d])&&(s=(a?l(t,i,s):l(s))||s);return a&&s&&w(t,i,s),s};const m=new y;let n=class extends b(g){constructor(){super(...arguments),this.featureIsEnabled=!1,this.isMfe=!1,this.movies=[],this.trending=[],this.selectedMovie={}}connectedCallback(){super.connectedCallback(),m.onmessage=e=>{e.data.moviesCount&&(this.movies=new Array(e.data.moviesCount).fill({})),e.data.trendingCount&&(this.trending=new Array(e.data.trendingCount).fill({})),e.data.movies&&(this.movies=[...e.data.movies],localStorage.setItem("topMovies",JSON.stringify(e.data.movies))),e.data.trending&&(this.trending=[...e.data.trending],localStorage.setItem("trendingMovies",JSON.stringify(e.data.trending)))}}firstUpdated(e){const t=JSON.parse(localStorage.getItem("topMovies")||"[]"),i=JSON.parse(localStorage.getItem("trendingMovies")||"[]");t.length&&i.length?(this.movies=t,this.trending=i):m.postMessage("requesting movies")}setSelectedMovie(e){var t,i;((i=(t=this.selectedMovie)==null?void 0:t.ids)==null?void 0:i.trakt)===parseInt(e)?(this.selectedMovie={},document.body.classList.contains("selected-movie")&&document.body.classList.remove("selected-movie")):(this.selectedMovie=this.movies.find(a=>a.ids.trakt===parseInt(e)),document.body.classList.contains("selected-movie")||document.body.classList.add("selected-movie"))}renderMovieCard(e){var t,i;return r`<generic-card
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
    </generic-card>`}sidebarClosed(){this.selectedMovie={},document.body.classList.contains("selected-movie")&&document.body.classList.remove("selected-movie")}render(){var e,t,i;return this.renderMfe(r`
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
              ></movie-info>`:v}
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
        position: relative;
      }

      @media screen and (max-width: 1150px) {
        .content-grid.selected-movie {
          transform: scaleX(100%);
          transition: all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          grid-template-columns: 100% 1fr;
          grid-template-areas: 'selected selected selected';
          overflow-y: auto;
        }

        .selected-area.selected {
          position: absolute;
          height: 100%;
        }
      }
    `];o([c()],n.prototype,"movies",2);o([c()],n.prototype,"trending",2);o([c()],n.prototype,"selectedMovie",2);n=o([u("movies-list")],n);export{n as CardExamples};
