import * as React from 'react'
import { connect } from 'react-redux'
//路由
import { HashRouter, Switch,Route,Link,Redirect} from 'react-router-dom';
// 组件
import HomePage from './../Home-page/Home-page'
import Classify from './../Classify/Classify'
import TopicDetail from './../TopicDetail/TopicDetail'
import NavFooter from '../../components/Nav-footer/Nav-footer'
// antd-mobile
import { TabBar } from 'antd-mobile'

interface TabBars{
    title:string;
    icon:string;
    selectedIcon:string;
    path:string;

}

class Index extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        this.state = {
            tabBars:[
                {title:'首页',icon:'shouye.svg',selectedIcon:'_shouye.svg',path:'/homepage'},
                {title:'分类',icon:'fenlei.svg',selectedIcon:'_fenlei.svg',path:'/classify'},
                {title:'消息',icon:'msg.svg',selectedIcon:'_msg.svg',path:'/massage'},
                {title:'我的',icon:'wode.svg',selectedIcon:'_wode.svg',path:'/my'}
            ]
        }
    }
    

    render(){
        const { tabBars } = this.state
       
        let path = this.props.location.pathname;
        console.log(path)
        if(path === '/'){
            // 得到一个重定向的路由路径
           return <Redirect to='/homepage'/>
        }

        // 查找当前路径是否等于tabbar里面的路径，如果相等说明当前页需要tabbar否则null
        const currentNav = tabBars.find((v:TabBars) => v.path == path);
        return(
            <div>
                <div>
                    <Switch>
                        <Route path = '/homepage' component = {HomePage}></Route>
                        <Route path = '/classify' component = {Classify}></Route>
                        <Route path = '/massage' component = {HomePage}></Route>
                        <Route path = '/my' component = {HomePage}></Route>
                        <Route path = '/topicdetail/:id' component = {TopicDetail}></Route>
                    </Switch>
                </div>

                {currentNav ? <NavFooter tabBars = {tabBars}/> :null}
            </div>
        )
    }
}


function mapStateToProps() {
    return {
        
    }
}

export default connect(mapStateToProps,{})(Index)