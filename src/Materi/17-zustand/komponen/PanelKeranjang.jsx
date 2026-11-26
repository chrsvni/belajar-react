import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'

import { useKeranjangStore } from '../useKeranjangStore'
import { rupiah } from '../formatRupiah'
import Bagian from './Bagian'
import RingkasanHarga from './RingkasanHarga'

export default function PanelKeranjang() {
  console.log('🧺 PanelKeranjang dirender')
  const item = useKeranjangStore((state) => state.item)
  const pakaiKupon = useKeranjangStore((state) => state.pakaiKupon)
  const tambah = useKeranjangStore((state) => state.tambah)
  const kurangi = useKeranjangStore((state) => state.kurangi)
  const hapus = useKeranjangStore((state) => state.hapus)
  const ubahKupon = useKeranjangStore((state) => state.ubahKupon)
  const checkout = useKeranjangStore((state) => state.checkout)

  return (
    <Bagian judul="Isi Keranjang">
      {item.length === 0 ? (
        <Stack
          spacing={0.5}
          sx={{ alignItems: 'center', py: 4, color: 'text.secondary' }}
        >
          <ShoppingCartIcon sx={{ fontSize: 48, opacity: 0.4 }} />
          <Typography variant="body2">Keranjang masih kosong</Typography>
          <Typography variant="caption">
            Pilih produk di sebelah kiri.
          </Typography>
        </Stack>
      ) : (
        <>
          <Stack divider={<Divider flexItem />}>
            {item.map((i) => (
              <Box
                key={i.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  columnGap: 1,
                  py: 1.25,
                }}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    variant="body2"
                    noWrap
                    sx={{ fontWeight: 'bold' }}
                  >
                    {i.nama}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary' }}
                  >
                    {rupiah(i.harga * i.jumlah)}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={0.5}
                  sx={{ alignItems: 'center' }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: 'center',
                      border: 1,
                      borderColor: 'divider',
                      borderRadius: 2,
                    }}
                  >
                    <IconButton size="small" onClick={() => kurangi(i.id)}>
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      variant="body2"
                      sx={{ minWidth: 24, textAlign: 'center' }}
                    >
                      {i.jumlah}
                    </Typography>
                    <IconButton size="small" onClick={() => tambah(i)}>
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => hapus(i.id)}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </Box>
            ))}
          </Stack>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center',
              columnGap: 1,
              px: 1.5,
              py: 0.5,
              border: 1,
              borderStyle: 'dashed',
              borderColor: 'divider',
              borderRadius: 2,
            }}
          >
            <LocalOfferIcon fontSize="small" color="primary" />
            <Typography variant="body2">Kupon diskon 10%</Typography>
            <Switch checked={pakaiKupon} onChange={ubahKupon} />
          </Box>

          <RingkasanHarga />

          <Button
            variant="contained"
            size="large"
            fullWidth
            disableElevation
            onClick={checkout}
          >
            Checkout
          </Button>
        </>
      )}
    </Bagian>
  )
}
