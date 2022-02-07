
/* разделелитель тысячных пробелом */
const moneySpaces = (value) => {
  return Number(value).toLocaleString('ru-RU')
}

/* валидация полей */
const inputValidation = (value) => {
  return !!value
}

/* валидация формы */
const formValidation = (form, inputs) => {
  let status = true;

  inputs.forEach(item => {
    if(item.required && !form[item.key]) {
      status = false
    }
  });

  return status
}

/* очистка полей формы */
const clearForm = (form) => {
  Object.keys(form).forEach(key => {
    if (form[key] instanceof Object) {
      clearForm(form[key])
    } else {
      form[key] = ''
    }
  })
}

/* сортировка списка продуктов */
const sortProductList = (list, value) => {
  if (!value) {
    return list
  }

  if (value == 'min') {
    return list.sort((a, b) => a.price - b.price)
  }

  if (value == 'max') {
    return list.sort((a, b) => b.price - a.price)
  }

  if (value == 'name') {
    return list.sort((a, b) => { 
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  }
}

export {
  moneySpaces,
  formValidation,
  inputValidation,
  clearForm,
  sortProductList
}