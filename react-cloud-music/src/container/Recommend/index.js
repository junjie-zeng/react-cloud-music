import React,{useEffect} from 'react'
import Slider from '../../components/slider'
import RecommendList from '../../components/list'
import {Content} from './style'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import {getBannerList,getRecommendList} from './store/action'
// 引入 forceCheck 方法
import { forceCheck } from 'react-lazyload';

function Recommend(props) {

    // mock 数据
    // const bannerList = [1, 2, 3, 4].map(item => {
    //     return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
    // })

    // const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
    //     return {
    //         id: 1,
    //         picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
    //         playCount: 17171122,
    //         name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    //     }
    // });

    const {bannerList,recommendList} = props
    const {getBannerList,getRecommendList} = props

    useEffect(()=>{
        // 获取banner
        getBannerList()
        // 获取推荐列表
        getRecommendList()
    },[])
    //console.log(bannerList)
    const bannerListJS = bannerList ? bannerList.toJS():[]
    const recommendListJS = recommendList ? recommendList.toJS():[]
    return (
        <Content>
            <Scroll className = "list" onScroll = {forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS}></Slider>
                    <RecommendList recommendList={recommendListJS}></RecommendList>
                </div>
            </Scroll>
        </Content>
    )
}


// 映射 Redux 全局state到组件的props中
const mapStateToProps = (state)=>{
   // console.log(state)
    return {
        bannerList:state.getIn(['recommend','bannerList']),
        recommendList:state.getIn(['recommend','recommendList']),
    }
}

const mapDispatchToProps = ()=>{
    return {
        getBannerList,
        getRecommendList
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(React.memo(Recommend))
/*
    为什么在组件中还需要映射dispatch到props上，不能直接传递函数吗，在组件中直接调用异步action函数，函数中拿到返回结果调用dispatch触发reducer更新状态，
*/
// 疑问：在调用getBannerList在action中已经触发了dispatch ,为什么在本组件中还要映射 dispatch 到props上并再次触发
// 映射 dispatch 到props上
// const mapDispatchToProps = (dispatch)=>{
//     return {
//         getBannerDataDispatch(){
//             dispatch(getBannerList())
//         },
//         getRecommendListDataDispatch(){
//             dispatch(getRecommendList())
//         }
//     }
// }
//export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend))

//export default connect(mapStateToProps,{getBannerList,getRecommendList})(React.memo(Recommend))