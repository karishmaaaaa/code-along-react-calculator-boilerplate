import React from "react";
import '../Style/Button.css'

const Buttons = (props) => {

    let {value, takeInput} = props;

    return(
        <>
            <button onClick={() => {takeInput(value)}}>{value}</button>
        </>
    )
}

export default Buttons;
