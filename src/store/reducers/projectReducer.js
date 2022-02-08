const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'bla blabla' },
    { id: '2', title: 'title 2', content: 'bla blabla' },
    { id: '3', title: 'title 3', content: 'bla blabla' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
