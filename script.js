const form = document.getElementById('registration-form');

  form.addEventListener('submit', function(event) {
   event.preventDefault();

   if (!form.checkValidity()) {
    displayErrors();
   } else {
    displayFormData();
    clearForm();
   }
  });

  form.addEventListener('input', function(event) {
   clearErrors();
  });

  function displayErrors() {
   clearErrors();

   if (!form.name.validity.valid) {
    showErrorMessage('name', 'Имя должно содержать только буквы и пробелы, от 2 до 20 символов.');
   }

   if (!form.email.validity.valid) {
    showErrorMessage('email', 'Введите действительный адрес электронной почты.');
   }

   if (!form.age.validity.valid) {
    showErrorMessage('age', 'Введите возраст.');
   }

   if (!form.profession.validity.valid) {
    showErrorMessage('profession', 'Выберите профессию.');
   }

   if (!form.password.validity.valid) {
    showErrorMessage('password', 'Пароль должен содержать не менее 8 символов, включая заглавные и строчные буквы, а также цифры.');
   }

   if (!form['confirm-password'].validity.valid) {
    showErrorMessage('confirm-password', 'Пароли не совпадают или не соответствуют требованиям.');
   }

   if (!form.agree.validity.valid) {
    showErrorMessage('agree', 'Необходимо согласиться с обработкой данных.');
   }
  }

  function clearErrors() {
   const errorMessages = form.querySelectorAll('.error-message');
   const formInputs = form.querySelectorAll('.form-input');

   errorMessages.forEach(function(error) {
    error.textContent = '';
   });

   formInputs.forEach(function(input) {
    input.classList.remove('error');
   });
  }

  function showErrorMessage(fieldName, message) {
   const errorElement = document.getElementById(fieldName + '-error');
   const inputElement = document.getElementById(fieldName);

   errorElement.textContent = message;
   inputElement.classList.add('error');
  }

  function displayFormData() {
   const name = form.name.value;
   const email = form.email.value;
   const age = form.age.value;
   const gender = form.gender.value;
   const profession = form.profession.value;

   console.log('Имя:', name);
   console.log('Электронная почта:', email);
   console.log('Возраст:', age);
   console.log('Пол:', gender);
   console.log('Профессия:', profession);
  }

  function clearForm() {
   form.reset();
  }