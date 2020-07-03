import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import { getRankList } from './store/action'
import { filterIndex } from '../../api/utils'
import Loading from '../../baseUI/loading';
import { Container, List, ListItem, SongList } from './style'
import { EnterLoading } from './../Singers/style';
function Rank(props) {
    // 解构
    const { loading, rankList: list } = props
    const { getRankList } = props
    // 排行榜
    let rankList =  list.toJS()

    // 数据处理区分官方榜，全球榜。
    let globalStartIndex = filterIndex(rankList);
    let officialList = rankList.slice(0, globalStartIndex);
    let globalList = rankList.slice(globalStartIndex);

    // console.log(globalStartIndex)
    // console.log(officialList)
    // console.log(globalList)

    // 详情
    const enterDetail = (detail) => {
        // console.log(detail)
        props.history.push(`/rank/${detail.id}`)
    }

    useEffect(() => {
        // 获取排行榜列表
        getRankList()
    }, [])

    // 这是渲染榜单列表函数，传入 global 变量来区分不同的布局方式 
    const renderRankList = (list, global) => {
        return (
            <List globalRank={global}>
                {
                    list.map((item,i) => {
                        return (
                            <ListItem key={i} tracks={item.tracks} onClick={() => enterDetail(item)}> 
                                <div className="img_wrapper">
                                    <img src={item.coverImgUrl} alt="" />
                                    <div className="decorate"></div>
                                    <span className="update_frequecy">{item.updateFrequency}</span>
                                </div>
                                {renderSongList(item.tracks)}
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }

    const renderSongList = (list) => {
        return list.length ? (
            <SongList>
                {
                    list.map((item, index) => {
                        return <li key={index}>{index + 1}. {item.first} - {item.second}</li>
                    })
                }
            </SongList>
        ) : null;
    }

    // 榜单数据未加载出来之前都给隐藏 
    let displayStyle = loading ? { "display": "none" } : { "display": "" };

    return (
        <Container>
            <Scroll>
                <div>
                    <h1 className="offical" style={displayStyle}> 官方榜 </h1>
                    {renderRankList(officialList)}
                    <h1 className="global" style={displayStyle}> 全球榜 </h1>
                    {renderRankList(globalList, true)}
                    {loading ? <EnterLoading><Loading></Loading></EnterLoading> : null}
                </div>
            </Scroll>
            {renderRoutes(props.route.routes)}
        </Container>
    );


}

// 映射 redux 全局的state到组件的props上
const mapStateToProps = (state) => ({
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading'])
})

export default connect(mapStateToProps, { getRankList })(React.memo(Rank))