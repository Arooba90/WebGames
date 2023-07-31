function moving() {
    // to add date 
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // to print output
    document.getElementById("movingtext").innerHTML = "Welcome to Clinicom Oman website! Today is " + date + ", and the time is " + time;
}

window.onload = function() {
    moving();
}