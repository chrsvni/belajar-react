export function validasi(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email wajib diisi';
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = 'Format email tidak valid';
    }

    if (!values.password) {
        errors.password = 'Password wajib diisi';
    } else if (values.password.length < 6) {
        errors.password = 'Password minimal 6 karakter';
    }

    return errors;
}