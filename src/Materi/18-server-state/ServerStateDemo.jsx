import { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import SwrPanel from './SwrPanel'
import QueryPanel from './QueryPanel'

const PILIHAN = [
  { label: 'Bulbasaur', id: '1' },
  { label: 'Charmander', id: '4' },
  { label: 'Squirtle', id: '7' },
  { label: 'Tidak ada (gagal)', id: 'tidak-ada' },
]

export default function ServerStateDemo() {
  const [id, setId] = useState('1')

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
            {PILIHAN.map((p) => (
              <Button
                key={p.id}
                variant={id === p.id ? 'contained' : 'outlined'}
                color={p.id === 'tidak-ada' ? 'error' : 'primary'}
                onClick={() => setId(p.id)}
              >
                {p.label}
              </Button>
            ))}
          </Stack>

          <Divider />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
            }}
          >
            <SwrPanel id={id} />
            <QueryPanel id={id} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
