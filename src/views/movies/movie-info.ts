import { HTMLTemplateResult, LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../../components/dialog/custom-dialog';
import MoviePeopleWorker from '../../shared/workers/movie-people.worker?worker&inline';
import { convertMinutesToString } from '../../shared/utilities/utils';
import { MovieInfoStyles } from './movie-info.styles';
import '../../components/people/person-card';

const moviePeopleWorker = new MoviePeopleWorker();

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

      console.log('people data here', this.people);
      const doesntExist = allPeople?.every(
        (movie: { id: any }) =>
          parseInt(this.people?.id) !== parseInt(movie?.id),
      );
      console.log('exists', doesntExist);

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
      console.log('alllllll people', allPeople, this.people, doesntExist);
      console.log('exists', doesntExist);

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

  render(): HTMLTemplateResult {
    return html`<div class="movie-info ${this.selectedMovie ? 'selected' : ''}">
      <div class="hero">
        <img
          src="https://${this.selectedMovie.images.fanart}"
          alt="${this.selectedMovie.title} Backdrop"
        />
      </div>
      <section class="main-info">
        <div class="header">
          <div class="poster">
            <img
              src="https://${this.selectedMovie.images.poster}"
              alt="${this.selectedMovie.title} Poster"
            />
          </div>
          <div class="logo">
            <img
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
            </div>
          </div>
        </div>
        <div class="description">
          <p>${this.selectedMovie.overview}</p>
        </div>
      </section>

      <section class="people">
        <h2>People</h2>
        <ul class="people-list">
          ${this.people?.cast?.map(
            (person: any) =>
              html`<li>
                <person-card
                  person-name="${person.name}"
                  person-role="${person.character}"
                  person-image="https://${person.images.headshot[0]}"
                  ?person-loading="${this.setPeopleLoading}"
                ></person-card>
              </li>`,
          )}
        </ul>
      </section>
    </div>`;
  }
}
