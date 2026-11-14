function ItemIf({ name, isPacked }) {
    if (isPacked) {
        return <li>{name} ✅</li>;
    }
    return <li>{name}</li>;
}

function ItemNull({ name, isPacked }) {
    if (isPacked) {
        return null; // tidak menampilkan apa-apa
    }
    return <li>{name}</li>;
}

function ItemTernary({ name, isPacked }) {
    return <li>{isPacked ? <del>{name + ' ✅'}</del> : name}</li>;
}

function ItemAnd({ name, isPacked }) {
    return (
        <li>
            {name} {isPacked && '✅'}
        </li>
    );
}

function ItemVariable({ name, isPacked }) {
    let isi = name;
    if (isPacked) {
        isi = <del>{name + ' ✅'}</del>;
    }
    return <li>{isi}</li>;
}

const barang = [
    { id: 1, name: 'Pakaian luar angkasa', isPacked: true },
    { id: 2, name: 'Helm berwarna emas', isPacked: true },
    { id: 3, name: 'Foto Tam', isPacked: false },
];

function Daftar({ judul, Komponen }) {
    return (
        <section>
            <h3>{judul}</h3>
            <ul>
                {barang.map((b) => (
                    <Komponen key={b.id} name={b.name} isPacked={b.isPacked} />
                ))}
            </ul>
        </section>
    );
}

export default function PackingTechniques() {
    return (
        <>
            <Daftar judul="1. if dan return" Komponen={ItemIf} />
            <Daftar judul="2. return null (barang terkemas hilang)" Komponen={ItemNull} />
            <Daftar judul="3. Ternary ? :" Komponen={ItemTernary} />
            <Daftar judul="4. Operator &&" Komponen={ItemAnd} />
            <Daftar judul="5. Variabel + if" Komponen={ItemVariable} />
        </>
    );
}