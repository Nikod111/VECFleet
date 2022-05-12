import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import * as api from '../../utils/api.js';
import FormFieldsVehiculo from './FormFieldsVehiculo';

const ModalEditVehiculo = ({showModal, dataModal, setUpdateList, updateList, handleCloseModal, handleOpenModal, setDataModal}) => {

    const handleChangeModal = ({target}) => {
        setDataModal({
            ...dataModal,
            [target.name]: target.value
        })
    }

    const handleChangeTipoVehiculo = ({ target }) => {
        setDataModal({
            ...dataModal,
            CantidadRuedas: target.value === "Moto" ? "2" : (target.value === "Automóvil" ? "4" : "")
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        api.updateVehiculo(dataModal).then(response => {
            return response.data
        })
        .then(data => {
            Swal.fire(
                'Editado',
                `¡Se editó con éxito el vehículo con patente: ${dataModal.Patente}!`,
                'success'
            )
            handleCloseModal();
            setUpdateList(!updateList)
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
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
            <Modal.Title>Actualizar vehículo</Modal.Title>
        </Modal.Header>
        <Form onSubmit = {handleSubmit}>
            <Modal.Body>
            <FormFieldsVehiculo 
                data={dataModal}
                handleChange={handleChangeModal}
                handleChangeTipoVehiculo={handleChangeTipoVehiculo}
            />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" type="reset" onClick={handleCloseModal}>
                    Cancelar
                </button>
                <button className="btn btn-success" type="submit">
                    Guardar
                </button>
            </Modal.Footer>
        </Form>
        </Modal>
    )
}

export default ModalEditVehiculo;
