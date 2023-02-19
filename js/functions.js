function checkLengthString (stringValue, maxLength) {
  return String(stringValue).length <= maxLength
}

checkLengthString('проверяемая строка', 20);
checkLengthString('проверяемая строка', 18);
checkLengthString('проверяемая строка', 10);

console.log(checkLengthString('проверяемая строка', 20),
checkLengthString('проверяемая строка', 18),
checkLengthString('проверяемая строка', 10))


function isPalindrom1(str){
  return str.toLowerCase().replaceAll(' ', '') === str.split('').reverse().join('').toLowerCase().replaceAll(' ', '');//решение через массив
}
function isPalindrom2(str){
  let newStr = '';
  for (let i = str.length; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr
}


isPalindrom2('топот');
isPalindrom2('ДовОд');
isPalindrom2('Кекс');
isPalindrom2('Лёша на полке клопа нашёл');

console.log(isPalindrom2('топот'),
isPalindrom2('ДовОд'),
isPalindrom2('Кекс'),
isPalindrom2('Лёша на полке клопа нашёл'));

function isNumber(s) {
  str = parseInt(s.replace(/[^\d]/g, ''));
  return str;
}

isNumber('ss1f4d');
isNumber('1ssfd 12');

console.log(isNumber('s1sfd'),
isNumber('s1sfd 1.2'));


function makeStr(str, min, char) {
  let newStr = ''
  if (str.length >= min) {
    return str
  }else if(str.length <= char.length){
    newStr = (char.slice(0, min - 1) + str)
    if(newStr.length < min){
      newStr = char[0].repeat(min - newStr.length) + newStr
    }
  }else{
    newStr = (char.repeat( min-1) + str)
  }

  return newStr
}

console.log(makeStr('1', 2, '0'),
makeStr('1', 4, '0'),
makeStr('q', 4, 'werty'),
makeStr('q', 4, 'we'),
makeStr('qwerty', 4, '0'));
