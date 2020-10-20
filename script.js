const API_URL = "https://dog.ceo/api/breeds/image/random/3";
const randomDogsElement = document.querySelector(".random-dogs");
const goButton = document.querySelector(".go-button");
goButton.addEventListener("click", getRandomDogs);
const loadingElement = document.querySelector(".loading");
loadingElement.style.display = "none";

async function getRandomDogs() {
  randomDogsElement.innerHTML = "";

  loadingElement.style.display = "";

  const response = await fetch(API_URL);
  const json = await response.json();
  console.log(json.message);

  json.message.forEach((dogImage) => {
    // Potentially exposed to cross-site scripting
    // randomDogsElement.innerHTML += `
    //   <div class="column">
    //     <div class="card">
    //       <div class="card-image">
    //         <figure class="image">
    //           <img src="${dogImage}" alt="Placeholder image">
    //         </figure>
    //       </div>
    //     </div>
    //   </div>
    // `;

    const columnElement = document.createElement("div");
    columnElement.classList.add("column");
    randomDogsElement.appendChild(columnElement);

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    columnElement.appendChild(cardElement);

    const cardImageElement = document.createElement("div");
    cardImageElement.classList.add("card-image");
    cardElement.appendChild(cardImageElement);

    const figureElement = document.createElement("figure");
    figureElement.classList.add("image");
    // figureElement.classList.add("is-4by3");
    cardImageElement.appendChild(figureElement);

    const imageElement = document.createElement("img");
    imageElement.src = dogImage;
    figureElement.appendChild(imageElement);
  });

  loadingElement.style.display = "none";
}
