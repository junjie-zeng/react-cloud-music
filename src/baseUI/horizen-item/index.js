import React, { useState, useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import Scroll from '../scroll/index'
import { PropTypes } from 'prop-types';
import style from '../../assets/global-style';

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    vertical-align: middle;
  }
`
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`

function Horizen(props) {
    const { list, oldVal, title } = props;
    const { handleClick } = props;
    const Category = useRef(null);

    useEffect(() => {
        let categoryDOM = Category.current;
        // 获取所有span
        let tagElems = categoryDOM.querySelectorAll("span");
        // 初始化宽度
        let totalWidth = 0;
        // 将span类数组转换为数组遍历拿到当前span的宽度进行累加
        Array.from(tagElems).forEach(ele => {
            //累加
            totalWidth += ele.offsetWidth;
        });
        // 将span累加后的宽度赋值给外层盒子
        categoryDOM.style.width = `${totalWidth}px`;
    }, []);

    return (
        <Scroll direction={"horizental"}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={`${oldVal === item.key ? 'selected' : ''}`}
                                    onClick={() => handleClick(item.key)}>
                                    {item.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        </Scroll>
    )
}



Horizen.defaultProps = {
    list: [], // 为接受的列表数据
    oldVal: '', // 为当前的 item 值
    title: '', // 为列表左边的标题
    handleClick: null //  为点击不同的 item 执行的方法
}

Horizen.propTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func
}

export default memo(Horizen);