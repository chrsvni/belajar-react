import { useState, useContext } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'

import { UserContext } from './UserContext'

function Lencana() {
  const user = useContext(UserContext)
  return (
    <Chip avatar={<Avatar>{user[0]}</Avatar>} label={user} variant="outlined" />
  )
}

function Sapaan() {
  const user = useContext(UserContext)
  return (
    <Typography>
      Halo, <strong>{user}</strong>! Selamat datang kembali.
    </Typography>
  )
}

function Navbar() {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1.5,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography fontWeight="bold">Navbar</Typography>
      <Lencana />
    </Paper>
  )
}

function Konten() {
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Sapaan />
    </Paper>
  )
}

export default function UserDemo() {
  const [user, setUser] = useState('Andi')

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2.5} sx={{ maxWidth: 550 }}>
          <TextField
            select
            label="Pengguna"
            size="small"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{ maxWidth: 200 }}
          >
            <MenuItem value="Andi">Andi</MenuItem>
            <MenuItem value="Sinta">Sinta</MenuItem>
            <MenuItem value="Budi">Budi</MenuItem>
          </TextField>

          <UserContext value={user}>
            <Navbar />
            <Konten />
          </UserContext>
        </Stack>
      </CardContent>
    </Card>
  )
}
