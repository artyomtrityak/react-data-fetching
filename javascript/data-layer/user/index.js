export const fetchUserAndHisGists = (userName) => {
  let result = {};

  return fetch(`https://api.github.com/users/${userName}`)
    .then((response) => (response.json()))
    .then((user) => {
      result.user = user;
      return fetch(`https://api.github.com/users/${userName}/gists`);
    })
    .then((response) => (response.json()))
    .then((userGists) => {
      result.gists = userGists;
      return result;
    });
};
