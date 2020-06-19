import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import Scorll from '../../baseUI/scroll'
import { NavContainer,ListContainer,List,ListItem} from "./style";
function Singers() {
    let [category, setCategory] = useState('')
    let [alpha, setAlpha] = useState('')
    // 分类事件
    let handleUpdateCategory = (val) => {
        setCategory(val)
    }
    // 字母事件
    let handleUpdateAlpha = (val) => {
        setAlpha(val)
    }


    //mock 数据
    const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
        return {
            picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
            name: "隔壁老樊",
            accountId: 277313426,
        }
    });

    // 渲染函数 返回歌手列表
    const renderSingerList = () => {
        return (
            <List>
                {
                    singerList.map((item, index) => {
                        return (
                            <ListItem key={item.accountId + index}>
                                <div className="img_wrapper">
                                    <img src={`${item.picUrl}?param=300*300`} width="100%" height="100%" />

                                </div>
                                <span className="name">{item.name}</span>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    return (
        <NavContainer>
            <Horizen list={categoryTypes} title={"分类 (默认热门):"}
                oldVal={category}
                handleClick={handleUpdateCategory}>

            </Horizen>
            <Horizen list={alphaTypes} title={"首字母:"}
                oldVal={alpha}
                handleClick={handleUpdateAlpha}>

            </Horizen>
            <ListContainer>
                <Scorll>
                    {renderSingerList()}
                </Scorll>
            </ListContainer>
        </NavContainer>

    )

}

export default React.memo(Singers)





















































//test
    // // 列表
    // const [data,setData] = useState({hits:[]})
    // // 初始化字符串
    // const [query,setQuery] = useState('react')

    // useEffect(()=>{
    //     let ignore = false;
    //     async function fetchData(){
    //         const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query)
    //         if(!ignore){
    //             // 赋值
    //             setData(result.data)
    //         }
    //     }
    //     fetchData()
    //     return()=>{
    //         ignore = true
    //     }
    // },[query])

    // return(
    //     <div>
    //         <input value = {query} onChange = {e=>setQuery(e.target.value)}/>
    //         <ul>
    //             {
    //                 data.hits.map(item=>(
    //                     <li key={item.objectID}>
    //                         {item.title}
    //                     </li>
    //                 ))
    //             }

    //         </ul>
    //     </div>
    // )