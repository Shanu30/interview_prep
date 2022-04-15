function search(a,l,r,k) {
    let ans = -1
    let m = Math.floor(l +(r-l)/2);
    while(l<r){
        if(a[m] === k) {
            ans = 1;
            break;
        }
        else if(a[m]<k) {
            search(a,m+1,r,k);
        }
        else{
            search(a,l,m-1,k)
        }
    }
    return ans;
}

function runProgram(input){
    input = input.split("\n");
    let data = input[0].split(" ").map(Number);
    let n = data[0];
    let k = data[1];
    let a = input[1].trim().split(" ").map(Number);
   
    console.log(search(a,0,n-1,k)) 
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
runProgram(`5 2
8 4 1 9 11`)