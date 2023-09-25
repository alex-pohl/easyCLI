import inquirer from "inquirer";


const answers: {
    numberOne: 'number',
    numberTwo: 'number',
    operators: 'string'
} = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Enter your first number: ",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number: ",
    },
    {
        type: "list",
        name: "operators",
        choices: ['+','-','*','/'],
        message: "Select operator: ",
    }

])
console.log(answers);
let {numberOne, numberTwo, operators} = answers;
if (numberOne && numberTwo && operators){
    let result: number = 0;
    if (operators === '+' ){
        result = numberOne + numberTwo;
    }else if (operators === '-'){
        result = numberOne - numberTwo;
    }else if(operators === '*'){
        result = numberOne * numberTwo;
    }else if(operators === '/'){
        result = numberOne / numberTwo;}
    console.log(`Your result is ${result}`)
    }else{
    console.log('Enter valid input.')
}