import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { UpdateByCosto } from './UpdateByCosto';
import { UpdateByPrecio } from './UpdateByPrecio';

export const Update = (props) => {
    const {
        setModalEditar,
        modalEditar,
        articuloSelect,
        data,
        setData,
        setArticuloSelect
    } = props;

    const [indicator, setIndicator] = useState(0);

    return (
        <Modal isOpen={modalEditar}>
            <ModalHeader>
                <div>
                    <h3>Editar Articulo "<b></b>"</h3>
                </div>
            </ModalHeader>
            <ModalBody>
            <div className="btnsInsert">
                    <button
                        className="btn btn-primary"
                        variant="primary"
                        onClick={() => {
                            setIndicator(1);
                        }}
                    >
                        Editar por Costo
                    </button>
                    <button
                        className="btn btn-primary"
                        variant="primary"
                        onClick={() => {
                            setIndicator(2);
                        }}
                    >
                        Editar por Precio
                    </button>
                </div>

                {indicator === 1 ? (
                    <UpdateByCosto
                        articuloSelect = {articuloSelect}
                        setArticuloSelect = {setArticuloSelect}
                        data = {data}
                        setData = {setData}
                        setModalEditar = {setModalEditar}
                    />
                ) : null}
                {indicator === 2 ? (
                    <UpdateByPrecio
                        articuloSelect = {articuloSelect}
                        setArticuloSelect = {setArticuloSelect}
                        data = {data}
                        setData = {setData}
                        setModalEditar = {setModalEditar}
                    />
                ) : null}

            </ModalBody>
            <ModalFooter>
                <button
                    className="btn btn-danger"
                    onClick={() => setModalEditar(false)}
                >
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    )
}