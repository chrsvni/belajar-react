import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function NotFoundView() {
    return (
        <Card variant="outlined" sx={{ borderRadius: 2, textAlign: 'center', py: 4 }}>
            <CardContent>
                <Typography variant="h3" fontWeight="bold" color="error" gutterBottom>
                    404
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Halaman Tidak Ditemukan!
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Rute yang kamu tuju tidak terdaftar di konfigurasi <code>&lt;Routes&gt;</code>.
                </Typography>
                <Button component={Link} to="" variant="contained" color="primary">
                    Kembali ke Beranda Demo
                </Button>
            </CardContent>
        </Card>
    );
}