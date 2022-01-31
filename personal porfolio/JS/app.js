let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";
  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor2.classList.add("active");
  };

  links.onmouseleave = () => {
    cursor1.classList.remove("active");
    cursor2.classList.remove("active");
  };
});

// Preventing User from Right Clicking 

window.addEventListener('contextmenu', function (e) { 
  e.preventDefault(); 
}, false);

// Preventing User to use shortcut keys

document.addEventListener("keydown", function(e){
  if(e.ctrlKey || e.keycode==123){
    e.stopPropagation();
    e.preventDefault();
  }
});

function sendEmail(){
    Email.send({

        Host : "smtp.google.com",
        Username : "tusharbirlasoft@gmail.com",
        Password : "Ju$T4Me!1047",
        To : "tushar.j.kukreja@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Message From Recruiter",
        Body : "Name: " + document.getElementById("name").value
                + "<br> Email: " + document.getElementById("email").value
                + "<br> Phone Number: " + document.getElementById("number").value
                + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Thank You for your time!!")
    );
}
