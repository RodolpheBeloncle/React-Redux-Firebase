export const createProject = (project) => {
  return (dispatch,getState) => {
      // make async call to databased
      dispatch({type:'CREATE_PROJECT',project});


  }
};
