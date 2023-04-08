var memorizeFunction = function (functionUsing) {
    var oldResult = {};
    return function (year) {
        var inputYear = "".concat(year);
        console.log(inputYear);
        if (oldResult[inputYear]) {
            return oldResult[inputYear];
        }
        else {
            var result = functionUsing(year);
            console.log(result);
            oldResult["".concat(year)] = result;
            return result;
        }
    };
};
function age(b) {
    var a = 2023;
    return a - b;
}
var memorizeAge = memorizeFunction(age);
console.log("tuoi", memorizeAge(2000));
console.log("tuoi", memorizeAge(2000));
