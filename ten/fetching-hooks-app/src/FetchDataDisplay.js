import React, { Component } from "react";
class FetchDataDisplay extends Component{
    constructor(){
        super();
        this.state = {
            data :[],
            // name :[]
        }
    }

    
    fetchData =()=>{
        fetch("https://reqres.in/api/users")
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data)
            // res.data.forEach(ele=>{
            //     // console.log(ele.email)
            //     this.setState({data : ele.email})
            // })
            this.setState({data:res.data})
        })
        .catch((ele)=>{
            console.log(ele);
        })
    }
    
    render(){
        return(
            <div className="fetchDataDisplay">
                <header className="App-header">
                    <h1>Fetching Module</h1>
                    {/* <button onClick={this.fetchData}>fetch Data</button> componentDidMount execute automatically*/}
                    {this.state.data.map(item=>{
                        // console.log(item)
                        return (
                            <div>
                                <img src={`${item.avatar}`} alt="pic"></img>
                                <h5>{item.first_name} {item.last_name}</h5>
                                <p>{item.email}</p>
                            </div>
                       );
                    })}
                </header>
            </div>
        );
    }

    //final step to execute react cod
    componentDidMount(){
        this.fetchData();
    }
}


export default FetchDataDisplay;