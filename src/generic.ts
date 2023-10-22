

function identity<Type>(arg: Type): Type {
    return arg;
  }
identity(5)

//Array in generic
function SearchProduct<T>(products: T[]): T{
    const myIndex=8
    return products[myIndex]
}

//Array in generic arrow function 

const getProducts = <T>(products: T[]):T => {
    const myInde=8
    return products[myInde]
}

//generic classes

function anotherFunction<T,U extends number>(valone:T, valTwo:U ): object{
    return{
        valone,
        valTwo
    }
}
anotherFunction("5",5)