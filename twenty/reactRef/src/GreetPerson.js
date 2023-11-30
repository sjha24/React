class GreetPerson extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            // <div>
            //     <span>Welcome {this.props.name} You are my Special guest</span>
            //     {/* <h6>Welcome by Saurav</h6> */}
            // </div>

            //fragment
            // <>
            //     <span>Welcome {this.props.name} You are my Special guest</span>
            //     {/* <h6>Welcome by Saurav</h6> */}
            // </>
            
            <React.Fragment>
                 <span>Welcome {this.props.name} You are my Special guest</span>
                 <br/>
            </React.Fragment>
        );
    }
}