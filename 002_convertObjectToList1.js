

function getAllKeys(obj) {
  // your code here
  var objectKeys = [];
  for(let prop in obj) {
    objectKeys.push(prop);
  }
  return objectKeys;
}

