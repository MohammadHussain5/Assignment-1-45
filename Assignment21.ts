// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// creating type

type item = {
    name:string,
    Price:number
}

let obj:item={
    name:"Typescript",
    Price: 100
}

console.log(`The book name is ${obj.name} and its price is ${obj.Price} r.s.`);

