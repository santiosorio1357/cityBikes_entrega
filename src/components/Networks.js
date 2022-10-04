import React,{useEffect, useState} from 'react'
import Estaciones from './Estaciones'

const Networks = ({ networks = [] }) =>{

    const [company, setCompany] = useState([])
    const [modalShow, setModalShow] = useState(false);

    const fetchEstaciones = (url) =>{
        let estacionUrl = "http://api.citybik.es" 
        estacionUrl = estacionUrl + url
        fetch(estacionUrl)
            .then(response => response.json())
            .then(data => setCompany(data.network))
            .catch(error => console.log(error))      
        setModalShow(true);      
    }

    return(
        
        <div className='row'>
            <div>
                {modalShow ? (
                <Estaciones
                    data={company}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                ) : null}
            </div>
            {
                networks.map((item,index) =>(
                    <div key={index} className='col mb-4' >
                        <div className='card' style={{minWidth: "300px"}}>
                            <div className='card-body'>
                                <center>
                                    <h5 className='card-title'>Nombre de red: </h5>
                                    <p>{item.name}</p>
                                    <h5 className='card-title'>Nombre de la Compañía: </h5>
                                    <p>{item.company}</p>
                                    <h5 className='card-title'>País y ciudad</h5>
                                    <p>{item.location.country} y {item.location.city}</p>
                                    <button type="button" class="btn btn-dark" onClick={() => fetchEstaciones(item.href) } >Cargar estaciones </button>
                                </center> 
                            </div> 
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Networks