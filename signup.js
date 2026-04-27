let formData=document.querySelector('form');

formData.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user=document.getElementById('user').value;
    let pass=document.getElementById('pass').value;
    let cpass=document.getElementById('cpass').value;
    let mail=document.getElementById('mail').value;
    let num=document.getElementById('num').value;


    let userError=document.getElementById('uerror');
    let passError=document.getElementById('perror');
    let cpassError=document.getElementById('cerror');
    let mailError=document.getElementById('merror');
    let numError=document.getElementById('nerror');

    userError.textContent="";
    passError.textContent="";
    cpassError.textContent="";
    mailError.textContent="";
    numError.textContent="";

    let valid=true;

    let userValue=user.trim();
    if(!userValue){
        userError.textContent="user name is required";
        valid=false;
    }
    else if(userValue.length<3 || userValue.length>20){
        userError.textContent="user name must be between 3 and 20 characters";
          
    }
    else if(!/^[a-zA-Z]+$/.test(userValue)){
        userError.textContent="Only alphabets are allowed";
      
    }
    let passValue=pass.trim();
    if(!passValue){
        passError.textContent="Give a password"
        
    }
    else if(!/[A-Z]./test(passValue)||!/[a-z]./test(passValue)||!/[0-9]./test(passValue)){
        passError.textContent="Password should contain uppercase, lowercase and numbers";
      
    }
    else if(passValue.length<6 || passValue.length>20){
        passError.textContent="Password must be 6 to 20 characters";
       
    }

    let cpassValue=cpass.trim();
    if(!cpassValue){
        cpassError.textContent="confirm password cannot be empty";

    }
    else if(cpassValue!==passValue){
        cpassError.textContent="Password not matching";
          
    }

})