import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function HomeView() {
    const navigate = useNavigate();

    const handlePindahDenganProgram = (slug) => {
        navigate(`detail/${slug}?ref=tombol-beranda&waktu=${Date.now()}`);
    };

    return (
        <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    🏠 Halaman Utama (Home View)
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                    Halaman ini menunjukkan perpindahan rute menggunakan hook <code>useNavigate()</code>.
                    Klik salah satu tombol di bawah untuk berpindah ke rute detail sambil mengirimkan query params:
                </Typography>

                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handlePindahDenganProgram('react-router')}
                    >
                        Buka Topik "React Router"
                    </Button>

                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handlePindahDenganProgram('mui-components')}
                    >
                        Buka Topik "MUI Components"
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}