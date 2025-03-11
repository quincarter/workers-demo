import { html, HTMLTemplateResult, LitElement } from 'lit';
import { PersonCardStyles } from './person-card.styles';
import { PersonLoadingSkeletonStyles } from './person-loading-skeleton.styles';

export class PersonLoadingSkeleton extends LitElement {
  static styles = [PersonLoadingSkeletonStyles, PersonCardStyles];

  render(): HTMLTemplateResult {
    return html`
      <div class="card-wrapper default">
        <span class="skeleton-box movie-poster"></span>
        <div class="card">
          <span class="skeleton-box title"></span>
          <span class="skeleton-box description"></span>
          <span class="skeleton-box description"></span>
        </div>
      </div>
    `;
  }
}
