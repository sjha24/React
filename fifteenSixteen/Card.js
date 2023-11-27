class Card extends React.Component{
    constructor(props){
        super(props),
        this.state = {
            countLikeDislike :0
        }
    }
    likeCounterHandle=()=>{
        // this.setState({countLikeDislike:this.state.countLikeDislike+1})
        this.setState(prev=>{
            return{
                countLikeDislike : prev.countLikeDislike+1
            }
        })
    }
    DisikeCounterHandle=()=>{
        if(this.state.countLikeDislike>0){
            // this.setState({countLikeDislike:this.state.countLikeDislike-1})
            this.setState(prev=>{
                return{
                    countLikeDislike : prev.countLikeDislike - 1
                }
            })
        }
    }
    render(){
        // const obj = {
            //     id: 1,
        //     avatar: "https://reqres.in/img/faces/1-image.jpg",
        //     email: "george.bluth@reqres.in",
        //     first_name: "George",
        //     last_name: "Bluth"
        // }
        return(
            <div className = 'Card-Container'>
                {/* {this.props.avatar} */}
                <img src = {this.props.avatar}></img>
                <small>Id - {this.props.id}</small>
                <small>Name - {this.props.first_name+" "+this.props.last_name}</small>
                <small>Email - {this.props.email}</small>
                <div className='likeDislikeBtn'>
                    <button onClick = {this.likeCounterHandle}>👍</button>
                    {this.state.countLikeDislike}
                    <button onClick = {this.DisikeCounterHandle}>👎</button>
                </div>
                {/* {this.likeDislikeCounterHandle} */}
            </div>
        );
    }
}