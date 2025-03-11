import React from "react";
import './card.css'

function Card({data}){
    return (
        <div className="countryCard">
            <img src={data.png} alt={data.common} style={{width: '80%',height:'80%'}}/>
            <h2>{data.common}</h2>
        </div>
    )
}

export default Card;