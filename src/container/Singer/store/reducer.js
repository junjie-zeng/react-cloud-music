import { CHANGE_ARTIST, CHANGE_SONGS_OF_ARTIST, CHANGE_ENTER_LOADING } from './aciton-type'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    artist: {},
    songsOfArtist: [],
    loading: true
});



export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_ARTIST:
            return state.set('artist', action.data);
        case CHANGE_SONGS_OF_ARTIST:
            return state.set('songsOfArtist', action.data);
        case CHANGE_ENTER_LOADING:
            return state.set('loading', action.data);
        default:
            return state;
    }
}