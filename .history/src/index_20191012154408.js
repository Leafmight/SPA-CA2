var local = "http://localhost:8080/CA-2/api/address/all";
var droplet = "https://localhost:8080/CA-2/api/address/all";

// Error Handler
function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

fetch(local)
        .then(res => res.json())
        .then(data =>{
            console.log("data", data);
        var rows = data.map(function (address){
            return "<tr>" +
                    "<td>" + address.street + "</td>" + 
                    "<td>" + address.additionalInfo + "</td>" +
                    "</tr>";
        }).join("");
       document.getElementById("address").innerHTML = rows;
});

var toggle = document.getElementById("toggle");
var content = document.getElementById("content");

document.addEventListener("click", function(e){
    if(e.target && e.target.id === 'toggle'){
    content.classList.toggle("show");
    }
});

$(document).ready(function() {
var i = 1;
  $('.addp').on('click', function() {
    var field = '<br><input type="text" name="#'+i+'" placeholder="#">&nbsp<input type="text" name="desc'+i+'" placeholder="Desc">';
    $('.phone').append(field);
    i = i+1;
  });
});

$(document).ready(function() {
var i = 1;
  $('.addh').on('click', function() {
    var field1 = '<br><input type="text" name="name'+ i + '" placeholder="name">&nbsp<input type="text" name="desc'+i+'" placeholder="Desc">';
    $('.hobby').append(field1);
    i = i+1;
  });
});
// Event Button
var buttonEvent1 = document.getElementById("outer");
buttonEvent1.addEventListener("click", eventHandler, false);

function eventHandler(e) {

    if (e.target == document.getElementById("b1")){
        console.log("Adding Person");
        var fName = document.getElementById("fname").value;
        var lName = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var street = document.getElementById("street").value;
        var additionalInfo = document.getElementById("adinfo").value;
        var zipcode = document.getElementById("zip").value;
        var city = document.getElementById("city").value;
        var number = document.getElementById("number").value;
        var phDesc = document.getElementById("phdesc").value;
        var hName = document.getElementById("hname").value;
        var hDesc = document.getElementById("hdesc").value;

        function CityInfo(){
            this.city = city;
            this.zipCode = zipcode;
        }

        function Address(){
            this.street = street;
            this.additionalInfo = additionalInfo;
            this.cityInfo = new CityInfo();
        }
        
        function Phone(){
            this.number = number;
            this.description = phDesc;
        }

        function Hobby(){
            this.name = hName;
            this.description = hDesc;
        }

        function Person() {
            this.fName = fName;
            this.lName = lName;
            this.email = email;
            this.address = new Address();
            this.phones = new Phone();
            this.hobbies = new Hobby();
        }

        const data = new Person();
        console.log(JSON.stringify(data));
        
        const options = makeOptions("POST", data);
/*
        function makeOptions(method, body) {
            var opts = {
                method: method,
                headers: {
                    "Content-type": "application/json"
                }
            }
            if (body) {
                opts.body = JSON.stringify(body);
            }
            return opts;
        }
        fetch("http://localhost:8080/CA-2/api/general/add", options);
        */
    }
    console.log(e.target);
}