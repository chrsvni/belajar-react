import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

import LencanaKeranjang from './komponen/LencanaKeranjang'
import DaftarProduk from './komponen/DaftarProduk'
import PanelKeranjang from './komponen/PanelKeranjang'

export default function ZustandDemo() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Stack spacing={2.5}>
          <LencanaKeranjang />
          <Divider />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2.5,
              alignItems: 'start',
            }}
          >
            <DaftarProduk />
            <PanelKeranjang />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
