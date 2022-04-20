function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    while(t>0) {
        let n = Number(input[start++]);
        let a = input[start++].split(" ").map(Number);
        let ans = [];
        let stack = [];
        let index = [];
        t--;
        for (let i=0; i<n; i++) {
            while(stack[stack.length-1]<a[i]) {
                stack.pop();
                index.pop();
            }
            if(stack.length === 0) {
                ans.push(i+1)
            }
            else{
                ans.push(i-index[index.length-1])
            }
            stack.push(a[i]);
            index.push(i);
        }
        console.log(ans.join(" "))
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
runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`)