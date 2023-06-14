import React from 'react';

const Experience = (props) => {
  return (
    <div style={{ boxShadow: '4px 2px 2px #428bca' }} className="card mt-4 p-4">
      <h1 className="text-center mb-5 mt-3">Experience</h1>
      {!props.experienceMode ? (
        props.experienceList.map((experience, index) => {
          return (
            // SHOW COMPLETED EXPERIENCE CARD
            <div
              key={experience.expId}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div
                style={{ boxShadow: '2px 2px 2px #428bca' }}
                className="card w-25  p-2 mb-5 bg-body rounded text-center"
              >
                <div className="mx-auto mb-1 p-1">
                  <h5>Title: {experience.title}</h5>
                  <h5>Company: {experience.company}</h5>
                  <h5 className="text-from">From: {experience.expStartDate}</h5>
                  <h5 className="text-to">To: {experience.expEndDate}</h5>
                </div>
                <div className="mx-auto">
                  <button
                    onClick={(e) => props.handleDelete(index, e)}
                    className="btn btn-sm mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(e) =>
                      props.handleEditExperience(e, experience, index)
                    }
                    className="btn btn-secondary btn-sm"
                    name="experienceMode"
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
            onSubmit={(e) => props.submitForm(e)}
            name="experience-form"
            className="d-flex flex-column align-items-center"
          >
            <input
              onChange={(e) => props.handleChange(e)}
              className="form-control w-75 mb-5"
              type="text"
              name="title"
              placeholder="Title"
              value={props.title}
              required
            ></input>
            <input
              onChange={(e) => props.handleChange(e)}
              className="form-control w-75 mb-5"
              type="text"
              name="company"
              placeholder="Company"
              value={props.company}
              required
            ></input>
            <div className="d-flex mb-5 w-75 date-wrapper">
              <div className="w-75 mr-5">
                <label htmlFor="start">From</label>
                <input
                  onChange={(e) => props.handleChange(e)}
                  className="form-control"
                  id="start"
                  type="date"
                  value={props.expStartDate}
                  name="expStartDate"
                  required
                ></input>
              </div>
              <div className="w-75">
                <label htmlFor="end">to</label>
                <input
                  onChange={(e) => props.handleChange(e)}
                  className="form-control"
                  id="end"
                  value={props.expEndDate}
                  type="date"
                  name="expEndDate"
                  required
                ></input>
              </div>
            </div>
            <div className="mb-3">
              <button
                onClick={(e) => props.handleClick(e)}
                className="btn btn-ligth btn-lg p-2 mr-2"
                name="experienceMode"
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
        style={{ display: !props.experienceMode ? 'block' : 'none' }}
      >
        <button
          onClick={(e) => props.handleClick(e)}
          name="experienceMode"
          className="btn btn-lg w-25"
        >
          + ADD
        </button>
      </div>
    </div>
  );
};

export default Experience;
