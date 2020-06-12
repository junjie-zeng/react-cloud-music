import React from 'react'
import { renderRoutes } from 'react-router-config'
function Home (props){
    const { route } = props
    console.log(route)
    return(
        <div>
            主页面
            {renderRoutes (route.routes)}
        </div>
    )
}

export default React.memo(Home)