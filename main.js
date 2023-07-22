var cash = 0
var cashperclick = 1
var totalprinters = 1
var printers = 1
var gold = 0
function updatedisplays() {
  $("#display").text(cash + "$");
  $("#display1").text(cashperclick + "I");
  $("#display2").text(printers + "P");
  $("#display3").text(gold + "G");
  totalprinters = printers
}
$(document).ready(function(){
  $("#upgrade1").hide()
  $("#upgrade2").hide()
  $("#display1").hide()
  $("#display2").hide()
  $("#display3").hide()
  $("#printershop").hide()
  $("#goldlocked").hide()
  $("#goldshop").hide()
    $("#money").click(function(){
      cash += cashperclick * printers
      updatedisplays()
      if (cash >= 25) {
        $("#upgrade1").show();
        $("#display1").show();
      }
      if (cash >= 500) {
        $("#upgrade2").show();
        $("#display2").show();
      }
    });
    $("#upgrade1").click(function(){
      if (cash >= 25) {
        cashperclick += 1
        cash -= 25
        updatedisplays();
      }
    });
    $("#upgrade2").click(function(){
      if (cash >= 500) {
        printers += 1
        cash -= 500
        updatedisplays()
      }
      if (cashperclick >= 50 & printers >= 25) {
        $("#printershop").show();
        $("#display3").show();
      }
    });
    $("#upgrade3").click(function(){
      if (printers >= 25) {
        gold += 1
        if (gold >= 5) {
          $("#goldshop").show()
        }
        $("#goldlocked").show()
        printers -= 25
        updatedisplays()
        }
      })
    });