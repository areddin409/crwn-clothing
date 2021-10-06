import DIRECTORY_DATA from '../../redux/directory/directory.data';

const INITIAL_STATE = { sections: DIRECTORY_DATA };

const directoryReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
