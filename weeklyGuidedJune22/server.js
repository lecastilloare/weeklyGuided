"use strict";

// The below is importing the My SQL module
const mysql2 = require('mysql2');

// THE BELOW IS THE CONFIGURATION FOR CREATING THE MY SQL CONNECTION

const myConnection = mysql2.createConnection({
    host: 'localhost', // host for the connection 
    port: 3306, // THIS IS THE DEFAULT PORT FOR MY SQL
    user: 'root', // INDICATES THE USERNAME OF THE MYSQL CONNECTION
    password: 'Cherub!4320' // PASSWORD FOR THE CONNECTION
})

// THIS IS EXECUTING THE CONNECTION

myConnection.connect(function (err) {

    if (err) {
        return console.error('error' + err.message)
    }
    console.log("Connected to the mysql server!")
})

