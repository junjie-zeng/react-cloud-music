import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import Scorll from '../../baseUI/scroll'
import { NavContainer, ListContainer, List, ListItem } from "./style";
import {
    getHotSingerList, // 加载热门歌手列表
    refreshMoreHotSingerList, // 加载更多热门歌手列表
    getSingerList, // 加载对应类别的歌手
    refreshMoreSingerList, // 加载更多歌手
    changePageCount,
    changeEnterLoading,
    changePullUpLoading,
    changePullDownLoading
} from './store/action'
import { connect } from 'react-redux'
function Singers(props) {
    //mock 数据
    // const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    //     return {
    //         picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
    //         name: "隔壁老樊",
    //         accountId: 277313426,
    //     }
    // });

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

    // props解构
    const {singerList, enterLoading,pullUpLoading,pullDownLoading,pageCount} = props
    const { getHotSingerDispatch,updateDispatch,pullUpRefreshDispatch,pullDownRefreshDispatch } = props


    useEffect(()=>{
        // 获取热门歌手
        getHotSingerDispatch()
    },[])

    const singerListJs = singerList?singerList.toJS():[]

    // 渲染函数 返回歌手列表
    const renderSingerList = () => {
        return (
            <List>
                {
                    singerListJs.map((item, index) => {
                        return (
                            <ListItem key={item.accountId +""+ index}>
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

const mapStateToProps = (state)=>({
    singerList:state.getIn(['singers','singerList']),
    enterLoading:state.getIn(['singers','enterLoading']),
    pullUpLoading:state.getIn(['singers','pullUpLoading']),
    pullDownLoading:state.getIn(['singers','pullDownLoading']),
    pageCount:state.getIn(['singers','pageCount'])
})

const mapDispatchToProps = (dispatch) => {
    return {
      getHotSingerDispatch() {
        dispatch(getHotSingerList());
      },
      updateDispatch(category, alpha) {
        dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
        dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
        dispatch(getSingerList(category, alpha));
      },
      // 滑到最底部刷新部分的处理
      pullUpRefreshDispatch(category, alpha, hot, count) {
        dispatch(changePullUpLoading(true));
        dispatch(changePageCount(count+1));
        if(hot){
          dispatch(refreshMoreHotSingerList());
        } else {
          dispatch(refreshMoreSingerList(category, alpha));
        }
      },
      //顶部下拉刷新
      pullDownRefreshDispatch(category, alpha) {
        dispatch(changePullDownLoading(true));
        dispatch(changePageCount(0));//属于重新获取数据
        if(category === '' && alpha === ''){
          dispatch(getHotSingerList());
        } else {
          dispatch(getSingerList(category, alpha));
        }
      }
    }
  };   

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Singers))





















































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