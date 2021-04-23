import {Component} from 'react';
import {v4} from 'uuid'

import styles from './ContactFrom.module.css'

class ContactFrom extends Component {

    state = {
        name: "",
        number: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.onSubmit(this.state)

        this.reset()

    }

    reset = () =>  {
        this.setState({
            name: '',
            number: '',
        })
    }

    render() {

        const nameFieldId = v4();
        const numberFieldId = v4();

        const {name, number} = this.state;
        const {handleChange, handleSubmit } = this;
        return (
            <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formInput}>
                <label htmlFor={nameFieldId}>Name</label>
                <input
                    className={styles.formField}
                    id={nameFieldId}
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
                </div>

                <div className={styles.formInput}>
                <label  htmlFor={numberFieldId}>Number</label>
                <input
                    className={styles.formField}
                    id={numberFieldId}
                    value={number}
                    onChange={handleChange}
                    type="text"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
                </div>
                <button type="submit">Add contact</button>
            </form>
            </>
        )

    }
}

export default ContactFrom;