const defaultUserState = {
  gists: [],
  user: {},
  loading: true
};


export default function userReducer(state=defaultUserState, action) {
  switch (action.type) {

    case 'LOAD_USER_AND_GISTS':
      return Object.assign({}, state, {
        gists: action.gists,
        user: action.user,
        loading: false
      });

    default:
      return state;
  }
}
