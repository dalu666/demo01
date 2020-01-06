import React,{Component,Fragment} from "react"
import XiaojiejieItem from "./XiaojiejieItem"
import "./style.css"
import Axios from "axios"
import Boss from "./Boss"
import { CSSTransition,TransitionGroup } from "react-transition-group"
class Xiaojiejie extends Component{
    //  在某一时刻可以自动执行的函数
    constructor(props){
        super(props)  //super是 调用父级Componet的方法
        this.state={
            inputVal:'',
            list:['c']
        }
    }
    // componentWillMount(){
    //     console.log('组件要挂载在页面的时刻')
    // }
    // componentDidMount(){
    //     console.log('组件挂载完成的时刻')
    // }
    // shouldComponentUpdate(){
    //     console.log('1.shouldComponentUpdate')
    //     return true
    // }
    // componentWillUpdate(){
    //     console.log('2.componentWillUpdate')
    // }
    // componentDidUpdate(){
    //     console.log('4.componentDidUpdate')
    // }
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }
    componentDidMount(){
        Axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res)=>{
                console.log('请求成功')
            })
            .catch((err)=>{
                console.log('失败')
            })
    }
    render(){
        // console.log('3.组件挂在中')
        return(
            <Fragment>
                <div>
                    <label htmlFor="xiaomada">新增</label>
                    <input id="xiaomada"
                        className="search" 
                        value={this.state.inputVal}
                        ref={(input)=>{this.input=input}} onChange={this.inputChange.bind(this)}
                    />
                    <button  onClick={this.addList.bind(this)}>新增</button>
                    </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="boss-text"
                                        unmountOnExit
                                        key={index+item}
                                        appear={true}
                                    >
                                        <XiaojiejieItem
                                            content={item}
                                            index={index}
                                            key={index+item}
                                            // 传递方法
                                            handleItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }
    inputChange(e){
        // this 指的是Xiaojiejie这个组件
        this.setState({
            inputVal:this.input.value
        })
    }
    // 新增列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputVal], //意识是先扩展在添加
            inputVal:''
        },
        // 正确的获取li数量方式
        ()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
    }
    // 删除列表
    deleteItem(index){
        let list =this.state.list;
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default Xiaojiejie