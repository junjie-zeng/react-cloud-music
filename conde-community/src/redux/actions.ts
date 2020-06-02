import {INCREMENT,DECREMENT} from './action-types'

// interface Increment{
//     type:INCREMENT
// }

// interface Decrement{
//     type:DECREMENT
// }

// export type EnthusiasmAction = Increment | Decrement

// export function increment(){
//     // return {
//     //     type:INCREMENT
//     // }
//     //return 'INCREMENT'
//     return (dispatch:any)=>{
//         dispatch({type:'INCREMENT'})
//     }
// }

// export function decrement(){
//     // return{
//     //     type:DECREMENT
//     // }

//     return 'DECREMENT'
// }

export const increment = ()=>{
    return (dispatch:any)=>{
        console.log(dispatch)
        dispatch({type:'INCREMENT'})
    }
}

export const decrement = ()=>{
    return (dispatch:any)=>{
        console.log(dispatch)
        dispatch({type:'DECREMENT'})

    }
}
