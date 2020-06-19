import { combineReducers } from 'redux'
import {StoreState} from './state'
import {EnthusiasmAction} from './actions'
import {INCREMENT,DECREMENT,GET_SUCCESS,GET_FAIL,GET_TOPIC_LIST,GET_TOPIC_DETAIL} from './action-types'

// test
const initTest:StoreState = {
    name:'test',
    num:1,
}

 function enthusiasm(state = initTest,action:EnthusiasmAction){
    switch(action.type){
        case INCREMENT:
            return {...state,num:state.num+1}
        case DECREMENT:
            return {...state,num:Math.max(1,state.num-1)}
    }
    return state
}




const initTopic = {
    topicList:[],
    topicDetail:{}
}

// 主题
function topic(state=initTopic,action:any){
    switch(action.type){
        case GET_TOPIC_LIST:
            return {...state,topicList:action.data}
        case GET_TOPIC_DETAIL:
            return {...state,topicDetail:action.data}
            
    }
    return state
}


export default combineReducers({
    enthusiasm,
    topic
})

