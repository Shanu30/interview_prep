function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let a = input[1].trim().split(" ").map(Number);
    let ans = -1
    let l=0; 
    let r=n-1;
    let min;
    while(l<=r){
        let m = Math.floor(l +(r-l)/2);
        if(a[m] < a[m+1] && a[m]<a[m-1]) {
            min = m;
            break;
        }
        else if(a[m]<=a[r]) {
            r = m;
        }
        else{
            l = m+1;
        }
    }
    let left = true;
    let right = true;
    for(let i=0; i<min-1; i++) {
        if(a[i]>a[i+1]) {
            left = false; 
        }
    }
    for(let i=min; i<n-1; i++) {
        if(a[i]>a[i+1]) {
            right = false; 
        }
    }
    if(left===true && right===true) {
        console.log("YES")
    }
    else{
        console.log("NO")
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
3 4 7 9 1 2`)