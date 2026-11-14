import { useState } from 'react';
import { buku } from './data';

export default function FilterDemo() {
    const [genre, setGenre] = useState('semua');

    const tampil =
        genre === 'semua' ? buku : buku.filter((b) => b.genre === genre);

    return (
        <div>
            <label>
                Genre:{' '}
                <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="semua">Semua</option>
                    <option value="fiksi">Fiksi</option>
                    <option value="non-fiksi">Non-fiksi</option>
                </select>
            </label>

            <p>
                Menampilkan {tampil.length} dari {buku.length} buku
            </p>

            <ul>
                {tampil.map((b) => (
                    <li key={b.id}>
                        {b.judul} ({b.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
}