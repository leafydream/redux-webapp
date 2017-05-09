import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Link, hashHistory } from 'react-router';
import SearchInput from '../SearchInput';

import "./style.less";

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleEnter(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
        console.log("跳转");
    }

    render() {
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value="" handleEnter={this.handleEnter.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader;
