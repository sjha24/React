class App extends React.Component{
    API_KEY = "6a6508f855c4209db27f5eca028d6bb9";
    API_URL = "https://api.openweathermap.org/data/2.5/weather";

    constructor(props){
        super(props)
        this.state = {
            cityName : "Patna",
            cityInfo :[{}],
        }
        navigator.geolocation.getCurrentPosition((position)=>{
            const cordinate = position.coords;
            const lat = cordinate.latitude;
            const longi = cordinate.longitude;
            this.fetchWeatherAcordingToLatAndLong(lat,longi)
        })
    }
    
    

    async fetchWeather(cityName){
        const res = await fetch(`${this.API_URL}?q=${cityName == null ? this.state.cityName : cityName}&appid=${this.API_KEY}&units=metric`);
        const data = await res.json();
        this.setState({
            cityName : this.state.cityName,
            cityInfo : data
        })
        
    }
    
    async fetchWeatherAcordingToLatAndLong(lat,long){
        const res = await fetch(`${this.API_URL}?lat=${lat}&lon=${long}&appid=${this.API_KEY}&units=metric`);
        const data = await res.json();
        this.setState({
            cityName : this.state.cityName,
            cityInfo : data,
        })
    }
    
    cityNameChange =(newCityName)=>{
        this.setState({
            cityName:newCityName,
            cityInfo:this.state.cityInfo,
        })
        this.fetchWeather(newCityName);
    }

    componentDidMount(){
        // this.fetchWeather();
        this.cityNameChange();
        // this.fetchWeatherAcordingToLatAndLong();
    }

    render(){
        return(
            <div className = "app-container">
                <h1>Weather App </h1>
                <Heading/>
                <Search onCityNameChange = {this.cityNameChange}/>
                <CityInfo info = {this.state.cityInfo}/>
            </div>  
        );
    }
}
