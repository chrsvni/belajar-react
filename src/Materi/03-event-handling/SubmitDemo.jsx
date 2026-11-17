import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function SubmitDemo() {
    const [hasil, setHasil] = useState(null);

    function handleSubmit(e) {
        e.preventDefault(); // cegah halaman reload
        const data = Object.fromEntries(new FormData(e.target).entries());
        setHasil(data);
    }

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Stack component="form" onSubmit={handleSubmit} spacing={2} sx={{ maxWidth: 450 }}>
                    <TextField
                        label="Email"
                        name="email"
                        defaultValue="andi@contoh.com"
                        size="small"
                        fullWidth
                    />
                    <TextField
                        label="Kota"
                        name="kota"
                        defaultValue="Bandung"
                        size="small"
                        fullWidth
                    />

                    <Stack direction="row" spacing={1}>
                        <Button type="submit" variant="contained" startIcon={<SendIcon />}>
                            Kirim
                        </Button>
                        <Button type="reset" variant="outlined" color="inherit" startIcon={<RestartAltIcon />} onClick={() => setHasil(null)}>
                            Reset
                        </Button>
                    </Stack>

                    {hasil && (
                        <Alert severity="success" sx={{ mt: 2 }}>
                            <Typography variant="body2">
                                <strong>Data Terkirim:</strong> Email: <code>{hasil.email}</code>, Kota: <code>{hasil.kota}</code>
                            </Typography>
                        </Alert>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}