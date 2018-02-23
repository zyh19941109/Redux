import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from '../actions/actions';

class ShopCart extends Component {

    render() {
        let item = null;
        console.log(this.props.itemList)
        if(this.props.itemList.length){
            item = this.props.itemList.map((e,i)=>{
                return <div key={i}>{e.info}</div>
            })
        }else{
            item = <li key='0'>暂无商品哦</li>
        }
        return (
            <ul>{item}</ul>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //state:reducer里面的状态,ownProps:父组件的状态
    return {
        itemList:state.itemList
    }
}

// 用来让你的组件获得 actionCreater(发起 action 的函数)
const mapDispatchToProps = {
    addItem:Actions.addItem    
}

ShopCart = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCart)

export default ShopCart;
