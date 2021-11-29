import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const UpdateByCosto = (props) => {
    const {
        setModalEditar,
        articuloSelect,
        data,
        setData,
        setArticuloSelect
    } = props;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const costoInicial = parseFloat(articuloSelect.costo)

    const [costo, setCosto] = useState(costoInicial);

    const ID = articuloSelect.id

    const onSubmit = datosForm => {
        let iva = ivaValue()
        let precio = precioValue()
        let objetoNuevo = {
            id: ID,
            nombre: datosForm.nombre,
            costo: parseFloat(datosForm.costo),
            iva: iva,
            precio: precio
        }
        var dataNueva = data;
        dataNueva.map(articulo => {
            if (articulo.id === ID) {
                articulo.nombre = objetoNuevo.nombre;
                articulo.costo = objetoNuevo.costo;
                articulo.iva = objetoNuevo.iva;
                articulo.precio = objetoNuevo.precio;
            }
        });
        setData(dataNueva);
        setModalEditar(false)
    }

    const ivaValue = () => {
        var iva = (costo / 100) * 16
        return parseFloat(iva);
    }

    const precioValue = () => {
        var iva = (costo / 100) * 16
        return (parseFloat(iva) + parseFloat(costo));
    }

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "nombre") {
            setArticuloSelect((prevState) => ({
                ...prevState,
                [name]: value
            }));
        } else {
            let costoTemp = parseFloat(e.target.value)
            console.log(costoTemp);
            if (isNaN(costoTemp)) {
                costoTemp = null;
                setCosto(costoTemp);
                setArticuloSelect((prevState) => ({
                    ...prevState,
                    [name]: costoTemp
                }));
            } else {
                setCosto(costoTemp);
                setArticuloSelect((prevState) => ({
                    ...prevState,
                    [name]: costoTemp
                }));
            }
        }
    }

    return (
        <div>
            <hr />
            <div>
                <h5 className="text-center mt-4">Agregar por costo</h5>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID</label>
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    name="id"
                    value={articuloSelect.id}
                />
                <br />

                <label>Artículo</label>
                <input
                    {...register("nombre", {
                        required: "Nombre requerido"
                    })}
                    className="form-control"
                    type="text"
                    maxLength="30"
                    value={articuloSelect.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && (
                    <div className="text-danger">{errors.nombre.message}</div>
                )}
                <br />

                <label className="mt-2">Costo</label>
                <input
                    {...register("costo", {
                        required: "Costo requerido",
                        pattern: {
                            value: /^[0-9]+[.]+[0-9]*$/,
                            message: 'Solo numeros con decimal'
                        }
                    })
                    }
                    className="form-control"
                    name="costo"
                    type="number"
                    step="0.01"
                    value={articuloSelect.costo}
                    onChange={handleChange}
                />
                {errors.costo && (
                    <div className="text-danger">{errors.costo.message}</div>
                )}
                <br />

                <label>IVA (16%)</label>
                <input
                    className="form-control"
                    readOnly
                    name="iva"
                    value={ivaValue()}
                />
                <br />

                <label className="mt-2">Precio</label>
                <input
                    className="form-control"
                    readOnly
                    name="precio"
                    value={precioValue()}
                />
                <br />

                <button
                    className="btn btn-success mt-3"
                    type="submit"
                >
                    Editar
                </button>
            </form>
        </div>
    )
}