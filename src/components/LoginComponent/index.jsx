import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: ""
        };
    }

    handleChange(e){
        this.setState({
            phone: e.target.value
        });
    }

    handleClick(){
        const username = this.state.phone;
        const handleLogin = this.props.handleLogin;
        handleLogin(username);
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.phone}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.handleClick.bind(this)}>登录</button>
            </div>
        )
    }
}

export default LoginComponent;
