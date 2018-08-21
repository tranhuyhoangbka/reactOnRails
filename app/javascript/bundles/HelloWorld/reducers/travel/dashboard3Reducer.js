const dashboard3 = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DASHBOARD3_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default dashboard3;
