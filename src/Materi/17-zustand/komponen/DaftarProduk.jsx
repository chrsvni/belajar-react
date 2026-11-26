import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { useKeranjangStore } from '../useKeranjangStore'
import { DATA_PRODUK } from '../dataProduk'
import { rupiah } from '../formatRupiah'
import Bagian from './Bagian'

export default function DaftarProduk() {
  console.log('📦 DaftarProduk dirender')
  const tambah = useKeranjangStore((state) => state.tambah)

  return (
    <Bagian judul="Produk">
      <Stack spacing={1.5}>
        {DATA_PRODUK.map((p) => {
          const Ikon = p.ikon
          return (
            <Paper
              key={p.id}
              variant="outlined"
              sx={{
                p: 1.5,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                alignItems: 'center',
                columnGap: 1.5,
                borderRadius: 2,
              }}
            >
              <Avatar
                variant="rounded"
                sx={{ bgcolor: 'action.hover', color: 'primary.main' }}
              >
                <Ikon />
              </Avatar>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" noWrap sx={{ fontWeight: 'bold' }}>
                  {p.nama}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {rupiah(p.harga)}
                </Typography>
              </Box>
              <Button
                size="small"
                variant="contained"
                disableElevation
                startIcon={<AddShoppingCartIcon />}
                onClick={() => tambah(p)}
              >
                Tambah
              </Button>
            </Paper>
          )
        })}
      </Stack>
    </Bagian>
  )
}
