
import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../container/Recommend/store/index'
import { reducer as singersReducer } from '../container/Singers/store/index'
import { reducer as rankReducer } from '../container/Rank/store/index'
import { reducer as albumReducer} from '../container/Album/store/index'
import { reducer as singerInfoReducer} from '../container/Singer/store/index'
import { reducer as playerReducer } from "../container/Player/store/index";

export default combineReducers({
    recommend:recommendReducer,
    singers:singersReducer,
    rank:rankReducer,
    album:albumReducer,
    singerInfo:singerInfoReducer,
    player: playerReducer
})