import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function CustomCard({ children }) {
    return (
        <Card
            elevation={2}
            sx={{
                my: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
            }}
        >
            <CardContent>{children}</CardContent>
        </Card>
    );
}