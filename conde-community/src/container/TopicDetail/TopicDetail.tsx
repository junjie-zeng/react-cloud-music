import * as React from 'react'
import { connect } from 'react-redux'

class TopicDetail extends React.Component<any> {
    render(){
        return(
            <div>
                详情
            </div>
        )
    }
}

function mapStateToProps() {
    return {
        
    }
}

export default connect(mapStateToProps,{})(TopicDetail)