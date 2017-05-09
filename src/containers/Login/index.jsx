import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header';
import LoginComponent from '../../components/LoginComponent';

class Login extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: false
        };
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }

    //跳转到用户中心
    goUserPage(){
        hashHistory.push("/user");
    }

    //登录成功之后处理
    handleLogin(username){
        // 保存用户名
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        const params = this.props.params
        const router = params.router
        if (router) {
            // 跳转到指定的页面
            hashHistory.push(router)
        } else {
            // 跳转到用户主页
            this.goUserPage()
        }
    }

    goUserPage() {
        hashHistory.push("/user");
    }

    componentDidMount(){
        this.doCheck();
    }

    render() {
        return(
            <div>
                <Header title="登录" />
                {
                    this.state.checking
                    ? <div></div>
                        : <LoginComponent handleLogin={this.handleLogin.bind(this)}/>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
