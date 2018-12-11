import React from "react"
import "./index.css"

const Button = props => {
  return (
    <div className="Button" onClick={props.event}>
      {props.text}
    </div>
  )
}

const Buttons = props => {
  return <div>button</div>
}

export default Button
