import React, { Component } from 'react';

class Education extends Component {
  render() {
    const {
      handleClickAdd,
      educationEditStatus,
      handleChange,
      submitForm,
      closeEducationForm,
      educationList,
      handleDelete,
      handleClick,
      showDegreeField,
      showUniField,
      showStartDateField,
      showEndDateField,
      handleEditEducationForm,
      degree,
      university,
      startDate,
      endDate,
      educationEditSingle,
    } = this.props;

    return (
      <div className="card mt-4 p-4">
        <h1 className="text-center mb-5 mt-3">Education</h1>
        {!educationEditStatus && !educationEditSingle ? (
          educationList.map((education, index) => {
            return (
              <div
                key={education.id}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <div className="card w-25 shadow p-1 mb-5 bg-body rounded text-center">
                  <div className="mx-auto mb-1 p-1">
                    <div className="d-flex m-2">
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
                        name="degree"
                        className="form-control"
                        value={education.degree}
                        onChange={(e) => handleChange(e)}
                      ></input>
                      <button
                        type="button"
                        className="btn btn-sm ml-2 float-right"
                        name="showDegreeField"
                        onClick={(e) => handleClick(e)}
                      >
                        {!showDegreeField ? 'Edit' : 'Save'}
                      </button>
                    </div>
                    <div className="d-flex">
                      <h5 style={{ display: !showUniField ? 'block' : 'none' }}>
                        {education.university}
                      </h5>
                      <input
                        style={{
                          display: showUniField ? 'block' : 'none',
                        }}
                        onChange={(e) => handleChange(e)}
                        type="text"
                        name="university"
                        className="form-control"
                        value={education.university}
                      ></input>
                      <button
                        type="button"
                        className="btn btn-sm ml-2 float-right"
                        name="showUniField"
                        onClick={(e) => handleClick(e)}
                      >
                        {!showUniField ? 'Edit' : 'Save'}
                      </button>
                    </div>
                    <div className="d-flex mt-2">
                      <h5
                        style={{
                          display: !showStartDateField ? 'block' : 'none',
                        }}
                      >
                        <b>From:</b> {education.startDate}
                      </h5>
                      <input
                        style={{
                          display: showStartDateField ? 'block' : 'none',
                        }}
                        onChange={() => handleChange()}
                        type="date"
                        name="startDate"
                        className="form-control"
                        value={education.startDate}
                      ></input>
                      <button
                        type="button"
                        className="btn btn-sm ml-2 float-right"
                        name="showStartDateField"
                        onClick={(e) => handleClick(e)}
                      >
                        {!showStartDateField ? 'Edit' : 'Save'}
                      </button>
                    </div>
                    <div className="d-flex mt-2">
                      <h5
                        style={{
                          display: !showEndDateField ? 'block' : 'none',
                        }}
                      >
                        <b>From:</b> {education.endDate}
                      </h5>
                      <input
                        style={{
                          display: showEndDateField ? 'block' : 'none',
                        }}
                        onChange={(e) => handleChange(e)}
                        type="date"
                        name="endDate"
                        className="form-control"
                        value={education.endDate}
                      ></input>
                      <button
                        type="button"
                        className="btn btn-sm ml-2 float-right"
                        name="showEndDateField"
                        onClick={(e) => handleClick(e)}
                      >
                        {!showEndDateField ? 'Edit' : 'Save'}
                      </button>
                    </div>
                  </div>
                  <div className="mx-auto">
                    <button
                      onClick={() => handleDelete(index)}
                      className="btn btn-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) => handleEditEducationForm(e, education)}
                      className="btn btn-sm"
                      name="educationEditSingle"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <form
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
        )}
        <div className="text-center">
          <button onClick={() => handleClickAdd()} className="btn btn-lg w-25">
            + ADD
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
