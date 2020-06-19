import * as acType from './action-type'
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS({
    bannerList: [],
    recommendList: [],
    enterLoading:true
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case acType.CHANGE_BANNER:
            return state.set('bannerList', action.data)

        case acType.CHANGE_RECOMMEND_LIST:
            return state.set('recommendList',action.data)

        case acType.CHANGE_ENTER_LOADING:
            return state.set('enterLoading',action.data)
            
        default:
            return state
    }
}