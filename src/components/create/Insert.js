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
                <div className="btnsInsert">
                    <button
                        className="btn btn-primary"
                        variant="primary"
                        onClick={() => {
                            setIndicator(1);
                        }}
                    >
                        Agregar por Costo
                    </button>
                    <button
                        className="btn btn-primary"
                        variant="primary"
                        onClick={() => {
                            setIndicator(2);
                        }}
                    >
                        Agregar por Precio
                    </button>
                </div>


                {indicator === 1 ? (
                    <ByCosto
                        data={data}
                        setModalInsertar={setModalInsertar}
                        setData={setData}
                    />
                ) : null}
                {indicator === 2 ? (
                    <ByPrecio
                        data={data}
                        setModalInsertar={setModalInsertar}
                        setData={setData}
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