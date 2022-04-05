var s = "abc";
console.log(
  s.split('').map(function(v) {
    return v + v;
  }).join('')
)