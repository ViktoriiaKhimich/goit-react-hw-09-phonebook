import { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import operations from '../../redux/operations'
import FormInput from '../../../../shared/components/FormInput'
import { fields } from './fields';
import { initialState } from './initialState'
import { v4 } from 'uuid'

import styles from './ContactFrom.module.css'

const ContactFrom = () => {

    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const contacts = useSelector(({ phonebook }) => phonebook.contacts, shallowEqual)

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = formData;
        const contact = contacts.find(item => item.name === name || item.number === number)
        if (!contact) {
            dispatch(operations.addContact(name, number))
            reset()
            return
        }
        alert(`${name} is already in contacts`)
        reset()

    }

    const reset = () => {
        setFormData(initialState)
    }

    const nameFieldId = v4();
    const numberFieldId = v4();

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formInput}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <FormInput onChange={handleChange} {...fields.name} value={formData.name} className={styles.formField} />
                    <label htmlFor={numberFieldId}>Number</label>
                    <FormInput onChange={handleChange} {...fields.number} value={formData.number} className={styles.formField} />
                </div>
                <button type="submit">Add contact</button>
            </form>
        </>
    )
}

export default ContactFrom;