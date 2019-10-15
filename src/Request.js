import React, { Component } from 'react'
import Axios from 'axios';

export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    //生命周期
    componentDidMount(){
    /**fetch方法
     * 第一次返回一个json对象，第二次才是要的数据
     */

        fetch('https://api.apiopen.top/musicRankingsDetails?type=1')
        // {method:'post',body:'{name:111}'}        
        .then(function(res){
            return res.json();
        })
        .then((res)=>{
            this.setState({  //setstate一执行，下面的render就会再次刷新，重走一遍
                data:res.result
            })
            console.log(res);
        })

        // Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res.data.result
        //     })
        // })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index)=>(
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    <li>
                        <h2>歌名</h2>
                        <p>作者</p>
                    </li>
                </ul>
            </div>
        )
    }
}
