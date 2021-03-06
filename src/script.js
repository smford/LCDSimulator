/**
 *  @file       script.js
 *  @version    1.0
 *  @date       2017-04-30
 *  @author     VO, Nhu-Hoai Robert <nhuhoai.vo@franicflow.ch>
 *  @copyright  FRANIC Flow Sàrl
 *  @brief      Main scripts
 */

//
//  Font variables
//

/// Fonts list
var font_families = ["monospace", "LCDDot TR", "DISPLAY FREE TFB", "Simple S", "Score Board"];
/// Default font
var font_family_default = "monospace";
/// Font family element
var font_family = $("#font_family");
/// Font sizes list
var font_sizes = [7, 9, 11, 13, 15, 17, 19, 21, 25, 29];
/// Default font size
var font_size_default = 13;
/// Font size element
var font_size = $("#font_size");
/// Font colors list
var font_colors = ["black", "blue", "green", "orange", "red", "white"];
/// Default font color
var font_color_default = "black";
/// Font color element
var font_color = $("#font_color");
/// Font max letter spacing (px)
var font_letter_spacing_max = 20;
/// Default letter spacing
var font_letter_spacing_default = 3;
/// Font letter spacing element
var font_letter_spacing = $("#font_letter_spacing");
/// Font letter size list
var font_letter_sizes = [0, 0, 0, 0];
/// Font letter height
var font_letter_heights = [0, 0, 0, 0];


//
//  LCD variables
//

/// LCD element
var lcd = $("#lcd");
/// LCD max cols
var lcd_cols_max = 40;
/// LCD default cols
var lcd_cols_default = 16;
/// LCD cols element
var lcd_cols = $("#lcd_cols");
/// LCD max rows
var lcd_rows_max = 6;
/// LCD default rows
var lcd_rows_default = 2;
/// LCD cols element
var lcd_rows = $("#lcd_rows");
/// LCD max padding
var lcd_padding_max = 30;
/// LCD default padding
var lcd_padding_default = 5;
/// LCD padding element
var lcd_padding = $("#lcd_padding");
/// LCD max border width
var lcd_border_width_max = 30;
/// LCD default border width
var lcd_border_width_default = 10;
/// LCD border width element
var lcd_border_width = $("#lcd_border_width");
/// LCD border colors
var lcd_border_colors = ["black", "blue", "green", "orange", "red", "white"];
/// LCD default border colors
var lcd_border_colors_default = "black";
/// LCD border color element
var lcd_border_color = $("#lcd_border_color");
/// LCD background colors list
var lcd_background_colors = ["black", "blue", "chartreuse", "olive", "white"];
/// LCD default border colors
var lcd_background_colors_default = "olive";
/// LCD border color element
var lcd_background_color = $("#lcd_background_color");


//
//  Methods
//

/**
 *  Init script when document is ready
 */
$(document).ready(function() {
  populateLists();
  $(".form-param").change(function() {updateParam()});
  $(".form-text").keyup(function() {updateText()});
  
  updateParam();
});

/**
 *  Some fonts are not monospace type this function get the longuest width char
 *  in each font.
 */
function calculateLetterSize() {
  /// Characters list for test size
  var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*', '%', '/', '\'', '"', '?', '^', '!', '-', '_', ',', ';', '.', ':', '<', '>', '\\'];
  /// Character element
  var character = $("<span></span>");
  
  // Add char test into document
  character.css("visibility", "hidden");
  $("body").append(character);
  
  for(f = 0; f < font_families.length; f++) {
    character.css({
      fontFamily: font_families[f],
      fontSize: font_size.val() + "pt"
    });
    for(c = 0; c < characters.length; c++) {
      character.text(characters[c]);
      if(character.width() > font_letter_sizes[f]) {
        font_letter_sizes[f] = character.width();
      }
      if(character.height() > font_letter_heights[f]) {
        font_letter_heights[f] = character.height();
      }
    }
  }
  
  character.remove();
}

/**
 *  Populate all select elements
 */
