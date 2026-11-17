import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <ListItem
            divider
            secondaryAction={
                <IconButton edge="end" aria-label="delete" color="error" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton onClick={() => onToggle(todo.id)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.done}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText
                    primary={todo.text}
                    sx={{
                        textDecoration: todo.done ? 'line-through' : 'none',
                        color: todo.done ? 'text.secondary' : 'text.primary',
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
}
