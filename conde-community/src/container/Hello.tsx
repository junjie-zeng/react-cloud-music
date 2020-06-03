import * as React from 'react'
import { connect } from 'react-redux'
import {increment,decrement} from '../redux/actions'
import {StoreState,StateType} from '../redux/state'
// import { Button } from 'antd-mobile'
//import Hello from './HelloUi'
import '../App.css'
import 'antd-mobile/dist/antd-mobile.css';

export interface Props{
    name:string;
    num?:number;
    increment?:()=>any;
    decrement?:()=>any;
    // Button:any;
}

class Hello extends React.Component<Props> {
    constructor(props:Props){
        super(props)
    }
    render(){
        const {name,num,increment,decrement} = this.props

        return(

            <div className = "hello">
                <div >
                    hello,{name}
                </div>
                <div>
                    <button onClick = {increment}>+</button>
                    <button onClick = {decrement}>-</button>
                    {/* {getExclamationMarks(num)} */}
                    {num}
                    {/* <Button></Button> */}
                </div>
                
                
            </div>
        )
    }
}



 function mapStateToProps({enthusiasm}:StateType) {
    return {
        num:enthusiasm.num,
        name:enthusiasm.name
    }
}




function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

//export default Hello
export default connect(mapStateToProps,{increment,decrement})(Hello)