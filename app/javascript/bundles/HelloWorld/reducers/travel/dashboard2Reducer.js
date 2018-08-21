const dashboard2 = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DASHBOARD2_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default dashboard2;
