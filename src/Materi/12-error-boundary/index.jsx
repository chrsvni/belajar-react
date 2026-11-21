import LazyDemo from './LazyDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export default function Materi12() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        12. Error Boundary + Lazy Loading
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Error Boundary menangkap error saat rendering dan menampilkan tampilan
        cadangan (fallback). lazy menunda pemuatan kode komponen sampai
        dibutuhkan, dan Suspense menampilkan loading selama menunggu. Ketiganya
        dipasang berlapis: ErrorBoundary, Suspense, lalu komponen lazy.
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Buka Console (F12). Pesan error berwarna merah saat memilih "gagal" itu
        normal, karena error tetap dicatat meskipun sudah ditangkap boundary.
        Kalau muncul layar overlay error saat development, tutup saja.
      </Alert>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Praktik: lazy + Suspense + Error Boundary
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Coba muat komponen dengan hasil berhasil dan gagal. Perhatikan loading
          saat menunggu, pesan merah saat gagal, dan komponen yang tampil
          langsung saat dimuat kedua kalinya.
        </Typography>
        <LazyDemo />
      </Box>
    </Box>
  )
}
