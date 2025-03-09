import { html, HTMLTemplateResult, LitElement } from 'lit';
import { GenericCardSkeletonStyles } from './generic-card-skeleton.styles';
import { GenericCardStyles } from './generic-card.styles';

export class GenericCardSkeleton extends LitElement {
  static styles = [GenericCardSkeletonStyles, GenericCardStyles];

  render(): HTMLTemplateResult {
    return html`
      <div class="card-wrapper default">
        <span class="skeleton-box movie-poster"></span>
        <div class="card">
          <span class="skeleton-box title"></span>
          <span class="skeleton-box description" ></span>
          <span class="skeleton-box description" ></span>
        </div>
      </div>
    `;
  }
}
