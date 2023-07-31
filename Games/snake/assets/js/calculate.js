let total = 0;
let nAdol = 0;
let nPandol = 0;
let nVento = 0;
let nbiotic = 0;
let nVapo = 0;
let nBand = 0;
let nStrep = 0;
let nElastic = 0;
let discounted = 1;

function getTotal() {

    total = (nAdol * 2) + (nPandol * 1) + (nVento * 1.5) + (nbiotic * 3) + (nVapo * 0.5) + (nBand * 0.8) + (nStrep * 1) + (nElastic * 1.8);
    total *= discounted;
    document.getElementById("total").innerHTML = total + "  OMR";
    return total
}



//get total for adol
function adol() {
    nAdol += 1
    document.getElementById("adol_num").innerHTML = nAdol
    getTotal();
}

function rm_adol() {
    if (nAdol > 0) {
        nAdol -= 1
        document.getElementById("adol_num").innerHTML = nAdol
        getTotal();
    }
}


// ge total for panadol
function panadol() {
    nPandol += 1
    document.getElementById("panadol_num").innerHTML = nPandol
    getTotal();
}

function rm_panadol() {
    if (nPandol > 0) {
        nPandol -= 1
        document.getElementById("panadol_num").innerHTML = nPandol
        getTotal();
    }
}


//get total for ventolin
function ventolin() {
    nVento += 1;
    document.getElementById("ventolin_num").innerHTML = nVento;
    getTotal();
}

function rm_ventolin() {
    if (nVento > 0) {
        nVento -= 1;
        document.getElementById("ventolin_num").innerHTML = nVento;
        getTotal();
    }
}


// get total for antiBiotics
function biotic() {
    nbiotic += 1;
    document.getElementById("biotic_num").innerHTML = nbiotic;
    getTotal();
}

function rm_biotic() {
    if (nbiotic > 0) {

        nbiotic -= 1
        document.getElementById("biotic_num").innerHTML = nbiotic;
        getTotal();
    }
}


// get total  for vaporub
function vaporub() {
    nVapo += 1;
    document.getElementById("vaporub_num").innerHTML = nVapo;
    getTotal();
}

function rm_vaporub() {
    if (nVapo > 0) {

        nVapo -= 1;
        document.getElementById("vaporub_num").innerHTML = nVapo;
        getTotal();
    }
}


// get total for bandaid
function bandaid() {

    nBand += 1;
    document.getElementById("bandaid_num").innerHTML = nBand;
    getTotal();
}

function rm_bandaid() {
    if (nBand > 0) {
        nBand -= 1;
        document.getElementById("bandaid_num").innerHTML = nBand;
        getTotal();
    }
}


// get total for streplis
function streplis() {
    nStrep += 1;
    document.getElementById("streplis_num").innerHTML = nStrep;
    getTotal();
}

function rm_streplis() {
    if (nStrep > 0) {
        nStrep -= 1
        document.getElementById("streplis_num").innerHTML = nStrep;
        getTotal();
    }
}

// get total for knee
function knee() {
    nElastic += 1
    document.getElementById("knee_num").innerHTML = nElastic
    getTotal();
}

function rm_knee() {
    if (nElastic > 0) {
        nElastic -= 1
        document.getElementById("knee_num").innerHTML = nElastic
        getTotal();
    }
}






// discount
function discount() {
    var dis = document.getElementById("discount_code").value;
    if (dis == "15OF") {
        discounted = 0.85;
        document.getElementById("disc-msg").innerHTML = "congrats, U got a 15% discount"
        document.getElementById("discount_charge").innerHTML = discounted;
        document.getElementById("total").innerHTML = total + "  OMR";
        document.getElementById("discount_code").setAttribute('readonly', 'readonly')
        getTotal();
        discount = sudo;
    } else {
        document.getElementById("disc-msg").innerHTML = "Invalid discount code";
    }
}

function sudo() {

}

function back() {
    sudo = discountpic
}



