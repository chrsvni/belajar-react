import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder'

import { ambilPokemon, toggleFavorit } from './store/actions'

function ambilId(url) {
  return url.split('/').filter(Boolean).pop()
}

export default function PokemonDemo() {
  const dispatch = useDispatch()
  const { daftar, status, error, favorit } = useSelector(
    (state) => state.pokemon
  )

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2.5}>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              variant="contained"
              startIcon={<CloudDownloadIcon />}
              onClick={() => dispatch(ambilPokemon())}
              disabled={status === 'memuat'}
            >
              Ambil 20 Pokémon
            </Button>
            <Chip
              color="warning"
              variant="outlined"
              label={`Favorit: ${favorit.length}`}
            />
          </Stack>

          {status === 'diam' && (
            <Typography color="text.secondary">
              Belum ada data. Klik tombol di atas.
            </Typography>
          )}

          {status === 'memuat' && (
            <Stack direction="row" spacing={1.5} alignItems="center">
              <CircularProgress size={24} />
              <Typography color="text.secondary">Memuat data...</Typography>
            </Stack>
          )}

          {status === 'gagal' && <Alert severity="error">{error}</Alert>}

          {status === 'berhasil' && (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1,
              }}
            >
              {daftar.map((p) => {
                const id = ambilId(p.url)
                const disukai = favorit.includes(p.name)

                return (
                  <Paper
                    key={p.name}
                    variant="outlined"
                    sx={{
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                    }}
                  >
                    <Avatar
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                      alt={p.name}
                      sx={{ width: 48, height: 48 }}
                    >
                      {p.name[0].toUpperCase()}
                    </Avatar>
                    <Typography
                      sx={{ flexGrow: 1, textTransform: 'capitalize' }}
                    >
                      #{id} {p.name}
                    </Typography>
                    <IconButton
                      aria-label="favorit"
                      color={disukai ? 'warning' : 'default'}
                      onClick={() => dispatch(toggleFavorit(p.name))}
                    >
                      {disukai ? <StarIcon /> : <StarBorderIcon />}
                    </IconButton>
                  </Paper>
                )
              })}
            </Box>
          )}

          <Paper variant="outlined" sx={{ p: 1.5 }}>
            <Typography variant="caption" fontWeight="bold">
              Isi store saat ini
            </Typography>
            <pre
              style={{
                margin: '6px 0 0',
                fontSize: '0.8rem',
                whiteSpace: 'pre-wrap',
              }}
            >
              {JSON.stringify(
                { status, jumlahDaftar: daftar.length, favorit },
                null,
                2
              )}
            </pre>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  )
}
