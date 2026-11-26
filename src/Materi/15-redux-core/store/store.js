import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import { thunk } from 'redux-thunk'
import pokemonReducer from './reducer'
import { logger } from './logger'

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
