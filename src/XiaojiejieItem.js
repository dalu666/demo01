import React, { Component } from 'react';
import propTypes from "prop-types"
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    // 组件第一次存在于dom中，函数是不会被执行
    //  如果已经存在于dom中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('zi')
    // }
    // componentWillUnmount(){
    //     console.log('组件被删除')
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    render() { 
        console.log('子组件渲染')
        return ( 
            <li onClick={this.handleClick} >{this.props.avname}-{this.props.content}</li>
        );
    }
    handleClick(){
        // 接收调用父组件方法
        this.props.handleItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    // content:propTypes.string,
    handleItem:propTypes.func,
    index:propTypes.number,
    avname:propTypes.string.isRequired // 必须要传值
}
XiaojiejieItem.defaultProps={  //设置默认值
    avname:'a'
}
export default XiaojiejieItem;