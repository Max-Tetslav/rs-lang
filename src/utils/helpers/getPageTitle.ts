import { EPageTitles, EPageUrls } from '../../types/pageTitleTypes';

function getPageTitle(url: string): string {
  let title = EPageTitles.home;
  switch (url) {
    case EPageUrls.home:
      title = EPageTitles.home;
      break;
    case EPageUrls.book:
      title = EPageTitles.book;
      break;
    case EPageUrls.games:
      title = EPageTitles.games;
      break;
    case EPageUrls.stats:
      title = EPageTitles.stats;
      break;
    case EPageUrls.team:
      title = EPageTitles.team;
      break;
    default:
      title = EPageTitles.home;
  }

  return title;
}

export default getPageTitle;
