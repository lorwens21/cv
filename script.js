let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let phoneNumber = document.getElementById("phone-number").value;

function getUserName()
{
    let username = document.getElementById("username").value;
    console.log(username);
}
function getEmail()
{
    let email = document.getElementById("email").value;
    console.log(email);
}
function getPhoneNumber()
{
    let phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
}
function changePicture()
{
    let image = document.getElementById("pemandangan");
    console.log(image.src);
    image.src = "img/img-2.jpg";
    image.alt = "my-pict";
    alert("Do you really wanted to see my next photo ?");
    alert("Don't be scared about my photo");
    alert("Please Enjoy it");
    alert("Thank You :)");
}
