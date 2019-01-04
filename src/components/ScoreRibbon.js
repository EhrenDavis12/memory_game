import React from "react";

function ScoreRibbon(props) {

    return (
        <div className="row scoreRibbon">
            <div className="currentScore col-md-6">
                Score: {props.scores.currentScore}
            </div>
            <div className="maxScore col-md-6">
                best Score: {props.scores.highScore}
            </div>
        </div>
    );
}

export default ScoreRibbon;
