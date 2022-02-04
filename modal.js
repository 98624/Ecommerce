function validate()
{
    var uname=document.getElementById("uname").value;
    var upwd=document.getElementById("upwd").value;
    if(uname=="admin" && upwd=="admin")
    {
        alert("login successfully")

    }
    else{
        alert("login failed")
    }
    
}