export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li>
            <label
                style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                />
                {todo.text}
            </label>{''}
            <button onClick={() => onDelete(todo.id)}>Hapus</button>
        </li>
    )
}
