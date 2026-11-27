import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'
import Paper from '@mui/material/Paper'

import CheckboxWithLabel from './CheckboxWithLabel'
import Link from './Link'
import DaftarTugas from './DaftarTugas'

export default function Materi19() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        fontWeight="bold"
        color="primary"
      >
        19. Testing
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Menulis unit test dan integration test untuk komponen dengan Jest dan
        React Testing Library.
      </Typography>

      <Alert severity="info" sx={{ mb: 4 }}>
        Test dijalankan lewat terminal, bukan lewat halaman ini. Ketik{' '}
        <code>npm test</code>, lalu bandingkan hasilnya dengan komponen di
        bawah.
      </Alert>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. CheckboxWithLabel (unit test)
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <CheckboxWithLabel labelOn="Aktif" labelOff="Nonaktif" />
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Link (snapshot test)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Arahkan kursor ke link. Class berubah dari normal menjadi hovered.
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            '& a.hovered': { fontWeight: 'bold', textDecoration: 'underline' },
          }}
        >
          <Link page="https://react.dev">React</Link>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. FormTugas dan DaftarTugas (unit dan integration test)
        </Typography>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <DaftarTugas />
        </Paper>
      </Box>
    </Box>
  )
}
