import Chip from '@mui/material/Chip';

export default function Badge({ color = 'primary', children = 'Badge' }) {
    const muiColors = ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'default'];
    const isMuiColor = muiColors.includes(color);

    return (
        <Chip
            label={children}
            size="small"
            color={isMuiColor ? color : 'default'}
            sx={
                !isMuiColor
                    ? { bgcolor: color, color: '#fff', fontWeight: 'bold' }
                    : { fontWeight: 'bold' }
            }
        />
    );
}