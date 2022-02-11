import React, { Component } from 'react';

class Education extends Component {
  render() {
    const {
      handleClickAdd,
      educationEditStatus,
      handleChangeEducation,
      submitForm,
      closeEducationForm,
    } = this.props;

    return (
      <div className="card mt-4 p-4">
        <h1 className="text-center mb-5 mt-3">Education</h1>
        <div className="card"></div>
        <div className="text-center">
          {educationEditStatus ? (
            <div>
              <form
                onSubmit={(e) => submitForm(e)}
                className="d-flex flex-column align-items-center"
              >
                <input
                  onChange={(e) => handleChangeEducation(e)}
                  className="form-control w-75 mb-5 border-top-0"
                  type="text"
                  id="degree"
                  placeholder="Degree"
                  required
                ></input>
                <input
                  onChange={(e) => handleChangeEducation(e)}
                  className="form-control w-75 mb-5 border-top-0"
                  type="text"
                  id="university"
                  placeholder="University"
                  required
                ></input>
                <div className="d-flex mb-5 w-75">
                  <div className="w-75 mr-5">
                    <label htmlFor="date-start">From</label>
                    <input
                      onChange={(e) => handleChangeEducation(e)}
                      id="date-start"
                      className="form-control border-top-0"
                      type="date"
                      required
                    ></input>
                  </div>
                  <div className="w-75">
                    <label htmlFor="date-end">to</label>
                    <input
                      onChange={(e) => handleChangeEducation(e)}
                      id="date-end"
                      className="form-control border-top-0"
                      type="date"
                      required
                    ></input>
                  </div>
                </div>
                <div className="text-center m-3">
                  <button
                    onClick={() => closeEducationForm()}
                    className="btn btn-ligth btn-lg p-2"
                    type="submit"
                  >
                    Cancel
                  </button>
                  <button className="btn btn-primary btn-lg p-2" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button
              onClick={() => handleClickAdd()}
              className="btn btn-lg w-25"
            >
              + ADD
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Education;
