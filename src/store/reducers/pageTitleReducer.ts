export const initialPageTitleState = {
  title: 'Главная',
};

const pageTitleReducer = (state: any, action: any) => { // eslint-disable-line
  if (action.type === 'SET_PAGE_TITLE') {
    return {
      ...state,
      title: action.payload,
    };
  }
  return state;
};

export default pageTitleReducer;
