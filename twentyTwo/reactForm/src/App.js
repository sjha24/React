class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list : Array(9).fill(null),
            flag : true,//when flaf true -> x play else O play
        }
        this.winnerStatus = false; 
    }


    changeHandler=(i)=>{
        console.log('This is app',i)
        const squareList = this.state.list;
        if(squareList[i]===null){
            if(this.state.flag == true){
                squareList[i] = 'X';
            }else{
                squareList[i] = 'O';
            }
        }
        const newFlag = !this.state.flag;
      
        this.setState({
            list : squareList,
            flag : newFlag
        })
    }
    
    checkWiner=()=>{
        let winner = "";
        const line = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        for(let i = 0; i<line.length; i++){
            const [a,b,c] = line[i];
            const s = this.state.list;
            if(s[a] != null && s[a] === s[b] && s[a]===s[c]){
                if(this.state.flag === true){
                    this.winnerStatus = true;
                    winner =  `Congratulation You Are Winner -  O`;

                }else{
                    this.winnerStatus = true;
                    winner = `Congratulation You Are Winner -  X`;
                }
            }
            
            if(this.winnerStatus === true){
                return winner;
            }
        }
    }

    gameReset =()=>{
        this.setState({
            list : this.state.list.fill(null)
        })
    }

    random=()=>{
        const r = Math.floor(Math.random()*9);
        const squareList = this.state.list;
        if(squareList[r] === null){
            squareList = "O";
        }
    }

    renderSquare=(x)=>{
        return <Square value = {this.state.list[x] } changeParentState = {()=>this.changeHandler(x)}/>
    }

    render(){
        // console.log(this.state.list)
        return(
            <div className = "App-container">
                <div className= "row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className= "row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className= "row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <h2>{this.checkWiner()}</h2>
            </div>  
        );
    }
    componentDidMount() {
        if(this.winnerStatus === true){
            this.gameReset();
        } 
    }
}