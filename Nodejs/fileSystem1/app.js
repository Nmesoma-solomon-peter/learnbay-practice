// // import libraries
// const { error } = require("console");
// const fs = require("fs");
// const readLine = require("readline");

// const pipe = readLine.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// })

// pipe.question("Enter new student details: ",(info)=>{
//     fs.appendFile("index.txt",info,(error)=>{
//         if(!error){
//             console.log("successfully written");
//         }
//     })
//     pipe.close();
// })











const { log } = require("console");
const fs = require("fs");
const readLine = require("readline");


const pipe = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

pipe.question("Select the option you want to perform:'a' for Writng || 'b' to read||'c' to update || 'd' to delete", (info) => {
    if (info.toLowerCase() == "a") {
        pipe.question("Enter data : ", (info) => {
            fs.readFile("index.json", "utf8", (error, result) => {
                const readFileJson = JSON.parse(result);
                readFileJson.push(JSON.parse(info))
                fs.writeFile("index.json", JSON.stringify(readFileJson), (error) => {
                    if (!error) {
                        console.log("successfully added");
                    }
                })
            })


            pipe.close();
        })
    } else if (info.toLowerCase() == "b") {
        // reading a specific data
        pipe.question("Enter the name of the student you want to read: ", (info) => {
            let foundData = false;
            fs.readFile("index.json", 'utf8', (error, result) => {
                const readData = JSON.parse(result);
                if (!error) {
                    readData.map((i) => {
                        if (i.name == info) {
                            foundData = true
                            console.log("Required student is : ", i);
                        }
                    });
                    if (!foundData) {
                        console.log("Requested Data not found");

                    }
                }

            })
            pipe.close();
        })
    }else if(info.toLowerCase() == 'c'){

    }else if(info.toLowerCase() == 'd'){
        pipe.question("Enter which student you want to delete", (record)=>{
            fs.readFile("index.json",'utf8',(error,info)=>{
                const outputJsObject = JSON.parse(info);
                const outputData = outputJsObject.filter((i)=>{
                    return i.name != record;
                })
                console.log(outputData);  
                fs.writeFile("index.json",JSON.stringify(outputData),(error)=>{
                    if(!error){
                        console.log("Successfully deleted!");
                    }
                })  
            })
            pipe.close()
        })
    }
});


