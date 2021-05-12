import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactForm from '../../components/ContactFrom'
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList'
import operations from '../../redux/operations'
import { loading } from '../../redux/selectors'

class PhonebookPage extends Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />

                <h2>Contacts</h2>
                <Filter />

                {this.props.loading && <h1>...Loading</h1>}
                <ContactList />
            </div>
        )
    }
}

const mapStateToPtops = state => ({
    loading: loading(state)
})
const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(operations.fetchContacts())
})

export default connect(mapStateToPtops, mapDispatchToProps)(PhonebookPage);