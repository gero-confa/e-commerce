import React  from "react";


export default function Card (props) {
  return (
    <div className="card">
      <img src ={props.image}></img>
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button>Details</button>
    </div>
  )
}