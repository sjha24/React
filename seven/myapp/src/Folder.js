// import logo from './logo.svg';

import React,{ Component } from 'react';
import './App.css';
import FuncComponent from './FunComponent';
class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : false,
        }
    }
    handleClick=()=>{
        this.setState({isOpen : !this.state.isOpen})
    };
  render(){
    return (
      <div className="Folder">
        <span onClick={this.handleClick}>
            {this.state.isOpen ? (
               <i class="bi bi-caret-down-fill"></i>
            ):(
                <i class="bi bi-caret-right-fill"></i>
            )}
           <i class="bi bi-folder-fill"></i>

        </span>
        {this.props.name}
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}

export default Folder;
