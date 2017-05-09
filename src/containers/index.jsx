import React, { Component } from 'react';
import propTypes from 'prop-types';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import LocalStore from "../util/localStore";
import { CITYNAME } from "../cfg/localStoreKey";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userInfoActionsFromOtherFile from "../actions/userinfo";


class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        };
    }

    componentDidMount(){
        //从localStrorage中获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = "深圳";
        }
        this.props.userInfoActions.update({
            cityName: cityName
        })
        //将城还是信息存到redux中
        this.setState({
            initDone: true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                        : <div>加载中...</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(App);