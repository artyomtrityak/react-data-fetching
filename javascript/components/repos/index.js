import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repo from './repo.component';


/**
 * Github repositories container which fetches data on componentDidMount
 */
class ReposContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchUsers('artyomtrityak').then(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <h1>Repos list</h1>
        
        {this.props.loading ? 'Loading...' : null}
        
        {this.props.repos.map((props) => <Repo key={props.full_name} {...props} />)}
      </div>
    );
  }
}


/**
 * Repositories list data fetcher
 * @param  {String} userName
 * @return {Promise}
 */
function fetchUsers(userName) {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then((response) => (response.json()))
    .then((reposList) => {
      return {
        type: 'LOAD_REPOS',
        repos: reposList
      };
    });
}


export default connect((state) => state.repos)(ReposContainer);
