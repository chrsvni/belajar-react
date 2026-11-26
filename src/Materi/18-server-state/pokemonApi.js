const BASE_URL = 'https://pokeapi.co/api/v2'

export function urlPokemon(id) {
  return BASE_URL + '/pokemon/' + id
}

export function kapital(teks) {
  return teks.charAt(0).toUpperCase() + teks.slice(1)
}

export async function ambilPokemon(url, label) {
  console.log('🌐 [' + label + '] meminta', url)
  const respons = await fetch(url)

  if (!respons.ok) {
    throw new Error('Gagal mengambil data (status ' + respons.status + ')')
  }

  const p = await respons.json()
  return {
    id: p.id,
    nama: p.name,
    gambar: p.sprites.front_default,
    tipe: p.types.map((t) => t.type.name),
    tinggi: p.height,
    berat: p.weight,
  }
}
