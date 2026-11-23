import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import withCounter from './withCounter'
import { useCounter } from './useCounter'

function TombolSuka({ label, jumlah, tambah }) {
  return (
    <Button variant="outlined" startIcon={<ThumbUpIcon />} onClick={tambah}>
      {label}: {jumlah}
    </Button>
  )
}

function TombolKeranjang({ label, jumlah, tambah }) {
  return (
    <Button
      variant="contained"
      startIcon={<AddShoppingCartIcon />}
      onClick={tambah}
    >
      {label}: {jumlah}
    </Button>
  )
}

const SukaHoc = withCounter(TombolSuka)
const KeranjangHoc = withCounter(TombolKeranjang)

function SukaHook({ label }) {
  const { jumlah, tambah } = useCounter()
  return <TombolSuka label={label} jumlah={jumlah} tambah={tambah} />
}

function KeranjangHook({ label }) {
  const { jumlah, tambah } = useCounter()
  return <TombolKeranjang label={label} jumlah={jumlah} tambah={tambah} />
}

export default function PerbandinganDemo() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
            <Stack spacing={2} alignItems="flex-start">
              <Typography variant="subtitle1" fontWeight="bold" color="primary">
                Cara 1: HOC
              </Typography>
              <SukaHoc label="Suka" />
              <KeranjangHoc label="Keranjang" />
            </Stack>
          </Paper>

          <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
            <Stack spacing={2} alignItems="flex-start">
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="secondary"
              >
                Cara 2: Custom hook
              </Typography>
              <SukaHook label="Suka" />
              <KeranjangHook label="Keranjang" />
            </Stack>
          </Paper>
        </Stack>
      </CardContent>
    </Card>
  )
}
