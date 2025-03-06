import { Formik, Form, Field } from 'formik'
import css from './ContactForm.module.css'

export default function ContactForm({addContact})
{
    const handleSubmit = ({ name, number }, actions) => {
        addContact({
            name: name,
            number: number
        });
        actions.resetForm();
    };
    return (
        <Formik initialValues={{
            name: '',
            number: ''
        }} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label}>
                    Name <Field type="text" name="name" />
                </label>
                <label className={css.label}>
                    Number <Field type="tel" name="number" />
                </label>
                <button className={css.button} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}