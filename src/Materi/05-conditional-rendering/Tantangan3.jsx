function Minuman({ name }) {
    let bagian;
    let rasa;
    let waktu;

    if (name === 'teh') {
        bagian = 'daun';
        rasa = 'segar, agak sepat';
        waktu = 'sore hari';
    } else if (name === 'kopi') {
        bagian = 'biji';
        rasa = 'pahit, pekat';
        waktu = 'pagi hari';
    } else if (name === 'coklat') {
        bagian = 'buah';
        rasa = 'pahit, manis';
        waktu = 'malam hari ketika hujan';
    }

    return (
        <section>
            <h4>{name}</h4>
            <dl>
                <dt>Bagian tanaman</dt>
                <dd>{bagian}</dd>
                <dt>Rasa</dt>
                <dd>{rasa}</dd>
                <dt>Waktu minum</dt>
                <dd>{waktu}</dd>
            </dl>
        </section>
    );
}

export default function Tantangan3() {
    return (
        <>
            <Minuman name="teh" />
            <Minuman name="kopi" />
            <Minuman name="coklat" />
        </>
    );
}