import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less';

class SearchInput extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ""
        };
    }
    handleChange(e){
        let value = e.target.value;
        this.setState({
            value: value
        });
    }
    handleKeyUp(e){
        if(e.keyCode !== 13)return;
        this.props.handleEnter(this.state.value);
        console.log(this.state.value);
    }
    componentDidMount(){
        this.setState({
            value: this.props.value
        });
    }
    render() {
        return(
            <input type="text" value={this.state.value} className="search-input"  placeholder="请输入关键字"
                   onChange={this.handleChange.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} />
        )
    }
}

export default SearchInput;
