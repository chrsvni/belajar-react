import Counter from "./Counter";
import ProfileForm from "./ProfileForm";
import TodoApp from './TodoApp';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function Materi02() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                02. State dan Props
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Materi pengelolaan state interaktif menggunakan hook <code>useState</code> untuk data primitif, objek, dan komunikasi antar komponen.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    1. useState: Angka (Counter)
                </Typography>
                <Counter />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    2. useState: Objek (Profile Form)
                </Typography>
                <ProfileForm />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    3. Komunikasi Antar Komponen (Todo App)
                </Typography>
                <TodoApp />
            </Box>
        </Box>
    );
}