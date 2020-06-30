import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from './action-type'
import { getAlbumDetailRequest } from '../../../api/request'
import { fromJS } from 'immutable'




// 修改专辑同步action
const changeCurrentAlbum = (data)=>({
    type:CHANGE_CURRENT_ALBUM,
    data:fromJS(data)
})

// 修改加载效果通过action
const changeEnterLoading = (data)=>({
    type:CHANGE_ENTER_LOADING,
    data
})

// 获取专辑列表
export const getAlbumList = (id)=>{
    return async (dispatch)=>{
        try{
            let res = await getAlbumDetailRequest(id)
            //console.log(res)
            dispatch(changeEnterLoading(true))
            dispatch(changeCurrentAlbum(res.playlist))
            dispatch(changeEnterLoading(false))
        }catch(err){
            console.log("getAlbumList",err)
        }
    }
}