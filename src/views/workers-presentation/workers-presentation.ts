import { HTMLTemplateResult, LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ViewMixin } from '../view.mixin';

@customElement('workers-presentation')
export class ViteMfe extends ViewMixin(LitElement) {
  tagName = 'presentation-slides';
  featureIsEnabled = true;
  isMfe = true;
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render(): HTMLTemplateResult {
    return html`isMfe = ${this.isMfe}${this.renderMfe()}`;
  }
}
