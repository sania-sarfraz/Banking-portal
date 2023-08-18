const users = [];

function signup(){
    const username=document.getElementById("signupName").value;
    const phone=document.getElementById("signupPhone").value;
    const email=document.getElementById("signupEmail").value;
    const dateofBirth=document.getElementById("signupDOB").value;
    const password=document.getElementById("signupPswd").value;
    users.push({username,phone,email,dateofBirth,password});
    alert("Signup successful! Please login.");
    showSigninForm();
}

function signin(){
    const username=document.getElementById("name").value;
    const password=document.getElementById("pswd").value;
    const user = users.find (u=>u.username === username && u.password === password);

    if (users){
        alert("signin successful!");
    }
    else{
        alert("signin failed!");
    }
}

function showSigninForm(){
    document.getElementById("signup form").style.display = "none";
    document.getElementById(loginForm).style.display = "block";
}