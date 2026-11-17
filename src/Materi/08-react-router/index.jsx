import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Layout from './Layout';
import HomeView from './HomeView';
import DetailView from './DetailView';
import NotFoundView from './NotFoundView';

export default function Materi08() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{ p: 3, border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Materi 08: Client-Side Routing (React Router v6+)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Praktik ini mendemonstrasikan implementasi <b>Nested Routes</b>, <b>NavLink</b>, <b>Outlet</b>,{' '}
                    <b>Dynamic Route Params (:slug)</b>, <b>Query Params (searchParams)</b>, dan penanganan <b>404 Route</b>.
                </Typography>
            </Paper>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomeView />} />
                    <Route path="detail/:slug" element={<DetailView />} />
                    <Route path="*" element={<NotFoundView />} />
                </Route>
            </Routes>
        </Box>
    );
}