/**
 * Closure je funkcija koja se izvršava unutar nekog okruženja koje sadrži jednu ili više lokalnih varijabli
 * i ima pristup tim varijablama. 
 */
const nizBrojeva = [1,2,3,4,5];

const sabiranje = broj1 => broj2 => console.log(broj1 + broj2);

const dodaj10 = sabiranje(10);

nizBrojeva.map(dodaj10);

stanice.push()

function Voz(ime, tip, stanice) {
	this.ime = ime;
	this.tip = tip;
	this.stanice = stanice;
}
Voz.prototype.ispisiStanice = function () {
	this.stanice.forEach(stanica => {
		console.log(stanica);
	});
}

const putZaJug = new Voz('orijent ekspres','brzi', stanice);

console.log(putZaJug);
console.log(putZaJug.hasOwnProperty('ime'));
console.log(putZaJug.ispisiStanice())