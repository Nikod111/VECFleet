import React from 'react'
import { Container } from 'react-bootstrap';
import ListadoVehiculos from '../components/ListadoVehiculos';

const App = () => {
    return (
        <Container fluid className="mt-4">
            <h1 className="text-center mb-3">Gesti&oacute;n de veh&iacute;culos</h1>
            <ListadoVehiculos />
        </Container>
    )
}

export default App;
