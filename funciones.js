export const lenght = (str) => {
  let contador = 0;
  while (str[contador]) {
    contador++;
  }

  return contador;
};

export const subString = (str, startIndex, length) => {
  if (startIndex >= str.length) {
    return '';
  }

  if (length === undefined || length > str.length - startIndex) {
    length = str.length - startIndex;
  }

  let result = '';
  for (let i = 0; i < length; i++) {
    result += str[startIndex + i];
  }

  return result;
};

export const conCat = (a, b) => a + b;

export const include = (principalString, string) => {
  for (let i = 0; i <= principalString.lenght - string.lenght; i++) {
    let found = true;
    for (let j = 0; j < string.lenght; j++) {
      if (principalString[i + j] !== string[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return true;
    }
  }
  return false;
};
