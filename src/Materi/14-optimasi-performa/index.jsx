import PerformaDemo from './PerformaDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export default function Materi13() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        14. Performance Optimization
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Mengurangi pekerjaan yang tidak perlu: React.memo dan useMemo menyimpan
        hasil supaya tidak dihitung atau dirender ulang, useCallback menjaga
        referensi fungsi, sedangkan code splitting dan lazy loading menunda
        pengunduhan kode sampai dibutuhkan.
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Buka Console (F12) untuk melihat log render.
      </Alert>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Praktik: useMemo + React.memo + lazy
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Matikan dan nyalakan switch useMemo sambil menekan tombol Klik.
          Bandingkan juga kartu biasa dengan kartu ber-memo di Console, lalu
          muat panel berat.
        </Typography>
        <PerformaDemo />
      </Box>
    </Box>
  )
}
