class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cityName : "Patna",
        }
    }

    searchCity =(e)=>{
        e.preventDefault();
        this.props.onCityNameChange(this.state.cityName)
    }
    cityNameChanged=(e)=>{
        const newCityName = e.target.value;
        this.setState({
            cityName : newCityName
        })
    }

    render(){
        return(
            <div className = "search-container">
                <form onSubmit = {this.searchCity}>
                    <input 
                    type = "text" 
                    placeholder = "Search Any City" 
                    value = {this.state.cityName} 
                    onChange = {this.cityNameChanged}/>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}