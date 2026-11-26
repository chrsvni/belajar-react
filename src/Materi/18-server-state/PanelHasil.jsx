import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { kapital } from './pokemonApi'

export default function PanelHasil({ data, error, isLoading, isFetching }) {
  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }

  if (isLoading || !data) {
    return (
      <Stack direction="row" spacing={1.5} alignItems="center">
        <CircularProgress size={24} />
        <Typography color="text.secondary">Memuat...</Typography>
      </Stack>
    )
  }

  return (
    <Paper variant="outlined" sx={{ p: 1.5, textAlign: 'center' }}>
      <Box
        component="img"
        src={data.gambar}
        alt={data.nama}
        sx={{ width: 96, height: 96, imageRendering: 'pixelated' }}
      />
      <Typography variant="subtitle2" fontWeight="bold">
        #{data.id} {kapital(data.nama)}
      </Typography>
      <Stack
        direction="row"
        spacing={0.5}
        justifyContent="center"
        sx={{ my: 0.5 }}
      >
        {data.tipe.map((t) => (
          <Chip key={t} label={t} size="small" />
        ))}
      </Stack>
      <Typography variant="caption" color="text.secondary" display="block">
        Tinggi {data.tinggi} | Berat {data.berat}
      </Typography>
      {isFetching && (
        <Typography variant="caption" color="primary" display="block">
          Memperbarui di latar belakang...
        </Typography>
      )}
    </Paper>
  )
}
