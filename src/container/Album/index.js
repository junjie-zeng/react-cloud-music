import React, { useState,useRef } from 'react'
import { Container, TopDesc, Menu,SongList,SongItem } from './style'
import { CSSTransition } from 'react-transition-group'
import Header from '../../baseUI/header'
import Scroll from '../../baseUI/scroll'
import AlbumDetail from '../../components/AlbumDetail/index';
import style from "../../assets/global-style";

export const HEADER_HEIGHT = 45;

function Album(props) {

    const [showStatus, setShowStatus] = useState(true)
    const [title, setTitle] = useState ("歌单");
    const [isMarquee, setIsMarquee] = useState (false);// 是否跑马灯
    const headerEl = useRef ();


    const handleScroll = (pos) => {
        let minScrollY = - HEADER_HEIGHT;
        let percent = Math.abs (pos.y/minScrollY);
        let headerDom = headerEl.current;
        // 滑过顶部的高度开始变化
        if (pos.y < minScrollY) {
          headerDom.style.backgroundColor = style["theme-color"];
          headerDom.style.opacity = Math.min (1, (percent-1)/2);
          setTitle (currentAlbum.name);
          setIsMarquee (true);
        } else {
          headerDom.style.backgroundColor = "";
          headerDom.style.opacity = 1;
          setTitle ("歌单");
          setIsMarquee (false);
        }
      };

    //mock 数据
    const currentAlbum = {
        creator: {
            avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
            nickname: "浪里推舟"
        },
        coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
        subscribedCount: 2010711,
        name: "听完就睡，耳机是天黑以后柔软的梦境",
        tracks: [
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
            {
                name: "我真的受伤了",
                ar: [{ name: "张学友" }, { name: "周华健" }],
                al: {
                    name: "学友 热"
                }
            },
        ]
    }




    // 返回
    const handleBack = () => {
        setShowStatus(false)
    }

    console.log(props)
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
                <Scroll bounceTop={false}  onScroll={handleScroll}>
                    <AlbumDetail currentAlbum = {currentAlbum}></AlbumDetail>
                </Scroll>
               
            </Container>
        </CSSTransition>

    )
}

export default Album