class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "something",
        }
    }

    textChange=(e)=>{
        const newVal= e.target.value;
        // this.text = newVal;
        // this.forceUpdate(); insted of use this fun i preferd use state
        this.setState({
            text : newVal
        });
    }

    //we can use anonymus fun which is more preferd. ex -> ()=>{alert("Saurav Jha")}
    // alertName=()=>{
    //     alert("Saurav Jha")
    // }
    // alertBirthday=()=>{
    //     alert("24 sep 1998")
    // }
    render(){
        return(
            <div className = 'App-container'>
                <h4>Simple App With State</h4>
                <input 
                    type = "text" 
                    placeholder = "Enter Something"
                    // onChange = {this.textChange} 
                    onChange = {(e)=>{this.setState({text:e.target.value})}} 
                />
                <h2>{this.state.text}</h2>
                <button onClick = {()=>{alert("Saurav Jha")}}>call me for alert your name</button>
                <button onClick = {()=>{alert("24 sep 1998")}}>call me for alert your birthday</button>
            </div>
        );
    }
    
}