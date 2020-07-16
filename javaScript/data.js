class PatientService {
  getPatients = async () => {
    const response = await fetch(
      "http://localhost:3000/api/Patients/getPatients"
    );
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
  };

  addPatient = async () => {
    const response = await fetch("http://example.com/movies.json", {
      method: "POST",
      body: myBody, // string or object
      headers: {
        "Content-Type": "application/json",
      },
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  };
}

module.exports = new PatientService();
