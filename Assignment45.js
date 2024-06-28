// Cars: Write a function that stores information about a car in a Object. The function should always
//  receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or an 
// optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
let createCar = function (manufacturer, model, ...extra) {
    let information = {
        Manufacturer: manufacturer,
        Model: model,
        extra: extra
    };
    return information;
};
let myCar = createCar("Toyata", "Mehran", "Year : 2024", "Color: white");
console.log(myCar);
let myCar1 = createCar("Toyata", "Mehran");
console.log(myCar1);
export {};
