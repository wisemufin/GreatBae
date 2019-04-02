var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list"
        name: "initialAction",
        options: ["Bid on an item", "Place an item up to bid"],
        message: "What would you like to do?"
    },

    {
        type: "input", 
        name: "itemForBid",
        message: "What are you putting up for auction?"
    },

    {
        type: "input", 
        name: "initialPrice",
        message: "How much are you listing this item for?"
    },
    
    {
        type: "list"
        name: "itemToBidOn",
        //List out items stored from other inquirer.
        options: ["Filler", "Filler 2"],
        message: "What item would you like to bid on?"
    }

    {
        type: "input"
        name: "bidAmount"
        message: "How much do you want to bid"
    }
])