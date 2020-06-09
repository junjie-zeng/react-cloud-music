// 引入api
import {getTopics} from './../api'
import {INCREMENT,DECREMENT,GET_SUCCESS,GET_FAIL} from './action-types'


interface Increment{
    type:INCREMENT
}

interface Decrement{
    type:DECREMENT
}
// 获取主题
interface GetTopic{
    page:number
    limit:number
}

export type EnthusiasmAction = Increment | Decrement

// test
export const increment = ()=>{
    return (dispatch:any)=>{
        dispatch({type:INCREMENT})
    }
}

export const decrement = ()=>{
    return (dispatch:any)=>{
        dispatch({type:DECREMENT})

    }
}

// 获取所有主题异步action
export const getTopic =({page,limit}:GetTopic)=>{
    return async (dispatch:any)=>{
        const res = await getTopics({page,limit})
        if(res.status == 200){
            const data = res.data.data
            //console.log(data)
            dispatch({type:GET_SUCCESS,data})
        }
    }
}