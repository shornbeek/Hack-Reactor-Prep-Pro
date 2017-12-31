//referance Manish-Girl Github	

function convertObjectToList(obj) {
  // your code here
  let result = [], temp = [];
  for(var prop in obj) {
    temp = [];
    temp.push(prop);
    temp.push(obj[prop]);
    result.push(temp);
  }
  return result;
}