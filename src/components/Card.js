import React from "react"
import './Card.css'


function Card(props) {
  return (
    <div className="card-container">

      <div className="card">
        <h3 id="title-card">{props.title}</h3>
        <div className="card-body">
          <p className="card-title">Nº casos ativo: <span>{props.textCard1}</span> </p>
          <p className="card-title">Nº casos: <span>{props.textCard2}</span></p>
          <p className="card-title">Nº casos/milhão: <span>{props.textCard3}</span></p>
          <p className="card-title">Nº casos críticos: <span>{props.textCard4}</span> </p>
          <p className="card-title">Nº de mortes: <span>{props.textCard5}</span> </p>
          <p className="card-title">Nº de mortes/milhão: <span>{props.textCard6}</span> </p>
          <p className="card-text">Nº casos recuperados: <span>{props.textCard7}</span></p>
          <p className="card-text">Nº testes/milhão: <span>{props.textCard8}</span></p>
          <p className="card-text">Nº casos hoje: <span>{props.textCard9}</span></p>
          <p className="card-text">Nº de mortes hoje: <span>{props.textCard10}</span></p>
          <p className="card-text">Nº total de testes: <span>{props.textCard11}</span></p>
        </div>
      </div>

    </div>
  )
}

export default Card