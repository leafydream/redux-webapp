import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less';

class Header extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    handleClick(){
        window.history.back();
        console.log("返回首页...");
    }
    render() {
        return(
            <div id="common-header">
                <span className="back-icon" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default Header;
