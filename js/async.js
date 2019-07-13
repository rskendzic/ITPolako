/**
 * @define {AJAX} - služi za dobavljanje i slanje podataka
 * posle inicijalnog učitavanja stranice
 * @define {JSON} - Format podataka (JavaScript Object Notation)
 *
 */

const listaStranica = document.getElementById("stanice");
let stanice = [];

const izlistajStanice = stanice => {
  stanice.forEach(stanica => {
    const paragraf = document.createElement("p");
    paragraf.textContent = `${stanica.id}:${stanica.ime}`;
    listaStranica.appendChild(paragraf);
  });
};

const dobaviStanice = async () => {
  try {
    const response = await fetch("http://localhost:3000/stanice", {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(`OVO JE NASA GRESKA: ${response.statusText}`);
    }
    const stanice = await response.json();
    izlistajStanice(stanice);
  } catch (error) {
    console.error(error.message);
  }
};

dobaviStanice();
