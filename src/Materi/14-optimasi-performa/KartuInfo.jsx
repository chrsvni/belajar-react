import { memo } from 'react'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function Isi({ judul, warna, onReset }) {
  return (
    <Paper variant="outlined" sx={{ p: 2, borderColor: warna }}>
      <Stack spacing={1.5}>
        <Typography variant="subtitle2" fontWeight="bold">
          {judul}
        </Typography>
        <Button size="small" variant="outlined" onClick={onReset}>
          Reset hitungan
        </Button>
      </Stack>
    </Paper>
  )
}

export function KartuBiasa({ onReset }) {
  console.log('🔴 KartuBiasa dirender')
  return (
    <Isi
      judul="Kartu biasa (tanpa memo)"
      warna="error.main"
      onReset={onReset}
    />
  )
}

export const KartuMemo = memo(function KartuMemo({ onReset }) {
  console.log('🟢 KartuMemo dirender')
  return (
    <Isi
      judul="Kartu dengan React.memo"
      warna="success.main"
      onReset={onReset}
    />
  )
})
