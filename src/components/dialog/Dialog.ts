import { CSSResultOrNative, html, HTMLTemplateResult, LitElement } from 'lit';
import { DialogStyles } from './dialog.styles';

export class Dialog extends LitElement {
  static styles: CSSResultOrNative[] = [DialogStyles];

  render(): HTMLTemplateResult {
    return html`<dialog open>This is a dialog</dialog>`;
  }
}
