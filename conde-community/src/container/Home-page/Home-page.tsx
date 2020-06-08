import * as React from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon ,PullToRefresh} from 'antd-mobile';
class HomePage extends React.Component<any> {
    render(){
        return(
            <div>
                
                <div className = "home-page-header">
                    <NavBar
                    mode="light"
                    >CNode.js中文社区</NavBar>
                </div>
                <div className = "home-page-list">
                    {/* <PullToRefresh
                        direction = 'up'
                        refreshing= {true}
                        indicator={{activate:'加载更多...',finish: '加载完成'}}
                        damping={60}
                        style={{
                            height: '300px',
                            overflow: 'auto',
                          }}
                        onRefresh = {()=>{console.log('test')}}
                    > */}
                        <div className = "home-page-item">
                            <div className = "item-header">
                                <div className = "header-left">
                                    <div className = "left-image" style = {{background: 'url(https://img.alicdn.com/tfscom/TB1IVm8JVXXXXbBXpXXwu0bFXXX.png_100x100.jpg)  center center /  40px 40px no-repeat'}}></div>
                                    <div className = "left-text">hello</div>
                                </div>
                                <div className = "header-right">
                                    <div className = "right-box">问答</div>
                                    <div className = "right-text">8 天前</div>
                                </div>
                            </div>
                            <div className = "item-center">
                                今天发布了
                            </div>
                            <div className = "item-footer">
                                <div className = "footer-data">
                                    <span className = "iconfont icon-ai-eye"></span>
                                    <span className = "data-text">1000</span>
                                </div>
                                <div className = "footer-data">
                                    <span className = "iconfont icon-pinglun"></span>
                                    <span className = "data-text" > 9</span>
                                </div>
                                <div className = "footer-data">
                                    <span className = "iconfont icon-shijian"></span>
                                    <span className = "data-text">9天前</span>
                                </div>
                            </div>
                        </div>
                    {/* </PullToRefresh> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps() {
    return {
        
    }
}

export default connect(mapStateToProps,{})(HomePage)