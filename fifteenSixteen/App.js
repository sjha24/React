
// const h1 = document.createElement('h1');
// const ele = (<h1>This is JSX</h1>)
// console.log(h1);
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            data : [],
        }
    }
    // getData=()=>{
    //     fetch("https://reqres.in/api/users")
    //     .then((res)=>res.json())
    //     .then((res)=>console.log(res.data))
    // }
    getDataByAxios=()=>{
        axios.get("https://reqres.in/api/users")
        .then(res=>{
            this.setState({data:res.data.data})
        })
        
        
        //other method
        // .then((res)=>this.setState(prev=>{
        //     return{
        //         data : res.data.data
        //     }
        // }))
    }

    cardConverter=()=>
        this.state.data.map((item)=>(
            // console.log(item);
            <Card 
                avatar={item.avatar}
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                email = {item.email}
            />
        ));
    deleteCard=()=>{
        this.setState((prev)=>{
            const ele = [...prev.data];
            ele.splice(1,1);
            return{
                data : ele,
            }
        })
    }
    render(){
        return(
            <div className = 'App-container'>
                {/* <button onClick = {this.getData}>Click</button> */}
                {/* <button onClick = {this.getDataByAxios}>Click Axios</button> */}
                <button onClick = {this.deleteCard}>Delete</button>
            <div className = 'card-list'>
            {this.cardConverter()}
           </div>
           </div>
        );
    }
    componentDidMount(){
        this.getDataByAxios();
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))