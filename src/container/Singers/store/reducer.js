import { fromJS } from 'immutable'
import * as acType from './action-type'
const defaultState = fromJS({
    singerList:[],
    enterLoading:true, // 控制进场loading
    pullUpLoading:false, // 控制上拉加载动画
    pullDownLoading:false, //控制下拉加载动画
    pageCount:0 // 分页
})

export default (state = defaultState,action)=>{
    switch(action.type){
        // 歌手列表
        case acType.CHANGE_SINGER_LIST:
            return state.set('singerList',action.data)
        // 分页
        case acType.CHANGE_PAGE_COUNT:
            return state.set('pageCount',action.data)
        // 进场loading
        case acType.CHANGE_ENTER_LOADING:
            return state.set('enterLoading',action.data)
        // 上拉loading
        case acType.CHANGE_PULLUP_LOADING:
            return state.set('pullUpLoading',action.data)
        // 下拉loading
        case acType.CHANGE_PULLDOWN_LOADING:
            return state.set('pullDownLoading',action.data)
        // 默认
        default:
            return state
    }
}