import React from "react";
import Card from "./Card";

function GameBoard(props) {
    const characterImages = props.characterNames.map((name) => <Card key={name} name={name} callback={props.callback} />)
    return (
        <div className="gameBoard row">
            {characterImages}
        </div>
    );
}

export default GameBoard;
