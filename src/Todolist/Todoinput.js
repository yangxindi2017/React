import React, { Component } from 'react';
import ProTypes from 'prop-types';
import Todoing from './Todoing';
//子组件---->父组件传递数据，调用子组件时往子组件传递一个函数
//子组件通过props调用该函数
/**
 * 受控组件和非受控组件
 * 
 * 非受控组件：
 * 
 * 受控组件：value值被react的状态控制
 * 可以方便拿到input框的值、实时获取或处理输入的内容
 */

//------1.非受控组件
/**
 * 代码简单，比较适用于一次性获取表单的值
 */
//生命周期：先执行render(),成功后执行componentDidMount
/*
export default class Todoinput extends Component{
    componentDidMount(){
        console.log(this.inp);
    }

    search=()=>{
        console.log(this.inp.value);
    }
    render(){
        return (
            <div>
                <input ref={(inp)=>this.inp = inp} type="text"/>
                <button onClick={this.search}>查询</button>
            </div>
        )
    }
}
*/


 //2.------受控组件
 //实时的更新，推荐受控组件
export default class  extends Component {
    constructor(){
        super();
        this.state={
            n1:0,
            n2:0
        }
    }
    handleInput =(e)=>{
        if(e.keyCode === 13){
            // this.props.addTodo(e.target.value); //props中的target，获得目标元素
            this.props.addTodo(this.state.val); //props中的target，获得目标元素
            
        }
    }
    
    //通过一个函数控制两个表单的值
    handleChange=(e)=>{
        this.setState({
            //属性加上中括号
            [e.target.name]:parseInt(e.target.value)
            //1. val:e.target.val

        })
    }
    render() {
        return (
            <div>
                {/* <input onKeyDown={this.handleInput} type = "text"/> */}
                <lable htmlFor=""></lable>
                <input name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown={(e)=>this.handleInput(e)} type = "text"/>
                +                
                <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown={(e)=>this.handleInput(e)} type = "text"/>
                <p>{this.state.n1+this.state.n2}</p>
                <button>查询</button>
            </div>
        )
    }
}

