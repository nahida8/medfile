function addNewProcedure() {
  var name = document.getElementById("name").value;
  var id = document.getElementById("id").value;
  var eye = document.getElementById("eye").value;
  var flatk1 = document.getElementById("flatk1").value;
  var steepk2 = document.getElementById("steepk2").value;
  var alength = document.getElementById("alength").value;

  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var pid = document.getElementById("pid").value;
  var lens = document.getElementById("lens").value;
  var backup = document.getElementById("backup").value;
  var power = document.getElementById("power").value;
  var cyl = document.getElementById("cyl").value;
  var flacs = document.getElementById("flacs").value;
  var diagnosis = document.getElementById("diagnosis").value;
  var note = document.getElementById("note").value;

  var health_m = document.getElementById("health_m").value;
  var pnum = document.getElementById("pnum").value;
  var pay = document.getElementById("pay").value;
  var reference = document.getElementById("reference").value;
  var institution = document.getElementById("institution").value;
  var room = document.getElementById("room").value;

  var physicianPatient = {
    physicianName: name,
    patientID: id,
    eyeselection: eye,
    flatk1: flatk1,
    steepk2: steepk2,
    alength: alength,
  };

  var PlannedProcedure = {
    date: date,
    time: time,
    ProcedureID: pid,
    lens: lens,
    backupLens: backup,
    IOLPower: power,
    Cylinder: cyl,
    flacs: flacs,
    diagnosis: diagnosis,
    note: note,
  };

  var Location = {
    health_m: health_m,
    pnum: pnum,
    pay: pay,
    reference: reference,
    institution: institution,
    room: room,
  };

  console.log(physicianPatient);
  console.log(PlannedProcedure);
  console.log(Location);
}
