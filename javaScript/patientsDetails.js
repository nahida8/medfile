let patients = [
  {
    firstName: "Vincent",
    lastName: "Williamson",
    age: "31",
    surgeryDate: "13-Nov-2020",
    surgeryId: "10-32",
    treatment: "200",
    healthInsurance: "Macabi",
  },
  {
    firstName: "Vincent",
    lastName: "Williamson",
    age: "31",
    surgeryDate: "13-Nov-2020",
    surgeryId: "10-32",
    treatment: "200",
    healthInsurance: "Macabi",
  },
  {
    firstName: "Vincent",
    lastName: "Williamson",
    age: "31",
    surgeryDate: "13-Nov-2020",
    surgeryId: "10-32",
    treatment: "200",
    healthInsurance: "Macabi",
  },
  {
    firstName: "Vincent",
    lastName: "Williamson",
    age: "31",
    surgeryDate: "13-Nov-2020",
    surgeryId: "10-32",
    treatment: "200",
    healthInsurance: "Macabi",
  },
  {
    firstName: "sanad",
    lastName: "satel",
    age: "31",
    surgeryDate: "13-Nov-2020",
    surgeryId: "10-32",
    treatment: "200",
    healthInsurance: "Macabi",
  },
];

function addPatients() {
  patients.map((p) =>
    addRowToTable(
      p.firstName,
      p.lastName,
      p.age,
      p.surgeryDate,
      p.surgeryId,
      p.treatment,
      p.healthInsurance
    )
  );
}

function openAddPatientSection() {
  let patientsList = document.getElementById("patientsList");
  let addPatientDiv = document.getElementById("addPatientDiv");
  if (patientsList.style.display === "none") {
    patientsList.style.display = "block";
  } else {
    patientsList.style.display = "none";
  }

  if (addPatientDiv.style.display === "none") {
    addPatientDiv.style.display = "block";
  } else {
    addPatientDiv.style.display = "none";
  }
}

function addNewPatient() {
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let id = document.getElementById("id").value;
  let gender = document.getElementById("gender").value;
  let birthday = document.getElementById("bday").value;
  let age = document.getElementById("age").value;
  let company = document.getElementById("health_m").value;
  let policy = document.getElementById("pnum").value;
  let validity = document.getElementById("vuntil").value;
  let mobile = document.getElementById("mobile").value;
  let second_mobile = document.getElementById("mobile2").value;
  let fax = document.getElementById("fax").value;
  let email = document.getElementById("email").value;
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let zip = document.getElementById("zip").value;

  if (
    firstName !== "" &&
    lastName !== "" &&
    age !== "" &&
    validity !== "" &&
    id !== "" &&
    policy !== "" &&
    company !== ""
  )
    addRowToTable(firstName, lastName, age, validity, id, policy, company);
  clearPatientDetails();
  openAddPatientSection();
}

function addRowToTable(
  firstName,
  lastName,
  age,
  surgeryDate,
  surgeryId,
  treatment,
  healthInsurance
) {
  let row = document.createElement("div");
  row.classList.add("row");

  let firstNameCell = document.createElement("div");
  let lastNameCell = document.createElement("div");
  let ageCell = document.createElement("div");
  let surgeryDateCell = document.createElement("div");
  let surgeryIdCell = document.createElement("div");
  let treatmentCell = document.createElement("div");
  let healthInsuranceCell = document.createElement("div");

  let firstNameContent = document.createTextNode(firstName);
  let lastNameContent = document.createTextNode(lastName);
  let ageContent = document.createTextNode(age);
  let surgeryDateContent = document.createTextNode(surgeryDate);
  let surgeryIdContent = document.createTextNode(surgeryId);
  let treatmentContent = document.createTextNode(treatment);
  let healthInsuranceContent = document.createTextNode(healthInsurance);

  firstNameCell.appendChild(firstNameContent);
  lastNameCell.appendChild(lastNameContent);
  ageCell.appendChild(ageContent);
  surgeryDateCell.appendChild(surgeryDateContent);
  surgeryIdCell.appendChild(surgeryIdContent);
  treatmentCell.appendChild(treatmentContent);
  healthInsuranceCell.appendChild(healthInsuranceContent);

  firstNameCell.classList.add("cell");
  lastNameCell.classList.add("cell");
  ageCell.classList.add("cell");
  surgeryDateCell.classList.add("cell");
  surgeryIdCell.classList.add("cell");
  treatmentCell.classList.add("cell");
  healthInsuranceCell.classList.add("cell");

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(ageCell);
  row.appendChild(surgeryDateCell);
  row.appendChild(surgeryIdCell);
  row.appendChild(treatmentCell);
  row.appendChild(healthInsuranceCell);

  document.getElementById("mainDiv").appendChild(row);
}

function clearPatientDetails() {
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("id").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("bday").value = "";
  document.getElementById("age").value = "";
  document.getElementById("health_m").value = "";
  document.getElementById("pnum").value = "";
  document.getElementById("vuntil").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("mobile2").value = "";
  document.getElementById("fax").value = "";
  document.getElementById("email").value = "";
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  document.getElementById("address").value = "";
  document.getElementById("zip").value = "";
}

addPatients();
