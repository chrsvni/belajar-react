import { useQuery } from '@tanstack/react-query'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PanelHasil from './PanelHasil'
import { ambilPokemon, urlPokemon, kapital } from './pokemonApi'

function usePokemon(id) {
  const { data, error, isPending, isFetching } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => ambilPokemon(urlPokemon(id), 'TanStack'),
    retry: false,
  })
  return { data, error, isLoading: isPending, isFetching }
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

export default function QueryPanel({ id }) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="subtitle1" fontWeight="bold">
        TanStack Query
      </Typography>
      <Judul id={id} />
      <Detail id={id} />
    </Stack>
  )
}
