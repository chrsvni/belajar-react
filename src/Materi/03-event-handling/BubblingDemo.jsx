import { useState } from "react";

export default function BubblingDemo() {
    const [log, setLog] = useState([]);

    function tambahLog(pesan) {
        setLog((prev) => [...prev, pesan]);
    }

    function clear() {
        setLog([]);
    }

    return (
        <div>
            <div
                onClick={() => tambahLog('DIV induk diklik')}
                style={{ padding: 16, border: '1px solid black' }}
            >
                <p style={{ fontWeight: 800 }}>Area induk (klik di sini juga bisa)</p>

                <button onClick={() => tambahLog('Tombol A diklik')}>
                    A (tanpa stop)
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        tambahLog('Tombol B diklik')
                    }}
                >
                    B (stopPropagation)
                </button>

                <button onClick={clear}>Bersaihkan log</button>

                <div syle={{ padding: 16, display: 'flex', flexDiration: 'colum' }}>
                    {log.map((pesan, i) => {
                        let angka = i + 1;

                        return (
                            <p key={i}>{angka} . {pesan}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}