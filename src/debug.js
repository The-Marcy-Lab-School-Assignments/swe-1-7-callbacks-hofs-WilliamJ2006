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


const users = [
  { name: 'Alice', bio: 'Alice is a software engineer' },
  { name: 'Bob', bio: 'Bob is a teacher' },
  { name: 'Charlie', bio: 'Charlie is a student' },
  { name: 'Diana', bio: 'Diana is a doctor' },
];

const logEachUserBio = (users) => {
  users.forEach((object) => console.log(object.bio));
};

logEachUserBio(users)

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
