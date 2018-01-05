var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var x = new Object();
  x = Object.assign({}, object);
  x[key] = value;
//   x[key] = value;
   return x;
}
