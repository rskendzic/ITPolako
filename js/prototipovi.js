/**
 * Objekti u JavaScriptu imaju ugrađeni mehanizam nasleđivanja 
 * kroz takozvano prototipsko nasleđivanje.
 */
const stanice = new Array();
stanice.push('Subotica', 'Novi Sad', 'Inđija', 'Beograd', 'Kraljevo', 'Niš');

function Voz(ime, tip, stanice) {
    this.ime = ime; 
    this.tip = tip;
    this.stanice = stanice; 
}

Voz.prototype.ispisiStanice = function(){
    this.stanice.forEach(stanica => {
        console.log(`Stanica: ${stanica}`)
    });
}

const putZaJug = new Voz('orijent ekspres', 'brzi', stanice);
putZaJug.ispisiStanice();
console.log(putZaJug.hasOwnProperty('ime'));