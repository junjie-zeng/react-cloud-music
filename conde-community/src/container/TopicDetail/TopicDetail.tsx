import * as React from 'react'
import { connect } from 'react-redux'
import { NavBar,Icon} from 'antd-mobile';
import {getTopicDetail} from '../../redux/actions'
class TopicDetail extends React.Component<any> {
    componentDidMount(){
        // 
        const {match,getTopicDetail} = this.props    
		getTopicDetail(match.params.id)
    }
    
    render(){
        const { topicDetail } = this.props

        console.log(topicDetail)
        
        if(!topicDetail || !topicDetail.author){
            return null
        }
        
        return(
            <div>
                <div className = "main-header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.goBack()}
                        rightContent={
                            <span className ="iconfont icon-shoucang1"></span>
                        }
                    >
                        <div className = "detail-center-wap">
                            <img src={topicDetail.author.avatar_url} />
                            <span>
                                {topicDetail.author.loginname}
                            </span>
                        </div>
                    </NavBar>
                </div>
                <div className = "detail-content">
                    <div dangerouslySetInnerHTML={{__html:topicDetail && topicDetail.content}}></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state:any) {
    return {
        topicDetail:state.topic.topicDetail
    }
}

export default connect(mapStateToProps,{getTopicDetail})(TopicDetail)