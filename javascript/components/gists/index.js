import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserAndHisGists } from '../../data-layer/user';
import Gist from './gist.component';


/**
 * Github gists container which fetches data on componentDidMount
 */
class GistsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchGists('artyomtrityak').then(this.props.dispatch);
  }

  render() {
    return (
      <div>
        <h1>User info</h1>
        User name: {this.props.user.name}

        {this.props.loading ? 'Loading...' : null}
        
        <h1>Gists list</h1>
        
        {this.props.gists.map((props) => <Gist key={props.comments_url} {...props} />)}
      </div>
    );
  }
}


/**
 * User and gists list data fetcher
 * @param  {String} userName
 * @return {Promise}
 */
function fetchGists(userName) {
  return fetchUserAndHisGists(userName)
    .then((result) => {
      return Object.assign({}, result, {
        type: 'LOAD_USER_AND_GISTS'
      });
    });
}


export default connect((state) => state.user)(GistsContainer);
