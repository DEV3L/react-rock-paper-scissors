import React, {Component} from 'react';
import './App.css';


const PlayerCard = ({color, symbol}) => {
    const styles = {
        backgroundColor: color,
        backgroundImage: `url(./img/${symbol}.png`
    };
    return (
        <div style={styles} className="player-card"/>
    )
};

class App extends Component {
    constructor(props) {
        super(props);

        this.symbols = ["rock", "paper", "scissors"];

        this.state = {
            playerRed: this.randomSymbol(),
            playerBlue: this.randomSymbol()
        }
    }

    decideWinner = () => {
        const {playerBlue, playerRed} = this.state;

        if (playerBlue === playerRed) {
            return "It's a draw!"
        }
        if ((playerBlue === "rock" && playerRed === "scissors") ||
            (playerBlue === "paper" && playerRed === "rock") ||
            (playerBlue === "scissors" && playerRed === "paper")) {
            return "Blue player wins!"
        }

        return "Red player wins!"
    };

    runGame = () => {
        let counter = 0;

        const gameInterval = setInterval(() => {
            counter++;
            this.setState({
                playerRed: this.randomSymbol(),
                playerBlue: this.randomSymbol(),
                winner: ""
            });
            if (counter > 10) {
                clearInterval(gameInterval);
                this.setState({winner: this.decideWinner()})
            }
        }, 150)
    };

    randomSymbol() {
        const index = Math.floor(Math.random() * 3);
        return this.symbols[index]
    }

    render() {
        return (
            <div className="App">
                <h2>Rock, Paper, Scissors!</h2>
                <PlayerCard color="red" symbol={this.state.playerRed}/>
                <PlayerCard color="blue" symbol={this.state.playerBlue}/>
                {this.state.winner &&
                <p>{this.state.winner}</p>
                }
                <button onClick={this.runGame}>Run Game</button>
            </div>
        );
    }
}

export default App;
