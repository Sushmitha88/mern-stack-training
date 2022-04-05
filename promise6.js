const secondPromise = new Promise(function (resolve, reject) {
    resolve('Second!');
  });
  const firstPromise = new Promise(function (resolve, reject) {
    resolve(secondPromise);
  })
  
  firstPromise.then((value) => console.log('Challenge 6', value));