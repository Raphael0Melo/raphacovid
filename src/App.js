import React, { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from './services/api'
import Card from './components/Card';

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
      //console.log(teste)
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

        <div className="row" >
          <div className="col-6 col-md-3">
            {country.length > 0 && (
              <Card
                title={country[0].country}
                textCard1={country[0].active}
                textCard2={country[0].cases}
                textCard3={country[0].casesPerOneMillion}
                textCard4={country[0].critical}
                textCard5={country[0].deaths}
                textCard6={country[0].deathsPerOneMillion}
                textCard7={country[0].recovered}
                textCard8={country[0].testsPerOneMillion}
                textCard9={country[0].todayCases}
                textCard10={country[0].todayDeaths}
                textCard11={country[0].totalTests}
              />
            )}
          </div>
        </div>


        {(search === '' || country.length === 0) && (
          <div className="row">
            {name.map((item) => {
              return (
                <div className="col-6 col-md-3" id="card-container">
                  <Card
                    title={item.country}
                    textCard1={item.active}
                    textCard2={item.cases}
                    textCard3={item.casesPerOneMillion}
                    textCard4={item.critical}
                    textCard5={item.deaths}
                    textCard6={item.deathsPerOneMillion}
                    textCard7={item.recovered}
                    textCard8={item.testsPerOneMillion}
                    textCard9={item.todayCases}
                    textCard10={item.todayDeaths}
                    textCard11={item.totalTests}
                  />
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
