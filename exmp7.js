p1 = Promise.resolve(02);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'bye');
    });
 
    Promise.all([p1, p2, p3]).then(function(values) {
        console.log(values);
    });