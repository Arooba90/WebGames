var mazin = { name: "Mazin", phone: "92494935", Email: "Mazin@gmail.com", Date: "13/5/2022" }
var abdulaziz = { name: "Abdulaziz", phone: "97797756", Email: "Abdo@gmail.com", Date: "17/4/2022" }
var Hamood = { name: "Hamood", phone: "98984545", Email: "0cool@gmail.com", Date: "11/6/2022" }
var mohammed = { name: "Mohammed", phone: "90908787", Email: "Mohd@gmail.com", Date: "10/9/2022" }
var nRows = 0;


var patientsList = [mazin, abdulaziz, Hamood, mohammed];


function patients() {
    // get table document object
    var t1 = document.getElementById("appont-table");

    // get number of rows that already exist and delete them
    var n = t1.rows.length;
    for (var x = n - 1; x >= 0; x--) t1.deleteRow(x);

    // heading for the table
    var tr = t1.insertRow(0);

    var cell = tr.insertCell(0);
    cell.innerText = "Name";
    cell.style.fontWeight = "bold"

    var cell = tr.insertCell(1);
    cell.innerText = "Phone";
    cell.style.fontWeight = "bold"

    var cell = tr.insertCell(2);
    cell.innerText = "Email";
    cell.style.fontWeight = "bold"

    var cell = tr.insertCell(3);
    cell.innerText = "Date";
    cell.style.fontWeight = "bold"



    // populate table with data
    for (var i = 0; i < patientsList.length; i++) {
        var tr = t1.insertRow(i + 1);

        var cell = tr.insertCell(0);
        cell.innerText = patientsList[i].name;

        var cell = tr.insertCell(1);
        cell.innerText = patientsList[i].phone;

        var cell = tr.insertCell(2);
        cell.innerText = patientsList[i].Email;

        var cell = tr.insertCell(3);
        cell.innerText = patientsList[i].Date;
    }
    return patientsList;
}
// add patient to the list of patients
function addPatient() {
    var pName = document.getElementById("name").value;
    var pNumber = document.getElementById("phone").value;
    var pEmail = document.getElementById("email").value;
    var pDate = document.getElementById("date").value;
    var patientsList = patients();
    var newPatient = { name: pName, phone: pNumber, Email: pEmail, Date: pDate };
    patientsList.push(newPatient);
    localStorage.setItem("jpatients", JSON.stringify(patientsList));
    patients();
}


function searchF() {
    // Declare variables
    var input, filter, i, flag;
    input = document.getElementById("searchIn").value;
    filter = input.toUpperCase();
    // loop trough patients array

    for (var i = 0; i < patientsList.length; i++) {
        var name = patientsList[i].name.toUpperCase();
        if (name === filter) {
            alert(" found!");
            flag = true;
        }
    }
    if (!flag) {
        alert("Patient Not Found!");
    }
}