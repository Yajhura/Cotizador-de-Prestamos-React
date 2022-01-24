import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./helpers/Spinner";
function App() {
  const [cantidad, guardarCantida] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardandoCargando] = useState(false);

  let componente;

  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }
  return (
    <Fragment>
      <Header titulo="Cotizador de Prestmos" />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantida={guardarCantida}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardandoCargando={guardandoCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </Fragment>
  );
}

export default App;
