import ListDasar from './ListDasar';
import FilterDemo from './FilterDemo';
import KeyDemo from './KeyDemo';
import Tantangan1 from './Tantangan1';
import Tantangan2 from './Tantangan2';
import Tantangan3 from './Tantangan3';
import Tantangan4 from './Tantangan4';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Materi06() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                06. Rendering Lists
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Transformasi array data menjadi elemen JSX interaktif menggunakan method <code>Array.prototype.map()</code>, penyaringan dengan <code>filter()</code>, dan pengelolaan <code>key</code> unik.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    1. map()
                </Typography>
                <ListDasar />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    2. filter() + map()
                </Typography>
                <FilterDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    3. Kenapa Key Tidak Boleh Index
                </Typography>
                <KeyDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 1: Bagi Daftar Jadi Dua
                </Typography>
                <Tantangan1 />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 2: Daftar Bersarang
                </Typography>
                <Tantangan2 />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 3: Ekstrak Komponen
                </Typography>
                <Tantangan3 />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Tantangan 4: Pemisah Antar Item
                </Typography>
                <Tantangan4 />
            </Box>
        </Box>
    );
}