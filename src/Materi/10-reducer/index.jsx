import TaskDemo from './TaskDemo'
import ReduceDemo from './ReduceDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

export default function Materi10() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        10. Reducer
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Memindahkan logika pembaruan state ke satu fungsi di luar komponen
        menggunakan <code>useReducer</code>, <code>dispatch</code>, dan action.
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Daftar Tugas: Tambah, Ubah, Hapus
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Tiga handler hanya mengirim action. Semua logika pembaruan ada di
          tasksReducer.js.
        </Typography>
        <TaskDemo />
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Kenapa Disebut Reducer?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Reducer yang sama dipakai langsung dengan reduce() pada daftar action.
          Ubah langkahnya dan lihat state terkumpul bertahap.
        </Typography>
        <ReduceDemo />
      </Box>
    </Box>
  )
}
