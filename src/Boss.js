import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss  extends Component {
    constructor(props){
        super(props)
        this.state={
            isShow:true,
        }
        this.toToggle=this.toToggle.bind(this)
    }
    render() { 
        return ( 
            <div>
                {/* <div className={this.state.isShow?'show':'hide'}>Boss级人物</div> */}
                {/* unmountOnExit 作用是 元素隐藏时删除dome */}
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >

                    <div >Boss级人物</div> 
                </CSSTransition>
                <div><button onClick={this.toToggle}>新增Boss</button></div>
            </div>
        );
    }
    toToggle(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
}
 
export default Boss;