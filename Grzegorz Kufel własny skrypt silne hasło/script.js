var hasło = prompt("Podaj hasło");
var liczby = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var małe_litery = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u' , 'v', 'w','x','y', 'z', 'ź', 'ż'];
var duże_litery = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W','X', 'Y', 'Z', 'Ź', 'Ż'];
var znaki_specjalne = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '/', '?', '<', '>', ',', '.', '"', ';', ":", "'", '`', '|', "/", "[", "]", "{", "}"];
var sprawdzanie1 = 0, sprawdzanie2 = 0, sprawdzanie3 = 0, sprawdzanie4 = 0;

  
if (hasło == null) {
  alert("Niepodano hasła");
  window.location.reload();
}

function liczba(liczby) {
  for(i = 0; i < hasło.length; i++) {
    for(a = 0; a < liczby.length; a++) {
        if(hasło.charAt(i) == liczby[a]) {
            sprawdzanie1++;
        }
    }
  }
  return sprawdzanie1;
}

function małe(małe_litery) {
  for(i = 0; i < hasło.length; i++) {
    for(a = 0; a < małe_litery.length; a++) {
        if(hasło.charAt(i) == małe_litery[a]) {
            sprawdzanie2++;
        }
    }
  }
  return sprawdzanie2;
}

function duże(duże_litery) {
  for(i = 0; i < hasło.length; i++) {
    for(a = 0; a < duże_litery.length; a++) {
        if(hasło.charAt(i) == duże_litery[a]) {
            sprawdzanie3++;
        }
    }
  }
  return sprawdzanie3;
}

function znaki(znaki_specjalne) {
  for(i = 0; i < hasło.length; i++) {
    for(a = 0; a < znaki_specjalne.length; a++) {
        if(hasło.charAt(i) == znaki_specjalne[a]) {
            sprawdzanie4++;
        }
    }
  }
  return sprawdzanie4;
}

liczba(liczby);
znaki(znaki_specjalne);
małe(małe_litery);
duże(duże_litery);


if (hasło.length <= 4) {
  if (liczba(liczby) != 0 || znaki(znaki_specjalne) != 0 || małe(małe_litery) != 0 || duże(duże_litery) != 0) {
    alert("słabe hasło");
  }
  else {
    alert("słabe hasło");
  }
}
else if (hasło.length > 4 && hasło.length <= 8) {
  if (liczba(liczby) == 0 || znaki(znaki_specjalne) == 0 || małe(małe_litery) == 0 || duże(duże_litery) == 0) {
    alert("słabe hasło");
  }
  else {
    alert("średnie hasło");
  }
}
else {
  if (liczba(liczby) == 0 || znaki(znaki_specjalne) == 0 || małe(małe_litery) == 0 || duże(duże_litery) == 0) {
    alert("słabe hasło");
  }
  else {
    alert("silne hasło");
  }
}
