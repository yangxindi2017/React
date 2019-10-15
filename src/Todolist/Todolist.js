//事件绑定与交互
import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';


export default class TodoList extends Component {
    constructor(){
        super();
        this.state={
            todo:[1,2,3]
        }


//-----------------------------------------------//
/**  ****   深/浅拷贝 ******/
        var arr=[1,2,{a:100}];
        //1.深拷贝
        var b =JSON.parse(JSON.stringify(arr)); 
        b[2].a=200;
        console.log(arr);

        /*2. 浅拷贝，改变b的时候a数组还是跟着变
        组看着不一样了，但是引用还是一样
        /*var b= [...arr];
        b[2].a=200;
        console.log(arr);*/


        //3.对象拷贝
        var a = {a:100};
        var b = {b:200};

        //Object.keys返回有属性名组成的一个数组
        Object.keys(a).forEach((item)=>{
            console.log(item);
            console.log(a[item]);
        })

        //尽量不要用for in，会遍历出来很多其他的
        // for(var item in a){
        //     console.log(a);
        // }

        // 2. 出现一个新对象 o,不在是对a操作
        var o = Object.assign({},a);
        console.log(a === o );//false

        // 1.把b 整合到 a 上
        // var o = Object.assign(a,b);
        // console.log(a === o);//true

    }
    addItem=(msg)=>{
        // this.state.todo.push(msg);
        // console.log(...this.state.todo);

        //改变数据调用setState
        this.setState({
            todo:[...this.state.todo,msg] //...展开运算符
            
        })
    }
    delItem=(a)=>{
        // this.state.todo.splice(a,1);

        /**深拷贝\浅拷贝 */ 
        //状态（state）:
        //1.不要直接改变、处理状态
        var todo= [...this.state.todo];
        todo.splice(a,1);

        //2.setState是异步的
        this.setState((state,props)=>({todo:state.todo+1}))
        this.setState({
            todo:todo
        })
        console.log(a)
    }
    //初始化，setState变化的时候会被调用
    render() {
        return (
            <div>
                <h1></h1>
                <Todoinput addTodo={this.addItem} />
                <Todoing todo={this.state.todo} delTodo ={this.delItem}/>
            </div>
        )
    }
}
