import { HTMLTemplateResult, LitElement, PropertyValues, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ViewMixin } from '../view.mixin';
import TraktWorker from '../../shared/workers/trakt.worker?worker&inline';

const worker = new TraktWorker();

@customElement('movies-list')
export class CardExamples extends ViewMixin(LitElement) {
  featureIsEnabled = false;
  isMfe = false;

  @state()
  movies: any = [];

  @state()
  trending: any = [];

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
      }

      .card-container.trending {
        display: flex;
        flex-direction: row;
        flex: 1 1 100%;
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }

      .card-container.trending::-webkit-scrollbar {
        display: none;
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

  renderMovieCard(movie: any) {
    return html`<generic-card
      img-src="https://${movie.images.poster}"
      img-alt="${movie.title} Poster"
      img-height="16rem"
    >
      <div slot="card-title">
        <h2>${movie.title}</h2>
        (${movie.year})
      </div>
      ${movie.tagline}
      <div slot="card-footer">
        <p>Testing footer</p>
      </div>
    </generic-card>`;
  }

  render(): HTMLTemplateResult {
    return this.renderMfe(
      html` <h1>Trending</h1>
        <div class="card-container trending">
          ${this.trending.map((movie: any) =>
            movie.title
              ? html`${this.renderMovieCard(movie)}`
              : html`<generic-card card-loading></generic-card>`,
          )}
        </div>
        <h1>Popular Movies</h1>
        <div class="card-container">
          ${this.movies.map((movie: any) => {
            if (movie.title) {
              return html`${this.renderMovieCard(movie)}`;
            } else {
              return html`<generic-card card-loading></generic-card>`;
            }
          })}
        </div>`,
    );
  }

  listenForClicks(e: CustomEvent<any>): void {
    console.log('item clicked', e.detail);
  }
}
