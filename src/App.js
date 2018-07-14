import React, {Component} from 'react';

import {Button, Card, CardBody, CardTitle, Row} from "reactstrap"

import './App.css';


const PlayerCard = ({color, symbol, winner}) => {
    const styles = {
        backgroundColor: color,
        backgroundImage: `url(./img/${symbol}.png`,
        opacity: winner === color || winner === "" ? 1 : .35
    };
    return (
        <div style={styles} className="m-3 shadow rounded-circle border border-dark player-card"/>
    )
};

class App extends Component {
    constructor(props) {
        super(props);

        this.symbols = ["rock", "paper", "scissors"];

        this.state = {
            playerRed: "rock",
            playerGreen: "rock",
            winner: "",
            message: "Let's Play A Game!"
        }
    }

    render() {
        const {playerGreen, playerRed, winner, message} = this.state;
        return (
            <Row className="my-5 text-center">
                <Card className="mx-auto">
                    <CardBody className="shadow-lg">
                        <CardTitle className="border-bottom">
                            <h1>Rock, Paper, Scissors</h1>
                        </CardTitle>
                        <Row className="mx-3 my-2">
                            <PlayerCard color="Green" symbol={playerGreen} winner={winner}/>
                            <PlayerCard color="Red" symbol={playerRed} winner={winner}/>
                        </Row>
                        <h4 className="py-3">{message}&nbsp;</h4>
                        <Button color="primary" size="lg" className="my-2 w-75"
                                onClick={this.runGame}>Run Game</Button>
                    </CardBody>
                </Card>
            </Row>
        );
    }

    runGame = () => {
        let counter = 0;

        const gameInterval = setInterval(() => {
            counter++;
            this.setState({
                playerRed: this.randomSymbol(),
                playerGreen: this.randomSymbol(),
                winner: ""
            });
            if (counter > 10) {
                clearInterval(gameInterval);
                const winner = this.decideWinner();
                const message = winner === "draw"
                    ? "It's a draw!"
                    : `${winner} player wins!`;
                this.setState({message, winner})
            }
        }, 125)
    };

    randomSymbol() {
        const index = Math.floor(Math.random() * 3);
        return this.symbols[index]
    }

    decideWinner = () => {
        const {playerGreen, playerRed} = this.state;

        if (playerGreen === playerRed) {
            return "draw"
        }
        if ((playerGreen === "rock" && playerRed === "scissors") ||
            (playerGreen === "paper" && playerRed === "rock") ||
            (playerGreen === "scissors" && playerRed === "paper")) {
            return "Green"
        }

        return "Red"
    };
}

export default App;
