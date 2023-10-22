p = 1;

box = new Array(9);

function fill(i, b) {
  res = win();
  if (res == "X") {
    Swal.fire({ html: "<pre class='mess'>'X'   is win</pre>" });
    return;
  } else if (res == "O") {
    Swal.fire({ html: "<pre class='mess'>'O'   is win</pre>" });
    return;
  } else if (res == "D") {
    Swal.fire("Draw");
    return;
  }
  if (box[i] != undefined) {
    Swal.fire("Already filled!");
    return;
  }
  if (p % 2 != 0) {
    with (document.getElementById(b)) {
      style.color = "#ff4d4d";
      innerText = "X";
    }
    box[i] = "X";
  } else {
    with (document.getElementById(b)) {
      style.color = "#4d4dff";
      innerText = "O";
    }
    box[i] = "O";
  }
  p++;
  res = win();
  if (res == "X") {
    Swal.fire({ html: "<pre class='mess'>'X'   is win</pre>" });
    return;
  } else if (res == "O") {
    Swal.fire({ html: "<pre class='mess'>'O'   is win</pre>" });
    return;
  } else if (res == "D") {
    Swal.fire("Draw");
    return;
  }
}

function win() {
  winX =
    (box[0] == "X" && box[1] == "X" && box[2] == "X") ||
    (box[3] == "X" && box[4] == "X" && box[5] == "X") ||
    (box[6] == "X" && box[7] == "X" && box[8] == "X") ||
    (box[0] == "X" && box[3] == "X" && box[6] == "X") ||
    (box[1] == "X" && box[4] == "X" && box[7] == "X") ||
    (box[2] == "X" && box[5] == "X" && box[8] == "X") ||
    (box[0] == "X" && box[4] == "X" && box[8] == "X") ||
    (box[2] == "X" && box[4] == "X" && box[6] == "X");

  winY =
    (box[0] == "O" && box[1] == "O" && box[2] == "O") ||
    (box[3] == "O" && box[4] == "O" && box[5] == "O") ||
    (box[6] == "O" && box[7] == "O" && box[8] == "O") ||
    (box[0] == "O" && box[3] == "O" && box[6] == "O") ||
    (box[1] == "O" && box[4] == "O" && box[7] == "O") ||
    (box[2] == "O" && box[5] == "O" && box[8] == "O") ||
    (box[0] == "O" && box[4] == "O" && box[8] == "O") ||
    (box[2] == "O" && box[4] == "O" && box[6] == "O");
  if (winX) {
    return "X";
  } else if (winY) {
    return "O";
  } else if (p > box.length) {
    return "D";
  }
}
