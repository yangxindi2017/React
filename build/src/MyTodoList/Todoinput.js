import React, { Component } from 'react'

export default class  extends Component {
    constructor(){
        super();
        this.state={
            //?
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13 && e.target.value == '' ){
            alert("请填写此字段");
        }
        if(e.keyCode === 13 && e.target.value != ''){
            var obj = {
                title:e.target.value,
                done:false
            }
            this.props.addTodo(obj);
            
        }

    }
    

    render() {
        return (
            <div style={{backgroundColor:'black',textAlign:'center',height:'50px'}}>
                <p className="font">ToDoList</p>
                <input className="input" onKeyDown={this.handleInput} placeholder=" 添加ToDo" required="required" type="text"/>
            </div>
        )
    }
}
