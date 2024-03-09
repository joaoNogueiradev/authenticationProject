let generatedToken = 0;

function generateToken() {
    generatedToken = Math.floor(Math.random() * 9000) + 1000;
    alert(generatedToken)
};

emailBtn.onclick = () =>{
    otpCheck.classList.remove('hide')
    generateToken();
}

function verifyToken(){
    let fieldNumbers = Number(otpNum1.value + otpNum2.value + otpNum3.value + otpNum4.value);
    if(generatedToken !== fieldNumbers){
        alert('Authentication Failed!')
    } else {
        alert('Authentication Suceeded!')
    }
}
