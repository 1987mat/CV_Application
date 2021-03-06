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
      <div
        style={{ boxShadow: '4px 2px 2px #428bca' }}
        className="card rounded p-5"
      >
        <h1 className="text-center mb-5">Personal Information</h1>
        {infoCompleted ? (
          // SHOW COMPLETED INFO //
          <div className="d-flex flex-column justify-content-center p-4 text-center">
            <div>
              <h3 className=" p-2">{firstName}</h3>
              <h3 className=" p-2">{lastName}</h3>
              <div className="d-flex flex-row justify-content-center">
                <ion-icon name="mail"></ion-icon>
                <h5 className=" p-2">{email}</h5>
              </div>
              <div className="d-flex flex-row justify-content-center">
                <ion-icon name="call"></ion-icon>
                <h5 className=" p-2">{phone}</h5>
              </div>
              {linkedin !== '' ? (
                <div className="d-flex flex-row justify-content-center">
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <h5 className=" p-2">{linkedin}</h5>
                </div>
              ) : (
                ''
              )}
            </div>
            <div>
              <button
                onClick={(e) => handleClick(e)}
                className="btn btn-secondary btn-sm mt-4"
                name="infoCompleted"
              >
                Edit
              </button>
            </div>
          </div>
        ) : (
          // SHOW FORM
          <form name="info-form" onSubmit={(e) => submitForm(e)}>
            <div className="info-form d-flex justify-content-around mt-5">
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
              <button
                onClick={(e) => handleClick(e)}
                className="btn btn-secondary p-2 mr-2 btn-lg btn-light"
                name="infoEditMode"
              >
                Cancel
              </button>
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
