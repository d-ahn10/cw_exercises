function abbrevName(name){
let nameArr = name.split(' ');
let firstLetter = nameArr[0][0].toUpperCase();
let secondLetter = nameArr[1][0].toUpperCase();

return firstLetter + "." + secondLetter
}
