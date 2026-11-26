import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonSlice'
import { logger } from './logger'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
