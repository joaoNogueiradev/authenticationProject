const otpForm = document.querySelector('.otpForm');
const notification = document.querySelector('.notification')
const otpField = document.getElementById('otpField')

let name = document.getElementById('name');
let email = document.getElementById('email');
let otp = 0

otpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    notification.innerHTML = `
    <strong>Loading</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    `

    let token = Math.floor(Math.random() * 9000) + 1000;
    
    let emailData = {
        name: name.value,
        email: email.value,
        subject: `OTP email`,
        message: `Your OTP number is ${token}`
    }
    otp = token
    
    fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      })
      .then(response => response.text())
      .then(responseText => {
        console.log(responseText);
        if (responseText === 'success') {
          notification.innerHTML = '';
          const censoredEmail = email.value.substring(0, 4).replace(/./g, '*') + email.value.substring(4);
          alert(`Email sent to ${censoredEmail}!`);
          name.value = '';
          email.value = '';
        } else {
          notification.innerHTML = '';
          alert('Something went wrong, your Email was not Sent!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    otpField.classList.remove('hide')

    const firstInput = document.getElementById('otpNum1');
    firstInput.focus();
});


submitButton.onclick = (e) => {
    e.preventDefault();

    let fieldNumbers = Number(otpNum1.value + otpNum2.value + otpNum3.value + otpNum4.value);
    if(otp !== fieldNumbers){
        alert('Authentication Failed!')
        otpInputs.forEach(input => input.value = '') 
    } else {
        alert('Authentication Suceeded!')
        otpInputs.forEach(input => input.value = '') 
    }
};

const otpInputs = document.querySelectorAll('.otpNum');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        if (input.value.length >= input.maxLength) {
            if (index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    });
});

