import * as React from 'react'

interface Props{
    name:string,
    age:number
}


class Hello extends React.Component<Props>{
   
    render(){
        const {name,age} = this.props
        return(

            <div>
                hello,我叫{name}我{age}岁了
            </div>
        )
    }
}

export default Hello