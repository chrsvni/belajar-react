function Item({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked ? '✅' : '❌'}
        </li>
    );
}

export default function Tantangan1() {
    return (
        <section>
            <h3>Daftar Pengemasan Sally Ride</h3>
            <ul>
                <Item isPacked={true} name="Pakaian luar angkasa" />
                <Item isPacked={true} name="Helm berwarna emas" />
                <Item isPacked={false} name="Foto Tam" />
            </ul>
        </section>
    );
}