/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


/*Creo una variabile con un prompt per ottenere in input i chilometri e una per l'età del passeggero*/
const questionKm = prompt("Benvenuto a bordo del Boolean Express, quanti KM vuoi percorrere?(Sei pregato di inserire solo numeri es: 4,5)");
const questionAge = prompt("Quanti anni hai?(Sei pregato di inserire solo numeri es: 29)");


/*Verifico che le due variabili contengano dei caratteri numerici*/
if (!isNaN(questionKm) && !isNaN(questionAge)) {

/*Creo due variabili per convertire i numeri ottenuti dai prompt precedenti da tipo stringa a tipo numerico, così da poter eseguire tranquillamente tutte le operazioni matematiche*/
    const numberKm = parseFloat(questionKm);
    const numberAge = parseFloat(questionAge);

/*Creo la variabile per il prezzo finale senza darle ancora un valore poichè questo cambierà in base all'età inserita*/
    let numberPrice


    if (numberAge<=17) {
        numberPrice = (numberKm * 0.21) * 0.8;
        document.getElementById("cardInfo").innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${numberKm}</li>
        <li class="list-group-item">Età Passeggero: ${numberAge}</li>
        <li class="list-group-item">Sconto applicato: Minorenne (-20%)</li>
        <li class="list-group-item">Prezzo finale: €${numberPrice}</li>
        </ul>`;
    }

    else if (numberAge>65) {
        numberPrice = (numberKm * 0.21) * 0.6;
        document.getElementById("cardInfo").innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${numberKm}</li>
        <li class="list-group-item">Età Passeggero: ${numberAge}</li>
        <li class="list-group-item">Sconto applicato: Over 65 (-40%)</li>
        <li class="list-group-item">Prezzo finale: €${numberPrice}</li>
        </ul>`
    }

    else {
        numberPrice = numberKm * 0.21;
        document.getElementById("cardInfo").innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${numberKm}</li>
        <li class="list-group-item">Età Passeggero: ${numberAge}</li>
        <li class="list-group-item">Sconto applicato: Nessuno</li>
        <li class="list-group-item">Prezzo finale: €${numberPrice}</li>
        </ul>`
    }
}
else {
    document.getElementById("cardInfo").innerHTML = `<p class="text-danger fw-bold"> ATTENZIONE !! Hai inserito caratteri NON numerici nei prompt precedenti, aggiorna la pagina e inserisci le informazioni corrette </p>`
}

