import React, { Component } from 'react';
import { fields } from './fields'
import Button from '../../../../shared/components/Button'
import FormInput from '../../../../shared/components/FormInput'
import { connect } from 'react-redux'
import operations from '../../redux/auth/operations'

import styles from './RegistrationForm.module.css'

class RegistrationForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onRegister(this.state)
        this.reset()
    }

    reset() {
        this.setState({
            name: '',
            email: '',
            password: '',
        })
    }
    render() {
        const { name, email, password } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label htmlFor="">Name</label>
                        <FormInput className={styles.formField} value={name} {...fields.name} onChange={handleChange} classname={styles.field} />
                        <label htmlFor="">Email</label>
                        <FormInput className={styles.formField} value={email} {...fields.email} onChange={handleChange} />
                        <label htmlFor="">Password</label>
                        <FormInput className={styles.formField} value={password} {...fields.password} onChange={handleChange} />
                    </div>
                    <Button>Register</Button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onRegister: (data) => dispatch(operations.register(data))
})



export default connect(null, mapDispatchToProps)(RegistrationForm);