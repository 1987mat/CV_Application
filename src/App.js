import React, { Component } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';

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
      experienceList: [],
      title: '',
      company: '',
      expStartDate: '',
      expEndDate: '',
      expId: uuid(),
      experienceMode: false,
      experienceEditMode: false,
    };
  }

  // USER CLICKS ADD OR EDIT BUTTON
  handleClick = (e) => {
    let key = e.target.name;
    this.setState({
      ...this.state,
      [key]: !this.state[key],
    });
  };

  // GET INPUT VALUES
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  // EDIT SINGLE EDUCATION CARD
  handleEditEducation = (e, education, index) => {
    this.setState({
      ...this.state,
      [e.target.name]: !this.state[e.target.name],
      educationEditMode: !this.state.educationEditMode,
      degree: education.degree,
      university: education.university,
      startDate: education.startDate,
      endDate: education.endDate,
      id: index,
    });
  };

  // EDIT SINGLE EXPERIENCE CARD
  handleEditExperience = (e, experience, index) => {
    this.setState({
      ...this.state,
      [e.target.name]: !this.state[e.target.name],
      experienceEditMode: !this.state.educationEditMode,
      title: experience.title,
      company: experience.company,
      expStartDate: experience.expStartDate,
      expEndDate: experience.expStartDate,
      expId: index,
    });
  };

  // SUBMIT FORMS
  submitForm = (e) => {
    e.preventDefault();

    // SUBMIT INFO FORM
    if (e.target.name === 'info-form') {
      this.setState({
        ...this.state,
        infoCompleted: !this.state.infoCompleted,
      });
      // SUBMIT EDUCATION FORM
    } else if (e.target.name === 'ed-form') {
      let qualificationObj = {
        degree: this.state.degree,
        university: this.state.university,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        id: this.state.id,
      };

      // NEW EDUCATION
      if (!this.state.educationEditMode) {
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
        // EDIT MODE
      } else {
        const { educationList } = this.state;

        for (let i = 0; i < educationList.length; i++) {
          if (i === qualificationObj.id) {
            educationList.splice(i, 1, qualificationObj);
          }
        }

        this.setState({
          ...this.state,
          educationList: educationList,
          degree: '',
          university: '',
          startDate: '',
          endDate: '',
          id: uuid(),
          educationMode: !this.state.educationMode,
          educationEditMode: !this.state.educationEditMode,
        });
      }
      // SUBMIT EXPERIENCE FORM
    } else {
      let experienceObj = {
        title: this.state.title,
        company: this.state.company,
        expStartDate: this.state.expStartDate,
        expEndDate: this.state.expEndDate,
        expId: this.state.expId,
      };

      // NEW EXPERIENCE
      if (!this.state.experienceEditMode) {
        this.setState({
          ...this.state,
          experienceList: this.state.experienceList.concat(experienceObj),
          title: '',
          company: '',
          expStartDate: '',
          expEndDate: '',
          expId: uuid(),
          experienceMode: !this.state.experienceMode,
        });
        // EDIT MODE
      } else {
        const { experienceList } = this.state;

        for (let i = 0; i < experienceList.length; i++) {
          if (i === experienceObj.expId) {
            experienceList.splice(i, 1, experienceObj);
          }
        }

        this.setState({
          ...this.state,
          experienceList: experienceList,
          title: '',
          company: '',
          expStartDate: '',
          expEndDate: '',
          expId: uuid(),
          experienceMode: !this.state.experienceMode,
          experienceEditMode: !this.state.experienceEditMode,
        });
      }
    }
  };

  // DELETE CARD
  handleDelete = (id, e) => {
    // EDUCATION
    if (e.target.name === 'delete-ed') {
      let updatedList = this.state.educationList.filter(
        (item, index) => index !== id
      );
      this.setState({
        educationList: updatedList,
      });
      // EXPERIENCE
    } else {
      let updatedList = this.state.experienceList.filter(
        (item, index) => index !== id
      );

      this.setState({
        experienceList: updatedList,
      });
    }
  };

  render() {
    return (
      <div className="p-4" onClick={this.handleConfirm}>
        <header>
          <h1 className="title mb-4 display-4 text-center">
            Resume Builder App
          </h1>
        </header>
        <main className="mb-5">
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
            handleEditEducation={this.handleEditEducation}
            educationMode={this.state.educationMode}
            submitForm={this.submitForm}
            educationList={this.state.educationList}
            degree={this.state.degree}
            university={this.state.university}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
          <Experience
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            handleClick={this.handleClick}
            handleEditExperience={this.handleEditExperience}
            submitForm={this.submitForm}
            title={this.state.title}
            company={this.state.company}
            expStartDate={this.state.expStartDate}
            expEndDate={this.state.expEndDate}
            experienceMode={this.state.experienceMode}
            experienceList={this.state.experienceList}
          />
        </main>
        <footer className="text-center mt-5">
          <span className="footer-span">Developed by Mat</span>
          <a
            className="text-dark"
            href="https://github.com/1987mat"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-github ml-2" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
