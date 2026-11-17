import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Card from '../01-komponen-dan-props/Card';
import Badge from '../01-komponen-dan-props/Badge';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Baca materi props', done: true },
        { id: 2, text: 'Latihan useState', done: false },
    ]);

    function handleAdd(text) {
        setTodos([...todos, { id: Date.now(), text, done: false }]);
    }

    function handleToggle(id) {
        setTodos(
            todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
    }

    function handleDelete(id) {
        setTodos(todos.filter((t) => t.id !== id));
    }

    const sisa = todos.filter((t) => !t.done).length;

    return (
        <Card>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                    Daftar Tugas
                </Typography>
                <Badge color={sisa > 0 ? 'error' : 'success'}>
                    {sisa} belum selesai
                </Badge>
            </Stack>
            <TodoForm onAdd={handleAdd} />
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
        </Card>
    );
}



