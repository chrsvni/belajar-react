import WelcomeClass from './WelcomeClass';
import WelcomeFn from './WelcomeFn';
import Card from './Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Materi01() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                01. Komponen dan Props
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Materi dasar mengenai pembuatan komponen menggunakan Class Component dan Function Component serta pengiriman data via props.
            </Typography>

            <Card>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Daftar Komponen Sambutan:
                </Typography>
                <Stack spacing={1} sx={{ mt: 1 }}>
                    <WelcomeClass name="Andi" />
                    <WelcomeClass name="Sinta" />
                    <WelcomeFn name="Dewi" />
                </Stack>
            </Card>
        </Box>
    );
}