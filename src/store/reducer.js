
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../container/Recommend/store/index'
import { reducer as singersReducer } from '../container/Singers/store/index'




export default combineReducers({
    recommend:recommendReducer,
    singers:singersReducer
})