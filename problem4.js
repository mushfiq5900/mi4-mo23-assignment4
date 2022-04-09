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