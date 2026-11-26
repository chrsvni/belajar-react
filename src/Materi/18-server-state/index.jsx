import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ServerStateDemo from './ServerStateDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

const queryClient = new QueryClient()

export default function Materi18() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          fontWeight="bold"
          color="primary"
        >
          18. Server State (SWR dan React Query)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Server state adalah data yang tersimpan di server dan diambil secara
          asinkron. SWR dan TanStack Query mengelola pengambilan, cache, dan
          pembaruannya sehingga kita tidak perlu menulis state loading, error,
          dan cache secara manual.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          Buka Console dan tab Network (F12). Setiap permintaan nyata tercatat
          di Console dengan label [SWR] atau [TanStack].
        </Alert>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Praktik: SWR vs TanStack Query
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Pilih Pokémon, lalu bandingkan perilaku kedua pustaka: loading,
            cache, request yang digabung, dan pesan error.
          </Typography>
          <ServerStateDemo />
        </Box>
      </Box>
    </QueryClientProvider>
  )
}
