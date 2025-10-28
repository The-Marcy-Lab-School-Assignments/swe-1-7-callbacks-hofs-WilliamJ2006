const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};

const sortUsersBy = (users, sortingCallback) => {
  return [...users].sort(sortingCallback);
};

const logEachName = (names) => {
  return names.forEach(name => console.log(name, names.indexOf(name), names));
};

const logEachUserBio = (users) => {
  return users.forEach(object => console.log(object.bio));
};

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
