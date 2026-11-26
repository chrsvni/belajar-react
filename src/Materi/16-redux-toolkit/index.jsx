import { Provider } from 'react-redux'
import { store } from './store/store'
import PokemonDemo from './PokemonDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export default function Materi16() {
  return (
    <Provider store={store}>
      <Box>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          fontWeight="bold"
          color="primary"
        >
          16. Redux Toolkit (RTK)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Menyederhanakan Redux dengan <code>createSlice</code>,{' '}
          <code>createAsyncThunk</code>, dan <code>configureStore</code>.
          Tampilan dan perilakunya sama dengan Materi 15.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          Buka Console (F12), lalu bandingkan nama action dengan Materi 15.
        </Alert>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Daftar Pokémon (Redux Toolkit)
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Klik tombol untuk mengambil data, lalu tandai beberapa Pokémon sebagai
          favorit.
        </Typography>
        <PokemonDemo />
      </Box>
    </Provider>
  )
}
