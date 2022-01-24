import React, { Fragment, useState } from "react";
import { calcularTotal } from "../helpers/helper";

const Formulario = (props) => {
  const { cantidad, guardarCantida, plazo, guardarPlazo , guardarTotal, guardandoCargando } =
    props;

  const [error, guardarError] = useState(false);

  const calcularPrestamo = (e) => {
    e.preventDefault();

    //validar
    if (cantidad === 0 || plazo === "") {
      guardarError(true);
      return;
    }

    guardarError(false);
    guardandoCargando(true);

    setTimeout(() => {
      const total = calcularTotal(cantidad, plazo);

     
      //una vez calculado
      guardarTotal(total)
      guardandoCargando(false);
    }, 2000);

  };

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => {
                guardarCantida(parseInt(e.target.value));
              }}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              onChange={(e) => {
                guardarPlazo(parseInt(e.target.value));
              }}
              className="u-full-width"
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
      {error ? <p className="error">Todo los campos son obligatorio</p> : null}
    </Fragment>
  );
};

export default Formulario;
