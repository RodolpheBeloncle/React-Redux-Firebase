const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'bla blabla' },
    { id: '2', title: 'title 2', content: 'bla blabla' },
    { id: '3', title: 'title 3', content: 'bla blabla' },
  ],
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
