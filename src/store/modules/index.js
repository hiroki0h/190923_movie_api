import { combineReducers } from 'redux';
import INIT from "./INIT";

// 내장함수 - 리듀서를 하나로 합친데!! 
// - 서브리듀서 가 모여서 루트리듀서가 된다구
export default combineReducers({
    INIT
});