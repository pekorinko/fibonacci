'use strict';
//答えをメモしていく
const memo = new Map();
memo.set(0,0);
memo.set(1,1);

function fib(n){
    //n番目のメモを持っていたら
    if(memo.has(n)){
        return memo.get(n);
    }
    //メモを持っていないなら
    const value = fib(n-1)+fib(n-2);
    //計算してメモに登録する
    memo.set(n,value);
    return value;
}

const length =40;
for(let i = 0; i<= length; i++){
    console.log(fib(i));
}