import React, { Component } from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import './todolist.css';


export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todoF:JSON.parse(localStorage.getItem('Ndone')) ||[],
            todoD:JSON.parse(localStorage.getItem('done')) ||[],
        }

    }
    addItem=(msg)=>{ //msg是input中的对象
        var data = [...this.state.todoF,msg];
        
        if(msg.done == false ){
            this.setState({
                todoF:data
            },()=>{
                localStorage.setItem('Ndone',JSON.stringify(this.state.todoF))

            })
        }
    }
    delItem=(a)=>{
        var delData =[...this.state.todoF];
        delData.splice(a,1);

        this.setState({todoF:delData},()=>{
            localStorage.setItem('Ndone',JSON.stringify(this.state.todoF));
        })
    }
    delItem1=(a)=>{
        var delData =[...this.state.todoD];
        delData.splice(a,1);
        
        this.setState({todoD:delData},()=>{
            localStorage.setItem('done',JSON.stringify(this.state.todoD));

        })
    }
    //切换
    renewItem = (idx)=>{
        //如果为假就放到TODO里面
        var transData = [...this.state.todoF];
        if(transData[idx] != undefined){
            transData[idx].done = 'true';

        }
        var data = transData.splice(idx,1)[0];

        var transData1=[...this.state.todoD,data];

        this.setState({todoF:transData},()=>{
          localStorage.setItem('Ndone',JSON.stringify(this.state.todoF))
        })
        this.setState({todoD :transData1},()=>{
            localStorage.setItem('done',JSON.stringify(this.state.todoD))
          })

        
  }
    renewItem1 =(idx)=>{
        var transData = [...this.state.todoD];
        transData[idx].done = false;
         
        var data=transData.splice(idx,1)[0];
        var transData1=[...this.state.todoF,data];

        this.setState({todoD:transData},()=>{
            localStorage.setItem('Ndone',JSON.stringify(this.state.todoD))
        })
        this.setState({todoF :transData1},()=>{
            localStorage.setItem('done',JSON.stringify(this.state.todoF))
        })

        return;
    }


    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} todoF={this.state.todoF} todoD={this.state.todoD} delTodo={this.delItem} delTodo1={this.delItem1} renewTodo={this.renewItem} renewTodo1={this.renewItem1}/>
            </div>
        )
    }
}
