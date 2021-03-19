export function isEmail(asValue : string) {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export function isPassword(asValue : string) {
    /*
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    */
    if(asValue.length >= 6) return true;
    else return false;
} 

export function isSummit(typingPassword : string, typingConfirmPassword : string, typingEmail : string){
    if((isPassword(typingPassword)) && (typingPassword === typingConfirmPassword) && isEmail(typingEmail))
        return true;
    else return false;
}

export function isPhoneNumber(asValue : string) {
  var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}