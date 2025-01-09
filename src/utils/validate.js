export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (value) => {
      if (!value) {
        errors.email = "Введите E-Mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value)) {
        errors.email = "Неверный E-Mail";
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = "Введите пароль";
      } else if (
        !isAuth &&
        !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}/i.test(value)
      ) {
        errors.password =
          "Пароль должен содержать хотя бы одну заглавную, строчную буквы и цифру. Минимальная длина пароля 5 символов.";
      }
    },
    password_2: (value) => {
      if (!isAuth && value !== values.password) {
        errors.password_2 = "Пароли не совпадают";
      }
      else if(!isAuth && !value){
        errors.password_2 = "Введите пароль повторно";
      }
    },
    fullname: (value) => {
      if (!isAuth && !value) {
        errors.fullname = "Укажите свое имя и фамилию";
      }
    },
  };

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]));
};
