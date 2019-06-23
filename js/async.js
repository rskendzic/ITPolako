/**
 * @define {AJAX} - služi za dobavljanje i slanje podataka
 * posle inicijalnog učitavanja stranice
 * @define {JSON} - Format podataka (JavaScript Object Notation)
 *
 */

const listaStranica = document.getElementById("stanice");
let stanice = [];

const izlistajStanice = () => {
  stanice.forEach(stanica => {
    const paragraf = document.createElement("p");
    paragraf.textContent = `${stanica.id}:${stanica.ime}`;
    listaStranica.appendChild(paragraf);
  });
};

fetch("http://localhost:3000/stanice", { method: "GET" })
  .then(response => response.json())
  .then(staniceAsync => {
    stanice = staniceAsync;
    izlistajStanice();
  });
