import { createStore } from 'redux'

const estadoInicial = {
    articulos: [
        { id: 1, producto: 'Heladera', precio: 50000 },
        { id: 2, producto: 'TV ecónomico', precio: 18000 },
        { id: 3, producto: 'TV intermedio', precio: 38000 },
        { id: 4, producto: 'TV costoso', precio: 78000 },
    ],
    seleccionados: []
}

function reducer(state = estadoInicial, action) {

    switch (action.type) {
        case 'AGREGAR_AL_CARRITO':
            const nuevoEstado = JSON.parse(JSON.stringify(state))
            nuevoEstado.seleccionados.push({ ...action.elementoAAgregar })
            return nuevoEstado
        case 'REMOVER_DEL_CARRITO':
            const nuevoEstadoEliminar = JSON.parse(JSON.stringify(state))
            nuevoEstadoEliminar.seleccionados = nuevoEstadoEliminar.seleccionados.filter(unArticulo => unArticulo.id != action.elementoARemover.id)
            return nuevoEstadoEliminar
        default:
            return state;
    }
}

export default createStore(reducer);
