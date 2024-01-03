let generatedOTP= '';

function generateOTP(){
    const otpLength = 4;
    const otpChars = '0123456789';
    generatedOTP='';

    for(let i=0; i<otpLength; i++){
        const randomIndex = Math.floor(Math.random() * otpChars.length);
        generatedOTP += otpChars[randomIndex];
    }

    displayOTP(generatedOTP);
}

function displayOTP(otp){
    const otpDisplayElement = document.getElementById('otpDisplay');
    otpDisplayElement.textContent = `Your OTP is : ${otp}`;
}


function validateOTP(){
const enteredOTP = document.getElementById('otpInput').value;

if(enteredOTP === generatedOTP ){
    alert('OTP is Valid ');
}

else{
    alert(`OTP is invalid . Please try again.`);
}

}