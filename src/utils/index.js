export function convertPrice(price) {
  return price.toLocaleString() + "₽";
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function nameValidation(name) {
    return name.trim("") && name.length >= 3
}


export function createFakeArr(length) {
  return Array.from({length: length})
} 