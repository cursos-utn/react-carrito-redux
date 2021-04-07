import React, { useState } from 'react';
import CarritoListado from './CarritoListado';
import CarritoSeleccionados from './CarritoSeleccionados';
import { useDispatch, useSelector } from 'react-redux';

function Carrito(props) {

  const articulos = useSelector((estado) => estado.articulos)
  const seleccionados = useSelector((estado) => estado.seleccionados)

  const dispatch = useDispatch();

  const agregarAlCarrito = (articuloAAgregar) => {
    dispatch({
      type: 'AGREGAR_AL_CARRITO',
      elementoAAgregar: articuloAAgregar
    })
  };

  const removerDelCarrito = (articuloARemover) => {
    dispatch({
      type: 'REMOVER_DEL_CARRITO',
      elementoARemover: articuloARemover
    })
  };

  return (
    <div>
      <h3>Productos</h3>
      <CarritoListado articulos={articulos} agregarAlCarrito={agregarAlCarrito} />
      <h3>Tu carrito</h3>
      <CarritoSeleccionados carrito={seleccionados} removerDelCarrito={removerDelCarrito} />
    </div>
  );
}

export default Carrito;
