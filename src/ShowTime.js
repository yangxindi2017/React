import React,{Component,Fragment} from 'react';


//类定义组件(里面都是方法)
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date().toLocaleDateString()
        }
        this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }

    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
    }
    compoentDidUpdate(){
        console.log('didupdate');
    }
    //这是类中的方法，不用function 什么关键字
    // handleClick(){
    //     console.log('click');
    // }
    handleClick=()=>{
        console.log(this);
        console.log("点击成功");
    }
    divClick=(num,e)=>{
        console.log(num,e);
        console.log("点击成功");
    }
    render(){
        // setInterval(() => {
        //     this.setState({
        //     time:new Date().toLocaleDateString                
        //     })
        // }, 100);
        return(
            <Fragment>      
                {/* <div onClick={this.handleClick}> */}
                {/* handleClick后面加括号，相当于把返回值赋给onClick了 */}
                <div onClick={(ev)=>{this.handleClick(1,ev)}}>
                    {this.state.time}</div>
                <div onClick={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        );
    }
}
//默认导出(在引入的时候可以随便命名，但最好一样)
//只能到处一次
export default ShowTime; 

//命名导出(导出名字必须一样)
//可以导出多次
//也可以一次导出多个，逗号隔开
// export {ShowTime};
// export {ShowTime};
