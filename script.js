var count = 0;

for (var i = 0; i < 9; i++) {
  count = 9 * i;
  document.getElementsByClassName("box")[i].innerHTML =
    "<div class='cell'><input type='text' id='" +
    (count + 1) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 2) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 3) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 4) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 5) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 6) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 7) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 8) +
    "' class='input'></div><div class='cell'><input type='text' id='" +
    (count + 9) +
    "' class='input'></div>";
}

var level;
var choosen;

var easy_board = [
  "2-5---7--45---9----2-6-81----9---8567-------2418---2----43-7-1----1---85--6---7-8",
  "----35-86-1-9-7-----269----54------------527-9--75----7-6---3-----2-----56---2-14",
  "3-549-6----396--81-5-2--1494-276-1-39---583-46-1549--7-6-1-824558-7-3-924---7-3-6",
  "47----3-------179--4-93--5----6---7-48---------2716-34-9----6----6--2381---54--1-",
  "-2--18573-31--5-96---16----5--4-26--97--86--------98--1-6--79--2-5---8144-9-7---1",
];

var easy = [
  "215986734452869371527648193379124856781543692418937265864357219693172485936521748",
  "129735486213967854342691578543869127498315276981754632786421359675248193567832914",
  "315492678723964581857236149482765193916258374631549827967138245584713692429871356",
  "476285319523861794148932657123649578481397265952716834895137624976452381763548219",
  "429618573831245796382164957537492618974186325761259843186537942265793814459378621",
];

var medium_board = [
  "--6----9---75-1---1------9-9-7-25-8-3-----4-3-92-1-8-2------7---6-19--5-8----1--",
  "------27----793--892-5-63--5--87-3---34-5-79---3-87--5--63-2-819--614----57------",
  "6-5-384--2----1--9-1----9-------53--7--8-4--3--21-------7----9-8--9----6--978-3-5",
  "-8493--576--4----5---------2--84----4-1-7-6-2----28--3---------7----2--998--4721-",
  "43--7-2---2----1-----5--9-------349-741---865-241-------8--9-----6----4---7-3--61",
];

var medium = [
  "876345291982754163417638529493712568135826947359271684251968473746319825682594137",
  "834615279152793468921546387512879346634258791463987125796342581978614235857123469",
  "695138472243761589817356924428975361796854213532149687137264598851923476649782315",
  "184936257623498715372561849259847136491375682514928763673521894758162439986347215",
  "439671258825764193316582947612583497741239865924176358578429613396185742857934261",
];

var hard_board = [
  "7---5---1---2---6-----1-8-5------7--3-8----9-5--1-2---7-----9---4-3-----2---1----",
  "4--9-2-1-7--6-3---1--8---9-----2----8--5-7----4-----6---7--4---9-1--6-7-3-2--9---",
  "------4-9---2-8-3--2-7-4---8-9-2-5--6--7-9-8--2-4-7---5-1--6-3---4-1-9--8-5------",
  "-----9----7----4--1-4--5-6--1-7-8-6-2----1-9-4-6-7--8--3-5--2----3-6----5-----2--",
  "--4--7---1-9-6---8---3-----8--9---6--1--2-7--4---3--1-----7---2-3--9---6--7--4---",
];

var hard = [
  "795486231186237954432159687568912743314678592279345168927864315641593827853721469",
  "437961285218547369965382714759124638624839157183675492896253471371496825542718936",
  "156378492943215867278694351834962175691537284527841936465729813712483569389156742",
  "285749361761823954943165278354278196692314587178956423439687512817532649526491837",
  "134567892278195346569342178853921467927684513416753289392418675645279831781536924",
];

var very_hard_board = [
  "9-----8-----1-4--8-2-5-----7---2-9--5-----1--3-8---5-4-----6-5-9--8-----7-----2--",
  "-3-6----9--7-------8-3-7-2---1----5-6-4-8----7---4-2--1---7-9-3----1--2----9-5---",
  "------5--3-1-----9--2---8---6--7----4-1---9-2-----4-5---6--3-----8-1-5------7----",
  "5------8-4--2-7---3---6---8-1----6---7----4-3-----9-2---4---9-5--1--3-----1------",
  "4-8-1-----3---7-----9-5-----1----8---7--5---2-----1-----6-3-2--9---4-7---5-1-----",
];
var very_hard = [
  "947563812326187945185294367753628491694751283218439576431975628579816234862342159",
  "135629748927845361846317952279153684563498217418762593684231579752986134391574826",
  "678942513351687294924351876563714982297836145148295637736128459489573621215469738",
  "459613827817254963263978145584197236932486571671325498328741659195862374746539218",
  "491587236258634791367219548813965427726478359945723861182356974534197682679842135",
];

