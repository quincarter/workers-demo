import { createContext } from '@lit/context';
import { Router } from '@vaadin/router';

export const RouterContext = createContext<Router>('routerContext');
