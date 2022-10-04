import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';


const Estaciones = (props) =>{

    const stations = props.data.stations
    var totalBicis = 0
    var totalEspacios = 0

    if(!stations) return (<></>)
    
    if(!stations){
        for (let i = 0; i < stations.length; i++) {
            if (stations.free_bikes[i] == null || stations.empty_slots[i] == null) {
                totalEspacios += 0
                totalBicis +=0
            }else{
                totalBicis += stations.free_bikes[i]
                totalEspacios += stations.empty_slots[i]
            }
        }
    }
    
    const msg = "Dato no encontrado"

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Body>
            <Modal.Title id="contained-modal-title-vcenter" >
                Estaciones
            </Modal.Title>
            <hr></hr>
            <div >
                {stations.map(station => {
                    if (station.free_bikes != null) {
                        var bicis = station.free_bikes
                        totalBicis += bicis 
                    }else{
                        bicis = 0
                    }
                    if (station.empty_slots != null) {
                        var espacios = station.empty_slots
                        totalEspacios += espacios
                    }else{
                        espacios = 0
                    }
                    return (
                        <>
                        <Card.Title key={station.id}>{station.name}</Card.Title>
                        <Card.Text>Última Actualización: {station.timestamp}</Card.Text>
                        <Card.Text>Bicicicletas Libres: {station.free_bikes === null ? msg : station.free_bikes}</Card.Text>
                        <Card.Text>Espacios Libres: {station.empty_slots === null ? msg : station.empty_slots}</Card.Text>
                        <Card.Text>Total Espacios: {bicis + espacios}</Card.Text>
                        <hr></hr>
                        </>
                    )
                })}  
            </div>                           
            </Modal.Body>
        </Modal.Header>
        <Modal.Footer>
            <Card.Text>Total de bicicletas: {totalBicis}</Card.Text>
            <Card.Text>Total de espacios libres: {totalEspacios}</Card.Text>
            <Button variant="secondary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default Estaciones