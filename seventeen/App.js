class App extends React.Component{
    constructor(){
        super()
        this.state = {
            Name : "",
            Job : "",
            File : ''
        }
    }

    // fetchDataThrough=()=>{
    //     axios.get('https://reqres.in/api/users')
    //     .then((ele)=>this.setState({data : ele.data.data}))
    // }

    postData =(user)=>{

        axios.post('https://reqres.in/api/users',{user})
        .then((res)=>{
            console.log(res.data);
        })
    }

    changeName =(event)=>{
        this.setState({Name : event.target.value})
        // console.log(event.target.value)
    }

    changeJob =(event)=>{
        this.setState({Job : event.target.value})
        // console.log(event.target.value)
    }

    submitForm = (e)=>{
        e.preventDefault()
        // console.log("Submit Form")
        const user = {
            name : this.state.Name,
            job : this.state.Job,
        }

        // axios.post('https://reqres.in/api/users',{user})
        // .then((res)=>{
        //     console.log(res.data.user);
        // })
        this.postData(user);

        // console.log(this.state.Name +" "+this.state.Job)
    }

    // img =(event)=>{
    //     this.setState({File : event.target.value})
    //     console.log(this.img)
    // }

    render(){
        return(
            <div className = "app-class">
                <h1>This is App Component</h1>
                {/* <button>Post some Data</button> */}
                <form onSubmit = {this.submitForm}>
                    <div>
                        <label>Name</label>
                        <input placeholder = "Name" value = {this.state.Name} onChange = {this.changeName} type = 'text'></input>
                    </div>
                    <div>
                        <label>Job</label>
                        <input placeholder = "Job" value = {this.state.Job} onChange = {this.changeJob} type = 'text'></input>
                    </div>
                    {/* <div>
                        <label>Image</label>
                        <input placeholder = "Img" value = {this.state.File} onChange = {this.img} type = 'file'></input>
                    </div> */}
                        <button type = "submit">Submit</button>
                </form>
            </div>
        );
    }
    // componentDidMount(){
        // this.fetchDataThrough();
        // this.postData();
    // }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)