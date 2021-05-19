import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { fields } from './fields'
import { initialState } from './initialState'
import FormInput from '../../../../shared/components/FormInput'
import Button from '../../../../shared/components/Button'
import operations from '../../redux/auth/operations'

import styles from './LoginForm.module.css'

const LoginForm = () => {

    const [formData, setFormData] = useState(initialState);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(operations.login(formData))
        reset()
    }

    const reset = () => {
        setFormData(initialState)
    }

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formInput}>
                    <label htmlFor="">Email</label>
                    <FormInput className={styles.formField} value={formData.email} {...fields.email} onChange={handleChange} />
                    <label htmlFor="">Password</label>
                    <FormInput className={styles.formField} value={formData.password} {...fields.password} onChange={handleChange} />
                </div>
                <Button>Log in</Button>
            </form>
        </>
    );

}

export default LoginForm;