// 引入api
import {reqTopics,reqTopicDetail} from './../api'
import {INCREMENT,DECREMENT,GET_SUCCESS,GET_FAIL,GET_TOPIC_LIST,GET_TOPIC_DETAIL} from './action-types'


interface Increment{
    type:INCREMENT
}

interface Decrement{
    type:DECREMENT
}

export type EnthusiasmAction = Increment | Decrement

// test
export const increment = ()=>{
    return (dispatch:any)=>{
        dispatch({type:INCREMENT})
    }
}
// test
export const decrement = ()=>{
    return (dispatch:any)=>{
        dispatch({type:DECREMENT})

    }
}


// 获取主题
interface GetTopic{
    page:number
    limit:number
}

// 获取所有主题异步action
export const getTopic =({page,limit}:GetTopic)=>{
    return async (dispatch:any)=>{
        const res = await reqTopics({page,limit})
        if(res.status == 200){
            const data = res.data.data
            //console.log(data)
            dispatch({type:GET_TOPIC_LIST,data})
        }
    }
}

// 获取主题详情异步action
export const getTopicDetail = (id:string)=>{
    return async (dispatch:any)=>{
        const res = await reqTopicDetail(id)
        if(res.status){
            const data = res.data.data
            dispatch({type:GET_TOPIC_DETAIL,data})
        }
        
    }

}