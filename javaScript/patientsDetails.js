function addNewPatient() {
  var firstName = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var id = document.getElementById("id").value;
  var gender = document.getElementById("gender").value;
  var birthday = document.getElementById("bday").value;
  var age = document.getElementById("age").value;
  var company = document.getElementById("health_m").value;
  var policy = document.getElementById("pnum").value;
  var validity = document.getElementById("vuntil").value;
  var mobile = document.getElementById("mobile").value;
  var second_mobile = document.getElementById("mobile2").value;
  var fax = document.getElementById("fax").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var city = document.getElementById("city").value;
  var address = document.getElementById("address").value;
  var zip = document.getElementById("zip").value;

  var patient = {
    firstName: firstName,
    lastName: lastName,
    id: id,
    gender: gender,
    birthday: birthday,
    age: age,
  };

  var healthinsurance = {
    company: company,
    policy: policy,
    validity: validity,
  };

  var connection = {
    mobile: mobile,
    second_mobile: second_mobile,
    fax: fax,
    email: email,
    country: country,
    city: city,
    address: address,
    zip: zip,
  };

  console.log(patient);
  console.log(healthinsurance);
  console.log(connection);
  //addRowToTable();
}

// function addRowToTable() {
//     var divElement = document
//       .getElementById("iframeId")
//       .contentWindow.document.getElementById("mainDiv");

//   document.getElementById("targetParentId").appendChild(divElement);
//   var element = document.createElement("div");
//   element.appendChild(
//     document.createTextNode("The man who mistook his wife for a hat")
//   );
//   divElement.appendChild(element);
//   window.location.href = "patients_list.html";
// }

let table = document.querySelector("table");
let mountains = [
  { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
  { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
  { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
  { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
  { name: "Monte Amiata", height: 1738, place: "Siena" },
];
let data = Object.keys(mountains[0]);
function generateTableHead(table, data) {
  let thead = table.createTHead();

  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

// generateTableHead(table, data);
// generateTable(table, mountains);
