import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './services/api'

function App() {

  const [name, setName] = useState([])

  useEffect(() => {
    myapi();
  })

  function myapi() {
    api.get("countries").then(response => {
      setName(response.data)
      console.log("teste", response)
    })
  }
  // myapi()

  return (
    <div className="App">
      <div className="container" id="container-card">
        <div className="col-12">
          <h3>Estatística de covid-19 pelo mundo</h3>
        </div>
        <div className="row">
          {name.map((item) => {
            return (
              <div className="col-6 col-md-3" id="card-container">

                <div className="card">
                  <h3 id="title-card">{item.country}</h3>
                  <div className="card-body">
                    <p className="card-title">Nº casos ativo: <span>{item.active}</span> </p>
                    <p className="card-title">Nº casos: <span>{item.cases}</span> </p>
                    <p className="card-title">Nº casos/milhão: <span>{item.casesPerOneMillion} </span></p>
                    <p className="card-title">Nº casos críticos: <span>{item.critical}</span> </p>
                    <p className="card-title">Nº de mortes: <span>{item.deaths}</span> </p>
                    <p className="card-title">Nº de mortes/milhão: <span>{item.deathsPerOneMillion}</span> </p>
                    <p className="card-text">Nº casos recuperados: <span>{item.recovered}</span></p>
                    <p className="card-text">Nº testes/milhão: <span>{item.testsPerOneMillion}</span></p>
                    <p className="card-text">Nº casos hoje: <span>{item.todayCases}</span></p>
                    <p className="card-text">Nº de mortes hoje: <span>{item.todayDeaths}</span></p>
                    <p className="card-text">Nº total de testes: <span>{item.totalTests}</span></p>
                    
                  </div>
                </div>

              </div>

            )
          })}
        </div>
      </div>

      {/* <div className="container" style={{ display: "flex", flexDirection: "row" }}>
        {name.map(item => {
          return (

            <div className='card' >
              <h3>{item.country}</h3>
              <p> <span>Total de casos:</span> {item.cases}</p>
              <p><span>Casos por dia:</span> {item.todayCases}</p>
            </div>

          )
        })}
      </div> */}
    </div>
  );
}

export default App;
