import { useState } from 'react'

export default function withCounter(WrappedComponent) {
  function WithCounter(props) {
    const [jumlah, setJumlah] = useState(0)

    function tambah() {
      setJumlah(jumlah + 1)
    }

    return <WrappedComponent jumlah={jumlah} tambah={tambah} {...props} />
  }

  return WithCounter
}
