import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = ({ project }) => {
  const { id } = useParams();
  console.log('id', id);
  console.log(project[id]);
  console.log(new Date(project[id].createAt.seconds).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric' }).toString())
  const selectedProjectContent = project[id].content;
  const selectedProjectTitle =  project[id].title;
  const author = `${project[id].authorFirstName } ${project[id].authorLastName}`
  const releaseDate = new Date(project[id].createAt.seconds * 1000 + project[id].createAt.nanoseconds / 1000).toLocaleDateString(undefined,{year: 'numeric', month: 'long', day: 'numeric' }).toString()
  
  

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{selectedProjectTitle} - {id}</span>
          <p>
            {selectedProjectContent}
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>{author}</div>
          <div>{releaseDate}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const project = state.firestore.data.projects;

  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
