function add(a,b){
    return a+b;
}

function subtract(a,b){
    if(a>b){
        return a-b;
        }else{
            return b-a;
        }
    }
function calc(a,b,callback){
    return callback(a,b)
}

let a=calc(10,20,add)
console.log(a);
let s = calc(20,10,subtract)
console.log(s);