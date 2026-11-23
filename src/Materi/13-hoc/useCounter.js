import { useState } from 'react'

export function useCounter() {
  const [jumlah, setJumlah] = useState(0)

  function tambah() {
    setJumlah(jumlah + 1)
  }

  return { jumlah, tambah }
}
