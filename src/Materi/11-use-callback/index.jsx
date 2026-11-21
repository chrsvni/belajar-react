import TokoDemo from './TokoDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'

export default function Materi11() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        11. useCallback
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Menyimpan fungsi di "laci" supaya tidak dibuat baru di setiap render,
        sehingga komponen yang dibungkus <code>memo</code> bisa melewati render
        ulang.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Toko Mini: Dengan dan Tanpa useCallback
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Dua toko yang isinya sama persis. Klik "Tambah" di toko mana saja,
          lalu perhatikan angka "Digambar" di setiap kartu.
        </Typography>
        <Alert severity="info" sx={{ mb: 2 }}>
          Angka awal setiap kartu adalah 2, bukan 0, karena Strict Mode di mode
          development menjalankan Effect dua kali saat pertama tampil.
          Perhatikan pertambahannya saja.
        </Alert>
        <TokoDemo />
      </Box>
    </Box>
  )
}
