const delay = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve('Hello');
        }, 1000)
    });
}

const sayHello = (value) => {
    console.log('Hello');
}

delay().then(sayHello);