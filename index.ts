var memorizeFunction = function(functionUsing: Function){
    let oldResult = {} 
    return function(year: any){
        let inputYear = `${year}`
        console.log(inputYear)
        if(oldResult[inputYear]){
            return oldResult[inputYear]
        } else{
            let result = functionUsing(year)
            console.log(result)
            oldResult[`${year}`] = result
            return result;
        }
    }
}
function age(b:number):number {
    let a = 2023;
    return a-b;
}

var memorizeAge = memorizeFunction(age);
console.log("tuoi", memorizeAge(2000));
console.log("tuoi", memorizeAge(2000));

