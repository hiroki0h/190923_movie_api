import { createAction, handleActions } from 'redux-actions';
// action type
const MENUOPEN = 'MENUOPEN';
// 생성함수 정의
export const menuOpen = createAction(MENUOPEN, openMenu => openMenu);
// 초기값
const initalState = {
    openMenu : true
};
export default handleActions(
    {
        [MENUOPEN] : (state, action) => ({
            ...state,
            openMenu : ! state.openMenu
        })
    }, initalState
);
