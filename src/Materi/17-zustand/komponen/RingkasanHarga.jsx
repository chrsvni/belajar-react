import { useShallow } from 'zustand/react/shallow'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import {
  useKeranjangStore,
  pilihSubtotal,
  pilihTotal,
} from '../useKeranjangStore'
import { rupiah } from '../formatRupiah'

export default function RingkasanHarga() {
  console.log('💰 RingkasanHarga dirender')
  const { subtotal, total } = useKeranjangStore(
    useShallow((state) => ({
      subtotal: pilihSubtotal(state),
      total: pilihTotal(state),
    }))
  )
  const diskon = subtotal - total

  return (
    <Box sx={{ bgcolor: 'action.hover', borderRadius: 2, p: 1.5 }}>
      <Stack spacing={0.75}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Subtotal
          </Typography>
          <Typography variant="body2">{rupiah(subtotal)}</Typography>
        </Box>
        {diskon > 0 && (
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Diskon kupon
            </Typography>
            <Typography variant="body2" sx={{ color: 'success.main' }}>
              - {rupiah(diskon)}
            </Typography>
          </Box>
        )}
        <Divider />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
            Total
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            {rupiah(total)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  )
}
