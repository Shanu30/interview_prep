function runProgram(input){
    input = input.split("\n");
    let data = input[0].split(" ").map(Number);
    let n = data[0];
    let key = data[1];
    let arr = input[1].split(" ").map(Number);
    let a = arr.sort((k,l)=>k-l);
    let l=0; r= n-1; c=0;
    while(l<r) {
        if(a[l]+a[r]===key) {
            c++;l++;r--;
        }
        else if(a[l]+a[r]>key){
            r--;
        }
        else if(a[l]+a[r]<key){
            l++;
        }
    }
    console.log(c)
    

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
runProgram(`5 9
3 0 6 2 7`)