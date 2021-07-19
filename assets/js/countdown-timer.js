// $(document).ready(function(){
//   //Set the date we're counting down to
//   var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

//   // Update the count down every 1 second
//   var x = setInterval(function() {

//     // Get today's date and time
//     var now = new Date().getTime();
      
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
      
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
      
//     // If the count down is over, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       document.getElementById("demo").innerHTML = "EXPIRED";
//     }
//   }, 1000);





// })


window.onload = function() {
  var hour = 1;
  var minute = 60;
  var sec = 60;

  setInterval(function() {
    document.getElementById("countTimer").innerHTML = hour + " : " + minute + " : " + sec;
    
    sec--;//second decrements
    if (sec == '00') {
      minute --;//minute decrements
      sec = 60;//set again sencond
      if (minute == 0) {
        minute = 60;//set again minute randomly
        hour--;
        if (hour == 0) {
          hour = 1;//set again hour
        }
      }

    }
  }, 1000);

}