let kviz = document.querySelector('.kviz');
let otazka = document.querySelector('#otazka');
let moznosti = document.querySelector('#moznosti');
let vysledek = document.querySelector('.vysledek');
let hodnoceni = document.querySelector('#hodnoceni');
let uspech = document.querySelector('#uspech');
let poradi = document.getElementById('poradi');
let poradiSpan = document.querySelector('span');
let otazkaText = document.querySelector('h2');
let obrazekOtazky = document.getElementById('obrazek');  
let odpovedi = document.querySelector('#odpovedi');
// let odpoved0 = document.querySelector('li[data-odpoved="0"]'); funkční zápis pro atribut v elementu <li data-odpoved="0">
// let odpoved1 = document.querySelector('li[data-odpoved="1"]');
// let odpoved2 = document.querySelector('li[data-odpoved="2"]');
let odpoved0 = document.querySelector('#odpoved-0');
let odpoved1 = document.querySelector('#odpoved-1');
let odpoved2 = document.querySelector('#odpoved-2');

let kliknuteOdpovedi = [];
let kliknuteOdpovediI = [];
let indexOtazky = 0;

let poleOtazek = [
    {otazka: 'Animovaný dětský televizní seriál Bing je...', 
    obrazek: 'obrazky/moncicak.jpg', 
    odpovedi: ['britského původu dle předloh knih Wilberta Vere Awdrya', 
                'amerického původu. Autory jsou Tad Stones a Alan Zaslove.', 
                'britského původu dle předlohy knih Teda Dewana.'], 
    vyherniIndex: 2,
    vysvetleni: ['Lokomotiva Tomáš', 'Rychlá rota', 'správně']
},
    {otazka: 'Která z postav do seriálu Bing nepatří?', 
    obrazek: 'obrazky/ovoce.jpg', 
    odpovedi: ['Clarabel', 'Flop', 'Gilly'], 
    vyherniIndex: 0,
    vysvetleni: ['Lokomotiva Tomáš', 'správně', 'správně'],
},
    {otazka: 'Jakou větou kočí každý díl seriálu?', 
    obrazek: 'obrazky/pivo.jpg', 
    odpovedi: ['Vstávat a cvičit. A proč? Protože je ráno.', 'To je Bingův svět.', 'Pospěš si Flope!'], 
    vyherniIndex: 1,
    vysvetleni: ['Králíci z klobouku', 'správně', 'První věta seriálu.'],
},
]

function klik(event) {
    if(poradiSpan.textContent <= 3) {
        if (event.target.id === 'odpoved-0') {
            kliknuteOdpovediI.push(0);
            kontrolaOdpovedi(indexOtazky, 0);}
        if (event.target.id === 'odpoved-1') {
            kliknuteOdpovediI.push(1);
            kontrolaOdpovedi(indexOtazky, 1);}
        if (event.target.id === 'odpoved-2') {
            kliknuteOdpovediI.push(2);
            kontrolaOdpovedi(indexOtazky, 2);}
        novaOtazka();
    }
}

function novaOtazka () {
    if(poradiSpan.textContent < 3) {
        indexOtazky++;
        poradiSpan.textContent++;   
        otazkaText.textContent = poleOtazek[indexOtazky].otazka;
        obrazekOtazky.src = poleOtazek[indexOtazky].obrazek;
        odpoved0.textContent = poleOtazek[indexOtazky].odpovedi[0];
        odpoved1.textContent = poleOtazek[indexOtazky].odpovedi[1];
        odpoved2.textContent = poleOtazek[indexOtazky].odpovedi[2];
    } else {
        konec();
    }
}

function kontrolaOdpovedi (x, y) {
    let i = poleOtazek[x].vyherniIndex;
    if (i === y) {
        kliknuteOdpovedi.push(1);
    } else {
        kliknuteOdpovedi.push(0);
    }
}

function konec() {
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    uspesnost();
    naplnHodnoceni();
}

function uspesnost() {
    if(kliknuteOdpovedi.length === soucetPole()){
        uspech.textContent = 'Spravne 3 otazky ze ' + poradiSpan.textContent + '. Uspel/-a si z ' + procentaUspesnost() + ' %.';
    } else if(soucetPole() === 2) {
        uspech.textContent = 'Spravne 2 otazky ze ' + poradiSpan.textContent + '. Uspel/-a si z ' + procentaUspesnost() + ' %.';
    } else if(soucetPole() === 1) {
        uspech.textContent = 'Spravne 1 otazku ze ' + poradiSpan.textContent + '. Uspel/-a si z ' + procentaUspesnost() + ' %.';
    } else if(soucetPole() === 0) {
        uspech.textContent = 'Vse spatne. Uspel/-a si z ' + procentaUspesnost() + '%.';
    }
}

function soucetPole() {
    var sum = kliknuteOdpovedi.reduce(function(a, b){
        return a + b;}, 0);
return sum;
}

function procentaUspesnost() {
    var procenta = Math.round((soucetPole() / kliknuteOdpovedi.length) * 100);
    return procenta
}

function naplnHodnoceni() {
    for (let i = 0; i < poleOtazek.length; i++) {
        let a = i + 1;       
        let y = kliknuteOdpovediI[i];
        let z = poleOtazek[i].vyherniIndex;
        let divHodnoceneOtazky = document.createElement('div');
        divHodnoceneOtazky.className = 'divHodnoceneOtazky';

        let otazkaH = document.createElement('ul');
        otazkaH.className = 'otazkaH';
        otazkaH.classList.add('hodnoceni-otazka');
        otazkaH.textContent = a + '. ' + poleOtazek[i].otazka;

        let zvolenaO = document.createElement('li');
        zvolenaO.className = 'zvolenaO';
        zvolenaO.classList.add('hodnoceni-odpovedi');
        zvolenaO.textContent = 'Tvoje odpověď: ' + poleOtazek[i].odpovedi[y];

        let spravnaO = document.createElement('li');
        spravnaO.className = 'spravnaO';
        spravnaO.classList.add('hodnoceni-odpovedi');
        if(poleOtazek[i].odpovedi[y] === poleOtazek[i].odpovedi[z]){
            spravnaO.textContent = 'To je SPRÁVNĚ.';
        } else {
            spravnaO.textContent = 'Správná odpověď: ' + poleOtazek[i].odpovedi[z];
        }

        hodnoceni.appendChild(divHodnoceneOtazky);
        divHodnoceneOtazky.appendChild(otazkaH);
        divHodnoceneOtazky.appendChild(zvolenaO);
        divHodnoceneOtazky.appendChild(spravnaO);
    }
}