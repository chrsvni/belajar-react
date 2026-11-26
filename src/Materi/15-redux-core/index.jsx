import { Provider } from 'react-redux'
import { store } from './store/store'
import PokemonDemo from './PokemonDemo'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

export default function Materi15() {
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
          15. Redux (Core Concepts)
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Redux murni tanpa Toolkit: action, reducer, store, dan middleware
          (Redux Thunk) semuanya ditulis dan dipasang secara manual.
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          Buka Console (F12) untuk melihat setiap action yang lewat middleware
          logger.
        </Alert>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Daftar Pokémon (Redux Core)
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
