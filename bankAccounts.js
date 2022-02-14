let savingsAccount = {
    "id": 1234,
    "name": "Bui Krisztián",
    "balance": 10000000,
    "transactions": [
        {
            "amount": 25000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022.01.06."
        },
        {
            "amount": 75000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022.01.07."
        },
        {
            "amount": 250000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2022.01.08."
        }
    ]
}

let everydayAccount = {
    "id": 0000,
    "name": "Bui Krisztián",
    "balance": 153654,
    "transactions": [
        {
            "amount": 5000,
            "isSuccessful": true,
            "type": "withdraw",
            "date": "2022.01.05."
        },
        {
            "amount": 15000,
            "isSuccessful": true,
            "type": "withdraw",
            "date": "2021.11.05."
        },
        {
            "amount": 52350,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2021.12.05."
        }
    ]
}

let tradingAccount = {
    "id": 5678,
    "name": "Bui Krisztián",
    "balance": 2500000,
    "transactions": [
        {
            "amount": 100000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2021.06.25."
        },
        {
            "amount": 300000,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2021.07.25."
        },
        {
            "amount": 999999,
            "isSuccessful": true,
            "type": "deposit",
            "date": "2021.08.25."
        }
    ]
}

function getDateOfHighestDeposit(account) {
    let dateOfHighest = null;
    let amountOfHighest = 0;

    for (const transaction of account.transactions) {
        if (transaction.type === "deposit" && transaction.isSuccessful === true) {
            let isRelevant = true;
            if (isRelevant === true && transaction.amount > amountOfHighest) {
                amountOfHighest = transaction.amount;
                dateOfHighest = transaction.date;
            }
        }
    }

    return dateOfHighest;
}

let first = getDateOfHighestDeposit(savingsAccount);
let second = getDateOfHighestDeposit(everydayAccount);
let third = getDateOfHighestDeposit(tradingAccount);

console.log(first + " " + second + " " + third + " ");
