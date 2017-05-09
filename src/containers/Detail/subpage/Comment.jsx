import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { getCommentData } from '../../../fetch/detail/detai';
import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';

 import './style.less';

class Comment extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        };
    }

    componentDidMount(){
        this.loadFirstPageData();
    }
    //获取首屏数据
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getCommentData(cityName,0);
        this.resultHandle(result);
    }
    //加载更所数据
    loadMoreData(){
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getCommentData(cityName,page);
        this.resultHandle(result);

        this.setState({
            page: page + 1,
            isLoadingMore: false
        });
    }
    //数据处理
    resultHandle(result){
        result.then(res=>{
            return res.json();
        }).then(json=>{
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore,
            });
        });
    }

    render() {
        const id = this.props.id;
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <CommentList data={this.state.data}/>
                        : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        )
    }
}

export default Comment;
