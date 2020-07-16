let patients = [
  {
    firstName: "Nahida",
    lastName: "Sakis",
    id: "208520963",
    age: "31",
    mobile: "052-000-0200",
    email: "nahida.sakis@s.afeka.ac.il",
    healthInsurance: "Macabi",
  },
  {
    firstName: "karin",
    lastName: "Kakunda",
    id: "208520963",
    age: "31",
    mobile: "052-000-1511",
    email: "karin.kakunda@s.afeka.ac.il",
    healthInsurance: "Meuhedet",
  },
  {
    firstName: "Shalom",
    lastName: "Mendel",
    id: "208520963",
    age: "31",
    mobile: "052-000-2422",
    email: "shalom.mendel@s.afeka.ac.il",
    healthInsurance: "Leumit",
  },
  {
    firstName: "Mark",
    lastName: "Morcos",
    id: "208520963",
    age: "31",
    mobile: "052-000-3373",
    email: "mark.morcos@s.afeka.ac.il",
    healthInsurance: "Macabi",
  },
  {
    firstName: "sanad",
    lastName: "satel",
    id: "208520963",
    age: "31",
    mobile: "052-000-4844",
    email: "sanad.satel@s.afeka.ac.il",
    healthInsurance: "Leumit",
  },
  {
    firstName: "Nahida",
    lastName: "Sakis",
    id: "208520963",
    age: "31",
    mobile: "052-000-0200",
    email: "nahida.sakis@s.afeka.ac.il",
    healthInsurance: "Clalit",
  },
  {
    firstName: "karin",
    lastName: "Kakunda",
    id: "208520963",
    age: "31",
    mobile: "052-000-1511",
    email: "karin.kakunda@s.afeka.ac.il",
    healthInsurance: "Menorah",
  },
];

const getPatients = async () => {
  const response = await fetch(
    "http://localhost:3000/api/Patients/getPatients"
  );
  const patientRes = await response.json(); //extract JSON from the http response

  return patientRes;
};

const addPatients = async () => {
  const res = await getPatients();
  res.map((p) =>
    addRowToTable(
      p.fNAME,
      p.lNAME,
      p.ID,
      p.age,
      p.MobileNum,
      p.EmailAddress,
      p.HealthInsuranceCompany
    )
  );
};

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
    id !== "" &&
    age !== "" &&
    mobile !== "" &&
    email !== "" &&
    company !== ""
  )
    addRowToTable(firstName, lastName, id, age, mobile, email, company);
  clearPatientDetails();
  openAddPatientSection();
}

function addRowToTable(
  firstName,
  lastName,
  id,
  age,
  mobile,
  email,
  healthInsurance
) {
  let row = document.createElement("div");
  row.classList.add("row");

  let firstNameCell = document.createElement("div");
  let lastNameCell = document.createElement("div");
  let idCell = document.createElement("div");
  let ageCell = document.createElement("div");
  let mobileCell = document.createElement("div");
  let emailCell = document.createElement("div");
  let healthInsuranceCell = document.createElement("div");

  let firstNameContent = document.createTextNode(firstName);
  let lastNameContent = document.createTextNode(lastName);
  let idContent = document.createTextNode(id);
  let ageContent = document.createTextNode(age);
  let mobileContent = document.createTextNode(mobile);
  let emailContent = document.createTextNode(email);
  let healthInsuranceContent = document.createTextNode(healthInsurance);

  firstNameCell.appendChild(firstNameContent);
  lastNameCell.appendChild(lastNameContent);
  idCell.appendChild(idContent);
  ageCell.appendChild(ageContent);
  mobileCell.appendChild(mobileContent);
  emailCell.appendChild(emailContent);
  healthInsuranceCell.appendChild(healthInsuranceContent);

  firstNameCell.classList.add("cell");
  lastNameCell.classList.add("cell");
  idCell.classList.add("cell");
  ageCell.classList.add("cell");
  mobileCell.classList.add("cell");
  emailCell.classList.add("cell");
  healthInsuranceCell.classList.add("cell");

  row.appendChild(firstNameCell);
  row.appendChild(lastNameCell);
  row.appendChild(idCell);
  row.appendChild(ageCell);
  row.appendChild(mobileCell);
  row.appendChild(emailCell);
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
