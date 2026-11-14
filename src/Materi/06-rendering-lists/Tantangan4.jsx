import { Fragment } from 'react';
// TANTANGAN 4
// Tampilkan garis pemisah <hr /> ANTARA baris-baris puisi:
// tidak di atas baris pertama dan tidak di bawah baris terakhir.
//
// Petunjuk:
// - Tiap item sekarang menghasilkan dua elemen (<hr /> dan <p>).
//   <>...</> tidak bisa diberi key. Pakai <Fragment key={...}>.
// - Pakai index dari map untuk tahu apakah ini baris pertama.

const puisi = [
    { id: 1, baris: 'Pagi datang membawa embun,' },
    { id: 2, baris: 'daun-daun belajar menunduk,' },
    { id: 3, baris: 'dan angin menulis namamu' },
    { id: 4, baris: 'di punggung sebuah bukit.' },
];

export default function Tantangan4() {
    return (
        <article>
            <h3>Puisi Pagi</h3>
            {puisi.map((p, index) => (
                <Fragment key={p.id}>
                    {index > 0 && <hr />}
                    <p>{p.baris}</p>
                </Fragment>
            ))}
        </article>
    );
}