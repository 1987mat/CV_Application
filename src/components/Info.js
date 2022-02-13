import React, { Component } from 'react';

class Info extends Component {
  render() {
    const {
      handleChange,
      handleClick,
      firstName,
      lastName,
      email,
      phone,
      linkedin,
      submitForm,
      infoCompleted,
    } = this.props;

    return (
      <div className="card rounded p-5">
        <h1 className="text-center mb-5">Personal Information</h1>
        {infoCompleted ? (
          // Show completed info //
          <div className="d-flex justify-content-center card p-4 text-center">
            <div>
              <h3 className="font-weight-bold p-2">{firstName}</h3>
              <h3 className="font-weight-bold p-2">{lastName}</h3>
              <div className="d-flex flex-row justify-content-center">
                <ion-icon name="mail"></ion-icon>
                <h5 className="font-weight-bold p-2">{email}</h5>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <ion-icon name="call"></ion-icon>
                <h5 className="font-weight-bold p-2">{phone}</h5>
              </div>
              {linkedin !== '' ? (
                <div className="d-flex flex-row justify-content-center">
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <h5 className="font-weight-bold p-2">{linkedin}</h5>
                </div>
              ) : (
                ''
              )}
            </div>
            <div>
              <button
                onClick={(e) => handleClick(e)}
                className="btn btn-primary btn-sm mt-4"
                name="infoCompleted"
              >
                <ion-icon name="create"></ion-icon>
              </button>
            </div>
          </div>
        ) : (
          // Show Form
          <form onSubmit={(e) => submitForm(e)}>
            <div className="d-flex justify-content-around mt-5">
              <div>
                <div className="d-flex input-group mb-3">
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="firstName"
                    value={firstName}
                    maxLength="15"
                    autoFocus
                    placeholder="First Name"
                    required
                  ></input>
                </div>
                <div className="d-flex input-group">
                  <input
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="lastName"
                    value={lastName}
                    maxLength="15"
                    autoFocus
                    placeholder="Last Name"
                    required
                  ></input>
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex input-group">
                  <label htmlFor="email">
                    <ion-icon name="mail"></ion-icon>
                  </label>
                  <input
                    className="form-control border-top-0"
                    onChange={(e) => handleChange(e)}
                    type="email"
                    name="email"
                    value={email}
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
                    onChange={(e) => handleChange(e)}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    maxLength="10"
                    required
                  ></input>
                </div>
                <div className="d-flex input-group">
                  <label htmlFor="linkedin">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </label>
                  <input
                    className="form-control border-top-0"
                    onChange={(e) => handleChange(e)}
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    value={linkedin}
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
        )}
      </div>
    );
  }
}

export default Info;
