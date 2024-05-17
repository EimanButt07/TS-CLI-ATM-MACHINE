import inquirer from "inquirer"

let myBalance = 30000; // Dollars
let myPin = 9987;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pinCode",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct pincode!!!");

    let operationsAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select an option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);

    if (operationsAns.operations === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);

        if (amountAns.amount > myBalance) {
            console.log(`Insufficient balance. You cannot withdraw more than your current balance.`);
        } else {
            myBalance -= amountAns.amount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    } else if (operationsAns.operations === "Check Balance") {
        console.log(`Your balance is: ${myBalance}`);
    } else if (operationsAns.operations === "Fast Cash") {
        let fastCashAmounts = [500, 1000, 2000, 5000];
        let fastCashChoice = await inquirer.prompt([
            {
                name: "amount",
                message: "Select fast cash amount",
                type: "list",
                choices: fastCashAmounts
            }
        ]);

        let selectedAmount = fastCashChoice.amount;
        
        if (selectedAmount > myBalance) {
            console.log(`Insufficient balance. You cannot withdraw more than your current balance.`);
        } else {
            myBalance -= selectedAmount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
} else {
    console.log("Incorrect Pincode!!!");
}
