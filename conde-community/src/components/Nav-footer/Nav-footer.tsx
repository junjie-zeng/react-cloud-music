import * as React from 'react'
import { withRouter } from 'react-router-dom';
//路由
import { HashRouter, Switch,Route,Link,Redirect} from 'react-router-dom';

// antd-mobile
import { TabBar } from 'antd-mobile'

interface TabBars{
    title:string;
    icon:string;
    selectedIcon:string;
    path:string;

}

class NavFooter extends React.Component<any,any> {
    constructor(props:any){
        super(props)
        
    }
  

    render(){
        const { tabBars } = this.props
       
        let path = this.props.location.pathname;
        console.log(path)
        if(path === '/'){
            //得到一个重定向的路由路径
           return <Redirect to='/homepage'/>
        }

        return(
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
                                selected = {path == item.path} 
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
                                onPress={()=>{this.props.history.replace(item.path)}}
                                >
                            </TabBar.Item>
                        ))
                    }
                </TabBar>
            </div>
        )
    }
}



export default withRouter(NavFooter)