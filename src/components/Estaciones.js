import React from 'react'

const Estaciones = (info) =>{
    const stations = info.data.stations
    const msg = "Dato no encontrado"
    console.log(info.data.stations);

  return (
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <center>
                    <h5 class="modal-title">Modal title</h5>
                </center>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" onClick={info.onHide}>Cerrar</button>
            </div>
            </div>
        </div>
    </div>
  )

  
}

export default Estaciones