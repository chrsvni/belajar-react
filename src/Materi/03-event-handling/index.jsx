import ClickDemo from './ClickDemo';
import BubblingDemo from './BubblingDemo';
import InputsDemo from './InputsDemo';
import SubmitDemo from './SubmitDemo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Materi03() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                03. Event Handling
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Materi interaksi pengguna: menangani event klik, penyebaran event (bubbling & stopPropagation), controlled input dengan onChange, serta penanganan form submit.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    1. onClick: Cara Menulis Event Handler
                </Typography>
                <ClickDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    2. Event Propagation (Bubbling & Capturing)
                </Typography>
                <BubblingDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    3. onChange: Controlled Input
                </Typography>
                <InputsDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    4. onSubmit dan preventDefault
                </Typography>
                <SubmitDemo />
            </Box>
        </Box>
    );
}