function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let start = 1;
    
    while(t>0) {
        let hash = {};
        ans = -1;
        let n = Number(input[start++]);
        let a = input[start++].split(" ").map(Number);
        t--;
        for(let i=0; i<n; i++) {
            if(!hash[a[i]]) {
                hash[a[i]] = 1;
            }
            else {
                hash[a[i]] += 1;
            }
            if(hash[a[i]]> n/2) {
                ans = a[i];
                break;
            }
        }
        console.log(ans);
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
6
1 1 1 1 2 3
5
4 4 2 2 3`)