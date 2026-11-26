import {
  POKEMON_MULAI,
  POKEMON_BERHASIL,
  POKEMON_GAGAL,
  TOGGLE_FAVORIT,
} from './actions'

const initialState = {
  daftar: [],
  status: 'diam', // 'diam' | 'memuat' | 'berhasil' | 'gagal'
  error: null,
  favorit: [],
}

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case POKEMON_MULAI: {
      return { ...state, status: 'memuat', error: null }
    }
    case POKEMON_BERHASIL: {
      return { ...state, status: 'berhasil', daftar: action.payload }
    }
    case POKEMON_GAGAL: {
      return { ...state, status: 'gagal', error: action.payload }
    }
    case TOGGLE_FAVORIT: {
      const nama = action.payload
      const sudahAda = state.favorit.includes(nama)
      return {
        ...state,
        favorit: sudahAda
          ? state.favorit.filter((n) => n !== nama)
          : [...state.favorit, nama],
      }
    }
    default: {
      return state
    }
  }
}
