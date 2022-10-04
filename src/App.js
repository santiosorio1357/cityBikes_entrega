import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Networks from './components/Networks'

function App() {
  
  const [networks, setNetworks] = useState([]);

  let inicialUrl = "http://api.citybik.es/v2/networks";

  const fetchNetworks = (url) =>{
    fetch(url)
        .then(response => response.json())
        .then(data => setNetworks(data.networks))
        .catch(error => console.log(error))
  };

  useEffect(() =>{
    fetchNetworks(inicialUrl)

  },[])

  return (
    <>
      <Navbar brand={"CityBikes app"}/>
      <div className='container mt-4'>
        <center>
          <h2 className='card-title'>EMPRESAS</h2>
          <hr />
        </center>
        <Networks networks={networks}/>
      </div>
    </>
  );
}

export default App;
