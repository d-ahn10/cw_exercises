function validPhoneNumber(phoneNumber){
  const examplePhoneNum = "(123) 456-7890";
  console.log('logging test: ', phoneNumber);
  if (examplePhoneNum.length !== phoneNumber.length) {
    return false;
  }
  
  let phoneNumArr = phoneNumber.split("");
  
  let phoneNumberFlag = false;
  
  for (let i = 0; i < phoneNumArr.length; i++) {
      // check for (parentheses).
      if (phoneNumArr[0] !== examplePhoneNum[0] && phoneNumArr[4] !== examplePhoneNum[4]) {
        return phoneNumberFlag;
      // check for 'space' and dash.
      } else if (phoneNumArr[5] !== " " || phoneNumArr[9] !== "-") {
        return phoneNumberFlag;
      // checking for numbers since that should be the only datatype left over.
      } else {
        let checkNum = parseInt(phoneNumArr[i]);
        if (!Number.isNaN(checkNum)) {
          return phoneNumberFlag;
        } else {
          phoneNumberFlag = true;
        }
      }
  }

  return phoneNumberFlag;
}
