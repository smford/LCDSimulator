/**
 *  @file       script.js
 *  @version    0.1
 *  @date       2017-04-30
 *  @author     VO, Nhu-Hoai Robert <nhuhoai.vo@franicflow.ch>
 *  @copyright  FRANIC Flow Sàrl
 *  @brief      Main scripts
 */

//
//  Font variables
//

/// Fonts list
var font_families = ["monospace", "DISPLAY FREE TFB", "Simple S", "Score Board"];
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


//
//  LCD variables
//


//
//  Methods
//

/**
 *
 */
$(document).ready(function() {
  populateLists();
});

/**
 *  
 */
function populateLists() {
  // Populate font families
  for(var i = 0; i < font_families.length; i++) {
    var o = $("<option></option>");
    o.text(font_families[i]);
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
  for(var i = 1; i <= font_letter_spacing_max; i++) {
    var o = $("<option></option>");
    o.text(i);
    if(i == font_letter_spacing_default) {
      o.prop("selected", true);
    }
    font_letter_spacing.append(o);
  }
}