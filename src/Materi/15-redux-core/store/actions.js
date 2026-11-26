export const POKEMON_MULAI = 'pokemon/mulai'
export const POKEMON_BERHASIL = 'pokemon/berhasil'
export const POKEMON_GAGAL = 'pokemon/gagal'
export const TOGGLE_FAVORIT = 'pokemon/toggleFavorit'

export const pokemonMulai = () => ({ type: POKEMON_MULAI })

export const pokemonBerhasil = (daftar) => ({
  type: POKEMON_BERHASIL,
  payload: daftar,
})

export const pokemonGagal = (pesan) => ({
  type: POKEMON_GAGAL,
  payload: pesan,
})

export const toggleFavorit = (nama) => ({
  type: TOGGLE_FAVORIT,
  payload: nama,
})

export const ambilPokemon = () => async (dispatch) => {
  dispatch(pokemonMulai())
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    if (!response.ok) {
      throw new Error('Gagal mengambil data (status ' + response.status + ')')
    }
    const data = await response.json()
    dispatch(pokemonBerhasil(data.results))
  } catch (error) {
    dispatch(pokemonGagal(error.message))
  }
}
