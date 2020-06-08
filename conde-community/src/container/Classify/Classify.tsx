import * as React from 'react'
import { connect } from 'react-redux'

class Classify extends React.Component<any> {
    render(){
        return(
            <div>
                Classify
            </div>
        )
    }
}

function mapStateToProps() {
    return {
        
    }
}

export default connect(mapStateToProps,{})(Classify)