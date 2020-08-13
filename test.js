function set(a) {
    a.t = 3;
  
    return a;
}
function setB(b){
    b = 5;

}
let x = {

}
console.log(x)
const c = set(x)

console.log(x)
console.log(c === x)
setB(x.t)

console.log(x)
setB(x)
console.log(x)