(async () => {
  try {
    let response = await fetch("http://localhost:3000/stanice", {
      method: "GET"
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const staniceAsync = await response.json();
    izlistajStanice(staniceAsync);
  } catch ({ message }) {
    console.error(message);
  }
})();
/**
 * @define {AJAX} - služi za dobavljanje i slanje podataka
 * posle inicijalnog učitavanja stranice
 * @define {JSON} - Format podataka (JavaScript Object Notation)
 *
 */

// const listaStranica = document.getElementById("stanice");

const izlistajStanice = stanice => {
  stanice.forEach(stanica => {
    const paragraf = document.createElement("p");
    paragraf.textContent = `${stanica.id}:${stanica.ime}`;
    listaStranica.appendChild(paragraf);
  });
};

// // let stanice = [];

// fetch("http://localhost:3000/stanice", { method: "GET" })
//   .then(response => response.json())
//   .then(staniceAsync => {
//     stanice = staniceAsync;
//     izlistajStanice();
//   });
