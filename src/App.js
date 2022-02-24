import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Info from './components/Info';
import Education from './components/Education';
import Experience from './components/Experience';

const App = () => {
  const [state, setState] = useState({
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
  });

  // USER CLICKS ADD OR EDIT BUTTON
  const handleClick = (e) => {
    let key = e.target.name;
    setState({
      ...state,
      [key]: !state[key],
    });
  };

  // GET INPUT VALUES
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // EDIT SINGLE EDUCATION CARD
  const handleEditEducation = (e, education, index) => {
    setState({
      ...state,
      [e.target.name]: !state[e.target.name],
      educationEditMode: !state.educationEditMode,
      degree: education.degree,
      university: education.university,
      startDate: education.startDate,
      endDate: education.endDate,
      id: index,
    });
  };

  // EDIT SINGLE EXPERIENCE CARD
  const handleEditExperience = (e, experience, index) => {
    setState({
      ...state,
      [e.target.name]: !state[e.target.name],
      experienceEditMode: !state.educationEditMode,
      title: experience.title,
      company: experience.company,
      expStartDate: experience.expStartDate,
      expEndDate: experience.expStartDate,
      expId: index,
    });
  };

  // SUBMIT FORMS
  const submitForm = (e) => {
    e.preventDefault();

    // SUBMIT INFO FORM
    if (e.target.name === 'info-form') {
      setState({
        ...state,
        infoCompleted: !state.infoCompleted,
      });
      // SUBMIT EDUCATION FORM
    } else if (e.target.name === 'ed-form') {
      let qualificationObj = {
        degree: state.degree,
        university: state.university,
        startDate: state.startDate,
        endDate: state.endDate,
        id: state.id,
      };

      // NEW EDUCATION
      if (!state.educationEditMode) {
        setState({
          ...state,
          educationList: state.educationList.concat(qualificationObj),
          degree: '',
          university: '',
          startDate: '',
          endDate: '',
          id: uuid(),
          educationMode: !state.educationMode,
        });
        // EDIT MODE
      } else {
        const { educationList } = state;

        for (let i = 0; i < educationList.length; i++) {
          if (i === qualificationObj.id) {
            educationList.splice(i, 1, qualificationObj);
          }
        }

        setState({
          ...state,
          educationList: educationList,
          degree: '',
          university: '',
          startDate: '',
          endDate: '',
          id: uuid(),
          educationMode: !state.educationMode,
          educationEditMode: !state.educationEditMode,
        });
      }
      // SUBMIT EXPERIENCE FORM
    } else {
      let experienceObj = {
        title: state.title,
        company: state.company,
        expStartDate: state.expStartDate,
        expEndDate: state.expEndDate,
        expId: state.expId,
      };

      // NEW EXPERIENCE
      if (!state.experienceEditMode) {
        setState({
          ...state,
          experienceList: state.experienceList.concat(experienceObj),
          title: '',
          company: '',
          expStartDate: '',
          expEndDate: '',
          expId: uuid(),
          experienceMode: !state.experienceMode,
        });
        // EDIT MODE
      } else {
        const { experienceList } = state;

        for (let i = 0; i < experienceList.length; i++) {
          if (i === experienceObj.expId) {
            experienceList.splice(i, 1, experienceObj);
          }
        }

        setState({
          ...state,
          experienceList: experienceList,
          title: '',
          company: '',
          expStartDate: '',
          expEndDate: '',
          expId: uuid(),
          experienceMode: !state.experienceMode,
          experienceEditMode: !state.experienceEditMode,
        });
      }
    }
  };

  // DELETE CARD
  const handleDelete = (id, e) => {
    // EDUCATION
    if (e.target.name === 'delete-ed') {
      let updatedList = state.educationList.filter(
        (item, index) => index !== id
      );
      setState({
        ...state,
        educationList: updatedList,
      });
      // EXPERIENCE
    } else {
      let updatedList = state.experienceList.filter(
        (item, index) => index !== id
      );

      setState({
        ...state,
        experienceList: updatedList,
      });
    }
  };

  return (
    <div className="p-4">
      <header>
        <h1 className="title mb-4 display-4 text-center">Resume Builder App</h1>
      </header>
      <main className="mb-5">
        <Info
          handleChange={handleChange}
          firstName={state.firstName}
          lastName={state.lastName}
          email={state.email}
          phone={state.phone}
          linkedin={state.linkedin}
          submitForm={submitForm}
          infoCompleted={state.infoCompleted}
          handleClick={handleClick}
        />
        <Education
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleClick={handleClick}
          handleEditEducation={handleEditEducation}
          educationMode={state.educationMode}
          submitForm={submitForm}
          educationList={state.educationList}
          degree={state.degree}
          university={state.university}
          startDate={state.startDate}
          endDate={state.endDate}
        />
        <Experience
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleClick={handleClick}
          handleEditExperience={handleEditExperience}
          submitForm={submitForm}
          title={state.title}
          company={state.company}
          expStartDate={state.expStartDate}
          expEndDate={state.expEndDate}
          experienceMode={state.experienceMode}
          experienceList={state.experienceList}
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
};

export default App;
