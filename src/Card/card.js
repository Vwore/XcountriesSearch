import React from "react";
import './card.css'

function Card({data}){
    return (
        <div className="countryCard">
            <img src={data.png} alt={data.common} style={{width: '80%',height:'80%'}}/>
            <h3>{data.common}</h3>
        </div>
    )
}

export default Card;