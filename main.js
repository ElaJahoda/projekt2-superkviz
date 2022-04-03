let kviz = document.querySelector('.kviz');
let otazka = document.querySelector('#otazka');
let moznosti = document.querySelector('#moznosti');
let vysledek = document.querySelector('#vysledek');
let hodnoceni = document.querySelector('#hodnoceni');
let poradi = document.getElementById('poradi');
let otazkaText = document.querySelector('h2');
let obrazekOtazky = document.getElementById('obrazek');  
let odpovedi = document.querySelector('#odpovedi');
// let odpoved0 = document.querySelector('li[data-odpoved="0"]'); funkční zápis pro atribut v elementu <li data-odpoved="0">
// let odpoved1 = document.querySelector('li[data-odpoved="1"]');
// let odpoved2 = document.querySelector('li[data-odpoved="2"]');
let odpoved0 = document.querySelector('#odpoved-0');
let odpoved1 = document.querySelector('#odpoved-1');
let odpoved2 = document.querySelector('#odpoved-2');

let kliknuteOdpovedi = []
let indexOtazky = 0;

let poleOtazek = [
    {otazka: 'prvni', obrazek: 'obrazky/moncicak.jpg', odpovedi: ['prvniO', 'druhaO', 'tretiO'], vyherniIndex: 2,},
    {otazka: 'druha', obrazek: 'obrazky/ovoce.jpg', odpovedi: ['prvniO', 'druhaO', 'tretiO'], vyherniIndex: 0,},
    {otazka: 'treti', obrazek: 'obrazky/pivo.jpg', odpovedi: ['prvniO', 'druhaO', 'tretiO'], vyherniIndex: 1,},
]

function klik0() {
    kontrolaOdpovedi(0, 0);
    indexOtazky++;
    document.querySelector('span').textContent++;   
    otazkaText.textContent = poleOtazek[indexOtazky].otazka;
    obrazekOtazky.src = poleOtazek[indexOtazky].obrazek;
    odpoved0.textContent = poleOtazek[indexOtazky].odpovedi[0];
    odpoved1.textContent = poleOtazek[indexOtazky].odpovedi[1];
    odpoved2.textContent = poleOtazek[indexOtazky].odpovedi[2];
}

function klik1() {
    kontrolaOdpovedi(indexOtazky, 0);
    indexOtazky++;
    document.querySelector('span').textContent++;   
    otazkaText.textContent = poleOtazek[indexOtazky].otazka;
    obrazekOtazky.src = poleOtazek[indexOtazky].obrazek;
    odpoved0.textContent = poleOtazek[indexOtazky].odpovedi[0];
    odpoved1.textContent = poleOtazek[indexOtazky].odpovedi[1];
    odpoved2.textContent = poleOtazek[indexOtazky].odpovedi[2];
}
function klik2() {
    kontrolaOdpovedi(indexOtazky, 0);
    indexOtazky++;
    document.querySelector('span').textContent++;   
    otazkaText.textContent = poleOtazek[indexOtazky].otazka;
    obrazekOtazky.src = poleOtazek[indexOtazky].obrazek;
    odpoved0.textContent = poleOtazek[indexOtazky].odpovedi[0];
    odpoved1.textContent = poleOtazek[indexOtazky].odpovedi[1];
    odpoved2.textContent = poleOtazek[indexOtazky].odpovedi[2];
}
// SLO BY TAKE, PAK JEN JEDNA ONCLICK FUNKCE NA VSECHNY 3 ODPOVEDI
// if (event.target.id === 'odpoved-0') {
//     kontrolaOdpovedi(indexOtazky, 0);
// } else if (event.target.id === 'odpoved-1') {
//     kontrolaOdpovedi(indexOtazky, 1);
// } else if (event.target.id === 'odpoved-2') {
//     kontrolaOdpovedi(indexOtazky, 2);
// }

function kontrolaOdpovedi (x, y) {
    let i = poleOtazek[x].vyherniIndex;
    if (i === y) {
        kliknuteOdpovedi.push('1');
        console.log(kliknuteOdpovedi);
    } else {
        kliknuteOdpovedi.push('0');
        console.log(kliknuteOdpovedi);
    }
}