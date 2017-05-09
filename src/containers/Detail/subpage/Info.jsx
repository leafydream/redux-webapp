import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { getInfoData } from '../../../fetch/detail/detai';

import DetailInfo from '../../../components/DetailInfo';

class Info extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        };
    }
    componentDidMount(){
        let id = this.props.id;
        let result = getInfoData(id);
        result.then(res=>{
            return res.json();
        }).then(json=>{
            this.setState({
                info: json
            });
        });
    }
    render() {
        return(
            <div>
                {
                    this.state.info ?
                        <DetailInfo data={this.state.info}/>
                        : ""
                }
            </div>
        )
    }
}

export default Info;
