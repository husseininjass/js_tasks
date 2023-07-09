let operations = prompt("please enter operations (+ / * -)")
let Number1 = Number(prompt());
let Number2 = Number(prompt());
switch(operations){
    case "*":
        console.log(`${Number1}${operations}${Number2} = ${Number1 * Number2} `);
        document.write(`${Number1}${operations}${Number2} = ${Number1 * Number2} `);
    break;
    case "+":
        console.log(`${Number1}${operations}${Number2} = ${Number1 + Number2} `);
        document.write(`${Number1}${operations}${Number2} = ${Number1 + Number2} `);
    break;
    case "/":
        console.log(`${Number1}${operations}${Number2} = ${Number1 / Number2} `);
        document.write(`${Number1}${operations}${Number2} = ${Number1 / Number2} `);
    break;
    default:
        console.log(`${Number1}${operations}${Number2} = ${Number1 - Number2} `);
        document.write(`${Number1}${operations}${Number2} = ${Number1 - Number2} `);
}