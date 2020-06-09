import * as React from 'react'
import { connect } from 'react-redux'
//路由
import { HashRouter, Switch,Route,Link,Redirect} from 'react-router-dom';
// 组件
import Main from './../Main/Main'
import Classify from './../Classify/Classify'
import TopicDetail from './../TopicDetail/TopicDetail'
// antd-mobile
import { TabBar } from 'antd-mobile'

interface TabBars{
    title:string;
    icon:string;
    selectedIcon:string;
    selected:boolean;
    path:string;

}

class Index extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            tabBars:[
                {title:'首页',icon:'shouye.svg',selectedIcon:'_shouye.svg',selected:true,path:'/main'},
                {title:'分类',icon:'fenlei.svg',selectedIcon:'_fenlei.svg',selected:false,path:'/classify'},
                {title:'消息',icon:'msg.svg',selectedIcon:'_msg.svg',selected:false,path:'/massage'},
                {title:'我的',icon:'wode.svg',selectedIcon:'_wode.svg',selected:false,path:'/my'}
            ]
        }
    }
    // 设置tabbar
    handleSelectTabbar =(index:number,item:TabBars)=>{
        const { tabBars } = this.state
        const { history } = this.props
        tabBars.forEach((v:any,i:number)=>i===index ? v.selected=true:v.selected=false);
        history.push(item.path)
        this.setState({
            tabBars
        })
    }

    render(){
        const { tabBars } = this.state

        let path = this.props.location.pathname;
        if(path === '/'){
            //得到一个重定向的路由路径
           return <Redirect to='/main'/>
        }

        return(
            <div>
                <div>
                    <Switch>
                        <Route path = '/main' component = {Main}></Route>
                        <Route path = '/classify' component = {Classify}></Route>
                        <Route path = '/massage' component = {Main}></Route>
                        <Route path = '/my' component = {Main}></Route>
                        {/* <Route path = '/topicdetail' component = {TopicDetail}></Route> */}
                    </Switch>
                </div>
                <div className = "footer">
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                        {
                            tabBars.map((item:any,index:number)=>(
                                <TabBar.Item 
                                    key = {index}
                                    title={item.title} 
                                    selected = {item.selected} 
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url('+require(`./../../assets/images/${item.icon}`)+') center center /  21px 21px no-repeat' }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: 'url('+require(`./../../assets/images/${item.selectedIcon}`)+') center center /  21px 21px no-repeat' }}
                                    />
                                    }
                                    onPress={()=>{this.handleSelectTabbar(index,item)}}
                                    >
                                </TabBar.Item>
                            ))
                        }
                    </TabBar>
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {
        
    }
}

export default connect(mapStateToProps,{})(Index)