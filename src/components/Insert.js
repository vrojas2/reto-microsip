import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import { ByCosto } from './ByCosto';
import { ByPrecio } from './ByPrecio';


export const Insert = (props) => {
    const { data, setModalInsertar, modalInsertar, setData } = props;

    const [indicator, setIndicator] = useState(0);

    return (
        <Modal isOpen={modalInsertar}>
            <ModalHeader>
                <div>
                    <h3>Agregar un artículo</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <button
                    variant="primary"
                    onClick={() => {
                        setIndicator(1);
                        // setModalIndicator(2);
                    }}
                >
                    Agregar por Costo
                </button>
                <button
                    variant="primary"
                    onClick={() => {
                        setIndicator(2);
                    }}
                >
                    Agregar por Precio
                </button>

                {indicator === 1 ? (
                    <ByCosto
                        data={data}
                        setModalInsertar={setModalInsertar}
                        setData = {setData}
                    />
                ) : null}
                {indicator === 2 ? (
                    <ByPrecio
                        data = {data}
                        setModalInsertar = {setModalInsertar}
                        setData = {setData}
                    />
                ) : null}
                
            </ModalBody>
            <ModalFooter>
                <button
                    className="btn btn-danger"
                    onClick={() => setModalInsertar(false)}
                >
                    Cancelar
                </button>
            </ModalFooter>
        </Modal>
    )
}