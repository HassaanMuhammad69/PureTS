"use strict";
function identity(arg) {
    return arg;
}
identity(5);
//Array in generic
function SearchProduct(products) {
    const myIndex = 8;
    return products[myIndex];
}
//Array in generic arrow function 
const getProducts = (products) => {
    const myInde = 8;
    return products[myInde];
};
//generic classes
function anotherFunction(valone, valTwo) {
    return {
        valone,
        valTwo
    };
}
anotherFunction("5", 5);
