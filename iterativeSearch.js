function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let a = input[1].trim().split(" ").map(Number);
    let k = Number(input[2]);
    let ans = -1
    let l=0; 
    let r=n-1;
    while(l<=r){
        let m = Math.floor(l +(r-l)/2);
        if(a[m] === k) {
            ans = 1;
            break;
        }
        else if(a[m]<k) {
            l = m+1;
        }
        else{
            r = m-1;
        }
    }
    console.log(ans);

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
runProgram(`5
1 2 4 5 6
6`)