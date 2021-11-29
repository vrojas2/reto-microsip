import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const ByCosto = (props) => {
    const { data, setModalInsertar, setData } = props;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [costo, setCosto] = useState(0);

    const nuevoID = data[data.length - 1].id + 1;

    const onSubmit = datosForm => {
        let iva = ivaValue()
        let precio = precioValue()
        let objetoNuevo = {
            id: nuevoID,
            nombre: datosForm.nombre,
            costo: datosForm.costo,
            iva: iva,
            precio: precio
        }
        var dataNueva = data;
        dataNueva.push(objetoNuevo);

        setData(dataNueva);
        setModalInsertar(false)
    }

    const handleChange = e => {
        setCosto(e.target.value);
    }

    const ivaValue = () => {
        var iva = (costo / 100) * 16
        return parseFloat(iva);
    }

    const precioValue = () => {
        var iva = (costo / 100) * 16
        return (parseFloat(iva) + parseFloat(costo));
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
                    value={nuevoID}
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
                    step="0.01"
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
                    className="btn btn-primary mt-3"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </div>
    )
}