import React, { Component } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Info from './components/Info';
import Education from './components/Education';
// import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      infoCompleted: false,
      educationList: [],
      degree: '',
      university: '',
      startDate: '',
      endDate: '',
      id: uuid(),
      educationMode: false,
      educationEditMode: false,
    };
  }

  // User clicks edit button
  handleClick = (e) => {
    let key = e.target.name;
    this.setState({
      ...this.state,
      [key]: !this.state[key],
    });
  };

  // Get input values from users
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  // Edit single education card
  editEducation = (e, education) => {
    this.setState({
      ...this.state,
      [e.target.name]: !this.state[e.target.name],
      educationEditMode: !this.state.educationEditMode,
      degree: education.degree,
      university: education.university,
      startDate: education.startDate,
      endDate: education.endDate,
    });
  };

  // Submit Form
  submitForm = (e) => {
    e.preventDefault();

    // Submit Info Form
    if (e.target.name === 'info-form') {
      this.setState({
        ...this.state,
        infoCompleted: !this.state.infoCompleted,
      });
      // Submit Education Form
    } else if (e.target.name === 'ed-form') {
      let qualificationObj = {
        degree: this.state.degree,
        university: this.state.university,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        id: this.state.id,
      };
      // New Education Mode
      if (!this.state.educationEditMode) {
        console.log('new mode');

        this.setState({
          ...this.state,
          educationList: this.state.educationList.concat(qualificationObj),
          degree: '',
          university: '',
          startDate: '',
          endDate: '',
          id: uuid(),
          educationMode: !this.state.educationMode,
        });
        // Edit Mode
      } else {
        console.log('edit mode');
        this.setState({
          ...this.state,
          degree: '',
          university: '',
          startDate: '',
          endDate: '',
          id: uuid(),
          educationMode: !this.state.educationMode,
        });
      }
    }
  };

  // Delete saved education card
  handleDelete = (id) => {
    let updatedList = this.state.educationList.filter(
      (item, index) => index !== id
    );
    this.setState({
      educationList: updatedList,
    });
  };

  render() {
    return (
      <div className="p-4" onClick={this.handleConfirm}>
        <header>
          <h1 className="mb-4">Resume Builder App</h1>
        </header>
        <main>
          <Info
            handleChange={this.handleChange}
            handleConfirm={this.handleConfirm}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phone={this.state.phone}
            linkedin={this.state.linkedin}
            submitForm={this.submitForm}
            infoCompleted={this.state.infoCompleted}
            handleClick={this.handleClick}
          />
          <Education
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleClick={this.handleClick}
            editEducation={this.editEducation}
            educationMode={this.state.educationMode}
            educationEditMode={this.state.educationEditMode}
            submitForm={this.submitForm}
            educationList={this.state.educationList}
            degree={this.state.degree}
            university={this.state.university}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        </main>
        {/* <footer>
          Developed by Mat
          <a href="https://github.com/1987mat" target="_blank" rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </footer> */}
      </div>
    );
  }
}

export default App;
