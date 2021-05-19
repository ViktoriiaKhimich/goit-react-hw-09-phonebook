import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { fields } from './fields'
import { initialState } from './initialState'
import Button from '../../../../shared/components/Button'
import FormInput from '../../../../shared/components/FormInput'
import { connect } from 'react-redux'
import operations from '../../redux/auth/operations'

import styles from './RegistrationForm.module.css'

const RegistrationForm = () => {

    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(operations.register(formData))
        reset()
    }

    const reset = () => {
        setFormData(initialState)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formInput}>
                    <label htmlFor="">Name</label>
                    <FormInput className={styles.formField} value={formData.name} {...fields.name} onChange={handleChange} classname={styles.field} />
                    <label htmlFor="">Email</label>
                    <FormInput className={styles.formField} value={formData.email} {...fields.email} onChange={handleChange} />
                    <label htmlFor="">Password</label>
                    <FormInput className={styles.formField} value={formData.password} {...fields.password} onChange={handleChange} />
                </div>
                <Button>Register</Button>
            </form>
        </>
    );

}

export default RegistrationForm;