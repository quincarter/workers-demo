import { PersonLoadingSkeleton } from './PersonLoadingSkeleton';

customElements.get('person-loading-skeleton') ||
  customElements.define('person-loading-skeleton', PersonLoadingSkeleton);
