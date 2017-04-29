/**
 *  @file       script.js
 *  @version    0.1
 *  @date       2017-04-29
 *  @author     Vo, Nhu-Hoai Robert <nhuhoai.vo@nhuvo.ch>
 *  @copyright  NhuVo
 */

var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '%', '/', '\'', '"', '?', '^', '!', '-', '_', ',', ';', '.', ':', '<', '>', '\\'];
var fonts = ["DISPLAY FREE TFB", "Simple S", "Score Board", "monospace"];
var sizes = [0, 0 , 0, 0];
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

character.style.display = "none";