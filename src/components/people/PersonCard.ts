import { html, HTMLTemplateResult, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { PersonCardStyles } from './person-card.styles';
import PersonSvg from './person-fill-svgrepo-com.svg';
import './person-loading';

export class PersonCard extends LitElement {
  static styles = [PersonCardStyles];

  /**
   * Defines the name of a person
   * @attr person-name
   * @default ""
   */
  @property({ type: String, attribute: 'person-name' })
  name = '';

  /**
   * Defines the role of a person
   * @attr person-role
   * @default ""
   */
  @property({ type: String, attribute: 'person-role' })
  role = '';

  /**
   * Defines the image of a person
   * @attr person-image
   * @default ""
   */
  @property({ type: String, attribute: 'person-image' })
  image = '';

  /**
   * Defines the loading state of a person
   * @attr person-loading
   * @default false
   */
  @property({ type: Boolean, attribute: 'person-loading' })
  loading = false;

  render(): HTMLTemplateResult {
    return html`${this.loading
      ? html`<person-loading-skeleton></person-loading-skeleton>`
      : html` <div class="person-bubble">
          <img
            loading="lazy"
            src="${this.image || PersonSvg}"
            alt="${this.name}"
          />
          <div class="text">
            <p class="name">${this.name}</p>
            <p class="role">${this.role}</p>
          </div>
        </div>`}`;
  }
}
