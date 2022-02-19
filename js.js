spy = {
  id: 007,
  name: "James Bond",
  age: 31
  };

var superSecret = function(spy){
  Object.keys(spy).forEach(function(key){ spy[key] = "redacted" });
console.log (spy);
}
