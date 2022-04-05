var list = [
    {
      id: "205",
      name: "Bob",
      title: "Dr."
    },
    {
      id: "592",
      name: "Clyde",
      age: 32
    }
  ];
  
  function groupBy(array, callback) {
    return array.reduce(function(store, item) {
      var key = callback(item);
      var value = store[key] || [];
      store[key] = value.concat([item]);
      return store;
    }, {})
  }
  
  console.log('step 1: ', groupBy(list, function(i) { return i.id; }));
  console.log('step 2: ', groupBy(list, function(i) { return i.name.length; }));