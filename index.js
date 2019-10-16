const { performance } = require('perf_hooks');
let booleans = ['0','1'];
let count = 0;

function countInCbns(digit){
    console.log(`For digit ${digit}`)
    getCombinations("",digit);
}

function getCombinations(prefix,n){
    if(n==0){
        count += 1;
        return; 
    }
    for(let i=0;i<2;i++){
        if(prefix.charAt(prefix.length-1) != '0' || prefix.charAt(prefix.length-1) != booleans[i]){
            let newPrefix = prefix + booleans[i];
            getCombinations(newPrefix,n-1);
        }
    }
}

let t1= performance.now();
countInCbns(40);
let t2 = performance.now();
console.log(`Count: ${count}`)
console.log(`Time Taken:${(t2 - t1) / 1000}`);


