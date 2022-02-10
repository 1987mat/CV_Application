import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';
import Education from './components/Education';
// import Experience from './components/Experience';
// import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: {
        editMode: false,
        text: 'First Name',
        editCompleted: false,
      },
      lastName: {
        editMode: false,
        text: 'Last Name',
        editCompleted: false,
      },
      education: {
        titles: [],
        editStatus: false,
        title: { degree: '', university: '', startDate: '', endDate: '' },
      },
    };
  }

  handleClick = (e) => {
    if (e.target.id === 'first') {
      this.setState({
        firstName: {
          editMode: !this.state.editMode,
          text: this.state.firstName.text,
        },
      });
    } else if (e.target.id === 'last') {
      this.setState({
        lastName: {
          editMode: !this.state.lastName.editMode,
          text: this.state.lastName.text,
        },
      });
    }
  };

  handleChange = (e) => {
    if (e.target.id === 'first-name') {
      this.setState({
        firstName: {
          editMode: this.state.firstName.editMode,
          text: e.target.value,
          editCompleted: this.state.editCompleted,
        },
      });
    }

    if (e.target.id === 'last-name') {
      this.setState({
        lastName: {
          editMode: this.state.lastName.editMode,
          text: e.target.value,
          editCompleted: this.state.editCompleted,
        },
      });
    }
  };

  handleConfirm = (e) => {
    if (this.state.firstName.editMode) {
      if (e.target.id !== 'first-name') {
        this.setState({
          firstName: {
            editMode: !this.state.firstName.editMode,
            text: this.state.firstName.text,
            editCompleted: true,
          },
        });
      }
    } else if (this.state.lastName.editMode) {
      if (e.target.id !== 'last-name') {
        this.setState({
          lastName: {
            editMode: !this.state.lastName.editMode,
            text: this.state.lastName.text,
            editCompleted: true,
          },
        });
      }
    }
  };

  handleClickAdd = () => {
    this.setState({
      education: {
        editStatus: !this.state.education.editStatus,
      },
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    // Get values
    // let degree = document.getElementById('degree');
    // let university = document.getElementById('university');
    // let startDate = document.getElementById('date-start');
    // let endDate = document.getElementById('date-end');

    // const title = {
    //   degree: degree.value,
    //   university: university.value,
    //   startDate: startDate.value,
    //   endDate: endDate.value,
    // };

    // const updatedTitles = [
    //   ...this.state.education.titles,
    //   { id: 1, name: 'mat' },
    // ];

    this.setState({
      education: {
        editStatus: false,
      },
    });
  };

  closeEducationForm = () => {
    this.setState({
      education: {
        editStatus: false,
      },
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
            handleClick={this.handleClick}
            handleConfirm={this.handleConfirm}
            handleChange={this.handleChange}
            defaultTextFirst={this.state.firstName.text}
            defaultTextLast={this.state.lastName.text}
            editModeFirstName={this.state.firstName.editMode}
            editTextFirstName={this.state.firstName.text}
            editFirstCompleted={this.state.firstName.editCompleted}
            editModeLastName={this.state.lastName.editMode}
            editTextLastName={this.state.lastName.text}
            editLastCompleted={this.state.lastName.editCompleted}
          />
          <Education
            handleClickAdd={this.handleClickAdd}
            handleChange={this.handleChange}
            editStatus={this.state.education.editStatus}
            degree={this.state.education.degree}
            university={this.state.education.university}
            startDate={this.state.education.startDate}
            endDate={this.state.education.endDate}
            closeEducationForm={this.closeEducationForm}
            submitForm={this.submitForm}
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
