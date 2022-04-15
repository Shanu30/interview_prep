function swap(a, b) {
    let c = a;
    a = b;
    b = c;
}

function runProgram(input){
    input = input.split("\n");
   
    let t = Number(input[0]);
    let start = 1;
    while(t>0) {
        let n = Number(input[start++]);
        let arr = input[start++].split(" ").map(Number);
        let l=0; r= n-1;
        if(l===r) {
            console.log(arr[l])
        }
        while(l<r) {
            if(arr[l]>arr[r]) {
                swap(arr[l],arr[r]);
            }
            else {
                r--;
            }
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
runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`)