
function saveData()
{
let name,email,password,phone_no;
name = document.getElementById("name").value;
email = document.getElementById("email").value;
password = document.getElementById("password").value;
mobile_no = document.getElementById("mobile_no").value;

let user_records=new Array()
user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
if(user_records.some((v)=>{return v.email==email}))
{
    alert("duplicate data");
}
else
{
    user_records.push({
    "name":name,
    "email":email,
    "pass":password,
    "mobile_no":phone_no
    })
    localStorage.setItem("user",JSON.stringify(user_records));
    
}
}

function login()
 {
    
    let email,pass;
    email=document.getElementById("Email").value;
 
    pass=document.getElementById("password1").value;
 
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
    if(user_records.some((v)=>{return v.email==email && v.pass==pass}))
    {
        let current_user=user_records.filter((v)=>{return v.email==email && v.pass==pass})[0]

        localStorage.setItem('user_1',current_user.name);
        alert('Login success as ' + current_user.email +" Email Id");  
        event.preventDefault();
        window.location.href="wether.html";
    }
    else
    {
        alert('Login Fail - Wrong email or password');
    }
 }