function populateLists() {
  // Populate font families
  for(var i = 0; i < font_families.length; i++) {
    var o = $("<option></option>");
    o.text(font_families[i]);
    o.val(i);
    if(font_families[i] == font_family_default) {
      o.prop("selected", true);
    }
    font_family.append(o);
  }
  
  // Populate font sizes
  for(var i = 0; i < font_sizes.length; i++) {
    var o = $("<option></option>");
    o.text(font_sizes[i]);
    if(font_sizes[i] == font_size_default) {
      o.prop("selected", true);
    }
    font_size.append(o);
  }
  
  // Populate font colors
  for(var i = 0; i < font_colors.length; i++) {
    var o = $("<option></option>");
    o.text(font_colors[i]);
    if(font_colors[i] == font_color_default) {
      o.prop("selected", true);
    }
    font_color.append(o);
  }
  
  // Populate font letter spacing
  for(var i = 0; i <= font_letter_spacing_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == font_letter_spacing_default) {
      o.prop("selected", true);
    }
    font_letter_spacing.append(o);
  }
  
  // Populate lcd cols
  for(var i = 1; i <= lcd_cols_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == lcd_cols_default) {
      o.prop("selected", true);
    }
    lcd_cols.append(o);
  }
  
  // Populate lcd rows
  for(var i = 1; i <= lcd_rows_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == lcd_rows_default) {
      o.prop("selected", true);
    }
    lcd_rows.append(o);
  }
  
  // Populate lcd rows
  for(var i = 1; i <= lcd_border_width_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == lcd_border_width_default) {
      o.prop("selected", true);
    }
    lcd_border_width.append(o);
  }
  
  // populate lcd padding
  for(var i = 1; i <= lcd_padding_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == lcd_padding_default) {
      o.prop("selected", true);
    }
    lcd_padding.append(o);
  }
  
  // Populate border colors
  for(var i = 0; i < lcd_border_colors.length; i++) {
    var o = $("<option></option>");
    o.text(lcd_border_colors[i]);
    o.val(i)
    if(lcd_border_colors[i] == lcd_border_colors_default) {
      o.prop("selected", true);
    }
    lcd_border_color.append(o);
  }
  
  // Populate background colors
  for(var i = 0; i < lcd_background_colors.length; i++) {
    var o = $("<option></option>");
    o.text(lcd_background_colors[i]);
    o.val(i)
    if(lcd_background_colors[i] == lcd_background_colors_default) {
      o.prop("selected", true);
    }
    lcd_background_color.append(o);
  }
}

/**
 *  Update LCD display style
 */
function updateParam() {
  // Empty elements
  lcd.html("");
  
  // Calculate letter size
  calculateLetterSize();
  
  // Update lcd display
  var lcd_width = (font_letter_sizes[font_family.val()] + (font_letter_spacing.val() * 2)) * lcd_cols.val() + (lcd_border_width.val()) * 2 + (lcd_padding.val()) * 2;
  
  // Update LCD display config
  lcd.css({
    fontFamily: font_families[font_family.val()],
    fontSize: font_size.val() + "pt",
    color: font_color.val(),
    width: lcd_width + "px",
    borderWidth: lcd_border_width.val() + "px",
    borderColor: lcd_border_colors[lcd_border_color.val()],
    backgroundColor: lcd_background_colors[lcd_background_color.val()],
    padding: lcd_padding.val()
  });
  
  $(".form-text").hide();
  
  // Create row
  for(var r = 0; r < lcd_rows.val(); r++) {
    var row = $("<div></div>");
    row.addClass("lcd_row");
    
    // Create each char
    for(var c = 0; c < lcd_cols.val(); c++) {
      var col = $("<span></span>");
      col.addClass("lcd_letter");
      col.attr("id", "c" + r + "_" + c);
      col.css({
        width: font_letter_sizes[font_family.val()] + "px",
        margin: "0 " + font_letter_spacing.val() + "px"
      });
      
      row.append(col);
    }
    
    lcd.append(row);
    $("#lcd_text_" + r).attr("maxlength", lcd_cols.val()).show();
  }
  
  updateText();
}

/**
 *  Update content in the LCD display
 */
function updateText() {
  for(var r = 0; r < lcd_rows.val(); r++) {
    var txt = $("#lcd_text_" + r).val();
    
    if(txt.length > lcd_cols.val()) {
      txt = txt.substring(0, lcd_cols.val());
      $("#lcd_text_" + r).val(txt);
    }
    
    while(txt.length < lcd_cols.val()) {
      txt += " ";
    }
    
    for(var c = 0; c < lcd_cols.val(); c++) {
      $("#c" + r + "_" + c).text(txt[c]);
    }
  }
}

/**
 *  Display fonts copyright
 */
function modal_fonts() {
  $("#myModalLabel").text("Fonts copyright");
  var content = "<ul><li><b><a href=\"http://www.dafont.com/fr/display-free-tfb.font\" target=\"_blank\">Display Free</a></b> by zanatlija on <a href=\"http://www.dafont.com\" target=\"_blank\">dafont.com</a></li>";
  content += "<li><b><a href=\"https://fontstruct.com/fontstructions/show/67177/lcddot\" target=\"_blank\">LCDDot TR</a></b> by BLackX on <a href=\"http://www.fontstruct.com\" target=\"_blank\">fontstruct.com</a></li>";
  content += "<li><b><a href=\"http://www.dafont.com/fr/score-board.font\" target=\"_blank\">Score Board</a></b> by Bou Fonts on <a href=\"http://www.dafont.com\" target=\"_blank\">dafont.com</a></li>";
  content += "<li><b><a href=\"http://www.dafont.com/fr/simple-s.font\" target=\"_blank\">Simple S</a></b> by Stralino on <a href=\"http://www.dafont.com\" target=\"_blank\">dafont.com</a></li>";
  content += "</ul>";
  $("#myModalBody").html(content);
  $("#myModal").modal();
}