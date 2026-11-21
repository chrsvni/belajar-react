import { useState, Suspense, lazy } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import CloudOffIcon from '@mui/icons-material/CloudOff'

import ErrorBoundary from './ErrorBoundary'

const KartuBerat = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1500)).then(
    () => import('./KartuBerat.jsx')
  )
)

const KartuRusak = lazy(
  () =>
    new Promise((_, reject) =>
      setTimeout(
        () => reject(new Error('Gagal memuat kode komponen (simulasi)')),
        1200
      )
    )
)

export default function LazyDemo() {
  const [tampil, setTampil] = useState(null)
  const [percobaan, setPercobaan] = useState(0)

  function handlePilih(jenis) {
    setTampil(jenis)
    setPercobaan(percobaan + 1)
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            <Button
              variant="contained"
              startIcon={<CloudDownloadIcon />}
              onClick={() => handlePilih('berhasil')}
            >
              Muat komponen (berhasil)
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<CloudOffIcon />}
              onClick={() => handlePilih('gagal')}
            >
              Muat komponen (gagal)
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => handlePilih(null)}
              disabled={tampil === null}
            >
              Sembunyikan
            </Button>
          </Stack>

          {/* Lapis 1: ErrorBoundary menangkap kalau pemuatan GAGAL */}
          <ErrorBoundary
            key={percobaan}
            fallback={
              <Alert severity="error">
                Komponen gagal dimuat. Periksa koneksi, lalu coba lagi.
              </Alert>
            }
          >
            {/* Lapis 2: Suspense menampilkan loading selama kode DIMUAT */}
            <Suspense
              fallback={
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <CircularProgress size={24} />
                  <Typography color="text.secondary">
                    Memuat komponen...
                  </Typography>
                </Stack>
              }
            >
              {/* Lapis 3: komponen lazy */}
              {tampil === 'berhasil' && <KartuBerat />}
              {tampil === 'gagal' && <KartuRusak />}
            </Suspense>
          </ErrorBoundary>
        </Stack>
      </CardContent>
    </Card>
  )
}
