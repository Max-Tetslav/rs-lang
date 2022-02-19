export enum EPageTitles {
  home = 'Главная',
  book = 'Учебник',
  games = 'Мини-Игры',
  stats = 'Статистика',
  team = 'Команда',
  audiocall = 'Аудиовызов',
  sprint = 'Спринт',
}

export enum EPageUrls {
  home = '/',
  book = 'book',
  games = 'games',
  stats = 'stats',
  team = 'team',
  audiocall = 'audiocall',
  sprint = 'sprint',
}

export interface IPageTitleState {
  pageTitle: string;
}
