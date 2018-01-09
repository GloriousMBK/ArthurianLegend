// Actions
const changeArthur = (arthur = '') => ({
  type: 'arthurChange',
  arthur
});


//Reducers
const initialState = {
  arthur: 'it is mystery'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'arthurChange':
      // window.alert('Change dat arthur to ' + action.arthur);
      return Object.assign({}, state, {arthur: action.arthur});
    default:
      return state;
  }
};

module.exports = {
  reducer,
  changeArthur
};
