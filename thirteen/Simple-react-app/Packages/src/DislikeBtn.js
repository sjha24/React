class DislikeBtn extends React.Component{
    render(){
        return(
            <div className = 'dislikeBtn'>
                <button onClick = {this.props.decrease}>Dislike Button</button>
            </div>
        );
    }
}
