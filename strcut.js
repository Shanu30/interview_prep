function runProgram(input){
    let a = input.split("");
    let n = a.length;
    
    l=0; r=n-1
    let m = l +(r-l)/2;
    first = a.slice(0,m+1).reverse();
    last = a.slice(m+1,n).reverse();
    let ans = first.concat(last);
    console.log(ans.join(""));


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
runProgram(`abcxyz`)