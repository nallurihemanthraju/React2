import React, { Component } from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: [], selectedContact: {} }
    }
    getSelectedContact = (contact) => {
        console.log(contact)
        this.setState({ selectedContact: contact })
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({ contacts: response.data })
            })
            .catch()

    }
    render() {
        return (
            <>
                
                <h4>ContactApp</h4>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                this.state.contacts.length > 0 ? <><ContactList contacts={this.state.contacts} selContact={this.getSelectedContact} />
                                </> : null
                            }

                        </div>

                        <div className="col-md-4">
                            {
                                Object.keys(this.state.selectedContact).length > 0 ? <> <ContactDetails details={this.state.selectedContact} /></> : null
                            }

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactApp