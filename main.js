let kviz = document.querySelector('.kviz');
let vysledek = document.querySelector('.vysledek');
let hodnoceni = document.querySelector('#hodnoceni');
let uspech = document.querySelector('#uspech');
let poradi = document.getElementById('poradi');
let otazkaText = document.querySelector('#otazka');
let obrazekOtazky = document.getElementById('obrazek');  
let odpovedi = document.querySelector('#odpovedi');

let kliknuteOdpovedi = [];
let spravneOdpovedi = 0;
let indexOtazky = 0;

let poleOtazek = [
    {otazka: 'Animovaný dětský televizní seriál Bing je...', 
    obrazek: 'obrazky/bing2.jpg', 
    odpovedi: ['britského původu.', 
                'amerického původu.', 
                'čínského původu.'], 
    vyherniIndex: 0,
},
    {otazka: 'Která z postav do seriálu Bing nepatří?', 
    obrazek: 'obrazky/bing0.jpg', 
    odpovedi: ['Clarabel', 'Flop', 'Gilly'], 
    vyherniIndex: 0,
},
    {otazka: 'Jakou větou končí každý díl seriálu?', 
    obrazek: 'obrazky/bing1.jpg', 
    odpovedi: ['Vstávat a cvičit.', 'To je Bingův svět.', 'Pospěš si Flope!'], 
    vyherniIndex: 1,
},
]

function novaOtazka() {
        poradi.textContent = `otazka ${indexOtazky + 1} y ${poleOtazek.length}`;
        otazkaText.textContent = poleOtazek[indexOtazky].otazka;
        obrazekOtazky.src = poleOtazek[indexOtazky].obrazek;
        for (i = 0; i < poleOtazek[indexOtazky].odpovedi.length; i++) {
            let odpovedList = document.createElement('li');
            odpovedList.dataset.odpoved = i;
            odpovedList.textContent = poleOtazek[indexOtazky].odpovedi[i];
            odpovedi.appendChild(odpovedList);
        }
}
novaOtazka()

odpovedi.addEventListener('click', klik);

function klik(event) {
    console.log(event);
    let kliknutaOdpoved = event.target.dataset.odpoved;
    kliknuteOdpovedi.push(parseInt(kliknutaOdpoved));
    if(kliknuteOdpovedi[indexOtazky] === poleOtazek[indexOtazky].vyherniIndex) {
        spravneOdpovedi++;
    }
    indexOtazky++;
    if(indexOtazky < poleOtazek.length) {
        let listOdpovediPole = odpovedi.querySelectorAll('li');
        listOdpovediPole.forEach((element) => element.remove());
        novaOtazka();
    } else {
        konec();
    }
}

function konec() {
    kviz.style.display = 'none';
    vysledek.style.display = 'block';
    uspesnost();
    naplnHodnoceni();
}

function uspesnost() {
        uspech.textContent = `Správně ${spravneOdpovedi} otázky ze ${poleOtazek.length}. Úspěšnost ${procentaUspesnost()} %.`;
}

function procentaUspesnost() {
    var procenta = Math.round((spravneOdpovedi / poleOtazek.length) * 100);
    return procenta
}

function naplnHodnoceni() {
    console.log(kliknuteOdpovedi);
    for (let i = 0; i < poleOtazek.length; i++) {
        let a = i + 1;       
        let y = kliknuteOdpovedi[i];
        let z = poleOtazek[i].vyherniIndex;
        let divHodnoceneOtazky = document.createElement('div');
        divHodnoceneOtazky.className = 'divHodnoceneOtazky';

        let otazkaH = document.createElement('ul');
        otazkaH.className = 'otazkaH';
        otazkaH.classList.add('hodnoceni-otazka');
        otazkaH.textContent = `${a}. ${poleOtazek[i].otazka}`;

        let zvolenaO = document.createElement('li');
        zvolenaO.className = 'zvolenaO';
        zvolenaO.classList.add('hodnoceni-odpovedi');
        zvolenaO.textContent = `Tvoje odpověď: ${poleOtazek[i].odpovedi[y]}`;

        let spravnaO = document.createElement('li');
        spravnaO.className = 'spravnaO';
        spravnaO.classList.add('hodnoceni-odpovedi');
        if(poleOtazek[i].odpovedi[y] === poleOtazek[i].odpovedi[z]){
            spravnaO.textContent = `To je SPRÁVNĚ.`;
        } else {
            spravnaO.textContent = `Správná odpověď: ${poleOtazek[i].odpovedi[z]}`;
        }

        hodnoceni.appendChild(divHodnoceneOtazky);
        divHodnoceneOtazky.appendChild(otazkaH);
        divHodnoceneOtazky.appendChild(zvolenaO);
        divHodnoceneOtazky.appendChild(spravnaO);
    }
}