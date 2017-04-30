/**
 *  @file       script.js
 *  @version    0.1
 *  @date       2017-04-29
 *  @author     Vo, Nhu-Hoai Robert <nhuhoai.vo@nhuvo.ch>
 *  @copyright  NhuVo
 */

//
//  Font variables
//

/// Characters list for test size
var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '%', '/', '\'', '"', '?', '^', '!', '-', '_', ',', ';', '.', ':', '<', '>', '\\'];
/// Fonts list
var fonts = ["monospace", "DISPLAY FREE TFB", "Simple S", "Score Board"];
/// Max length size list
var sizes = [0, 0 , 0, 0];

//
//  LCD variables
//

/// Max cols
var max_cols = 100;
/// Max rows
var max_rows = 4;
/// max horizontal padding
var max_h_padding = 30;
/// max vertical padding
var max_v_padding = 30;
/// max border size
var max_border = 30;


/// Character simulator (calculating length char)
var character = document.getElementById("character");

for(f = 0; f < fonts.length; f++) {
  for(c = 0; c < characters.length; c++) {
    character.style.fontFamily = fonts[f];
    character.innerText = characters[c];
    if(character.offsetWidth > sizes[f]) {
      sizes[f] = character.offsetWidth;
    }
  }
}


var cols = document.getElementById("cols");

for(i = 1; i <= max_cols; i++) {
  var o = document.createElement("option");
  o.value = i;
  o.innerText = i;
  if(i == 16) {
    o.selected = "selected";
  }
  cols.appendChild(o);
}


var rows = document.getElementById("rows");

for(i = 1; i <= max_rows; i++) {
  var o = document.createElement("option");
  o.value = i;
  o.innerText = i;
  if(i == 2) {
    o.selected = "selected";
  }
  rows.appendChild(o);
}


var h_padding = document.getElementById("h_padding");

for(i = 1; i <= max_h_padding; i++) {
  var o = document.createElement("option");
  o.value = i;
  o.innerText = i;
  if(i == 5) {
    o.selected = "selected";
  }
  h_padding.appendChild(o);
}


var v_padding = document.getElementById("v_padding");

for(i = 1; i <= max_v_padding; i++) {
  var o = document.createElement("option");
  o.value = i;
  o.innerText = i;
  if(i == 5) {
    o.selected = "selected";
  }
  v_padding.appendChild(o);
}


var border_size = document.getElementById("border_size");

for(i = 1; i <= max_border; i++) {
  var o = document.createElement("option");
  o.value = i;
  o.innerText = i;
  if(i == 10) {
    o.selected = "selected";
  }
  border_size.appendChild(o);
}