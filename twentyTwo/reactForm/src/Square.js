class Square extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "sqr">
                <button onClick = {this.props.changeParentState} ><h1>{this.props.value}</h1></button>
            </div>
        );
    }
}