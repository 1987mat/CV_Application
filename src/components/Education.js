import React, { Component } from 'react';

class Education extends Component {
  render() {
    const {
      educationMode,
      handleChange,
      submitForm,
      educationList,
      handleDelete,
      handleClick,
      editEducation,
      degree,
      university,
      startDate,
      endDate,
    } = this.props;

    return (
      <div className="card mt-4 p-4">
        <h1 className="text-center mb-5 mt-3">Education</h1>
        {!educationMode ? (
          educationList.map((education, index) => {
            return (
              // Show completed education cards
              <div
                key={education.id}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div
                  style={{ boxShadow: '2px 2px 2px gray' }}
                  className="card w-25  p-2 mb-5 bg-body rounded text-center"
                >
                  <div className="mx-auto mb-1 p-1">
                    <h5>Degree: {education.degree}</h5>
                    <h5>University: {education.university}</h5>
                    <h5>From: {education.startDate}</h5>
                    <h5>To: {education.endDate}</h5>
                  </div>
                  <div className="mx-auto">
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-sm mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) => editEducation(e, education, index)}
                      className="btn btn-secondary btn-sm"
                      name="educationMode"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          // Show Education Form
          <div>
            <form
              name="ed-form"
              onSubmit={(e) => submitForm(e)}
              className="d-flex flex-column align-items-center"
            >
              <input
                onChange={(e) => handleChange(e)}
                className="form-control w-75 mb-5 border-top-0"
                id="input-degree"
                type="text"
                name="degree"
                value={degree}
                placeholder="Degree"
                required
              ></input>
              <input
                onChange={(e) => handleChange(e)}
                className="form-control w-75 mb-5 border-top-0"
                type="text"
                name="university"
                value={university}
                placeholder="University"
                required
              ></input>
              <div className="d-flex mb-5 w-75">
                <div className="w-75 mr-5">
                  <label htmlFor="start-date">From</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    id="start-date"
                    name="startDate"
                    value={startDate}
                    className="form-control border-top-0"
                    type="date"
                    required
                  ></input>
                </div>
                <div className="w-75">
                  <label htmlFor="date-end">to</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    id="date-end"
                    name="endDate"
                    value={endDate}
                    className="form-control border-top-0"
                    type="date"
                    required
                  ></input>
                </div>
              </div>
              <div className="mb-3">
                <button
                  onClick={(e) => handleClick(e)}
                  className="btn btn-ligth btn-lg p-2 mr-2"
                  name="educationMode"
                >
                  Cancel
                </button>

                <button className="btn btn-primary btn-lg p-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
        <div
          className="text-center"
          style={{ display: !educationMode ? 'block' : 'none' }}
        >
          <button
            onClick={(e) => handleClick(e)}
            className="btn btn-lg w-25"
            name="educationMode"
          >
            + ADD
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
