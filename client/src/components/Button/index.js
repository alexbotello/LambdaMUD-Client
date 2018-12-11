import React from "react";
import "./index.css";

const Button = props => {
  return (
    <div className="Button" onClick={props.event}>
      {props.text}
    </div>
  );
};

class Buttons extends React.Component {
  render() {
    return (
      <div>
        button
      </div>
    )
  }
}

export default Button;
