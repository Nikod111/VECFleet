import React, { useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as api from '../utils/api.js';

const NuevoVehiculo = () => {

    const history = useHistory();

    const [data, setData] = useState({
        CantidadRuedas: ""
    })
    
    const handleChange = ({target}) => {
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const upperCase = ({ target }) => {
        target.value = target.value.toUpperCase()
    }

    const validateIsNumeric = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
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
            <h1 className="text-center mb-3">Nuevo Vehículo</h1>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Tipo de vehículo</Form.Label>
                        <select
                            className="form-control"
                            name="TipoVehiculo"
                            onInput={handleChangeTipoVehiculo}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="Automóvil">Automóvil</option>
                            <option value="Moto">Moto</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Cantidad de ruedas</Form.Label>
                        <Form.Control
                            type="number"
                            name="CantidadRuedas"
                            placeholder="Seleccione una opción de Tipo de vehículo y se autocompletará"
                            maxLength="1"
                            disabled
                            value={data.CantidadRuedas}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Marca</Form.Label>
                        <select
                            className="form-control"
                            name="Marca"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione una opción</option>
                            <option value="YAMAHA">YAMAHA</option>
                            <option value="SUZUKI">SUZUKI</option>
                            <option value="HONDA">HONDA</option>
                            <option value="FORD">FORD</option>
                            <option value="FOCUS">FOCUS</option>
                        </select>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                            type="text"
                            name="Modelo"
                            placeholder="Modelo"
                            maxLength="20"
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Patente</Form.Label>
                        <Form.Control
                            type="text"
                            name="Patente"
                            placeholder="Patente"
                            maxLength="20"
                            onInput={upperCase}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Número de Chasis</Form.Label>
                        <Form.Control
                            type="text"
                            name="NumeroChasis"
                            placeholder="Número de Chasis"
                            maxLength="20"
                            onInput={upperCase}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>KMs recorridos</Form.Label>
                        <Form.Control
                            type="text"
                            name="KMsRecorridos"
                            placeholder="KMs recorridos"
                            maxLength="9"
                            onKeyPress={validateIsNumeric}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 col-4">
                        <Form.Label>KMs de próximo mantenimiento preventivo</Form.Label>
                        <Form.Control
                            type="text"
                            name="KMsParaMantenimiento"
                            placeholder="KMs de próximo mantenimiento preventivo"
                            maxLength="9"
                            onKeyPress={validateIsNumeric}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Row>

                <button className="btn btn-success">Guardar</button>
            </Form>
                
        </Container>
    )
}

export default NuevoVehiculo;
