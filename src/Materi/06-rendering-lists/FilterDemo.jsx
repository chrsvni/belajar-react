import { useState } from 'react';
import { buku } from './data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function FilterDemo() {
    const [genre, setGenre] = useState('semua');

    const tampil =
        genre === 'semua' ? buku : buku.filter((b) => b.genre === genre);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2.5}>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }} justifyContent="space-between">
                        <FormControl size="small" sx={{ minWidth: 200 }}>
                            <InputLabel id="genre-select-label">Filter Genre</InputLabel>
                            <Select
                                labelId="genre-select-label"
                                value={genre}
                                label="Filter Genre"
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <MenuItem value="semua">Semua Genre</MenuItem>
                                <MenuItem value="fiksi">Fiksi</MenuItem>
                                <MenuItem value="non-fiksi">Non-fiksi</MenuItem>
                            </Select>
                        </FormControl>

                        <Chip
                            label={`Menampilkan ${tampil.length} dari ${buku.length} buku`}
                            color="primary"
                            variant="outlined"
                        />
                    </Stack>

                    <List sx={{ bgcolor: 'background.default', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
                        {tampil.map((b) => (
                            <ListItem key={b.id} divider>
                                <MenuBookIcon sx={{ mr: 2, color: 'text.secondary' }} />
                                <ListItemText
                                    primary={b.judul}
                                    secondary={`Tahun: ${b.tahun}`}
                                />
                                <Chip
                                    label={b.genre}
                                    size="small"
                                    color={b.genre === 'fiksi' ? 'secondary' : 'info'}
                                    sx={{ textTransform: 'capitalize' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </CardContent>
        </Card>
    );
}