
var d = new Date(),
    months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.getElementById("date").innerHTML = days;
return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear()
