import React from 'react';

const Resultado = ({ cantidad, total, plazo }) => (
    <div className="u-full-width resultado">
        <h2>Resultado</h2>
        <p>La cantidad es: $ {cantidad}</p>
        <p>A pagar en:  {plazo} Meses</p>
        <p>Su pago mensual es: $ {(total / plazo).toFixed(2)}</p>
        <p>El total a pagar es: $ {(total).toFixed(2)}</p>
    </div>
);


export default Resultado;