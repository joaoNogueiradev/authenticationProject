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
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            notification.innerHTML = '';
            alert('Email sent!');
            name.value = '',
            email.value = ''
        } else {
            notification.innerHTML = '';
            alert('Something went wrong, your Email was not Sent!')
        }
    }

    xhr.send(JSON.stringify(emailData));

    otpField.classList.remove('hide')

    const firstInput = document.getElementById('otpNum1');
    firstInput.focus();
});


submitButton.onclick = (e) => {
    e.preventDefault();

    let fieldNumbers = Number(otpNum1.value + otpNum2.value + otpNum3.value + otpNum4.value);
    if(otp !== fieldNumbers){
        alert('Authentication Failed!')
    } else {
        alert('Authentication Suceeded!')
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

