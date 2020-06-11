import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '../container/Home' // 主页
import Recommend from '../container/Recommend' // 推荐
import Singers from '../container/Singers' // 歌手
import Rank from '../container/Rank' // 等级

export default [
    {
        path:'/',
        component:Home,
        routes:[
            {
                path:'/',
                exact:true,
                render:()=>(
                    <Redirect to ={'/recommend'}/>
                )
            },
            {
                path:'/recommend',
                component:Recommend
            },
            {
                path:'/singers',
                component:Singers
            },
            {
                path:'/rank',
                component:Rank
            }
        ]
    }
]