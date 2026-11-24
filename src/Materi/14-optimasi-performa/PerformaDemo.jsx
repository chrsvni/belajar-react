import { useState, useMemo, useCallback, Suspense, lazy } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'

import ErrorBoundary from '../12-error-boundary/ErrorBoundary'
import { KartuBiasa, KartuMemo } from './KartuInfo'

const PanelBerat = lazy(() =>
  new Promise((resolve) => setTimeout(resolve, 1200)).then(
    () => import('./PanelBerat.jsx')
  )
)

const SEMUA_PRODUK = Array.from({ length: 3000 }, (_, i) => 'Produk ' + (i + 1))

function saringProduk(kata) {
  console.log('🧮 Menyaring produk...')
  const mulai = performance.now()
  while (performance.now() - mulai < 300) {}
  return SEMUA_PRODUK.filter((p) =>
    p.toLowerCase().includes(kata.toLowerCase())
  )
}

export default function PerformaDemo() {
  const [hitung, setHitung] = useState(0)
  const [cari, setCari] = useState('')
  const [pakaiMemo, setPakaiMemo] = useState(true)
  const [tampilPanel, setTampilPanel] = useState(false)

  const hasilMemo = useMemo(() => saringProduk(cari), [cari])
  const hasilBiasa = pakaiMemo ? null : saringProduk(cari)
  const hasil = pakaiMemo ? hasilMemo : hasilBiasa

  const handleReset = useCallback(() => setHitung(0), [])

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            1. useMemo: perhitungan berat
          </Typography>

          <FormControlLabel
            control={
              <Switch
                checked={pakaiMemo}
                onChange={(e) => setPakaiMemo(e.target.checked)}
              />
            }
            label="Pakai useMemo"
          />

          <Button
            variant="contained"
            onClick={() => setHitung(hitung + 1)}
            sx={{ alignSelf: 'flex-start' }}
          >
            Klik: {hitung}
          </Button>

          <TextField
            label="Cari produk"
            size="small"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
          />

          <Typography variant="body2" color="text.secondary">
            Ditemukan {hasil.length} produk. Contoh:{' '}
            {hasil.slice(0, 3).join(', ') || '-'}
          </Typography>

          <Divider />

          <Typography variant="subtitle1" fontWeight="bold">
            2. React.memo + useCallback: kartu anak
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Klik tombol hitung di atas, lalu lihat Console: kartu mana yang ikut
            dirender ulang?
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <KartuBiasa onReset={handleReset} />
            <KartuMemo onReset={handleReset} />
          </Stack>

          <Divider />

          <Typography variant="subtitle1" fontWeight="bold">
            3. lazy: panel dimuat saat dibutuhkan
          </Typography>

          <Stack direction="row" spacing={1.5}>
            <Button
              variant="contained"
              onClick={() => setTampilPanel(true)}
              disabled={tampilPanel}
            >
              Tampilkan panel berat
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setTampilPanel(false)}
              disabled={!tampilPanel}
            >
              Sembunyikan
            </Button>
          </Stack>

          <ErrorBoundary
            fallback={<Alert severity="error">Panel gagal dimuat.</Alert>}
          >
            <Suspense
              fallback={
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <CircularProgress size={24} />
                  <Typography color="text.secondary">
                    Memuat panel...
                  </Typography>
                </Stack>
              }
            >
              {tampilPanel && <PanelBerat />}
            </Suspense>
          </ErrorBoundary>
        </Stack>
      </CardContent>
    </Card>
  )
}
