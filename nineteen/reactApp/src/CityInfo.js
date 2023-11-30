class CityInfo extends React.Component{
    render(){
        const info = this.props.info;
        return(
            <div className = "CityInfoContainer">
                <h3>{`${info.name} City`} Information About Weather</h3>
                <h4>Temperature {info.main != undefined ? info.main.temp+"*C" : null} <span>Feel like  {info.main != undefined ? info.main.feels_like+"*C" :null}</span></h4>
                <h5>Weather {info.weather != undefined ? info.weather[0].main:null}</h5>
                <h5>Weather Description {info.weather != undefined ? info.weather[0].description:null}</h5>
                <h5>Wind Speed {info.wind != undefined ? info.wind.speed:null} </h5>
            </div>
        );
    }
}