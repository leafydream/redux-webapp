import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

import './style.less';

class LoadMore extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    loadMoreHandle(){
        this.props.loadMoreFn();
    }
    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.refs.wrapper;
        let timer = null;
        console.log(wrapper);
        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const winHeight = window.innerHeight;
            if(top && top < winHeight){
                loadMoreFn();
            }
            console.log(top);
        }
        window.addEventListener("scroll",()=>{
            if(this.props.isLoadingMore)return;
            console.log(1);
            if(timer)clearTimeout(timer);
            timer = setTimeout(callback,100);
        });

    }
    render() {
        return(
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
}
export default LoadMore;
