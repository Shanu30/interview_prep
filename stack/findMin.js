function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    let stack = [];
    while(t>0) {
        let data = input[start++].split(" ");
        let m = data[0];
        let num = Number(data[1]);
       
        t--;
        if(m === "PUSH") {
            stack.push(num);
        }
        else if(m === "POP") {
            if(stack.length===0) {
                console.log("EMPTY")
            }
            else{
                stack.pop();
            }
        }
        else if(m === "MIN") {
            if(stack.length === 0) {
                console.log("EMPTY");
            }
            else {
                min = 101;
                for(let i=0; i<stack.length; i++) {
                    if(stack[i] < min) {
                        min = stack[i]
                    }
                }
                console.log(min);
            }
        }
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
runProgram(`24
PUSH 100
PUSH 50
MIN
PUSH 45
MIN
POP
MIN
POP
MIN
PUSH 20
PUSH 19
PUSH 21
MIN
MIN
POP
MIN
POP
MIN
POP
MIN
POP
POP
POP
MIN`)




