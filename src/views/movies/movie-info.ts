import { HTMLTemplateResult, LitElement, PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../components/dialog/custom-dialog';
import '../../components/people/person-card';
import {
  convertMinutesToString,
  getImdbUrl,
  getTmdbMovieUrl,
  getTraktMovieUrl,
} from '../../shared/utilities/utils';
import MoviePeopleWorker from '../../shared/workers/movie-people.worker?worker&inline';
import { ImdbSvg } from './images/imdb.svg';
import { TraktSvg } from './images/trakt.svg';
import { MovieInfoStyles } from './movie-info.styles';
// import { TmdbSvg } from './images/tmdb.svg';
import TmdbSvg from './images/tmdb-svg.svg';

const moviePeopleWorker = new MoviePeopleWorker();

const iconMap = {
  TraktSvg,
  ImdbSvg,
  TmdbSvg,
};
@customElement('movie-info')
export class MovieInfo extends LitElement {
  @property({ type: Object, attribute: 'selected-movie' })
  selectedMovie: any = {};

  @state()
  people: any = {};

  @state()
  runtime = '';

  @state()
  setPeopleLoading = false;

  static styles = [MovieInfoStyles];

  connectedCallback(): void {
    super.connectedCallback();
    this.setPeopleLoading = true;
    moviePeopleWorker.onmessage = (message: MessageEvent) => {
      this.people = message.data;
      this.setPeopleLoading = false;
      const allPeople = JSON.parse(
        localStorage.getItem('peopleObjects') || '[]',
      );

      const doesntExist = allPeople?.every(
        (movie: { id: any }) =>
          parseInt(this.people?.id) !== parseInt(movie?.id),
      );

      if (doesntExist) {
        allPeople.push(this.people);
        localStorage.setItem('peopleObjects', JSON.stringify([...allPeople]));
      }
    };
  }

  protected updated(_changedProperties: PropertyValues): void {
    if (this.selectedMovie?.ids?.trakt !== this.people?.id) {
      this.setPeopleLoading = true;
      //   this.people = {};
      const allPeople = JSON.parse(
        localStorage.getItem('peopleObjects') || '[]',
      );
      const doesntExist = allPeople?.every(
        (movie: { id: any }) => this.selectedMovie?.ids?.trakt !== movie?.id,
      );

      if (doesntExist) {
        moviePeopleWorker.postMessage(this.selectedMovie?.ids?.trakt);
      } else {
        this.people = allPeople.find(
          (movie: { id: any }) => movie.id === this.selectedMovie.ids.trakt,
        );
        this.setPeopleLoading = false;
      }
    }
  }

  closeButtonClicked() {
    this.selectedMovie = {};
    this.people = {};
    const event = new CustomEvent('closed', {
      bubbles: true,
      composed: true,
    });

    this.shadowRoot?.dispatchEvent(event);
  }

  render(): HTMLTemplateResult {
    return html`<div class="movie-info ${this.selectedMovie ? 'selected' : ''}">
      <button class="close-button" @click="${this.closeButtonClicked}">
        &#x2715;
      </button>
      <div class="hero">
        <img
          loading="lazy"
          src="https://${this.selectedMovie?.images?.fanart}"
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
                Runtime: ${convertMinutesToString(this.selectedMovie.runtime)}
              </p>
              <p>Release Year: ${this.selectedMovie.year}</p>
              <div class="rating">
                <span class="star"
                  >${Math.round(this.selectedMovie.rating * 10) / 10}</span
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
              href="${getTraktMovieUrl(this.selectedMovie?.ids?.slug)}"
              >${iconMap.TraktSvg}</a
            >
            <a
              target="_blank"
              href="${getTmdbMovieUrl(this.selectedMovie?.ids?.tmdb)}"
              ><img src="${TmdbSvg}" alt="tmdb"
            /></a>
            <a
              target="_blank"
              href="${getImdbUrl(this.selectedMovie?.ids?.imdb)}"
              >${iconMap.ImdbSvg}</a
            >
          </div>
        </div>

        <div class="people">
          <h2>People</h2>
          <ul class="people-list">
            ${this.people?.cast?.map(
              (person: any) =>
                html`<li>
                  <person-card
                    person-name="${person.name}"
                    person-role="${person.character}"
                    person-image="${person?.images?.headshot[0]
                      ? `https://${person?.images?.headshot[0]}`
                      : ''}"
                    ?person-loading="${this.setPeopleLoading}"
                  ></person-card>
                </li>`,
            )}
          </ul>
        </div>
      </div>
    </div>`;
  }
}
