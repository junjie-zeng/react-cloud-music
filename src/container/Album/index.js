import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container } from './style'
import { CSSTransition } from 'react-transition-group'
import Header from '../../baseUI/header'
import Scroll from '../../baseUI/scroll'
import AlbumDetail from '../../components/AlbumDetail/index';
import style from "../../assets/global-style";
import { getAlbumList } from './store/action'
import { isEmptyObject } from '../../api/utils'
import Loading from '../../baseUI/loading/index';


function Album(props) {
    // 头部高度
    const HEADER_HEIGHT = 45;
    // 从路由中拿到歌单的id
    const id = props.match.params.id

    const [showStatus, setShowStatus] = useState(true)
    const [title, setTitle] = useState("歌单");
    const [isMarquee, setIsMarquee] = useState(false);// 是否跑马灯
    const headerEl = useRef();
    // 解构
    const { currentAlbum: currentAlbumImmutable, enterLoading } = props
    const { getAlbumList } = props
    // 数据
    let currentAlbum = currentAlbumImmutable.toJS();


    useEffect(() => {
        getAlbumList(id)
    }, [getAlbumList, id])

    // 滚动
    const handleScroll = (pos) => {
        let minScrollY = - HEADER_HEIGHT;
        let percent = Math.abs(pos.y / minScrollY);
        let headerDom = headerEl.current;
        // 滑过顶部的高度开始变化
        if (pos.y < minScrollY) {
            headerDom.style.backgroundColor = style["theme-color"];
            headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
            setTitle(currentAlbum.name);
            setIsMarquee(true);
        } else {
            headerDom.style.backgroundColor = "";
            headerDom.style.opacity = 1;
            setTitle("歌单");
            setIsMarquee(false);
        }
    };

    // 返回
    const handleBack = () => {
        setShowStatus(false)
    }

    // console.log(props)
    return (
        <CSSTransition
            in={showStatus}
            timeout={300}
            classNames="fly"
            appear={true}
            unmountOnExit
            onExited={props.history.goBack}
        >
            <Container>
                <Header ref={headerEl} title={title} handleClick={handleBack} isMarquee={isMarquee}></Header>
                {
                    !isEmptyObject(currentAlbum) ? (
                        <Scroll bounceTop={false} onScroll={handleScroll}>
                            <AlbumDetail currentAlbum={currentAlbum}></AlbumDetail>
                        </Scroll>
                    ) : null
                }

                { enterLoading ? <Loading></Loading> : null}
            </Container>
        </CSSTransition>

    )
}

// 映射 Redux 全局的state到组件的props上
const mapStateToProps = (state) => ({
    currentAlbum: state.getIn(['album', 'currentAlbum']),
    enterLoading: state.getIn(['album', 'enterLoading'])
})

export default connect(mapStateToProps, { getAlbumList })(React.memo(Album))