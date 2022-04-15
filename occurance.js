function lowerbound(a,n,k) {
    let l = 0;
    let r = n-1;
    while(l<=r) {
        let m = Math.floor(l + (r-l)/2);
        if(a[m]===k){
            left = m;
            r = m-1;
        }
        else if(a[m]<k) {
            l = m+1;
        }
        else {
            r = m-1;
        }
       
    }
    return left;
}
function upperbound(a,n,k) {
    let l = 0;
    let r = n-1;
    while(l<=r) {
        let m = Math.floor(l +(r-l)/2);
        if(a[m]===k){
            right = m;
            l = m+1;
        }
        else if(a[m]<k) {
            l = m+1;
        }
        else {
            r = m-1;
        }
        
    }
    return right;
}
function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let k = Number(input[2]);
    let a = input[1].split(" ").map(Number);
    if(a.length>0) {
        let res = (upperbound(a,n,k) - lowerbound(a,n,k))/2
        console.log(`${lowerbound(a,n,k)} ${upperbound(a,n,k)} ${res}`)
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
runProgram(`6 3
2 3 3 3 6 9`)