import React,{Component} from "react";

class Child1 extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div>I am Child 1 - {this.props.count}
            <br/>
            <button onClick={this.props.changeVal}>Increase</button>
            </div>
        );
    }
}
export default Child1;