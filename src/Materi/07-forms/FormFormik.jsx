import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validasi } from './validasi';

const merah = { color: 'crimson', margin: '4px 0' };

export default function FormFormik() {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={validasi}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    resetForm();
                }, 600);
            }}
        >
            {({ isSubmitting }) => (
                <Form noValidate>
                    <div>
                        <label>
                            Email: <Field type="email" name="email" />
                        </label>
                        <ErrorMessage name="email">
                            {(pesan) => <p style={merah}>{pesan}</p>}
                        </ErrorMessage>
                    </div>

                    <div>
                        <label>
                            Password: <Field type="password" name="password" />
                        </label>
                        <ErrorMessage name="password">
                            {(pesan) => <p style={merah}>{pesan}</p>}
                        </ErrorMessage>
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Mengirim...' : 'Kirim'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}