import React, { Component } from "react";
import GameBoard from "./GameBoard";
import ScoreRibbon from "./ScoreRibbon";
import { shuffle } from 'underscore';

class GameBoardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenCharacterNames: [],
            currentScore: 0,
            highScore: 0,
            characterNames: ["agnes", "barney", "brockman",
                "cletus", "crazy_cat_lady", "drnick", "duffman", "fat_tony",
                "frink", "grampa", "horatio_mccallister", "kang", "kodos", "lovejoy",
                "moe", "mr_burns", "patty_bouvier", "ralph", "selma_bouvier",
                "sideshow_bob", "smithers", "willie"]
        };
    }

    componentDidMount() {
        this.startGame();
        this.setState({
            highScore: 0
        });
    }

    startGame = () => {
        this.shuffleCards();
        this.setState({
            chosenCharacterNames: [],
            currentScore: 0
        });
    }

    handleCharacterSelect = (id) => {
        const didLoseGame = this.state.chosenCharacterNames.includes(id);
        didLoseGame ? this.badSelect() : this.goodSelect(id);
    };

    goodSelect = (id) => {
        const newCurrentScore = this.state.currentScore + 1
        const newHighScore = newCurrentScore >= this.state.highScore ?
            newCurrentScore :
            this.state.highScore;

        this.setState({
            chosenCharacterNames: [...this.state.chosenCharacterNames, id],
            currentScore: newCurrentScore,
            highScore: newHighScore
        }, () => {
            this.shuffleCards();
        });
    }

    badSelect = () => {
        this.startGame();
    }

    shuffleCards = () => {
        this.setState({
            characterNames: shuffle(this.state.characterNames)
        });
    };

    render() {
        const { currentScore, highScore, characterNames } = this.state;
        return (
            <div>
                <ScoreRibbon scores={{currentScore, highScore}}/>
                <GameBoard characterNames={characterNames} callback={this.handleCharacterSelect} />
            </div>
        );
    }
}

export default GameBoardContainer;
