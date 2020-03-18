const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('HelloWorld')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.group('Finalizo'))



const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.group('Finalizo'))