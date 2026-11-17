import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const awal = [
    { id: 1, nama: '🍎 Apel' },
    { id: 2, nama: '🍊 Jeruk' },
    { id: 3, nama: '🥭 Mangga' },
];

function KolomDaftar({ judul, items, pakaiIndex, isError }) {
    return (
        <Card
            variant="outlined"
            sx={{
                flex: 1,
                borderRadius: 2.5,
                borderColor: isError ? 'rgba(244, 63, 94, 0.35)' : 'rgba(16, 185, 129, 0.35)',
                bgcolor: isError ? 'rgba(244, 63, 94, 0.03)' : 'rgba(16, 185, 129, 0.03)',
            }}
        >
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {judul}
                    </Typography>
                    <Chip
                        label={isError ? 'Salah (key=index)' : 'Benar (key=id)'}
                        color={isError ? 'error' : 'success'}
                        size="small"
                        sx={{ fontWeight: 'bold' }}
                    />
                </Box>

                <Alert severity={isError ? 'warning' : 'success'} sx={{ mb: 2, py: 0.5, fontSize: '0.8rem' }}>
                    {isError
                        ? 'Input catatan tertinggal di posisi indeks, bukan di buahnya!'
                        : 'Input catatan tetap menempel pada buah yang tepat.'}
                </Alert>

                <Stack spacing={1.5}>
                    {items.map((item, index) => (
                        <Box
                            key={pakaiIndex ? index : item.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                p: 1.2,
                                borderRadius: 1.5,
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography variant="body2" sx={{ minWidth: 90, fontWeight: 600 }}>
                                {item.nama}
                            </Typography>
                            <TextField
                                size="small"
                                placeholder={`Tulis catatan ${item.nama}...`}
                                fullWidth
                                sx={{
                                    '& .MuiInputBase-input': {
                                        fontSize: '0.875rem',
                                    },
                                }}
                            />
                        </Box>
                    ))}

                    {items.length === 0 && (
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                            Semua item telah dihapus. Klik Reset untuk mengulang.
                        </Typography>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default function KeyDemo() {
    const [items, setItems] = useState(awal);

    function handleHapusPertama() {
        setItems(items.slice(1));
    }

    function handleReset() {
        setItems(awal);
    }

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                {/* Panduan Instruksi */}
                <Alert severity="info" sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" fontWeight="bold">
                        💡 Cara Menguji Bug Key:
                    </Typography>
                    <Typography variant="body2">
                        1. Ketikkan catatan berbeda di setiap buah pada kedua kolom (misal: "merah", "oranye", "manis").<br />
                        2. Klik tombol <strong>Hapus Item Pertama</strong>.<br />
                        3. Perhatikan: Pada kolom <strong>key=index</strong>, catatan pertama malah pindah ke buah kedua! Sedangkan pada kolom <strong>key=id</strong>, catatan tetap melekat pada buah yang benar.
                    </Typography>
                </Alert>

                {/* Tombol Aksi */}
                <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<DeleteIcon />}
                        onClick={handleHapusPertama}
                        disabled={items.length === 0}
                    >
                        Hapus Item Pertama
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<RestartAltIcon />}
                        onClick={handleReset}
                    >
                        Reset Data
                    </Button>
                </Stack>

                {/* Dua Kolom Perbandingan */}
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2.5}>
                    <KolomDaftar
                        judul="key = index"
                        items={items}
                        pakaiIndex={true}
                        isError={true}
                    />
                    <KolomDaftar
                        judul="key = item.id"
                        items={items}
                        pakaiIndex={false}
                        isError={false}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}