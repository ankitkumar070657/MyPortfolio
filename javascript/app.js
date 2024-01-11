const boxes=document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5*4;


boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom)
    {
        box.classList.add('show');
    }
    else{
        box.classList.remove('show');
    }
});
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
      
  formbutton("create", {
    action: "https://formspree.io/f/mleqdenq",
    title: "Let's Connect ",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "dimgrey"
      },
      button: {
        backgroundColor: "rgba(255, 255, 255, 0.06)"
      }
    }
  });

// hamburger toggle

  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);