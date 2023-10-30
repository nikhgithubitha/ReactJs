import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleValue: '',
    dateValue: '',
    isFilterActive: false,
  }

  changeTitle = event => {
    this.setState({titleValue: event.target.value})
  }

  changeDate = event => {
    this.setState({dateValue: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({
      isFilterActive: !isFilterActive,
    })
  }

  onAdd = event => {
    event.preventDefault()
    const {titleValue, dateValue} = this.state
    const newContact = {
      id: uuidv4(),
      title: titleValue,
      date: dateValue,
      isFavorite: false,
    }

    this.setState(prevValue => ({
      appointmentsList: [...prevValue.appointmentsList, newContact],
      titleValue: '',
      dateValue: '',
    }))
  }

  getFilteredList = () => {
    const {appointmentsList, isFilterActive} = this.state
    if (isFilterActive) {
      return appointmentsList.filter(each => each.isFavorite === true)
    }
    return appointmentsList
  }

  render() {
    const {titleValue, dateValue} = this.state
    const filterAppointmentList = this.getFilteredList()
    return (
      <div>
        <div className="pro">
          <div>
            <h1>Add Appointment</h1>
            <form onSubmit={this.onAdd}>
              <label htmlFor="title">TITLE</label>
              <br />
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={titleValue}
                onChange={this.changeTitle}
              />
              <br />
              <label htmlFor="time">DATE</label>
              <br />
              <input
                id="time"
                type="date"
                value={dateValue}
                onChange={this.changeDate}
              />
              <br />
              <button type="button">Add</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </div>
        <hr />
        <div>
          <div className="pro">
            <h1>Appointments</h1>
            <button type="button" onClick={this.onFilter}>
              Starred
            </button>
          </div>
          <ul>
            {filterAppointmentList.map(eachContact => (
              <AppointmentItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
