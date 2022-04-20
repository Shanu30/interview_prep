function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let a = input[1].split(" ").map(Number);
    let stack = [];
    let ans = [];
    for(let i=0; i<n; i++){
        while(stack.length>0 && stack[stack.length -1] >= a[i]){
            stack.pop()
        }
        if(stack.length === 0){
            ans[i] = -1;
        }else{
            ans[i] = stack[stack.length -1];
        }
        stack.push(a[i])
     }
     console.log(ans.join(" "));
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
runProgram(`8
39 27 11 4 24 32 32 1`)
