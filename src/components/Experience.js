import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const {
      handleChange,
      handleDelete,
      handleClick,
      handleEditExperience,
      submitForm,
      title,
      company,
      expStartDate,
      expEndDate,
      experienceMode,
      experienceList,
    } = this.props;
    return (
      <div
        style={{ boxShadow: '4px 2px 2px #428bca' }}
        className="card mt-4 p-4"
      >
        <h1 className="text-center mb-5 mt-3">Experience</h1>
        {!experienceMode ? (
          experienceList.map((experience, index) => {
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
                    <h5 className="text-from">
                      From: {experience.expStartDate}
                    </h5>
                    <h5 className="text-to">To: {experience.expEndDate}</h5>
                  </div>
                  <div className="mx-auto">
                    <button
                      onClick={(e) => handleDelete(index, e)}
                      className="btn btn-sm mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) =>
                        handleEditExperience(e, experience, index)
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
              onSubmit={(e) => submitForm(e)}
              name="experience-form"
              className="d-flex flex-column align-items-center"
            >
              <input
                onChange={(e) => handleChange(e)}
                className="form-control w-75 mb-5 border-top-0"
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                required
              ></input>
              <input
                onChange={(e) => handleChange(e)}
                className="form-control w-75 mb-5 border-top-0"
                type="text"
                name="company"
                placeholder="Company"
                value={company}
                required
              ></input>
              <div className="d-flex mb-5 w-75">
                <div className="w-75 mr-5">
                  <label htmlFor="start">From</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="form-control border-top-0"
                    id="start"
                    type="date"
                    value={expStartDate}
                    name="expStartDate"
                    required
                  ></input>
                </div>
                <div className="w-75">
                  <label htmlFor="end">to</label>
                  <input
                    onChange={(e) => handleChange(e)}
                    className="form-control border-top-0"
                    id="end"
                    value={expEndDate}
                    type="date"
                    name="expEndDate"
                    required
                  ></input>
                </div>
              </div>
              <div className="mb-3">
                <button
                  onClick={(e) => handleClick(e)}
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
          style={{ display: !experienceMode ? 'block' : 'none' }}
        >
          <button
            onClick={(e) => handleClick(e)}
            name="experienceMode"
            className="btn btn-lg w-25"
          >
            + ADD
          </button>
        </div>
      </div>
    );
  }
}

export default Experience;
