export enum EPageTitles {
  home = 'Главная',
  book = 'Учебник',
  games = 'Мини-Игры',
  stats = 'Статистика',
  team = 'Команда',
}

export enum EPageUrls {
  home = '/',
  book = 'book',
  games = 'games',
  stats = 'stats',
  team = 'team',
}

export interface IPageTitleState {
  pageTitle: string;
}
