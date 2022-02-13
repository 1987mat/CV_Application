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
      degree: '',
      university: '',
      startDate: '',
      endDate: '',
      id: uuid(),
      editMode: false,
      educationList: [],
      showDegreeField: false,
      showUniField: false,
      showStartDateField: false,
      showEndDateField: false,
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
      [e.target.name]: e.target.value,
    });
  };

  // Show education form onclick
  handleClickAdd = () => {
    this.setState({
      ...this.state,
      educationEditStatus: !this.state.educationEditStatus,
    });
  };

  // Edit single education card
  handleEditEducationForm = (e, education) => {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
      degree: education.degree,
      university: education.university,
      startDate: education.startDate,
      endDate: education.endDate,
      editMode: !this.state.editMode,
    });
  };

  // Submit Form
  submitForm = (e) => {
    e.preventDefault();

    this.setState({
      infoCompleted: !this.infoCompleted,
    });

    // const { educationList } = this.state;

    // let obj = {
    //   degree: this.state.degree,
    //   university: this.state.university,
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    //   id: this.state.id,
    //   editMode: this.state.educationEditSingle,
    // };

    // educationList.push(obj);

    // this.setState({
    //   ...this.state,
    //   degree: '',
    //   university: '',
    //   startDate: '',
    //   endDate: '',
    //   id: uuid(),
    //   editMode: false,
    //   educationEditStatus: false,
    //   educationEditSingle: false,
    // });
  };

  closeEducationForm = () => {
    this.setState({
      educationEditStatus: false,
      educationEditSingle: false,
    });
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
            handleClickAdd={this.handleClickAdd}
            handleChange={this.handleChange}
            educationEditStatus={this.state.educationEditStatus}
            closeEducationForm={this.closeEducationForm}
            submitForm={this.submitForm}
            educationList={this.state.educationList}
            handleDelete={this.handleDelete}
            handleClick={this.handleClick}
            showDegreeField={this.state.showDegreeField}
            showUniField={this.state.showUniField}
            showStartDateField={this.state.showStartDateField}
            showEndDateField={this.state.showEndDateField}
            handleEditEducationForm={this.handleEditEducationForm}
            degree={this.state.degree}
            university={this.state.university}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            educationEditSingle={this.state.educationEditSingle}
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
