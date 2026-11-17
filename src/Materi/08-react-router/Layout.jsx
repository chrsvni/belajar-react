import { NavLink, Outlet } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function Layout() {
    // Helper styling untuk NavLink aktif
    const navStyle = ({ isActive }) => ({
        textDecoration: 'none',
        fontWeight: isActive ? '700' : '400',
        color: isActive ? '#6366f1' : '#94a3b8',
        padding: '8px 16px',
        borderRadius: '8px',
        backgroundColor: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
        transition: 'all 0.2s ease',
    });

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Header / Navbar Simulasi */}
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: 2,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#6366f1' }}>
                        Router Demo
                    </Typography>
                    <Chip label="v6+ / v7" size="small" color="primary" variant="outlined" />
                </Box>

                {/* Menu Navigasi menggunakan NavLink */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <NavLink to="" end style={navStyle}>
                        Beranda
                    </NavLink>
                    <NavLink to="detail/react-dasar" style={navStyle}>
                        Detail: React Dasar
                    </NavLink>
                    <NavLink to="detail/vite-builder" style={navStyle}>
                        Detail: Vite
                    </NavLink>
                    <NavLink to="halaman-ngasal" style={navStyle}>
                        Test 404
                    </NavLink>
                </Box>
            </Paper>

            {/* Outlet adalah placeholder tempat child route akan di-render */}
            <Box sx={{ minHeight: '300px' }}>
                <Outlet />
            </Box>
        </Box>
    );
}