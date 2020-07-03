import React, { useState, useEffect ,useContext} from 'react'
import { connect } from 'react-redux'
import  LazyLoad, {forceCheck} from 'react-lazyload';
import { renderRoutes } from 'react-router-config'
import { categoryTypes, alphaTypes } from '../../api/config'
import Horizen from '../../baseUI/horizen-item'
import Loading from '../../baseUI/loading';
import Scorll from '../../baseUI/scroll'
import { NavContainer, ListContainer, List, ListItem } from "./style";
import { getHotSingerList, getByTypeSingerList,getPullUpRefresh,getPullDownRefresh } from './store/action'
import { CategoryDataContext ,CHANGE_CATEGORY,CHANGE_ALPHA} from './data'




function Singers(props) {
    // props解构
    //const { getHotSingerDispatch,updateDispatch,pullUpRefreshDispatch,pullDownRefreshDispatch } = props
    const {singerList, enterLoading,pullUpLoading,pullDownLoading,pageCount} = props
    const { getHotSingerList ,getByTypeSingerList,getPullUpRefresh,getPullDownRefresh} = props
    // 定义状态
    // let [category, setCategory] = useState('')
    // let [alpha, setAlpha] = useState('')
    
    let { data,dispatch } = useContext(CategoryDataContext)
    // 拿到category与alpha值
    const { category,alpha} = data.toJS() 


    // 分类事件
    let handleUpdateCategory = (newVal) => {
        //console.log(newVal)
        //setCategory(newVal)
        //updateDispatch(category,val)
        dispatch({type:CHANGE_CATEGORY,data:newVal})
        getByTypeSingerList(newVal,alpha)
    }
    // 字母事件
    let handleUpdateAlpha = (newVal) => {
        console.log(newVal)
        //setAlpha(newVal)
        //updateDispatch(alpha,val)
        dispatch({type:CHANGE_ALPHA,data:newVal})
        getByTypeSingerList(category,newVal)
    }

    const handlePullUp = () => {
        console.log("上拉")
        //pullUpRefreshDispatch (category, alpha, category === '', pageCount);
        getPullUpRefresh(category, alpha, category === '', pageCount)
    };
      
    const handlePullDown = () => {
        console.log("下拉")
        //pullDownRefreshDispatch (category, alpha);
        getPullDownRefresh(category, alpha)
    };

    const enterDeatil = (id)=>{
        console.log('id',id)
        props.history.push(`/singers/${id}`)
    }

    
    useEffect(()=>{
        // 获取热门歌手
        if(!singerList.size){
            getHotSingerList()
            
        }
        
    },[])

    const singerListJs = singerList ? singerList.toJS() : []

    // 渲染函数 返回歌手列表
    const renderSingerList = () => {
      
        return (
            <List>
                {
                    singerListJs.map((item, index) => {
                        return (
                            <ListItem key={item.accountId +""+ index} onClick = {()=>{enterDeatil(item.id)}}>
                                <div className="img_wrapper">
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require ('./singer.png')} alt="music"/>}>
                                        <img src={`${item.picUrl}?param=300*300`} width="100%" height="100%" />
                                    </LazyLoad>
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
                <Scorll pullUp={ handlePullUp }
                        pullDown = { handlePullDown }
                        pullUpLoading = {pullUpLoading} 
                        pullDownLoading = { pullDownLoading }
                        onScroll={forceCheck}>
                    {renderSingerList()}
                </Scorll>
                {enterLoading ? <Loading ></Loading> : null}
            </ListContainer>
            {/* 子路由 */}
            {renderRoutes(props.route.routes)}

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


export default connect(mapStateToProps,{getHotSingerList,getByTypeSingerList,getPullUpRefresh,getPullDownRefresh})(React.memo(Singers))






































































// refreshMoreHotSingerList, // 加载更多热门歌手列表
// getSingerList, // 加载对应类别的歌手
// refreshMoreSingerList, // 加载更多歌手
// changePageCount,
// changeEnterLoading,
// changePullUpLoading,
// changePullDownLoading,






// const mapDispatchToProps = (dispatch) => {
//     return {
//       getHotSingerDispatch() {
//         dispatch(getHotSingerList());
//       },
//       updateDispatch(category, alpha) {
//         dispatch(changePageCount(0));//由于改变了分类，所以pageCount清零
//         dispatch(changeEnterLoading(true));//loading，现在实现控制逻辑，效果实现放到下一节，后面的loading同理
//         dispatch(getSingerList(category, alpha));
//       },
//       // 滑到最底部刷新部分的处理
//       pullUpRefreshDispatch(category, alpha, hot, count) {
//         dispatch(changePullUpLoading(true));
//         dispatch(changePageCount(count+1));
//         // 获取更多【热门】歌手否则获取更多歌手
//         if(hot){
//           dispatch(refreshMoreHotSingerList());
//         } else {
//           dispatch(refreshMoreSingerList(category, alpha));
//         }
//       },
//       //顶部下拉刷新
//       pullDownRefreshDispatch(category, alpha) {
//         dispatch(changePullDownLoading(true));
//         dispatch(changePageCount(0));//属于重新获取数据
//         if(category === '' && alpha === ''){
//           dispatch(getHotSingerList());
//         } else {
//           dispatch(getSingerList(category, alpha));
//         }
//       }
//     }
//   };   

//export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Singers))








 //mock 数据
    // const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => {
    //     return {
    //         picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
    //         name: "隔壁老樊",
    //         accountId: 277313426,
    //     }
    // });










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