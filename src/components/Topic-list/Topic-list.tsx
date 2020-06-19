import * as React from 'react'
import { NavBar, Icon ,PullToRefresh,WhiteSpace,Card} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
interface Props{
    topicList:[];
     history:any
}

class TopicList extends React.Component<any> {
    constructor(props:any){
        super(props)
    }
    
    
    // 查看详情
    handleSeeDetails = (id:string)=>{
        console.log(32)
         this.props.history.push(`/topicdetail/${id}`)
    }

    render(){
        const {topicList} = this.props
        console.log(topicList)
        return(
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
                                <Card.Body onClick ={()=>this.handleSeeDetails(v.id)}>
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
        )
    }
}

export default withRouter(TopicList)