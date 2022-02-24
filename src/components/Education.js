import React from 'react';

const Education = (props) => {
  return (
    <div style={{ boxShadow: '4px 2px 2px #428bca' }} className="card mt-4 p-4">
      <h1 className="text-center mb-5 mt-3">Education</h1>
      {!props.educationMode ? (
        props.educationList.map((education, index) => {
          return (
            // SHOW COMPLETED EDUCATION CARD
            <div
              key={education.id}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                style={{ boxShadow: '2px 2px 2px #428bca' }}
                className="card w-25  p-2 mb-5 bg-body rounded text-center"
              >
                <div className="mx-auto mb-1 p-1">
                  <h5>Degree: {education.degree}</h5>
                  <h5>University: {education.university}</h5>
                  <h5>
                    From:
                    {education.startDate}
                  </h5>
                  <h5>To: {education.endDate}</h5>
                </div>
                <div className="mx-auto">
                  <button
                    onClick={(e) => props.handleDelete(index, e)}
                    className="btn btn-sm mr-2"
                    name="delete-ed"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) =>
                      props.handleEditEducation(e, education, index)
                    }
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
        // SHOW FORM
        <div>
          <form
            name="ed-form"
            onSubmit={(e) => props.submitForm(e)}
            className="d-flex flex-column align-items-center"
          >
            <input
              onChange={(e) => props.handleChange(e)}
              className="form-control w-75 mb-5 border-top-0"
              id="input-degree"
              type="text"
              name="degree"
              value={props.degree}
              placeholder="Degree"
              required
            ></input>
            <input
              onChange={(e) => props.handleChange(e)}
              className="form-control w-75 mb-5 border-top-0"
              type="text"
              name="university"
              value={props.university}
              placeholder="University"
              required
            ></input>
            <div className="d-flex mb-5 w-75">
              <div className="w-75 mr-5">
                <label htmlFor="start-date">From</label>
                <input
                  onChange={(e) => props.handleChange(e)}
                  id="start-date"
                  name="startDate"
                  value={props.startDate}
                  className="form-control border-top-0"
                  type="date"
                  required
                ></input>
              </div>
              <div className="w-75">
                <label htmlFor="date-end">to</label>
                <input
                  onChange={(e) => props.handleChange(e)}
                  id="date-end"
                  name="endDate"
                  value={props.endDate}
                  className="form-control border-top-0"
                  type="date"
                  required
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <button
                onClick={(e) => props.handleClick(e)}
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
        style={{ display: !props.educationMode ? 'block' : 'none' }}
      >
        <button
          onClick={(e) => props.handleClick(e)}
          className="btn btn-lg w-25"
          name="educationMode"
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default Education;
