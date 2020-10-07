let value1 = +prompt("ENTER first value");
let value2 = +prompt("Enter second value");
let op = prompt("Enter opperation");
let A = value1;
let B = value2;

if (op == "+" ){
    alert(A+B);
}else if(op == "-" ){
    alert(A-B);
}else if ( op == "*" ){
    alert(A*B);
}else if (op == "/" ){
    alert(A/B);
}else{
    alert(invalid)
}