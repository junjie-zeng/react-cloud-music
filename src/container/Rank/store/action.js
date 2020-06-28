import {CHANGE_RANK_LIST,CHANGE_LOADING} from './action-type'
import { fromJS } from 'immutable'
import { getRankListRequest } from '../../../api/request'

// 修改排行榜列表同步action
const changeRankList = (data)=>({
    type:CHANGE_RANK_LIST,
    data:fromJS(data)
})

// 修改加载效果同步action 
const changeLoading = (data)=>({
    type:CHANGE_LOADING,
    data
})

// 获取排行榜列表异步action
export const getRankList = ()=>{
    return async (dispatch)=>{
        const res = await getRankListRequest()
        //console.log('rank',res)
        dispatch(changeRankList(res.list))
        dispatch(changeLoading(false))
    }
}