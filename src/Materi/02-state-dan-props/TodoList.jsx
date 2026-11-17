import TodoItem from "./TodoItem";
import List from "@mui/material/List";
import Alert from "@mui/material/Alert";
import Paper from "@mui/material/Paper";

export default function TodoList({ todos, onToggle, onDelete }) {
    if (todos.length === 0) {
        return <Alert severity="info">Belum ada tugas. Silakan tambahkan tugas baru di atas!</Alert>;
    }

    return (
        <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <List disablePadding>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </List>
        </Paper>
    );
}