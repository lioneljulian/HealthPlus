function startTime() {
  var today = new Date();
  var day = today.getDay();
  var dd = today.getDate();
  var MM = today.getMonth();
  var YYYY = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  day = checkDay(day);
  MM = checkMonth(MM);
  dd = checkZero(dd);
  m = checkZero(m);
  s = checkZero(s);
  document.getElementById('right').innerHTML =
  day + ", "+dd +" "+ MM+" "+YYYY+"<br>"+h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkZero(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function checkMonth(x)
{
  var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var i = 0;
  for (var i = 0; i == x; i++) {
    
  }
  return arr[i];
}

function checkDay(x)
{
  var arr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var i = 0;
  for (var i = 0; i == x; i++) {
    
  }
  return arr[i];
}