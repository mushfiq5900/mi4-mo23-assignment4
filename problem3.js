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