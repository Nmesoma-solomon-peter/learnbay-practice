const mysql = require("mysql2");

const connectionDetails = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Mypass",
    database:"fooddb",
});

connectionDetails.connect((error)=>{
    if(!error){
        console.log("connected successfully");
    }else{
        console.log("not connected",error);

    }
});

module.exports = connectionDetails;