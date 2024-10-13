
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


// Fase 1: Raccolta Dati
const displayEl = document.querySelector('.display');
console.log(displayEl);

const guessEl = document.querySelector('.guess_numbers');
console.log(guessEl);

const formEl = document.querySelector('.form');
console.log(formEl);

/* Genera numeri random */
const randNumbers = generateRandomNumbers(5);
console.log(randNumbers);

/* stampali nel DOM */
displayEl.innerHTML = randNumbers.join(',');

setTimeout(() => {
    /* Nascondi i numeri dopo 5 secondi */
    displayEl.innerHTML = '';
    /* Mostra il form dopo 5 secondi */
    guessEl.classList.remove('d-none');

}, 5000)

let guess_numbers;
/* Metti un evento al form */
formEl.addEventListener('submit', function (e) {
    e.preventDefault()
    /* Leggi le values submitted */
    guess_numbers = [
        Number(e.target.numb_1.value),
        Number(e.target.numb_2.value),
        Number(e.target.numb_3.value),
        Number(e.target.numb_4.value),
        Number(e.target.numb_5.value),
    ]

    console.log('numeri da indovinare', randNumbers);

    console.log('numeri indovinati', guess_numbers);

    const guessedCorrectly = findScore(guess_numbers, randNumbers);
    console.log(guessedCorrectly, guessedCorrectly.length);
    /* Stampa l'output */
    printScore(displayEl, guessedCorrectly, guessEl)

})

function printScore(displayEl, guessedCorrectly, guessEl){
    displayEl.innerHTML = `Punteggio:${guessedCorrectly.length} | Hai trovato: ${guessedCorrectly.join(',')}`
    guessEl.classList.add('d-none')
}

function findScore(guess_numbers, randNumbers) {
    /* Salva i numeri indovinati correttamente */
    const guessedCorrectly = []
    /* Controlla se il numero indovinato è incluso */
    for (let index = 0; index < guess_numbers.length; index++) {
        const numb = guess_numbers[index];

        /* Controlla se i numeri random includono i numeri submitted */
        if (randNumbers.includes(numb)){
            /* Se trovato, salva su un altro array */
            guessedCorrectly.push(numb)
        }

    }
    return guessedCorrectly;
}

function generateRandomNumbers(max){

    const randNumbers = []
    for (let i = 0; i < max; i++) {
        const numb = Math.ceil(Math.random() * 99)
        randNumbers.push(numb)
    }

    return randNumbers

}