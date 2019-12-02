import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import RouterView from '../router/RouterView'
import './mian.css'

export default class Main extends Component {
    render() {
        return (
            <div>
                <RouterView routes={this.props.routes}></RouterView>
                <div className="box">
                    <Link to="/main/home">首页</Link>
                    <Link to="/main/classify">分页</Link>
                    <Link to="/main/cart">购物车</Link>
                    <Link to="/main/price">订单数</Link>
                    <Link to="/main/my">个人中心</Link>
                </div>
            </div>
        )
    }
}
