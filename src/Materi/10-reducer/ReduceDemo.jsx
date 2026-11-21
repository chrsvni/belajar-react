import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { tasksReducer } from './tasksReducer'

const daftarAksi = [
  { type: 'added', id: 1, text: 'Belajar useReducer' },
  { type: 'added', id: 2, text: 'Menulis laporan' },
  { type: 'deleted', id: 1 },
  { type: 'added', id: 3, text: 'Mengirim tugas' },
]

export default function ReduceDemo() {
  const [langkah, setLangkah] = useState(daftarAksi.length)

  const stateAkhir = daftarAksi.slice(0, langkah).reduce(tasksReducer, [])

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2} sx={{ maxWidth: 550 }}>
          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="caption" fontWeight="bold">
              Daftar aksi (berurutan)
            </Typography>
            {daftarAksi.map((aksi, i) => (
              <Typography
                key={i}
                variant="body2"
                sx={{
                  fontFamily: 'monospace',
                  color: i < langkah ? 'text.primary' : 'text.disabled',
                }}
              >
                {i + 1}. {JSON.stringify(aksi)}
              </Typography>
            ))}
          </Paper>

          <TextField
            select
            label="Jalankan sampai aksi ke-"
            size="small"
            value={langkah}
            onChange={(e) => setLangkah(Number(e.target.value))}
            sx={{ maxWidth: 220 }}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <MenuItem key={n} value={n}>
                {n === 0 ? '0 (belum ada aksi)' : n}
              </MenuItem>
            ))}
          </TextField>

          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="caption" fontWeight="bold">
              State hasil reduce()
            </Typography>
            <pre style={{ margin: '6px 0 0', fontSize: '0.85rem' }}>
              {JSON.stringify(stateAkhir, null, 2)}
            </pre>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  )
}
