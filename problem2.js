function pandaCost(singara, somucha, jilapi) {
    if (typeof (singara, somucha, jilapi) == "number" && (singara, somucha, jilapi) > 0) {
        totalSingaraPrice = singara * 7;
        totalSomuchaPrice = somucha * 10;
        totalJilapiPrice = jilapi * 15;
        totalPrice = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
        return totalPrice;
    }
    else {
        errorMessage = "Invalid Input";
        return errorMessage;
    }
}
let orderOutput = pandaCost(1, 1, 1);
console.log(orderOutput);