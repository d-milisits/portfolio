const texts = ['fullstack developer', 'finance graduate', 'lifelong student'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

// Typing animation for homepage-- onload
(function type() {
  
  if(count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length) {
    count++;
    index=0;
  }
  setTimeout(type, 80);

}());

function flyOut() {
  if (screen.width > 535) {
    var a = document.getElementById('landing-box');
    var b = document.getElementById('image');
    a.className += " animate__animated animate__bounceOutUp";
    b.className += " animate__animated animate__bounceOutDown";
    setTimeout(function() {
      window.location.href = 'about.html';
    }, 550);
  } else {
    setTimeout(function() {
      window.location.href = 'about.html';
    }, 400);
  }
}

// Fadeout right animation & reroute to HTML parameter
function flyRight(route) {
  if (screen.width > 535) {
    var a = document.getElementById('main-page');
    a.className += " animate__animated animate__zoomOut";
    setTimeout(function() {
      window.location.href = route;
    }, 550);
  } else {
    setTimeout(function() {
      window.location.href = route;
    }, 150);
  }
}

// Blur animation for onclick events/greetings
function blurAndPrompt(target) {
  if (target=="mail") {
    var a = document.getElementById('main-page');
    var b = document.getElementById('success-message');
    setTimeout(function() {
      a.className += " blur";
    }, 2250);
    setTimeout(function() {
      b.className += " animate__animated animate__fadeIn shown";
    }, 2425);
    setTimeout(function() {
      a.className = "main-page";
      b.className = "success-message";
    }, 4000);
  }

  if(target=="home") {
    var a = document.getElementById('main-page');
    var b = document.getElementById('success-message');
    a.className += " blur";
    setTimeout(function() {
      b.className += " animate__animated animate__fadeIn shown";
    }, 150);
    setTimeout(function() {
      a.className = "main-page";
      b.className = "success-message";
      setTimeout(function() {
        flyOut();
      }, 200);
    }, 1250);
  }
}

// Error handling for empty message fields
function sendMessage() {
  var errorField = document.getElementById('error');
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  if ((name=="") || (email=="") || (message=="")) {
    errorField.className = "error animate__animated animate__headShake shown";
  }
  else {
    errorField.className = "error";
  }
}

// Mobile navbar opening
function Animation() {
  const selectElement = function (element) {
    return document.querySelector(element);
  };
  
  let body = selectElement('body');

  body.classList.toggle('open');
}