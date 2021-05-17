import React, { Component } from 'react';
import { fields } from './fields'
import FormInput from '../../../../shared/components/FormInput'
import Button from '../../../../shared/components/Button'
import { connect } from 'react-redux'
import operations from '../../redux/auth/operations'

import styles from './LoginForm.module.css'

class LoginForm extends Component {
    state = {
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
        this.props.onLogin(this.state)
        this.reset()
    }

    reset() {
        this.setState({
            email: '',
            password: '',
        })
    }
    render() {
        const { email, password } = this.state;
        console.log(email, password);
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label htmlFor="">Email</label>
                        <FormInput className={styles.formField} value={email} {...fields.email} onChange={handleChange} />
                        <label htmlFor="">Password</label>
                        <FormInput className={styles.formField} value={password} {...fields.password} onChange={handleChange} />
                    </div>
                    <Button>Log in</Button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onLogin: (data) => dispatch(operations.login(data))
})
export default connect(null, mapDispatchToProps)(LoginForm);