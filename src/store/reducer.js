
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../container/Recommend/store/index'
import { reducer as singersReducer } from '../container/Singers/store/index'
import { reducer as rankReducer } from '../container/Rank/store/index'



export default combineReducers({
    recommend:recommendReducer,
    singers:singersReducer,
    rank:rankReducer
})