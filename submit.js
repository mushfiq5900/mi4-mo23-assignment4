//Problem 1: 
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

//Problem 2:
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

//Problem 3:
function picnicBudget(numberOfPerson) {
    if (typeof (numberOfPerson) == "number" && numberOfPerson > 0) {
        if (numberOfPerson <= 100) {
            budgetOfPicnic = numberOfPerson * 5000;
        }
        else if (numberOfPerson > 100 && numberOfPerson <= 200) {
            budgetOfFrist100 = 100 * 5000;
            budgetOfRest = (numberOfPerson - 100) * 4000;
            budgetOfPicnic = budgetOfFrist100 + budgetOfRest;
        }
        else if (numberOfPerson > 200) {
            budgetOfFrist100 = 100 * 5000;
            budgetOfSecond100 = 100 * 4000;
            budgetOfRest = (numberOfPerson - 200) * 3000;
            budgetOfPicnic = budgetOfFrist100 + budgetOfSecond100 + budgetOfRest;
        }
        return budgetOfPicnic;
    }
    else {
        let errorMessage = "Invalid Input";
        return errorMessage;
    }
}
let personInput = 201;
let Output = picnicBudget(personInput);
console.log(Output);


//Problem 4:
function oddFriend(friendsName) {
    if (typeof (friendsName) == "object") {
        for (names of friendsName) {
            if (names.length % 2 != 0) {
                return names;
            }
        }
    }
    else {
        errorMessage = "Invalid Input";
        return errorMessage;
    }
}
let nameInput = ['abid', 'bidhan', 'ovi', 'evan', 'sohan', 'shisir', 'opu'];
let Output = oddFriend(nameInput);
console.log(Output);
