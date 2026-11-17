import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';

export default function InputsDemo() {
    const [nama, setNama] = useState('');
    const [umur, setUmur] = useState('20');
    const [setuju, setSetuju] = useState(false);
    const [warna, setWarna] = useState('biru');
    const [ukuran, setUkuran] = useState('M');
    const [pesan, setPesan] = useState('');

    const umurAngka = Number(umur);

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2.5}>
                    {/* Teks Nama */}
                    <TextField
                        label="Nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        size="small"
                        fullWidth
                    />

                    {/* Umur & Tombol */}
                    <Stack direction="row" spacing={1} alignItems="center">
                        <TextField
                            label="Umur"
                            type="number"
                            value={umur}
                            onChange={(e) => setUmur(e.target.value)}
                            size="small"
                            sx={{ width: 140 }}
                        />
                        <Button variant="outlined" onClick={() => setUmur(String(umurAngka + 10))}>
                            +10 tahun
                        </Button>
                    </Stack>

                    {/* Checkbox */}
                    <FormControlLabel
                        control={<Checkbox checked={setuju} onChange={(e) => setSetuju(e.target.checked)} />}
                        label="Saya setuju dengan syarat & ketentuan"
                    />

                    {/* Select Warna */}
                    <FormControl size="small" fullWidth>
                        <InputLabel id="warna-select-label">Pilih Warna</InputLabel>
                        <Select
                            labelId="warna-select-label"
                            value={warna}
                            label="Pilih Warna"
                            onChange={(e) => setWarna(e.target.value)}
                        >
                            <MenuItem value="biru">Biru</MenuItem>
                            <MenuItem value="merah">Merah</MenuItem>
                            <MenuItem value="hijau">Hijau</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Radio Ukuran */}
                    <FormControl>
                        <FormLabel>Pilih Ukuran:</FormLabel>
                        <RadioGroup
                            row
                            value={ukuran}
                            onChange={(e) => setUkuran(e.target.value)}
                        >
                            {['S', 'M', 'L'].map((u) => (
                                <FormControlLabel key={u} value={u} control={<Radio />} label={u} />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    {/* Textarea Pesan */}
                    <TextField
                        label="Pesan"
                        multiline
                        rows={3}
                        value={pesan}
                        onChange={(e) => setPesan(e.target.value)}
                        fullWidth
                    />

                    {/* Live Preview / Hasil */}
                    <Alert severity="success" sx={{ mt: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                            Hasil Data State (Live Preview):
                        </Typography>
                        <Typography variant="body2">• Nama: {nama || '(belum diisi)'}</Typography>
                        <Typography variant="body2">• Umur: {umurAngka} tahun</Typography>
                        <Typography variant="body2">• Setuju: {setuju ? '✅ Ya' : '❌ Belum'}</Typography>
                        <Typography variant="body2">• Warna: {warna}, Ukuran: {ukuran}</Typography>
                        <Typography variant="body2">• Jumlah karakter pesan: {pesan.length} huruf</Typography>
                    </Alert>
                </Stack>
            </CardContent>
        </Card>
    );
}