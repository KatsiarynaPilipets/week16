document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    function validateField(field, errorField, errorMessage) {
    if (!field.validity.valid) {
        field.classList.add('error');
        errorField.textContent = errorMessage;
        return false;
    } else {
        field.classList.remove('error');
        errorField.textContent = '';
        return true;
    }
    }

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const ageField = document.getElementById('age');
    const professionField = document.getElementById('profession');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    const agreementField = document.getElementById('terms');

    const nameErrorField = document.getElementById('name-error');
    const emailErrorField = document.getElementById('email-error');
    const ageErrorField = document.getElementById('age-error');
    const professionErrorField = document.getElementById('profession-error');
    const passwordErrorField = document.getElementById('password-error');
    const confirmPasswordErrorField = document.getElementById('confirm-password-error');

    nameErrorField.textContent = '';
    emailErrorField.textContent = '';
    ageErrorField.textContent = '';
    professionErrorField.textContent = '';
    passwordErrorField.textContent = '';
    confirmPasswordErrorField.textContent = '';

    nameField.classList.remove('error');
    emailField.classList.remove('error');
    ageField.classList.remove('error');
    professionField.classList.remove('error');
    passwordField.classList.remove('error');
    confirmPasswordField.classList.remove('error');

    const isNameValid = validateField(nameField, nameErrorField, 'Пожалуйста, введите корректное имя');
    const isEmailValid = validateField(emailField, emailErrorField, 'Пожалуйста, введите корректный email');
    const isAgeValid = validateField(ageField, ageErrorField, 'Пожалуйста, введите корректный возраст');
    const isProfessionValid = validateField(professionField, professionErrorField, 'Пожалуйста, выберите профессию');
    const isPasswordValid = validateField(passwordField, passwordErrorField, 'Пароль должен быть не менее 8 символов длиной и содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру');
    const isConfirmPasswordValid = validateField(confirmPasswordField, confirmPasswordErrorField, 'Пароли не совпадают');

    if (!agreementField.checked) {
    agreementField.classList.add('error');
    agreementErrorField.textContent = 'Необходимо согласиться собработкой данных';
    const isAgreementValid = false;
    } else {
    agreementField.classList.remove('error');
    agreementErrorField.textContent = '';
    const isAgreementValid = true;
    }

    if (isNameValid && isEmailValid && isAgeValid && isProfessionValid && isPasswordValid && isConfirmPasswordValid && isAgreementValid) {
    console.log('Имя:', nameField.value);
    console.log('Email:', emailField.value);
    console.log('Возраст:', ageField.value);
    console.log('Пол:', document.querySelector('input[name="gender"]:checked').value);
    console.log('Профессия:', professionField.value);
    console.log('Пароль:', passwordField.value);
    console.log('Подтверждение пароля:', confirmPasswordField.value);

    nameField.value = '';
    emailField.value = '';
    ageField.value = '';
    professionField.value = '';
    passwordField.value = '';
    confirmPasswordField.value = '';
    agreementField.checked = false;
    
    }
    });