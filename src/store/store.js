import { configureStore } from '@reduxjs/toolkit'
import { buscadorSlice } from './slice'

	export const store = configureStore({
  	reducer: {
        buscador: buscadorSlice.reducer,
    },
})