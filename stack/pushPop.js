function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let stack = [];
    for(let i=1; i<=n; i++) {
        let d = input[i].split(" ").map(Number);
        if(d[0]===1) {
            stack.push(d[1]);
        }
        else if(d[0]===2 && stack.length>0) {
            stack.pop()
        }
        else if(d[0]===3) {
            if(stack.length>0) {
                console.log(stack[stack.length-1])
            }
            else{
                console.log("Empty!")
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
runProgram(`6
1 15
1 20
2
3
2
3`)