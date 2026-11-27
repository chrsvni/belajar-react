import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export interface DaftarGenerikProps<T extends { id: string | number }> {
  judul: string
  items: T[]
  renderItem: (item: T) => React.ReactNode
  pesanKosong?: string
}

export default function DaftarGenerik<T extends { id: string | number }>({
  judul,
  items,
  renderItem,
  pesanKosong = 'Data tidak ditemukan.',
}: DaftarGenerikProps<T>) {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
        {judul} ({items.length})
      </Typography>

      <Paper variant="outlined">
        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
            {pesanKosong}
          </Typography>
        ) : (
          <List dense disablePadding>
            {items.map((item) => (
              <ListItem
                key={item.id}
                divider
                sx={{ '&:last-child': { borderBottom: 'none' } }}
              >
                {renderItem(item)}
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  )
}
