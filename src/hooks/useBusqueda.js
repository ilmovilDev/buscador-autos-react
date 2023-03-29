import { useDispatch, useSelector } from "react-redux"
import { setAutosFiltrados, setDatosBusqueda } from "../store/slice"

export const useBusqueda = () => {

    const dispatch = useDispatch()
    const { datosBusqueda, autosFiltrados } = useSelector( state => state.buscador )

    const getAutosFiltrados = ( autos ) => {
        dispatch(setAutosFiltrados( autos ))
    }
    const getDatosBusqueda = ( busqueda ) => {
        dispatch(setDatosBusqueda( busqueda ))
    }







  return {
    // props
    datosBusqueda,
    autosFiltrados,

    // Funciones
    getDatosBusqueda,
    getAutosFiltrados
  }
}
