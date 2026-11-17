import ChatRoomDemo from './ChatRoomDemo';
import TimerDemo from './TimerDemo';
import ClassVsHookDemo from './ClassVsHookDemo';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

export default function Materi04() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
                04. Lifecycle Methods & Hooks
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Siklus hidup Effect di React: bagaimana <code>useEffect</code> memulai dan menghentikan sinkronisasi, peran <code>cleanup</code> dan array dependency, serta perbandingannya dengan lifecycle method pada class component.
            </Typography>

            <Alert severity="info" sx={{ mb: 4 }}>
                Buka Console (F12) untuk melihat log. Di mode development, Strict Mode menjalankan Effect dua kali saat komponen pertama tampil. Itu disengaja, bukan bug.
            </Alert>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    1. Mulai dan Hentikan Sinkronisasi
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Buka chat, lalu ganti ruang. Perhatikan urutan di Console: putus dari ruang lama, lalu sambung ke ruang baru.
                </Typography>
                <ChatRoomDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    2. Cleanup yang Terlihat: Timer
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Klik Mulai, lalu Jeda. Cleanup-lah yang menghentikan timer.
                </Typography>
                <TimerDemo />
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box sx={{ mb: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    3. Class Lifecycle vs useEffect
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Perilaku yang sama ditulis dua cara. Klik Ganti nama, lalu Lepas komponen, dan bandingkan log keduanya.
                </Typography>
                <ClassVsHookDemo />
            </Box>

            <Divider sx={{ my: 4 }} />
        </Box>
    );
}