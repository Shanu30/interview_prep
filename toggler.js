let arr = [1,2,3];

const toggler = (...arr) => {
    let i = 0;
    return () => {
        if(i === arr.length ){
            i=0;
        }
        console.log(arr[i++])
    }
}

//  Que. What is currying?
//  Ans. Currying is a process in which a function returns a function and when we call outer function we provide parameters of inner function as well with (,) separator.
  
// for eg: function outer(a) {
//             return(function inner(b) {
//                 console.log(a+b);
//             })
//         }

//         outer(5,2)      returns (5+2)  =>  7