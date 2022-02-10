import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
  const { project, date,auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
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
};

const mapStateToProps = (state, { match }) => {
  const selectedProjectid = match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[selectedProjectid] : null;
  const date = new Date(
    projects[selectedProjectid].createAt.seconds * 1000 +
      projects[selectedProjectid].createAt.nanoseconds / 1000
  )
    .toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .toString();

  return {
    project: project,
    date: date,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
