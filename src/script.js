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

/// LCD element (DOM)
var lcd = document.getElementById("lcd");
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
/// LCD text
var lcd_text = document.getElementById("lcd_text");


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

var font_size = document.getElementById("font_size");
var border_color = document.getElementById("border_color");
var font_color = document.getElementById("font_color");
var background_color = document.getElementById("background_color");

function display_row(row, txt) {
  while(txt.length < max_cols) {
    txt += " ";
  }
  
  for(i = 0; i < txt.length; i++) {
    document.getElementById("c" + row + "_" + i).innerText = txt.charAt(i);
  }
}

function generate_lcd() {
  lcd.innerHTML = "";
  lcd.style.borderWidth = border_size.value + "px";
  lcd.style.borderStyle = "solid";
  lcd.style.borderColor = border_color.value;
  lcd.style.backgroundColor = background_color.value;
  
  lcd_text.innerHTML = "";
  
  for(r = 0; r <= rows.value; r++) {    
    var row = document.createElement("span");
    row.id = "r" + r;
    row.style.paddingTop = v_padding + "px";
    row.style.paddingBottom = v_padding + "px";
    
    var input = "<p><b>Line " + (r + 1) + "</b><br /><input type=\"text\" maxlength=\"" + cols.value + "\" size=\"" + cols.value + "\" onkeyup=\"display_row(" + r + ", this.value)\" /></p>";
    lcd_text.innerHTML += input;
    
    for(c = 0; c < cols.value; c++) {
      var col = document.createElement("span");
      col.style.display = "inline-block";
      col.style.width = cols.value + "px";
      col.style.paddingLeft = h_padding + "px";
      col.style.paddingRight = h_padding + "px";
      col.style.textAlign = "center";
      col.id = "c" + r + "_" + c;
      c.innerText = "&nbsp;";
      row.appendChild(col);
    }
    row.appendChild(document.createElement("br"));
    
    lcd.appendChild(row);
    lcd.style.width = row.offsetWidth + "px";
  }
}