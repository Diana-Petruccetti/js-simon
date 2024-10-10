
// TRACCIA
/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input
in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti
e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri,
basta che ne indovini il più possibile.
*/

/*
// STRUMENTI

variabili (stringhe, numeri, booleani)
cicli (for)
array
if (condizioni)
funzioni
 */

// generazione numeri casuali (come generarli e come metterli in un array)
// dopo averli messi in pagina, come si fanno sparire?

for (var i = 0; i < 5; i++) {
  document.getElementById("number").innerHTML = Math.floor(Math.random() * 99);
  console.log("number");
  }