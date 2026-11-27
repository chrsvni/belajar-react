import { useState } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import FormTugas from './FormTugas'

let urut = 1

export default function DaftarTugas({ awal = [] }) {
  const [tugas, setTugas] = useState(awal)

  function handleTambah(teks) {
    setTugas([...tugas, { id: urut++, teks }])
  }

  function handleHapus(id) {
    setTugas(tugas.filter((t) => t.id !== id))
  }

  return (
    <Stack spacing={2}>
      <FormTugas onTambah={handleTambah} />

      <Typography variant="subtitle2">
        {tugas.length === 0 ? 'Belum ada tugas.' : `${tugas.length} tugas`}
      </Typography>

      <List dense disablePadding>
        {tugas.map((t) => (
          <ListItem
            key={t.id}
            disableGutters
            secondaryAction={
              <Button
                size="small"
                color="error"
                aria-label={`Hapus ${t.teks}`}
                onClick={() => handleHapus(t.id)}
              >
                Hapus
              </Button>
            }
          >
            <ListItemText primary={t.teks} />
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
