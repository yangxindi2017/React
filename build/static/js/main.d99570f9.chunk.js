(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(t,e,o){t.exports=o(16)},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(9),r=o.n(c),i=(o(15),o(1)),s=o(2),l=o(3),d=o(5),u=o(4),p=o(6),m=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).handleInput=function(e){if(13===e.keyCode&&""==e.target.value&&alert("\u8bf7\u586b\u5199\u6b64\u5b57\u6bb5"),13===e.keyCode&&""!=e.target.value){var o={title:e.target.value,done:!1};t.props.addTodo(o)}},t.state={},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{style:{backgroundColor:"black",textAlign:"center",height:"50px"}},a.a.createElement("p",{className:"font"},"ToDoList"),a.a.createElement("input",{className:"input",onKeyDown:this.handleInput,placeholder:" \u6dfb\u52a0ToDo",required:"required",type:"text"}))}}]),e}(n.Component),f=(o(8),function(t){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{padding:"0px 400px"}},a.a.createElement("ol",{id:"todolist",className:"item"},a.a.createElement("h2",{style:{fontSize:"24px",width:"600px"}},"\u6b63\u5728\u8fdb\u884c",a.a.createElement("span",{className:"count"},this.props.todoF.length)),this.props.todoF.map((function(e,o){return a.a.createElement("li",{key:o},a.a.createElement("input",{onClick:function(){t.props.renewTodo(o)},type:"button"}),a.a.createElement("p",null,e.title),a.a.createElement("button",{onClick:function(){t.props.delTodo(o)}},"\u5220\u9664"))}))),a.a.createElement("ol",{id:"done",className:"item"},a.a.createElement("h2",{style:{fontSize:"24px",width:"600px"}},"\u5df2\u7ecf\u5b8c\u6210 ",a.a.createElement("span",{className:"count"},this.props.todoD.length," ")),this.props.todoD.map((function(e,o){return a.a.createElement("li",{style:{opticity:.6},key:o},a.a.createElement("input",{onClick:function(){t.props.renewTodo1(o)},checked:!0,readOnly:!0,type:"checkbox"}),a.a.createElement("p",null,e.title),a.a.createElement("button",{onClick:function(){t.props.delTodo1(o)}},"\u5220\u9664"))}))))}}]),e}(n.Component)),h=function(t){function e(){var t;return Object(s.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this))).addItem=function(e){var o=[].concat(Object(i.a)(t.state.todoF),[e]);0==e.done&&t.setState({todoF:o},(function(){localStorage.setItem("Ndone",JSON.stringify(t.state.todoF))}))},t.delItem=function(e){var o=Object(i.a)(t.state.todoF);o.splice(e,1),t.setState({todoF:o},(function(){localStorage.setItem("Ndone",JSON.stringify(t.state.todoF))}))},t.delItem1=function(e){var o=Object(i.a)(t.state.todoD);o.splice(e,1),t.setState({todoD:o},(function(){localStorage.setItem("done",JSON.stringify(t.state.todoD))}))},t.renewItem=function(e){var o=Object(i.a)(t.state.todoF);void 0!=o[e]&&(o[e].done="true");var n=o.splice(e,1)[0],a=[].concat(Object(i.a)(t.state.todoD),[n]);t.setState({todoF:o},(function(){localStorage.setItem("Ndone",JSON.stringify(t.state.todoF))})),t.setState({todoD:a},(function(){localStorage.setItem("done",JSON.stringify(t.state.todoD))}))},t.renewItem1=function(e){var o=Object(i.a)(t.state.todoD);o[e].done=!1;var n=o.splice(e,1)[0],a=[].concat(Object(i.a)(t.state.todoF),[n]);t.setState({todoD:o},(function(){localStorage.setItem("Ndone",JSON.stringify(t.state.todoD))})),t.setState({todoF:a},(function(){localStorage.setItem("done",JSON.stringify(t.state.todoF))}))},t.state={todoF:JSON.parse(localStorage.getItem("Ndone"))||[],todoD:JSON.parse(localStorage.getItem("done"))||[]},t}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(m,{addTodo:this.addItem}),a.a.createElement(f,{todo:this.state.todo,todoF:this.state.todoF,todoD:this.state.todoD,delTodo:this.delItem,delTodo1:this.delItem1,renewTodo:this.renewItem,renewTodo1:this.renewItem1}))}}]),e}(n.Component);r.a.render(a.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,o){}},[[10,1,2]]]);
//# sourceMappingURL=main.d99570f9.chunk.js.map