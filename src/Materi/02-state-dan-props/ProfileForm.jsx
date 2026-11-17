import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

export default function ProfileForm() {
    const [form, setForm] = useState({ nama: 'Andi', kota: 'Bandung' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack spacing={2} sx={{ maxWidth: 400 }}>
                    <TextField
                        label="Nama"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                    />
                    <TextField
                        label="Kota"
                        name="kota"
                        value={form.kota}
                        onChange={handleChange}
                        size="small"
                        fullWidth
                    />

                    <Alert severity="info" sx={{ mt: 1 }}>
                        <Typography variant="body2">
                            <strong>{form.nama || '(Nama kosong)'}</strong> tinggal di{' '}
                            <strong>{form.kota || '(Kota kosong)'}</strong>
                        </Typography>
                    </Alert>
                </Stack>
            </CardContent>
        </Card>
    );
}