
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../container/Recommend/store/index'





export default combineReducers({
    recommend:recommendReducer
})