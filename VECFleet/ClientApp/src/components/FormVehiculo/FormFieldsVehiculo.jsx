import React from 'react';
import { Form, Row } from 'react-bootstrap';

const upperCase = ({ target }) => {
    target.value = target.value.toUpperCase()
}

const validateIsNumeric = (event) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
}

const FormFieldsVehiculo = ({ data, handleChange }) => {
    return(
        <div>
            <Row>
                <Form.Group className="mb-3 ">
                    <Form.Label>Tipo de vehículo</Form.Label>
                    <select
                        className="form-control"
                        name="TipoVehiculo"
                        value={data.TipoVehiculo}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="Automóvil">Automóvil</option>
                        <option value="Moto">Moto</option>
                    </select>
                </Form.Group>
                <Form.Group className="mb-3 ">
                    <Form.Label>Cantidad de ruedas</Form.Label>
                    <Form.Control
                        type="number"
                        name="CantidadRuedas"
                        placeholder="Se autocompleta con Tipo de vehículo"
                        maxLength="1"
                        disabled
                        value={!data ? "" : (data.TipoVehiculo === "Moto" ? "2" : (data.TipoVehiculo === "Automóvil" ? "4" : "")) }
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 ">
                    <Form.Label>Marca</Form.Label>
                    <select
                        className="form-control"
                        name="Marca"
                        value={data.Marca}
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
                <Form.Group className="mb-3 ">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        name="Modelo"
                        placeholder="Modelo"
                        maxLength="20"
                        value={data.Modelo}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 ">
                    <Form.Label>Patente</Form.Label>
                    <Form.Control
                        type="text"
                        name="Patente"
                        placeholder="Patente"
                        maxLength="20"
                        value={data.Patente}
                        onInput={upperCase}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 ">
                    <Form.Label>Número de Chasis</Form.Label>
                    <Form.Control
                        type="text"
                        name="NumeroChasis"
                        placeholder="Número de Chasis"
                        maxLength="20"
                        value={data.NumeroChasis}
                        onInput={upperCase}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group className="mb-3 ">
                    <Form.Label>KMs recorridos</Form.Label>
                    <Form.Control
                        type="text"
                        name="KMsRecorridos"
                        placeholder="KMs recorridos"
                        maxLength="9"
                        value={data.KMsRecorridos}
                        onKeyPress={validateIsNumeric}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3 ">
                    <Form.Label>KMs de próximo mantenimiento preventivo</Form.Label>
                    <Form.Control
                        type="text"
                        name="KMsParaMantenimiento"
                        placeholder="KMs de próximo mantenimiento preventivo"
                        maxLength="9"
                        value={data.KMsParaMantenimiento}
                        onKeyPress={validateIsNumeric}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </Row>
        </div>
    )
}

export default FormFieldsVehiculo;
