import React, { useEffect, useState } from 'react';
import CardVehiculo from './CardVehiculo';
import { Container, Row } from 'react-bootstrap';
import Swal from 'sweetalert2'
import * as api from '../utils/api.js';
import ModalEditVehiculo from './FormVehiculo/ModalEditVehiculo';

const ListadoVehiculos = () => {

    const [list, setList] = useState([]);
    const [updateList, setUpdateList] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({})

    const handleCloseModal = () => {setShowModal(false)}
    const handleOpenModal = () => {setShowModal(true)}

    useEffect(() => {
        api.getVehiculo().then((response) => {
            setList(response.data);
        })
        .catch(error => {
            Swal.fire(
                'Error',
                '¡Hubo un problema al mostrar los vehículos!',
                'error'
            )
        })
        setList([]);
    }, [updateList])

    return (
        <Container className="mb-5">
            <Row>
            {
                list.map((vehiculo, index) => (
                    <CardVehiculo
                        key={index}
                        vehiculo={vehiculo}
                        setUpdateList={setUpdateList}
                        updateList={updateList}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                        setDataModal={setDataModal}
                    />
                ))
            }
            </Row>

            <ModalEditVehiculo
                showModal={showModal}
                dataModal={dataModal}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleCloseModal= {handleCloseModal}
                handleOpenModal = {handleOpenModal}
                setDataModal= {setDataModal}
            />

        </Container>
    )
}

export default ListadoVehiculos
