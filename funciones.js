export const lenght = (str) => {
  let contador = 0;
  while (str[contador]) {
    contador++;
  }

  return contador;
};

export const subString = (str, startIndex, length) => {
  if (startIndex >= str.length) {
    return "";
  }

  if (length === undefined || length > str.length - startIndex) {
    length = str.length - startIndex;
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    result += str[startIndex + i];
  }

  return result;
};

export const conCat = (a, b) => a + b;

const parrafo = "Esto es un parrafo";
export const include = (str) => {
  let contador = 0;
  while (str[contador]) {
    contador++;
  }

  if (parrafo === str) {
    return true;
  }

  return false;
};
