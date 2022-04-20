function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    while(t>0) {
        let a = input[start++];
        let n = a.length;
        let stack = [];
        let ans = 'balanced'
        t--;
        if(n%2===1) {
            ans = 'not balanced';
        }
        else{
            for(let i=0; i<n; i++) {
                if(a[i]==='[' || a[i]==='{' || a[i]==='(') {
                    stack.push(a[i]);
                    continue;
                }
                if(stack.length===0) {
                    ans = 'not balanced';
                }
                if(stack[stack.length-1]==='(' && (a[i]==='}' || a[i]===']')) {
                    ans = 'not balanced';
                    break;
                }
                else if(stack[stack.length-1]==='{' && (a[i]===')' || a[i]===']')) {
                    ans = 'not balanced';
                    break;
                }
                else if(stack[stack.length-1]==='[' && (a[i]==='}' || a[i]===')')) {
                    ans = 'not balanced';
                    break;
                }
                else{
                    stack.pop();
                }
            }
            if(stack.length!==0) {
                ans = 'not balanced';
            }
        }
        console.log(ans)
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
runProgram(`3
[{()}]
[]{}
[[[[`)




