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
  latestCup();

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
      //date = json["date"] + " 19:20";
      date = "2022-10-15 19:20"
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

function latestCup() {
  var str_late = "Sun, Sep 1 18:30";
  var strr = str_late.substr(4, str_late.length) + " 2022";
  var latest = new Date(strr);

  var t = convertTime(latest);

  dC.innerHTML = t[0];
  hC.innerHTML = t[1];
  mC.innerHTML = t[2];
  sC.innerHTML = t[3];
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
