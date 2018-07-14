import React, {Component} from 'react';
import './App.css';


const PlayerCard = ({color, symbol}) => {
    const styles = {
        backgroundColor: color,
        backgroundImage: `url(./img/${symbol}.png`
    };
    return (
        <div style={styles} className="player-card">
            {symbol}
        </div>
    )
};

class App extends Component {

    constructor(props) {
        super(props);

        this.symbols = ["rock", "paper", "scissors"];

        this.state = {}
    }

    runGame = () => {
        this.setState({
            playerRed: this.randomSymbol(),
            playerBlue: this.randomSymbol()
        })
    };

    randomSymbol() {
        const index = Math.floor(Math.random() * 3);
        return this.symbols[index]
    }

    render() {
        return (
            <div className="App">
                <PlayerCard color="red" symbol={this.state.playerRed}/>
                <PlayerCard color="blue" symbol={this.state.playerBlue}/>
                <button onClick={this.runGame}>Run Game</button>
            </div>
        );
    }
}

export default App;
