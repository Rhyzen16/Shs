function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="user")
{
    alert("login succesfully");
    window.open("https://zoro.to/watch/farming-life-in-another-world-18284?ep=97013");
    return false;

}
else
{
    alert("login failed");
}


}
