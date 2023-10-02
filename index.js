var q1 = confirm("Milyoncu oyununu oynamaq isterdiniz mi?");

if (q1 == true) {
  console.log("Ela o zaman ilk once asand sualla baslayalim!");
  var q2 = prompt("Helsinki hansı ölkenin paytaxtidir");
  if (q2 == "Finlandiya") {
    console.log("Ela dogru tapdiniz.Siz 10 xal qazandiniz");
    console.log("Ikinci suala kecelim");
    var q3 = prompt("Algoritmayı ilk defe kim tapdi?");
    if (q3 == "Xarezmi") {
      console.log("Ela dogru tapdiniz.Siz 20 xal qazandiniz");
      console.log("O zaman ucuncu suala kecelim");
      var q4 = prompt(
        "Eureka!(Yunanca: Tapdim!) anlamina gelir. Bu soz hansi fizikci ile elaqelendirilir?"
      );
      if (q4 == "Arximed") {
        console.log("Ela dogru tapdiniz.Siz 30 xal qazandiniz");
        var answer = confirm("Siz oyuna davam etmek isteyirsiniz mi?");
        if (answer) {
          console.log("O zaman novbeti suala kecelim");
          var q5 = prompt(
            "Alternativ aximi tapan meshur muhendisin adi ve soyadini nedir? "
          );
          if (q5 == "Nikola Tesla") {
            console.log("Ela dogru tapdiniz.Siz 40 xal qazandiniz");
            alert("Beli siz qalib oldunuz tebrik edirem!");
          } else {
            console.log(
              "Teessuf ki siz yanlis cavabi verdiniz. 30 xal ile oyunu bitirdiniz"
            );
          }
        } else {
          console.log("Siz oyunu bitirdiniz. Toplam Xaliniz 30-dur");
        }
      }
    } else {
      console.log(
        "Teessuf ki siz yanlis cavabi verdiniz.20 xal ile oyunu bitirdiniz"
      );
    }
  } else {
    console.log("Teessuf ki siz yanlis cavabi verdiniz.Sizin Xaliniz 0-dir");
  }
} else {
  console.log("Teessuf ki siz yanlis cavabi verdiniz");
}
