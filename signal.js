function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    while(t>0) {
        
    }
    let a = input[1].trim().split(" ").map(Number);
    let ans = -1
    

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
runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`)