import React, {useState, useEffect} from "react"

interface ButtonProps{
    color:string,
    width:number,
    height:number,
    border:number
}

const Button = (props:ButtonProps) => {
    return (<button style={{color:`${props.color ? props.color : "navy blue"}`}}></button>);
}

export default Button