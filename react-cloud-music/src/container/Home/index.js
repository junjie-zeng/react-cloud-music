import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Top ,Tab,TabItem} from './style'
import { NavLink } from 'react-router-dom' // 利用navLink组件进行路由跳转

function Home (props){
    const { route } = props
    console.log(route)
    return(
        <div>
            <Top>
                <span className="iconfont menu">&#xe65c;</span>
                <span className="title">WebApp</span>
                <span className="iconfont search">&#xe62b;</span>
            </Top>
            <Tab>
                <NavLink to = '/recommend' activeClassName = 'selected'>
                    <TabItem><span>推荐</span></TabItem>
                </NavLink>
                <NavLink to = '/singers' activeClassName = 'selected'>
                    <TabItem><span>歌手</span></TabItem>
                </NavLink>
                <NavLink to = '/rank' activeClassName = 'selected'>
                    <TabItem><span>等级</span></TabItem>
                </NavLink>
            </Tab>
            
            {/* renderRoutes 读取路由配置转化为 Route 标签 */}
            {renderRoutes (route.routes)}
        </div>
    )
}

export default React.memo(Home)