const myWorkerThread = require("worker_threads")
let count =0

for(let i = 0; i<5000000000000000000000000000000000; i++){
    count += i;
}
myWorkerThread.parentPort.postMessage(count);//sends the output of count to the main thread