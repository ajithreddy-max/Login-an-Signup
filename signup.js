let formData = document.querySelector('form');

formData.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    let mail = document.getElementById('mail').value;
    let num = document.getElementById('num').value;

    let userError = document.getElementById('uerror');
    let passError = document.getElementById('perror');
    let cpassError = document.getElementById('cerror');
    let mailError = document.getElementById('merror');
    let numError = document.getElementById('nerror');

    userError.textContent = "";
    passError.textContent = "";
    cpassError.textContent = "";
    mailError.textContent = "";
    numError.textContent = "";

    let valid = true;

    // USERNAME
    let userValue = user.trim();
    if (!userValue) {
        userError.textContent = "User name is required";
        valid = false;
    } else if (userValue.length < 3 || userValue.length > 20) {
        userError.textContent = "User name must be 3–20 characters";
        valid = false;
    } else if (!/^[a-zA-Z]+$/.test(userValue)) {
        userError.textContent = "Only alphabets allowed";
        valid = false;
    }

    // PASSWORD
    let passValue = pass.trim();
    if (!passValue) {
        passError.textContent = "Password is required";
        valid = false;
    } else if (!/[A-Z]/.test(passValue) || !/[a-z]/.test(passValue) || !/[0-9]/.test(passValue)) {
        passError.textContent = "Must contain uppercase, lowercase & number";
        valid = false;
    } else if (passValue.length < 6 || passValue.length > 20) {
        passError.textContent = "Password must be 6–20 characters";
        valid = false;
    }

    // CONFIRM PASSWORD
    let cpassValue = cpass.trim();
    if (!cpassValue) {
        cpassError.textContent = "Confirm password required";
        valid = false;
    } else if (cpassValue !== passValue) {
        cpassError.textContent = "Passwords do not match";
        valid = false;
    }


    //MAIL
    let mailValue = mail.trim();
    if(!mailValue){
       mailError.textContent = "Email is required";
        valid = false;
    }
  else if(!/^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(mailValue)){
    mailError.textContent = "Invalid email format";
    valid = false;
}


    let numValue = num.trim();
    if(!numValue){
        numError.textContent="Phone number is required";
        valid = false;
    }
    else if(!/^[0-9]{10}$/.test(numValue)){
        numError.textContent="Phone number must be 10 digits";
        valid = false;
    }
    else if(!/^[6-9]\d[0-9]/.test(numValue)){
        numError.textContent="Phone number must start with 6,7,8 or 9";
        valid = false;
    }

    if(true){
        let userData={
            username:user,
            password:pass,
            confirmpassword:cpass,
            Email:mail,
            number:num
        }
        localStorage.setItem('signUpData',JSON.stringify(userData))
        alert("signed up successfull");
        window.location.href="../HTML/login.html"
    
    }
   formData.reset();

    
});
