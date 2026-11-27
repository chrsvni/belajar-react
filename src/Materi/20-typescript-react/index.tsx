import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

import KartuPengguna from './KartuPengguna'
import FormKomentar from './FormKomentar'
import KelolaTugas from './KelolaTugas'
import DaftarGenerik from './DaftarGenerik'

interface Komentar {
  id: number
  penulis: string
  kategori: 'Tanya' | 'Saran' | 'Apresiasi'
  pesan: string
}

interface Buku {
  id: number
  judulBuku: string
  penulis: string
  rating: number
}

export default function Materi20() {
  const [daftarKomentar, setDaftarKomentar] = useState<Komentar[]>([
    {
      id: 1,
      penulis: 'Cheria',
      kategori: 'Apresiasi',
      pesan: 'Penjelasan TypeScript di React sangat terstruktur!',
    },
  ])

  function handleTerimaKomentar(komentarBaru: Omit<Komentar, 'id'>) {
    const dataBaru: Komentar = {
      id: Date.now(),
      ...komentarBaru,
    }
    setDaftarKomentar((prev) => [dataBaru, ...prev])
  }

  const daftarBuku: Buku[] = [
    {
      id: 101,
      judulBuku: 'Refactoring UI',
      penulis: 'Adam Wathan',
      rating: 4.9,
    },
    {
      id: 102,
      judulBuku: 'Learning TypeScript',
      penulis: 'Josh Goldberg',
      rating: 4.8,
    },
  ]

  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold' }}
        color="primary"
      >
        20. TypeScript in React
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Penerapan sistem pengetikan statis pada React: Typing Props, Union
        Types, Event Handling, useReducer dengan Discriminated Union, dan
        Generic Components.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
          1. Mengetik Props, Union Type, & Children (KartuPengguna.tsx)
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Box sx={{ flex: 1 }}>
            <KartuPengguna
              nama="Budi Santoso"
              email="budi@makers.id"
              peran="Admin"
              poin={150}
            >
              <Typography variant="caption" color="text.secondary">
                Hak akses: Menambah modul, memvalidasi tugas siswa.
              </Typography>
            </KartuPengguna>
          </Box>
          <Box sx={{ flex: 1 }}>
            <KartuPengguna
              nama="Siti Aminah"
              email="siti@student.id"
              peran="Member"
              isActive={false}
            >
              <Typography variant="caption" color="error">
                Akun sedang dinonaktifkan sementara.
              </Typography>
            </KartuPengguna>
          </Box>
        </Stack>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
          2. Event Handling & Form (FormKomentar.tsx)
        </Typography>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <FormKomentar onKirim={handleTerimaKomentar} />
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
          3. useReducer + Discriminated Union (KelolaTugas.tsx)
        </Typography>
        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <KelolaTugas />
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }} gutterBottom>
          4. Generic Component &lt;T&gt; (DaftarGenerik.tsx)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Komponen yang sama dapat digunakan untuk me-render data komentar
          maupun buku secara fleksibel dengan tetap mempertahankan tipe datanya.
        </Typography>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
          <Box sx={{ flex: 1 }}>
            <DaftarGenerik
              judul="Daftar Komentar Masuk"
              items={daftarKomentar}
              renderItem={(item) => (
                <Box sx={{ py: 0.5, width: '100%' }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      alignItems: 'center',
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {item.penulis}
                    </Typography>
                    <Chip
                      label={item.kategori}
                      size="small"
                      variant="outlined"
                      sx={{ height: 20 }}
                    />
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.pesan}
                  </Typography>
                </Box>
              )}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <DaftarGenerik
              judul="Rekomendasi Buku Bacaan"
              items={daftarBuku}
              renderItem={(buku) => (
                <Box sx={{ py: 0.5, width: '100%' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {buku.judulBuku}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Penulis: {buku.penulis} • ⭐ {buku.rating}
                  </Typography>
                </Box>
              )}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
