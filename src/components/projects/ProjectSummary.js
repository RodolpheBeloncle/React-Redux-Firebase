import React from 'react';

const ProjectSummary = ({ project }) => {
  console.log(project)
  const date = new Date(
    project.createAt.seconds * 1000 +
    project.createAt.nanoseconds / 1000
  )
    .toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .toString();
    console.log(date)
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">{date}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
