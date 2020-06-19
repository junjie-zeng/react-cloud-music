import * as acType from './action-type'
import { fromJS } from 'immutable';// 将 JS 对象转换成 immutable 对象
import { getBannerRequest,getRecommendListRequest} from '../../../api/request'


/*
    同步action
*/
// 获取banner同步action
export const changeBannerList =(data)=>({
    type:acType.CHANGE_BANNER,
    data:fromJS(data)
})
// 获取推荐列表同步action
export const changeRecommendList = (data)=>({
    type:acType.CHANGE_RECOMMEND_LIST,
    data:fromJS(data)
})

export const changeEnterLoading = (data)=>({
    type:acType.CHANGE_ENTER_LOADING,
    data
})










/*
     异步action
*/

// 获取banner异步action
export const getBannerList = ()=>{
    return async (dispatch)=>{
        try{
            let res = await getBannerRequest()
           // console.log(res)
            dispatch(changeBannerList(res.banners))
        }catch(err){
            console.log('getBannerList',err)
        }
    }
}

// 获取推荐列表同步action
export const getRecommendList = ()=>{
    return async (dispatch)=>{
        try{
            let res = await getRecommendListRequest()
           // console.log(res)
            dispatch(changeRecommendList(res.result))
            dispatch(changeEnterLoading(false))
        }catch(err){
            console.log('getRecommendList',err)
        }
    }
}   