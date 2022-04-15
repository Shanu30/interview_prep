function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    while (t>0) {
        let n = Number(input[start++]);
        let a = input[start++].split(" ").map(Number);
        ans = [];
       let left = [];
       let right = [];
       left[0] = 1;
       right[n-1] = 1;
       for(let i=0; i<n-1; i++) {
           left[i+1] = left[i]*a[i];
       }
       for(let i=n-1; i>0; i--) {
           right[i-1] = right[i]*a[i];
       }
      for(let i=0; i<n; i++) {
          ans.push(left[i]*right[i])
      }
      console.log(ans.join(" "))
       t--;
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
5
1 2 3 4 5
3
3 2 7`)