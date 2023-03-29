import { createSlice } from '@reduxjs/toolkit';

export const buscadorSlice = createSlice({

    name: 'buscador',
    initialState: {
        autosFiltrados: [],
        datosBusqueda: [],
    },
    reducers: {
        setAutosFiltrados: ( state, { payload } ) => {
            state.autosFiltrados = payload;
        },
        setDatosBusqueda: ( state, { payload } ) => {
            state.datosBusqueda= payload;
        }
    },
});

export const { setAutosFiltrados, setDatosBusqueda } = buscadorSlice.actions