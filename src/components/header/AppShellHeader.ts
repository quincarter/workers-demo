import { html, HTMLTemplateResult, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { NavItem } from '../../shared/interfaces/navigation.interface';
import '../theme-switcher/theme-switcher';
import { AppShellHeaderStyles } from './app-shell-header.styles';
import logoPng from '/pwa-192x192.png';

export class AppShellHeader extends LitElement {
  @property({ attribute: 'routes', type: Array })
  routes: NavItem[] = [];

  @property({ type: Boolean, attribute: 'enable-theme-switcher' })
  enableThemeSwitcher = false;

  static styles = [AppShellHeaderStyles];

  render(): HTMLTemplateResult {
    return html`${this.routes.length > 0
      ? html`<nav>
            <a href="home"
              ><img loading="lazy" class="logo" src="${logoPng}" alt="logo"
            /></a>
            <ul>
              ${this.routes.map(
                route =>
                  html`<li><a href="${route.path}">${route.name}</a></li>`,
              )}
              ${this.enableThemeSwitcher
                ? html`<li><theme-switcher></theme-switcher></li>`
                : nothing}
            </ul>
          </nav>
          <slot></slot>`
      : nothing} `;
  }
}
