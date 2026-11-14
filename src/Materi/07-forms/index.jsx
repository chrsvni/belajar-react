import FormDasar from './FormDasar';
import FormValidasi from './FormValidasi';
import FormFormik from './FormFormik';

export default function Materi07() {
    return (
        <>
            <h1>Forms &amp; Controlled Components</h1>

            <h2>1. Controlled component: semua jenis input</h2>
            <FormDasar />

            <h2>2. Validasi manual (useState)</h2>
            <FormValidasi />

            <h2>3. Validasi dengan Formik</h2>
            <FormFormik />
        </>
    );
}