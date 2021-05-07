import { Component } from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import actions from '../../redux/actions'
import FormInput from '../../shared/components/FormInput'
import { fields } from './fields'

import styles from './ContactFrom.module.css'

class ContactFrom extends Component {

    state = {
        name: "",
        number: "",
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;
        const contact = this.props.contacts.find(item => item.name === name || item.number === number)
        if (!contact) {
            this.props.onSubmit(name, number)
            this.reset()
            return
        }
        alert(`${name} is already in contacts`)
        this.reset()

    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {
        const nameFieldId = v4();
        const numberFieldId = v4();
        const { name, number } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formInput}>
                        <label htmlFor={nameFieldId}>Name</label>
                        <FormInput onChange={handleChange} {...fields.name} value={name} className={styles.formField} />
                        <label htmlFor={numberFieldId}>Number</label>
                        <FormInput onChange={handleChange} {...fields.number} value={number} className={styles.formField} />
                    </div>
                    <button type="submit">Add contact</button>
                </form>
            </>
        )
    }
}


const mapStateToProps = state => ({
    contacts: state.phonebook.contacts,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactFrom);