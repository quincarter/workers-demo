import { PersonCard } from './PersonCard';

customElements.get('person-card') ||
  customElements.define('person-card', PersonCard);
