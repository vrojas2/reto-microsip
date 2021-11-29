import React, { useState } from 'react';
import { useForm } from "react-hook-form";

export const ByPrecio = (props) => {
    const { data, setModalInsertar, setData} = props;

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [precio, setPrecio] = useState(0);

    const nuevoID = data[data.length-1].id+1;

    const onSubmit = datosForm => {
        let iva = ivaValue()
        let costo = costoValue()
        let objetoNuevo = {
            id: nuevoID,
            nombre: datosForm.nombre,
            costo: costo,
            iva: iva,
            precio: datosForm.precio
        }        
        var dataNueva = data;
        dataNueva.push(objetoNuevo);
        
        setData(dataNueva);
        setModalInsertar(false)
    }

    const handleChange = e => {
        setPrecio(e.target.value);
    }

    const ivaValue = () => {
        var iva = (precio / 116) * 16
        return parseFloat(iva);
    }

    const costoValue = () => {
        var costo = (precio / 116) * 100
        return parseFloat(costo);
    }

    return (

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
                className="form-control"
                readOnly
                name="costo"
                value={costoValue()}
            />
            <br />

            <label>IVA (16%)</label>
            <input
                className="form-control"
                readOnly
                type="text"
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
                onChange={handleChange}
            />
            {errors.precio && (
                <div className="text-danger">{errors.precio.message}</div>
            )}
            <br />

            <button
                className="btn btn-primary mt-4"
                type="submit"
            >
                Agregar
            </button>
        </form>

    )
}