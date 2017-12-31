//referance Manish-Girl Github	
function listAllValues(obj) {
  // your code here
  var result = [];
  for(var prop in obj) {
    result.push(obj[prop]);
  }
  return result;
}