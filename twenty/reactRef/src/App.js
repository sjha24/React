class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "",
        }
        this.inputRef = React.createRef();
    }
    updateText=(e)=>{
        // const newVal = document.getElementById('textField').value;
        const newVal = this.inputRef.current.value;
        this.setState({
            text:newVal
        })
    }
    render(){
        const names = [
            'saurav',
            'subham',
            'simmi',
            'pritam',
            'nikki',
            'neha',
            'sona',
            'mona',
            'ravikant',
            'rahul',
            'ravi',
            'vivel'
        ]
        return(
            <div className = "App-container">
                <h4>This React references App</h4>
                <input
                // id = 'textField'
                ref = {this.inputRef}
                type = "text"
                 placeholder = "Enter Anything"
                />
                <button onClick = {this.updateText}>Update Below</button>
                <h3>{this.state.text}</h3>
                <br/>
                <br/>
                <br/>
                {names.map(singleName=>
                    <GreetPerson name = {singleName}/>
                )}
                <br/>
                <h6>You all are Welcome by Saurav Jha</h6>
            </div>  
        );
    }
}