//dette henter alle person
var local = "http://localhost:8080/CA-2/api/";
var droplet = "http://vincentcph.dk/CA-2/api/";

var value = document.getElementById("PersonBy").value;
function getPersonBy(path) {
    
    fetch(local + "general/all/" + path+ value)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var rows = data.map(function (person) {
                
                return "<tr>" +
                    "<td>" + person.id + "</td>" +
                    "<td>" + person.fName + "</td>" +
                    "<td>" + person.lName + "</td>" +
                    "<td>" + person.email + "</td>" +
                    "<td>" + person.address.street + "</td>" +
                    "<td>" + person.address.additionalInfo + "</td>" +
                    "<td>" + person.address.cityInfo.city + "</td>" +
                    "<td>" + person.address.cityInfo.zipCode + "</td>" + 
                    "<td>" + person.phones[0].number + "</td>" + 
                    "<td>" + person.phones[0].description + "</td>" + 
                    "<td>" + person.hobbies[0].name + "</td>" + 
                    "<td>" + person.hobbies[0].description + "</td>" + 
                    
   
                    "</tr>";

            }).join("");
            document.getElementById("person").innerHTML = rows;
        });
}
var button1 = document.getElementById("PersonByPhoneButton");
button1.onclick = getPersonBy("/phone/");



var button2 = document.getElementById("PersonByCityButton");
button2.onclick = getPersonBy("city/");


/*
//dette henter alle addresser
var locala = "http://localhost:8080/CA-2/api/address/all";
var dropleta = "http://vincentcph.dk/CA-2/api/address/all";

fetch(locala)
    .then(res => res.json())
    .then(data => {
        console.log("data", data);
        var rows = data.map(function (address) {
            return "<tr>" +
                "<td>" + address.street + "</td>" +
                "<td>" + address.additionalInfo + "</td>" +
                "</tr>";
        }).join("");
        document.getElementById("address").innerHTML = rows;
    });

//dette henter alle zipcodes i danmark
var localz = "http://localhost:8080/CA-2/api/cityinfo/all";
var dropletz = "http://vincentcph.dk/CA-2/api/cityinfo/all";

fetch(localz)
    .then(res => res.json())
    .then(data => {
        console.log("data", data);
        var rows = data.map(function (cityinfo) {
            return "<tr>" +
                "<td>" + cityinfo.id + "</td>" +
                "<td>" + cityinfo.city + "</td>" +
                "<td>" + cityinfo.zipCode + "</td>";
        }).join("");

        document.getElementById("cityinfo").innerHTML = rows;
    });
//viser antallet af person i en given hobby
var localc = "http://localhost:8080/CA-2/api/hobby/all";
var dropletc = "http://vincentcph.dk/CA-2/api/hobby/all";
fetch(localc)
    .then(res => res.json())
    .then(data => {
        console.log("data", data);
        var rows = data.map(function (count) {
            return "<td>" + count + "</td>";
        }).join(" ");
        document.getElementById("co").innerHTML = rows.length;
    })


var toggle = document.getElementById("toggle");
var content = document.getElementById("content");

document.addEventListener("click", function (e) {
    if (e.target && e.target.id === 'toggle') {
        content.classList.toggle("show");
    }
});
*/