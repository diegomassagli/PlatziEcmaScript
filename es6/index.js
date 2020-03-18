const names = [
    { name: 'Oscar', age: 32 },
    { name: 'Yesica', age: 27 }
]


// antes
let listOfNames = names.map(function(item)
{
    console.log(item.name);
})

//ec6

let listOfNames2 = names.map(item=> console.log(item.name))

//otra

const square = num => num * num;

console.log (square(3));



//promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise ()
    .then(response => console.log(response))
    .then(response => console.log('todo ok'))
    .catch(error => console.log(error));


    // clases

    class calculator {
        //inicializo clase

        constructor () {
            this.valueA = 0;
            this.valueB = 0;
        }

        //metodo
        sum(valueA, valueB)  {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

        const calc = new calculator();
        console.log (calc.sum(2,2));
    

        //modulos
        import { hello} from './module';
        