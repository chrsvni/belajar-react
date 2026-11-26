import ZustandDemo from './ZustandDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export default function Materi17() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        17. Zustand
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        Zustand adalah pustaka pengelolaan state yang ringan. State dan aksi
        disimpan dalam satu store berbentuk Hook, dipakai oleh komponen mana pun
        tanpa Provider dan tanpa mengoper props, dan setiap komponen hanya
        dirender ulang kalau bagian state yang dipilihnya berubah.
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Buka Console (F12) untuk melihat komponen mana yang dirender ulang.
      </Alert>

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Praktik: Keranjang Belanja dengan Zustand
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Empat komponen terpisah memakai satu store yang sama. Tambahkan
          produk, ubah jumlahnya, aktifkan kupon, lalu perhatikan komponen mana
          yang ikut dirender ulang di Console.
        </Typography>
        <ZustandDemo />
      </Box>
    </Box>
  )
}
