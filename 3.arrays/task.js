function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
  return arr1.every((element, index) => element === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
   let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, value, index, users) => {
    acc+=value;
    if (index === users.length - 1) {
        return acc / users.length;
    }
    return acc;
   }, 0)
   return result;
}