//products XHTML table functions
var pAdol = { name: "adol", pic: "assets/imgs/adol2.png", price: "2", add: "adol", del: "rm_adol()", id: "adol_btn", spn: "adol_num" };
var pPanadol = { name: "panadol", pic: "assets/imgs/panadol.avif", price: "1", add: "panadol", del: "rm_panadol()", id: "panadol_btn" };
var pVentolin = { name: "ventolin", pic: "assets/imgs/ventolin.png", price: "1.5", add: "ventolin", del: "rm_ventolin()", id: "ventolin_btn" };
var pAntiBiotic = { name: "antiBiotic", pic: "assets/imgs/anitbiotics.png", price: "3", add: "biotic", del: "rm_biotic()", id: "anitbio_btn" };
var pVaporub = { name: "vaporub", pic: "assets/imgs/vaporub.png", price: "0.5", add: "vaporub", del: "rm_vaporub()", id: "vaporub_btn" };
var pBandaid = { name: "bandaid", pic: "assets/imgs/bandaid.png", price: "0.8", add: "bandaid", del: "rm_bandaid()", id: "bandaid_btn" }
var pStrepslis = { name: "strepslis", pic: "assets/imgs/strepsils.png", price: "1", add: "streplis", del: "rm_streplis()", id: "strepsils_btn" };
var pElastic = { name: "elastic", pic: "assets/imgs/elasticknee.png", price: "1.8", add: "knee", del: "rm_knee()", id: "elastic_btn" };
var products = [pAdol, pPanadol, pVentolin, pAntiBiotic, pVaporub, pBandaid, pStrepslis, pElastic];




function loadProducts() {
    // get table document object
    var t1 = document.getElementById("productsTable");
    // for (var x = pRows - 1; x >= 0; x--) t1.deleteRow(x);
    //get num of rows
    var numRows = products.length / 4;
    // populate table with data
    for (var i = 0; i < numRows; i++) {
        var tr = t1.insertRow(i);
        for (var j = 0; j < 4; j++) {
            if (i == 0) {
                var cell = tr.insertCell(j);
                cell.innerHTML = "<img src=" + products[j].pic + " alt='dsdsd' height='200px'>";
                cell.style.padding = "15px 60px 0px 0px";
                cell.innerHTML += "<button id=" + products[j].id + " style='margin: 10px 0px 2px 30px;' type='button' class='btn btn-outline-success' onclick=" + products[j].add.concat("()") + ">Add to cart <br> " + products[j].price + " OMR</button>";
                cell.innerHTML += "<button id=" + products[j].id + " style='margin: 10px 0px 2px 5px;' type='button' class='btn btn-outline-danger' onclick=" + products[j].del + ">X</button>";
                cell.innerHTML += "<span style='margin:85px 0px 0px 10px' id=" + products[j].add.concat("_num") + ">0</span>"
            } else if (i == 1) {
                var cell = tr.insertCell(j);
                cell.innerHTML = "<img src=" + products[j + 4].pic + " alt='dsdsd' height='200px'>";
                cell.style.padding = "15px 60px 0px 0px";
                cell.innerHTML += "<button id=" + products[j + 4].id + " style='margin: 10px 0px 2px 30px;' type='button' class='btn btn-outline-success' onclick=" + products[j + 4].add.concat("()") + ">Add to cart <br> " + products[j + 4].price + " OMR</button>";
                cell.innerHTML += "<button id=" + products[j + 4].id + " style='margin: 10px 0px 2px 5px;' type='button' class='btn btn-outline-danger' onclick=" + products[j + 4].del + ">X</button>";
                cell.innerHTML += "<span style='margin:85px 0px 0px 10px' id=" + products[j + 4].add.concat("_num") + ">0</span>"

            }
        }


    }
}
var ncell = 0;

function addProduct() {
    newName = document.getElementById("name").value;
    newPrice = document.getElementById("price").value;
    var newProduct = { name: newName, pic: "assets/imgs/NewItem.png", price: newPrice, add: "", del: "", id: "new_item", spn: "" };
    // get table document object
    var t1 = document.getElementById("productsTable");
    var pRows = t1.rows.length;
    var tr = t1.insertRow(pRows);

    var cell = tr.insertCell(ncell);
    cell.innerHTML = "<img src=" + newProduct.pic + " alt='dsdsd' height='200px'>";
    cell.style.padding = "15px 60px 0px 0px";
    cell.innerHTML += "<button id=" + newProduct.id + " style='margin: 10px 0px 2px 30px;' type='button' class='btn btn-outline-success' onclick=" + newProduct.add.concat("()") + ">Add to cart <br> " + newProduct.price + " OMR</button>";
    cell.innerHTML += "<button id=" + newProduct.id + " style='margin: 10px 0px 2px 5px;' type='button' class='btn btn-outline-danger' onclick=" + newProduct.del + ">X</button>";
    cell.innerHTML += "<span style='margin:85px 0px 0px 10px' id=" + newProduct.add.concat("_num") + ">0</span>"
    ncell += 1;
}


function searchpd() {
    // Declare variables
    var input, filter, i, flag;
    input = document.getElementById("searchPd").value;
    filter = input.toUpperCase();
    // loop trough products array

    for (var i = 0; i < products.length; i++) {
        var name = products[i].name.toUpperCase();
        if (name === filter) {
            alert(" found!");
            flag = true;
        }
    }
    if (!flag) {
        alert("No product found!");
    }
}