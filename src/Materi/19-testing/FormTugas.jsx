import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function FormTugas({ onTambah }) {
  const [teks, setTeks] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (teks.trim() === '') return
    onTambah(teks.trim())
    setTeks('')
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} direction="row" spacing={1}>
      <TextField
        size="small"
        label="Tugas baru"
        value={teks}
        onChange={(e) => setTeks(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained">
        Tambah
      </Button>
    </Stack>
  )
}
