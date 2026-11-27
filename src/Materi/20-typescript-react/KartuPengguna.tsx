import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export type PeranUser = 'Admin' | 'Member' | 'Tamu'

export interface KartuPenggunaProps {
  nama: string
  email: string
  peran: PeranUser
  poin?: number
  isActive?: boolean
  children?: React.ReactNode
}

export default function KartuPengguna({
  nama,
  email,
  peran,
  poin = 0,
  isActive = true,
  children,
}: KartuPenggunaProps) {
  const warnaPeran: Record<PeranUser, 'primary' | 'secondary' | 'default'> = {
    Admin: 'primary',
    Member: 'secondary',
    Tamu: 'default',
  }

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack
          direction="row"
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {nama}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label={peran}
              size="small"
              color={warnaPeran[peran]}
              variant="filled"
            />
            <Chip
              label={isActive ? 'Aktif' : 'Nonaktif'}
              size="small"
              color={isActive ? 'success' : 'error'}
              variant="outlined"
            />
          </Stack>
        </Stack>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Poin Loyalitas: <strong>{poin}</strong>
        </Typography>

        {children && (
          <Box
            sx={{
              mt: 1.5,
              pt: 1.5,
              borderTop: '1px dashed',
              borderColor: 'divider',
            }}
          >
            {children}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}
