import React, { useState } from 'react';
// import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Insert } from './Insert';

export const CRUD = () => {

    var dataArticulos = [
        { id: 1, nombre: "toalla", costo: 300, iva: 48, precio: 348 },
        { id: 2, nombre: "limonada", costo: 100, iva: 16, precio: 116 },
        { id: 3, nombre: "refresco", costo: 150, iva: 24, precio: 174 }
    ];

    const [data, setData] = useState(dataArticulos);
    const [modalEditar, setModalEditar] = useState(false);
    const [modalInsertar, setModalInsertar] = useState(false);

    const [articuloEdit, setArticuloEdit] = useState({
        id: '',
        nombre: '',
        costo: '',
        iva: '',
        precio: ''
    });

    const abrirModalInsertar = () => {
        setModalInsertar(true);
    }

    const editArticulo = (elemento, caso) => {
        setArticuloEdit(elemento);
        // (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    return (
        <div>
            <h3>
                Control de artículos
            </h3>
            <div className="container mt-4">
                <div className="">
                    <button className="btn btn-success"
                        onClick={() => abrirModalInsertar()}
                    >Agregar <AddIcon/></button>
                </div>
                <div className="table-responsive mt-3">
                    <table className="table text-center">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Costo</th>
                                <th>IVA</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(elemento => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.nombre}</td>
                                    <td>{elemento.costo}</td>
                                    <td>{elemento.iva}</td>
                                    <td>{elemento.precio}</td>
                                    <td className="optionBtns">
                                        <button className="btn btn-primary"
                                        // onClick={() => editArticulo(elemento, 'Editar')}
                                        >
                                            {/* Editar {"   "} */}
                                            <EditIcon
                                                fontSize="small"
                                            />
                                        </button>
                                        {/* {"   "} */}
                                        <button className="btn btn-danger"
                                        // onClick={() => seleccionarPais(elemento, 'Eliminar')}
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                        
                    <Insert
                        setModalInsertar = {setModalInsertar}
                        data = {data}
                        modalInsertar = {modalInsertar}
                        setData = {setData}
                    />
                </div>
            </div>
        </div>
    )
}