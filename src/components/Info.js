import React from 'react';

const Info = (props) => {
  return (
    <div
      style={{ boxShadow: '4px 2px 2px #428bca' }}
      className="card rounded p-5 info-section"
    >
      <h1 className="text-center mb-5">Personal Information</h1>
      {props.infoCompleted ? (
        // SHOW COMPLETED INFO //
        <div className="d-flex flex-column justify-content-center p-4 text-center">
          <div>
            <h3 className=" p-2">{props.firstName}</h3>
            <h3 className=" p-2">{props.lastName}</h3>
            <div className="d-flex flex-row justify-content-center">
              <ion-icon name="mail"></ion-icon>
              <h5 className=" p-2">{props.email}</h5>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <ion-icon name="call"></ion-icon>
              <h5 className=" p-2">{props.phone}</h5>
            </div>
            {props.linkedin !== '' ? (
              <div className="d-flex flex-row justify-content-center">
                <ion-icon name="logo-linkedin"></ion-icon>
                <h5 className=" p-2">{props.linkedin}</h5>
              </div>
            ) : null}
          </div>
          <div>
            <button
              onClick={(e) => props.handleClick(e)}
              className="btn btn-secondary btn-sm mt-4"
              name="infoCompleted"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        // SHOW FORM
        <form name="info-form" onSubmit={(e) => props.submitForm(e)}>
          <div className="info-form d-flex justify-content-around mt-5">
            <div>
              <div className="d-flex input-group">
                <input
                  className="form-control"
                  onChange={(e) => props.handleChange(e)}
                  type="text"
                  name="firstName"
                  value={props.firstName}
                  maxLength="15"
                  autoFocus
                  placeholder="First Name"
                  required
                ></input>
              </div>
              <div className="d-flex input-group">
                <input
                  className="form-control"
                  onChange={(e) => props.handleChange(e)}
                  type="text"
                  name="lastName"
                  value={props.lastName}
                  maxLength="15"
                  autoFocus
                  placeholder="Last Name"
                  required
                ></input>
              </div>
            </div>
            <div className="d-flex flex-column second-column">
              <div className="d-flex input-group">
                <label htmlFor="email">
                  <ion-icon name="mail"></ion-icon>
                </label>
                <input
                  className="form-control"
                  onChange={(e) => props.handleChange(e)}
                  type="email"
                  name="email"
                  value={props.email}
                  id="email"
                  required
                ></input>
              </div>
              <div className="d-flex input-group">
                <label htmlFor="phone">
                  <ion-icon name="call"></ion-icon>
                </label>
                <input
                  className="form-control"
                  onChange={(e) => props.handleChange(e)}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={props.phone}
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
                  className="form-control"
                  onChange={(e) => props.handleChange(e)}
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={props.linkedin}
                ></input>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center button-save">
            <button
              onClick={(e) => props.handleClick(e)}
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
};

export default Info;
