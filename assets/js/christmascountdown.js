var currentYear = new Date().getFullYear();
var christmas = new Date(`December 25, ${currentYear} 00:00:00`).getTime();
var x = setInterval(function() {
  var now = new Date().getTime();   
  var distance = christmas - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("display-message").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    document.getElementById("display-message").innerHTML = "Merry Christmas! 🎅";
  }
}, 1000);