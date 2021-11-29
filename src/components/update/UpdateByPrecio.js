import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const UpdateByPrecio = (props) => {

    const {
        setModalEditar,
        articuloSelect,
        data,
        setData,
        setArticuloSelect
    } = props;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const precioInicial = parseFloat(articuloSelect.precio)
    const [precio, setPrecio] = useState(precioInicial);

    const ID = articuloSelect.id

    const onSubmit = datosForm => {
        let iva = ivaValue()
        let costo = costoValue()
        let objetoNuevo = {
            id: ID,
            nombre: datosForm.nombre,
            costo: datosForm.precio,
            iva: iva,
            precio: costo
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
        var iva = (precio / 116) * 16
        return parseFloat(iva);
    }

    const costoValue = () => {
        var costo = (precio / 116) * 100
        return parseFloat(costo);
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
            if (isNaN(costoTemp)){
                costoTemp = null;
                setPrecio(costoTemp);
                setArticuloSelect((prevState) => ({
                    ...prevState,
                    [name]: costoTemp
                }));
            } else {
                setPrecio(costoTemp);
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
                    className="form-control"
                    readOnly
                    name="costo"
                    value={costoValue()}
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
                    {...register("precio", {
                        required: "Precio requerido",
                        pattern: {
                            value: /^[0-9]+[.]+[0-9]*$/,
                            message: 'Solo numeros con decimal'
                        }
                    })
                    }
                    className="form-control"
                    type="number"
                    name="precio"
                    step="0.01"
                    value={articuloSelect.precio}
                    onChange={handleChange}
                />
                {errors.precio && (
                    <div className="text-danger">{errors.precio.message}</div>
                )}
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