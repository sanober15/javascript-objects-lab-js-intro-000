var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var x = new Object();
  x.assign({}, object, key, value);
//   x[key] = value;
   return x;
}
