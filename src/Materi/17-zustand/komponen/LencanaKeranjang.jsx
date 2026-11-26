import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { useKeranjangStore, pilihJumlahItem } from '../useKeranjangStore'

export default function LencanaKeranjang() {
  console.log('🛒 LencanaKeranjang dirender')
  const jumlah = useKeranjangStore(pilihJumlahItem)

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Badge badgeContent={jumlah} color="error" showZero overlap="circular">
        <Avatar sx={{ bgcolor: 'primary.main', width: 44, height: 44 }}>
          <ShoppingCartIcon />
        </Avatar>
      </Badge>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold', lineHeight: 1.2 }}
        >
          Keranjang Belanja
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {jumlah} barang
        </Typography>
      </Box>
    </Stack>
  )
}
