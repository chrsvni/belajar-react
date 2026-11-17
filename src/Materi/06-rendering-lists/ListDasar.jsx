import { buku } from './data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const buah = ['🍎 Apel', '🍊 Jeruk', '🥭 Mangga'];

export default function ListDasar() {
    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={3}>
                    {/* Array String */}
                    <Box>
                        <Typography variant="subtitle2" fontWeight="bold" color="primary" gutterBottom>
                            1. Array String (Buah)
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                            {buah.map((b) => (
                                <Chip key={b} label={b} variant="outlined" sx={{ fontWeight: 600 }} />
                            ))}
                        </Stack>
                    </Box>

                    {/* Array Objek */}
                    <Box>
                        <Typography variant="subtitle2" fontWeight="bold" color="primary" gutterBottom>
                            2. Array Objek (Daftar Buku)
                        </Typography>
                        <List dense sx={{ bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                            {buku.map((b) => (
                                <ListItem key={b.id} divider>
                                    <ListItemText
                                        primary={b.judul}
                                        secondary={`Genre: ${b.genre} • Tahun: ${b.tahun}`}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}