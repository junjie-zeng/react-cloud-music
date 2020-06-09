import * as React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon ,PullToRefresh,WhiteSpace,Card} from 'antd-mobile';
import {getTopic} from '../../redux/actions'

interface Props{
    getTopic:Function,
    topicList:[]
}

class Main extends React.Component<Props> {
    constructor(props:Props){
        super(props)
    }
    
    componentDidMount(){
        
        const {getTopic} = this.props
        // 获取所有主题
        getTopic({page:1,limit:10}) 
    }

    // 查看详情
    handleSeeDetails = ()=>{
        console.log(32)
    }
    render(){
        const {topicList} = this.props
        //console.log("主题数据",topicList)// "https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        return(
            <div>
                <div className = "main-header">
                    <NavBar mode="light" >CNode.js中文社区</NavBar>
                </div>
                <div className = "main-list">
                    {
                        topicList.map((v:any,i:number)=>(
                            <div key = {i}>
                                <WhiteSpace size="lg" />
                                <Card full>
                                    <Card.Header
                                        title={v.author.loginname} 
                                        thumb={v.author.avatar_url}
                                        thumbStyle={{width:'40px',height:'40px',borderRadius:'50%'}}
                                        extra={<div className = "list-item-box"><div>{v.tab == "share" ? '分享':v.tab == "ask"?'问答':'其他'}</div></div>}
                                    />
                                    <Card.Body onClick ={this.handleSeeDetails}>
                                        <div>{v.title}</div>
                                    </Card.Body>
                                    {/*  content="8天前" */}
                                    <Card.Footer extra={
                                    <div className = "list-item-opertion">
                                        <div>
                                            <span className = "iconfont icon-pinglun"></span>
                                            <span>{v.reply_count}</span>
                                        </div>
                                        <div>
                                            <span className = "iconfont icon-ai-eye"></span>
                                            <span>{v.visit_count}</span>
                                        </div>
                                    </div>} />
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

interface StateToProps{
    getTopic:any
}

function mapStateToProps(state:StateToProps) {
    return {
        topicList:state.getTopic.topicList
    }
}

export default connect(mapStateToProps,{getTopic})(Main)