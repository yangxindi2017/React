import React, { Component } from 'react'
import { Transfer } from 'antd'
import './todolist.css'

export default class Todoing extends Component {
    
    render() {
        return (
            <div style={{padding:'0px 400px'}}>
                <ol id="todolist"  className="item" >
                    
                    <h2 style={{fontSize:'24px',width:'600px'}}>正在进行<span className="count">{this.props.todoF.length}</span></h2>

                    {
                        this.props.todoF.map((item,index)=>
                        <li  key={index}>
                            <input onClick={()=>{this.props.renewTodo(index)}} type='button' />
                            <p>{item.title}</p>  
                            <button onClick={()=>{this.props.delTodo(index)}}>删除</button>
                        
                        </li> )

                    }

                </ol>
                <ol id="done"  className="item">
                <h2 style={{fontSize:'24px',width:'600px'}} >已经完成 <span className="count">{this.props.todoD.length} </span></h2>
                {
                    this.props.todoD.map((item,index)=>
                    
                    <li style={{opticity:0.6}} key={index}>
                        <input  onClick={()=>{this.props.renewTodo1(index)}} checked readOnly type='checkbox' />
                        <p>{item.title}</p>  
                        
                        <button onClick={()=>{this.props.delTodo1(index)}}>删除</button>
                    
                    </li> )
                }
                
                
                </ol>
            </div>  
        )
    }
}
