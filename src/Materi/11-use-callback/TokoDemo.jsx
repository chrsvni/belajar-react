import { memo, useState, useCallback } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import JumlahRender from './JumlahRender'

const daftarProduk = [
  { id: 1, nama: 'Kopi Susu', harga: 18000 },
  { id: 2, nama: 'Teh Manis', harga: 8000 },
  { id: 3, nama: 'Roti Bakar', harga: 15000 },
  { id: 4, nama: 'Nasi Goreng', harga: 22000 },
  { id: 5, nama: 'Mie Ayam', harga: 20000 },
  { id: 6, nama: 'Es Jeruk', harga: 10000 },
]

// Kartu produk. Dibungkus memo: hanya digambar ulang kalau props-nya berubah.
// Kartu yang SAMA dipakai di kedua toko.
const KartuProduk = memo(function KartuProduk({ produk, onTambah }) {
  return (
    <Paper variant="outlined" sx={{ p: 1.5 }}>
      <Stack spacing={0.5}>
        <Typography variant="subtitle2" fontWeight="bold">
          {produk.nama}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rp {produk.harga.toLocaleString('id-ID')}
        </Typography>
        <JumlahRender />
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => onTambah(produk)}
        >
          Tambah
        </Button>
      </Stack>
    </Paper>
  )
})

// Tampilan toko: sama untuk kedua versi
function Rak({ judul, keranjang, onTambah }) {
  const total = keranjang.reduce((jumlah, p) => jumlah + p.harga, 0)

  return (
    <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
      <Stack spacing={2}>
        <Typography variant="subtitle1" fontWeight="bold">
          {judul}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip
            size="small"
            color="primary"
            label={`Keranjang: ${keranjang.length} item`}
          />
          <Chip
            size="small"
            variant="outlined"
            label={`Total: Rp ${total.toLocaleString('id-ID')}`}
          />
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1.5,
          }}
        >
          {daftarProduk.map((produk) => (
            <KartuProduk key={produk.id} produk={produk} onTambah={onTambah} />
          ))}
        </Box>
      </Stack>
    </Paper>
  )
}

// TOKO KIRI: fungsi biasa. Kertas baru di setiap render.
function TokoTanpa() {
  const [keranjang, setKeranjang] = useState([])

  function handleTambah(produk) {
    setKeranjang((lama) => [...lama, produk])
  }

  return (
    <Rak
      judul="Tanpa useCallback"
      keranjang={keranjang}
      onTambah={handleTambah}
    />
  )
}

// TOKO KANAN: pakai useCallback. Kertas dari laci.
// Daftar bahannya kosong [] karena fungsi ini tidak membaca state apa pun.
function TokoDengan() {
  const [keranjang, setKeranjang] = useState([])

  const handleTambah = useCallback((produk) => {
    setKeranjang((lama) => [...lama, produk])
  }, [])

  return (
    <Rak
      judul="Dengan useCallback"
      keranjang={keranjang}
      onTambah={handleTambah}
    />
  )
}

export default function TokoDemo() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TokoTanpa />
          <TokoDengan />
        </Stack>
      </CardContent>
    </Card>
  )
}
