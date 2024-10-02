// var acc = document.getElementsByClassName("accordion");
// var z;

// for (z = 0; i < acc.length; z++) {
//   acc[z].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// TYPEWRITER


  var i = 0;
  var txt = 'Hello! I am Abdulwarith Bello, a versatile and prime Full-Stack Developer and the C.E.O of PrimeTECH Solution Limited, I love learning and programming, always available for innovative software solution, Feel free to reach out to discuss your next project!. '; /* The text */
  var speed = 50; /* The speed/duration of the effect in milliseconds */
  

  function typeWriter() {
   if (i < txt.length) {
  document.getElementById("demo").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}
}
