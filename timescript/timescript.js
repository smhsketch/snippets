function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let pm
  if (hour > 12) {
    hour -= 12;
    pm = " PM";
  } else if (hour == 00) {
    hour = 12
    pm = " AM"
  } else { pm = " AM"; }
  let min = date.getMinutes().toString();
  if (min.length < 2) { min = "0" + min; }
  let sec = date.getSeconds().toString();
  if (sec.length < 2) { sec = "0" + sec; }
  console.log(hour + ":" + min + ":" + sec + pm);
  setTimeout(getTime, 1000);
} getTime();