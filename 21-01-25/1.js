function greet(name, callback) {
   
    return callback(name);
}
function callback(name){
    return "Hello, " + name + "!";
}
console.log(greet("Raghu",callback));