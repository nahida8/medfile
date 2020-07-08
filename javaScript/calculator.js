function calc() {
  var name = document.getElementById("name").value;
  var date = document.getElementById("date").value;
  var id = document.getElementById("id").value;
  var age = document.getElementById("age").value;
  var eye = document.getElementById("eye").value;
  var k = document.getElementById("k").value;

  var k1 = parseFloat(document.getElementById("flatk1").value);
  var k1m = parseFloat.getElementById("flatk1m").value;
  var k2 = parseFloat(document.getElementById("steepk2").value);
  var k2m = parseFloat.getElementById("steepk2").value;
  var age = document.getElementById("age").value;
  var eye = document.getElementById("eye").value;
  var k = document.getElementById("k").value;

  var L = parseFloat(document.getElementById("alength").value);
  var method = document.getElementById("method").value;
  var A = parseFloat(document.getElementById("A").value);

  var k_avr = (k1 + k2) / 2;

  var information = {
    name: name,
    date: date,
    id: id,
    age: age,
    eye: eye,
    knotation: k,
  };

  var Keratometry = {
    k1: flatk1,
    k1m: k1m,
    k2: steepk2,
    k2m: k2m,
    eye: eye,
    knotation: k,
  };

  var Biometry = {
    L: L,
    method: method,
    A: A,
  };

  let result = A - 0.9 * k_avr - 2.5 * L;

  document.getElementById("result").value = result.toFixed(3);
}

function clearFields() {
  document.getElementById("flatk1").value = "";
  document.getElementById("steepk2").value = "";
  document.getElementById("A").value = "";
  document.getElementById("alength").value = "";
  document.getElementById("result").value = "";
}
