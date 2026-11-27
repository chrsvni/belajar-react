import { useReducer, useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import DeleteIcon from '@mui/icons-material/Delete'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

interface ItemTugas {
  id: number
  judul: string
  isSelesai: boolean
}

// Discriminated Union
type ActionTugas =
  | { type: 'TAMBAH'; payload: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'HAPUS'; id: number }
  | { type: 'BERSIHKAN_SELESAI' }

function tugasReducer(state: ItemTugas[], action: ActionTugas): ItemTugas[] {
  switch (action.type) {
    case 'TAMBAH':
      return [
        ...state,
        { id: Date.now(), judul: action.payload, isSelesai: false },
      ]
    case 'TOGGLE':
      return state.map((t) =>
        t.id === action.id ? { ...t, isSelesai: !t.isSelesai } : t
      )
    case 'HAPUS':
      return state.filter((t) => t.id !== action.id)
    case 'BERSIHKAN_SELESAI':
      return state.filter((t) => !t.isSelesai)
    default:
      return state
  }
}

export default function KelolaTugas() {
  const [daftarTugas, dispatch] = useReducer(tugasReducer, [
    { id: 1, judul: 'Belajar Types & Interfaces', isSelesai: true },
    {
      id: 2,
      judul: 'Menerapkan Discriminated Union di Reducer',
      isSelesai: false,
    },
  ])

  const [inputTeks, setInputTeks] = useState('')

  function handleTambah() {
    if (!inputTeks.trim()) return
    dispatch({ type: 'TAMBAH', payload: inputTeks.trim() })
    setInputTeks('')
  }

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <TextField
          size="small"
          placeholder="Tugas baru..."
          value={inputTeks}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputTeks(e.target.value)
          }
          fullWidth
        />
        <Button variant="contained" onClick={handleTambah}>
          Tambah
        </Button>
      </Stack>

      <Paper variant="outlined">
        <List dense disablePadding>
          {daftarTugas.length === 0 ? (
            <Typography variant="body2" sx={{ p: 2 }} color="text.secondary">
              Tidak ada tugas tersisa.
            </Typography>
          ) : (
            daftarTugas.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    size="small"
                    onClick={() => dispatch({ type: 'HAPUS', id: item.id })}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                }
              >
                <Checkbox
                  edge="start"
                  checked={item.isSelesai}
                  onChange={() => dispatch({ type: 'TOGGLE', id: item.id })}
                />
                <ListItemText
                  primary={item.judul}
                  sx={{
                    textDecoration: item.isSelesai ? 'line-through' : 'none',
                    color: item.isSelesai ? 'text.secondary' : 'text.primary',
                  }}
                />
              </ListItem>
            ))
          )}
        </List>
      </Paper>

      {daftarTugas.some((t) => t.isSelesai) && (
        <Button
          size="small"
          color="warning"
          variant="outlined"
          onClick={() => dispatch({ type: 'BERSIHKAN_SELESAI' })}
          sx={{ alignSelf: 'flex-start' }}
        >
          Hapus yang Selesai
        </Button>
      )}
    </Stack>
  )
}
