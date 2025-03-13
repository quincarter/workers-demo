import { NavItem } from '../interfaces/navigation.interface';

export const navigationRouting: NavItem[] = [
  {
    name: 'Home',
    path: 'home',
    directory: 'home-page',
    component: 'home-page',
    filePath: '../../views/home-page/home-page.ts',
    levelOfAccess: ['public'],
    tagName: 'home-page',
    isMfe: true,
  },
  {
    name: 'Example Detail Page',
    path: 'details123',
    directory: 'detail-page',
    component: 'detail-page',
    filePath: '../../views/detail-page/detail-page.ts',
    levelOfAccess: ['private'],
    tagName: 'detail-page',
    isMfe: false,
  },
  {
    name: 'Movies',
    path: 'movies',
    directory: 'movies',
    component: 'movies-list',
    filePath: '../../views/movies/movies.ts',
    levelOfAccess: ['public'],
    tagName: 'movies-list',
    isMfe: false,
  },
  {
    name: 'Charts',
    path: 'chart-examples',
    directory: 'chart-examples',
    component: 'chart-examples',
    filePath: '../../views/chart-examples/chart-examples.ts',
    levelOfAccess: ['public'],
    tagName: 'chart-examples',
    isMfe: false,
  },
  {
    name: 'Vite MFE',
    path: 'vite-mfe',
    directory: 'vite-mfe',
    component: 'vite-mfe',
    filePath: '../../views/vite-mfe/vite-mfe.ts',
    levelOfAccess: ['public'],
    tagName: 'vite-mfe',
    isMfe: true,
  },
];

export const sidePages: NavItem[] = [
  {
    name: 'Detail',
    path: 'detail(.*)',
    directory: 'detail-page',
    component: 'detail-page',
    filePath: '../../views/detail-page/detail-page.ts',
    levelOfAccess: ['private'],
    tagName: 'detail-page',
    isMfe: false,
  },
];
