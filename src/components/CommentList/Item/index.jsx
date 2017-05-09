import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

import Star from '../../Star';
import './style.less';

class CommentItem extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        console.log(data);
        return(
            <div className="comment-item">
                <h3>
                    <i className="icon-user">
                        &nbsp;
                        {data.username}
                    </i>
                </h3>
                <Star star={data.star}/>
                <p>{data.comment}</p>
            </div>
        )
    }
}

export default CommentItem;
