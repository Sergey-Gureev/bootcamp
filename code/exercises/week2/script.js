// function foo(a,b,c){
//     return a+b+c;
// }

// function boo(a,c){
//     var d = c + 2;
//     var x = foo(a,c,d);
//     return x-d;
// }

// function goo(x){
//     var y = boo(x, 3);
//     return y + foo(y,y,y);
// }

// function moo(n, k){
//     return goo(n) + too(k);
// }

// function too(j){
//     return j * 2;
// }

// function zoo(z){
//     return too(z);
// }

// function noo(a,b){
//     if (boo(a,b) * 3.7 > 5887){
//         return moo(4, koo(b));
//     }
//     return boo(a,b) + 4.66;
// }

// function koo(d){
//     var f = zoo(d) * 5.3;
//     return f * 1.2;
// }

// var r = goo(5);
// var w = r + too(3) + zoo(r) + boo(r, too(712));
// var q = foo(r, w, 4) + koo(34) + noo(w,r);

function foo(){
    let sum = 0
    for (let i = 1000; i < 2000; i++){
        if (i % 203 === 0){
            sum += getSecondDigit(i)
        } else if (i % 497 === 0) {
            sum += getLastDigit(i)
        } else if (i % 293 === 0) {
            sum += getLastDigit(i*13)
        } 
    }
    return sum
}

function getSecondDigit(number){
    return parseInt(number.toString().split("")[0])
}

function getLastDigit(number){
    let numberLength = number.toString().length
    return parseInt(number.toString().split("")[numberLength - 1])
}

foo()