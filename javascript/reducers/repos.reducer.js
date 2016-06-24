const defaultReposState = {
  repos: [],
  loading: true
};


export default function reposReducer(state=defaultReposState, action) {
  switch (action.type) {

    case 'LOAD_USERS':
      return Object.assign({}, state, {repos: action.repos, loading: false});

    default:
      return state;
  }
}
