const moneySpaces = (value) => {
  return Number(value.replace(/\s/g, '')).toLocaleString('ru-RU')
}

export {
  moneySpaces
}