var hardest_board = [
  "--8---6---1----7--5-4---2---1----7----4-9---3-6----8----9--1---5----2-6-8---3----",
  "--5---9-2-6----3-9------5-8------4-----7---4----2-----2-3------8-4----1-9---7----",
  "7---2---5-1---6-----9-6-8-----1---2-9-----3-----7-4--1-----3-2---6---5---7-8-1---",
  "--9--7-8-3--2--9-----5--8-7---4--9---6-2-1-8--7---3-9--6---4--5--1-7--9-3--1--8--",
  "----9----6-8---4-5--7-1---3-2---5---9-----6-1---2-9---4-2--5-3----8----7----1--5-",
];

var hardest = [
  "438195672952367148617842953185624397326971584794583216261438759549216831873759426",
  "135684927249761358876593142582317694314926785967845213628459371493172568751638429",
  "796243158451689327823175694248951736679324581315768942164537289987412365532896417",
  "269471385734285169518936247387124956951768432642359718423697851195843672876512394",
  "124579683963814257857362194238145769795236841416987325682451937371698542549723816",
];

console.log(hardest_board[4].length);

function start() {
  for (var i = 0; i < 6; i++) {
    document
      .getElementsByClassName("label")
      [i].setAttribute("onclick", "return false;");
  }
  timer();

  if (document.getElementById("level1").checked) {
    level = "level1";
    choosen = Math.floor(Math.random() * 5);
    for (var i = 0; i < 81; i++) {
      if (easy_board[choosen][i] !== "-") {
        document.getElementById((i + 1).toString()).value =
          easy_board[choosen][i];
        document.getElementById((i + 1).toString()).readOnly = true;
      }
    }
  } else if (document.getElementById("level2").checked) {
    level = "level2";
    choosen = Math.floor(Math.random() * 5);
    for (var i = 0; i < 81; i++) {
      if (medium_board[choosen][i] !== "-") {
        document.getElementById((i + 1).toString()).value =
          medium_board[choosen][i];
        document.getElementById((i + 1).toString()).readOnly = true;
      }
    }
  } else if (document.getElementById("level3").checked) {
    level = "level3";
    choosen = Math.floor(Math.random() * 5);
    for (var i = 0; i < 81; i++) {
      if (hard_board[choosen][i] !== "-") {
        document.getElementById((i + 1).toString()).value =
          hard_board[choosen][i];
        document.getElementById((i + 1).toString()).readOnly = true;
      }
    }
  } else if (document.getElementById("level4").checked) {
    level = "level4";
    choosen = Math.floor(Math.random() * 5);
    for (var i = 0; i < 81; i++) {
      if (very_hard_board[choosen][i] !== "-") {
        document.getElementById((i + 1).toString()).value =
          very_hard_board[choosen][i];
        document.getElementById((i + 1).toString()).readOnly = true;
      }
    }
  } else if (document.getElementById("level5").checked) {
    level = "level5";
    choosen = Math.floor(Math.random() * 5);
    for (var i = 0; i < 81; i++) {
      if (hardest_board[choosen][i] !== "-") {
        document.getElementById((i + 1).toString()).value =
          hardest_board[choosen][i];
        document.getElementById((i + 1).toString()).readOnly = true;
      }
    }
  }

  document.getElementById("start").removeAttribute("onclick");
}

