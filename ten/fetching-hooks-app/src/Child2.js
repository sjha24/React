import React,{Component} from "react";

class Child2 extends Component{
    render(){
        return <div>I am Child 2 - {this.props.count}</div>
    }
}
export default Child2;