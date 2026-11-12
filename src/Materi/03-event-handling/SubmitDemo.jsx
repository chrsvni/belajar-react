import { useState } from 'react';

export default function SubmitDemo() {
    const [hasil, setHasil] = useState(null);

    function handleSubmit(e) {
        e.preventDefault(); // cegah halaman reload
        const data = Object.fromEntries(new FormData(e.target).entries());
        setHasil(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Email: <input name="email" defaultValue="andi@contoh.com" />
                </label>
            </div>
            <div>
                <label>
                    Kota: <input name="kota" defaultValue="Bandung" />
                </label>
            </div>
            <button type="submit">Kirim</button>
            <button type="reset">Reset</button>

            {hasil && (
                <p>
                    Email: {hasil.email}, Kota: {hasil.kota}
                </p>
            )}
        </form>
    );
}