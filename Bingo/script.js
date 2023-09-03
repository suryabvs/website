boxes = [];
Gamestatus = false;
num = 1;
selected = [];
win = 0;
bingo = ["b", "i", "n", "g", "o"];
Winstatus = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];

function numbering(ind, box) {
  if (Gamestatus == false) {
    if (document.getElementById(box).innerText > 0) {
      alert("Already filled!");
      return;
    }
    document.getElementById(box).innerText = num;
    boxes[ind] = num;
    num++;
  }
  if (Gamestatus) {
    if (iswin(win)) {
      return;
    }
    coloring(ind, box);
    check();
  }
}

function coloring(ind, box) {
  if (selected[ind] == true) {
    alert("Already selected!");
    return;
  }
  selected[ind] = true;
  document.getElementById(box).style.backgroundColor = "#ff751a";
  document.getElementById(box).style.color = "#f2f2f2";
}

function start_game() {
  if (isfilled(boxes)) {
    document.getElementById("bingo").style.display = "block";
    document.getElementById("start").style.display = "none";
    Gamestatus = true;
  } else {
    alert("Fill all the boxes!");
  }
}

function isfilled(box) {
  for (i = 0; i < 25; i++) {
    if (box[i] == undefined) {
      return false;
    }
  }
  return true;
}

function check() {
  for (i = 0; i < Winstatus.length; i++) {
    if (strikeout(i)) {
      one = Winstatus.slice(0, i);
      two = Winstatus.slice(i + 1, Winstatus.length);
      Winstatus = one.concat(two);
      console.log(Winstatus);
    }
  }
}

function strikeout(i) {
  res = true;
  for (j = 0; j < Winstatus[i].length; j++) {
    if (selected[Winstatus[i][j]] != true) {
      res = false;
      return res;
    }
  }
  if (res) {
    console.log(win);
    document.getElementById(bingo[win]).style.color = "#00cc00";
    win++;
    return res;
  }
}

function iswin(n) {
  if (n >= 5) {
    alert("Win!");
    return true;
  }
}
