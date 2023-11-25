// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
// import Child1 from './Child1';
// import Child2 from './Child2';
// import Child3 from './Child3';
import FetchDataDisplay from './FetchDataDisplay';
class App extends Component {
  constructor(){
    super();
    this.state = {
      count : 0
    };
  }

  componentDidMount(){
      console.log("this is app Component")  
  }

  changeCount =()=>(
    this.setState({count:this.state.count+1})
  )
  render(){
    return (
      <div className="App">
        <div className='App-header'>
          {/* <Child1 changeVal = {this.changeCount} count = {this.state.count}/>
          <Child2 count = {this.state.count}/>
          <Child3 count = {this.state.count}/>
          <button onClick={this.changeCount}>change Count</button> */}

          <FetchDataDisplay />
        </div>
      </div>
    );
  }
}

export default App;
