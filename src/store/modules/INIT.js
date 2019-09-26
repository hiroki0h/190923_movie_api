import { createAction, handleActions } from 'redux-actions';
// action type 정의
const MENU_OPEN = 'MENU_OPEN';
const RESIZE = 'RESIZE';
const PAGE_NAME = 'PAGE_NAME';
const SEARCH_OPEN = 'SEARCH_OPEN';
const CURRENT_PAGE = 'CURRENT_PAGE';
const START_END_PAGE = 'START_END_PAGE';

// 생성함수 정의
export const menuOpen = createAction(MENU_OPEN, openMenu => openMenu);
export const searchOpen = createAction(SEARCH_OPEN, openMenu => openMenu);
export const resize = createAction(RESIZE);
export const pagename = createAction(PAGE_NAME, pagename => pagename);
export const currentPage = createAction(CURRENT_PAGE, pagename => pagename);
export const startEndPage = createAction(START_END_PAGE,(start,end) => ({start,end}));

// 초기값
const initalState = {
    current: 1,
    start: 0,
    end: 5, // Pagination 관련
    openMenu : true,
    pagename : 'nowPlaying',
    screenWidth : 0,
    screenHeight : 0
};
export default handleActions(
    {
        [MENU_OPEN] : (state, action) => ({
            ...state,
            openMenu : ! state.openMenu
        }),
        [SEARCH_OPEN] : (state, action) => ({
            ...state,
            openMenu : action.payload !== true && true
        }),
        [PAGE_NAME] : (state, action) => ({
            ...state,
            pagename : action.payload
        }),
        [CURRENT_PAGE] : (state, action) => ({
            ...state,
        }),
        [START_END_PAGE] : (state, action) => ({
            ...state,
        })
    }, initalState
);