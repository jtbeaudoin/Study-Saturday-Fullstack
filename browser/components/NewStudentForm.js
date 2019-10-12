import React, {Component} from 'react'

export default class NewStudentForm extends Component{
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }

  render() {
    return (
      <form>
        <label>
        <input type='text' name='First Name' placeholder='First Name'/>
        </label>
        <label>
        <input type='text' name='Last Name' placeholder='Last Name'/>
        </label>
        <label>
        <input type='text' name='Email' placeholder='Email' />
        </label>
        <button type='Submit'>Submit New Student</button>
      </form>
    )
  }
}