var id = setInterval(() => {
  if (level == "level1") {
    if (document.activeElement.className === "input") {
      if (
        document.getElementById(document.activeElement.id).value ===
          easy[choosen][document.activeElement.id - 1] ||
        document.getElementById(document.activeElement.id).value === ""
      ) {
        for (var i = 0; i < 81; i++) {
          if (
            i === 80 &&
            document.getElementById((81).toString()).value !== ""
          ) {
            alert("you win !! congratulation.....");
            clearInterval(id);
            window.location.reload();
          } else if (document.getElementById((i + 1).toString()).value === "") {
            break;
          }
        }
      } else {
        alert("you choose wrong number!!");
        document.activeElement.value = "";
      }
    }
  }
  if (level == "level2") {
    if (document.activeElement.className === "input") {
      if (
        document.getElementById(document.activeElement.id).value ===
          medium[choosen][document.activeElement.id - 1] ||
        document.getElementById(document.activeElement.id).value === ""
      ) {
        for (var i = 0; i < 81; i++) {
          if (
            i === 80 &&
            document.getElementById((81).toString()).value !== ""
          ) {
            alert("you win !! congratulation.....");
            clearInterval(id);
            window.location.reload();
          } else if (document.getElementById((i + 1).toString()).value === "") {
            break;
          }
        }
      } else {
        alert("you choose wrong number!!");
        document.activeElement.value = "";
      }
    }
  }
  if (level == "level3") {
    if (document.activeElement.className === "input") {
      if (
        document.getElementById(document.activeElement.id).value ===
          hard[choosen][document.activeElement.id - 1] ||
        document.getElementById(document.activeElement.id).value === ""
      ) {
        for (var i = 0; i < 81; i++) {
          if (
            i === 80 &&
            document.getElementById((81).toString()).value !== ""
          ) {
            alert("you win !! congratulation.....");
            clearInterval(id);
            window.location.reload();
          } else if (document.getElementById((i + 1).toString()).value === "") {
            break;
          }
        }
      } else {
        alert("you choose wrong number!!");
        document.activeElement.value = "";
      }
    }
  }
  if (level == "level4") {
    if (document.activeElement.className === "input") {
      if (
        document.getElementById(document.activeElement.id).value ===
          very_hard[choosen][document.activeElement.id - 1] ||
        document.getElementById(document.activeElement.id).value === ""
      ) {
        for (var i = 0; i < 81; i++) {
          if (
            i === 80 &&
            document.getElementById((81).toString()).value !== ""
          ) {
            alert("you win !! congratulation.....");
            clearInterval(id);
            window.location.reload();
          } else if (document.getElementById((i + 1).toString()).value === "") {
            break;
          }
        }
      } else {
        alert("you choose wrong number!!");
        document.activeElement.value = "";
      }
    }
  }
  if (level == "level5") {
    if (document.activeElement.className === "input") {
      if (
        document.getElementById(document.activeElement.id).value ===
          hardest[choosen][document.activeElement.id - 1] ||
        document.getElementById(document.activeElement.id).value === ""
      ) {
        for (var i = 0; i < 81; i++) {
          if (
            i === 80 &&
            document.getElementById((81).toString()).value !== ""
          ) {
            alert("you win !! congratulation.....");
            clearInterval(id);
            window.location.reload();
          } else if (document.getElementById((i + 1).toString()).value === "") {
            break;
          }
        }
      } else {
        alert("you choose wrong number!!");
        document.activeElement.value = "";
      }
    }
  }
}, 1000);

function replay() {
  for (var i = 0; i < 81; i++) {
    document.getElementById((i + 1).toString()).value = "";
  }
  start();
}

//timer
function timer() {
  if (document.getElementById("time1").checked == true) {
    document.getElementById("time_min").innerHTML =
      "0" + (document.getElementById("time1_min").innerHTML - 1).toString();
    document.getElementById("time_sec").innerHTML = "59";
  } else if (document.getElementById("time2").checked == true) {
    document.getElementById("time_min").innerHTML =
      "0" + (document.getElementById("time2_min").innerHTML - 1).toString();
    document.getElementById("time_sec").innerHTML = "59";
  } else {
    document.getElementById("time_min").innerHTML =
      "0" + (document.getElementById("time3_min").innerHTML - 1).toString();
    document.getElementById("time_sec").innerHTML = "59";
  }

  setInterval(() => {
    if (document.getElementById("time_sec").innerHTML == "00") {
      document.getElementById("time_sec").innerHTML = "59";
    } else {
      if (parseInt(document.getElementById("time_sec").innerHTML) <= 10) {
        document.getElementById("time_sec").innerHTML =
          "0" + (document.getElementById("time_sec").innerHTML - 1).toString();
      } else {
        document.getElementById("time_sec").innerHTML =
          document.getElementById("time_sec").innerHTML - 1;
      }
    }
  }, 1000);

  setInterval(() => {
    if (document.getElementById("time_min").innerHTML == "00") {
      document.getElementById("time_sec").innerHTML = "00";
      setTimeout(() => {
        alert("you lost !!");
      }, 50);
    } else {
      if (parseInt(document.getElementById("time_min").innerHTML) <= 10) {
        document.getElementById("time_min").innerHTML =
          "0" + (document.getElementById("time_min").innerHTML - 1).toString();
      } else {
        document.getElementById("time_min").innerHTML =
          document.getElementById("time_min").innerHTML - 1;
      }
    }
  }, 60 * 1000);
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
}
