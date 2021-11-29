import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

export const Delet = (props) => {
    const {
        setModalEliminar,
        modalEliminar,
        articuloSelect,
        data,
        setData
    } = props;

    const eliminar = () => {
        setData(data.filter(articulo => articulo.id !== articuloSelect.id));
        setModalEliminar(false);
    }

    return (
        <Modal isOpen={modalEliminar}>
            <ModalBody>
                <div className="text-center">
                    Estás seguro que deseas eliminar el articulo "<b>{articuloSelect.nombre}</b>"
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    className="btn btn-danger"
                    onClick={() => eliminar()}
                >
                    Sí
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => setModalEliminar(false)}
                >
                    No
                </button>
            </ModalFooter>
        </Modal>
    )
}