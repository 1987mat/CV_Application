import React, { Component } from 'react';

class Info extends Component {
  render() {
    const {
      handleClick,
      handleConfirm,
      handleChange,
      defaultTextFirst,
      defaultTextLast,
      editModeFirstName,
      editTextFirstName,
      editFirstCompleted,
      editModeLastName,
      editTextLastName,
      editLastCompleted,
    } = this.props;

    return (
      <div className="card p-4">
        <h1 className="text-center mb-5">Personal Information</h1>
        <form>
          <div className="d-flex justify-content-around">
            <div>
              <div className="mb-3">
                {!editModeFirstName ? (
                  <h2>
                    {editFirstCompleted ? editTextFirstName : defaultTextFirst}
                    <ion-icon
                      id="first"
                      onClick={(e) => handleClick(e)}
                      name="create"
                    ></ion-icon>
                  </h2>
                ) : (
                  <div className="d-flex">
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={defaultTextFirst}
                      maxLength="15"
                      autoFocus
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
                {!editModeLastName ? (
                  <h2>
                    {editLastCompleted ? editTextLastName : defaultTextLast}
                    <ion-icon
                      id="last"
                      onClick={(e) => handleClick(e)}
                      name="create"
                    ></ion-icon>
                  </h2>
                ) : (
                  <div className="d-flex">
                    <input
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      type="text"
                      name="last-name"
                      id="last-name"
                      value={defaultTextLast}
                      maxLength="15"
                      autoFocus
                    ></input>
                    <span>
                      <ion-icon
                        onClick={(e) => handleConfirm(e)}
                        name="checkmark"
                        id="icon-last"
                      ></ion-icon>
                    </span>
                  </div>
                )}
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
