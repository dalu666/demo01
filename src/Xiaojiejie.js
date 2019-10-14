import React,{Component,Fragment} from "react"
import XiaojiejieItem from "./XiaojiejieItem"
import "./style.css"
class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            list:['沁']
        }
    }
    render(){
        return(
            // zhushi
            <Fragment>
                <div>
                    <label htmlFor="xiaomada">新增</label>
                    <input id="xiaomada" className="search" value={this.state.inputVal} onChange={this.inputChange.bind(this)} />
                    <button  onClick={this.addList.bind(this)}>新增</button>
                    </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div>
                                    <XiaojiejieItem
                                        content={item}
                                        index={index}
                                        key={index+item}
                                        handleItem={this.deleteItem.bind(this)}
                                    />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputVal:e.target.value
        })
    }
    // 新增列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputVal],
            inputVal:''
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