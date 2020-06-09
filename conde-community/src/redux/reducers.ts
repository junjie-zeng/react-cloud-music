import { combineReducers } from 'redux'
import {StoreState} from './state'
import {EnthusiasmAction} from './actions'
import {INCREMENT,DECREMENT,GET_SUCCESS,GET_FAIL} from './action-types'

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
    topicList:[]
}
//
function getTopic(state=initTopic,action:any){
    switch(action.type){
        case GET_SUCCESS:
            return {...state,topicList:action.data}
    }
    return state
}


export default combineReducers({
    enthusiasm,
    getTopic
})

