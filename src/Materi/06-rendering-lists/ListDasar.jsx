import { buku } from './data';

const buah = ['Apel', 'Jeruk', 'Mangga'];

export default function ListDasar() {
    const itemBuah = buah.map((b) => <li key={b}>{b}</li>);

    const itemBuku = buku.map((b) => (
        <li key={b.id}>
            <b>{b.judul}</b> ({b.genre}), {b.tahun}
        </li>
    ));

    const itemJudul = buku.map((b) => {
        return <li key={b.id}>{b.judul}</li>;
    });

    return (
        <>
            <h4>Array string</h4>
            <ul>{itemBuah}</ul>

            <h4>Array objek</h4>
            <ul>{itemBuku}</ul>

            <h4>Dengan return eksplisit</h4>
            <ul>{itemJudul}</ul>
        </>
    );
}