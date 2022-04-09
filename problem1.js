function anaToVori(ana) {
    if (typeof (ana) == "number" && ana > 0) {
        vori = ana / 16;
        return vori;
    }
    else {
        errorMessage = "Invalid Input";
        return errorMessage;
    }
}

let inputAna = 24;
let output = anaToVori(inputAna);
console.log(output);