var dL = document.getElementById("dL");
var hL = document.getElementById("hL");
var mL = document.getElementById("mL");
var sL = document.getElementById("sL");
var dC = document.getElementById("dC");
var hC = document.getElementById("hC");
var mC = document.getElementById("mC");
var sC = document.getElementById("sC");
var league = document.getElementById("league");
var cup = document.getElementById("cup");

function refreshData() {
  x = 1; // 5 Seconds

  latestLeague();

  setTimeout(refreshData, x * 1000);
}

function latestLeague() {
  var date = "";
  var s = "";
  fetch(
    "https://raw.githubusercontent.com/fryn4538/sirius-counter/main/latest.json"
  )
    .then((response) => response.json())
    .then((json) => {
      //date = json["date"] + " 16:54";
      date = "2023-05-27 19:25"
      s = json["result"];
      var latest = new Date(date);

      var t = convertTime(latest);

      dL.innerHTML = t[0];
      hL.innerHTML = t[1];
      mL.innerHTML = t[2];
      sL.innerHTML = t[3];

      league.innerHTML = s;
    });
}

function convertTime(date) {
  var current = new Date();

  const diffTime = Math.abs(current - date);
  var dT = Math.floor(diffTime / 8.64e7);
  var hT = Math.floor((diffTime % 8.64e7) / 3.6e6);
  var mT = Math.floor((diffTime % 3.6e6) / 6e4);
  var sT = Math.floor((diffTime % 6e4) / 1e3);

  return [dT, hT, mT, sT];
}

refreshData();
