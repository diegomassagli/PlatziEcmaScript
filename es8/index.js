const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries (data);
console.log (entries);



// async y await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000)
         : reject(new Error('Test Error'))
    } )
}


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log (hello);
}

helloAsync();