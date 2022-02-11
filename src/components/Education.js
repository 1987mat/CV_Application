import React, { Component } from 'react';

class Education extends Component {
  render() {
    const {
      handleClickAdd,
      educationEditStatus,
      handleChangeEducation,
      submitForm,
      closeEducationForm,
      educationList,
      handleDelete,
      handleClick,
      showDegreeField,
    } = this.props;

    return (
      <div className="card mt-4 p-4">
        <h1 className="text-center mb-5 mt-3">Education</h1>
        {educationList !== null && !educationEditStatus
          ? educationList.map((education, index) => {
              return (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="card w-25 shadow p-1 mb-5 bg-body rounded text-center">
                    <div className="mx-auto mb-1 p-1">
                      <div className="d-flex">
                        <h5
                          style={{
                            display: !showDegreeField ? 'block' : 'none',
                          }}
                        >
                          {education.degree}
                        </h5>
                        <input
                          style={{
                            display: showDegreeField ? 'block' : 'none',
                          }}
                          type="text"
                          className="form-control"
                          value={education.degree}
                        ></input>
                        <ion-icon
                          style={{
                            display: !showDegreeField ? 'block' : 'none',
                          }}
                          onClick={(e) => handleClick(e)}
                          name="create"
                          id="edit-degree"
                        ></ion-icon>
                        <ion-icon
                          style={{
                            display: showDegreeField ? 'block' : 'none',
                          }}
                          onClick={(e) => handleClick(e)}
                          id="confirm-degree"
                          name="checkmark"
                        ></ion-icon>
                      </div>
                      <h5>{education.university}</h5>
                      <h5>{education.endDate}</h5>
                    </div>
                    <div className="mx-auto">
                      <button
                        onClick={() => handleDelete(index)}
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ''}

        {educationEditStatus ? (
          <div>
            <form
              onSubmit={(e) => submitForm(e)}
              className="d-flex flex-column align-items-center"
            >
              <input
                onChange={(e) => handleChangeEducation(e)}
                className="form-control w-75 mb-5 border-top-0"
                id="input-degree"
                type="text"
                name="degree"
                placeholder="Degree"
                required
              ></input>
              <input
                onChange={(e) => handleChangeEducation(e)}
                className="form-control w-75 mb-5 border-top-0"
                type="text"
                name="university"
                placeholder="University"
                required
              ></input>
              <div className="d-flex mb-5 w-75">
                <div className="w-75 mr-5">
                  <label htmlFor="start-date">From</label>
                  <input
                    onChange={(e) => handleChangeEducation(e)}
                    id="start-date"
                    name="startDate"
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
                    name="endDate"
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
          <div className="text-center">
            <button
              onClick={() => handleClickAdd()}
              className="btn btn-lg w-25"
            >
              + ADD
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
