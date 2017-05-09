import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { hashHistory } from 'react-router';
import SearchInput from '../SearchInput';

import './style.less';

class SearchHeader extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleEnter(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
        console.log("跳转");
    }

    handleClick(){
        window.history.back();
    }
    render() {
        return (
            <div id="search-header" className="clearfix">
                <span className="back-icon float-left" onClick={this.handleClick.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput value={this.props.keyword || ""} handleEnter={this.handleEnter.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default SearchHeader;
