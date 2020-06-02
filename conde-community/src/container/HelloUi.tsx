import * as React from 'react'
import { connect } from 'react-redux';
import * as actions from '../redux/actions'
import {StoreState} from '../redux/state'

export interface Props{
    name:string;
    num?:number;
    onIncrement?:()=>void;
    onDecrement?:()=>void;

}

function Hello({num = 1 ,onIncrement,onDecrement,name}:Props){
    return(

        <div className = "hello">
            <div >
                hello,{name}
            </div>
            <div>
                <button onClick = {onIncrement}>+</button>
                <button onClick = {onDecrement}>-</button>
                {getExclamationMarks(num)}
            </div>
            
            
        </div>
    )
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default Hello;