import PackingTechniques from './PackingTechniques';
import Tantangan1 from './Tantangan1';
import Tantangan2 from './Tantangan2';
import Tantangan3 from './Tantangan3';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Materi05() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                05. Conditional Rendering
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Teknik menampilkan elemen UI berdasarkan kondisi tertentu: operator ternary, logical AND (<code>&&</code>), null rendering, dan percabangan <code>if/else</code>.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Lima Cara Menulis Kondisi
                </Typography>
                <PackingTechniques />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 1: Ternary Operator
                </Typography>
                <Tantangan1 />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 2: Logical && dan Angka 0
                </Typography>
                <Tantangan2 />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 3: Refactor Ternary Menjadi if
                </Typography>
                <Tantangan3 />
            </Box>
        </Box>
    );
}