import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import Header from '../../components/Header';

class User extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return(
            <div>
                <Header title="用户中心"/>
            </div>
        )
    }
}

export default User;

