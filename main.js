#!/usr/bin/env node 
// this script is run in which environment so we write this line because our os will get know this script is run in which environment.
let inputArr = process.argv.slice(2); //command line se input lene ke liye... user input deta hai wo second se start hota hai eshiliye slice(2) aaisa likha hai.. se
// const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");
// console.log(inputArr);
// node main.js Hello How are you?
//node main.js tree "directoryPath"
//node main.js organise "directoryPath"
//node main.js help
let command = inputArr[0];

switch (command) {
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please Input right command🤞");
        break;
}

