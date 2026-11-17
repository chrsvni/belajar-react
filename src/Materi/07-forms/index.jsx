import FormDasar from './FormDasar';
import FormValidasi from './FormValidasi';
import FormFormik from './FormFormik';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Materi07() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                07. Forms & Controlled Components
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Penanganan form di React: Controlled components (input, textarea, select, checkbox), validasi formulir manual dengan <code>useState</code>, dan manajemen form skala besar menggunakan <code>Formik</code>.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    1. Controlled Component: Berbagai Jenis Input
                </Typography>
                <FormDasar />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    2. Validasi Manual Menggunakan useState
                </Typography>
                <FormValidasi />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    3. Validasi & State Management Menggunakan Formik
                </Typography>
                <FormFormik />
            </Box>
        </Box>
    );
}