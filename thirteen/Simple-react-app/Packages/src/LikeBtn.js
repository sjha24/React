class LikeBtn extends React.Component{
    render(){
        return(
            <div className = 'likeBtn'>
                <button onClick = {this.props.increase}>Like Button</button>
            </div>
        );
    }
}