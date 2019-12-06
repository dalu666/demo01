import React, { Component } from 'react';
import propTypes from "prop-types"
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick} >{this.props.avname}-{this.props.content}</li>
        );
    }
    handleClick(){
        this.props.handleItem(this.props.index)
    }
}
XiaojiejieItem.propTypes={
    content:propTypes.string,
    handleItem:propTypes.func,
    index:propTypes.number,
    avname:propTypes.string.isRequired

}
XiaojiejieItem.defaultProps={
    avname:'a'
}
export default XiaojiejieItem;