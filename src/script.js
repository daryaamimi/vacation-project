(function () {
  function removeCard(event) {
    let card = event.target.parentElement.parentElement;
    card.remove();
  }

  const destForm = document.querySelector("#destination-form");

  destForm.addEventListener("submit", formOper);

  function formOper(event) {
    event.preventDefault();
    let cardContainer = document.querySelector(".card-container");

    let destName = document.querySelector("#name").value;
    let destLoc = document.querySelector("#location").value;
    let destPhoto = document.querySelector("#photo").value;
    let destDesc = document.querySelector("#description").value;

    if (cardContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = "My wish List";
    }

    let buildingCard = addCard(destName, destLoc, destPhoto, destDesc);

    cardContainer.appendChild(buildingCard);
  }

  function addCard(destName, destLoc, destPhoto, destDesc) {
    let card = document.createElement("div");
    card.classList.add("card");

    const constantPhotoUrl = `signpost.jpg`;
    let img = document.createElement("img");
    if (destPhoto.length === 0) {
      img.setAttribute("src", constantPhotoUrl);
    } else {
      img.setAttribute("src", destPhoto);
    }
    img.setAttribute("alt", destName);
    img.setAttribute("width", "303");
    img.setAttribute("height", "200");
    img.setAttribute("class", "img-body");

    card.appendChild(img);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardName = document.createElement("h3");
    cardName.innerText = destName;
    cardBody.appendChild(cardName);

    let cardLoc = document.createElement("h4");
    cardLoc.innerText = destLoc;
    cardBody.appendChild(cardLoc);

    let cardDesc = document.createElement("p");
    cardDesc.innerText = destDesc;
    cardBody.appendChild(cardDesc);

    if (destPhoto.length !== 0) {
      let ommitCard = document.createElement("button");
      ommitCard.innerText = "Remove";
      ommitCard.addEventListener("click", removeCard);
      cardBody.appendChild(ommitCard);
    }

    card.appendChild(cardBody);

    return card;
  }
})();
