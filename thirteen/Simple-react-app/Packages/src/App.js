class App extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    like =()=>{
        // this.setState({counter : this.state.counter+1})
        this.setState((previousState)=>{
            return{
                counter:previousState.counter+1
            }
        });
    }
    dislike =()=>{
        // this.setState({counter : this.state.counter-1})
        this.setState((previousState)=>{
            return{
                counter : previousState.counter-1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Like/Dislike Counter</h1>
                <div className = 'Container'>
                    <LikeBtn increase = {this.like}/>
                    <ShowCounter counterValue ={this.state.counter}/>
                    <DislikeBtn decrease = {this.dislike}/>
                </div>
            </div>
        );
    }
}