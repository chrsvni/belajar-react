import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo modern
      light: '#818cf8',
      dark: '#4338ca',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#06b6d4', // Cyan
      light: '#67e8f9',
      dark: '#0e7490',
    },
    error: {
      main: '#f43f5e',
      light: '#fb7185',
      dark: '#e11d48',
    },
    success: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    background: {
      default: '#0b0f19', // Deep dark
      paper: '#111827',   // Slate dark surface
    },
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '8px 18px',
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundImage: 'none',
          backgroundColor: '#111827',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const getTheme = () => darkTheme;
