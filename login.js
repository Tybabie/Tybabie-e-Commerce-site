function createAccount() {
    document.getElementById('log-in').style.display='block'
    document.getElementById('login').style.display='none'
}
function logIn() {
    document.getElementById('log-in').style.display='none'
    document.getElementById('login').style.display='block'
}


function validateEmailAddress(){
    let say;
    const email = document.getElementById("emailaddress").value;
    let email_message = document.getElementById("emailaddress_message");
    if (email.indexOf("@") == -1 || email.length < 11) {
        document.getElementById("emailaddress").style.borderColor='red';
        say = "Please enter a valid email address";
        email_message.innerHTML = say;
        
        return false;
       
    }else{
        document.getElementById("emailaddress").style.border='thin solid black';
        email_message.innerHTML = '';
        
    }
}
function validateFname(){
    let say;
    const name = document.getElementById("firstname").value;
    let firstName_message = document.getElementById("firstName_message");
    if (name.length == "" || name.search(/[0-9]/) != -1 ) {
        document.getElementById("firstname").style.borderColor='red';
        say = 'Please enter a valid name'
        firstName_message.innerHTML = say;
        return false;
 
 }else{
    document.getElementById("firstname").style.border='thin solid black';
     firstName_message.innerHTML = '';
    
    
 }
}
function validateLname(){
    let say;
    const name = document.getElementById("lastname").value;
    let lastName_message = document.getElementById("lastName_message");
    if (name.length == "" || name.search(/[0-9]/) != -1 ) {
        document.getElementById("lastname").style.borderColor='red';
        say = 'Please enter a valid name';
        lastName_message.innerHTML = say;
        return false;
 
 }else{
    document.getElementById("lastname").style.border='thin solid black';
     lastName_message.innerHTML = '';
     
    
 }
}
function validatePhoneNumber(){
    
    let say;
    const phone = document.getElementById("phonenumber").value;
    let phone_message = document.getElementById("phonenumber_message");
    if (isNaN(phone) || phone.length == '' || phone.length <= 10 ) {
        document.getElementById("phonenumber").style.borderColor='red';
        say = "Please enter a valid phone number";
        phone_message.innerHTML = say;
        return false;
        
    }else{
        document.getElementById("phonenumber").style.border='thin solid black';
        phone_message.innerHTML = '';
        
    }
}
function validatePhone(){
    
    let say;
    const phone = document.getElementById("phone").value;
    let phone_message = document.getElementById("phone_message");
    if (isNaN(phone) || phone.length == '' || phone.length <= 10 ) {
        document.getElementById("phone").style.borderColor='red';
        say = "Please enter a valid phone number";
        phone_message.innerHTML = say;

        return false;
        
    }else{
        document.getElementById("phone").style.border='thin solid black';
        phone_message.innerHTML = '';
    
    }
}
function validateEmail(){
    let say;
    const email = document.getElementById("email").value;
    let email_message = document.getElementById("email_message");
    if (email.indexOf("@") == -1 || email.length < 11) {
        document.getElementById("email").style.borderColor='red';
        say = "Please enter a valid email address";
        email_message.innerHTML = say;
        return false;
       
    }else{
        document.getElementById("email").style.border='thin solid black';
        email_message.innerHTML = '';
      
    }
}
function formValidationn() {
    const firstName = document.getElementById("fistname").value;
    const lastName = document.getElementById("lastname").value;
    const phone = document.getElementById("phonenumber").value;
    const email = document.getElementById("emailaddress").value;
   
    if (firstName.length == "" || firstName.search(/[0-9]/) != -1 ) {
      alert('Please fill the required field')
        return false;
    }
    if (lastName.length == "" || lastName.search(/[0-9]/) != -1 ) {
        alert('Please fill the required field')
          return false;
      }
    if ( isNaN(phone) || phone.length == ''  ||  phone.length <= 10 ) {
        alert('Please enter a valid phone number')
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 11) {
        alert('Please fill the required field')
        return false;
    }
   
    alert(" Successful  ")
    document.getElementById('able').style.display='block'
    return true;
}

function formValidation() {
   
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
   
    
    if (email.indexOf("@") == -1 || email.length < 11) {
        alert('Please fill the required field')
       
        return false;
    }
    if ( isNaN(phone) || phone.length == ''  ||  phone.length <= 10 ) {
        alert('Please fill the required field')
        
        return false;
    }
    alert(" Successful  ")
    
    return true;
}