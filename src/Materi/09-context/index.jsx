import HeadingDemo from './HeadingDemo'
import UserDemo from './UserDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export default function Materi08() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        09. Context
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Mengoper data ke komponen yang letaknya dalam tanpa prop drilling,
        menggunakan <code>createContext</code>, <code>useContext</code>, dan
        provider.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Heading Otomatis: Section Menyediakan, Heading Membaca
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Tidak ada satu pun prop level. Setiap Heading mengetahui tingkatnya
          dari Section terdekat di atasnya.
        </Typography>
        <HeadingDemo />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Context + State: Pengguna Aktif
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Ganti pengguna. Navbar dan Konten tidak menerima props, tetapi
          komponen di dalamnya ikut berubah.
        </Typography>
        <UserDemo />
      </Box>
    </Box>
  )
}
