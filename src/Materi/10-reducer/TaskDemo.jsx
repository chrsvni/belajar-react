import { useState, useReducer } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

import { tasksReducer } from './tasksReducer'

let nextId = 3
const initialTasks = [
  { id: 0, text: 'Membaca materi reducer', done: true },
  { id: 1, text: 'Mencoba useReducer', done: false },
  { id: 2, text: 'Menulis laporan', done: false },
]

function TambahTugas({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim() === '') return
    onAddTask(text.trim())
    setText('')
  }

  return (
    <Stack component="form" onSubmit={handleSubmit} direction="row" spacing={1}>
      <TextField
        size="small"
        placeholder="Tugas baru"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" startIcon={<AddIcon />}>
        Tambah
      </Button>
    </Stack>
  )
}

export default function TaskDemo() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  function handleAddTask(text) {
    dispatch({ type: 'added', id: nextId++, text: text })
  }

  function handleChangeTask(task) {
    dispatch({ type: 'changed', task: task })
  }

  function handleDeleteTask(taskId) {
    dispatch({ type: 'deleted', id: taskId })
  }

  const selesai = tasks.filter((t) => t.done).length

  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardContent>
        <Stack spacing={2} sx={{ maxWidth: 550 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="subtitle1" fontWeight="bold">
              Daftar Tugas
            </Typography>
            <Chip
              size="small"
              color="primary"
              variant="outlined"
              label={`${selesai} dari ${tasks.length} selesai`}
            />
          </Stack>

          <TambahTugas onAddTask={handleAddTask} />

          {tasks.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              Belum ada tugas.
            </Typography>
          ) : (
            <List dense>
              {tasks.map((task) => (
                <ListItem
                  key={task.id}
                  disablePadding
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="hapus"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <Checkbox
                      edge="start"
                      checked={task.done}
                      onChange={(e) =>
                        handleChangeTask({ ...task, done: e.target.checked })
                      }
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={task.text}
                    sx={{ textDecoration: task.done ? 'line-through' : 'none' }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
