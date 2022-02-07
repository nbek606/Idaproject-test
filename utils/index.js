
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

export {
  moneySpaces,
  formValidation,
  inputValidation,
  clearForm
}