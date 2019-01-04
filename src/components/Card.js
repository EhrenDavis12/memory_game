import React from "react";

function Card(props) {
  return (

    <div className="imageContainer">
      <img id={`char-${props.name}`}
        onClick={e => props.callback(e.target.id)}
        src={require(`../images/${props.name}.png`)} alt="" />
    </div>
  );
}

export default Card;
