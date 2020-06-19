import * as React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon ,PullToRefresh,WhiteSpace,Card} from 'antd-mobile';
import {getTopic} from '../../redux/actions'
import TopicList from '../../components/Topic-list/Topic-list'
interface Props{
    getTopic:Function,
    topicList:[]
}

class HomePage extends React.Component<Props> {
    constructor(props:Props){
        super(props)
    }
    
    componentDidMount(){
        const {getTopic} = this.props

        // 获取所有主题
        getTopic({page:1,limit:10}) 
    }

   
    render(){
        const {topicList} = this.props
        return(
            <div>
                <div className = "main-header">
                    <NavBar mode="light" >CNode.js中文社区</NavBar>
                </div>
                <TopicList topicList = {topicList}/>
            </div>
        )
    }
}

interface StateToProps{
    topic:any
}

function mapStateToProps(state:StateToProps) {
    return {
        topicList:state.topic.topicList
    }
}

export default connect(mapStateToProps,{getTopic})(HomePage)