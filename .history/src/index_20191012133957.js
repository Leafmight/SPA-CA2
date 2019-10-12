var local = "http://localhost:8080/CA-2/api/address/all";
var droplet = "https://localhost:8080/CA-2/api/address/all";

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