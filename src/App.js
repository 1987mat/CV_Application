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
      firstName: 'First Name',
      lastName: 'Last Name',
      showFirstName: false,
      showLastName: false,
      educationEditStatus: false,
    };
  }

  // User clicks edit icon
  handleClick = (e) => {
    // Edit Mode
    if (e.target.id === 'first') {
      this.setState({
        showFirstName: true,
      });
      // Editing completed
    } else if (e.target.id === 'first-name') {
      this.setState({
        firstName: this.state.firstName,
        showFirstName: false,
      });
    }
    //Edit Mode
    if (e.target.id === 'last') {
      this.setState({
        showLastName: true,
      });
      // Editing completed
    } else if (e.target.id === 'last-name') {
      this.setState({
        lastName: this.state.lastName,
        showLastName: false,
      });
    }
  };

  // Get input values from users
  handleChange = (e) => {
    if (e.target.id === 'first-name-input') {
      this.setState({
        firstName: e.target.value,
      });
    } else {
      this.setState({
        lastName: e.target.value,
      });
    }
  };

  // Add education button
  handleClickAdd = () => {
    this.setState({
      educationEditStatus: !this.state.educationEditStatus,
    });
  };

  handleChangeEducation = (e) => {
    const value = e.target.value;
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  // const updatedTitles = [
  //   ...this.state.education.titles,
  //   { id: 1, name: 'mat' },
  // ];

  // this.setState({
  //   education: {
  //     editStatus: false,
  //   },
  // });
  // };

  closeEducationForm = () => {
    this.setState({
      educationEditStatus: false,
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
            handleChange={this.handleChange}
            showFirstName={this.state.showFirstName}
            showLastName={this.state.showLastName}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          />
          <Education
            handleClickAdd={this.handleClickAdd}
            handleChangeEducation={this.handleChangeEducation}
            educationEditStatus={this.state.educationEditStatus}
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
