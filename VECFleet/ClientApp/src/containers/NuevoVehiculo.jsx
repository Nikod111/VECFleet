import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as api from '../utils/api.js';
import FormFieldsVehiculo from '../components/FormVehiculo/FormFieldsVehiculo';

const NuevoVehiculo = () => {

    const history = useHistory();

    const [data, setData] = useState({
        CantidadRuedas: "", Marca: "", Modelo: "", Patente: "", NumeroChasis: "", KMsRecorridos: "", KMsParaMantenimiento: ""
    })
    
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const handleChangeTipoVehiculo = ({ target }) => {
        setData({
            ...data,
            CantidadRuedas: target.value === "Moto" ? "2" : (target.value === "Automóvil" ? "4" : "")
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        api.createVehiculo(data).then(response => {
            return response.data
        })
        .then(data => {
            Swal.fire(
                'Guardado',
                `¡Se guardó con éxito el vehículo con patente: ${data.Patente}!`,
                'success'
            )
            history.push('/')
        })
        .catch(error => {
            Swal.fire(
                'Error',
                '¡Hubo un problema al guardar el vehículo!',
                'error'
            )
        })
    }

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-3">Nuevo vehículo</h1>
            <Form onSubmit={handleSubmit}>
                <FormFieldsVehiculo
                    data={data}
                    handleChange={handleChange}
                    handleChangeTipoVehiculo={handleChangeTipoVehiculo}
                />
                <button className="btn btn-success">Guardar</button>
            </Form>
                
        </Container>
    )
}

export default NuevoVehiculo;
