import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  daftar: [],
  status: 'diam', // 'diam' | 'memuat' | 'berhasil' | 'gagal'
  error: null,
  favorit: [],
}

export const ambilPokemon = createAsyncThunk('pokemon/ambil', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  if (!response.ok) {
    throw new Error('Gagal mengambil data (status ' + response.status + ')')
  }
  const data = await response.json()
  return data.results
})

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorit(state, action) {
      const nama = action.payload
      if (state.favorit.includes(nama)) {
        state.favorit = state.favorit.filter((n) => n !== nama)
      } else {
        state.favorit.push(nama)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ambilPokemon.pending, (state) => {
        state.status = 'memuat'
        state.error = null
      })
      .addCase(ambilPokemon.fulfilled, (state, action) => {
        state.status = 'berhasil'
        state.daftar = action.payload
      })
      .addCase(ambilPokemon.rejected, (state, action) => {
        state.status = 'gagal'
        state.error = action.error.message
      })
  },
})

export const { toggleFavorit } = pokemonSlice.actions
export default pokemonSlice.reducer
