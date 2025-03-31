function multiply(num1, num2) {
    var a = num1 + num2;
    
    return a;
}

function xyz(a, b, c, d, e) {
    var x = a + b;
    var y = c + 2;
    var z = d - e;

    return x + y + z;
}
xyz(1, 2, 3, 4, 5);

function doAnything(a, b, c, d, e) {
    for(var i=0; i<a; i++) {
        b += 1;
    }

    return b + c;
}
doAnything(5, 4, 3, 2, 1);

function isEqual(a, b) {
    if(a == b) {
        return "same";
    } else {
        return "not same";
    }
}
isEqual(2, 3);
444
function addNewTask(c, d){
    return c * d;
}
addNewTask(4, 5);