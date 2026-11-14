import { buku } from './data';

// TANTANGAN 1
// Sekarang semua buku ada dalam satu daftar.
// Tampilkan DUA daftar, satu setelah yang lain:
//   - "Fiksi"      (genre === 'fiksi')
//   - "Non-fiksi"  (genre bukan 'fiksi')
// Petunjuk: pakai filter() dua kali, lalu map() untuk masing-masing.

function buatItem(daftar) {
    return daftar.map((b) => (
        <li key={b.id}>
            {b.judul} ({b.tahun})
        </li>
    ));
}

export default function Tantangan1() {
    const fiksi = buku.filter((b) => b.genre === 'fiksi');
    const nonFiksi = buku.filter((b) => b.genre !== 'fiksi');

    return (
        <article>
            <h3>Koleksi Buku</h3>
            <h4>Fiksi</h4>
            <ul>{buatItem(fiksi)}</ul>
            <h4>Non-fiksi</h4>
            <ul>{buatItem(nonFiksi)}</ul>
        </article>
    );
}