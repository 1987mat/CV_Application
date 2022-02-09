import React, { Component } from 'react';
import './App.css';
import Info from './components/Info';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: {
        editMode: false,
        text: '',
        editCompleted: false,
      },
      lastName: {
        editMode: false,
        text: '',
      },
    };
  }

  handleClick = (e) => {
    if (e.target.id === 'first') {
      this.setState({
        firstName: { editMode: !this.state.editMode },
      });
    }

    // if (e.target.id === 'last') {
    //   this.setState({
    //     lastName: { editMode : this.state.lastName.editMode},
    //   });
    // }
  };

  handleChange = (e) => {
    this.setState({
      firstName: {
        editMode: this.state.firstName.editMode,
        text: e.target.value,
        editCompleted: this.state.editCompleted,
      },
    });
  };

  handleConfirm = () => {
    this.setState({
      firstName: {
        editMode: !this.state.firstName.editMode,
        text: this.state.firstName.text,
        editCompleted: true,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>CV Builder</h1>
        </header>
        <Info
          handleClick={this.handleClick}
          handleConfirm={this.handleConfirm}
          handleChange={this.handleChange}
          editModeFirstName={this.state.firstName.editMode}
          editTextFirstName={this.state.firstName.text}
          editFirstCompleted={this.state.firstName.editCompleted}
          editModeLastName={this.state.lastName.editMode}
        />
        {/* <Education />
        <Experience />
        <Skills /> */}
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
