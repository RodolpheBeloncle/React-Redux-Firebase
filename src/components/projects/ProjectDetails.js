import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project,date } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              {project.authorFirstName}
              {project.authorLastName}
            </div>
            <div>{date}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project ...</p>
      </div>
    );
  }

  // const releaseDate = new Date(
  //   project[id].createAt.seconds * 1000 +
  //     project[id].createAt.nanoseconds / 1000
  // )
  //   .toLocaleDateString(undefined, {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   })
  //   .toString();
};

const mapStateToProps = (state, { match }) => {
  const selectedProjectid = match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[selectedProjectid] : null;
  console.log(projects)
  const date =   new Date(
    projects[selectedProjectid].createAt.seconds * 1000 +
      projects[selectedProjectid].createAt.nanoseconds / 1000
  ).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .toString() ;

  console.log("date",date)
  return {
    project: project,
    date: date,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
