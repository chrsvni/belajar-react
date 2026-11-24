import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'

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
        <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
          {/* 1. DAFTAR AKSI (BERURUTAN) */}
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1.5 }}
            >
              <Typography
                variant="caption"
                fontWeight="bold"
                color="text.secondary"
              >
                DAFTAR AKSI (BERURUTAN)
              </Typography>
              <Chip
                size="small"
                variant="outlined"
                color="info"
                label={`${langkah} dari ${daftarAksi.length} dijalankan`}
              />
            </Stack>

            <Stack spacing={1}>
              {daftarAksi.map((aksi, i) => {
                const isActive = i < langkah
                const isAdded = aksi.type === 'added'

                return (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      p: 1,
                      px: 1.5,
                      borderRadius: 1,
                      bgcolor: 'action.hover',
                      border: 1,
                      borderColor: isActive ? 'primary.main' : 'divider',
                      opacity: isActive ? 1 : 0.35,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        color={isActive ? 'text.primary' : 'text.disabled'}
                        sx={{ width: 16 }}
                      >
                        {i + 1}.
                      </Typography>

                      <Chip
                        size="small"
                        color={isAdded ? 'success' : 'error'}
                        label={isAdded ? '+ ADDED' : '- DELETED'}
                        variant={isActive ? 'filled' : 'outlined'}
                        sx={{
                          height: 22,
                          fontSize: '0.68rem',
                          fontWeight: 700,
                        }}
                      />

                      <Chip
                        size="small"
                        label={`#${aksi.id}`}
                        variant="outlined"
                        sx={{ height: 20, fontSize: '0.72rem' }}
                      />

                      <Typography
                        variant="body2"
                        color={isActive ? 'text.primary' : 'text.disabled'}
                        fontWeight={isActive ? 500 : 400}
                      >
                        {isAdded ? aksi.text : `Hapus tugas #${aksi.id}`}
                      </Typography>
                    </Stack>
                  </Box>
                )
              })}
            </Stack>
          </Paper>

          {/* 2. DROPDOWN LANGKAH */}
          <TextField
            select
            label="Jalankan sampai aksi ke-"
            size="small"
            value={langkah}
            onChange={(e) => setLangkah(Number(e.target.value))}
            sx={{ maxWidth: 240 }}
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <MenuItem key={n} value={n}>
                {n === 0 ? '0 (belum ada aksi)' : `Aksi ke-${n}`}
              </MenuItem>
            ))}
          </TextField>

          {/* 3. STATE HASIL REDUCE */}
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 1.5 }}
            >
              <Typography
                variant="caption"
                fontWeight="bold"
                color="text.secondary"
              >
                STATE HASIL REDUCE()
              </Typography>
              <Chip
                size="small"
                variant="outlined"
                color={stateAkhir.length > 0 ? 'primary' : 'default'}
                label={`${stateAkhir.length} item aktif`}
              />
            </Stack>

            {stateAkhir.length === 0 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontStyle: 'italic', py: 1 }}
              >
                State kosong: [] (belum ada tugas)
              </Typography>
            ) : (
              <List dense disablePadding>
                {stateAkhir.map((task) => (
                  <ListItem
                    key={task.id}
                    sx={{
                      bgcolor: 'action.hover',
                      borderRadius: 1,
                      mb: 1,
                      border: 1,
                      borderColor: 'divider',
                      py: 1,
                    }}
                  >
                    <ListItemText
                      primary={
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Chip
                            size="small"
                            label={`#${task.id}`}
                            variant="outlined"
                            sx={{ height: 20, fontSize: '0.72rem' }}
                          />
                          <Typography variant="body2" fontWeight="medium">
                            {task.text}
                          </Typography>
                        </Stack>
                      }
                    />
                    <Chip
                      size="small"
                      color={task.done ? 'success' : 'default'}
                      label={task.done ? 'Selesai' : 'Belum selesai'}
                      variant="filled"
                      sx={{ height: 22, fontSize: '0.72rem' }}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  )
}
