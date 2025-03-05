import React from "react";
import './card.css'

function Card({data}){
    return (
        <div className="card">
            <img src={data.flag} alt={data.abbr} style={{width: '80%',height:'80%'}}/>
            <h3>{data.name}</h3>
        </div>
    )
}

export default Card;