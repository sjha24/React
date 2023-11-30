class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabIndex : 0,
        }
    }


    changeTab=(newTabIndex)=>{
        this.setState({
            tabIndex : newTabIndex
        })
    }

    rebderTab=()=>{
        switch(this.state.tabIndex){
            case 0 : return <Home/>
            case 1 : return<Search/>
            case 2 : return<Reels/>    
            case 3 : return<Activity/>
            case 4 : return<Profile/>
            default : return<Home/>
        }
    }

    render(){
        return(
            <div className = "App-container">
                {/* {this.state.tabIndex === 0 ? <Home/> 
                : this.state.tabIndex === 1 ? <Search/> 
                : this.state.tabIndex === 2 ? <Reels/> 
                : this.state.tabIndex === 3 ? <Activity/>
                : <Profile/>} */}

                {this.rebderTab()}
                <BottamNav onChange = {this.changeTab}/>
            </div>  
        );
    }
}