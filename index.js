var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var x = new Object();
  Object.assign({}, object, key, value);
//   x[key] = value;
   return x;
}
