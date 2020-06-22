import { getHotSingerListRequest, getSingerListRequest } from "../../../api/request";
import {
    CHANGE_SINGER_LIST,
    CHANGE_CATOGORY,
    CHANGE_ALPHA,
    CHANGE_PAGE_COUNT,
    CHANGE_PULLUP_LOADING,
    CHANGE_PULLDOWN_LOADING,
    CHANGE_ENTER_LOADING
} from './action-type';
import { fromJS } from 'immutable';

// 歌手列表同步action
const changeSingerList = (data) => ({
    type: CHANGE_SINGER_LIST,
    data: fromJS(data)
})

// 分页同步action
export const changePageCount = (data) => ({
    type: CHANGE_PAGE_COUNT,
    data//:fromJS(data)
})

// 进场loading同步action
export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data//:fromJS(data)
})

// 滑动最底部loading同步action
export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
})

// 顶部下拉刷新同步action
export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
})


/*
    异步action

*/

// 获取歌手列表
export const getHotSingerList = () => {
    return async (dispatch) => {
        try {
            let res = await getHotSingerListRequest(0)
            let data = res.artists
            dispatch(changeSingerList(data))
            dispatch(changeEnterLoading(false))
            dispatch(changePullDownLoading(false))
        } catch (err) {
            console.log('getHotSingerList', err)
        }
    }
}

// 加载更多热门歌手
export const refreshMoreHotSingerList = () => {
    return async (dispatch, getState) => {
        try {
            const pageCount = getState().getIn(['singers', 'pageCount'])
            const singerList = getState().getIn(['singers', 'singerList']).toJS()
            let res = await getHotSingerListRequest(pageCount)
            let data = [...singerList, ...res.artists]
            dispatch(changeSingerList(data))
            dispatch(changePullUpLoading(false))
        }catch(err){
            console.log('refreshMoreHotSingerList',err)
        }
    }
}

// 加载对应类别的歌手
export const getSingerList = (category, alpha) => {
    return async (dispatch, getState) => {
        try {
            const res = await getSingerListRequest(category, alpha, 0)
            const data = res.artists
            dispatch(changeSingerList(data))
            dispatch(changeEnterLoading(false))
            dispatch(changePullDownLoading(false))
        } catch (err) {
            console.log('getSingerList', err)
        }
    }
}

// 加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
    return async (dispatch, getState) => {
        try {
            const pageCount = getState().getIn(['singers', 'pageCount'])
            const singerList = getState().getIn(['singers', 'singerList']).toJS()
            const res = await getSingerListRequest(category, alpha, pageCount)
            let data = [...singerList, ...res.artists]
            dispatch(changeSingerList(data))
            dispatch(changePullUpLoading(false))
        } catch (err) {
            console.log('refreshMoreSingerList', err)
        }
    }
}