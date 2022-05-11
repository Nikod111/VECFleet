import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './styles/styles.css'
import * as api from '../utils/api.js';

const CardVehiculo = ({ vehiculo, setUpdateList, updateList}) => {

    const handleDelete = async () => {

        Swal.fire({
            title: `¿Estás seguro de eliminar el vehículo con patente: ${vehiculo.Patente}?`,
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, Eliminarlo'
          }).then((result) => {
            if (result.isConfirmed) {

                api.deleteVehiculo(vehiculo.Id).then(response => {
                    return response.data
                })
                .then(data => {
                    Swal.fire(
                        'Eliminado',
                        `¡Se eliminó con éxito el vehículo con patente: ${vehiculo.Patente}!`,
                        'success'
                    )
                    setUpdateList(!updateList)
                })
                .catch(error => {
                    Swal.fire(
                        'Error',
                        '¡Hubo un problema al eliminar el vehículo!',
                        'error'
                    )
                })
            }
          })
    }

    return (
        <div className="col-4 mb-3">
            <Card>
                <Card.Body>
                    <ListGroup className="mb-2">
                        <ListGroupItem><strong>Tipo de vehículo: </strong>{vehiculo.TipoVehiculo}</ListGroupItem>
                        <ListGroupItem><strong>Marca: </strong>{vehiculo.Marca}</ListGroupItem>
                        <ListGroupItem><strong>Modelo: </strong>{vehiculo.Modelo}</ListGroupItem>
                        <ListGroupItem><strong>Patente: </strong>{vehiculo.Patente}</ListGroupItem>
                        <ListGroupItem><strong>Chasis: </strong>{vehiculo.NumeroChasis}</ListGroupItem>
                        <ListGroupItem><strong>KMs recorridos: </strong>{vehiculo.KMsRecorridos}</ListGroupItem>
                        <ListGroupItem><strong>KMs para mantenimiento: </strong>{vehiculo.KMsParaMantenimiento}</ListGroupItem>
                    </ListGroup>
                    <button className="btn btn-danger me-2" onClick={handleDelete}>Eliminar</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardVehiculo
