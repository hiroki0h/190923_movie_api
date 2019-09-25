import { createAction, handleActions } from 'redux-actions';
// action type
const MENUOPEN = 'MENUOPEN';
const RESIZE = 'RESIZE';
const PAGENAME = 'PAGENAME';
// 생성함수 정의
export const menuOpen = createAction(MENUOPEN, openMenu => openMenu);
export const resize = createAction(RESIZE);
export const pagename = createAction(PAGENAME, nowPlaying => nowPlaying);

// 초기값
const initalState = {
    openMenu : true,
    pagename : 'nowPlaying',
    screenWidth : 0,
    screenHeight : 0
};
export default handleActions(
    {
        [MENUOPEN] : (state, action) => ({
            ...state,
            openMenu : ! state.openMenu
        }),
        [PAGENAME] : (state, action) => ({
            ...state,
            pagename : action.payload
        })
    }, initalState
);
