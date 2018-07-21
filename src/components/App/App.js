import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Table from '../Table/Table'
import Form from '../Form/Form'
import users from './../../data/data.json'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusForm: false,
      users: users
    }
  }

  showForm = () => {
    if (this.state.statusForm) {
      return (
        <Form
          formToogle={(status, e) => this.changeStatusForm(status, e)}
          statusForm={this.state.statusForm}
          addUser={user => this.addAction(user)}
        />
      )
    }
  }

  addAction(user) {
    this.state.users.push(user)
    this.setState({
      users: this.state.users
    })
  }

  changeStatusForm = (status, event) => {
    event.preventDefault()
    this.setState({
      statusForm: status
    })
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <div className="row">
          <Table
            formToogle={(status, e) => this.changeStatusForm(status, e)}
            statusForm={this.state.statusForm}
            users={this.state.users}
          />
          {this.showForm()}
        </div>
      </div>
    )
  }
}

export default App
