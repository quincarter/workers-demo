import {
  HTMLTemplateResult,
  LitElement,
  PropertyValues,
  css,
  html,
  nothing,
} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ViewMixin } from '../view.mixin';
import TraktWorker from '../../shared/workers/trakt.worker?worker&inline';
import './movie-info';

const worker = new TraktWorker();

@customElement('movies-list')
export class CardExamples extends ViewMixin(LitElement) {
  featureIsEnabled = false;
  isMfe = false;

  @state()
  movies: any = [];

  @state()
  trending: any = [];

  @state()
  selectedMovie: any = {};

  static styles = [
    css`
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
    `,
  ];

  connectedCallback(): void {
    super.connectedCallback();
    worker.onmessage = (message: MessageEvent) => {
      if (message.data.moviesCount) {
        this.movies = new Array(message.data.moviesCount).fill({}); // initialize array with blank objects
      }

      if (message.data.trendingCount) {
        this.trending = new Array(message.data.trendingCount).fill({}); // initialize array with blank objects
      }

      if (message.data.movies) {
        this.movies = [...message.data.movies];
        localStorage.setItem('topMovies', JSON.stringify(message.data.movies));
      }

      if (message.data.trending) {
        this.trending = [...message.data.trending];
        localStorage.setItem(
          'trendingMovies',
          JSON.stringify(message.data.trending),
        );
      }
    };
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    const topMovies = JSON.parse(localStorage.getItem('topMovies') || '[]');
    const trendingMovies = JSON.parse(
      localStorage.getItem('trendingMovies') || '[]',
    );
    if (topMovies.length && trendingMovies.length) {
      this.movies = topMovies;
      this.trending = trendingMovies;
    } else {
      worker.postMessage('requesting movies');
    }
  }

  setSelectedMovie(id: string) {
    if (this.selectedMovie?.ids?.trakt === parseInt(id)) {
      this.selectedMovie = {};

      document.body.classList.contains('selected-movie')
        ? document.body.classList.remove('selected-movie')
        : '';
    } else {
      this.selectedMovie = this.movies.find(
        (item: any) => item.ids.trakt === parseInt(id),
      );
      !document.body.classList.contains('selected-movie')
        ? document.body.classList.add('selected-movie')
        : '';
    }
  }

  renderMovieCard(movie: any) {
    return html`<generic-card
      img-src="https://${movie.images.poster}"
      img-alt="${movie.title} Poster"
      img-height="16rem"
      card-id="${movie.ids.trakt}"
      card-interactive
      ?card-selected="${this.selectedMovie?.ids?.trakt === movie.ids.trakt
        ? true
        : false}"
      @card-clicked="${(e: CustomEvent<{ id: string; data: any }>) =>
        this.setSelectedMovie(e.detail.id)}"
    >
      <div slot="card-title">
        <h2>${movie.title} (${movie.year})</h2>
        <span class="movie-rating">${movie.certification}</span>
      </div>
      ${movie.tagline}
      <div slot="card-footer">
        <ul>
          ${movie.genres.map((genre: any) => html`<li>${genre}</li>`)}
        </ul>
      </div>
    </generic-card>`;
  }

  sidebarClosed() {
    this.selectedMovie = {};
  }

  render(): HTMLTemplateResult {
    return this.renderMfe(html`
      <div
        class="content-grid ${this.selectedMovie?.title
          ? 'selected-movie'
          : ''}"
      >
        <div
          class="main-area ${this.selectedMovie?.title ? 'selected-movie' : ''}"
        >
          <h1>Trending</h1>
          <div class="card-container trending">
            ${this.trending.map((movie: any) =>
              movie.title
                ? html`${this.renderMovieCard(movie)}`
                : html`<generic-card card-loading></generic-card>`,
            )}
          </div>
          <h1>Popular Movies</h1>
          <div class="card-container popular">
            ${this.movies.map((movie: any) => {
              if (movie.title) {
                return html`${this.renderMovieCard(movie)}`;
              } else {
                return html`<generic-card card-loading></generic-card>`;
              }
            })}
          </div>
        </div>

        <div class="selected-area ${this.selectedMovie ? 'selected' : ''}">
          ${this.selectedMovie?.title
            ? html`<movie-info
                @closed="${this.sidebarClosed}"
                .selectedMovie="${this.selectedMovie}"
              ></movie-info>`
            : nothing}
        </div>
      </div>
    `);
  }
}
