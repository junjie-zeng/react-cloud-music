import { combineReducers } from 'redux'
import {StoreState} from './state'
// import {EnthusiasmAction} from './actions'
import {INCREMENT,DECREMENT} from './action-types'

const initUser:StoreState = {
    name:'123',
    num:1,
}

 function enthusiasm(state=initUser,action:any){
     console.log(action)
    switch(action.type){
        case 'INCREMENT':
            return {...state,num:state.num+1}
        case 'DECREMENT':
            return {...state,num:Math.max(1,state.num-1)}
    }

    return state
}


export default combineReducers({
    enthusiasm
})

