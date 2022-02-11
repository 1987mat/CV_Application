import React, { Component } from 'react';

class Info extends Component {
  render() {
    const {
      handleClick,
      handleChange,
      firstName,
      lastName,
      showFirstName,
      showLastName,
    } = this.props;

    return (
      <div className="card p-4">
        <h1 className="text-center mb-5">Personal Information</h1>
        <form>
          <div className="d-flex justify-content-around">
            <div>
              <div className="d-flex mb-3">
                <h2 style={{ display: !showFirstName ? 'block' : 'none' }}>
                  {firstName}
                </h2>
                <div style={{ display: showFirstName ? 'block' : 'none' }}>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="first"
                    id="first-name-input"
                    value={firstName}
                    maxLength="15"
                    autoFocus
                  ></input>
                </div>
                <span>
                  <ion-icon
                    style={{ display: !showFirstName ? 'block' : 'none' }}
                    onClick={(e) => handleClick(e)}
                    id="first"
                    name="create"
                  ></ion-icon>
                  <ion-icon
                    style={{ display: showFirstName ? 'block' : 'none' }}
                    onClick={(e) => handleClick(e)}
                    name="checkmark"
                    id="first-name"
                  ></ion-icon>
                </span>
              </div>
              <div className="d-flex mb-3">
                <h2 style={{ display: !showLastName ? 'block' : 'none' }}>
                  {lastName}
                </h2>
                <div style={{ display: showLastName ? 'block' : 'none' }}>
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="first"
                    id="last-name-input"
                    value={lastName}
                    maxLength="15"
                    autoFocus
                  ></input>
                </div>
                <span>
                  <ion-icon
                    style={{ display: !showLastName ? 'block' : 'none' }}
                    onClick={(e) => handleClick(e)}
                    id="last"
                    name="create"
                  ></ion-icon>
                  <ion-icon
                    style={{ display: showLastName ? 'block' : 'none' }}
                    onClick={(e) => handleClick(e)}
                    name="checkmark"
                    id="last-name"
                  ></ion-icon>
                </span>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex input-group">
                <label htmlFor="email">
                  <ion-icon name="mail"></ion-icon>
                </label>
                <input
                  className="form-control border-top-0"
                  type="email"
                  name="email"
                  id="email"
                  required
                ></input>
              </div>
              <div className="d-flex input-group">
                <label htmlFor="phone">
                  <ion-icon name="call"></ion-icon>
                </label>
                <input
                  className="form-control border-top-0"
                  type="tel"
                  id="phone"
                  required
                ></input>
              </div>
              <div className="d-flex input-group">
                <label htmlFor="linkedin">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </label>
                <input
                  className="form-control border-top-0"
                  type="text"
                  id="linkedin"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center button-save">
            <button className="btn btn-primary p-2 btn-lg" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Info;
