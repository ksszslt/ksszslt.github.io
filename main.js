const ujJatek = document.querySelector('#uj_jatek');
const ko = document.querySelector('#ko');
const papir = document.querySelector('#papir');
const ollo = document.querySelector('#ollo');
const sajatValasztas = document.querySelector('#sajat');
const gepValasztas = document.querySelector('#gep');
const relacio = document.querySelector('#relacio');
const nyert = document.querySelector('#nyert');
const dontetlen = document.querySelector('#dontetlen');
const vesztett = document.querySelector('#vesztett');

ko.addEventListener('click', klikk);
papir.addEventListener('click', klikk);
ollo.addEventListener('click', klikk);
ujJatek.addEventListener('click', nullazo);

let nyertSzamlalo = 0;
let dontetlenSzamlalo = 0;
let vesztettSzamlalo = 0;

function klikk(event) {
    sajatValasztas.src = event.target.src;
    const gepSzam = Math.floor(Math.random() * 3) + 1;

    switch (gepSzam) {
        case 1:
            gep.src = 'images/ko.png';
            if (event.target.id == 'papir') {
                relacio.src = 'images/nagyobb.png';
                nyertSzamlalo++;
            } else if (event.target.id == 'ollo') {
                relacio.src = 'images/kisebb.png';
                vesztettSzamlalo++;
            } else {
                relacio.src = 'images/egyenlo.png';
                dontetlenSzamlalo++;
            }
            break;
        case 2:
            gep.src = 'images/papir.png';
            if (event.target.id == 'ollo') {
                relacio.src = 'images/nagyobb.png';
                nyertSzamlalo++;
            } else if (event.target.id == 'ko') {
                relacio.src = 'images/kisebb.png';
                vesztettSzamlalo++;
            } else {
                relacio.src = 'images/egyenlo.png';
                dontetlenSzamlalo++;
            }
            break;
        case 3:
            gep.src = 'images/ollo.png';
            if (event.target.id == 'ko') {
                relacio.src = 'images/nagyobb.png';
                nyertSzamlalo++;
            } else if (event.target.id == 'papir') {
                relacio.src = 'images/kisebb.png';
                vesztettSzamlalo++;
            } else {
                relacio.src = 'images/egyenlo.png';
                dontetlenSzamlalo++;
            }
            break;
        default:
            break;
    }

    nyert.innerHTML = nyertSzamlalo;
    vesztett.innerHTML = vesztettSzamlalo;
    dontetlen.innerHTML = dontetlenSzamlalo;
}

function nullazo() {
    sajatValasztas.src = 'images/ures.png';
    gepValasztas.src = 'images/ures.png';
    relacio.src = 'images/ures.png';
    nyertSzamlalo = 0;
    vesztettSzamlalo = 0;
    dontetlenSzamlalo = 0;
    nyert.innerHTML = nyertSzamlalo;
    vesztett.innerHTML = vesztettSzamlalo;
    dontetlen.innerHTML = dontetlenSzamlalo;
}