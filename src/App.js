import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './services/api'

function App() {

  const [name, setName] = useState([])
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState([])

  useEffect(() => {
    myapi();
  })

  function myapi() {
    api.get("countries").then(response => {
      setName(response.data)
      //console.log("teste", response)
    })
  }

  function clearCountry() {
    setCountry([]);
  }

  function searchClick(e) {
    if (search !== '') {
      const teste = name.filter((item) =>
        item.country === search
      )
      console.log(teste)
      setCountry(teste)
    }
  }


  return (
    <div className="App">
      <div className="container" id="container-card">
        <div className="col-12">
          <h3>Estatística de covid-19 pelo mundo</h3>
        </div>
        <div>
          <input
            type="text"
            className='search'
            placeholder='Pesquisar por país'
            value={search}
            onChange={(e) => setSearch(e.target.value) + clearCountry()}
          />

          <button
            type="button"
            className="btn btn-primary"
            id='button'
            onClick={searchClick}

          >
            Pesquisar
          </button>

        </div>
        {country.length > 0 && (
          <div className="row" >
            <div className="col-6 col-md-3">
              <div className="card">
                <h3 id="title-card">{country[0].country}</h3>
                <div className="card-body">
                  <p className="card-title">Nº casos ativo: <span>{country[0].active}</span> </p>
                  <p className="card-title">Nº casos: <span>{country[0].cases}</span> </p>
                  <p className="card-title">Nº casos/milhão: <span>{country[0].casesPerOneMillion} </span></p>
                  <p className="card-title">Nº casos críticos: <span>{country[0].critical}</span> </p>
                  <p className="card-title">Nº de mortes: <span>{country[0].deaths}</span> </p>
                  <p className="card-title">Nº de mortes/milhão: <span>{country[0].deathsPerOneMillion}</span> </p>
                  <p className="card-text">Nº casos recuperados: <span>{country[0].recovered}</span></p>
                  <p className="card-text">Nº testes/milhão: <span>{country[0].testsPerOneMillion}</span></p>
                  <p className="card-text">Nº casos hoje: <span>{country[0].todayCases}</span></p>
                  <p className="card-text">Nº de mortes hoje: <span>{country[0].todayDeaths}</span></p>
                  <p className="card-text">Nº total de testes: <span>{country[0].totalTests}</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {(search === '' || country.length === 0) && (
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
        )}

      </div>
    </div>
  );
}

export default App;
