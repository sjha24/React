class BottamNav extends React.Component{
    constructor(props){
        super(props);
        //inline style apporach -1
        // this.divStyle = {
        //     position :'fixed',
        //     bottam:'0px',
        //     left:'0px',
        //     backgroundColor: 'aqua'   
        // }
    }
    render(){
        //inline style apporach -3
        const style = {
            position :'fixed',
            bottom:'0px',
            left:'0px',
            backgroundColor: 'aqua',
            width:'100vw',
            display:'flex',
            justifyContent:'space-evenly'
        }
        return(
            <div className = 'bottam-cnt' style = {
            // {
            //     //inline style apporach -2
            //     position :'fixed',
            //     bottam:'0px',
            //     left:'0px',
            //     backgroundColor: 'aqua'
            // }

            //apporact - 3
            style
            }>
                <button onClick = {()=>this.props.onChange(0)}>Home</button>
                <button onClick = {()=>this.props.onChange(1)}>Search</button>
                <button onClick = {()=>this.props.onChange(2)}>Reels</button>
                <button onClick = {()=>this.props.onChange(3)}>Activity</button>
                <button onClick = {()=>this.props.onChange(4)}>Profile</button>
            </div>
        );
    }
}