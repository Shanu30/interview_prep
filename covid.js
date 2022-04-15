function runProgram(input){
    let a = input.split("");
    let n = a.length;
    let count = 2;
    l=0; r=n-1
    while(l<r){
        if (a[l]!=="a" && a[l]!=="e" && a[l]!=="i" && a[l]!=="o" && a[l]!=="u"){
            count++;
            l++;
        }
        else if (a[r]!=="a" && a[r]!=="e" && a[r]!=="i" && a[r]!=="o" && a[r]!=="u"){
            count++;
            r--;
        }
        else {
            break;
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
runProgram(`dangerousvirus`)