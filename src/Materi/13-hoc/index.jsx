import PerbandinganDemo from './PerbandinganDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

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
        13. Higher-Order Components
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Memakai ulang logika komponen dengan HOC (fungsi yang menerima komponen
        dan mengembalikan komponen baru) atau dengan custom hook.
      </Typography>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Logika yang Sama, Dua Cara
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Logika penghitung ditulis sekali, lalu dipakai di dua komponen
          tampilan yang berbeda. Klik setiap tombol dan perhatikan angkanya.
        </Typography>
        <PerbandinganDemo />
      </Box>
    </Box>
  )
}
