import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Insert } from './create/Insert';
import { Delet } from './delet/Delet';
import { Update } from './update/Update';

export const CRUD = () => {

    var dataArticulos = [
        { id: 1, nombre: "toalla", costo: 300, iva: 48, precio: 348 },
        { id: 2, nombre: "limonada", costo: 100, iva: 16, precio: 116 },
        { id: 3, nombre: "refresco", costo: 150, iva: 24, precio: 174 }
    ];

    const [data, setData] = useState(dataArticulos);
    const [modalInsertar, setModalInsertar] = useState(false);
    const [modalEliminar, setModalEliminar] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);

    const [articuloSelect, setArticuloSelect] = useState({
        id: '',
        nombre: '',
        costo: '',
        iva: '',
        precio: ''
    });

    const abrirModalInsertar = () => {
        setModalInsertar(true);
    }

    const seleccionArticulo = (articulo, caso) => {
        setArticuloSelect(articulo);
        (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
    }

    return (
        <div>
            <div className="title">
                <h2 className="text-center">
                    Control de artículos
                </h2>
            </div>
            
            <div className="container mt-4">
                <div className="">
                    <button className="btn btn-success"
                        onClick={() => abrirModalInsertar()}
                    >Agregar <AddIcon /></button>
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
                            {data.map(articulo => (
                                <tr>
                                    <td>{articulo.id}</td>
                                    <td>{articulo.nombre}</td>
                                    <td>{articulo.costo}</td>
                                    <td>{articulo.iva}</td>
                                    <td>{articulo.precio}</td>
                                    <td className="optionBtns">
                                        <button className="btn btn-primary"
                                            onClick={() => seleccionArticulo(articulo, 'Editar')}
                                        >
                                            <EditIcon
                                                fontSize="small"
                                            />
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => seleccionArticulo(articulo, 'Eliminar')}
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <Insert
                        setModalInsertar={setModalInsertar}
                        data={data}
                        modalInsertar={modalInsertar}
                        setData={setData}
                    />

                    <Delet
                        articuloSelect = {articuloSelect}
                        setModalEliminar = {setModalEliminar}
                        modalEliminar = {modalEliminar}
                        data = {data}
                        setData = {setData}
                    />

                    <Update
                        articuloSelect = {articuloSelect}
                        setModalEditar = {setModalEditar}
                        modalEditar = {modalEditar}
                        data = {data}
                        setData = {setData}
                        setArticuloSelect = {setArticuloSelect}
                    />
                </div>
            </div>
        </div>
    )
}