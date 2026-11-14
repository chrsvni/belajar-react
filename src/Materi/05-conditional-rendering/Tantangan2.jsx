function Item({ name, importance }) {
    return (
        <li>
            {name}
            {importance > 0 && <i> (Kepentingan: {importance})</i>}
        </li>
    );
}

export default function Tantangan2() {
    return (
        <section>
            <h3>Daftar Pengemasan Sally Ride</h3>
            <ul>
                <Item importance={9} name="Pakaian luar angkasa" />
                <Item importance={0} name="Helm berwarna emas" />
                <Item importance={6} name="Foto Tam" />
            </ul>
        </section>
    );
}