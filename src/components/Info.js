import React, { Component } from 'react';

class Info extends Component {
  render() {
    const {
      handleClick,
      handleConfirm,
      handleChange,
      editModeFirstName,
      editTextFirstName,
      editFirstCompleted,
      editModeLastName,
    } = this.props;

    return (
      <div>
        <h1>Personal Information</h1>
        <form>
          <div>
            {!editModeFirstName ? (
              <div>
                <h2 id="first" onClick={(e) => handleClick(e)}>
                  {editFirstCompleted ? editTextFirstName : 'First Name'}
                </h2>
              </div>
            ) : (
              <div>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  maxLength="10"
                ></input>
                <span>
                  <ion-icon
                    onClick={(e) => handleConfirm(e)}
                    name="checkmark"
                  ></ion-icon>
                </span>
              </div>
            )}
            {!editModeLastName ? (
              <h2 id="last" onClick={(e) => handleClick(e)}>
                Last Name
              </h2>
            ) : (
              <div>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  maxLength="10"
                ></input>
                <span>
                  <ion-icon
                    onClick={(e) => handleConfirm(e)}
                    name="checkmark"
                  ></ion-icon>
                </span>
              </div>
            )}
          </div>
          <div>
            <h4>Email</h4>
            <input type="email" name="email" id="email"></input>
            <h4>Phone</h4>
            <input type="tel" id="phone"></input>
            <h4>Linkedin</h4>
            <input type="text" id="linkedin"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Info;
