import React, { Component } from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import LocalStore from '../../util/localStore';
import { CITYNAME } from '../../cfg/localStoreKey';

class City extends Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    //改变城市
    changeCity(newCity){
        if(newCity == null)return;

        //修改redux数据
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        //修改localstorage
        LocalStore.setItem(CITYNAME,newCity);

        hashHistory.push('/');

    }
    componentDidMount(){
        console.log(LocalStore);
        console.log(CITYNAME);
    }
    render() {
        return(
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);

