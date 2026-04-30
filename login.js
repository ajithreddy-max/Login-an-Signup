let loginData=document.getElementById("form");
loginData.addEventListener("submit",(e)=>{
    e.preventDefault();
    let mail=document.getElementById("mail1").value;
    let pass=document.getElementById("pass1").value;

    let merror=document.getElementById("merror1");
    let perror=document.getElementById("perror1");

    merror.textContent="";
    perror.textContent="";

    let valid=true;
//Email
 //MAIL
    let mailValue1 = mail.trim();
    if(!mailValue1){
       merror.textContent = "Email is required";
        valid = false;
    }
  else if(!/^[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(mailValue)){
    merror.textContent = "Invalid email format";
    valid = false;
}


    // PASSWORD
    let passValue1 = pass.trim();
    if (!passValue1) {
        passError.textContent = "Password is required";
        valid = false;
    } else if (!/[A-Z]/.test(passValue1) || !/[a-z]/.test(passValue) || !/[0-9]/.test(passValue)) {
        perror.textContent = "Must contain uppercase, lowercase & number";
        valid = false;
    } else if (passValue1.length < 6 || passValue1.length > 20) {
        perror.textContent = "Password must be 6–20 characters";
        valid = false;
    }

    let signedData=JSON.parse(localStorage.getItem(signedData))
    if(!signedData){
        alert('no user found');
    }
    if(mailValue1==signedData.Email && passValue1==signedData.password){
        alert('invalid credentials')
    }
    localStorage.setItem('loggedIn','true');

    alert('login successfull')
    window.location.href="../HTML/home.html"

})
