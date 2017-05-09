import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

import SearchHeader from '../../components/SearchHeader';

class Search extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        const params = this.props.params;
        console.log("category param:" + params.category );
        console.log("key param:" + params.keyword );

    }
    render() {
        const params = this.props.params;
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
            </div>
        )
    }
}

export default Search;
