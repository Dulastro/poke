// function createNinja(ninja) {
//   const card = document.createElement("div");
//   card.classList.add("country");

//   const ninjaName = ninja.name;
//   const name = document.createElement("h2");
//   name.innerHTML = ninjaName;

//   const ninjaImg = document.createElement("img");

//   ninjaImg.src = ninja.images[0];
//   ninjaImg.alt = ninjaImg;

//   card.append(name, ninjaImg);
//   document.querySelector("#countries").append(card);
// }

// async function getCountries() {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const countries = await response.json();

//   countries.forEach(createCountryCard);
// }
