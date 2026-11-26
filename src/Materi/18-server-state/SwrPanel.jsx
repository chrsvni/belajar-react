import useSWR from 'swr'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PanelHasil from './PanelHasil'
import { ambilPokemon, urlPokemon, kapital } from './pokemonApi'

function usePokemon(id) {
  const { data, error, isLoading, isValidating } = useSWR(
    urlPokemon(id),
    (url) => ambilPokemon(url, 'SWR'),
    { shouldRetryOnError: false }
  )
  return { data, error, isLoading, isFetching: isValidating }
}

function Judul({ id }) {
  const { data } = usePokemon(id)
  return (
    <Typography variant="body2" color="text.secondary">
      Komponen 1: {data ? kapital(data.nama) : '...'}
    </Typography>
  )
}

function Detail({ id }) {
  const hasil = usePokemon(id)
  return <PanelHasil {...hasil} />
}

export default function SwrPanel({ id }) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1" fontWeight="bold">
        SWR
      </Typography>
      <Judul id={id} />
      <Detail id={id} />
    </Stack>
  )
}
